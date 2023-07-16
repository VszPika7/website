"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96450],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?n.createElement(m,l(l({ref:r},u),{},{components:t})):n.createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4914:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&u(e,t,r[t]);if(a)for(var t of a(r))s.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>i(e,l(r)),f=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$guildRoles",description:"Returns Guild Roles."},y=void 0,g={unversionedId:"functions/guildroles",id:"version-5.5.5/functions/guildroles",title:"$guildRoles",description:"Returns Guild Roles.",source:"@site/versioned_docs/version-5.5.5/functions/guildroles.md",sourceDirName:"functions",slug:"/functions/guildroles",permalink:"/uk/docs/5.5.5/functions/guildroles",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$guildRoles",description:"Returns Guild Roles."},sidebar:"docs",previous:{title:"$guildID",permalink:"/uk/docs/5.5.5/functions/guildid"},next:{title:"$handleError",permalink:"/uk/docs/5.5.5/functions/handleerror"}},b={},v=[],O={toc:v},j="wrapper";function h(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(j,d(p(p({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns all the roles the current guild has"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildRoles[id/name/mention]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "roles", \ncode: `Guild Roles: $guildRoles`\n/*\nname = Developer\nid = 773353338393329675\nmention = @Developer\n*/\n})\n')))}h.isMDXComponent=!0}}]);