import{j as n}from"./jsx-runtime-BMpsxvGK.js";import{C as s}from"./Container-FFmTnjCD.js";import"./iframe-DRPE7Y9R.js";import"./preload-helper-Dhgqe2qg.js";const c={title:"Shared/UI/Container",component:s,tags:["autodocs"],argTypes:{children:{control:"text",description:"コンテナ内に表示する任意のコンテンツ。"}},parameters:{docs:{description:{component:"ページ全体のコンテンツを中央揃えでラップするコンテナ。最大幅を設定し、左右にパディングを追加します。"}}}},e={args:{children:n.jsxs("div",{children:[n.jsx("p",{children:"これはContainerでラップされたコンテンツです。"}),n.jsx("p",{className:"mt-4",children:"画面幅に応じて中央揃えされ、左右に適切なパディングが適用されます。"})]})}},r={args:{children:n.jsxs("div",{children:[n.jsx("h1",{className:"mb-8 text-4xl font-bold",children:"ページタイトル"}),n.jsxs("section",{className:"space-y-4",children:[n.jsx("p",{children:"Containerは、ホームページや記事詳細ページなど、メインコンテンツをラップするために使用されます。"}),n.jsx("p",{children:"Tailwindの`container`クラスにより、ブレークポイントに応じた最大幅が自動的に適用されます。"})]})]})},parameters:{docs:{description:{story:"ページコンテンツをラップする実際の使用例。"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <p>これはContainerでラップされたコンテンツです。</p>
        <p className="mt-4">
          画面幅に応じて中央揃えされ、左右に適切なパディングが適用されます。
        </p>
      </div>
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h1 className="mb-8 text-4xl font-bold">ページタイトル</h1>
        <section className="space-y-4">
          <p>
            Containerは、ホームページや記事詳細ページなど、メインコンテンツをラップするために使用されます。
          </p>
          <p>
            Tailwindの\`container\`クラスにより、ブレークポイントに応じた最大幅が自動的に適用されます。
          </p>
        </section>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'ページコンテンツをラップする実際の使用例。'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const d=["Default","WithPageContent"];export{e as Default,r as WithPageContent,d as __namedExportsOrder,c as default};
