import DateFormatter from './date-formatter'
import Link from 'next/link'
import Card from '../components/card'

type Props = {
  title: string
  date: string
  slug: string
}

const PostPreview = ({
  title,
  date,
  slug,
}: Props) => {
  return (
    <Card>
      <h3 className="text-xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-base mb-4">
        <DateFormatter dateString={date} />
      </div>
    </Card>
  )
}

export default PostPreview
