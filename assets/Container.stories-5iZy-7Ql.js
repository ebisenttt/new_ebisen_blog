import{j as e}from"./jsx-runtime-Big8sbBF.js";import{C as d}from"./Container-DX1BEMnH.js";import"./iframe-DP25XCWT.js";import"./preload-helper-Dhgqe2qg.js";var a,t,s,o,i,c;const u={title:"Shared/UI/Container",component:d,tags:["autodocs"],argTypes:{children:{control:"text",description:"コンテナ内に表示する任意のコンテンツ。"}},parameters:{docs:{description:{component:"ページ全体のコンテンツを中央揃えでラップするコンテナ。最大幅を設定し、左右にパディングを追加します。"}}}},n={args:{children:e.jsxs("div",{children:[e.jsx("p",{children:"これはContainerでラップされたコンテンツです。"}),e.jsx("p",{className:"mt-4",children:"画面幅に応じて中央揃えされ、左右に適切なパディングが適用されます。"})]})}},r={args:{children:e.jsxs("div",{children:[e.jsx("h1",{className:"mb-8 text-4xl font-bold",children:"ページタイトル"}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("p",{children:"Containerは、ホームページや記事詳細ページなど、メインコンテンツをラップするために使用されます。"}),e.jsx("p",{children:"Tailwindの`container`クラスにより、ブレークポイントに応じた最大幅が自動的に適用されます。"})]})]})},parameters:{docs:{description:{story:"ページコンテンツをラップする実際の使用例。"}}}};n.parameters={...n.parameters,docs:{...(a=n.parameters)===null||a===void 0?void 0:a.docs,source:{originalSource:`{
  args: {
    children: <div>
        <p>これはContainerでラップされたコンテンツです。</p>
        <p className="mt-4">
          画面幅に応じて中央揃えされ、左右に適切なパディングが適用されます。
        </p>
      </div>
  }
}`,...(s=n.parameters)===null||s===void 0||(t=s.docs)===null||t===void 0?void 0:t.source}}};r.parameters={...r.parameters,docs:{...(o=r.parameters)===null||o===void 0?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=r.parameters)===null||c===void 0||(i=c.docs)===null||i===void 0?void 0:i.source}}};const v=["Default","WithPageContent"];export{n as Default,r as WithPageContent,v as __namedExportsOrder,u as default};
