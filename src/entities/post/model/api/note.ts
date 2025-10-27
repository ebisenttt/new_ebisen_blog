import type { Post } from '../types'

import { decodeExternalUrl, encodeExternalFilename } from '../helpers'

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
        const noteUrl = pickUrl(item)
        if (!title || !date || !noteUrl) return null
        const tags = (item.hashtags ?? [])
          .map((h) => h.hashtag?.name)
          .filter((name): name is string => !!name)
          .map((name) => name.replace(/^#/, ''))
        return {
          title,
          date,
          content: '',
          filename: encodeExternalFilename(noteUrl),
          tags,
        }
      })
      .filter((post): post is Post => post !== null)

    const seen = new Set<string>()
    mapped.forEach((post) => {
      const externalUrl = decodeExternalUrl(post.filename)
      if (!externalUrl) return
      if (seen.has(externalUrl)) return
      seen.add(externalUrl)
      all.push(post)
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
  const date = item.publishAt ?? item.publishedAt ?? item.createdAt
  return date ?? null
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
