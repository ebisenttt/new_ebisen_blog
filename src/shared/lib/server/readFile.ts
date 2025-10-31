import fs from 'fs'

export const readFile = (path: string) => {
  try {
    return fs.readFileSync(path, 'utf8')
  } catch {
    return null
  }
}
