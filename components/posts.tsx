import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import { TabLayout } from './tabLayout'

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-8 md:gap-y-16 mb-32">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          tag={post.tag}
        />
      ))}
    </div>
  )
}

export default Posts
