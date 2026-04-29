import{j as e,p}from"./iframe-Bd5CrwUb.js";import{F as m}from"./Footer-CXel2uCx.js";import"./preload-helper-Dhgqe2qg.js";import"./image-Ctr0a-nZ.js";import"./use-merged-ref-CKNCJYSD.js";import"./Badge-CRezG6dZ.js";import"./Card-BJEewEi1.js";import"./Container-BzaPk5cs.js";import"./ExternalLinkIcon-Bs2ua_Tf.js";import"./Logo-b4LtZ8dj.js";import"./Basic-lT1TAWfK.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-DJFffFlK.js";const c=({children:a})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"min-h-screen mb-16",children:e.jsx("main",{children:a})}),e.jsx(m,{})]});c.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const{expect:n}=__STORYBOOK_MODULE_TEST__,o=p.meta({title:"Widgets/Layout/SiteLayout/Layout",component:c,tags:["autodocs"],argTypes:{children:{control:!1,description:"メインコンテンツ領域に表示する子要素。"}},parameters:{docs:{description:{component:"サイト全体のレイアウトコンポーネント。メインコンテンツ領域とフッターを含みます。"}},layout:"fullscreen"}}),t=o.story({args:{children:e.jsxs("div",{className:"p-8",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"ページタイトル"}),e.jsx("p",{className:"mb-4",children:"これはLayoutコンポーネント内に配置されるメインコンテンツの例です。"}),e.jsx("p",{children:"Layoutコンポーネントは最小高さ(min-h-screen)を確保し、下部にフッターを配置します。"})]})},play:async({canvasElement:a})=>{const i=a.querySelector("main");n(i).not.toBeNull(),n(i).toHaveTextContent("ページタイトル")}}),r=o.story({args:{children:e.jsxs("article",{className:"mx-auto max-w-2xl p-8 prose dark:prose-invert",children:[e.jsx("h1",{children:"記事タイトル"}),e.jsx("p",{children:"記事本文のコンテンツがここに入ります。"}),e.jsx("h2",{children:"セクション見出し"}),e.jsx("p",{children:"Layoutコンポーネントで記事をラップした場合の表示例です。"})]})},parameters:{docs:{description:{story:"記事コンテンツをラップする例。"}}}}),s=o.story({args:{children:e.jsx("div",{className:"p-8",children:e.jsx("p",{children:"最小限のコンテンツ"})})},parameters:{docs:{description:{story:"少量のコンテンツでも、min-h-screenによりフッターが画面下部に配置されます。"}}}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...t.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...r.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...s.input.parameters?.docs?.source}}};const S=["Default","WithArticle","MinimalContent"];export{t as Default,s as MinimalContent,r as WithArticle,S as __namedExportsOrder};
