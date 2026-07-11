import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{n as i,t as a}from"./Card-DIbwHZ2o.js";var o,s,c,l,u;e((()=>{o=t(),r(),a(),s=n.meta({title:`Shared/UI/Card`,component:i,tags:[`autodocs`],argTypes:{children:{control:`text`,description:`カード内に表示する任意のコンテンツ。`},className:{control:`text`,description:`追加の Tailwind クラス。ベーススタイルに上書き適用されます。`}},parameters:{docs:{description:{component:`汎用カードレイアウト。ダークテーマ対応の背景、角丸、パディングを提供します。`}}}}),c=s.story({args:{children:`カードのデフォルト表示です。`}}),l=s.story({args:{children:(0,o.jsxs)(`div`,{className:`flex h-full flex-col`,children:[(0,o.jsx)(`h3`,{className:`flex-1 text-xl leading-snug`,children:`記事タイトル`}),(0,o.jsx)(`div`,{className:`mt-auto pt-4 text-base text-gray-400`,children:`2025-11-12`})]}),className:`flex h-full flex-col`},parameters:{docs:{description:{story:`PostPreview で使用されている実際のレイアウト例。`}}}}),c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'カードのデフォルト表示です。'
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <div className="flex h-full flex-col">
        <h3 className="flex-1 text-xl leading-snug">記事タイトル</h3>
        <div className="mt-auto pt-4 text-base text-gray-400">2025-11-12</div>
      </div>,
    className: 'flex h-full flex-col'
  },
  parameters: {
    docs: {
      description: {
        story: 'PostPreview で使用されている実際のレイアウト例。'
      }
    }
  }
})`,...l.input.parameters?.docs?.source}}},u=[`Default`,`WithFlexLayout`]}))();export{c as Default,l as WithFlexLayout,u as __namedExportsOrder};