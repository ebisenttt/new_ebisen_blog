import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja-JP" className="dark">
      <Head />
      <body className="dark:bg-gray-900 dark:text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
