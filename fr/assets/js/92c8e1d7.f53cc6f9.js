"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36555],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),l=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(m.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,u=s["".concat(m,".").concat(f)]||s[f]||d[f]||a;return t?r.createElement(u,c(c({ref:n},p),{},{components:t})):r.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>u,metadata:()=>b,toc:()=>O});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))l.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>a(e,c(n)),f=(e,n)=>{var t={};for(var r in e)m.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const u={title:"$commandName",description:"$commandName will return the commands' name.",id:"commandName"},y=void 0,b={unversionedId:"functions/info-related/commandName",id:"version-6.4.0/functions/info-related/commandName",title:"$commandName",description:"$commandName will return the commands' name.",source:"@site/versioned_docs/version-6.4.0/functions/info-related/commandName.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/commandName",permalink:"/fr/docs/functions/info-related/commandName",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$commandName",description:"$commandName will return the commands' name.",id:"commandName"},sidebar:"docs",previous:{title:"$commandInfo",permalink:"/fr/docs/functions/info-related/commandInfo"},next:{title:"$commandsCount",permalink:"/fr/docs/functions/info-related/commandsCount"}},v={},O=[{value:"Usage",id:"usage",level:2}],g={toc:O},w="wrapper";function j(e){var n=e,{components:t}=n,o=f(n,["components"]);return(0,r.kt)(w,d(s(s({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$commandName")," will return the commands' name."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$commandName\n")))}j.isMDXComponent=!0}}]);