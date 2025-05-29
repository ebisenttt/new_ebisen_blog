import type { AppProps } from 'next/app'

import '@/styles/index.css'
import 'prismjs/themes/prism-tomorrow.css'
import { GoogleAnalytics } from '@next/third-parties/google'

import { GA_ID } from '@/constants'

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log('process.env.VERCEL_ENV', process.env.VERCEL_ENV)
  return (
    <>
      <Component {...pageProps} />
      {process.env.VERCEL_ENV === 'production' && (
        <GoogleAnalytics gaId={GA_ID} />
      )}
    </>
  )
}
