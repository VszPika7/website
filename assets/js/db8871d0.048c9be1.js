"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,g=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"$argsCount",description:"$argsCount will return the amount of given arguments.",id:"argsCount"},i=void 0,u={unversionedId:"functions/Misc/argsCount",id:"functions/Misc/argsCount",title:"$argsCount",description:"$argsCount will return the amount of given arguments.",source:"@site/docs/functions/Misc/argsCount.md",sourceDirName:"functions/Misc",slug:"/functions/Misc/argsCount",permalink:"/docs/functions/Misc/argsCount",draft:!1,tags:[],version:"current",frontMatter:{title:"$argsCount",description:"$argsCount will return the amount of given arguments.",id:"argsCount"},sidebar:"docs",previous:{title:"$appendFile",permalink:"/docs/functions/Misc/appendFile"},next:{title:"$arrayAt",permalink:"/docs/functions/Misc/arrayAt"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$argsCount")," will return the amount of given arguments."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$argsCount\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This will return the amount of arguments in your message, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"[prefix]argsCount Hello Bye")," will return two:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'argsCount',\n  code: `\n  $argsCount\n  `\n});\n")))}p.isMDXComponent=!0}}]);