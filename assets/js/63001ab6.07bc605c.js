"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"$if",description:"Execute a code block with condition."},o=void 0,l={unversionedId:"functions/if",id:"version-5.5.5/functions/if",title:"$if",description:"Execute a code block with condition.",source:"@site/versioned_docs/version-5.5.5/functions/if.md",sourceDirName:"functions",slug:"/functions/if",permalink:"/docs/5.5.5/functions/if",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686803432,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$if",description:"Execute a code block with condition."},sidebar:"docs",previous:{title:"$humanizeMs",permalink:"/docs/5.5.5/functions/humanizems"},next:{title:"$image",permalink:"/docs/5.5.5/functions/image"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Comparison Operators",id:"comparison-operators",level:4},{value:"Logical Operators",id:"logical-operators",level:4},{value:"Footnote",id:"footnote",level:6},{value:"Better understanding of operators",id:"better-understanding-of-operators",level:5},{value:"Examples",id:"examples",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An if else statement in aoi.js is a conditional statement that runs a different set of statements depending on whether an expression is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"\ud83d\udca1 It can also be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"awaited")," command."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$if[condition(s);true field;false field?]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"condition(s)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"to compare if the values are equally same or not, it returns boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"condition"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"true field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If the condition is returning ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the one is going to execute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"false field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If the condition is returning ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", the one is going to execute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h4",{id:"comparison-operators"},"Comparison Operators"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Equal to "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!=")," \u2014 Not equal to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">")," \u2014 Greater than"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<")," \u2014 Less than"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">=")," \u2014 Greater than or equal to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<=")," \u2014 Less than or equal to")),(0,r.kt)("h4",{id:"logical-operators"},"Logical Operators"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&&")," \u2014 Logical and "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"||")," \u2014 Logical or")),(0,r.kt)("h6",{id:"footnote"},"Footnote"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"All functions can be used on ",(0,r.kt)("inlineCode",{parentName:"em"},"$if")," function!")),(0,r.kt)("h5",{id:"better-understanding-of-operators"},"Better understanding of operators"),(0,r.kt)("p",null,"We'll be using variables to show you how the operators works \ud83d\ude43"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Comparison examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// GREATER and LESS THAN operators\n$checkCondition[3>2] // true\n$checkCondition[3<2] // false\n\n$checkCondition[10>=10] // true\n$checkCondition[8<=8] // true\n\n// EQUAL operator\n$checkCondition[2==2] // true\n\n// NOT EQUAL operator\n$checkCondition[3!=2] // true\n$checkCondition[Neo!=neo] // true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logical examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// logical AND\n$checkCondition[(1==1)&&(0==0)] // true\n$checkCondition[(1!=1)&&(0==0)] // false\n\n// logical OR\n$checkCondition[1==1||1==0] // true\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," type condition")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "if",\n  code: `\n  $if[$get[num]==;\n    Worked!;\n    \\`undefined\\` is not equal to 1.\n  ]\n  \n  $let[num;1]\n  `\n// Empty means "undefined" (1 == undefined) is not returning true message.\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$if")," function but with awaited command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.variables({\n  light: "on"\n});\n\nbot.command({\n  name: "if-awaited",\n  code: `\n  $if[$getVar[light]==on;{execute:lightsOff};{execute:lightsOn}]\n  `\n// Our variable doesn\'t equal to "off" so it returns false message.\n});\n\nbot.awaitedCommand({\n  name: "lightsOff",\n  code: `\n  $setVar[light;off]\n  \n  Turning off the lights.\n  `\n});\n\nbot.awaitedCommand({\n  name: "lightsOn",\n  code: `\n  $setVar[light;on]\n  \n  Turning on the lights.\n  `\n});\n')))}u.isMDXComponent=!0}}]);