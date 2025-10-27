import { getPostFiles, postsDirectory } from '@shared/lib/file'

import type { Post } from '@entities/post/model'

import { fetchNotePosts } from './note'
import { getPostByFilename, type GetPostOptions } from './markdown'

export async function getAllPosts(
  options: GetPostOptions = {},
): Promise<Post[]> {
  const dir = options.postsDirectory ?? postsDirectory
  const files = getPostFiles(dir)
  const posts = await Promise.all(
    files.map((filename: string) => getPostByFilename(filename, options)),
  )
  return posts
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => {
      if (post1.date > post2.date) return -1
      if (post1.date < post2.date) return 1
      return 0
    })
}

export async function getAllPostsMerged(
  options: GetPostOptions = {},
): Promise<Post[]> {
  const local = await getAllPosts(options)
  try {
    const external = await fetchNotePosts()
    const map = new Map(local.map((p) => [p.filename, p]))
    for (const p of external) {
      if (!map.has(p.filename)) map.set(p.filename, p)
    }
    return Array.from(map.values()).sort((a, b) =>
      a.date > b.date ? -1 : a.date < b.date ? 1 : 0,
    )
  } catch {
    return local
  }
}
