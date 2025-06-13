import { parseISO as _parseISO, format as _format } from 'date-fns'

export const parseISO = _parseISO

export const formatDate = ({
  date,
  format,
}: {
  date: Date
  format: string
}): string => {
  return _format(date, format, {
    locale: {
      code: 'ja',
    },
  })
}
