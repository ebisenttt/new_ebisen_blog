import{j as e}from"./jsx-runtime-Big8sbBF.js";import{E as x}from"./ExternalLinkIcon-Dc2jDuq6.js";import"./iframe-DP25XCWT.js";import"./preload-helper-Dhgqe2qg.js";var o,n,i,l,c,d,p,m,u;const h={title:"Shared/UI/ExternalLinkIcon",component:x,tags:["autodocs"],argTypes:{title:{control:"text",description:"アイコンのタイトル(アクセシビリティ用)。"},className:{control:"text",description:"サイズや色などのカスタムクラス。"}},parameters:{docs:{description:{component:"外部リンクを示すSVGアイコン。外部サイトへのリンクに使用され、視覚的にリンクが外部であることを示します。"}}}},r={args:{title:"外部リンク"}},a={args:{title:"外部リンク"},render:t=>e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"外部サイトへのリンク"}),e.jsx(x,{...t})]}),parameters:{docs:{description:{story:"テキストと一緒に表示する例。"}}}},s={args:{title:"外部リンク",className:"h-4 w-4 text-gray-500"},render:t=>e.jsx("span",{className:"ml-2",children:e.jsx(x,{...t})}),parameters:{docs:{description:{story:"PostPreviewで使用されている実際の例。グレー色で控えめに表示されます。"}}}};r.parameters={...r.parameters,docs:{...(o=r.parameters)===null||o===void 0?void 0:o.docs,source:{originalSource:`{
  args: {
    title: '外部リンク'
  }
}`,...(i=r.parameters)===null||i===void 0||(n=i.docs)===null||n===void 0?void 0:n.source}}};a.parameters={...a.parameters,docs:{...(l=a.parameters)===null||l===void 0?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=a.parameters)===null||d===void 0||(c=d.docs)===null||c===void 0?void 0:c.source}}};s.parameters={...s.parameters,docs:{...(p=s.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=s.parameters)===null||u===void 0||(m=u.docs)===null||m===void 0?void 0:m.source}}};const f=["Default","InText","WithGrayColor"];export{r as Default,a as InText,s as WithGrayColor,f as __namedExportsOrder,h as default};
