"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"Submit Wiki",description:"Submit a Wiki which will then be showcased on this website!",slug:"submit",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},a=void 0,l={permalink:"/wikis/submit",source:"@site/forums/introduction.md",title:"Submit Wiki",description:"Submit a Wiki which will then be showcased on this website!",date:"2023-06-20T08:29:15.000Z",formattedDate:"June 20, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Submit Wiki",description:"Submit a Wiki which will then be showcased on this website!",slug:"submit",hide_table_of_contents:!1,pagination_next:null,pagination_prev:null},prevItem:{title:"Wiki Guidelines",permalink:"/wikis/guidelines"},nextItem:{title:"HowGamer command",permalink:"/wikis/posts/howgamer-command-ic9vu7"}},c={authorsImageUrls:[]},s=[],u=(p="SubmitForm",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const m={toc:s},f="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to Wikis, this is still ",(0,i.kt)("strong",{parentName:"p"},"experimental"),"."),(0,i.kt)("admonition",{title:"Before Submitting",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Read the guidelines or your Wiki will possibly get denied for not following the guidelines.")),(0,i.kt)("div",null,(0,i.kt)(u,{mdxType:"SubmitForm"})))}d.isMDXComponent=!0}}]);