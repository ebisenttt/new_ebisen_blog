import { parseISO, formatDate } from '@/lib/date'

interface Props {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} suppressHydrationWarning>
      {formatDate({
        date,
        format: 'yyyy-MM-dd',
      })}
    </time>
  )
}

export default DateFormatter
