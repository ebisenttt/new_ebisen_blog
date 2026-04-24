import{j as T}from"./jsx-runtime-Big8sbBF.js";import{P as S}from"./PostPreview-eTIwP5Gj.js";import"./iframe-DP25XCWT.js";import"./preload-helper-Dhgqe2qg.js";import"./link-DyiQJEEI.js";import"./use-merged-ref-DJLgNEVR.js";import"./backQuoteToCodeElement-JvVutd65.js";import"./Badge-BEk0nViE.js";import"./Card-CRdUK99d.js";import"./Container-DX1BEMnH.js";import"./ExternalLinkIcon-Dc2jDuq6.js";import"./Logo-UHO-Gcpf.js";import"./Basic-jfzfpS28.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-CrfQqFuJ.js";import"./DateFormatter-DHQrS1NR.js";var o,n,i,p,d,c,l,m,g,v,_,u,x,y,h;const A={title:"Entities/Post/PostPreview",component:S,tags:["autodocs"],argTypes:{title:{control:"text",description:"記事のタイトル。バッククォートは<code>要素に変換されます。"},date:{control:"text",description:"記事の公開日(YYYY-MM-DD形式)。"},tags:{control:"object",description:"記事のタグ配列。"},href:{control:"text",description:"リンク先のURL。"},externalUrl:{control:"text",description:'外部リンクのURL。指定すると外部リンクアイコンが表示され、target="_blank"で開きます。'}},parameters:{docs:{description:{component:"記事のプレビューカードを表示するコンポーネント。タイトル、日付、タグを含み、内部リンクと外部リンクの両方に対応しています。"}}},decorators:[j=>T.jsx("div",{style:{maxWidth:"400px"},children:T.jsx(j,{})})]},t={args:{title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","TypeScript","React"],href:"/posts/nextjs-blog"},parameters:{docs:{description:{story:"内部記事へのリンク例。Next.js Linkを使用します。"}}}},e={args:{title:"React公式ドキュメント",date:"2024-11-20",tags:["React","Documentation"],href:"https://react.dev",externalUrl:"https://react.dev"},parameters:{docs:{description:{story:"外部リンクの例。外部リンクアイコンが表示され、新しいタブで開きます。"}}}},r={args:{title:"`Array.prototype.map()`の使い方",date:"2024-11-19",tags:["JavaScript"],href:"/posts/array-map"},parameters:{docs:{description:{story:"タイトルにバッククォートを含む例。バッククォート部分は<code>要素に変換されます。"}}}},s={args:{title:"フルスタック開発の始め方",date:"2024-11-18",tags:["Next.js","TypeScript","React","Node.js","PostgreSQL","Tailwind CSS"],href:"/posts/fullstack-development"},parameters:{docs:{description:{story:"多数のタグを含む例。"}}}},a={args:{title:"タグのない記事",date:"2024-11-17",tags:[],href:"/posts/no-tags"},parameters:{docs:{description:{story:"タグが設定されていない記事の例。"}}}};t.parameters={...t.parameters,docs:{...(o=t.parameters)===null||o===void 0?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=t.parameters)===null||i===void 0||(n=i.docs)===null||n===void 0?void 0:n.source}}};e.parameters={...e.parameters,docs:{...(p=e.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=e.parameters)===null||c===void 0||(d=c.docs)===null||d===void 0?void 0:d.source}}};r.parameters={...r.parameters,docs:{...(l=r.parameters)===null||l===void 0?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=r.parameters)===null||g===void 0||(m=g.docs)===null||m===void 0?void 0:m.source}}};s.parameters={...s.parameters,docs:{...(v=s.parameters)===null||v===void 0?void 0:v.docs,source:{originalSource:`{
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
}`,...(u=s.parameters)===null||u===void 0||(_=u.docs)===null||_===void 0?void 0:_.source}}};a.parameters={...a.parameters,docs:{...(x=a.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=a.parameters)===null||h===void 0||(y=h.docs)===null||y===void 0?void 0:y.source}}};const J=["InternalLink","ExternalLink","WithCodeInTitle","ManyTags","NoTags"];export{e as ExternalLink,t as InternalLink,s as ManyTags,a as NoTags,r as WithCodeInTitle,J as __namedExportsOrder,A as default};
