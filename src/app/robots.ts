import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://ebisenttt.net/sitemap.xml',
      'https://ebisenttt.net/posts/sitemap.xml',
    ],
  }
}
