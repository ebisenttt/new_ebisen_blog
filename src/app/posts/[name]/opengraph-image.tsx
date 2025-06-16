import { ImageResponse } from 'next/og'

import { TITLE } from '@/constants'

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
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#111827', // text-slate-900
          backgroundColor: '#F8FAFC', // bg-slate-50
        }}
      >
        <p style={{ fontSize: 48 }}>{name}</p>
        <p style={{ fontSize: 24 }}>{TITLE}</p>
      </div>
    ),
  )
}
