import { Metadata } from 'next'

import { TITLE, HOME_OG_IMAGE_URL } from '@/constants'
import { Profile } from '@/components/profile'
import { Tags } from '@/components/tags'
import Container from '@/components/container'
import Posts from '@/components/posts'
import Intro from '@/components/intro'
import { TabLayout } from '@/components/tabLayout'
import { getAllPosts } from '@/lib/api'

const MENU_TITLES = ['Posts', 'Tags', 'Me']
const DESCRIPTION_TEXT =
  'ひよっこエンジニアの備忘録. 個人開発のつまずきや作業ログなどを気軽に投稿します.'
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION_TEXT,
  keywords: [
    'Next.js',
    'TypeScript',
    'React',
    'Vercel',
    'Tailwind CSS',
    '個人開発',
    'フロントエンドエンジニア',
    'Frontend Engineer',
    'Web開発',
    'Web Development',
    'プログラミング',
    'Programming',
    '技術ブログ',
    'Tech Blog',
    '備忘録',
    'Memo',
  ],
  openGraph: {
    title: TITLE,
    url: process.env.NEXT_PUBLIC_VERCEL_URL,
    type: 'website',
    description: DESCRIPTION_TEXT,
    images: [HOME_OG_IMAGE_URL],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION_TEXT,
    images: [HOME_OG_IMAGE_URL],
  },
}

export default async function Page() {
  const tagCount: Record<string, number> = {}
  const allPosts = getAllPosts()
  allPosts.forEach((post) => {
    if (post === null) return
    post.tags?.forEach((tag) => {
      if (tagCount[tag] === undefined) {
        tagCount[tag] = 1
      } else {
        tagCount[tag] += 1
      }
    })
  })
  const allTags = Array.from(
    new Set(allPosts.flatMap((post) => post.tags ?? [])),
  )
    .filter((tag): tag is string => typeof tag === 'string')
    .sort((a, b) => -(tagCount[a] - tagCount[b]))

  return (
    <Container>
      <Intro />
      <TabLayout
        menuTitles={MENU_TITLES}
        bodies={[
          <Posts key="posts" posts={allPosts} />,
          <Tags key="tags" allTags={allTags} allPosts={allPosts} />,
          <Profile key="profile" />,
        ]}
      />
    </Container>
  )
}
