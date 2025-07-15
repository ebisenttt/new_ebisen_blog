import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Card = ({ children }: Props) => {
  return <div className="dark:bg-gray-800 rounded p-4">{children}</div>
}
