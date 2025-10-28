import { MetadataRoute } from 'next'

import { parseISO } from '@/lib/date'

import { getAllPosts } from '@entities/post/model/api/server/queries'

export default async function generateSitemaps(): Promise<MetadataRoute.Sitemap> {
  return (await getAllPosts()).map((post) => ({
    url: `https://ebisenttt.net/posts/${post.filename}`,
    lastModified: parseISO(post.date),
  }))
}
