"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,f=c["".concat(u,".").concat(g)]||c[g]||p[g]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},83925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&d(e,n,t[n]);return e},p=(e,t)=>l(e,i(t)),g=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$guildChannelExists",description:"$guildChannelExists \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430 \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",id:"guildChannelExists"},m=void 0,y={unversionedId:"functions/guild-related/guildChannelExists",id:"version-6.4.0/functions/guild-related/guildChannelExists",title:"$guildChannelExists",description:"$guildChannelExists \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430 \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildChannelExists.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildChannelExists",permalink:"/ru/docs/functions/guild-related/guildChannelExists",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$guildChannelExists",description:"$guildChannelExists \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430 \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",id:"guildChannelExists"},sidebar:"docs",previous:{title:"$guildBoostLevel",permalink:"/ru/docs/functions/guild-related/guildBoostLevel"},next:{title:"$guildChannels",permalink:"/ru/docs/functions/guild-related/guildChannels"}},b={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],h={toc:v},k="wrapper";function O(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(k,p(c(c({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildChannelExists")," \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430 \u0433\u0438\u043b\u044c\u0434\u0438\u0438."),(0,r.kt)("h2",c({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$guildChannelExists[guildID;channelResolver]\n")),(0,r.kt)("h2",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043a\u0430\u043d\u0430\u043b \u0433\u0438\u043b\u044c\u0434\u0438\u0438."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0420\u0435\u0437\u043e\u043b\u0432\u0435\u0440 \u043a\u0430\u043d\u0430\u043b\u0430"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430 \u0438\u043b\u0438 \u0438\u043c\u044f \u043a\u0430\u043d\u0430\u043b\u0430."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",c({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043b\u0438 \u043a\u0430\u043d\u0430\u043b \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043f\u0440\u0430\u0432\u0438\u043b\u0430")," , \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ID \u043a\u0430\u043d\u0430\u043b\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildChannelExists',\n    code: `\n  $guildChannelExists[$guildID;rules]\n  `\n});\n")))}O.isMDXComponent=!0}}]);