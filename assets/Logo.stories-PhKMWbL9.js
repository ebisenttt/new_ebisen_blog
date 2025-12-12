import{j as o}from"./jsx-runtime-BMpsxvGK.js";import{L as a}from"./Logo-DbzDo5RS.js";import"./iframe-DRPE7Y9R.js";import"./preload-helper-Dhgqe2qg.js";const p={title:"Shared/UI/Logo",component:a,tags:["autodocs"],decorators:[t=>o.jsx("div",{className:"inline-block bg-white p-2",children:o.jsx(t,{})})],argTypes:{width:{control:"number",description:"ロゴの幅(px)。"},height:{control:"number",description:"ロゴの高さ(px)。"}},parameters:{docs:{description:{component:"ブログのロゴ(エビのシルエット)。プロフィールカードやOGイメージで使用されます。"}}}},r={args:{width:32,height:32},parameters:{docs:{description:{story:"OGイメージで使用されているサイズ。"}}}},e={args:{width:64,height:64}},s={args:{width:128,height:128},parameters:{docs:{description:{story:"ProfileAboutCardで使用されているサイズ。"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: 64,
    height: 64
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const m=["Small","Medium","Large"];export{s as Large,e as Medium,r as Small,m as __namedExportsOrder,p as default};
