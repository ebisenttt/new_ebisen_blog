import type { AppProps } from 'next/app'

import { Analytics } from '@vercel/analytics/next'
import '@/styles/index.css'
import 'prismjs/themes/prism-tomorrow.css'
import { GoogleTagManager } from '@next/third-parties/google'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      <Analytics />
    </>
  )
}
