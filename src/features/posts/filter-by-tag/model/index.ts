import type { Post } from '@entities/post/model'

export type TagStats = Record<string, number>

export function collectTagStats(posts: Post[]): TagStats {
  return posts.reduce<TagStats>((stats, post) => {
    const tags = post.tags ?? []
    tags.forEach((tag) => {
      if (!tag) return
      stats[tag] = (stats[tag] ?? 0) + 1
    })
    return stats
  }, {})
}

export function sortTagsByCount(stats: TagStats): string[] {
  return Object.entries(stats)
    .sort((a, b) => {
      const [tagA, countA] = a
      const [tagB, countB] = b
      if (countA === countB) {
        return tagA.localeCompare(tagB)
      }
      return countB - countA
    })
    .map(([tag]) => tag)
}

export function filterPostsByTag(posts: Post[], tag: string): Post[] {
  if (!tag) return []
  return posts.filter((post) => post.tags?.includes(tag))
}

export function selectInitialTag(sortedTags: string[]): string {
  return sortedTags[0] ?? ''
}
