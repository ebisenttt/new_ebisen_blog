import { useEffect } from 'react'

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Prism from 'prismjs'

import { getPostByFilename, getAllPosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import { TITLE, HOME_OG_IMAGE_URL } from '@/constants'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import Layout from '@/components/layout'
import PostTitle from '@/components/post-title'

import type { Post } from '@/types/post'

interface Props {
  post: Post
  morePosts: Post[]
  preview?: boolean
}

// htmlからタグを除去してテキストのみを取得する
function getRawTextsFromHtml(html: string) {
  return html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').slice(0, 100)
}

export default function Post({ post, preview }: Props) {
  const router = useRouter()
  const title = `${post.title} | ${TITLE}`
  if (!router.isFallback && post?.filename === undefined) {
    return <ErrorPage statusCode={404} />
  }
  const rawContentTexts = getRawTextsFromHtml(post.content)
  const ogImageUrl = `${HOME_OG_IMAGE_URL}?title=${title}`

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle title={'Loading…'} />
        ) : (
          <>
            <Head>
              <title>{title}</title>
              <meta name="keywords" content={post.tags?.join(',')} />
              <meta name="description" content={rawContentTexts} />
              <meta property="og:title" content={title} />
              <meta property="og:type" content="article" />
              <meta property="og:description" content={rawContentTexts} />
              <meta property="og:image" content={ogImageUrl} />
              <meta
                property="og:url"
                content={process.env.NEXT_PUBLIC_VERCEL_URL}
              />
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={title} />
              <meta property="twitter:description" content={rawContentTexts} />
              <meta property="twitter:image" content={ogImageUrl} />
            </Head>
            <article className="mx-auto mb-32 prose dark:prose-invert">
              <PostHeader title={post.title} date={post.date} tag={post.tags} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

interface Params {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostByFilename(params.slug)
  const content = await markdownToHtml(post.content ?? '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.filename,
        },
      }
    }),
    fallback: false,
  }
}
