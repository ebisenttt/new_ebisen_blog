import type { ReactNode } from 'react'

import Image from 'next/image'

import { Logo } from '@shared/ui'

const WEB_ICONS = [
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
] as const

const COMPETITIVE_PROGRAMMING_ICONS = [
  {
    name: 'cplusplus',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
] as const

const CERTIFICATION_ICONS = [
  { name: 'html5level1', src: '/assets/me/html5_lv1.jpg' },
  { name: 'html5level2', src: '/assets/me/html5_lv2.jpg' },
  { name: 'javasebronze', src: '/assets/me/java_se_bronze.jpg' },
] as const

export const ProfileAboutCard = () => {
  return (
    <article className="mx-auto mb-16 flex max-w-prose flex-col gap-8">
      <Section>
        <div className="mb-8 flex flex-col items-center gap-4">
          <ProfileLogo />
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
        <IconGallery icons={WEB_ICONS} />
        <h4 className="text-xl">競プロ</h4>
        <p>
          競技プログラミングもかじってます．
          <OutsideLink
            href="https://atcoder.jp/users/ebisen"
            text="AtCoderのレートは茶色"
          />
        </p>
        <IconGallery icons={COMPETITIVE_PROGRAMMING_ICONS} />
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
        <IconGallery icons={CERTIFICATION_ICONS} />
      </Section>
      <Section title="これまで">
        <ol>
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

const ProfileLogo = () => {
  return (
    <div className="flex h-48 w-48 items-center justify-center rounded-full bg-white">
      <Logo height={128} width={128} />
    </div>
  )
}

type SectionProps = {
  title?: string
  children: ReactNode
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="flex max-w-2xl flex-col gap-2">
      {title !== undefined && (
        <span className="w-full">
          <h3 className="text-2xl font-bold">{title}</h3>
        </span>
      )}
      {children}
    </section>
  )
}

type IconGalleryProps = {
  icons: ReadonlyArray<{ name: string; src: string }>
}

const IconGallery = ({ icons }: IconGalleryProps) => {
  return (
    <div className="flex justify-center p-4">
      <ul className="inline-flex list-none gap-2">
        {icons.map((icon) => (
          <li key={icon.name}>
            <Image
              src={icon.src}
              alt={icon.name}
              width={200}
              height={200}
              className="h-16 w-auto"
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
    className="text-rose-300 underline decoration-solid"
    rel="noreferrer"
  >
    {text}
  </a>
)
