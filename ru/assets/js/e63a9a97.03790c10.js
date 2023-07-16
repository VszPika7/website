"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>w,toc:()=>g});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&u(e,a,t[a]);return e},d=(e,t)=>i(e,o(t)),m=(e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$awaitData",description:"$awaitData \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f \u0432 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0445.",id:"awaitData"},b=void 0,w={unversionedId:"functions/awaited-related/awaitData",id:"version-6.4.0/functions/awaited-related/awaitData",title:"$awaitData",description:"$awaitData \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f \u0432 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0445.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitData.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitData",permalink:"/ru/docs/functions/awaited-related/awaitData",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$awaitData",description:"$awaitData \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f \u0432 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0445.",id:"awaitData"},sidebar:"docs",previous:{title:"$awaitComponentsUntil",permalink:"/ru/docs/functions/awaited-related/awaitComponentsUntil"},next:{title:"$awaitMessageReactions",permalink:"/ru/docs/functions/awaited-related/awaitMessageReactions"}},y={},g=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],v={toc:g},O="wrapper";function k(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(O,d(s(s({},v),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$awaitData")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0445."),(0,n.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$awaitData[name]\n")),(0,n.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Nbg"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0435 \u0438\u043c\u044f \u0434\u0430\u043d\u043d\u044b\u0445."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,n.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,n.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0451\u0442 ID \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0432\u0432\u0435\u0434\u0435\u0442 \u0435\u0433\u043e \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "awaitData",\n  code: `\n  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]\n  `\n});\n\n\u0431\u043e\u0442. waitedCommand({\n  name: "returnMembers",\n  code: `\n  $log[ $authorID , is one out of $awaitData[members] members ]\n  `\n});\n')))}k.isMDXComponent=!0}}]);