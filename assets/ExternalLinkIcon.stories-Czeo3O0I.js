import{j as e}from"./jsx-runtime-xcAJRU58.js";import{E as o}from"./ExternalLinkIcon-DMWoPzyM.js";import"./iframe-8QJY88xt.js";import"./preload-helper-Dhgqe2qg.js";const m={title:"Shared/UI/ExternalLinkIcon",component:o,tags:["autodocs"],argTypes:{title:{control:"text",description:"アイコンのタイトル(アクセシビリティ用)。"},className:{control:"text",description:"サイズや色などのカスタムクラス。"}},parameters:{docs:{description:{component:"外部リンクを示すSVGアイコン。外部サイトへのリンクに使用され、視覚的にリンクが外部であることを示します。"}}}},r={args:{title:"外部リンク"}},s={args:{title:"外部リンク"},render:t=>e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"外部サイトへのリンク"}),e.jsx(o,{...t})]}),parameters:{docs:{description:{story:"テキストと一緒に表示する例。"}}}},a={args:{title:"外部リンク",className:"h-4 w-4 text-gray-500"},render:t=>e.jsx("span",{className:"ml-2",children:e.jsx(o,{...t})}),parameters:{docs:{description:{story:"PostPreviewで使用されている実際の例。グレー色で控えめに表示されます。"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: '外部リンク'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: '外部リンク'
  },
  render: args => <span className="flex items-center gap-2">
      <span>外部サイトへのリンク</span>
      <ExternalLinkIcon {...args} />
    </span>,
  parameters: {
    docs: {
      description: {
        story: 'テキストと一緒に表示する例。'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: '外部リンク',
    className: 'h-4 w-4 text-gray-500'
  },
  render: args => <span className="ml-2">
      <ExternalLinkIcon {...args} />
    </span>,
  parameters: {
    docs: {
      description: {
        story: 'PostPreviewで使用されている実際の例。グレー色で控えめに表示されます。'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const l=["Default","InText","WithGrayColor"];export{r as Default,s as InText,a as WithGrayColor,l as __namedExportsOrder,m as default};
