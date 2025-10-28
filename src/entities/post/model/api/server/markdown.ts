import matter from 'gray-matter'

import markdownToHtml from '@/lib/markdownToHtml'
import { readFile as defaultReadFile } from '@/shared/lib/server/readFile'

import { postsDirectory } from '@shared/lib/file'

import type { Post } from '../../types'

type GetPostOptions = {
  readFileFn?: (path: string) => string | null
  postsDirectory?: string
}

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

export type { GetPostOptions }
