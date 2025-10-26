import Link from 'next/link'

import { backQuoteToCodeElement } from '@shared/lib/backQuoteToCodeElement'
import { Badge, Card, ExternalLinkIcon } from '@shared/ui'

import type { Post } from '@entities/post/model'

import { DateFormatter } from '../DateFormatter'

type Props = Pick<Post, 'title' | 'date' | 'tags'> & {
  href: string
  externalUrl?: string | null
}

export const PostPreview = ({
  title,
  date,
  tags = [],
  href,
  externalUrl,
}: Props) => {
  const isExternal = Boolean(externalUrl)
  const content = (
    <Card>
      <div className="mb-3 flex items-start">
        <h3
          className="text-xl leading-snug flex-1"
          dangerouslySetInnerHTML={{ __html: backQuoteToCodeElement(title) }}
        />
        {isExternal && (
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

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className="hover:underline">
      {content}
    </Link>
  )
}
