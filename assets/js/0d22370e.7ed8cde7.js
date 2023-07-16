"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>w,frontMatter:()=>v,metadata:()=>b,toc:()=>k});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n};const v={title:"Introduction of aoi.canvas",description:"What aoi.canvas is and how to use it.",id:"aoi-canvas"},f=void 0,b={unversionedId:"community/aoi.canvas/aoi-canvas",id:"community/aoi.canvas/aoi-canvas",title:"Introduction of aoi.canvas",description:"What aoi.canvas is and how to use it.",source:"@site/extensions/community/aoi.canvas/introduction.md",sourceDirName:"community/aoi.canvas",slug:"/community/aoi.canvas/aoi-canvas",permalink:"/extensions/community/aoi.canvas/aoi-canvas",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction of aoi.canvas",description:"What aoi.canvas is and how to use it.",id:"aoi-canvas"},sidebar:"docs",previous:{title:"Introduction",permalink:"/extensions/community/community-extensions"}},y={},k=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Feature Preview",id:"feature-preview",level:2}],g={toc:k},h="wrapper";function w(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(h,m(u(u({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",u({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#introduction"}),"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#setup"}),"Setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#installation"}),"Installation")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#feature-preview"}),"Feature Preview"))),(0,a.kt)("hr",null),(0,a.kt)("h2",u({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"https://www.npmjs.com/package/aoi.canvas?activeTab=readme"}),"aoi.canvas@1.0.1-canva")," is a NPM package created by ",(0,a.kt)("a",u({parentName:"p"},{href:"https://discord.com/users/1096717977304453160"}),"devlordduck2")," which adds the ability to use canvas to aoi.js"),(0,a.kt)("p",null,"aoi.canvas supports ",(0,a.kt)("em",{parentName:"p"},"almost")," everything as the original canvas, its basically just simplified and uses aoi.js function syntax."),(0,a.kt)("h2",u({},{id:"setup"}),"Setup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NPM Package"),": ",(0,a.kt)("a",u({parentName:"p"},{href:"https://www.npmjs.com/package/aoi.canvas"}),"https://www.npmjs.com/package/aoi.canvas"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Creator"),": ",(0,a.kt)("a",u({parentName:"p"},{href:"https://discord.com/users/1096717977304453160"}),"devlordduck2")),(0,a.kt)("h3",u({},{id:"installation"}),"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"npm install aoi.canvas\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js",metastring:'title="index.js"',title:'"index.js"'}),'const { AoiClient } = require("aoi.js");\nconst aoicanvas = require("aoi.canvas");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["MessageContent", "Guilds", "GuildMessages"],\n    events: ["onMessage", "onInteractionCreate"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\naoicanvas.load({\n    bot: bot,\n    DownloadFolder: "./canvasdownloads/"\n})\n\n// Ping Command Example\nbot.command({\n    name: "ping",\n    code: `Pong! $pingms`\n});\n\n// Leref Command Example\nbot.command({\n    name: "leref",\n    code: `\n$sendCanvas[lerefPro;msg]\n$lerefPro\n`\n});\n')),(0,a.kt)("h2",u({},{id:"feature-preview"}),"Feature Preview"),(0,a.kt)("p",null,(0,a.kt)("img",u({parentName:"p"},{src:"https://cdn.discordapp.com/attachments/832704676096245800/1129371725184909342/SmartSelect_20230714_141946_Discord.jpg",alt:"preview"}))),(0,a.kt)("p",null,(0,a.kt)("img",u({parentName:"p"},{src:"https://cdn.discordapp.com/attachments/832704676096245800/1129109315068907642/SmartSelect_20230713_205624_Discord.jpg",alt:"preview"}))))}w.isMDXComponent=!0}}]);