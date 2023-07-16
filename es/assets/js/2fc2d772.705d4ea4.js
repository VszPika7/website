"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57195],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=c(n),m=o,d=l["".concat(u,".").concat(m)]||l[m]||f[m]||a;return n?t.createElement(d,s(s({ref:r},p),{},{components:n})):t.createElement(d,s({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47172:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>v,toc:()=>g});var t=n(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,l=(e,r)=>{for(var n in r||(r={}))u.call(r,n)&&p(e,n,r[n]);if(i)for(var n of i(r))c.call(r,n)&&p(e,n,r[n]);return e},f=(e,r)=>a(e,s(r)),m=(e,r)=>{var n={};for(var t in e)u.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const d={title:"$username",description:"Returns specified user ID's username, if no argument given, returns author's username"},y=void 0,v={unversionedId:"functions/username",id:"version-5.5.5/functions/username",title:"$username",description:"Returns specified user ID's username, if no argument given, returns author's username",source:"@site/versioned_docs/version-5.5.5/functions/username.md",sourceDirName:"functions",slug:"/functions/username",permalink:"/es/docs/5.5.5/functions/username",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$username",description:"Returns specified user ID's username, if no argument given, returns author's username"},sidebar:"docs",previous:{title:"$messageID",permalink:"/es/docs/5.5.5/functions/usermessageid"},next:{title:"$userPerms",permalink:"/es/docs/5.5.5/functions/userperms"}},b={},g=[],O={toc:g},j="wrapper";function h(e){var r=e,{components:n}=r,o=m(r,["components"]);return(0,t.kt)(j,f(l(l({},O),o),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function returns the authors/give user id's username"),(0,t.kt)("pre",null,(0,t.kt)("code",l({parentName:"pre"},{className:"language-php"}),"$username[user ID (optional)]\n")),(0,t.kt)("pre",null,(0,t.kt)("code",l({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "username",\ncode: `608358453580136499 username is $username[608358453580136499]!`\n//Returns Leref\n})\n')))}h.isMDXComponent=!0}}]);