import{j as e}from"./jsx-runtime-BMpsxvGK.js";import{b as g}from"./iframe-DRPE7Y9R.js";import"./preload-helper-Dhgqe2qg.js";const v="text-slate-500",h=(s,r)=>r===0||Number.isNaN(s)||s===void 0||s<0?0:s>=r?r-1:s,b=({menuTitles:s,bodies:r,initialIndex:c})=>{const t=Math.min(s.length,r.length),[l,n]=g.useState(()=>h(c??0,t));g.useEffect(()=>{n(h(c??0,t))},[c,t]);const y=s.slice(0,t),m=t===0?null:r[l]??null;return t===0||m===null?null:e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:"flex flex-wrap gap-8",role:"tablist",children:y.map((p,u)=>{const x=u===l;return e.jsx("button",{type:"button",onClick:()=>n(u),role:"tab","aria-selected":x,className:`text-left ${x?"":v}`.trim(),children:e.jsx("h2",{className:"mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight",children:p})},p)})}),e.jsx("div",{children:m})]})};b.__docgenInfo={description:"",methods:[],displayName:"TabLayout",props:{menuTitles:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},bodies:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},initialIndex:{required:!1,tsType:{name:"number"},description:""}}};const f={title:"Features/Layout/TabLayout",component:b,tags:["autodocs"],argTypes:{menuTitles:{control:"object",description:"タブメニューのタイトル配列。"},bodies:{control:!1,description:"各タブに対応する本文コンテンツ配列(ReactElement)。"},initialIndex:{control:"number",description:"初期表示するタブのインデックス(0始まり)。"}},parameters:{docs:{description:{component:"タブ切り替え機能を提供するレイアウトコンポーネント。クリックでタブを切り替え、対応するコンテンツを表示します。"}}}},a={args:{menuTitles:["Posts","Tags","Me"],bodies:[e.jsx("div",{children:e.jsx("p",{children:"記事一覧のコンテンツがここに表示されます。"})},"posts"),e.jsx("div",{children:e.jsx("p",{children:"タグ一覧のコンテンツがここに表示されます。"})},"tags"),e.jsx("div",{children:e.jsx("p",{children:"プロフィールのコンテンツがここに表示されます。"})},"me")]},parameters:{docs:{description:{story:"ホームページで使用されている実際のタブ構成。"}}}},i={args:{menuTitles:["Overview","Details"],bodies:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl mb-4",children:"概要"}),e.jsx("p",{children:"プロジェクトの概要説明がここに入ります。"})]},"overview"),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl mb-4",children:"詳細"}),e.jsx("p",{children:"詳細な説明や技術スタックなどがここに入ります。"})]},"details")]},parameters:{docs:{description:{story:"2つのタブを使用する例。"}}}},d={args:{menuTitles:["Tab 1","Tab 2","Tab 3"],bodies:[e.jsx("div",{children:"タブ1のコンテンツ"},"1"),e.jsx("div",{children:"タブ2のコンテンツ"},"2"),e.jsx("div",{children:"タブ3のコンテンツ"},"3")],initialIndex:2},parameters:{docs:{description:{story:"初期表示を3番目のタブに設定した例。"}}}},o={args:{menuTitles:["Articles","Gallery"],bodies:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("article",{className:"p-4 border border-gray-700 rounded",children:[e.jsx("h3",{className:"text-lg font-bold mb-2",children:"記事タイトル1"}),e.jsx("p",{className:"text-sm text-gray-400",children:"2024-11-21"})]}),e.jsxs("article",{className:"p-4 border border-gray-700 rounded",children:[e.jsx("h3",{className:"text-lg font-bold mb-2",children:"記事タイトル2"}),e.jsx("p",{className:"text-sm text-gray-400",children:"2024-11-20"})]})]},"articles"),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-24 bg-gray-700 rounded"}),e.jsx("div",{className:"h-24 bg-gray-700 rounded"}),e.jsx("div",{className:"h-24 bg-gray-700 rounded"})]},"gallery")]},parameters:{docs:{description:{story:"リッチなコンテンツを含むタブの例。"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    menuTitles: ['Posts', 'Tags', 'Me'],
    bodies: [<div key="posts">
        <p>記事一覧のコンテンツがここに表示されます。</p>
      </div>, <div key="tags">
        <p>タグ一覧のコンテンツがここに表示されます。</p>
      </div>, <div key="me">
        <p>プロフィールのコンテンツがここに表示されます。</p>
      </div>]
  },
  parameters: {
    docs: {
      description: {
        story: 'ホームページで使用されている実際のタブ構成。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    menuTitles: ['Overview', 'Details'],
    bodies: [<div key="overview">
        <h3 className="text-xl mb-4">概要</h3>
        <p>プロジェクトの概要説明がここに入ります。</p>
      </div>, <div key="details">
        <h3 className="text-xl mb-4">詳細</h3>
        <p>詳細な説明や技術スタックなどがここに入ります。</p>
      </div>]
  },
  parameters: {
    docs: {
      description: {
        story: '2つのタブを使用する例。'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    menuTitles: ['Tab 1', 'Tab 2', 'Tab 3'],
    bodies: [<div key="1">タブ1のコンテンツ</div>, <div key="2">タブ2のコンテンツ</div>, <div key="3">タブ3のコンテンツ</div>],
    initialIndex: 2
  },
  parameters: {
    docs: {
      description: {
        story: '初期表示を3番目のタブに設定した例。'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    menuTitles: ['Articles', 'Gallery'],
    bodies: [<div key="articles" className="space-y-4">
        <article className="p-4 border border-gray-700 rounded">
          <h3 className="text-lg font-bold mb-2">記事タイトル1</h3>
          <p className="text-sm text-gray-400">2024-11-21</p>
        </article>
        <article className="p-4 border border-gray-700 rounded">
          <h3 className="text-lg font-bold mb-2">記事タイトル2</h3>
          <p className="text-sm text-gray-400">2024-11-20</p>
        </article>
      </div>, <div key="gallery" className="grid grid-cols-3 gap-4">
        <div className="h-24 bg-gray-700 rounded" />
        <div className="h-24 bg-gray-700 rounded" />
        <div className="h-24 bg-gray-700 rounded" />
      </div>]
  },
  parameters: {
    docs: {
      description: {
        story: 'リッチなコンテンツを含むタブの例。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const k=["Default","TwoTabs","WithInitialIndex","WithRichContent"];export{a as Default,i as TwoTabs,d as WithInitialIndex,o as WithRichContent,k as __namedExportsOrder,f as default};
