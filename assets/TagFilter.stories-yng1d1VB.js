import{j as a}from"./jsx-runtime-BEK809ZS.js";import{a as m}from"./iframe-Br6MWqB4.js";import{B as f}from"./Badge-BUKoEeZR.js";import"./Card-GSuIFw_N.js";import"./Container-1AhqYCVG.js";import"./ExternalLinkIcon-BD-9cJtR.js";import"./Logo-ClBUUF9w.js";import"./Basic-BM_IbD3V.js";import"./Wrapper-DLh3W1Ut.js";import"./DateFormatter-D1LgTW5k.js";import"./PostBody-YMuIPEU1.js";import"./PostHeader-uzCDiQVE.js";import"./PostPreview-B9M96Z4Q.js";import"./PostTitle-3EVSuXjB.js";import{P as y}from"./Posts-Bfpc342D.js";import"./preload-helper-Dhgqe2qg.js";import"./metadata-BgGm_LXU.js";import"./link-DPPQREK0.js";import"./use-merged-ref-BVqn-Gfw.js";import"./backQuoteToCodeElement-JvVutd65.js";const g="note__",x="qiita__",j=[{domain:"note.com",prefix:g},{domain:"qiita.com",prefix:x}];function N(t){const e=j.find(i=>t.startsWith(i.prefix));if(!e&&!t.startsWith(g))return null;const s=e?e.prefix:g,o=t.slice(s.length),n=o.length%4===0?"":"=".repeat(4-o.length%4),c=o.replace(/-/g,"+").replace(/_/g,"/")+n;try{const i=Buffer.from(c,"base64").toString("utf-8");return i===""?null:i}catch{return null}}function R(t){return N(t.filename)}function C(t){const e=R(t);return e?{href:e,externalUrl:e}:{href:`/posts/${t.filename}`,externalUrl:null}}function P(t,e){return e?t.filter(s=>s.tags?.includes(e)):[]}const h="opacity-50",T=({posts:t,tags:e,initialTag:s,tagStats:o})=>{const[n,c]=m.useState(s);m.useEffect(()=>{c(s)},[s]);const i=m.useMemo(()=>n?P(t,n).map(r=>({...r,...C(r)})):[],[t,n]);return e.length===0?a.jsx("p",{className:"text-sm text-gray-500",children:"タグがありません。"}):a.jsxs("div",{children:[a.jsx("div",{className:"flex flex-wrap gap-4 mb-8",children:e.map(r=>a.jsx("button",{onClick:()=>c(r),title:`${r} (${o[r]??0})`,className:r===n?void 0:h,children:a.jsx(f,{text:r})},r))}),a.jsx("div",{children:a.jsx(y,{posts:i})})]})};T.__docgenInfo={description:"",methods:[],displayName:"TagFilter",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"Post"}],raw:"Post[]"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},initialTag:{required:!0,tsType:{name:"string"},description:""},tagStats:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"},description:""}}};const $={title:"Features/Posts/TagFilter",component:T,tags:["autodocs"],argTypes:{posts:{control:!1,description:"フィルタリング対象の記事配列。"},tags:{control:"object",description:"表示するタグの配列。"},initialTag:{control:"text",description:"初期選択されるタグ。"},tagStats:{control:"object",description:"各タグの記事数を示すオブジェクト。"}},parameters:{docs:{description:{component:"タグで記事をフィルタリングする機能を提供するコンポーネント。タグをクリックすると、そのタグを持つ記事のみが表示されます。"}}}},u=[{title:"Next.jsで始めるブログ開発",date:"2024-11-21",content:"",filename:"nextjs-blog",tags:["Next.js","React","TypeScript"]},{title:"Reactの基礎を学ぶ",date:"2024-11-20",content:"",filename:"react-basics",tags:["React","JavaScript"]},{title:"TypeScriptの型システム入門",date:"2024-11-19",content:"",filename:"typescript-types",tags:["TypeScript"]},{title:"Tailwind CSSでスタイリング",date:"2024-11-18",content:"",filename:"tailwind-styling",tags:["Tailwind CSS","CSS"]},{title:"フルスタック開発の始め方",date:"2024-11-17",content:"",filename:"fullstack-dev",tags:["Next.js","TypeScript","React"]}],p={args:{posts:u,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS"],initialTag:"React",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1}},parameters:{docs:{description:{story:'複数のタグと記事を含む基本的な例。初期タグは"React"。'}}}},l={args:{posts:u.filter(t=>t.tags?.includes("TypeScript")),tags:["TypeScript"],initialTag:"TypeScript",tagStats:{TypeScript:3}},parameters:{docs:{description:{story:"タグが1つだけの場合の例。"}}}},d={args:{posts:u,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS","CSS","Node.js","PostgreSQL","Docker","AWS"],initialTag:"Next.js",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1,"Node.js":0,PostgreSQL:0,Docker:0,AWS:0}},parameters:{docs:{description:{story:"多数のタグがある場合の例。フレックスラップで複数行に表示されます。"}}}},S={args:{posts:[],tags:[],initialTag:"",tagStats:{}},parameters:{docs:{description:{story:"タグが存在しない場合、メッセージが表示されます。"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const z=["Default","SingleTag","ManyTags","NoTags"];export{p as Default,d as ManyTags,S as NoTags,l as SingleTag,z as __namedExportsOrder,$ as default};
