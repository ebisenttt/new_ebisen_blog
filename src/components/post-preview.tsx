import Link from 'next/link'


import Card from '@/components/card'
import DateFormatter from '@/components/date-formatter'
import Badge from '@/components/badge'

import type PostType from '@/interfaces/post'

type Props = Pick<PostType, 'title' | 'date' | 'slug' | 'tag'>

const PostPreview = ({ title, date, slug, tag = [] }: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className="hover:underline"
    >
      <Card>
        <h3 className="text-xl mb-3 leading-snug">{title}</h3>
        <div className="mb-4">
          {tag.map((t, i) => (
            <Badge key={`${i}_${t}`} text={t} />
          ))}
        </div>
        <div className="text-base mb-4">
          <DateFormatter dateString={date} />
        </div>
      </Card>
    </Link>
  )
}

export default PostPreview
