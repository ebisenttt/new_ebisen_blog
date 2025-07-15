import { parseISO, formatDate } from '@/lib/date'

type Props = {
  dateString: string
}

export const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {formatDate({
        date,
        format: 'yyyy-MM-dd',
      })}
    </time>
  )
}
