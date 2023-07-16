"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37168],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),c=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=c(r),m=n,d=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return r?a.createElement(d,i(i({ref:e},u),{},{components:r})):a.createElement(d,i({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47040:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>y,contentTitle:()=>v,default:()=>O,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&u(t,r,e[r]);if(l)for(var r of l(e))c.call(e,r)&&u(t,r,e[r]);return t},f=(t,e)=>o(t,i(e)),m=(t,e)=>{var r={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&l)for(var a of l(t))e.indexOf(a)<0&&c.call(t,a)&&(r[a]=t[a]);return r};const d={title:"$authorAvatar",description:"Returns the author's avatar in url format."},v=void 0,g={unversionedId:"functions/authoravatar",id:"version-5.5.5/functions/authoravatar",title:"$authorAvatar",description:"Returns the author's avatar in url format.",source:"@site/versioned_docs/version-5.5.5/functions/authoravatar.md",sourceDirName:"functions",slug:"/functions/authoravatar",permalink:"/docs/5.5.5/functions/authoravatar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$authorAvatar",description:"Returns the author's avatar in url format."},sidebar:"docs",previous:{title:"$authorAccentColor",permalink:"/docs/5.5.5/functions/authoraccentcolor"},next:{title:"$authorBanner",permalink:"/docs/5.5.5/functions/authorbanner"}},y={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],h={toc:b},k="wrapper";function O(t){var e=t,{components:r}=e,n=m(e,["components"]);return(0,a.kt)(k,f(s(s({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns picture of who executed the function/command."),(0,a.kt)("h3",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$authorAvatar[size?;dynamic?;format?]\n")),(0,a.kt)("h3",s({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"size"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Size of the banner"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"dynamic"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Stopping animation (related to animated pictures)"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"format"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Format of the banner (jpg, png etc.)"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",s({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "author-avatar",\n  code: `\n  This is my avatar!\n\n  $authorAvatar\n  `\n//Returns my avatar\n});\n')))}O.isMDXComponent=!0}}]);