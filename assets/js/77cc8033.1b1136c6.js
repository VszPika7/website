"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[72276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),v=a,d=u["".concat(l,".").concat(v)]||u[v]||f[v]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},45327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"$leaveVC",description:"Makes the bot leave the voice channel where it is connected"},c=void 0,i={unversionedId:"functions/leavevc",id:"version-5.5.5/functions/leavevc",title:"$leaveVC",description:"Makes the bot leave the voice channel where it is connected",source:"@site/versioned_docs/version-5.5.5/functions/leavevc.md",sourceDirName:"functions",slug:"/functions/leavevc",permalink:"/docs/5.5.5/functions/leavevc",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687289630,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$leaveVC",description:"Makes the bot leave the voice channel where it is connected"},sidebar:"docs",previous:{title:"$kick",permalink:"/docs/5.5.5/functions/kick"},next:{title:"$let",permalink:"/docs/5.5.5/functions/let"}},l={},s=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Makes the bot leave the voice channel where it is connected, if any."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$leaveVC\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "leave",\n    code: `I left the VC!\n    $leaveVC`\n})\n')))}f.isMDXComponent=!0}}]);