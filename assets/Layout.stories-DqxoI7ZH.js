import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{n as i,t as a}from"./Footer-BPVNjSY8.js";var o=e((()=>{i()})),s,c,l=e((()=>{s=t(),o(),c=({children:e})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`div`,{className:`min-h-screen mb-16`,children:(0,s.jsx)(`main`,{children:e})}),(0,s.jsx)(a,{})]}),c.__docgenInfo={description:``,methods:[],displayName:`Layout`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),u,d,f,p,m,h,g;e((()=>{u=t(),r(),l(),{expect:d}=__STORYBOOK_MODULE_TEST__,f=n.meta({title:`Widgets/Layout/SiteLayout/Layout`,component:c,tags:[`autodocs`],argTypes:{children:{control:!1,description:`メインコンテンツ領域に表示する子要素。`}},parameters:{docs:{description:{component:`サイト全体のレイアウトコンポーネント。メインコンテンツ領域とフッターを含みます。`}},layout:`fullscreen`}}),p=f.story({args:{children:(0,u.jsxs)(`div`,{className:`p-8`,children:[(0,u.jsx)(`h1`,{className:`text-3xl font-bold mb-4`,children:`ページタイトル`}),(0,u.jsx)(`p`,{className:`mb-4`,children:`これはLayoutコンポーネント内に配置されるメインコンテンツの例です。`}),(0,u.jsx)(`p`,{children:`Layoutコンポーネントは最小高さ(min-h-screen)を確保し、下部にフッターを配置します。`})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`main`);d(t).not.toBeNull(),d(t).toHaveTextContent(`ページタイトル`)}}),m=f.story({args:{children:(0,u.jsxs)(`article`,{className:`mx-auto max-w-2xl p-8 prose dark:prose-invert`,children:[(0,u.jsx)(`h1`,{children:`記事タイトル`}),(0,u.jsx)(`p`,{children:`記事本文のコンテンツがここに入ります。`}),(0,u.jsx)(`h2`,{children:`セクション見出し`}),(0,u.jsx)(`p`,{children:`Layoutコンポーネントで記事をラップした場合の表示例です。`})]})},parameters:{docs:{description:{story:`記事コンテンツをラップする例。`}}}}),h=f.story({args:{children:(0,u.jsx)(`div`,{className:`p-8`,children:(0,u.jsx)(`p`,{children:`最小限のコンテンツ`})})},parameters:{docs:{description:{story:`少量のコンテンツでも、min-h-screenによりフッターが画面下部に配置されます。`}}}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">ページタイトル</h1>
        <p className="mb-4">
          これはLayoutコンポーネント内に配置されるメインコンテンツの例です。
        </p>
        <p>
          Layoutコンポーネントは最小高さ(min-h-screen)を確保し、下部にフッターを配置します。
        </p>
      </div>
  },
  play: async ({
    canvasElement
  }) => {
    const main = canvasElement.querySelector('main');
    expect(main).not.toBeNull();
    expect(main).toHaveTextContent('ページタイトル');
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <article className="mx-auto max-w-2xl p-8 prose dark:prose-invert">
        <h1>記事タイトル</h1>
        <p>記事本文のコンテンツがここに入ります。</p>
        <h2>セクション見出し</h2>
        <p>Layoutコンポーネントで記事をラップした場合の表示例です。</p>
      </article>
  },
  parameters: {
    docs: {
      description: {
        story: '記事コンテンツをラップする例。'
      }
    }
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <div className="p-8">
        <p>最小限のコンテンツ</p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: '少量のコンテンツでも、min-h-screenによりフッターが画面下部に配置されます。'
      }
    }
  }
})`,...h.input.parameters?.docs?.source}}},g=[`Default`,`WithArticle`,`MinimalContent`]}))();export{p as Default,h as MinimalContent,m as WithArticle,g as __namedExportsOrder};