import { ImageResponse } from 'next/og'

import {
  Basic as BasicOpenGraph,
  Wrapper as OpenGraphWrapper,
} from '@/components/open-graph'

import { Logo } from '@shared/ui'
import { TITLE } from '@shared/config'

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

  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/metadata?name=${name}`)
  const { title } = await res.json()

  if (!res.ok || !title) {
    return new ImageResponse(<BasicOpenGraph />, { ...size })
  }

  const modifiedTitle = title.replace(` | ${TITLE}`, '')

  return new ImageResponse(
    (
      <OpenGraphWrapper style={{ position: 'relative' }}>
        <p style={{ fontSize: 36 }}>{modifiedTitle}</p>
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
