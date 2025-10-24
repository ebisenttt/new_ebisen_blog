/* note.com API からコンテンツ一覧を取得し、既存の Post 型へマッピングする */

import type { Post } from '@shared/types/post'

const NOTE_ENDPOINT =
  'https://note.com/api/v2/creators/ebisen_ttt/contents?kind=note&page='

// filename に外部URLをエンコードして格納する（Post型拡張を避けるため）
const EXTERNAL_PREFIX = 'note__'

export function encodeExternalFilename(url: string): string {
  // base64url で安全にエンコード
  const b64 = Buffer.from(url, 'utf-8').toString('base64')
  const b64url = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  return `${EXTERNAL_PREFIX}${b64url}`
}

export function decodeExternalUrl(filename: string): string | null {
  if (!filename.startsWith(EXTERNAL_PREFIX)) return null
  const b64url = filename.slice(EXTERNAL_PREFIX.length)
  const pad = b64url.length % 4 === 0 ? '' : '='.repeat(4 - (b64url.length % 4))
  const b64 = b64url.replace(/-/g, '+').replace(/_/g, '/') + pad
  try {
    return Buffer.from(b64, 'base64').toString('utf-8')
  } catch {
    return null
  }
}

type NoteHashtag = {
  hashtag?: {
    name?: string
  }
}

type NoteContent = {
  // タイトル
  name?: string
  title?: string
  // 日付（camelCase）
  createdAt?: string
  publishAt?: string
  publishedAt?: string
  // URL
  url?: string
  noteUrl?: string
  slug?: string
  // タグ
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

export async function fetchNotePosts(): Promise<Post[]> {
  const all: Post[] = []

  // ページング: page=1 から始め、空配列が返るまで継続
  // （APIの仕様に応じて has_next があればそれを使う）
  for (let page = 1; ; page += 1) {
    const url = `${NOTE_ENDPOINT}${page}`
    let json: NoteListResponse | null = null
    try {
      const res = await fetch(url, { next: { revalidate: 86400 } })
      if (!res.ok) break
      json = (await res.json()) as NoteListResponse
    } catch {
      // 取得失敗時: 現在までの分を返す
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

    // URL 重複排除（同一URLのダブりを除く）
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

export const __noteInternal = {
  EXTERNAL_PREFIX,
  encodeExternalFilename,
  decodeExternalUrl,
}
