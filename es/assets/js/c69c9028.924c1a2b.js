"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>g,frontMatter:()=>f,metadata:()=>h,toc:()=>N});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>r(e,l(t)),d=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$client",description:"A compact funcion with different functionalities."},k=void 0,h={unversionedId:"functions/client",id:"version-5.5.5/functions/client",title:"$client",description:"A compact funcion with different functionalities.",source:"@site/versioned_docs/version-5.5.5/functions/client.md",sourceDirName:"functions",slug:"/functions/client",permalink:"/es/docs/5.5.5/functions/client",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$client",description:"A compact funcion with different functionalities."},sidebar:"docs",previous:{title:"$clearReactions",permalink:"/es/docs/5.5.5/functions/clearreactions"},next:{title:"$clientID",permalink:"/es/docs/5.5.5/functions/clientid"}},b={},N=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Options",id:"options",level:4},{value:"Client Related Options",id:"client-related-options",level:4},{value:"Application Related Options",id:"application-related-options",level:4},{value:"Example",id:"example",level:2}],v={toc:N},y="wrapper";function g(e){var t=e,{components:n}=t,i=d(t,["components"]);return(0,a.kt)(y,m(u(u({},v),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With this command you can get information about the bot user itself."),(0,a.kt)("h3",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$client[option]\n")),(0,a.kt)("h3",u({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"option"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"The option to be used"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h4",u({},{id:"options"}),"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prefix")," - Returns the prefix of the bot."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"variables.name")," - Returns the name of all variables present."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"variables.json")," - Returns details about all variables present."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"variables.object.<name>")," - Returns details about ",(0,a.kt)("inlineCode",{parentName:"li"},"<name>")," variable.")),(0,a.kt)("h4",u({},{id:"client-related-options"}),"Client Related Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.id")," - Returns the id of the client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.bot")," - Returns boolean whether or not it's a bot."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.system")," - Returns boolean whether or not it's a system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.username")," - Returns the client's username."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.discriminator")," - Returns the discriminator of the client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.flags")," - Returns the flags of the bot. Example- VERIFIED_BOT for verified bots etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.avatar")," - Returns the avatar of the client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.verified")," - Returns boolean whether or not it's verified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.mfaEnabled")," - Returns boolean whether or not MFA is enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user.avatarUrl")," - Returns the bot's avatar url.")),(0,a.kt)("h4",u({},{id:"application-related-options"}),"Application Related Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.name")," - Returns the name of the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.id")," - Returns the id of the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.description")," - Returns the description of the application set in dev portal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.tags"),"- Returns the tags of the application set in dev portal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.customInstallUrl")," - Returns the custom install url of the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.flags")," - Returns the flags of the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.botRequireCodeGrant")," - Returns boolean whether or not the bot requires code grant while inviting it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.botPublic")," - Returns boolean whether or not the bot is public."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.owner")," - Returns the id of the owner of the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.iconURL")," - Returns the icon URL of the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"application.createTimestamp")," - Returns the timestamp when the application was created.")),(0,a.kt)("h2",u({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "client",\ncode: `\nMy username is: $client[user.username]\n`\n})\n')))}g.isMDXComponent=!0}}]);