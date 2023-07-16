"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var o=n(3905),r=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>a(e,l(t)),m=(e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n};const f={title:"$loopMode",description:"Loops the current song/songs in the queue."},g=void 0,b={unversionedId:"functions/loopmode",id:"version-5.5.5/functions/loopmode",title:"$loopMode",description:"Loops the current song/songs in the queue.",source:"@site/versioned_docs/version-5.5.5/functions/loopmode.md",sourceDirName:"functions",slug:"/functions/loopmode",permalink:"/es/docs/5.5.5/functions/loopmode",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$loopMode",description:"Loops the current song/songs in the queue."},sidebar:"docs",previous:{title:"$loop",permalink:"/es/docs/5.5.5/functions/loop"},next:{title:"$loopStatus",permalink:"/es/docs/5.5.5/functions/loopstatus"}},k={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Modes",id:"modes",level:4},{value:"Example",id:"example",level:2}],v={toc:y},h="wrapper";function O(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,o.kt)(h,d(c(c({},v),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function loops/unloops the current song/songs in queue."),(0,o.kt)("h3",c({},{id:"usage"}),"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$loopMode[mode]\n")),(0,o.kt)("h3",c({},{id:"fields"}),"Fields"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,o.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,o.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,o.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",c({parentName:"tr"},{align:"left"}),"mode"),(0,o.kt)("td",c({parentName:"tr"},{align:"left"}),"The mode based on which the song/queue will be looped/unlooped"),(0,o.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,o.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")))),(0,o.kt)("h4",c({},{id:"modes"}),"Modes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"song")," - To loop/unloop current song in the queue."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queue")," - To loop/unloop all songs in the queue."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none")," - To disable loop in the song/queue.")),(0,o.kt)("h2",c({},{id:"example"}),"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With current song mode")),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "loop-song",\n    code: `\n    Looping current song.\n    $loopMode[song]\n    `\n})\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With queue mode")),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "loop-queue",\n    code: `\n    Looping all songs in the queue.\n    $loopMode[queue]\n    `\n})\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With none mode")),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "loop-disable",\n    code: `\n    Disabling all loops in the queue.\n    $loopMode[none]\n    `\n})\n')))}O.isMDXComponent=!0}}]);