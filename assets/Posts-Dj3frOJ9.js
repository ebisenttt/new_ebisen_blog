import{j as t}from"./jsx-runtime-Big8sbBF.js";import{P as l}from"./PostPreview-eTIwP5Gj.js";const s=({posts:a})=>t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-8 md:gap-y-16 mb-32",children:a.map(e=>{var r,n;return t.jsx(l,{title:e.title,date:e.date,tags:e.tags,href:(n=(r=e.href)!==null&&r!==void 0?r:e.externalUrl)!==null&&n!==void 0?n:`/posts/${e.filename}`,externalUrl:e.externalUrl===void 0?void 0:e.externalUrl},e.filename)})});s.__docgenInfo={description:"",methods:[],displayName:"Posts",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Post & {
  href?: string
  externalUrl?: string | null
}`,elements:[{name:"Post"},{name:"signature",type:"object",raw:`{
  href?: string
  externalUrl?: string | null
}`,signature:{properties:[{key:"href",value:{name:"string",required:!1}},{key:"externalUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}]}],raw:"PostWithLink[]"},description:""}}};export{s as P};
