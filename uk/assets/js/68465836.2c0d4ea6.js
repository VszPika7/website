"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>o(e,s(t)),m=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"bot.onMessageUpdate",description:"An event that gets executed, if the bot sees a user editing a message. To let the bot listen to the event, add one bot.onMessageUpdate() callback inside your main file."},b=void 0,g={unversionedId:"events/bot.onmessageupdate",id:"version-5.5.5/events/bot.onmessageupdate",title:"bot.onMessageUpdate",description:"An event that gets executed, if the bot sees a user editing a message. To let the bot listen to the event, add one bot.onMessageUpdate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onmessageupdate.md",sourceDirName:"events",slug:"/events/bot.onmessageupdate",permalink:"/uk/docs/5.5.5/events/bot.onmessageupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"bot.onMessageUpdate",description:"An event that gets executed, if the bot sees a user editing a message. To let the bot listen to the event, add one bot.onMessageUpdate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onMessageDelete",permalink:"/uk/docs/5.5.5/events/bot.onmessagedelete"},next:{title:"bot.onPresenceUpdate",permalink:"/uk/docs/5.5.5/events/bot.onpresenceupdate"}},v={},h=[{value:"Usage:",id:"usage",level:4},{value:"Example command:",id:"example-command",level:4}],y={toc:h},O="wrapper";function w(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(O,u(p(p({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This callback allows the bot to log any edited messages to the given channel"),(0,a.kt)("h4",p({},{id:"usage"}),"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.updateCommand({ //the command \n        channel: "the channel id", //the chanel where the bot will log\n        code: `Your wonderful code` //Your code that will appear in <channel>\n})\n')),(0,a.kt)("h4",p({},{id:"example-command"}),"Example command:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.updateCommand({\n        channel: "782446718704812032", \n        code: `Message edited from $username in <#$channelUsed>:\n$message\nOld message: $oldMessage`\n/*\n        Code Breakdown\n$message - The new message\n$oldMessage - The message before it was edited (This function only works in this callback)\n$username - The person who edited the message\n$channelUsed - Where the person edited the message\n*/\n})\n')))}w.isMDXComponent=!0}}]);