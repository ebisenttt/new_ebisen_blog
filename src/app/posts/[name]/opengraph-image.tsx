import { ImageResponse } from 'next/og'

import { TITLE } from '@/constants'
import { getPostByFilename } from '@/lib/api'
import { OpenGraph } from '@/components'

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

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#111827', // text-slate-900
          backgroundColor: '#F8FAFC', // bg-slate-50
        }}
      >
        {post?.title ? (
          <>
            <p style={{ fontSize: 48 }}>{name}</p>
            <p style={{ fontSize: 24 }}>{TITLE}</p>
          </>
        ) : (
          <OpenGraph />
        )}
      </div>
    ),
  )
}
