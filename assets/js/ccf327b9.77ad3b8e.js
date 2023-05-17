"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[54366],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36234:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={title:"$hasPlayer",description:"$hasPlayer will return either true or false depending on if the current instance has a player in the current guild.",id:"hasPlayer"},o=void 0,l={unversionedId:"akarui/aoi.music/functions/hasPlayer",id:"akarui/aoi.music/functions/hasPlayer",title:"$hasPlayer",description:"$hasPlayer will return either true or false depending on if the current instance has a player in the current guild.",source:"@site/docs/akarui/aoi.music/functions/hasPlayer.md",sourceDirName:"akarui/aoi.music/functions",slug:"/akarui/aoi.music/functions/hasPlayer",permalink:"/docs/akarui/aoi.music/functions/hasPlayer",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1680807940,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{title:"$hasPlayer",description:"$hasPlayer will return either true or false depending on if the current instance has a player in the current guild.",id:"hasPlayer"},sidebar:"docs",previous:{title:"$getFilters",permalink:"/docs/akarui/aoi.music/functions/getFilters"},next:{title:"$joinVC",permalink:"/docs/akarui/aoi.music/functions/joinVC"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$hasPlayer")," will return either true or false depending on if the current instance has a player in the current guild."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$hasPlayer\n")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return either true or false depending on if your bot has a player in the current guild or not:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'hasPlayer',\n    code: `\n    $hasPlayer\n  `\n});\n")))}p.isMDXComponent=!0}}]);