import{j as n,p as s}from"./iframe-Bd5CrwUb.js";import{C as a}from"./Container-BzaPk5cs.js";import"./preload-helper-Dhgqe2qg.js";const r=s.meta({title:"Shared/UI/Container",component:a,tags:["autodocs"],argTypes:{children:{control:"text",description:"コンテナ内に表示する任意のコンテンツ。"}},parameters:{docs:{description:{component:"ページ全体のコンテンツを中央揃えでラップするコンテナ。最大幅を設定し、左右にパディングを追加します。"}}}}),e=r.story({args:{children:n.jsxs("div",{children:[n.jsx("p",{children:"これはContainerでラップされたコンテンツです。"}),n.jsx("p",{className:"mt-4",children:"画面幅に応じて中央揃えされ、左右に適切なパディングが適用されます。"})]})}}),t=r.story({args:{children:n.jsxs("div",{children:[n.jsx("h1",{className:"mb-8 text-4xl font-bold",children:"ページタイトル"}),n.jsxs("section",{className:"space-y-4",children:[n.jsx("p",{children:"Containerは、ホームページや記事詳細ページなど、メインコンテンツをラップするために使用されます。"}),n.jsx("p",{children:"Tailwindの`container`クラスにより、ブレークポイントに応じた最大幅が自動的に適用されます。"})]})]})},parameters:{docs:{description:{story:"ページコンテンツをラップする実際の使用例。"}}}});e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <div>
        <p>これはContainerでラップされたコンテンツです。</p>
        <p className="mt-4">
          画面幅に応じて中央揃えされ、左右に適切なパディングが適用されます。
        </p>
      </div>
  }
})`,...e.input.parameters?.docs?.source}}};t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...t.input.parameters?.docs?.source}}};const p=["Default","WithPageContent"];export{e as Default,t as WithPageContent,p as __namedExportsOrder};
