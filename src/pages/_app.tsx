import type { AppProps } from 'next/app'
import '@/styles/index.css'
import 'prismjs/themes/prism-tomorrow.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
