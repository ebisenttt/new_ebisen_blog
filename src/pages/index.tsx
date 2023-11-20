import Head from 'next/head'

import { Profile } from 'components/profile'
import { Tags } from 'components/tags'
import Container from 'components/container'
import Posts from 'components/posts'
import Intro from 'components/intro'
import Layout from 'components/layout'
import { TabLayout } from 'components/tabLayout'
import { getAllPosts } from 'lib/api'
import { TITLE } from 'lib/constants'

import type Post from 'interfaces/post'

const MENU_TITLES = ['Posts', 'Tags', 'Me']

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
