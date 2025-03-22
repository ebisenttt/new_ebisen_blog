import Head from 'next/head'


import { TITLE, HOME_OG_IMAGE_URL } from '@/constants'
import { getAllPosts } from '@/lib/api'
import { Profile } from '@/components/profile'
import { Tags } from '@/components/tags'
import Container from '@/components/container'
import Posts from '@/components/posts'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { TabLayout } from '@/components/tabLayout'

import type Post from '@/interfaces/post'

const MENU_TITLES = ['Posts', 'Tags', 'Me']
const DESCRIPTION_TEXT =
  'ひよっこエンジニアの備忘録. 個人開発のつまずきや作業ログなどを気軽に投稿します.'
const KEYWORDS = [
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
]

interface Props {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const tagCount: Record<string, number> = {}
  allPosts.forEach((post) => {
    const tags = post.tag
    tags?.forEach((tag) => {
      if (tagCount[tag] === undefined) {
        tagCount[tag] = 1
      } else {
        tagCount[tag] += 1
      }
    })
  })
  const allTags = Array.from(new Set(allPosts.flatMap((post) => post.tag)))
    .filter((tag): tag is string => typeof tag === 'string')
    .sort((a, b) => -(tagCount[a] - tagCount[b]))

  return (
    <>
      <Layout>
        <Head>
          <title>{TITLE}</title>
          <meta name="description" content={DESCRIPTION_TEXT} />
          <meta name="keywords" content={KEYWORDS.join(',')} />
          <meta property="og:title" content={TITLE} />
          <meta property="og:type" content="blog" />
          <meta property="og:description" content={DESCRIPTION_TEXT} />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta
            property="og:url"
            content={process.env.NEXT_PUBLIC_VERCEL_URL}
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={TITLE} />
          <meta property="twitter:description" content={DESCRIPTION_TEXT} />
          <meta property="twitter:image" content={HOME_OG_IMAGE_URL} />
        </Head>
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
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const fields = ['title', 'date', 'slug', 'excerpt', 'tag']
  const allPosts = getAllPosts(fields)

  return {
    props: { allPosts },
  }
}
