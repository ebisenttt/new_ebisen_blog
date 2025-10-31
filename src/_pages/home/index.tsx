import { Container } from '@/shared/ui'
import { TagFilter } from '@/features/posts/filter-by-tag'
import { TabLayout } from '@/features/layout/switch-tab'
import { Layout, Intro } from '@/widgets/layout/site-layout'
import { PostsFeed } from '@/widgets/posts/posts-feed'
import { ProfileAboutCard } from '@/widgets/profile/about-card'
import { getHomePostsViewModel } from '@/processes/server/view-posts'

const MENU_TITLES = ['Posts', 'Tags', 'Me']

export const HomePage = async () => {
  const { posts, rawPosts, sortedTags, initialTag, tagStats } =
    await getHomePostsViewModel()

  return (
    <Layout>
      <Container>
        <Intro />
        <TabLayout
          menuTitles={MENU_TITLES}
          bodies={[
            <PostsFeed key="posts" posts={posts} />,
            <TagFilter
              key="tags"
              posts={rawPosts}
              tags={sortedTags}
              initialTag={initialTag}
              tagStats={tagStats}
            />,
            <ProfileAboutCard key="profile" />,
          ]}
        />
      </Container>
    </Layout>
  )
}
