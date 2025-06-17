import { notFound } from 'next/navigation'

import { getAllPosts, getPostByFilename } from '@/lib/api'
import Container from '@/components/container'
import Header from '@/components/header'
import PostHeader from '@/components/post-header'
import PostBody from '@/components/post-body'
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
      <Container>
        <Header />
        <article className="mx-auto mb-32 prose dark:prose-invert">
          <PostHeader title={post.title} date={post.date} tag={post.tags} />
          <PostBody content={await markdownToHtml(post.content)} />
        </article>
      </Container>
      <PageClient />
    </>
  )
}
