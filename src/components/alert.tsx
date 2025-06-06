import Container from '@/components/container'

interface Props {
  preview?: boolean
}

const Alert = ({ preview = false }: Props) => {
  // 特に表示したいアラートはないのでpreview時のみ表示する．
  if (!preview) {
    return null
  }

  return (
    <div className="border-b bg-neutral-800 border-neutral-800 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          <div>
            This page is a preview.{' '}
            <a
              href="/api/exit-preview"
              className="underline hover:text-teal-300 duration-200 transition-colors"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Alert
