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
import { TITLE } from 'lib/constants'

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
            <article className="mx-auto mb-32 prose dark:prose-invert">
              <Head>
                <title>{title}</title>
                <meta name="keywords" content={post.tag?.join(',')} />
                <meta name="description" content={post.content} />
              </Head>
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
