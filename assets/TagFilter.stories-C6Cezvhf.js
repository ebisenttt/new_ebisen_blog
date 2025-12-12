import{j as n}from"./jsx-runtime-BMpsxvGK.js";import{b as d}from"./iframe-DRPE7Y9R.js";import{B as y}from"./Badge-BjHQG7_S.js";import"./Card-BocezHRH.js";import"./Container-FFmTnjCD.js";import"./ExternalLinkIcon-DcDof-LR.js";import"./Logo-DbzDo5RS.js";import"./Basic-BSALKj-N.js";import"./Wrapper-Bug8LG32.js";import"./DateFormatter-BvEgS3vq.js";import"./PostBody-DmAe866_.js";import"./PostHeader-DCIx-G6F.js";import"./PostPreview-2OAWuSf_.js";import"./PostTitle-MmLQch1j.js";import{P as f}from"./Posts-CX0xrqtC.js";import"./preload-helper-Dhgqe2qg.js";import"./metadata-BgGm_LXU.js";import"./link-CRa9TLBr.js";import"./use-merged-ref-suOZneGN.js";import"./backQuoteToCodeElement-JvVutd65.js";const g="note__";function x(t){if(!t.startsWith(g))return null;const e=t.slice(g.length),s=e.length%4===0?"":"=".repeat(4-e.length%4),l=e.replace(/-/g,"+").replace(/_/g,"/")+s;try{const a=Buffer.from(l,"base64").toString("utf-8");return a===""?null:a}catch{return null}}function j(t){return x(t.filename)}function N(t){const e=j(t);return e?{href:e,externalUrl:e}:{href:`/posts/${t.filename}`,externalUrl:null}}function R(t,e){return e?t.filter(s=>s.tags?.includes(e)):[]}const C="opacity-50",u=({posts:t,tags:e,initialTag:s,tagStats:l})=>{const[a,m]=d.useState(s);d.useEffect(()=>{m(s)},[s]);const T=d.useMemo(()=>a?R(t,a).map(r=>({...r,...N(r)})):[],[t,a]);return e.length===0?n.jsx("p",{className:"text-sm text-gray-500",children:"タグがありません。"}):n.jsxs("div",{children:[n.jsx("div",{className:"flex flex-wrap gap-4 mb-8",children:e.map(r=>n.jsx("button",{onClick:()=>m(r),title:`${r} (${l[r]??0})`,className:r===a?void 0:C,children:n.jsx(y,{text:r})},r))}),n.jsx("div",{children:n.jsx(f,{posts:T})})]})};u.__docgenInfo={description:"",methods:[],displayName:"TagFilter",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"Post"}],raw:"Post[]"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},initialTag:{required:!0,tsType:{name:"string"},description:""},tagStats:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"},description:""}}};const I={title:"Features/Posts/TagFilter",component:u,tags:["autodocs"],argTypes:{posts:{control:!1,description:"フィルタリング対象の記事配列。"},tags:{control:"object",description:"表示するタグの配列。"},initialTag:{control:"text",description:"初期選択されるタグ。"},tagStats:{control:"object",description:"各タグの記事数を示すオブジェクト。"}},parameters:{docs:{description:{component:"タグで記事をフィルタリングする機能を提供するコンポーネント。タグをクリックすると、そのタグを持つ記事のみが表示されます。"}}}},S=[{title:"Next.jsで始めるブログ開発",date:"2024-11-21",content:"",filename:"nextjs-blog",tags:["Next.js","React","TypeScript"]},{title:"Reactの基礎を学ぶ",date:"2024-11-20",content:"",filename:"react-basics",tags:["React","JavaScript"]},{title:"TypeScriptの型システム入門",date:"2024-11-19",content:"",filename:"typescript-types",tags:["TypeScript"]},{title:"Tailwind CSSでスタイリング",date:"2024-11-18",content:"",filename:"tailwind-styling",tags:["Tailwind CSS","CSS"]},{title:"フルスタック開発の始め方",date:"2024-11-17",content:"",filename:"fullstack-dev",tags:["Next.js","TypeScript","React"]}],i={args:{posts:S,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS"],initialTag:"React",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1}},parameters:{docs:{description:{story:'複数のタグと記事を含む基本的な例。初期タグは"React"。'}}}},o={args:{posts:S.filter(t=>t.tags?.includes("TypeScript")),tags:["TypeScript"],initialTag:"TypeScript",tagStats:{TypeScript:3}},parameters:{docs:{description:{story:"タグが1つだけの場合の例。"}}}},c={args:{posts:S,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS","CSS","Node.js","PostgreSQL","Docker","AWS"],initialTag:"Next.js",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1,"Node.js":0,PostgreSQL:0,Docker:0,AWS:0}},parameters:{docs:{description:{story:"多数のタグがある場合の例。フレックスラップで複数行に表示されます。"}}}},p={args:{posts:[],tags:[],initialTag:"",tagStats:{}},parameters:{docs:{description:{story:"タグが存在しない場合、メッセージが表示されます。"}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const O=["Default","SingleTag","ManyTags","NoTags"];export{i as Default,c as ManyTags,p as NoTags,o as SingleTag,O as __namedExportsOrder,I as default};
