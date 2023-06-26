"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Simple Moderations Clear",description:"This is a simple moderations clear command.",authors:{name:"@mingweiop",title:"Member - 730782268175679528",userid:"730782268175679528",url:"https://discord.com/users/730782268175679528",image_url:"https://cdn.discordapp.com/avatars/730782268175679528/878c4fa1960c4c9db55d8509b2100f20.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},s=void 0,i={permalink:"/wikis/posts/730782268175679528/j991sn",source:"@site/forums/posts/730782268175679528/j991sn.md",title:"Simple Moderations Clear",description:"This is a simple moderations clear command.",date:"2023-06-26T14:04:03.000Z",formattedDate:"June 26, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@mingweiop",title:"Member - 730782268175679528",userid:"730782268175679528",url:"https://discord.com/users/730782268175679528",image_url:"https://cdn.discordapp.com/avatars/730782268175679528/878c4fa1960c4c9db55d8509b2100f20.png",imageURL:"https://cdn.discordapp.com/avatars/730782268175679528/878c4fa1960c4c9db55d8509b2100f20.png"}],frontMatter:{title:"Simple Moderations Clear",description:"This is a simple moderations clear command.",authors:{name:"@mingweiop",title:"Member - 730782268175679528",userid:"730782268175679528",url:"https://discord.com/users/730782268175679528",image_url:"https://cdn.discordapp.com/avatars/730782268175679528/878c4fa1960c4c9db55d8509b2100f20.png",imageURL:"https://cdn.discordapp.com/avatars/730782268175679528/878c4fa1960c4c9db55d8509b2100f20.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Currency Command Balance",permalink:"/wikis/posts/730782268175679528/c0xpn"},nextItem:{title:"Ticketing system",permalink:"/wikis/posts/949588732498018324/r4uv0q"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "clear",\n    aliases: "purge",\n    code: `Successfully cleared **$message[1]** message(s)\n    $clear[$message[1]]\n    $onlyIf[$isNumber[$message[1]]==true;{newEmbed: {title:Invalid Numbers}{description:Correct Usage: \\`\\`!clear 20\\`\\`}}]\n    $argsCheck[1;{newEmbed: {title:Invalid Args}{description:Correct Usage: \\`\\`!clear 20\\`\\`}{color:Red}}]\n    $onlyClientPerms[managemessages;{newEmbed: {title:Bot Permission Required}{description:I do not have "Manage Messages" permission to clear message!}{color:Red}}]\n    $onlyPerms[managemessages;{newEmbed: {title:Permission Required}{description:You need "Manage Messages" permission to use this command!}{color:Red}}]`\n}]\n')))}d.isMDXComponent=!0}}]);