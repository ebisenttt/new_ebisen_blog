import Link from 'next/link'

import { backQuoteToCodeElement } from '@/utils/backQuoteToCodeElement'
import { Post } from '@/types/post'

import { Badge, Card } from '../common'
import { DateFormatter } from './date-formatter'

type Props = Pick<Post, 'title' | 'date' | 'filename' | 'tags'>

export const PostPreview = ({ title, date, filename, tags = [] }: Props) => {
  return (
    <Link href={`/posts/${filename}`} className="hover:underline">
      <Card>
        <h3
          className="text-xl mb-3 leading-snug"
          dangerouslySetInnerHTML={{ __html: backQuoteToCodeElement(title) }}
        />
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((t, i) => (
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
