import fs from 'fs'
import { join } from 'path'

import { POSTS_DIRECTORY_NAME } from '@/shared/config'

export const postsDirectory = join(/*turbopackIgnore: true*/ process.cwd(), POSTS_DIRECTORY_NAME)

export function getPostFiles(directory: string = postsDirectory) {
  return fs.readdirSync(directory)
}
