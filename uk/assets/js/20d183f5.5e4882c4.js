"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>N,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$advanceCooldown",description:"The cooldown function, but advanced version."},v=void 0,g={unversionedId:"functions/advancecooldown",id:"version-5.5.5/functions/advancecooldown",title:"$advanceCooldown",description:"The cooldown function, but advanced version.",source:"@site/versioned_docs/version-5.5.5/functions/advancecooldown.md",sourceDirName:"functions",slug:"/functions/advancecooldown",permalink:"/uk/docs/5.5.5/functions/advancecooldown",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$advanceCooldown",description:"The cooldown function, but advanced version."},sidebar:"docs",previous:{title:"$advancedTextSplit",permalink:"/uk/docs/5.5.5/functions/advancedtextsplit"},next:{title:"$allChannelsCount",permalink:"/uk/docs/5.5.5/functions/allchannelscount"}},k={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Suffixes",id:"suffixes",level:4},{value:"Example",id:"example",level:2}],b={toc:y},w="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(w,u(s(s({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will create a cooldown for the given ID."),(0,r.kt)("h3",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$advanceCooldown[time;id;error?]\n")),(0,r.kt)("h3",s({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"time"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The cooldown time"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"id"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The ID of the cooldown will create for"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"error message?"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The error message"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h4",s({},{id:"suffixes"}),"Suffixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," - Seconds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m")," - Minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"h")," - Hours"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d")," - Days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"w")," - Weeks")),(0,r.kt)("h2",s({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "advance-cooldown",\n  code: `\n  Hello, World!\n  \n  $advanceCooldown[15s;$guildID;Wait %time% seconds before using this command again.]\n  `\n});\n')))}N.isMDXComponent=!0}}]);