import { useEffect } from 'react'

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Prism from 'prismjs'
import Container from 'components/container'
import PostBody from 'components/post-body'
import Header from 'components/header'
import PostHeader from 'components/post-header'
import Layout from 'components/layout'
import { getPostBySlug, getAllPosts } from 'lib/api'
import PostTitle from 'components/post-title'
import markdownToHtml from 'lib/markdownToHtml'
import { TITLE, HOME_OG_IMAGE_URL } from 'lib/constants'

import type PostType from 'interfaces/post'

interface Props {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, preview }: Props) {
  const router = useRouter()
  const title = `${post.title} | ${TITLE}`
  if (!router.isFallback && post?.slug === undefined) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>{title}</title>
              <meta name="keywords" content={post.tag?.join(',')} />
              <meta name="description" content={post.content} />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={post.content} />
              <meta property="og:image" content={HOME_OG_IMAGE_URL} />
              <meta
                property="og:url"
                content={process.env.NEXT_PUBLIC_VERCEL_URL}
              />
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={title} />
              <meta property="twitter:description" content={post.content} />
              <meta property="twitter:image" content={post.content} />
            </Head>
            <article className="mx-auto mb-32 prose dark:prose-invert">
              <PostHeader title={post.title} date={post.date} tag={post.tag} />
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
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'tag',
    'ogImage',
  ])
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
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
