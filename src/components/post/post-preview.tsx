import Link from 'next/link'

import { decodeExternalUrl } from '@/lib/note'
import { backQuoteToCodeElement } from '@/utils/backQuoteToCodeElement'
import { Post } from '@/types/post'

import { Badge, Card, ExternalLinkIcon } from '../common'
import { DateFormatter } from './date-formatter'

type Props = Pick<Post, 'title' | 'date' | 'filename' | 'tags'>

export const PostPreview = ({ title, date, filename, tags = [] }: Props) => {
  const externalUrl = decodeExternalUrl(filename)
  const content = (
    <Card>
      <div className="mb-3 flex items-start">
        <h3
          className="text-xl leading-snug flex-1"
          dangerouslySetInnerHTML={{ __html: backQuoteToCodeElement(title) }}
        />
        {externalUrl && (
          <span className="ml-2 text-gray-500">
            <ExternalLinkIcon title="外部リンク" />
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-1 mb-4">
        {tags.map((t, i) => (
          <Badge key={`${i}_${t}`} text={t} />
        ))}
      </div>
      <div className="text-base mb-4">
        <DateFormatter dateString={date} />
      </div>
    </Card>
  )

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={`/posts/${filename}`} className="hover:underline">
      {content}
    </Link>
  )
}
