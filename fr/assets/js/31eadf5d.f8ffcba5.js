"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26047],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),v=o,b=u["".concat(i,".").concat(v)]||u[v]||f[v]||s;return t?n.createElement(b,a(a({ref:r},p),{},{components:t})):n.createElement(b,a({ref:r},p))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=v;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},84796:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>d,default:()=>h,frontMatter:()=>b,metadata:()=>m,toc:()=>O});var n=t(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&p(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>s(e,a(r)),v=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const b={title:"$serverBoostLevel"},d=void 0,m={unversionedId:"functions/serverboostlevel",id:"version-5.5.5/functions/serverboostlevel",title:"$serverBoostLevel",description:"This function returns the server boost level.",source:"@site/versioned_docs/version-5.5.5/functions/serverboostlevel.md",sourceDirName:"functions",slug:"/functions/serverboostlevel",permalink:"/fr/docs/5.5.5/functions/serverboostlevel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$serverBoostLevel"},sidebar:"docs",previous:{title:"$serverBoostCount",permalink:"/fr/docs/5.5.5/functions/serverboostcount"},next:{title:"$serverChannelExists",permalink:"/fr/docs/5.5.5/functions/serverchannelexists"}},y={},O=[],g={toc:O},j="wrapper";function h(e){var r=e,{components:t}=r,o=v(r,["components"]);return(0,n.kt)(j,f(u(u({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the server boost level."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "boostLevel",\ncode: `\nBoost Level: $serverBoostLevel\n`\n})\n')))}h.isMDXComponent=!0}}]);