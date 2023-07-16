"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57040],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>v,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&u(e,t,n[t]);return e},p=(e,n)=>a(e,i(n)),m=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const f={title:"bot.onGuildJoin",description:"An event that gets executed, if the bot joins a server. To let the bot listen to the event, add one bot.onGuildJoin() callback inside your mainfile."},v=void 0,b={unversionedId:"events/bot.onguildjoin",id:"version-5.5.5/events/bot.onguildjoin",title:"bot.onGuildJoin",description:"An event that gets executed, if the bot joins a server. To let the bot listen to the event, add one bot.onGuildJoin() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onguildjoin.md",sourceDirName:"events",slug:"/events/bot.onguildjoin",permalink:"/ru/docs/5.5.5/events/bot.onguildjoin",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"bot.onGuildJoin",description:"An event that gets executed, if the bot joins a server. To let the bot listen to the event, add one bot.onGuildJoin() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onFunctionError",permalink:"/ru/docs/5.5.5/events/bot.onfunctionerror"},next:{title:"bot.onGuildLeave",permalink:"/ru/docs/5.5.5/events/bot.onguildleave"}},g={},h=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4}],y={toc:h},O="wrapper";function j(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(O,p(d(d({},y),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback will allow the bot to log a message whenever it joins a server."),(0,r.kt)("h4",d({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.guildJoinCommand({//command\nchannel: "channel id",//the channel where <code> will be sent to\ncode: `your code`//message sent to <channel>\n})\n')),(0,r.kt)("h4",d({},{id:"example-command"}),"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.guildJoinCommand({\nchannel: "772414449839636490",\ncode: `\nIve joined $serverName!\n`\n})\n')),(0,r.kt)("p",null,"You can also have it send in the server where it joined by using ",(0,r.kt)("a",d({parentName:"p"},{href:"/ru/docs/5.5.5/functions/systemchannelid"}),"$systemChannelID")," or ",(0,r.kt)("a",d({parentName:"p"},{href:"/ru/docs/5.5.5/functions/randomchannelid"}),"$randomChannelID"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.guildJoinCommand({\nchannel: "$systemChannelID",\ncode: `\nHi i am Awesome Bot and I can do many things.\n`\n \n})\n')),(0,r.kt)("p",null,"Keep in mind: Not all servers have a system channel!"),(0,r.kt)("p",null,"You can use all guild based functions like ",(0,r.kt)("a",d({parentName:"p"},{href:"/ru/docs/5.5.5/functions/servername"}),"$serverName")," or ",(0,r.kt)("a",d({parentName:"p"},{href:"/ru/docs/5.5.5/functions/guildid"}),"$guildID")," or ",(0,r.kt)("a",d({parentName:"p"},{href:"/ru/docs/5.5.5/functions/getserverinvite"}),"$getServerInvite")," in these commands."))}j.isMDXComponent=!0}}]);