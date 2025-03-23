type Props = {
  title: string
}

const PostTitle = ({ title }: Props) => {
  return (
    <h1
      className="text-5xl font-bold tracking-tighter leading-tight md:leading-none text-center"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  )
}

export default PostTitle
