"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74603],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return t?a.createElement(m,l(l({ref:n},s),{},{components:t})):a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>f,default:()=>N,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var a=t(3905),o=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&s(e,t,n[t]);return e},h=(e,n)=>r(e,l(n)),u=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const m={title:"bot.onChannelUpdate",description:"An event that gets executed, if the bot sees a channel update on a server. To let the bot listen to the event, add one bot.onChannelUpdate() callback inside your main file."},f=void 0,b={unversionedId:"events/bot.onchannelupdate",id:"version-5.5.5/events/bot.onchannelupdate",title:"bot.onChannelUpdate",description:"An event that gets executed, if the bot sees a channel update on a server. To let the bot listen to the event, add one bot.onChannelUpdate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onchannelupdate.md",sourceDirName:"events",slug:"/events/bot.onchannelupdate",permalink:"/uk/docs/5.5.5/events/bot.onchannelupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"bot.onChannelUpdate",description:"An event that gets executed, if the bot sees a channel update on a server. To let the bot listen to the event, add one bot.onChannelUpdate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onChannelDelete",permalink:"/uk/docs/5.5.5/events/bot.onchanneldelete"},next:{title:"bot.onFunctionError",permalink:"/uk/docs/5.5.5/events/bot.onfunctionerror"}},v={},k=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],y={toc:k},g="wrapper";function N(e){var n=e,{components:t}=n,o=u(n,["components"]);return(0,a.kt)(g,h(d(d({},y),o),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command gets triggered everytime a channel was updated on a server."),(0,a.kt)("h4",d({},{id:"usage"}),"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.channelUpdateCommand({ //Command\nchannel: "channel ID", //Channel where its being logged\ncode: `your code` //Code sent to <channel>\n})\n')),(0,a.kt)("h4",d({},{id:"example-command"}),"Example Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.channelUpdateCommand({ \nchannel: "772414449839636490", \ncode: `\nChannel Name Updated\nOld Name: $oldChannel[name]\nNew Name: $newChannel[name]\n`\n})\n')),(0,a.kt)("h4",d({},{id:"options"}),"Options:"),(0,a.kt)("p",null,"You can use these functions ",(0,a.kt)("a",d({parentName:"p"},{href:"/uk/docs/5.5.5/functions/newchannel"}),"$newChannel","[","]"," "),"and ",(0,a.kt)("a",d({parentName:"p"},{href:"/uk/docs/5.5.5/functions/oldchannel"}),"$oldChannel","[","]")," with the options below to return new and old channel data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - The name of the channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"topic")," - The topic for this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"position")," - The position of the channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"categoryID")," - The ID of the category this channel belongs to "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"guildID")," - The ID of the guild this channel belongs to "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lastMessageID")," - The ID of the last message sent here ","(","if any",")"," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," - The type of this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsfw")," - Whether the channel is nsfw or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slowmode")," - The slow mode duration for this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rawPosition")," - The raw position for this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deleted")," - Whether the channel was deleted or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"viewable")," - Whether the channel was be seen by the client or not "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manageable")," - Whether the client can or not manage this channel "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deleteable")," - Whether this channel can be deleted by the client or not")))}N.isMDXComponent=!0}}]);