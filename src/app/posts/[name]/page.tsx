import { notFound } from 'next/navigation'

import { Metadata } from 'next'

import { TITLE } from '@/constants'
import { getAllPosts, getPostByFilename } from '@/lib/api'
import { Header, PostHeader, PostBody, Container, Layout } from '@/components'
import markdownToHtml from '@/lib/markdownToHtml'
import 'prismjs/themes/prism-tomorrow.css'

import { PageClient } from './page-client'

type Props = {
  params: Promise<{
    name: string
  }>
}

export async function generateStaticParams() {
  return (await getAllPosts())
    .flatMap((post) => post?.filename ?? [])
    .map((filename) => ({
      name: filename,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params
  const post = await getPostByFilename(name)

  return {
    title: post?.title ? `${post.title} | ${TITLE}` : TITLE,
  }
}

export default async function Page({ params }: Props) {
  const { name } = await params
  const post = await getPostByFilename(name)
  if (post === null) {
    notFound()
  }

  return (
    <>
      <Layout>
        <Container>
          <Header />
          <article className="mx-auto mb-32 prose dark:prose-invert">
            <PostHeader title={post.title} date={post.date} tag={post.tags} />
            <PostBody content={await markdownToHtml(post.content)} />
          </article>
        </Container>
      </Layout>
      <PageClient />
    </>
  )
}
