import { type NextRequest } from 'next/server'

import { ImageResponse } from '@vercel/og'
import { TITLE as BLOG_TITLE } from 'lib/constants'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const isTitleExist = searchParams.has('title')
  const text = isTitleExist
    ? searchParams.get('title') + '\n' + BLOG_TITLE
    : BLOG_TITLE

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
          fontSize: 48,
          color: '#111827', // text-slate-900
          backgroundColor: '#F8FAFC', // bg-slate-50
        }}
      >
        {text}
      </div>
    ),
  )
}
