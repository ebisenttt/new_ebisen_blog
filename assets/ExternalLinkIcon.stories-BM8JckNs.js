import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{n as i,t as a}from"./ExternalLinkIcon-BsHkj7g1.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(),r(),a(),{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l=n.meta({title:`Shared/UI/ExternalLinkIcon`,component:i,tags:[`autodocs`],argTypes:{title:{control:`text`,description:`アイコンのタイトル(アクセシビリティ用)。`},className:{control:`text`,description:`サイズや色などのカスタムクラス。`}},parameters:{docs:{description:{component:`外部リンクを示すSVGアイコン。外部サイトへのリンクに使用され、視覚的にリンクが外部であることを示します。`}}}}),u=l.story({args:{title:`外部リンク`},play:async({canvasElement:e})=>{let t=c(e);s(t.getByRole(`img`,{name:`外部リンク`})).toBeInTheDocument()}}),d=l.story({args:{title:`外部リンク`},render:e=>(0,o.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(`span`,{children:`外部サイトへのリンク`}),(0,o.jsx)(i,{...e})]}),parameters:{docs:{description:{story:`テキストと一緒に表示する例。`}}}}),f=l.story({args:{title:`外部リンク`,className:`h-4 w-4 text-gray-500`},render:e=>(0,o.jsx)(`span`,{className:`ml-2`,children:(0,o.jsx)(i,{...e})}),parameters:{docs:{description:{story:`PostPreviewで使用されている実際の例。グレー色で控えめに表示されます。`}}}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p=[`Default`,`InText`,`WithGrayColor`]}))();export{u as Default,d as InText,f as WithGrayColor,p as __namedExportsOrder};