import { notFound } from 'next/navigation'

import { Metadata } from 'next'

import 'prismjs/themes/prism-tomorrow.css'

import { Container } from '@shared/ui'
import { TITLE } from '@shared/config'

import { PostHeader, PostBody } from '@entities/post'

import { Header, Layout } from '@widgets/layout/site-layout'

import {
  getPostDetailMetadata,
  getPostDetailViewModel,
  listPostFilenames,
} from '@processes/view-post-detail'

import { PageClient } from './page-client'

type Props = {
  params: Promise<{
    name: string
  }>
}

export async function generateStaticParams() {
  return (await listPostFilenames()).map((filename) => ({
    name: filename,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params
  const metadata = await getPostDetailMetadata(name)

  return {
    title: metadata?.title ? `${metadata.title} | ${TITLE}` : TITLE,
  }
}

export default async function Page({ params }: Props) {
  const { name } = await params
  const viewModel = await getPostDetailViewModel(name)

  if (viewModel === null) {
    notFound()
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
      <PageClient />
    </>
  )
}
