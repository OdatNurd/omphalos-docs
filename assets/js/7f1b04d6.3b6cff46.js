"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"bundleVars.get"},i=void 0,l={unversionedId:"api/omphalos/bundleVars_get",id:"api/omphalos/bundleVars_get",title:"bundleVars.get",description:"Fetch the value of the provided key from the persistent storage for this bundle",source:"@site/docs/api/omphalos/07_bundleVars_get.md",sourceDirName:"api/omphalos",slug:"/api/omphalos/bundleVars_get",permalink:"/docs/api/omphalos/bundleVars_get",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"bundleVars.get"},sidebar:"tutorialSidebar",previous:{title:"bundleVars.set",permalink:"/docs/api/omphalos/bundleVars_set"},next:{title:"bundleVars.delete",permalink:"/docs/api/omphalos/bundleVars_delete"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function bundleVars.get(key, defaultValue);\n")),(0,o.kt)("p",null,"Fetch the value of the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," from the persistent storage for this bundle\nand return it. If there is currently no stored value for this key, the provided\n",(0,o.kt)("inlineCode",{parentName:"p"},"defaultValue"),", if any, will be returned."),(0,o.kt)("admonition",{title:"Fetch entire storage",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If this function is invoked with no ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultValue"),", the resulting\nreturn will be the entire storage for the bundle as one large JSON object."),(0,o.kt)("p",{parentName:"admonition"},"This will always return an object, though it may have no keys if there are\ncurrently no items in storage for this bundle.")))}c.isMDXComponent=!0}}]);