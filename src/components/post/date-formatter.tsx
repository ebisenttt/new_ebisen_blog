import { parseISO, formatDate } from '@/lib/date'

interface Props {
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
