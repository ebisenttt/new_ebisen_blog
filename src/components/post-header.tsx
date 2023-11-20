import DateFormatter from 'components/date-formatter'
import PostTitle from 'components/post-title'
import Badge from 'components/badge'

interface Props {
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
