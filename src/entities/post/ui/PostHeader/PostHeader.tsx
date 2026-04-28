import { Badge } from '@/shared/ui'

import { DateFormatter } from '../DateFormatter'
import { PostTitle } from '../PostTitle'

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
          {tag.map((t) => (
            <Badge key={t} text={t} />
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
