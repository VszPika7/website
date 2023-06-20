"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"$stringStartsWith",description:"Determines whether given message starts by another text or not."},s=void 0,i={unversionedId:"functions/stringstartswith",id:"version-5.5.5/functions/stringstartswith",title:"$stringStartsWith",description:"Determines whether given message starts by another text or not.",source:"@site/versioned_docs/version-5.5.5/functions/stringstartswith.md",sourceDirName:"functions",slug:"/functions/stringstartswith",permalink:"/docs/5.5.5/functions/stringstartswith",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687236886,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$stringStartsWith",description:"Determines whether given message starts by another text or not."},sidebar:"docs",previous:{title:"$stringEndsWith",permalink:"/docs/5.5.5/functions/stringendswith"},next:{title:"$sub",permalink:"/docs/5.5.5/functions/sub"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," depending if given text starts with the requested content."),(0,a.kt)("p",null,"Raw usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$stringStartsWith[message;text]")),(0,a.kt)("p",null,"Example usage to return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\n    name: "startswith",\n    code: `Does \\`Hey, how are you?\\` start with Hey?\n$stringStartsWith[Hey, how are you?;Hey] // returns true\n    `\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\n    name: "startswith",\n    code: `Does \\`Hey, how are you?\\` start with Hello?\n$stringStartsWith[Hey, how are you?;Hey] // returns false\n    `\n});\n')),(0,a.kt)("p",null,"Of course you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"$message")," as definition of the message field to check if the command's message starts with a special content."))}f.isMDXComponent=!0}}]);