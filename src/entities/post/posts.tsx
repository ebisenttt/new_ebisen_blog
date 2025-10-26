import type { Post } from '@entities/post/model'

import { PostPreview } from './ui'

type Props = {
  posts: Post[]
}

export const Posts = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-8 md:gap-y-16 mb-32">
      {posts.map((post) => (
        <PostPreview
          key={post.filename}
          title={post.title}
          date={post.date}
          filename={post.filename}
          tags={post.tags}
        />
      ))}
    </div>
  )
}
