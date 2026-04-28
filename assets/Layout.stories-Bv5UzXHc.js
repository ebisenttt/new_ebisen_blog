import{j as e}from"./jsx-runtime-ByRWct7B.js";import{F as n}from"./Footer-DLYV6Gjr.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";import"./image-Be5DxHDz.js";import"./use-merged-ref-E0-5uso8.js";import"./Badge-4GiHobYd.js";import"./Card-5vqJtSYk.js";import"./Container-CjY-ocGB.js";import"./ExternalLinkIcon-BHX7rbid.js";import"./Logo-DiI8eS99.js";import"./Basic-CtvcpFe3.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-yOxfQxMN.js";const i=({children:a})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"min-h-screen mb-16",children:e.jsx("main",{children:a})}),e.jsx(n,{})]});i.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const{expect:c}=__STORYBOOK_MODULE_TEST__,_={title:"Widgets/Layout/SiteLayout/Layout",component:i,tags:["autodocs"],argTypes:{children:{control:!1,description:"メインコンテンツ領域に表示する子要素。"}},parameters:{docs:{description:{component:"サイト全体のレイアウトコンポーネント。メインコンテンツ領域とフッターを含みます。"}},layout:"fullscreen"}},r={args:{children:e.jsxs("div",{className:"p-8",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"ページタイトル"}),e.jsx("p",{className:"mb-4",children:"これはLayoutコンポーネント内に配置されるメインコンテンツの例です。"}),e.jsx("p",{children:"Layoutコンポーネントは最小高さ(min-h-screen)を確保し、下部にフッターを配置します。"})]})},play:async({canvasElement:a})=>{const o=a.querySelector("main");c(o).not.toBeNull(),c(o).toHaveTextContent("ページタイトル")}},s={args:{children:e.jsxs("article",{className:"mx-auto max-w-2xl p-8 prose dark:prose-invert",children:[e.jsx("h1",{children:"記事タイトル"}),e.jsx("p",{children:"記事本文のコンテンツがここに入ります。"}),e.jsx("h2",{children:"セクション見出し"}),e.jsx("p",{children:"Layoutコンポーネントで記事をラップした場合の表示例です。"})]})},parameters:{docs:{description:{story:"記事コンテンツをラップする例。"}}}},t={args:{children:e.jsx("div",{className:"p-8",children:e.jsx("p",{children:"最小限のコンテンツ"})})},parameters:{docs:{description:{story:"少量のコンテンツでも、min-h-screenによりフッターが画面下部に配置されます。"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const S=["Default","WithArticle","MinimalContent"];export{r as Default,t as MinimalContent,s as WithArticle,S as __namedExportsOrder,_ as default};
