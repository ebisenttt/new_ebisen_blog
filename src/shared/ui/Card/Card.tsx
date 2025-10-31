import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const BASE_CLASSES = 'dark:bg-gray-800 rounded p-4'

export const Card = ({ children, className }: Props) => {
  const mergedClassName = [BASE_CLASSES, className].filter(Boolean).join(' ')

  return <div className={mergedClassName}>{children}</div>
}
