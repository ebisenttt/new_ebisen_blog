import { now } from '@/lib/date'

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ebisenttt.net',
      lastModified: now,
    },
  ]
}
