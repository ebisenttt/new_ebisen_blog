import { backQuoteToCodeElement } from '@shared/lib/backQuoteToCodeElement'

type Props = {
  title: string
}

export const PostTitle = ({ title }: Props) => {
  return (
    <h1
      className="text-5xl font-bold tracking-tighter leading-tight md:leading-none text-center"
      dangerouslySetInnerHTML={{ __html: backQuoteToCodeElement(title) }}
    />
  )
}
