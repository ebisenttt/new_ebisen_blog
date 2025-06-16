import { ImageResponse } from 'next/og'

import { TITLE } from '@/constants'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
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
        {TITLE}
      </div>
    ),
  )
}
