import Head from 'next/head'

import { HOME_OG_IMAGE_URL } from 'lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta property="og:title" content="Link preview title" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta property="og:description" content="Link preview description" />
      <meta property="og:url" content="Canonical link preview URL" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Twitter link preview title" />
      <meta
        property="twitter:description"
        content="Twitter link preview description"
      />
    </Head>
  )
}

export default Meta
