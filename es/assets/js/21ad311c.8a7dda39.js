"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e},f=(e,t)=>i(e,a(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$title",description:"Adds a title to the embed"},b=void 0,y={unversionedId:"functions/title",id:"version-5.5.5/functions/title",title:"$title",description:"Adds a title to the embed",source:"@site/versioned_docs/version-5.5.5/functions/title.md",sourceDirName:"functions",slug:"/functions/title",permalink:"/es/docs/5.5.5/functions/title",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$title",description:"Adds a title to the embed"},sidebar:"docs",previous:{title:"$timezone",permalink:"/es/docs/5.5.5/functions/timezone"},next:{title:"$toLocaleUppercase",permalink:"/es/docs/5.5.5/functions/tolocaleuppercase"}},v={},O=[],g={toc:O},j="wrapper";function h(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(j,f(u(u({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function adds a title to the embed. URL for hyperlink"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$title[index;text;url (optional)]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "title",\ncode: `$title[1;Aoi.js]` //Here 1 is the index\n})\n')),(0,r.kt)("p",null,"Here is an example for multiple embeds with different titles"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "multi-title",\ncode: `\n$title[1;Title 1]\n$title[2;Title 2]\n$title[3;Title 3]\n`\n})\n')))}h.isMDXComponent=!0}}]);