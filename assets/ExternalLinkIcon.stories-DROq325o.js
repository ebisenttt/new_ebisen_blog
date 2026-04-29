import{j as t,p as i}from"./iframe-Bd5CrwUb.js";import{E as n}from"./ExternalLinkIcon-Bs2ua_Tf.js";import"./preload-helper-Dhgqe2qg.js";const{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,o=i.meta({title:"Shared/UI/ExternalLinkIcon",component:n,tags:["autodocs"],argTypes:{title:{control:"text",description:"アイコンのタイトル(アクセシビリティ用)。"},className:{control:"text",description:"サイズや色などのカスタムクラス。"}},parameters:{docs:{description:{component:"外部リンクを示すSVGアイコン。外部サイトへのリンクに使用され、視覚的にリンクが外部であることを示します。"}}}}),s=o.story({args:{title:"外部リンク"},play:async({canvasElement:e})=>{const c=m(e);p(c.getByRole("img",{name:"外部リンク"})).toBeInTheDocument()}}),r=o.story({args:{title:"外部リンク"},render:e=>t.jsxs("span",{className:"flex items-center gap-2",children:[t.jsx("span",{children:"外部サイトへのリンク"}),t.jsx(n,{...e})]}),parameters:{docs:{description:{story:"テキストと一緒に表示する例。"}}}}),a=o.story({args:{title:"外部リンク",className:"h-4 w-4 text-gray-500"},render:e=>t.jsx("span",{className:"ml-2",children:t.jsx(n,{...e})}),parameters:{docs:{description:{story:"PostPreviewで使用されている実際の例。グレー色で控えめに表示されます。"}}}});s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...s.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...r.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...a.input.parameters?.docs?.source}}};const g=["Default","InText","WithGrayColor"];export{s as Default,r as InText,a as WithGrayColor,g as __namedExportsOrder};
