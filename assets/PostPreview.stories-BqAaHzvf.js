import{j as o}from"./jsx-runtime-BMpsxvGK.js";import{P as p}from"./PostPreview-2OAWuSf_.js";import"./iframe-DRPE7Y9R.js";import"./preload-helper-Dhgqe2qg.js";import"./link-CRa9TLBr.js";import"./use-merged-ref-suOZneGN.js";import"./backQuoteToCodeElement-JvVutd65.js";import"./Badge-BjHQG7_S.js";import"./Card-BocezHRH.js";import"./Container-FFmTnjCD.js";import"./ExternalLinkIcon-DcDof-LR.js";import"./Logo-DbzDo5RS.js";import"./Basic-BSALKj-N.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-Bug8LG32.js";import"./DateFormatter-BvEgS3vq.js";const R={title:"Entities/Post/PostPreview",component:p,tags:["autodocs"],argTypes:{title:{control:"text",description:"記事のタイトル。バッククォートは<code>要素に変換されます。"},date:{control:"text",description:"記事の公開日(YYYY-MM-DD形式)。"},tags:{control:"object",description:"記事のタグ配列。"},href:{control:"text",description:"リンク先のURL。"},externalUrl:{control:"text",description:'外部リンクのURL。指定すると外部リンクアイコンが表示され、target="_blank"で開きます。'}},parameters:{docs:{description:{component:"記事のプレビューカードを表示するコンポーネント。タイトル、日付、タグを含み、内部リンクと外部リンクの両方に対応しています。"}}},decorators:[n=>o.jsx("div",{style:{maxWidth:"400px"},children:o.jsx(n,{})})]},t={args:{title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","TypeScript","React"],href:"/posts/nextjs-blog"},parameters:{docs:{description:{story:"内部記事へのリンク例。Next.js Linkを使用します。"}}}},e={args:{title:"React公式ドキュメント",date:"2024-11-20",tags:["React","Documentation"],href:"https://react.dev",externalUrl:"https://react.dev"},parameters:{docs:{description:{story:"外部リンクの例。外部リンクアイコンが表示され、新しいタブで開きます。"}}}},r={args:{title:"`Array.prototype.map()`の使い方",date:"2024-11-19",tags:["JavaScript"],href:"/posts/array-map"},parameters:{docs:{description:{story:"タイトルにバッククォートを含む例。バッククォート部分は<code>要素に変換されます。"}}}},s={args:{title:"フルスタック開発の始め方",date:"2024-11-18",tags:["Next.js","TypeScript","React","Node.js","PostgreSQL","Tailwind CSS"],href:"/posts/fullstack-development"},parameters:{docs:{description:{story:"多数のタグを含む例。"}}}},a={args:{title:"タグのない記事",date:"2024-11-17",tags:[],href:"/posts/no-tags"},parameters:{docs:{description:{story:"タグが設定されていない記事の例。"}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Next.jsで始めるブログ開発',
    date: '2024-11-21',
    tags: ['Next.js', 'TypeScript', 'React'],
    href: '/posts/nextjs-blog'
  },
  parameters: {
    docs: {
      description: {
        story: '内部記事へのリンク例。Next.js Linkを使用します。'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'React公式ドキュメント',
    date: '2024-11-20',
    tags: ['React', 'Documentation'],
    href: 'https://react.dev',
    externalUrl: 'https://react.dev'
  },
  parameters: {
    docs: {
      description: {
        story: '外部リンクの例。外部リンクアイコンが表示され、新しいタブで開きます。'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: '\`Array.prototype.map()\`の使い方',
    date: '2024-11-19',
    tags: ['JavaScript'],
    href: '/posts/array-map'
  },
  parameters: {
    docs: {
      description: {
        story: 'タイトルにバッククォートを含む例。バッククォート部分は<code>要素に変換されます。'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'フルスタック開発の始め方',
    date: '2024-11-18',
    tags: ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    href: '/posts/fullstack-development'
  },
  parameters: {
    docs: {
      description: {
        story: '多数のタグを含む例。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'タグのない記事',
    date: '2024-11-17',
    tags: [],
    href: '/posts/no-tags'
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが設定されていない記事の例。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const L=["InternalLink","ExternalLink","WithCodeInTitle","ManyTags","NoTags"];export{e as ExternalLink,t as InternalLink,s as ManyTags,a as NoTags,r as WithCodeInTitle,L as __namedExportsOrder,R as default};
