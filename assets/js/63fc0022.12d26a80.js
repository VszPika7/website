"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39343],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),d=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},g=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),c=d(n),s=a,m=c["".concat(u,".").concat(s)]||c[s]||p[s]||l;return n?r.createElement(m,i(i({ref:e},g),{},{components:n})):r.createElement(m,i({ref:e},g))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16648:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"$getAuditLogs",description:"$getAuditLogs will retrieve guild audit logs according to the given arguments.",id:"getAuditLogs"},i=void 0,o={unversionedId:"functions/Info/getAuditLogs",id:"functions/Info/getAuditLogs",title:"$getAuditLogs",description:"$getAuditLogs will retrieve guild audit logs according to the given arguments.",source:"@site/docs/functions/Info/getAuditLogs.md",sourceDirName:"functions/Info",slug:"/functions/Info/getAuditLogs",permalink:"/docs/functions/Info/getAuditLogs",draft:!1,tags:[],version:"current",frontMatter:{title:"$getAuditLogs",description:"$getAuditLogs will retrieve guild audit logs according to the given arguments.",id:"getAuditLogs"},sidebar:"docs",previous:{title:"getAttachment",permalink:"/docs/functions/Info/getAttachment"},next:{title:"$getBanReason",permalink:"/docs/functions/Info/getBanReason"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],g={toc:d};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$getAuditLogs")," will retrieve guild audit logs according to the given arguments."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$getAuditLogs[limit?;userID?;action?;guildID?;format?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"the maximum of audit logs it will return"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userID?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"the user who executed the action stated in audit logs"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"action?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"the action that was executed  ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"all")," (default) will retrieve all actions without filtering ",(0,a.kt)("br",null)," 2. You can find all permissions ",(0,a.kt)("a",{parentName:"td",href:"https://discord.com/developers/docs/topics/permissions"},"here")),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"guild ID"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"format?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"the format to return the audit logs in"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Format"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{executor.username}"),(0,a.kt)("td",{parentName:"tr",align:null},"Will return the username of the user who excuted the action")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{executor.mention}"),(0,a.kt)("td",{parentName:"tr",align:null},"Will mention the user who executed the action")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{executor.id}"),(0,a.kt)("td",{parentName:"tr",align:null},"Will return the user ID of the user who executed the action")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{executor.tag}"),(0,a.kt)("td",{parentName:"tr",align:null},"Will return the discriminator of the user who executed the action")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{target.id}"),(0,a.kt)("td",{parentName:"tr",align:null},"Will return the ID of the user who was the target of the action")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{action}"),(0,a.kt)("td",{parentName:"tr",align:null},"Will return the action itself")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"{id}"),(0,a.kt)("td",{parentName:"tr",align:null},"Will return the action/auditlog ID")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This will return your latest actions (which are logged in audit logs):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'getAuditLogs',\n  code: `\n  $getAuditLogs[5;$authorID;All;$guildID;{executor.username}: {target.id} - {action}]\n  `\n});\n")))}p.isMDXComponent=!0}}]);