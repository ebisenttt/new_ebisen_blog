import { backQuoteToCodeElement } from '@/utils/backQuoteToCodeElement'

type Props = {
  title: string
}

const PostTitle = ({ title }: Props) => {
  return (
    <h1
      className="text-5xl font-bold tracking-tighter leading-tight md:leading-none text-center"
      dangerouslySetInnerHTML={{ __html: backQuoteToCodeElement(title) }}
    />
  )
}

export default PostTitle
