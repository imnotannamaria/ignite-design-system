var a=Object.defineProperty;var o=(n,d)=>a(n,"name",{value:d,configurable:!0});import{a as r,j as e}from"./jsx-runtime.6d2eca35.js";function t({tokens:n,hasRemValues:d=!1}){return r("table",{className:"tokens-grid",children:[e("thead",{children:r("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),d&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(n).map(([s,i])=>r("tr",{children:[r("td",{children:["$",s]}),e("td",{children:i}),e("td",{children:d&&r("td",{children:[Number(i.replace("rem",""))*16,"px"]})})]},s))})]})}o(t,"TokensGrid");try{t.displayName="TokensGrid",t.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValues:{defaultValue:{value:"false"},description:"",name:"hasRemValues",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:t.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{t as T};
//# sourceMappingURL=TokensGrid.7f7b4684.js.map
