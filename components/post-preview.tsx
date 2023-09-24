import DateFormatter from './date-formatter'
import Link from 'next/link'
import Card from '../components/card'

type Props = {
  title: string
  date: string
  slug: string
}

const PostPreview = ({ title, date, slug }: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className="hover:underline"
    >
      <Card>
        <h3 className="text-xl mb-3 leading-snug">{title}</h3>
        <div className="text-base mb-4">
          <DateFormatter dateString={date} />
        </div>
      </Card>
    </Link>
  )
}

export default PostPreview
