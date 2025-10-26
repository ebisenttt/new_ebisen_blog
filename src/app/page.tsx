import { Intro, Layout, TabLayout } from '@/components/layout'
import { Profile } from '@/components/profile'
import { getAllPostsMerged } from '@/lib/api'

import { Container } from '@shared/ui'

import { Posts } from '@entities/post'

import {
  TagFilter,
  collectTagStats,
  sortTagsByCount,
  selectInitialTag,
} from '@features/posts/filter-by-tag'
import { createPostLinkProps } from '@features/posts/open-external'

const MENU_TITLES = ['Posts', 'Tags', 'Me']

export default async function Page() {
  const allPosts = await getAllPostsMerged()
  const tagStats = collectTagStats(allPosts)
  const sortedTags = sortTagsByCount(tagStats)
  const initialTag = selectInitialTag(sortedTags)
  const postsWithLinks = allPosts.map((post) => ({
    ...post,
    ...createPostLinkProps(post),
  }))

  return (
    <>
      <Layout>
        <Container>
          <Intro />
          <TabLayout
            menuTitles={MENU_TITLES}
            bodies={[
              <Posts key="posts" posts={postsWithLinks} />,
              <TagFilter
                key="tags"
                posts={allPosts}
                tags={sortedTags}
                initialTag={initialTag}
                tagStats={tagStats}
              />,
              <Profile key="profile" />,
            ]}
          />
        </Container>
      </Layout>
    </>
  )
}
