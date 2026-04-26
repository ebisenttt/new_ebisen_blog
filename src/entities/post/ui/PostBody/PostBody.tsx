import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

export const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles.markdown}
        // eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
