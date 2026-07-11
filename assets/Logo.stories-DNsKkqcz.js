import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{n as i,t as a}from"./Logo-CrUxxj81.js";var o,s,c,l,u,d,f;e((()=>{o=t(),r(),a(),{expect:s}=__STORYBOOK_MODULE_TEST__,c=n.meta({title:`Shared/UI/Logo`,component:i,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{className:`inline-block bg-white p-2`,children:(0,o.jsx)(e,{})})],argTypes:{width:{control:`number`,description:`ロゴの幅(px)。`},height:{control:`number`,description:`ロゴの高さ(px)。`}},parameters:{docs:{description:{component:`ブログのロゴ(エビのシルエット)。プロフィールカードやOGイメージで使用されます。`}}}}),l=c.story({args:{width:32,height:32},parameters:{docs:{description:{story:`OGイメージで使用されているサイズ。`}}},play:async({canvasElement:e})=>{let t=e.querySelector(`svg`);s(t).toBeInstanceOf(SVGElement),s(t).toHaveAttribute(`width`,`32`),s(t).toHaveAttribute(`height`,`32`)}}),u=c.story({args:{width:64,height:64}}),d=c.story({args:{width:128,height:128},parameters:{docs:{description:{story:`ProfileAboutCardで使用されているサイズ。`}}}}),l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    width: 32,
    height: 32
  },
  parameters: {
    docs: {
      description: {
        story: 'OGイメージで使用されているサイズ。'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const svg = canvasElement.querySelector('svg');
    expect(svg).toBeInstanceOf(SVGElement);
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  }
})`,...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    width: 64,
    height: 64
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    width: 128,
    height: 128
  },
  parameters: {
    docs: {
      description: {
        story: 'ProfileAboutCardで使用されているサイズ。'
      }
    }
  }
})`,...d.input.parameters?.docs?.source}}},f=[`Small`,`Medium`,`Large`]}))();export{d as Large,u as Medium,l as Small,f as __namedExportsOrder};