"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7771],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=m(n),s=r,k=d["".concat(p,".").concat(s)]||d[s]||u[s]||l;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69722:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>g,default:()=>O,frontMatter:()=>k,metadata:()=>N,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&c(t,n,e[n]);if(o)for(var n of o(e))m.call(e,n)&&c(t,n,e[n]);return t},u=(t,e)=>l(t,i(e)),s=(t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&m.call(t,a)&&(n[a]=t[a]);return n};const k={title:"$createApplicationCommand",description:"$createApplicationCommand will create an application command.",id:"createApplicationCommand"},g=void 0,N={unversionedId:"functions/interaction-related/createApplicationCommand",id:"version-6.4.0/functions/interaction-related/createApplicationCommand",title:"$createApplicationCommand",description:"$createApplicationCommand will create an application command.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/createApplicationCommand.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/createApplicationCommand",permalink:"/uk/docs/functions/interaction-related/createApplicationCommand",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$createApplicationCommand",description:"$createApplicationCommand will create an application command.",id:"createApplicationCommand"},sidebar:"docs",previous:{title:"$color",permalink:"/uk/docs/functions/interaction-related/color"},next:{title:"$createFile",permalink:"/uk/docs/functions/interaction-related/createFile"}},f={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:b},h="wrapper";function O(t){var e=t,{components:n}=e,r=s(e,["components"]);return(0,a.kt)(h,u(d(d({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createApplicationCommand")," will create an application command."),(0,a.kt)("h2",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createApplicationCommand[guildID/global;name;description;defaultPermission;type?;options?]\n")),(0,a.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"guildID/global"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string. integer"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Application command type. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"global")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"specific guildID")),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Application command name, must be lowercase."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"description"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Application command description."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"defaultPermissions"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"If the command should follow the default permissions."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"type?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The application command type. (slash/user/message)"),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"options?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Application command options."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",null," Application Command Option Type ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"NAME"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"ID"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"NOTE"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"SUB_COMMAND"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"SUB_COMMAND_GROUP"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"STRING"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"INTEGER"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Any Integer between -2^53 and 2^53")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"BOOLEAN"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"USER"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"6"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"CHANNEL"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"7"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Includes all channel types + categories")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ROLE"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"8"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MENTIONABLE"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"9"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Includes users and roles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"NUMBER"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"10"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Any double between -2^53 and 2^53")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ATTACHMENT"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"11"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"https://discord.com/developers/docs/resources/channel#attachment-object"}),"attachment")," object")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You can find more information in the ",(0,a.kt)("a",d({parentName:"strong"},{href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"}),"official documentation of Discord's API"),"."))),(0,a.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Check the Slash Command/Interaction guide for more information about slash commands!")),(0,a.kt)("p",null,"This will create a slash command without options:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID/global;example;slash command description!;true;slash]`\n});\n// Will create a slash commands without any user input, you can choose between global/$guildID to create a command globally or only for a specific guild.\n')))}O.isMDXComponent=!0}}]);