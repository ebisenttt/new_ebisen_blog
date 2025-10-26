import { Posts } from '@entities/post'

import type { HomePostsViewModel } from '@processes/view-posts'

type PostsFeedProps = {
  posts: HomePostsViewModel['posts']
}

export const PostsFeed = ({ posts }: PostsFeedProps) => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">Latest Posts</h2>
      {posts.length === 0 ? (
        <p className="text-sm text-gray-500">記事がありません。</p>
      ) : (
        <Posts posts={posts} />
      )}
    </section>
  )
}
