"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$mentionedChannels",description:"$mentionedChannels will return the ID of a channel retrieved from the mention.",id:"mentionedChannels"},h=void 0,y={unversionedId:"functions/util-related/mentionedChannels",id:"version-6.4.0/functions/util-related/mentionedChannels",title:"$mentionedChannels",description:"$mentionedChannels will return the ID of a channel retrieved from the mention.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/mentionedChannels.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedChannels",permalink:"/uk/docs/functions/util-related/mentionedChannels",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$mentionedChannels",description:"$mentionedChannels will return the ID of a channel retrieved from the mention.",id:"mentionedChannels"},sidebar:"docs",previous:{title:"$mentioned",permalink:"/uk/docs/functions/util-related/mentioned"},next:{title:"$mentionedChannelsCount",permalink:"/uk/docs/functions/util-related/mentionedChannelsCount"}},b={},g=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:g},k="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,d(p(p({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedChannels")," will return the ID of a channel retrieved from the mention."),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$mentionedChannels[index;returnSelf?]\n")),(0,r.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"index"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"The index of the argument."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"returnSelf?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Return the ID of the channel where the command was executed in when channel was not found."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the ID of the ",(0,r.kt)("strong",{parentName:"p"},"first")," mention if you attempt to mention any channel in this command, or else it will\nreturn the channel ID of the channel where the command was executed in:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionedChannels',\n    code: `\n  $mentionedChannels[1;true]\n  `\n});\n")))}O.isMDXComponent=!0}}]);