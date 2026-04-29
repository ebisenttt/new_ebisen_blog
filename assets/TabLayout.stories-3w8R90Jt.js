import{r as g,j as e,p as I}from"./iframe-Bd5CrwUb.js";import"./preload-helper-Dhgqe2qg.js";const f="text-slate-500",v=(s,t)=>t===0||Number.isNaN(s)||s===void 0||s<0?0:s>=t?t-1:s,b=({menuTitles:s,bodies:t,initialIndex:r})=>{const n=Math.min(s.length,t.length),[m,p]=g.useState(()=>v(r??0,n)),[j,N]=g.useState(r);j!==r&&(N(r),p(v(r??0,n)));const B=s.slice(0,n),u=n===0?null:t[m]??null;return n===0||u===null?null:e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:"flex flex-wrap gap-8",role:"tablist",children:B.map((y,x)=>{const h=x===m;return e.jsx("button",{type:"button",onClick:()=>p(x),role:"tab","aria-selected":h,className:`text-left ${h?"":f}`.trim(),children:e.jsx("h2",{className:"mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight",children:y})},y)})}),e.jsx("div",{children:u})]})};b.__docgenInfo={description:"",methods:[],displayName:"TabLayout",props:{menuTitles:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},bodies:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},initialIndex:{required:!1,tsType:{name:"number"},description:""}}};const{expect:a,userEvent:D,within:T}=__STORYBOOK_MODULE_TEST__,l=I.meta({title:"Features/Layout/TabLayout",component:b,tags:["autodocs"],argTypes:{menuTitles:{control:"object",description:"タブメニューのタイトル配列。"},bodies:{control:!1,description:"各タブに対応する本文コンテンツ配列(ReactElement)。"},initialIndex:{control:"number",description:"初期表示するタブのインデックス(0始まり)。"}},parameters:{docs:{description:{component:"タブ切り替え機能を提供するレイアウトコンポーネント。クリックでタブを切り替え、対応するコンテンツを表示します。"}}}}),i=l.story({args:{menuTitles:["Posts","Tags","Me"],bodies:[e.jsx("div",{children:e.jsx("p",{children:"記事一覧のコンテンツがここに表示されます。"})},"posts"),e.jsx("div",{children:e.jsx("p",{children:"タグ一覧のコンテンツがここに表示されます。"})},"tags"),e.jsx("div",{children:e.jsx("p",{children:"プロフィールのコンテンツがここに表示されます。"})},"me")]},parameters:{docs:{description:{story:"ホームページで使用されている実際のタブ構成。"}}},play:async({canvasElement:s})=>{const t=T(s);a(t.getByText("記事一覧のコンテンツがここに表示されます。")).toBeInTheDocument(),a(t.queryByText("タグ一覧のコンテンツがここに表示されます。")).not.toBeInTheDocument(),await D.click(t.getByRole("tab",{name:"Tags"})),a(t.getByText("タグ一覧のコンテンツがここに表示されます。")).toBeInTheDocument(),a(t.queryByText("記事一覧のコンテンツがここに表示されます。")).not.toBeInTheDocument()}}),o=l.story({args:{menuTitles:["Overview","Details"],bodies:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl mb-4",children:"概要"}),e.jsx("p",{children:"プロジェクトの概要説明がここに入ります。"})]},"overview"),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl mb-4",children:"詳細"}),e.jsx("p",{children:"詳細な説明や技術スタックなどがここに入ります。"})]},"details")]},parameters:{docs:{description:{story:"2つのタブを使用する例。"}}}}),c=l.story({args:{menuTitles:["Tab 1","Tab 2","Tab 3"],bodies:[e.jsx("div",{children:"タブ1のコンテンツ"},"1"),e.jsx("div",{children:"タブ2のコンテンツ"},"2"),e.jsx("div",{children:"タブ3のコンテンツ"},"3")],initialIndex:2},parameters:{docs:{description:{story:"初期表示を3番目のタブに設定した例。"}}},play:async({canvasElement:s})=>{const t=T(s);a(t.getByText("タブ3のコンテンツ")).toBeInTheDocument(),a(t.queryByText("タブ1のコンテンツ")).not.toBeInTheDocument()}}),d=l.story({args:{menuTitles:["Articles","Gallery"],bodies:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("article",{className:"p-4 border border-gray-700 rounded",children:[e.jsx("h3",{className:"text-lg font-bold mb-2",children:"記事タイトル1"}),e.jsx("p",{className:"text-sm text-gray-400",children:"2024-11-21"})]}),e.jsxs("article",{className:"p-4 border border-gray-700 rounded",children:[e.jsx("h3",{className:"text-lg font-bold mb-2",children:"記事タイトル2"}),e.jsx("p",{className:"text-sm text-gray-400",children:"2024-11-20"})]})]},"articles"),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-24 bg-gray-700 rounded"}),e.jsx("div",{className:"h-24 bg-gray-700 rounded"}),e.jsx("div",{className:"h-24 bg-gray-700 rounded"})]},"gallery")]},parameters:{docs:{description:{story:"リッチなコンテンツを含むタブの例。"}}}});i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('記事一覧のコンテンツがここに表示されます。')).toBeInTheDocument();
    expect(canvas.queryByText('タグ一覧のコンテンツがここに表示されます。')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Tags'
    }));
    expect(canvas.getByText('タグ一覧のコンテンツがここに表示されます。')).toBeInTheDocument();
    expect(canvas.queryByText('記事一覧のコンテンツがここに表示されます。')).not.toBeInTheDocument();
  }
})`,...i.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...o.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('タブ3のコンテンツ')).toBeInTheDocument();
    expect(canvas.queryByText('タブ1のコンテンツ')).not.toBeInTheDocument();
  }
})`,...c.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}};const k=["Default","TwoTabs","WithInitialIndex","WithRichContent"];export{i as Default,o as TwoTabs,c as WithInitialIndex,d as WithRichContent,k as __namedExportsOrder};
