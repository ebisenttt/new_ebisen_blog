import { ImageResponse } from '@vercel/og'
import { TITLE as BLOG_TITLE } from 'lib/constants'

export const config = {
  runtime: 'edge',
}

interface Props {
  params: { slug: string }
}

export default async function handler({ params }: Props) {
  const slug = params.slug
  const text = slug === null ? BLOG_TITLE : slug + '\n' + BLOG_TITLE

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
