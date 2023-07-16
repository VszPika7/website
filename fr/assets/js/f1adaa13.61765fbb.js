"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},f),{},{components:n})):r.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&f(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&f(e,n,t[n]);return e},p=(e,t)=>i(e,a(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$defaultMessageNotifications",description:"Return the guild default message notification level."},g=void 0,y={unversionedId:"functions/defaultmessagenotifications",id:"version-5.5.5/functions/defaultmessagenotifications",title:"$defaultMessageNotifications",description:"Return the guild default message notification level.",source:"@site/versioned_docs/version-5.5.5/functions/defaultmessagenotifications.md",sourceDirName:"functions",slug:"/functions/defaultmessagenotifications",permalink:"/fr/docs/5.5.5/functions/defaultmessagenotifications",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$defaultMessageNotifications",description:"Return the guild default message notification level."},sidebar:"docs",previous:{title:"$deafenUser",permalink:"/fr/docs/5.5.5/functions/deafenuser"},next:{title:"$deleteApplicationCommand",permalink:"/fr/docs/5.5.5/functions/deleteapplicationcommand"}},v={},b=[{value:"Usage:",id:"usage",level:2}],O={toc:b},h="wrapper";function k(e){var t=e,{components:o}=t,i=d(t,["components"]);return(0,r.kt)(h,p(u(u({},O),i),{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the level of a server'S default message notifications."),(0,r.kt)("p",null,"Returns either ",(0,r.kt)("inlineCode",{parentName:"p"},"Mentions")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"All"),"."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$defaultMessageNotifications[guildID (optional)]")),(0,r.kt)("h2",u({},{id:"usage"}),"Usage:"),(0,r.kt)("p",null,"Returning the default message notifications type of the current guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'bot.command({\nname: "notifications",\ncode: `\nNotifications type of this server: $defaultMessageNotifications\n`\n})\n')),(0,r.kt)("p",null,"Returning the default message notifications type of another guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'bot.command({\nname: "notifications",\ncode: `\nNotifications type of the server $serverName[773352845738115102]: \n$defaultMessageNotifications[773352845738115102]\n`\n})\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example from the Official Aoi.JS Server =&gt; $defaultMessageNotifications would return &quot;Mentions&quot; on this guild",src:n(34627).Z,width:"1065",height:"386"})))}k.isMDXComponent=!0},34627:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (29) (1) (1) (1) (2) (3) (2) (3)-cfd672f3fdc8287c5d12dcf25a803f3c.png"}}]);