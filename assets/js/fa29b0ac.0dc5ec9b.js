"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60344],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(s,".").concat(b)]||d[b]||c[b]||l;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=b;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},87539:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const l={title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",id:"variables"},i=void 0,o={unversionedId:"guides/variables",id:"version-6.2.6/guides/variables",title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",source:"@site/versioned_docs/version-6.2.6/guides/5variables.md",sourceDirName:"guides",slug:"/guides/variables",permalink:"/docs/guides/variables",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687788243,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{title:"Variables",description:"This Guide will be covering variables, their usage and how to store variables in other files.",id:"variables"},sidebar:"docs",previous:{title:"Client Status",permalink:"/docs/guides/status"},next:{title:"Interaction Commands",permalink:"/docs/guides/interactioncommands"}},s={},u=[{value:"Table of Content",id:"table-of-content",level:3},{value:"Using Variables",id:"using-variables",level:3},{value:"Variable Handlers",id:"variable-handlers",level:2}],p={toc:u},d="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will provide you with a comprehensive understanding of variables."),(0,r.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#using-variables"},"Using Variables"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#variable-handler"},"Variable Handler")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"using-variables"},"Using Variables"),(0,r.kt)("p",null,"Variables are useful tools in programming that allow you to store values that can be accessed and manipulated throughout your code. To use a variable, you first need to declare it by giving it a name and assigning a value to it."),(0,r.kt)("p",null,"One way to do this is by using the following code snippet in your main file (usually named ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'bot.variables({\n    variableName: boolean,\n    variableName: number,\n    variableName: object,\n    variableName: "string"\n});\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.variables()")," function takes an object as an argument, where each property represents a variable name and its corresponding value."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'bot.variables({\n    blacklisted: false,\n    money: 0,\n    developers: {},\n    title: "none"\n});\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"variable-handlers"},"Variable Handlers"),(0,r.kt)("p",null,"Another way to use variables is by using a variable handler, which can help keep your main file organized and cleaner. To set up a variable handler, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Create a directory called "',(0,r.kt)("strong",{parentName:"li"},"handler"),'".'),(0,r.kt)("li",{parentName:"ol"},'Create a file inside the directory named "',(0,r.kt)("strong",{parentName:"li"},"variables.js"),'".'),(0,r.kt)("li",{parentName:"ol"},"In your main file, add the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"require('./handler/variables.js')(bot);\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"variables.js")," file, create an array of objects, where each object represents a variable name and its corresponding value:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = (bot) => { \n bot.variables({\n    variableName: boolean,\n    variableName: number,\n    variableName: object,\n    variableName: "string"\n });\n}\n')),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="handler/variables.js"',title:'"handler/variables.js"'},'module.exports = (bot) => { \n bot.variables({\n    blacklisted: false,\n    money: 0,\n    developers: {},\n    title: "none"\n }); \n}\n')),(0,r.kt)("p",null,"With these steps, you now have a working variable handler, which can help you keep your code organized and easier to manage."))}c.isMDXComponent=!0}}]);