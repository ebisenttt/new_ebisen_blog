import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl font-bold tracking-tighter leading-tight md:leading-none text-center">
      {children}
    </h1>
  )
}

export default PostTitle
