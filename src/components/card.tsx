import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Card({ children }: Props) {
  return <div className="dark:bg-gray-800 rounded p-4">{children}</div>
}

export default Card
