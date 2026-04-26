import { backQuoteToCodeElement } from '@/shared/lib/backQuoteToCodeElement'

type Props = {
  title: string
}

export const PostTitle = ({ title }: Props) => {
  return (
    <h1
      className="text-5xl font-bold tracking-tighter leading-tight md:leading-none text-center"
      // eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml
      dangerouslySetInnerHTML={{ __html: backQuoteToCodeElement(title) }}
    />
  )
}
