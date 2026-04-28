import{D as o}from"./DateFormatter-BXF0u73M.js";import"./jsx-runtime-ByRWct7B.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";const{expect:r,within:c}=__STORYBOOK_MODULE_TEST__,T={title:"entities/post/DateFormatter",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{dateString:"2024-01-15"},play:async({canvasElement:s})=>{const n=c(s).getByText("2024-01-15");r(n).toBeInTheDocument(),r(n).toHaveAttribute("datetime","2024-01-15")}},t={args:{dateString:"2024-01-15T16:20:47+09:00"}},a={args:{dateString:"2024-01-15T07:20:47Z"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    dateString: '2024-01-15'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const time = canvas.getByText('2024-01-15');
    expect(time).toBeInTheDocument();
    expect(time).toHaveAttribute('datetime', '2024-01-15');
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    dateString: '2024-01-15T16:20:47+09:00'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    dateString: '2024-01-15T07:20:47Z'
  }
}`,...a.parameters?.docs?.source}}};const u=["DateOnly","WithTimezone","WithTimezoneUTC"];export{e as DateOnly,t as WithTimezone,a as WithTimezoneUTC,u as __namedExportsOrder,T as default};
