import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { getAllPosts } from '../src/lib/api'
import { DESCRIPTION, TITLE } from '../src/constants'

async function main() {
  const posts = await getAllPosts()
  const baseUrl = process.env.VERCEL_URL
    ? 'https://' + process.env.VERCEL_URL
    : 'http://localhost:3000'

  const items = posts
    .map(
      (post) => `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${baseUrl}/posts/${post.filename}</link>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>
    `,
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${TITLE}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(DESCRIPTION)}</description>
    <ttl>${60 * 24}</ttl>
    ${items}
  </channel>
</rss>`

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), xml, 'utf8')
  console.log('RSS generated!')
}

function escapeXml(str: string): string {
  return str.replace(/[<>&"']/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case '"':
        return '&quot;'
      case "'":
        return '&apos;'
      default:
        return c
    }
  })
}

main()
