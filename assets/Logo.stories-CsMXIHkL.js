import{p as c,j as i}from"./iframe-Bd5CrwUb.js";import{L as p}from"./Logo-b4LtZ8dj.js";import"./preload-helper-Dhgqe2qg.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,a=c.meta({title:"Shared/UI/Logo",component:p,tags:["autodocs"],decorators:[s=>i.jsx("div",{className:"inline-block bg-white p-2",children:i.jsx(s,{})})],argTypes:{width:{control:"number",description:"ロゴの幅(px)。"},height:{control:"number",description:"ロゴの高さ(px)。"}},parameters:{docs:{description:{component:"ブログのロゴ(エビのシルエット)。プロフィールカードやOGイメージで使用されます。"}}}}),t=a.story({args:{width:32,height:32},parameters:{docs:{description:{story:"OGイメージで使用されているサイズ。"}}},play:async({canvasElement:s})=>{const n=s.querySelector("svg");o(n).toBeInstanceOf(SVGElement),o(n).toHaveAttribute("width","32"),o(n).toHaveAttribute("height","32")}}),e=a.story({args:{width:64,height:64}}),r=a.story({args:{width:128,height:128},parameters:{docs:{description:{story:"ProfileAboutCardで使用されているサイズ。"}}}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...t.input.parameters?.docs?.source}}};e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    width: 64,
    height: 64
  }
})`,...e.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...r.input.parameters?.docs?.source}}};const g=["Small","Medium","Large"];export{r as Large,e as Medium,t as Small,g as __namedExportsOrder};
