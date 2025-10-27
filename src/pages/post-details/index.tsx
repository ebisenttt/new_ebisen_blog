import type { ReactNode } from 'react'

import { notFound } from 'next/navigation'

import { Container } from '@shared/ui'

import { PostHeader, PostBody } from '@entities/post'

import { Header, Layout } from '@widgets/layout/site-layout'

import { getPostDetailViewModel } from '@processes/view-post-detail'

export type PostDetailsPageProps = {
  name: string
  clientSlot?: ReactNode
}

export async function PostDetailsPage({
  name,
  clientSlot = null,
}: PostDetailsPageProps) {
  const viewModel = await getPostDetailViewModel(name)

  if (viewModel === null) {
    notFound()
    return null
  }

  const { post, contentHtml } = viewModel

  return (
    <>
      <Layout>
        <Container>
          <Header />
          <article className="mx-auto mb-32 prose dark:prose-invert">
            <PostHeader title={post.title} date={post.date} tag={post.tags} />
            <PostBody content={contentHtml} />
          </article>
        </Container>
      </Layout>
      {clientSlot}
    </>
  )
}

export default PostDetailsPage
