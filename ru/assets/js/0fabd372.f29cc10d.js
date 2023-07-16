"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,m=s["".concat(o,".").concat(f)]||s[f]||c[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:a,l[1]=u;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>N,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$isGuildMuted",description:"$isGuildMuted \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 `$isMuted`, \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.",id:"isGuildMuted"},y=void 0,b={unversionedId:"functions/util-related/isGuildMuted",id:"version-6.4.0/functions/util-related/isGuildMuted",title:"$isGuildMuted",description:"$isGuildMuted \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 `$isMuted`, \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isGuildMuted.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isGuildMuted",permalink:"/ru/docs/functions/util-related/isGuildMuted",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$isGuildMuted",description:"$isGuildMuted \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 `$isMuted`, \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.",id:"isGuildMuted"},sidebar:"docs",previous:{title:"$isGuildDeafened",permalink:"/ru/docs/functions/util-related/isGuildDeafened"},next:{title:"$isHoisted",permalink:"/ru/docs/functions/util-related/isHoisted"}},g={},k=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],v={toc:k},O="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,c(s(s({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isGuildMuted")," \u043f\u043e\u0445\u043e\u0436, \u043d\u043e \u043d\u0435 \u043f\u0443\u0442\u0430\u0442\u044c \u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"$isMuted"),", \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."),(0,r.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$isGuildMuted[userID?;guildID?]\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d \u043b\u0438 \u043e\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0433\u0438\u043b\u044c\u0434\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u0430\u0433\u043b\u0443\u0448\u0435\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u043d\u0435\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isGuildMuted',\n    code: `\n  $isGuildMuted[$authorID;$guildID]\n  `\n});\n")))}N.isMDXComponent=!0}}]);