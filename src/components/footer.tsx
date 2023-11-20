import Image from 'next/image'

import Container from 'components/container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-gray-800 dark:border-none">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            ebisen blog.
          </h3>
          <div className="flex lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/ebisenttt/new_ebisen_blog"
              className="mx-3 font-bold hover:underline"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github"
                width={40}
                height={40}
                className="invert"
              />
            </a>
            <a href="https://twitter.com/ebisenttt">
              <Image
                src="https://cdn.qiita.com/assets/brand_icons/icon-x_white-a2cf94da373d24e4cf6e4848a3a1c4a8.svg"
                alt="x-twitter"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
