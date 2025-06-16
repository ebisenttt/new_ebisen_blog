import { parseISO as _parseISO, format as _format } from 'date-fns'
import { ja } from 'date-fns/locale'
// NOTE:@date-fns/tzからimportできないバグがある
// https://github.com/date-fns/tz/issues/43
import { tz } from '@date-fns/tz/tz'
import { TZDate } from '@date-fns/tz'

export const parseISO = (dateString: string): Date => {
  return _parseISO(dateString, {
    in: tz('Asia/Tokyo'),
  })
}

export const formatDate = ({
  date,
  format,
}: {
  date: Date
  format: string
}): string => {
  return _format(date, format, {
    locale: ja,
  })
}

export const now = TZDate.tz('Asia/Tokyo')
