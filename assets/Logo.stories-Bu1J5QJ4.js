import{j as a}from"./jsx-runtime-ByRWct7B.js";import{L as c}from"./Logo-DiI8eS99.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,g={title:"Shared/UI/Logo",component:c,tags:["autodocs"],decorators:[s=>a.jsx("div",{className:"inline-block bg-white p-2",children:a.jsx(s,{})})],argTypes:{width:{control:"number",description:"ロゴの幅(px)。"},height:{control:"number",description:"ロゴの高さ(px)。"}},parameters:{docs:{description:{component:"ブログのロゴ(エビのシルエット)。プロフィールカードやOGイメージで使用されます。"}}}},e={args:{width:32,height:32},parameters:{docs:{description:{story:"OGイメージで使用されているサイズ。"}}},play:async({canvasElement:s})=>{const o=s.querySelector("svg");n(o).toBeInstanceOf(SVGElement),n(o).toHaveAttribute("width","32"),n(o).toHaveAttribute("height","32")}},t={args:{width:64,height:64}},r={args:{width:128,height:128},parameters:{docs:{description:{story:"ProfileAboutCardで使用されているサイズ。"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 64,
    height: 64
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const h=["Small","Medium","Large"];export{r as Large,t as Medium,e as Small,h as __namedExportsOrder,g as default};
