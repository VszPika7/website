"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[54413],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,b=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(b,s(s({ref:t},p),{},{components:r})):n.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>w,frontMatter:()=>b,metadata:()=>y,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>a(e,s(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$messageWebhookID"},d=void 0,y={unversionedId:"functions/messagewebhookid",id:"version-5.5.5/functions/messagewebhookid",title:"$messageWebhookID",description:"This function gets the webhook's message ID",source:"@site/versioned_docs/version-5.5.5/functions/messagewebhookid.md",sourceDirName:"functions",slug:"/functions/messagewebhookid",permalink:"/docs/5.5.5/functions/messagewebhookid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$messageWebhookID"},sidebar:"docs",previous:{title:"$messageURL",permalink:"/docs/5.5.5/functions/messageurl"},next:{title:"$mfaLevel",permalink:"/docs/5.5.5/functions/mfalevel"}},g={},O=[],v={toc:O},h="wrapper";function w(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(h,f(u(u({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function gets the webhook's message ID"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "send-webhook",\ncode: `$sendWebhook[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA;Hello!;{title:Embed<3} {color:RANDOM};{title:Embed 2 WOW} {color:RANDOM}]\nMessageID: $messageWebhookID\n`\n})\n')))}w.isMDXComponent=!0}}]);