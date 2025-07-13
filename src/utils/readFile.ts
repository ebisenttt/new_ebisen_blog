import fs from 'fs'

export const readFile = (path: string) => {
  console.log({ path })

  try {
    return fs.readFileSync(path, 'utf8')
  } catch {
    console.log('File not found:', path)
    return null
  }
}
