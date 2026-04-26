import{j as a}from"./jsx-runtime-BSic5u3G.js";import{a as m}from"./iframe-DSfTvnQQ.js";import{B as x}from"./Badge-C-ud9ky3.js";import"./Card-BLXE1Qzg.js";import"./Container-DvxZUbZ1.js";import"./ExternalLinkIcon-C2d28hJ6.js";import"./Logo-DqCEEe80.js";import"./Basic-CUN1NMMh.js";import"./Wrapper-kyw0p7de.js";import"./DateFormatter-eoRM28fn.js";import"./PostBody-B5-CwORM.js";import"./PostHeader-DVhSAD5_.js";import"./PostPreview-D0xYIcUG.js";import"./PostTitle-C7LGU_Xo.js";import{P as j}from"./Posts-9W8SDOTG.js";import"./preload-helper-Dhgqe2qg.js";import"./metadata-BgGm_LXU.js";import"./link-QPd6EtdZ.js";import"./use-merged-ref-RLkSB_qw.js";import"./backQuoteToCodeElement-JvVutd65.js";const g="note__",N="qiita__",R=[{domain:"note.com",prefix:g},{domain:"qiita.com",prefix:N}];function P(t){const e=R.find(i=>t.startsWith(i.prefix));if(!e&&!t.startsWith(g))return null;const r=e?e.prefix:g,o=t.slice(r.length),n=o.length%4===0?"":"=".repeat(4-o.length%4),c=o.replace(/-/g,"+").replace(/_/g,"/")+n;try{const i=Buffer.from(c,"base64").toString("utf-8");return i===""?null:i}catch{return null}}function C(t){return P(t.filename)}function v(t){const e=C(t);return e?{href:e,externalUrl:e}:{href:`/posts/${t.filename}`,externalUrl:null}}function h(t,e){return e?t.filter(r=>r.tags?.includes(e)):[]}const w="opacity-50",T=({posts:t,tags:e,initialTag:r,tagStats:o})=>{const[n,c]=m.useState(r),[i,y]=m.useState(r);i!==r&&(y(r),c(r));const f=m.useMemo(()=>n?h(t,n).map(s=>({...s,...v(s)})):[],[t,n]);return e.length===0?a.jsx("p",{className:"text-sm text-gray-500",children:"タグがありません。"}):a.jsxs("div",{children:[a.jsx("div",{className:"flex flex-wrap gap-4 mb-8",children:e.map(s=>a.jsx("button",{onClick:()=>c(s),title:`${s} (${o[s]??0})`,className:s===n?void 0:w,children:a.jsx(x,{text:s})},s))}),a.jsx("div",{children:a.jsx(j,{posts:f})})]})};T.__docgenInfo={description:"",methods:[],displayName:"TagFilter",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"Post"}],raw:"Post[]"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},initialTag:{required:!0,tsType:{name:"string"},description:""},tagStats:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"},description:""}}};const G={title:"Features/Posts/TagFilter",component:T,tags:["autodocs"],argTypes:{posts:{control:!1,description:"フィルタリング対象の記事配列。"},tags:{control:"object",description:"表示するタグの配列。"},initialTag:{control:"text",description:"初期選択されるタグ。"},tagStats:{control:"object",description:"各タグの記事数を示すオブジェクト。"}},parameters:{docs:{description:{component:"タグで記事をフィルタリングする機能を提供するコンポーネント。タグをクリックすると、そのタグを持つ記事のみが表示されます。"}}}},u=[{title:"Next.jsで始めるブログ開発",date:"2024-11-21",content:"",filename:"nextjs-blog",tags:["Next.js","React","TypeScript"]},{title:"Reactの基礎を学ぶ",date:"2024-11-20",content:"",filename:"react-basics",tags:["React","JavaScript"]},{title:"TypeScriptの型システム入門",date:"2024-11-19",content:"",filename:"typescript-types",tags:["TypeScript"]},{title:"Tailwind CSSでスタイリング",date:"2024-11-18",content:"",filename:"tailwind-styling",tags:["Tailwind CSS","CSS"]},{title:"フルスタック開発の始め方",date:"2024-11-17",content:"",filename:"fullstack-dev",tags:["Next.js","TypeScript","React"]}],p={args:{posts:u,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS"],initialTag:"React",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1}},parameters:{docs:{description:{story:'複数のタグと記事を含む基本的な例。初期タグは"React"。'}}}},l={args:{posts:u.filter(t=>t.tags?.includes("TypeScript")),tags:["TypeScript"],initialTag:"TypeScript",tagStats:{TypeScript:3}},parameters:{docs:{description:{story:"タグが1つだけの場合の例。"}}}},d={args:{posts:u,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS","CSS","Node.js","PostgreSQL","Docker","AWS"],initialTag:"Next.js",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1,"Node.js":0,PostgreSQL:0,Docker:0,AWS:0}},parameters:{docs:{description:{story:"多数のタグがある場合の例。フレックスラップで複数行に表示されます。"}}}},S={args:{posts:[],tags:[],initialTag:"",tagStats:{}},parameters:{docs:{description:{story:"タグが存在しない場合、メッセージが表示されます。"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts,
    tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    initialTag: 'React',
    tagStats: {
      'Next.js': 2,
      React: 3,
      TypeScript: 3,
      JavaScript: 1,
      'Tailwind CSS': 1,
      CSS: 1
    }
  },
  parameters: {
    docs: {
      description: {
        story: '複数のタグと記事を含む基本的な例。初期タグは"React"。'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts.filter(p => p.tags?.includes('TypeScript')),
    tags: ['TypeScript'],
    initialTag: 'TypeScript',
    tagStats: {
      TypeScript: 3
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが1つだけの場合の例。'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts,
    tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'CSS', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    initialTag: 'Next.js',
    tagStats: {
      'Next.js': 2,
      React: 3,
      TypeScript: 3,
      JavaScript: 1,
      'Tailwind CSS': 1,
      CSS: 1,
      'Node.js': 0,
      PostgreSQL: 0,
      Docker: 0,
      AWS: 0
    }
  },
  parameters: {
    docs: {
      description: {
        story: '多数のタグがある場合の例。フレックスラップで複数行に表示されます。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    posts: [],
    tags: [],
    initialTag: '',
    tagStats: {}
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが存在しない場合、メッセージが表示されます。'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};const H=["Default","SingleTag","ManyTags","NoTags"];export{p as Default,d as ManyTags,S as NoTags,l as SingleTag,H as __namedExportsOrder,G as default};
