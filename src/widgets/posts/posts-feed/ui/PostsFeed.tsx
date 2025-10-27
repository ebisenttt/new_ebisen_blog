import {
  HOME_POSTS_EMPTY_MESSAGE,
  HOME_POSTS_SECTION_TITLE,
} from '@shared/config'

import { Posts } from '@entities/post'

import type { HomePostsViewModel } from '@processes/view-posts'

type PostsFeedProps = {
  posts: HomePostsViewModel['posts']
}

const POSTS_FEED_HEADING_ID = 'home-posts-heading'

export const PostsFeed = ({ posts }: PostsFeedProps) => {
  return (
    <section aria-labelledby={POSTS_FEED_HEADING_ID} className="space-y-6">
      <h2 id={POSTS_FEED_HEADING_ID} className="text-2xl font-semibold">
        {HOME_POSTS_SECTION_TITLE}
      </h2>
      {posts.length === 0 ? (
        <p className="text-sm text-gray-500">{HOME_POSTS_EMPTY_MESSAGE}</p>
      ) : (
        <Posts posts={posts} />
      )}
    </section>
  )
}
