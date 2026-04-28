import{j as s}from"./jsx-runtime-ByRWct7B.js";import{E as n}from"./ExternalLinkIcon-BHX7rbid.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";const{expect:c,within:i}=__STORYBOOK_MODULE_TEST__,g={title:"Shared/UI/ExternalLinkIcon",component:n,tags:["autodocs"],argTypes:{title:{control:"text",description:"アイコンのタイトル(アクセシビリティ用)。"},className:{control:"text",description:"サイズや色などのカスタムクラス。"}},parameters:{docs:{description:{component:"外部リンクを示すSVGアイコン。外部サイトへのリンクに使用され、視覚的にリンクが外部であることを示します。"}}}},a={args:{title:"外部リンク"},play:async({canvasElement:e})=>{const o=i(e);c(o.getByRole("img",{name:"外部リンク"})).toBeInTheDocument()}},r={args:{title:"外部リンク"},render:e=>s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx("span",{children:"外部サイトへのリンク"}),s.jsx(n,{...e})]}),parameters:{docs:{description:{story:"テキストと一緒に表示する例。"}}}},t={args:{title:"外部リンク",className:"h-4 w-4 text-gray-500"},render:e=>s.jsx("span",{className:"ml-2",children:s.jsx(n,{...e})}),parameters:{docs:{description:{story:"PostPreviewで使用されている実際の例。グレー色で控えめに表示されます。"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: '外部リンク'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('img', {
      name: '外部リンク'
    })).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["Default","InText","WithGrayColor"];export{a as Default,r as InText,t as WithGrayColor,x as __namedExportsOrder,g as default};
