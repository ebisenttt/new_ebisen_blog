import type { Post } from '../../types'

import { decodeExternalUrl, encodeExternalFilename } from '../../helpers'

const QIITA_ENDPOINT = 'https://qiita.com/api/v2/users/ebisenttt/items?page='

export async function fetchQiitaPosts(): Promise<Post[]> {
  const all: Post[] = []

  for (let page = 1; ; page += 1) {
    const url = `${QIITA_ENDPOINT}${page}&per_page=100`
    let json: QiitaItem[] | null = null
    try {
      const res = await fetch(url, { next: { revalidate: 86400 } })
      if (!res.ok) break
      json = (await res.json()) as QiitaItem[]
    } catch {
      break
    }

    if (!Array.isArray(json) || json.length === 0) break

    const mapped = json
      .map<Post | null>((item) => {
        const title = item.title ?? null
        const date = item.created_at ?? null
        const url = item.url ?? null
        if (!title || !date || !url) return null
        const tags = (item.tags ?? [])
          .map((t) => t.name)
          .filter((name): name is string => !!name)

        return {
          title,
          date,
          content: '',
          filename: encodeExternalFilename(url),
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

    // Qiita returns empty array if page is out of range, or fewer items than per_page if it's the last page.
    if (json.length < 100) break
  }

  return all
    .slice()
    .sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
}

type QiitaTag = {
  name?: string
  versions?: string[]
}

type QiitaItem = {
  rendered_body?: string
  body?: string
  coediting?: boolean
  comments_count?: number
  created_at?: string
  group?: unknown
  id?: string
  likes_count?: number
  private?: boolean
  reactions_count?: number
  tags?: QiitaTag[]
  title?: string
  updated_at?: string
  url?: string
  user?: unknown
  page_views_count?: number
  team_membership?: unknown
  organization_url_name?: unknown
  slide?: boolean
}
