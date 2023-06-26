"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[48320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={title:"Client Status",description:"This guide will be covering the functionality and usage of client statuses.",id:"status"},i=void 0,l={unversionedId:"guides/status",id:"version-6.2.6/guides/status",title:"Client Status",description:"This guide will be covering the functionality and usage of client statuses.",source:"@site/versioned_docs/version-6.2.6/guides/4status.md",sourceDirName:"guides",slug:"/guides/status",permalink:"/docs/guides/status",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687788243,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{title:"Client Status",description:"This guide will be covering the functionality and usage of client statuses.",id:"status"},sidebar:"docs",previous:{title:"Command Handler",permalink:"/docs/guides/commandhandler"},next:{title:"Variables",permalink:"/docs/guides/variables"}},o={},u=[{value:"This guide will be covering statuses and client presences.",id:"this-guide-will-be-covering-statuses-and-client-presences",level:4},{value:"Table of Content",id:"table-of-content",level:3},{value:"Bot Status",id:"bot-status",level:3},{value:"This section will cover how to customize your bot&#39;s status.",id:"this-section-will-cover-how-to-customize-your-bots-status",level:4},{value:"Client Presence",id:"client-presence",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"this-guide-will-be-covering-statuses-and-client-presences"},"This guide will be covering statuses and client presences."),(0,r.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#bot-status"},"Statuses"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#client-presence"},"Client Presence")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bot-status"},"Bot Status"),(0,r.kt)("h4",{id:"this-section-will-cover-how-to-customize-your-bots-status"},"This section will cover how to customize your bot's status."),(0,r.kt)("p",null,"First of all we have to add the following piece of code to our main file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.status({\n    text: string,\n    type: string,\n    time: number,\n    URL?: string,\n    afk?: boolean\n});\n")),(0,r.kt)("p",null,"When you use sharding you can individually change the status of each shard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.status({\n    text: string,\n    type: string,\n    time: number,\n    shard: number\n});\n")),(0,r.kt)("p",null,'This will display the text "Example Text!" as bot status, of course you can modify it.'),(0,r.kt)("p",null,"If you want to have multiple statuses just add multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.status({...})"),", simple do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'bot.status({\n    text: "Example Text one!",\n    type: "PLAYING",\n    time: 12\n});\n\nbot.status({\n    text: "Example Text two!",\n    type: "STREAMING",\n    URL: "some URL"\n});\n')),(0,r.kt)("p",null,"There are various types of statuses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PLAYING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WATCHING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STREAMING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LISTENING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"COMPETING"))),(0,r.kt)("h3",{id:"client-presence"},"Client Presence"),(0,r.kt)("p",null,"You can also set the bot's presence, by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," property, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'bot.status({\n    text: "Example Text!",\n    type: "PLAYING",\n    status: "dnd",\n    time: 12\n});\n')),(0,r.kt)("p",null,"There are multiple types of presences:"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"idle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dnd")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"invisible")))))}d.isMDXComponent=!0}}]);