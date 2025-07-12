import Link from 'next/link'

import Card from '@/components/common/card'
import { DateFormatter } from '@/components/post/date-formatter'
import Badge from '@/components/common/badge'
import { backQuoteToCodeElement } from '@/utils/backQuoteToCodeElement'
import { Post } from '@/types/post'

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
