import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

import { POSTS_DIRECTORY_NAME } from '@/constants'
import { readFile } from '@/utils/readFile'

import type { Post } from '@/types/post'

const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME)

function getPostFiles() {
  return fs.readdirSync(postsDirectory)
}

export function getPostByFilename(filename: string): Post | null {
  const filenameWithoutExtension = filename.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${filenameWithoutExtension}.md`)
  const fileContents = readFile(fullPath)

  if (fileContents === null) {
    return null
  }

  const { data, content } = matter(fileContents)

  if (!data.title || !data.date || !content) {
    throw new Error(`Postの必須項目がありません: ${filename}`)
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
    filename: filenameWithoutExtension,
    tags: data.tag ?? [],
  }
}

export function getAllPosts() {
  return getPostFiles()
    .flatMap((slug) => getPostByFilename(slug) ?? [])
    .sort((post1, post2) =>
      post1 !== null && post2 !== null && post1.date > post2.date ? -1 : 1,
    )
}
