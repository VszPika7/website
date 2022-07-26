"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[77956],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),u=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(b,s(s({ref:a},c),{},{components:t})):r.createElement(b,s({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<l;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62573:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(87462),n=(t(67294),t(3905));const l={title:"Using Variables",description:"Here you can see how to setup variables."},s=void 0,i={unversionedId:"guides/variables/using-variables",id:"version-5.5.5/guides/variables/using-variables",title:"Using Variables",description:"Here you can see how to setup variables.",source:"@site/versioned_docs/version-5.5.5/guides/variables/using-variables.md",sourceDirName:"guides/variables",slug:"/guides/variables/using-variables",permalink:"/docs/guides/variables/using-variables",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"Using Variables",description:"Here you can see how to setup variables."},sidebar:"docs",previous:{title:"Command Handler Extras",permalink:"/docs/guides/command-handler/command-handler-extras"},next:{title:"Channel Variables",permalink:"/docs/guides/variables/channel-variables"}},o={},u=[{value:"Setup Variables:",id:"setup-variables",level:3},{value:"Information:",id:"information",level:4},{value:"Usage",id:"usage",level:3},{value:"Usage with table",id:"usage-with-table",level:3},{value:"Example",id:"example",level:3},{value:"Multiple Variables",id:"multiple-variables",level:3}],c={toc:u};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It must be inside of your main file, in most of the cases this is ",(0,n.kt)("inlineCode",{parentName:"p"},"index.js"))),(0,n.kt)("h3",{id:"setup-variables"},"Setup Variables:"),(0,n.kt)("h4",{id:"information"},"Information:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"Name")," => the variable name. Call it whatever you want to"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"Value")," => the default value of the variable.")),(0,n.kt)("p",null,"It's always this default value unless you change it."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/functions/setvar"},"$setVar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/functions/setuservar"},"$setUserVar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/functions/setservervar"},"$setServerVar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/functions/setglobaluservar"},"$setGlobalUserVar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/functions/setmessagevar"},"$setMessageVar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/functions/setchannelvar"},"$setChannelVar"))),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.variables({\nvariable: "value"\n})\n')),(0,n.kt)("h3",{id:"usage-with-table"},"Usage with table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.variables({\nvariable: \"value\"\n} ,'main') \n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.variables({\nmoney: 0\n})\n")),(0,n.kt)("h3",{id:"multiple-variables"},"Multiple Variables"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.variables({\nvar1: "value1",\nvar2: "value2"\n})\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/guides/variables/global-variables"},"global-variables.md"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/guides/variables/user-variables"},"user-variables.md"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/guides/variables/server-variables"},"server-variables.md"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/guides/variables/channel-variables"},"channel-variables.md"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/guides/variables/message-variables"},"message-variables.md"))))}p.isMDXComponent=!0}}]);