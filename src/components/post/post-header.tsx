import { DateFormatter } from '@/components/post/date-formatter'
import { PostTitle } from '@/components/post/post-title'
import { Badge } from '@/components/common/badge'

interface Props {
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
