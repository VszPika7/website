"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96418],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=l,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(h,o(o({ref:n},s),{},{components:t})):a.createElement(h,o({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const r={title:"$cloneChannel",description:"$cloneChannel will clone a channel.",id:"cloneChannel"},o=void 0,c={unversionedId:"functions/Calling/cloneChannel",id:"functions/Calling/cloneChannel",title:"$cloneChannel",description:"$cloneChannel will clone a channel.",source:"@site/docs/functions/Calling/cloneChannel.md",sourceDirName:"functions/Calling",slug:"/functions/Calling/cloneChannel",permalink:"/docs/functions/Calling/cloneChannel",draft:!1,tags:[],version:"current",frontMatter:{title:"$cloneChannel",description:"$cloneChannel will clone a channel.",id:"cloneChannel"},sidebar:"docs",previous:{title:"$clearReactions",permalink:"/docs/functions/Calling/clearReactions"},next:{title:"$color",permalink:"/docs/functions/Calling/color"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"It won&#39;t clone any messages of that channel.",id:"it-wont-clone-any-messages-of-that-channel",level:3},{value:"Example",id:"example",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$cloneChannel")," will clone a channel."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$cloneChannel[channelID;name;returnID?]\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelID"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"channel ID to clone"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the cloned channel"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"returnID?"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"return channel ID"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no")))),(0,l.kt)("h3",{id:"it-wont-clone-any-messages-of-that-channel"},"It won't clone any messages of that channel."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,'This will clone the current channel and name it "new channel":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'cloneChannel',\n  code: `\n  $cloneChannel[$channelID;new channel;no]\n  `\n});\n")))}u.isMDXComponent=!0}}]);