import { DateFormatter } from './date-formatter'
import { PostTitle } from './post-title'
import { Badge } from '../common'

type Props = {
  title: string
  date: string
  tag?: string[]
}

export const PostHeader = ({ title, date, tag = [] }: Props) => {
  return (
    <>
      <div className="mb-12">
        <PostTitle title={title} />
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
