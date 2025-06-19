import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

import { POSTS_DIRECTORY_NAME } from '@/constants'
import { readFile as defaultReadFile } from '@/utils/readFile'

import type { Post } from '@/types/post'

const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME)

function getPostFiles(directory: string = postsDirectory) {
  return fs.readdirSync(directory)
}

export function convertMarkdownToPost({
  markdown,
  filename,
}: {
  markdown: string
  filename: string
}): Post {
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

  return {
    title: data.title,
    date: data.date,
    content: content,
    filename,
    tags: data.tag ?? [],
  }
}

type GetPostOptions = {
  readFileFn?: (path: string) => string | null
  postsDirectory?: string
}

export function getPostByFilename(
  filename: string,
  options: GetPostOptions = {},
): Post | null {
  const { readFileFn = defaultReadFile, postsDirectory: dir = postsDirectory } =
    options
  const filenameWithoutExtension = filename.replace(/\.md$/, '')
  const fullPath = join(dir, `${filenameWithoutExtension}.md`)
  const fileContents = readFileFn(fullPath)

  if (fileContents === null) {
    return null
  }

  return convertMarkdownToPost({
    markdown: fileContents,
    filename: filenameWithoutExtension,
  })
}

export function getAllPosts(options: GetPostOptions = {}): Post[] {
  const dir = options.postsDirectory ?? postsDirectory
  return getPostFiles(dir)
    .flatMap((filename) => getPostByFilename(filename, options) ?? [])
    .sort((post1, post2) =>
      post1 !== null && post2 !== null && post1.date > post2.date ? -1 : 1,
    )
}
