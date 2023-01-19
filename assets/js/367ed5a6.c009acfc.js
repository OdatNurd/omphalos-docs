"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"mount"},i=void 0,p={unversionedId:"api/omphalos/mount",id:"api/omphalos/mount",title:"mount",description:"This item is only present in the API object given to an extension; it is",source:"@site/docs/api/omphalos/11_mount.md",sourceDirName:"api/omphalos",slug:"/api/omphalos/mount",permalink:"/docs/api/omphalos/mount",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"mount"},sidebar:"tutorialSidebar",previous:{title:"createRouter",permalink:"/docs/api/omphalos/createRouter"}},l={},u=[],c={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function mount(router)\n")),(0,o.kt)("admonition",{title:"Server only",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This item is only present in the API object given to an ",(0,o.kt)("inlineCode",{parentName:"p"},"extension"),"; it is\nnot available in ",(0,o.kt)("inlineCode",{parentName:"p"},"panels")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"graphics"),".")),(0,o.kt)("p",null,"Mount a router created by ",(0,o.kt)("a",{parentName:"p",href:"./createRouter"},"createRouter")," into the underlying\napplication."),(0,o.kt)("p",null,"Custom routers are mounted in the order that extensions are loaded."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    // Simple router test.\n    const router = omphalos.createRouter();\n\n    router.get('/my_custom_route', (req, res) => res.send('it worked!'))\n    omphalos.mount(router);\n")))}s.isMDXComponent=!0}}]);