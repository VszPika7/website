"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>j,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>a(e,s(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$referenceMessageID",description:"Returns the ID of the message the user replied to"},g=void 0,y={unversionedId:"functions/referencemessageid",id:"version-5.5.5/functions/referencemessageid",title:"$referenceMessageID",description:"Returns the ID of the message the user replied to",source:"@site/versioned_docs/version-5.5.5/functions/referencemessageid.md",sourceDirName:"functions",slug:"/functions/referencemessageid",permalink:"/es/docs/5.5.5/functions/referencemessageid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$referenceMessageID",description:"Returns the ID of the message the user replied to"},sidebar:"docs",previous:{title:"$referenceGuildID",permalink:"/es/docs/5.5.5/functions/referenceguildid"},next:{title:"$removeContains",permalink:"/es/docs/5.5.5/functions/removecontains"}},b={},v=[],O={toc:v},h="wrapper";function j(e){var t=e,{components:o}=t,a=d(t,["components"]);return(0,n.kt)(h,u(f(f({},O),a),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function gets the message ID the user replied to"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "referencechannel",\ncode: `Reply Message ID: $referenceMessageID`\n})\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Heres an example",src:r(79543).Z,width:"473",height:"71"})))}j.isMDXComponent=!0},79543:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image (14) (4) (4) (3) (1)-cef0d06a2da4aeb13ae75c8043c7977d.png"}}]);