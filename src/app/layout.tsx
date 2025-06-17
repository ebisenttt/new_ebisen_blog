import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'

import '@/styles/index.css'
import Footer from '@/components/footer'
import { TITLE } from '@/constants'

export const metadata = {
  title: TITLE,
  description:
    'ひよっこエンジニアの備忘録. 個人開発のつまずきや作業ログなどを気軽に投稿します.',
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
      <body className="dark:bg-gray-900 dark:text-slate-50">
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
