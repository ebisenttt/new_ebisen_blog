import {
  decodeExternalUrl,
  encodeExternalFilename,
  type Post,
} from '@entities/post/model'

const NOTE_ENDPOINT =
  'https://note.com/api/v2/creators/ebisen_ttt/contents?kind=note&page='

export async function fetchNotePosts(): Promise<Post[]> {
  const all: Post[] = []

  for (let page = 1; ; page += 1) {
    const url = `${NOTE_ENDPOINT}${page}`
    let json: NoteListResponse | null = null
    try {
      const res = await fetch(url, { next: { revalidate: 86400 } })
      if (!res.ok) break
      json = (await res.json()) as NoteListResponse
    } catch {
      break
    }

    const contents = json?.data?.contents ?? []
    if (contents.length === 0) break

    const mapped = contents
      .map<Post | null>((item) => {
        const title = pickTitle(item)
        const date = pickDate(item)
        const url = pickUrl(item)
        if (!title || !date || !url) return null
        const tags = (item.hashtags ?? [])
          .map((h) => h.hashtag?.name)
          .filter((n): n is string => !!n)
          .map((n) => n.replace(/^#/, ''))
        return {
          title,
          date,
          content: '',
          filename: encodeExternalFilename(url),
          tags,
        }
      })
      .filter((p): p is Post => p !== null)

    const seen = new Set<string>()
    mapped.forEach((p) => {
      const extUrl = decodeExternalUrl(p.filename)
      if (!extUrl) return
      if (seen.has(extUrl)) return
      seen.add(extUrl)
      all.push(p)
    })

    if (json?.data?.isLastPage) break
  }

  return all
    .slice()
    .sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
}

type NoteHashtag = {
  hashtag?: {
    name?: string
  }
}

type NoteContent = {
  name?: string
  title?: string
  createdAt?: string
  publishAt?: string
  publishedAt?: string
  url?: string
  noteUrl?: string
  slug?: string
  hashtags?: NoteHashtag[]
}

type NoteListResponse = {
  data?: {
    contents?: NoteContent[]
    isLastPage?: boolean
    totalCount?: number
  }
}

function pickTitle(item: NoteContent): string | null {
  return item.title ?? item.name ?? null
}

function pickDate(item: NoteContent): string | null {
  const d = item.publishAt ?? item.publishedAt ?? item.createdAt
  return d ?? null
}

function pickUrl(item: NoteContent): string | null {
  return item.url ?? item.noteUrl ?? null
}

export const __fetchNoteInternal = {
  NOTE_ENDPOINT,
  pickTitle,
  pickDate,
  pickUrl,
}
