"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"$editChannel",description:"Edits channel properties."},l=void 0,o={unversionedId:"functions/editchannel",id:"version-5.5.5/functions/editchannel",title:"$editChannel",description:"Edits channel properties.",source:"@site/versioned_docs/version-5.5.5/functions/editchannel.md",sourceDirName:"functions",slug:"/functions/editchannel",permalink:"/docs/5.5.5/functions/editchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687289630,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$editChannel",description:"Edits channel properties."},sidebar:"docs",previous:{title:"$dm",permalink:"/docs/5.5.5/functions/dm"},next:{title:"$editIn",permalink:"/docs/5.5.5/functions/editin"}},s={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function will allow you to modify a channel using the channel ID."),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 6 required fields:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Channel ID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Category ID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Name ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Position ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"NSFW ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Bitrate ","(","Optional",")"),(0,a.kt)("li",{parentName:"ol"},"User Limit ","(","Optional",")"),(0,a.kt)("li",{parentName:"ol"},"Sync Permission ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Reason ","(","Optional",")")),(0,a.kt)("p",null,"Raw usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$editChannel[channelID;categoryID/$default;name/$default;position/$default;nsfw/$default (yes/no);bitrate/$default;userLimit/$default;syncPermission (yes/no);reason (optional)]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Channel ID - The channel we're editing"),(0,a.kt)("li",{parentName:"ul"},"Category ID - The category the channel is in"),(0,a.kt)("li",{parentName:"ul"},"Name - The channels name"),(0,a.kt)("li",{parentName:"ul"},"Position - The channels position"),(0,a.kt)("li",{parentName:"ul"},"NSFW - Whether or not the channel will be NSFW"),(0,a.kt)("li",{parentName:"ul"},"Bitrate -The bitrate of the voice channel"),(0,a.kt)("li",{parentName:"ul"},"User Limit - The limit of users to the voice channel"),(0,a.kt)("li",{parentName:"ul"},"Sync Permission - Whether or not the channel will sync perms"),(0,a.kt)("li",{parentName:"ul"},"Reason - The reason in the audit logs"),(0,a.kt)("li",{parentName:"ul"},"$default - This puts the property to the original/default option")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "edit",\ncode: `\nChannel name modified!\n$editChannel[$channelID;$default;$message;$default;$default;$default;$default;yes]\n    `\n})\n')))}d.isMDXComponent=!0}}]);