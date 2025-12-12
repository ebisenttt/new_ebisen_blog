import{j as e}from"./jsx-runtime-xcAJRU58.js";import{F as i}from"./Footer-D885X40y.js";import"./iframe-8QJY88xt.js";import"./preload-helper-Dhgqe2qg.js";import"./image-Bey7CHWl.js";import"./use-merged-ref-D3AvtrfK.js";import"./Badge-br_8847e.js";import"./Card-C-Iyn_Ul.js";import"./Container-Dz9-OqRY.js";import"./ExternalLinkIcon-DMWoPzyM.js";import"./Logo-DKV5Z4ot.js";import"./Basic-CIlahRmf.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-vzvAsrHD.js";const t=({children:o})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"min-h-screen mb-16",children:e.jsx("main",{children:o})}),e.jsx(i,{})]});t.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const f={title:"Widgets/Layout/SiteLayout/Layout",component:t,tags:["autodocs"],argTypes:{children:{control:!1,description:"メインコンテンツ領域に表示する子要素。"}},parameters:{docs:{description:{component:"サイト全体のレイアウトコンポーネント。メインコンテンツ領域とフッターを含みます。"}},layout:"fullscreen"}},r={args:{children:e.jsxs("div",{className:"p-8",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"ページタイトル"}),e.jsx("p",{className:"mb-4",children:"これはLayoutコンポーネント内に配置されるメインコンテンツの例です。"}),e.jsx("p",{children:"Layoutコンポーネントは最小高さ(min-h-screen)を確保し、下部にフッターを配置します。"})]})}},s={args:{children:e.jsxs("article",{className:"mx-auto max-w-2xl p-8 prose dark:prose-invert",children:[e.jsx("h1",{children:"記事タイトル"}),e.jsx("p",{children:"記事本文のコンテンツがここに入ります。"}),e.jsx("h2",{children:"セクション見出し"}),e.jsx("p",{children:"Layoutコンポーネントで記事をラップした場合の表示例です。"})]})},parameters:{docs:{description:{story:"記事コンテンツをラップする例。"}}}},a={args:{children:e.jsx("div",{className:"p-8",children:e.jsx("p",{children:"最小限のコンテンツ"})})},parameters:{docs:{description:{story:"少量のコンテンツでも、min-h-screenによりフッターが画面下部に配置されます。"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const v=["Default","WithArticle","MinimalContent"];export{r as Default,a as MinimalContent,s as WithArticle,v as __namedExportsOrder,f as default};
