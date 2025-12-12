import{j as a}from"./jsx-runtime-xcAJRU58.js";import{C as r}from"./Card-C-Iyn_Ul.js";import"./iframe-8QJY88xt.js";import"./preload-helper-Dhgqe2qg.js";const i={title:"Shared/UI/Card",component:r,tags:["autodocs"],argTypes:{children:{control:"text",description:"カード内に表示する任意のコンテンツ。"},className:{control:"text",description:"追加の Tailwind クラス。ベーススタイルに上書き適用されます。"}},parameters:{docs:{description:{component:"汎用カードレイアウト。ダークテーマ対応の背景、角丸、パディングを提供します。"}}}},e={args:{children:"カードのデフォルト表示です。"}},s={args:{children:a.jsxs("div",{className:"flex h-full flex-col",children:[a.jsx("h3",{className:"flex-1 text-xl leading-snug",children:"記事タイトル"}),a.jsx("div",{className:"mt-auto pt-4 text-base text-gray-400",children:"2025-11-12"})]}),className:"flex h-full flex-col"},parameters:{docs:{description:{story:"PostPreview で使用されている実際のレイアウト例。"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'カードのデフォルト表示です。'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const d=["Default","WithFlexLayout"];export{e as Default,s as WithFlexLayout,d as __namedExportsOrder,i as default};
