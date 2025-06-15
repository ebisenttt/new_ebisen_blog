import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

import { POSTS_DIRECTORY_NAME } from '@/constants'

const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME)

function getPostFiles() {
  return fs.readdirSync(postsDirectory)
}

export function getPostByFilename(filename: string, fields: string[] = []) {
  const realSlug = filename.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Record<string, string> = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  return (
    getPostFiles()
      .map((slug) => getPostByFilename(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  )
}
