"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32337],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22317:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"$interactionPing",description:"$interactionPing will return the latency of an interaction.",id:"interactionPing"},a=void 0,c={unversionedId:"functions/Info/interactionPing",id:"functions/Info/interactionPing",title:"$interactionPing",description:"$interactionPing will return the latency of an interaction.",source:"@site/docs/functions/Info/interactionPing.md",sourceDirName:"functions/Info",slug:"/functions/Info/interactionPing",permalink:"/docs/functions/Info/interactionPing",draft:!1,tags:[],version:"current",frontMatter:{title:"$interactionPing",description:"$interactionPing will return the latency of an interaction.",id:"interactionPing"},sidebar:"docs",previous:{title:"$hoistedRole",permalink:"/docs/functions/Info/hoistedRole"},next:{title:"$lowestGuildRole",permalink:"/docs/functions/Info/lowestGuildRole"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Please note that you require <code>bot.onInteractionCreate();</code> to be in your main file.",id:"please-note-that-you-require-botoninteractioncreate-to-be-in-your-main-file",level:4},{value:"Example",id:"example",level:2}],p={toc:u};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$interactionPing")," will return the latency of an interaction."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$interactionPing\n")),(0,i.kt)("h4",{id:"please-note-that-you-require-botoninteractioncreate-to-be-in-your-main-file"},"Please note that you require ",(0,i.kt)("inlineCode",{parentName:"h4"},"bot.onInteractionCreate();")," to be in your main file."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This will return the latency of an interaction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'interactionPing',\n  code: `\n $addbutton[1;test;primary;testButton;no]\n Click me!\n  `\n});\n\nbot.interactionCommand({\n  name: 'testButton',\n  prototype: 'button',\n  code: `\n  $interactionUpdate[This took me: $interactionPing MS!] //will edit the button message and return the latency\n  `\n});\n")))}s.isMDXComponent=!0}}]);