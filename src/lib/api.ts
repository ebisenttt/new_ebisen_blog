import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

import { POSTS_DIRECTORY_NAME } from '@/constants'

import type { Post } from '@/types/post'

const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME)

function getPostFiles() {
  return fs.readdirSync(postsDirectory)
}

export function getPostByFilename(filename: string): Post {
  const filenameWithoutExtension = filename.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${filenameWithoutExtension}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    title: data.title ?? '',
    date: data.date ?? '',
    content: content,
    filename: filenameWithoutExtension,
    tags: data.tag ?? [],
  }
}

export function getAllPosts() {
  return getPostFiles()
    .map((slug) => getPostByFilename(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
