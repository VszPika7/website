"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&c(e,r,t[r]);return e},s=(e,t)=>i(e,l(t)),f=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$guildVerificationLevel",description:"$guildVerificationLevel renverra le niveau de v\xe9rification du serveur.",id:"guildVerificationLevel"},v=void 0,g={unversionedId:"functions/guild-related/guildVerificationLevel",id:"version-6.4.0/functions/guild-related/guildVerificationLevel",title:"$guildVerificationLevel",description:"$guildVerificationLevel renverra le niveau de v\xe9rification du serveur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildVerificationLevel.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildVerificationLevel",permalink:"/fr/docs/functions/guild-related/guildVerificationLevel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$guildVerificationLevel",description:"$guildVerificationLevel renverra le niveau de v\xe9rification du serveur.",id:"guildVerificationLevel"},sidebar:"docs",previous:{title:"$guildSystemChannelID",permalink:"/fr/docs/functions/guild-related/guildSystemChannelID"},next:{title:"$guildWidgetChannelID",permalink:"/fr/docs/functions/guild-related/guildWidgetChannelID"}},y={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:b},N="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(N,s(p(p({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildVerificationLevel")," renverra le niveau de v\xe9rification du serveur."),(0,n.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildVerificationLevel[IDserveur?]\n")),(0,n.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"IDserveur?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"L'ID du serveur."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type de niveau de boosts"),(0,n.kt)("th",p({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Aucun")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Bas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Moyenne")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\xc9lev\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Le plus haut")))),(0,n.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela renverra le niveau de v\xe9rification du serveur dans lequel la commande est ex\xe9cut\xe9e:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'NiveauDeVerificationDuServeur',\n    code: `\n  $guildVerificationLevel[$guildID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);