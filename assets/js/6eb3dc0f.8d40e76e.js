"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[23337],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>v});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,v=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?t.createElement(v,i(i({ref:r},p),{},{components:n})):t.createElement(v,i({ref:r},p))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37158:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const o={title:"$serverBanner",description:"Displays the server banner (If the guild has one)"},i=void 0,s={unversionedId:"functions/serverbanner",id:"version-5.5.5/functions/serverbanner",title:"$serverBanner",description:"Displays the server banner (If the guild has one)",source:"@site/versioned_docs/version-5.5.5/functions/serverbanner.md",sourceDirName:"functions",slug:"/functions/serverbanner",permalink:"/docs/5.5.5/functions/serverbanner",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687249755,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$serverBanner",description:"Displays the server banner (If the guild has one)"},sidebar:"docs",previous:{title:"$serverAvailable",permalink:"/docs/5.5.5/functions/serveravailable"},next:{title:"$serverBoostCount",permalink:"/docs/5.5.5/functions/serverboostcount"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function displays the server's banner"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$serverBanner[guildID (optional);size (optional);dynamic (optional)]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "serverBanner",\ncode: `Heres the server banner: \n$image[$serverBanner[$guildID;2048]]`\n})\n')))}f.isMDXComponent=!0}}]);