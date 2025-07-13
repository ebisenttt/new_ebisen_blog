import { ImageResponse } from 'next/og'

import { TITLE } from '@/constants'
import { getPostByFilename } from '@/lib/api'
import {
  Basic as BasicOpenGraph,
  Wrapper as OpenGraphWrapper,
  Logo,
} from '@/components'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

type Props = {
  params: Promise<{
    name: string
  }>
}

export default async function Image({ params }: Props) {
  const { name } = await params
  const post = await getPostByFilename(name)

  if (post === null) {
    return new ImageResponse(<BasicOpenGraph />, { ...size })
  }

  return new ImageResponse(
    (
      <OpenGraphWrapper style={{ position: 'relative' }}>
        <p style={{ fontSize: 36 }}>{post.title}</p>
        <div
          style={{
            position: 'absolute',
            right: 48,
            bottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Logo height={32} width={32} />
          <p
            style={{
              fontSize: 24,
            }}
          >
            {TITLE}
          </p>
        </div>
      </OpenGraphWrapper>
    ),
  )
}
