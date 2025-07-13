import {
  Profile,
  Tags,
  Container,
  Posts,
  Intro,
  Layout,
  TabLayout,
} from '@/components'
import { getAllPosts } from '@/lib/api'

const MENU_TITLES = ['Posts', 'Tags', 'Me']

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
    <>
      <Layout>
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
