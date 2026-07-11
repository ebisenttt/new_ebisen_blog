import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{n as i,t as a}from"./Container-CpMqh8wv.js";var o,s,c,l,u;e((()=>{o=t(),r(),a(),s=n.meta({title:`Shared/UI/Container`,component:i,tags:[`autodocs`],argTypes:{children:{control:`text`,description:`コンテナ内に表示する任意のコンテンツ。`}},parameters:{docs:{description:{component:`ページ全体のコンテンツを中央揃えでラップするコンテナ。最大幅を設定し、左右にパディングを追加します。`}}}}),c=s.story({args:{children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{children:`これはContainerでラップされたコンテンツです。`}),(0,o.jsx)(`p`,{className:`mt-4`,children:`画面幅に応じて中央揃えされ、左右に適切なパディングが適用されます。`})]})}}),l=s.story({args:{children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h1`,{className:`mb-8 text-4xl font-bold`,children:`ページタイトル`}),(0,o.jsxs)(`section`,{className:`space-y-4`,children:[(0,o.jsx)(`p`,{children:`Containerは、ホームページや記事詳細ページなど、メインコンテンツをラップするために使用されます。`}),(0,o.jsx)(`p`,{children:"Tailwindの`container`クラスにより、ブレークポイントに応じた最大幅が自動的に適用されます。"})]})]})},parameters:{docs:{description:{story:`ページコンテンツをラップする実際の使用例。`}}}}),c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <div>
        <p>これはContainerでラップされたコンテンツです。</p>
        <p className="mt-4">
          画面幅に応じて中央揃えされ、左右に適切なパディングが適用されます。
        </p>
      </div>
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...l.input.parameters?.docs?.source}}},u=[`Default`,`WithPageContent`]}))();export{c as Default,l as WithPageContent,u as __namedExportsOrder};