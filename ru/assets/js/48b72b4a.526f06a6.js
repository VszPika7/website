"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56334],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,f=m["".concat(d,".").concat(s)]||m[s]||u[s]||i;return n?a.createElement(f,l(l({ref:e},c),{},{components:n})):a.createElement(f,l({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70861:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>y,contentTitle:()=>k,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&c(t,n,e[n]);if(o)for(var n of o(e))p.call(e,n)&&c(t,n,e[n]);return t},u=(t,e)=>i(t,l(e)),s=(t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const f={title:"$awaitCmdReactions",description:"$awaitCmdReactions \u043e\u0442\u0432\u0435\u0442\u0438\u0442, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442 \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u044d\u043c\u043e\u0434\u0437\u0438.",id:"awaitCmdReactions"},k=void 0,g={unversionedId:"functions/awaited-related/awaitCmdReactions",id:"version-6.4.0/functions/awaited-related/awaitCmdReactions",title:"$awaitCmdReactions",description:"$awaitCmdReactions \u043e\u0442\u0432\u0435\u0442\u0438\u0442, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442 \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u044d\u043c\u043e\u0434\u0437\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitCmdReactions.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitCmdReactions",permalink:"/ru/docs/functions/awaited-related/awaitCmdReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$awaitCmdReactions",description:"$awaitCmdReactions \u043e\u0442\u0432\u0435\u0442\u0438\u0442, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442 \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u044d\u043c\u043e\u0434\u0437\u0438.",id:"awaitCmdReactions"},sidebar:"docs",previous:{title:"$deleteArray",permalink:"/ru/docs/functions/array-related/deleteArray"},next:{title:"$awaitComponents",permalink:"/ru/docs/functions/awaited-related/awaitComponents"}},y={},b=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],N={toc:b},w="wrapper";function v(t){var e=t,{components:n}=e,r=s(e,["components"]);return(0,a.kt)(w,u(m(m({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$awaitCmdReactions")," \u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0440\u0435\u0430\u043a\u0446\u0438\u044e \u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u044d\u043c\u043e\u0434\u0437\u0438."),(0,a.kt)("h2",m({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$awaitCmdReactions[userFilter;time;reactions;commands;errorMsg?;awaitData?]\n")),(0,a.kt)("h2",m({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nbg"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u041d\u0430 \u0447\u0442\u043e \u0431\u043e\u0442 \u043e\u0442\u0432\u0435\u0442\u0438\u0442 ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"everyone")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"\u0410\u0439\u0434\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")," - \u043b\u044e\u0431\u043e\u0439 \u0430\u0439\u0434\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0432\u0440\u0435\u043c\u044f"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u041a\u0430\u043a \u0434\u043e\u043b\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 / \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0438\u0441\u0442\u0435\u0447\u0435\u0442."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0440\u0435\u0430\u043a\u0446\u0438\u0438"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0420\u0435\u0430\u043a\u0446\u0438\u044f \u0431\u043e\u0442\u0430 \u043d\u0430 \u043f\u0440\u043e\u0441\u043b\u0443\u0448\u0438\u0432\u0430\u043d\u0438\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u043c\u043e\u0434\u0437\u0438 \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438 ( ",(0,a.kt)("inlineCode",{parentName:"td"},","),")"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u041a\u043e\u043c\u0430\u043d\u0434\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u043c\u043e\u0434\u0437\u0438 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 ( ",(0,a.kt)("inlineCode",{parentName:"td"},","),")"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"errorMsg?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435, \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0438\u0441\u0442\u0435\u043a\u0430\u0435\u0442."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0445?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"strong"},"GuildMessageReactions")," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0432 \u0432\u0430\u0448\u0435\u043c \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435.")),(0,a.kt)("h2",m({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,a.kt)("p",null,'\u042d\u0442\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u0432\u0430\u043c, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u0435\u0442\u0435 \u0441 \u044d\u043c\u043e\u0434\u0437\u0438 "\u2764\ufe0f" \u043d\u0430 \u0432\u0430\u0448\u0435 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:'),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "awaitCmdReaction",\n    code: `\n  React with "\u2764\ufe0f" for a surpris! \n  $awaitCmdReactions[$authorID;10s;\u2764\ufe0f;awaitedCommandExample;Whoops! \u0412\u044b \u043d\u0435 \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0432\u043e\u0432\u0440\u0435\u043c\u044f..]\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitedCommandExample",\n    \u043a\u043e\u0434: `\n  Nice, \u0432\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u2764\ufe0f.\n  \xab\n});\n')))}v.isMDXComponent=!0}}]);