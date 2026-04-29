import{j as s,p as a}from"./iframe-Bd5CrwUb.js";import{C as o}from"./Card-BJEewEi1.js";import"./preload-helper-Dhgqe2qg.js";const r=a.meta({title:"Shared/UI/Card",component:o,tags:["autodocs"],argTypes:{children:{control:"text",description:"カード内に表示する任意のコンテンツ。"},className:{control:"text",description:"追加の Tailwind クラス。ベーススタイルに上書き適用されます。"}},parameters:{docs:{description:{component:"汎用カードレイアウト。ダークテーマ対応の背景、角丸、パディングを提供します。"}}}}),e=r.story({args:{children:"カードのデフォルト表示です。"}}),t=r.story({args:{children:s.jsxs("div",{className:"flex h-full flex-col",children:[s.jsx("h3",{className:"flex-1 text-xl leading-snug",children:"記事タイトル"}),s.jsx("div",{className:"mt-auto pt-4 text-base text-gray-400",children:"2025-11-12"})]}),className:"flex h-full flex-col"},parameters:{docs:{description:{story:"PostPreview で使用されている実際のレイアウト例。"}}}});e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'カードのデフォルト表示です。'
  }
})`,...e.input.parameters?.docs?.source}}};t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...t.input.parameters?.docs?.source}}};const n=["Default","WithFlexLayout"];export{e as Default,t as WithFlexLayout,n as __namedExportsOrder};
