import type { AppProps } from 'next/app'
import 'styles/index.css'
import 'prismjs/themes/prism-tomorrow.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://www.ebisenttt.com/api/og" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
