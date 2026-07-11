import{c as e,i as t}from"./preload-helper-B-xQYkru.js";import{t as n}from"./react-ClSb_G98.js";import{A as r,n as i,t as a}from"./iframe-BdMlSyPG.js";var o,s,c,l,u,d=t((()=>{o=r(),s=e(n()),c=`text-slate-500`,l=(e,t)=>t===0||Number.isNaN(e)||e===void 0||e<0?0:e>=t?t-1:e,u=({menuTitles:e,bodies:t,initialIndex:n})=>{let r=Math.min(e.length,t.length),[i,a]=(0,s.useState)(()=>l(n??0,r)),[u,d]=(0,s.useState)(n);u!==n&&(d(n),a(l(n??0,r)));let f=e.slice(0,r),p=r===0?null:t[i]??null;return r===0||p===null?null:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`nav`,{className:`flex flex-wrap gap-8`,role:`tablist`,children:f.map((e,t)=>{let n=t===i;return(0,o.jsx)(`button`,{type:`button`,onClick:()=>a(t),role:`tab`,"aria-selected":n,className:`text-left ${n?``:c}`.trim(),children:(0,o.jsx)(`h2`,{className:`mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight`,children:e})},e)})}),(0,o.jsx)(`div`,{children:p})]})},u.__docgenInfo={description:``,methods:[],displayName:`TabLayout`,props:{menuTitles:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},bodies:{required:!0,tsType:{name:`Array`,elements:[{name:`ReactElement`}],raw:`ReactElement[]`},description:``},initialIndex:{required:!1,tsType:{name:`number`},description:``}}}})),f,p,m,h,g,_,v,y,b,x;t((()=>{f=r(),a(),d(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g=i.meta({title:`Features/Layout/TabLayout`,component:u,tags:[`autodocs`],argTypes:{menuTitles:{control:`object`,description:`タブメニューのタイトル配列。`},bodies:{control:!1,description:`各タブに対応する本文コンテンツ配列(ReactElement)。`},initialIndex:{control:`number`,description:`初期表示するタブのインデックス(0始まり)。`}},parameters:{docs:{description:{component:`タブ切り替え機能を提供するレイアウトコンポーネント。クリックでタブを切り替え、対応するコンテンツを表示します。`}}}}),_=g.story({args:{menuTitles:[`Posts`,`Tags`,`Me`],bodies:[(0,f.jsx)(`div`,{children:(0,f.jsx)(`p`,{children:`記事一覧のコンテンツがここに表示されます。`})},`posts`),(0,f.jsx)(`div`,{children:(0,f.jsx)(`p`,{children:`タグ一覧のコンテンツがここに表示されます。`})},`tags`),(0,f.jsx)(`div`,{children:(0,f.jsx)(`p`,{children:`プロフィールのコンテンツがここに表示されます。`})},`me`)]},parameters:{docs:{description:{story:`ホームページで使用されている実際のタブ構成。`}}},play:async({canvasElement:e})=>{let t=h(e);p(t.getByText(`記事一覧のコンテンツがここに表示されます。`)).toBeInTheDocument(),p(t.queryByText(`タグ一覧のコンテンツがここに表示されます。`)).not.toBeInTheDocument(),await m.click(t.getByRole(`tab`,{name:`Tags`})),p(t.getByText(`タグ一覧のコンテンツがここに表示されます。`)).toBeInTheDocument(),p(t.queryByText(`記事一覧のコンテンツがここに表示されます。`)).not.toBeInTheDocument()}}),v=g.story({args:{menuTitles:[`Overview`,`Details`],bodies:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{className:`text-xl mb-4`,children:`概要`}),(0,f.jsx)(`p`,{children:`プロジェクトの概要説明がここに入ります。`})]},`overview`),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{className:`text-xl mb-4`,children:`詳細`}),(0,f.jsx)(`p`,{children:`詳細な説明や技術スタックなどがここに入ります。`})]},`details`)]},parameters:{docs:{description:{story:`2つのタブを使用する例。`}}}}),y=g.story({args:{menuTitles:[`Tab 1`,`Tab 2`,`Tab 3`],bodies:[(0,f.jsx)(`div`,{children:`タブ1のコンテンツ`},`1`),(0,f.jsx)(`div`,{children:`タブ2のコンテンツ`},`2`),(0,f.jsx)(`div`,{children:`タブ3のコンテンツ`},`3`)],initialIndex:2},parameters:{docs:{description:{story:`初期表示を3番目のタブに設定した例。`}}},play:async({canvasElement:e})=>{let t=h(e);p(t.getByText(`タブ3のコンテンツ`)).toBeInTheDocument(),p(t.queryByText(`タブ1のコンテンツ`)).not.toBeInTheDocument()}}),b=g.story({args:{menuTitles:[`Articles`,`Gallery`],bodies:[(0,f.jsxs)(`div`,{className:`space-y-4`,children:[(0,f.jsxs)(`article`,{className:`p-4 border border-gray-700 rounded`,children:[(0,f.jsx)(`h3`,{className:`text-lg font-bold mb-2`,children:`記事タイトル1`}),(0,f.jsx)(`p`,{className:`text-sm text-gray-400`,children:`2024-11-21`})]}),(0,f.jsxs)(`article`,{className:`p-4 border border-gray-700 rounded`,children:[(0,f.jsx)(`h3`,{className:`text-lg font-bold mb-2`,children:`記事タイトル2`}),(0,f.jsx)(`p`,{className:`text-sm text-gray-400`,children:`2024-11-20`})]})]},`articles`),(0,f.jsxs)(`div`,{className:`grid grid-cols-3 gap-4`,children:[(0,f.jsx)(`div`,{className:`h-24 bg-gray-700 rounded`}),(0,f.jsx)(`div`,{className:`h-24 bg-gray-700 rounded`}),(0,f.jsx)(`div`,{className:`h-24 bg-gray-700 rounded`})]},`gallery`)]},parameters:{docs:{description:{story:`リッチなコンテンツを含むタブの例。`}}}}),_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...b.input.parameters?.docs?.source}}},x=[`Default`,`TwoTabs`,`WithInitialIndex`,`WithRichContent`]}))();export{_ as Default,v as TwoTabs,y as WithInitialIndex,b as WithRichContent,x as __namedExportsOrder};