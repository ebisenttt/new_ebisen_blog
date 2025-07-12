import { notFound } from 'next/navigation'

import { getAllPosts, getPostByFilename } from '@/lib/api'
import { Layout } from '@/components/layout/layout'
import { Container } from '@/components/common/container'
import { Header } from '@/components/layout/header'
import { PostHeader } from '@/components/post/post-header'
import { PostBody } from '@/components/post/post-body'
import markdownToHtml from '@/lib/markdownToHtml'
import 'prismjs/themes/prism-tomorrow.css'

import { PageClient } from './page-client'

type Props = {
  params: Promise<{
    name: string
  }>
}

export async function generateStaticParams() {
  return getAllPosts()
    .flatMap((post) => post?.filename ?? [])
    .map((filename) => ({
      name: filename,
    }))
}

export default async function Page({ params }: Props) {
  const { name } = await params
  const post = getPostByFilename(name)
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
