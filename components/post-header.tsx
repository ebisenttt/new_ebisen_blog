import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import Badge from './badge'
import Container from './container'

type Props = {
  title: string
  date: string
  tag?: string[]
}

const PostHeader = ({ title, date, tag = [] }: Props) => {
  return (
    <>
      <div className="mb-12">
        <PostTitle>{title}</PostTitle>
        <div className="text-center">
          {tag.map((t, i) => (
            <Badge key={`${i}_${t}`} text={t} />
          ))}
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-base">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
