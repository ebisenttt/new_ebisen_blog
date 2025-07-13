import type { ReactNode } from 'react'

import Image from 'next/image'

import { Logo as LogoImage } from '../image'

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
    name: 'typescript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'react',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'nextjs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
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

const CERTIFICAITON_ICONS: IconType[] = [
  { name: 'html5level1', src: '/assets/me/html5_lv1.jpg' },
  { name: 'html5level2', src: '/assets/me/html5_lv2.jpg' },
  { name: 'javasebronze', src: '/assets/me/java_se_bronze.jpg' },
]

export const Profile = () => {
  return (
    <article className="flex flex-col mx-auto max-w-prose gap-8 mb-16">
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
          <OutsideLink
            href="https://atcoder.jp/users/ebisen"
            text="AtCoderのレートは茶色"
          />
        </p>
        <IconsGallary icons={COMP_PROG_ICONS} />
      </Section>
      <Section title="資格">
        <ol className="list-inside list-disc">
          <li>
            <OutsideLink
              href="https://www.ipa.go.jp/shiken/kubun/ip.html"
              text="ITパスポート"
            />
            &nbsp;(2023-06)
          </li>
          <li>
            <OutsideLink
              href="https://html5exam.jp/outline/lv1.html"
              text="「HTML5プロフェッショナル認定 レベル1」 認定プロフェッショナル"
            />
            &nbsp;(2023-10)
          </li>
          <li>
            <OutsideLink
              href="https://html5exam.jp/outline/lv2.html"
              text="「HTML5プロフェッショナル認定 レベル2」 認定プロフェッショナル"
            />
            &nbsp;(2023-11)
          </li>
          <li>
            <OutsideLink
              href="https://education.oracle.com/ja/oracle-certified-java-programmer-bronze-se-available-only-in-japan/trackp_818"
              text="Oracle Certified Java Programmer, Bronze SE"
            />
            &nbsp;(2024-08)
          </li>
          <li>
            <OutsideLink
              href="https://www.ipa.go.jp/shiken/kubun/fe.html"
              text="基本情報技術者試験"
            />
            &nbsp;(2024-08)
          </li>
        </ol>
        <IconsGallary icons={CERTIFICAITON_ICONS} />
      </Section>
      <Section title="これまで">
        <ol className="">
          <li>📝 大学・大学院で教育学を勉強</li>
          <li>→ 🏫 公立高校で数学科の教員</li>
          <li>→ 💻 プログラミングに触れ始める</li>
          <li>→ 🎓 University of People（オンラインの大学）でCS学部に入学</li>
          <li>→ ⚡️ フロントエンドエンジニアにキャリアチェンジ</li>
        </ol>
      </Section>
    </article>
  )
}

const Logo = () => {
  return (
    <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full">
      <LogoImage height={128} width={128} />
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
      {title !== undefined && (
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
          <li key={icon.name}>
            <Image
              src={icon.src}
              alt={icon.name}
              width={200}
              height={200}
              className="w-auto h-16"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

type OutsideLinkProps = {
  href: string
  text: string
}

const OutsideLink = ({ href, text }: OutsideLinkProps) => (
  <a
    href={href}
    target="_blank"
    className="text-rose-300 decoration-solid underline"
    rel="noreferrer"
  >
    {text}
  </a>
)
