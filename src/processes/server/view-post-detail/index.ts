import markdownToHtml from '@/lib/markdownToHtml'

import { getAllPosts } from '@entities/post/model/api/server/queries'
import { getPostByFilename } from '@entities/post/model/api/server/markdown'
import type { Post } from '@entities/post'

export type PostDetailViewModel = {
  post: Post
  contentHtml: string
}

export async function getPostDetailViewModel(
  filename: string,
): Promise<PostDetailViewModel | null> {
  const post = await getPostByFilename(filename)

  if (post === null) {
    return null
  }

  const contentHtml = await markdownToHtml(post.content)

  return {
    post,
    contentHtml,
  }
}

export async function listPostFilenames(): Promise<string[]> {
  const posts = await getAllPosts()
  return posts.map((post) => post.filename)
}

export async function getPostDetailMetadata(
  filename: string,
): Promise<{ title: string } | null> {
  const post = await getPostByFilename(filename)

  if (post === null) {
    return null
  }

  return {
    title: post.title,
  }
}
