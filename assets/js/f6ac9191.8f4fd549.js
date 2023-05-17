"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[92552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,f=u["".concat(p,".").concat(s)]||u[s]||d[s]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={title:"$tempCooldown",description:"$tempCooldown will create a temporary cooldown for a command.",id:"tempCooldown"},l=void 0,i={unversionedId:"functions/util/tempCooldown",id:"functions/util/tempCooldown",title:"$tempCooldown",description:"$tempCooldown will create a temporary cooldown for a command.",source:"@site/docs/functions/util/tempCooldown.md",sourceDirName:"functions/util",slug:"/functions/util/tempCooldown",permalink:"/docs/functions/util/tempCooldown",draft:!1,tags:[],version:"current",frontMatter:{title:"$tempCooldown",description:"$tempCooldown will create a temporary cooldown for a command.",id:"tempCooldown"},sidebar:"docs",previous:{title:"$stringStartsWith",permalink:"/docs/functions/util/stringStartsWith"},next:{title:"$textSlice",permalink:"/docs/functions/util/textSlice"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$tempCooldown")," will create a temporary cooldown for a command."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$tempCooldown[time;id;errorMessage?]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are able to retrieve the remaining cooldown in the ",(0,a.kt)("inlineCode",{parentName:"li"},"$tempCooldown")," function by using ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"%time%"))," or any of the\nfollowing below.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"time"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The duration of the cooldown."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Can be user, guild, message, channel or any other ID."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errorMessage"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Error message when there's remaining time for the cooldown."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will set a temporary cooldown for a command which applies once only:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'tempCooldown',\n    code: `\n  hello\n  $tempCooldown[2m;customid;Please wait %time% to execute this command again.]\n  `\n});\n")))}d.isMDXComponent=!0}}]);