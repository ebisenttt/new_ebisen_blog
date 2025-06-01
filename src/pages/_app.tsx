import type { AppProps } from 'next/app'

import '@/styles/index.css'
import 'prismjs/themes/prism-tomorrow.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </>
  )
}
