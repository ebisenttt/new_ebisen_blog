import { ImageResponse } from 'next/og'

import { TITLE } from '@/constants'
import { Basic as BasicOpenGraph } from '@/components'

export const alt = TITLE
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(<BasicOpenGraph />, { ...size })
}
