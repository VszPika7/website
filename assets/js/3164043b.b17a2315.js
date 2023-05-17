"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"$addSelectMenu",description:"$addSelectMenu will add a select menu to the bot's message.",id:"addSelectMenu"},o=void 0,i={unversionedId:"functions/interaction/addSelectMenu",id:"functions/interaction/addSelectMenu",title:"$addSelectMenu",description:"$addSelectMenu will add a select menu to the bot's message.",source:"@site/docs/functions/interaction/addSelectMenu.md",sourceDirName:"functions/interaction",slug:"/functions/interaction/addSelectMenu",permalink:"/docs/functions/interaction/addSelectMenu",draft:!1,tags:[],version:"current",frontMatter:{title:"$addSelectMenu",description:"$addSelectMenu will add a select menu to the bot's message.",id:"addSelectMenu"},sidebar:"docs",previous:{title:"$addMessageReactions",permalink:"/docs/functions/interaction/addMessageReactions"},next:{title:"$addThreadMember",permalink:"/docs/functions/interaction/addThreadMember"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$addSelectMenu")," will add a select menu to the bot's message."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$addSelectMenu[index;customId;placeHolder;minValues;maxValues;disabled?;label:description:value:default?:emoji?;...]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"In which actionRow the selectMenu appears, a selectMenu requires one whole row for it alone."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The component custom ID."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placeHolder"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"SelectMenu Placeholder Text."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minValues"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"SelectMenu minimal value of selectable options"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxValues"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"SelectMenu maximal value of selectable options"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If the selectMenu will appear as disabled- ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"true")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"false")," (default)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Select menu options separated by eachother with ",(0,r.kt)("inlineCode",{parentName:"td"},";")," and ",(0,r.kt)("inlineCode",{parentName:"td"},":"),"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This adds a select menu with two functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "add-select-menu",\n    code: `\n  Select an option.\n  \n  $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]\n  `\n});\n\nbot.interactionCommand({\n    name: "yourCustomID",\n    prototype: "selectMenu",\n    code: `\n  $interactionReply[Hello! :);;;;everyone;false]\n  $onlyIf[$interactionData[values[0]]==anotherCustomID;]\n  `\n});\n\nbot.interactionCommand({\n    name: "yourCustomID",\n    prototype: "selectMenu",\n    code: `\n  $interactionReply[Hello! :);;;;everyone;false]\n  $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]\n  `\n});\n\n/* \nWe use "$onlyIf[$interactionData[values[0]]==customID;]" to make sure this only will be triggered for the according select menu option.\n\nAlso ensure that you have the "onInteractionCreate" event in your main file (index.js in most cases).\n*/\n')),(0,r.kt)("p",null,"Handler Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "add-select-menu",\n    code: `\n     Select an option.\n     $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]\n  `\n}, {\n    name: "yourCustomID",\n    type: "interaction", // clarifying that this command is an Interaction\n    prototype: "selectMenu",\n    code: `\n     $interactionReply[Hello! :);;;;everyone;false]\n     $onlyIf[$interactionData[values[0]]==anotherCustomID;]`\n}, {\n    name: "yourCustomID",\n    type: "interaction", // clarifying that this command is an Interaction\n    prototype: "selectMenu",\n    code: `\n     $interactionReply[Bye! :(;;;;everyone;false]\n     $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]`\n}]\n')))}d.isMDXComponent=!0}}]);