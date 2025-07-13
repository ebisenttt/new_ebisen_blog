import fs from 'fs'
import { join } from 'path'

type Params = {
  rootPath?: string
  path: string
}

export const readFile = ({ rootPath = process.cwd(), path }: Params) => {
  try {
    return fs.readFileSync(join(rootPath, path), 'utf8')
  } catch {
    return null
  }
}
