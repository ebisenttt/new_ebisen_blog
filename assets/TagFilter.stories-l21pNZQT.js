import{j as n}from"./jsx-runtime-Big8sbBF.js";import{a as g}from"./iframe-DP25XCWT.js";import{B as b}from"./Badge-BEk0nViE.js";import"./Card-CRdUK99d.js";import"./Container-DX1BEMnH.js";import"./ExternalLinkIcon-Dc2jDuq6.js";import"./Logo-UHO-Gcpf.js";import"./Basic-jfzfpS28.js";import"./Wrapper-CrfQqFuJ.js";import"./DateFormatter-DHQrS1NR.js";import"./PostBody-B-iTB6yZ.js";import"./PostHeader-CCjPWjd8.js";import"./PostPreview-eTIwP5Gj.js";import"./PostTitle-By9UwiPw.js";import{P as D}from"./Posts-Dj3frOJ9.js";import"./preload-helper-Dhgqe2qg.js";import"./metadata-BgGm_LXU.js";import"./link-DyiQJEEI.js";import"./use-merged-ref-DJLgNEVR.js";import"./backQuoteToCodeElement-JvVutd65.js";const h="note__",A="qiita__",J=[{domain:"note.com",prefix:h},{domain:"qiita.com",prefix:A}];function k(e){const t=J.find(i=>e.startsWith(i.prefix));if(!t&&!e.startsWith(h))return null;const s=t?t.prefix:h,r=e.slice(s.length),o=r.length%4===0?"":"=".repeat(4-r.length%4),c=r.replace(/-/g,"+").replace(/_/g,"/")+o;try{const i=Buffer.from(c,"base64").toString("utf-8");return i===""?null:i}catch{return null}}function F(e){return k(e.filename)}function I(e){const t=F(e);return t?{href:t,externalUrl:t}:{href:`/posts/${e.filename}`,externalUrl:null}}function L(e,t){return t?e.filter(s=>{var r;return(r=s.tags)===null||r===void 0?void 0:r.includes(t)}):[]}const M="opacity-50",E=({posts:e,tags:t,initialTag:s,tagStats:r})=>{const[o,c]=g.useState(s);g.useEffect(()=>{c(s)},[s]);const i=g.useMemo(()=>o?L(e,o).map(a=>({...a,...I(a)})):[],[e,o]);return t.length===0?n.jsx("p",{className:"text-sm text-gray-500",children:"タグがありません。"}):n.jsxs("div",{children:[n.jsx("div",{className:"flex flex-wrap gap-4 mb-8",children:t.map(a=>{var S;return n.jsx("button",{onClick:()=>c(a),title:`${a} (${(S=r[a])!==null&&S!==void 0?S:0})`,className:a===o?void 0:M,children:n.jsx(b,{text:a})},a)})}),n.jsx("div",{children:n.jsx(D,{posts:i})})]})};E.__docgenInfo={description:"",methods:[],displayName:"TagFilter",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"Post"}],raw:"Post[]"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},initialTag:{required:!0,tsType:{name:"string"},description:""},tagStats:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"},description:""}}};var u,T,f,v,y,_,x,j,N,R,C,P;const it={title:"Features/Posts/TagFilter",component:E,tags:["autodocs"],argTypes:{posts:{control:!1,description:"フィルタリング対象の記事配列。"},tags:{control:"object",description:"表示するタグの配列。"},initialTag:{control:"text",description:"初期選択されるタグ。"},tagStats:{control:"object",description:"各タグの記事数を示すオブジェクト。"}},parameters:{docs:{description:{component:"タグで記事をフィルタリングする機能を提供するコンポーネント。タグをクリックすると、そのタグを持つ記事のみが表示されます。"}}}},w=[{title:"Next.jsで始めるブログ開発",date:"2024-11-21",content:"",filename:"nextjs-blog",tags:["Next.js","React","TypeScript"]},{title:"Reactの基礎を学ぶ",date:"2024-11-20",content:"",filename:"react-basics",tags:["React","JavaScript"]},{title:"TypeScriptの型システム入門",date:"2024-11-19",content:"",filename:"typescript-types",tags:["TypeScript"]},{title:"Tailwind CSSでスタイリング",date:"2024-11-18",content:"",filename:"tailwind-styling",tags:["Tailwind CSS","CSS"]},{title:"フルスタック開発の始め方",date:"2024-11-17",content:"",filename:"fullstack-dev",tags:["Next.js","TypeScript","React"]}],p={args:{posts:w,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS"],initialTag:"React",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1}},parameters:{docs:{description:{story:'複数のタグと記事を含む基本的な例。初期タグは"React"。'}}}},l={args:{posts:w.filter(e=>{var t;return(t=e.tags)===null||t===void 0?void 0:t.includes("TypeScript")}),tags:["TypeScript"],initialTag:"TypeScript",tagStats:{TypeScript:3}},parameters:{docs:{description:{story:"タグが1つだけの場合の例。"}}}},d={args:{posts:w,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS","CSS","Node.js","PostgreSQL","Docker","AWS"],initialTag:"Next.js",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1,"Node.js":0,PostgreSQL:0,Docker:0,AWS:0}},parameters:{docs:{description:{story:"多数のタグがある場合の例。フレックスラップで複数行に表示されます。"}}}},m={args:{posts:[],tags:[],initialTag:"",tagStats:{}},parameters:{docs:{description:{story:"タグが存在しない場合、メッセージが表示されます。"}}}};p.parameters={...p.parameters,docs:{...(u=p.parameters)===null||u===void 0?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=p.parameters)===null||f===void 0||(T=f.docs)===null||T===void 0?void 0:T.source}}};l.parameters={...l.parameters,docs:{...(v=l.parameters)===null||v===void 0?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=l.parameters)===null||_===void 0||(y=_.docs)===null||y===void 0?void 0:y.source}}};d.parameters={...d.parameters,docs:{...(x=d.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=d.parameters)===null||N===void 0||(j=N.docs)===null||j===void 0?void 0:j.source}}};m.parameters={...m.parameters,docs:{...(R=m.parameters)===null||R===void 0?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=m.parameters)===null||P===void 0||(C=P.docs)===null||C===void 0?void 0:C.source}}};const nt=["Default","SingleTag","ManyTags","NoTags"];export{p as Default,d as ManyTags,m as NoTags,l as SingleTag,nt as __namedExportsOrder,it as default};
