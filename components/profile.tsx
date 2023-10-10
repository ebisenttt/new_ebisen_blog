import Image from 'next/image'
import { ReactNode } from 'react'

type IconType = {
  name: string
  src: string
}

const WEB_ICONS: IconType[] = [
  {
    name: 'html',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'css',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'javascript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'react',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'nextjs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'tailwindcss',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
]

const COMP_PROG_ICONS: IconType[] = [
  {
    name: 'cplusplus',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
]
export const Profile = () => {
  return (
    <article className="flex flex-col mx-auto max-w-prose gap-8">
      <Section>
        <div className="flex flex-col items-center gap-4 mb-8">
          <Logo />
          <h3 className="text-2xl">ebisen</h3>
        </div>
        <p>
          ネット上ではebisenというハンドルネームを使っているひよっこフロントエンドエンジニアです．
        </p>
        <p>
          QiitaやZennに技術記事を投稿するほどでもないけど，作業ログを残しておきたいというモチベーションでこのブログを作成しました．
          主に自分のための備忘録として，時々誰かの役に立てればいいなくらいのテンションで運営します．
        </p>
      </Section>
      <Section title="使用技術">
        <h4 className="text-xl">Web系</h4>
        <p>フロントエンドエンジニアなのでWeb系の技術がメインです．</p>
        <IconsGallary icons={WEB_ICONS} />
        <h4 className="text-xl">競プロ</h4>
        <p>
          競技プログラミングもかじってます．
          <a
            href="https://atcoder.jp/users/ebisen"
            target="_blank"
            className="text-rose-300 decoration-solid underline"
          >
            AtCoderのレートは茶色
          </a>
          です．
        </p>
        <IconsGallary icons={COMP_PROG_ICONS} />
      </Section>
      <Section title="これまで">
        <div className="px-8">
          <p>
            <ol>
              <li>📝 大学・大学院で教育学を勉強</li>
              <li>→ 🏫 公立高校で数学科の教員</li>
              <li>→ 💻 プログラミングに触れ始める</li>
              <li>
                → 🎓 University of People（オンラインの大学）でCS学部に入学
              </li>
              <li>→ ⚡️ フロントエンドエンジニアにキャリアチェンジ</li>
            </ol>
          </p>
        </div>
      </Section>
    </article>
  )
}
const Logo = () => {
  const LOGO_SRC = '/assets/logo.png'

  return (
    <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full">
      <Image src={LOGO_SRC} alt="ロゴ" width={128} height={128} />
    </div>
  )
}

type SectionProps = {
  title?: string
  children: ReactNode
}
const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="flex flex-col max-w-2xl gap-2">
      {title && (
        <span className="w-full">
          <h3 className="text-2xl font-bold">{title}</h3>
        </span>
      )}
      {children}
    </section>
  )
}

type IconsGallaryProps = {
  icons: IconType[]
}

const IconsGallary = ({ icons }: IconsGallaryProps) => {
  return (
    <div className="flex justify-center p-4">
      <ul className="list-none inline-flex gap-2">
        {icons.map((icon) => (
          <li>
            <Image src={icon.src} alt={icon.name} width={60} height={60} />
          </li>
        ))}
      </ul>
    </div>
  )
}
