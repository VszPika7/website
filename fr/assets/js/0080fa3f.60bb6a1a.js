"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[85099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$authorAvatar",description:"$authorAvatar will return the profile picture of the command author.",id:"authorAvatar"},h=void 0,v={unversionedId:"functions/user-related/authorAvatar",id:"version-6.4.0/functions/user-related/authorAvatar",title:"$authorAvatar",description:"$authorAvatar will return the profile picture of the command author.",source:"@site/versioned_docs/version-6.4.0/functions/user-related/authorAvatar.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/authorAvatar",permalink:"/fr/docs/functions/user-related/authorAvatar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$authorAvatar",description:"$authorAvatar will return the profile picture of the command author.",id:"authorAvatar"},sidebar:"docs",previous:{title:"$year",permalink:"/fr/docs/functions/misc-related/year"},next:{title:"$authorBannerColor",permalink:"/fr/docs/functions/user-related/authorBannerColor"}},g={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(k,d(s(s({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$authorAvatar")," will return the profile picture of the command author."),(0,a.kt)("h2",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$authorAvatar[size?;dynamic?;format?]\n")),(0,a.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"size?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string, number"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The size of the image"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"dynamic?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"1. ",(0,a.kt)("strong",{parentName:"td"},"true")," (default) ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"false")),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"format?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The format of the returned image."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return your profile picture:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'authorAvatar',\n    code: `\n  $authorAvatar[2048;true;webp]\n  `\n});\n")))}O.isMDXComponent=!0}}]);