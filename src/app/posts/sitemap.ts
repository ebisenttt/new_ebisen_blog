import { MetadataRoute } from 'next'

import { parseISO } from '@/lib/date'
import { getAllPosts } from '@/lib/api'

export default async function generateSitemaps(): Promise<MetadataRoute.Sitemap> {
  return getAllPosts().map((post) => ({
    url: `https://ebisenttt.net/posts/${post.filename}`,
    lastModified: parseISO(post.date),
  }))
}
