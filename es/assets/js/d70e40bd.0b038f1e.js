"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71902],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,d=u["".concat(l,".").concat(y)]||u[y]||f[y]||o;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},36690:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>w,frontMatter:()=>d,metadata:()=>v,toc:()=>O});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))s.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>o(e,i(r)),y=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$year",description:"Return current year."},m=void 0,v={unversionedId:"functions/year",id:"version-5.5.5/functions/year",title:"$year",description:"Return current year.",source:"@site/versioned_docs/version-5.5.5/functions/year.md",sourceDirName:"functions",slug:"/functions/year",permalink:"/es/docs/5.5.5/functions/year",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$year",description:"Return current year."},sidebar:"docs",previous:{title:"$webhookExists",permalink:"/es/docs/5.5.5/functions/webhookexists"},next:{title:"How to use events",permalink:"/es/docs/5.5.5/events/"}},b={},O=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],g={toc:O},j="wrapper";function w(e){var r=e,{components:t}=r,a=y(r,["components"]);return(0,n.kt)(j,f(u(u({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the current year."),(0,n.kt)("h3",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$year\n")),(0,n.kt)("h2",u({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "year",\n  code: `\n  Year: $year\n  `\n//Returns: 2021\n});\n')))}w.isMDXComponent=!0}}]);