import { Metadata } from 'next'

import 'prismjs/themes/prism-tomorrow.css'

import {
  getPostDetailMetadata,
  listPostFilenames,
} from '@/processes/server/view-post-detail'
import { PostDetailsPage } from '@/_pages/post-details'
import { TITLE } from '@/shared/config'

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

  return <PostDetailsPage name={name} clientSlot={<PageClient />} />
}
