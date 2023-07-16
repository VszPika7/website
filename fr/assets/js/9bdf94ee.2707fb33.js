"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>m,default:()=>j,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const y={title:"$onlyForIDs",description:"only the specified user IDs will be able to execute the command"},m=void 0,b={unversionedId:"functions/onlyforids",id:"version-5.5.5/functions/onlyforids",title:"$onlyForIDs",description:"only the specified user IDs will be able to execute the command",source:"@site/versioned_docs/version-5.5.5/functions/onlyforids.md",sourceDirName:"functions",slug:"/functions/onlyforids",permalink:"/fr/docs/5.5.5/functions/onlyforids",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$onlyForIDs",description:"only the specified user IDs will be able to execute the command"},sidebar:"docs",previous:{title:"$onlyForChannels",permalink:"/fr/docs/5.5.5/functions/onlyforchannels"},next:{title:"$onlyForRoles",permalink:"/fr/docs/5.5.5/functions/onlyforroles"}},O={},v=[],h={toc:v},g="wrapper";function j(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(g,u(f(f({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function only runs the command if the author's id matches to the specified ids"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$onlyForIDs[id1;id2;..;error when blocked]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "special",\ncode: `Special Command\n$onlyForIDs[535566311942651924;:x: You can\'t run this command]`\n})\n')))}j.isMDXComponent=!0}}]);