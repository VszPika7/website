"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,v=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>D,frontMatter:()=>v,metadata:()=>y,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const v={title:"$eventData",description:"$eventData will return event data.",id:"eventData"},m=void 0,y={unversionedId:"functions/misc-related/eventData",id:"version-6.4.0/functions/misc-related/eventData",title:"$eventData",description:"$eventData will return event data.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/eventData.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/eventData",permalink:"/docs/functions/misc-related/eventData",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$eventData",description:"$eventData will return event data.",id:"eventData"},sidebar:"docs",previous:{title:"$error",permalink:"/docs/functions/misc-related/error"},next:{title:"$eventEmit",permalink:"/docs/functions/misc-related/eventEmit"}},b={},O=[{value:"Usage",id:"usage",level:2}],g={toc:O},w="wrapper";function D(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(w,f(u(u({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$eventData")," will return event data."),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$eventData\n")))}D.isMDXComponent=!0}}]);