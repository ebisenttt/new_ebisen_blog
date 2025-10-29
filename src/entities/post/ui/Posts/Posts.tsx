import type { Post } from '@shared/types/post'

import { PostPreview } from '../PostPreview'

type PostWithLink = Post & {
  href?: string
  externalUrl?: string | null
}

type Props = {
  posts: PostWithLink[]
}

export const Posts = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-8 md:gap-y-16 mb-32">
      {posts.map((post) => (
        <PostPreview
          key={post.filename}
          title={post.title}
          date={post.date}
          tags={post.tags}
          href={post.href ?? post.externalUrl ?? `/posts/${post.filename}`}
          externalUrl={
            post.externalUrl === undefined ? undefined : post.externalUrl
          }
        />
      ))}
    </div>
  )
}
