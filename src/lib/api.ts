import matter from 'gray-matter'

import { getPostFiles, postsDirectory } from '@/utils/file'
import { readFile as defaultReadFile } from '@/utils/readFile'

import type { Post } from '@/types/post'

import markdownToHtml from './markdownToHtml'

export async function convertMarkdownToPost({
  markdown,
  filename,
}: {
  markdown: string
  filename: string
}): Promise<Post> {
  const { data, content } = matter(markdown)

  if (!data.title || !data.date || !content) {
    throw new Error(
      `Postの必須項目がありません: ${filename} title: ${data.title}, date: ${data.date}, content: ${content}`,
    )
  } else if (
    typeof data.title !== 'string' ||
    typeof data.date !== 'string' ||
    data.title === '' ||
    data.date === ''
  ) {
    throw new Error(`Postのタイトルまたは日付が不正です: ${filename}`)
  } else if (data.tag && !Array.isArray(data.tag)) {
    throw new Error(`Postのタグは配列でなければなりません: ${filename}`)
  }

  const htmlContent = await markdownToHtml(content)

  return {
    title: data.title,
    date: data.date,
    content: htmlContent,
    filename,
    tags: data.tag ?? [],
  }
}

type GetPostOptions = {
  readFileFn?: (path: string) => string | null
  postsDirectory?: string
}

export async function getPostByFilename(
  filename: string,
  options: GetPostOptions = {},
): Promise<Post | null> {
  const { readFileFn = defaultReadFile, postsDirectory: dir = postsDirectory } =
    options
  const filenameWithoutExtension = filename.replace(/\.md$/, '')
  const fullPath = `${dir}/${filenameWithoutExtension}.md`
  const fileContents = readFileFn(fullPath)

  if (fileContents === null) {
    return null
  }

  return await convertMarkdownToPost({
    markdown: fileContents,
    filename: filenameWithoutExtension,
  })
}

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
