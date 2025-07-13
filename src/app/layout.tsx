import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import '@/styles/index.css'
import { Metadata } from 'next'

import { DESCRIPTION, KEYWORDS, TITLE } from '@/constants'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja-JP" className="dark">
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      {process.env.ENV === 'production' && <Analytics />}
      <body className="dark:bg-gray-900 dark:text-slate-50">{children}</body>
    </html>
  )
}
