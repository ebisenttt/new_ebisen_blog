import{j as e}from"./jsx-runtime-Big8sbBF.js";import{F as x}from"./Footer-OLtkYXmi.js";import"./iframe-DP25XCWT.js";import"./preload-helper-Dhgqe2qg.js";import"./image-DwvdkUxe.js";import"./use-merged-ref-DJLgNEVR.js";import"./Badge-BEk0nViE.js";import"./Card-CRdUK99d.js";import"./Container-DX1BEMnH.js";import"./ExternalLinkIcon-Dc2jDuq6.js";import"./Logo-UHO-Gcpf.js";import"./Basic-jfzfpS28.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-CrfQqFuJ.js";const u=({children:h})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"min-h-screen mb-16",children:e.jsx("main",{children:h})}),e.jsx(x,{})]});u.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};var t,o,i,n,c,d,l,p,m;const S={title:"Widgets/Layout/SiteLayout/Layout",component:u,tags:["autodocs"],argTypes:{children:{control:!1,description:"メインコンテンツ領域に表示する子要素。"}},parameters:{docs:{description:{component:"サイト全体のレイアウトコンポーネント。メインコンテンツ領域とフッターを含みます。"}},layout:"fullscreen"}},r={args:{children:e.jsxs("div",{className:"p-8",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"ページタイトル"}),e.jsx("p",{className:"mb-4",children:"これはLayoutコンポーネント内に配置されるメインコンテンツの例です。"}),e.jsx("p",{children:"Layoutコンポーネントは最小高さ(min-h-screen)を確保し、下部にフッターを配置します。"})]})}},s={args:{children:e.jsxs("article",{className:"mx-auto max-w-2xl p-8 prose dark:prose-invert",children:[e.jsx("h1",{children:"記事タイトル"}),e.jsx("p",{children:"記事本文のコンテンツがここに入ります。"}),e.jsx("h2",{children:"セクション見出し"}),e.jsx("p",{children:"Layoutコンポーネントで記事をラップした場合の表示例です。"})]})},parameters:{docs:{description:{story:"記事コンテンツをラップする例。"}}}},a={args:{children:e.jsx("div",{className:"p-8",children:e.jsx("p",{children:"最小限のコンテンツ"})})},parameters:{docs:{description:{story:"少量のコンテンツでも、min-h-screenによりフッターが画面下部に配置されます。"}}}};r.parameters={...r.parameters,docs:{...(t=r.parameters)===null||t===void 0?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=r.parameters)===null||i===void 0||(o=i.docs)===null||o===void 0?void 0:o.source}}};s.parameters={...s.parameters,docs:{...(n=s.parameters)===null||n===void 0?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=s.parameters)===null||d===void 0||(c=d.docs)===null||c===void 0?void 0:c.source}}};a.parameters={...a.parameters,docs:{...(l=a.parameters)===null||l===void 0?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=a.parameters)===null||m===void 0||(p=m.docs)===null||p===void 0?void 0:p.source}}};const F=["Default","WithArticle","MinimalContent"];export{r as Default,a as MinimalContent,s as WithArticle,F as __namedExportsOrder,S as default};
