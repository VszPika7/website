"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,v=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>j,frontMatter:()=>v,metadata:()=>y,toc:()=>g});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,a(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const v={title:"$vcSize",description:"Returns the size of the provided type in Provided guild or global"},m=void 0,y={unversionedId:"functions/vcsize",id:"version-5.5.5/functions/vcsize",title:"$vcSize",description:"Returns the size of the provided type in Provided guild or global",source:"@site/versioned_docs/version-5.5.5/functions/vcsize.md",sourceDirName:"functions",slug:"/functions/vcsize",permalink:"/ru/docs/5.5.5/functions/vcsize",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$vcSize",description:"Returns the size of the provided type in Provided guild or global"},sidebar:"docs",previous:{title:"$variablesCount",permalink:"/ru/docs/5.5.5/functions/variablescount"},next:{title:"$voiceID",permalink:"/ru/docs/5.5.5/functions/voiceid"}},b={},g=[],O={toc:g},h="wrapper";function j(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(h,d(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function simply returns the size of the provided type in Provided guild or global"),(0,r.kt)("p",null,"Here is the usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$vcSize[channels/users/songs;guildID/all (optional)]\n")),(0,r.kt)("p",null,"Now lets find the size of voice size requested"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "vcSize",\ncode: `\n$vcSize[channels;all]\n`\n})\n')),(0,r.kt)("p",null,"And let's find the voice channel's size of the channel where you are listening to the bot"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "vcSize",\ncode: `\n$vcSize[users;$guildID]\n`\n})\n')))}j.isMDXComponent=!0}}]);