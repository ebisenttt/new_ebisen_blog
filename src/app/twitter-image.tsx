import { ImageResponse } from 'next/og'

import { Basic as BasicOpenGraph } from '@shared/ui/OpenGraph'
import { TITLE } from '@shared/config'

export const alt = TITLE
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(<BasicOpenGraph />, { ...size })
}
