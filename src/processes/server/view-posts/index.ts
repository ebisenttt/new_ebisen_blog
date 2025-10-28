import type { Post } from '@shared/types/post'

import { getAllPostsMerged } from '@entities/post/model/api/server/queries'

import { createPostLinkProps } from '@features/posts/open-external'
import {
  collectTagStats,
  sortTagsByCount,
  selectInitialTag,
  type TagStats,
} from '@features/posts/filter-by-tag'

export type HomePostsViewModel = {
  posts: Array<Post & { href: string; externalUrl: string | null }>
  rawPosts: Post[]
  tagStats: TagStats
  sortedTags: string[]
  initialTag: string
}

export async function getHomePostsViewModel(): Promise<HomePostsViewModel> {
  const allPosts = await getAllPostsMerged()
  const normalizedPosts = allPosts.filter((post): post is Post => post !== null)

  const postsWithLinks = normalizedPosts.map((post) => ({
    ...post,
    ...createPostLinkProps(post),
  }))

  const tagStats = collectTagStats(normalizedPosts)
  const sortedTags = sortTagsByCount(tagStats)
  const initialTag = selectInitialTag(sortedTags)

  return {
    posts: postsWithLinks,
    rawPosts: normalizedPosts,
    tagStats,
    sortedTags,
    initialTag,
  }
}
