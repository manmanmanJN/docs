"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[4483],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},240:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={sidebar_position:1},s="Generate Access Key and Secret Key",l={unversionedId:"products/Object-Storage/HowTo/access_secret_key",id:"products/Object-Storage/HowTo/access_secret_key",title:"Generate Access Key and Secret Key",description:"When Contabo is provioning the S3 compatible Object Storage S3 credentials, namely access key and secret key, are being generated in a secure manner for you. If you wish to regenerate a new secret key plese follow these steps:",source:"@site/docs/products/Object-Storage/HowTo/access_secret_key.md",sourceDirName:"products/Object-Storage/HowTo",slug:"/products/Object-Storage/HowTo/access_secret_key",permalink:"/docs/products/Object-Storage/HowTo/access_secret_key",editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/HowTo/access_secret_key.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"productSidebar",previous:{title:"Share Object Storage with selected users",permalink:"/docs/products/Object-Storage/Tutorial/shareWithUserManagement"},next:{title:"Mounting S3 Object Storage Files",permalink:"/docs/products/Object-Storage/HowTo/mount"}},p={},u=[],d={toc:u};function m(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generate-access-key-and-secret-key"},"Generate Access Key and Secret Key"),(0,a.kt)("p",null,"When Contabo is provioning the S3 compatible Object Storage S3 credentials, namely ",(0,a.kt)("inlineCode",{parentName:"p"},"access key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secret key"),", are being generated in a secure manner for you. If you wish to regenerate a new ",(0,a.kt)("inlineCode",{parentName:"p"},"secret key")," plese follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login to the ",(0,a.kt)("a",{parentName:"li",href:"https://my.contabo.com/object_storage"},"Contabo Customer Panel")),(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Object Storage")),(0,a.kt)("li",{parentName:"ol"},"(only once) Setup your password for the Object Storage Panel"),(0,a.kt)("li",{parentName:"ol"},"Switch to Object Storag Panel"),(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Account")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Security & Access")),(0,a.kt)("li",{parentName:"ol"},"Scroll to ",(0,a.kt)("inlineCode",{parentName:"li"},"S3 Object Storage Credentials"))),(0,a.kt)("p",null,"There you shoul be able to copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"access key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secret key"),". Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Regenerate Secret")," a new ",(0,a.kt)("inlineCode",{parentName:"p"},"secret key")," is being generated."),(0,a.kt)("p",null,"The follwing screenshot illustrates it.\n",(0,a.kt)("img",{alt:"S3 Credentials",src:r(5087).Z,width:"1249",height:"845"})))}m.isMDXComponent=!0},5087:function(e,t,r){t.Z=r.p+"assets/images/S3-credentials-a833c5b7e8fc8dcef9173da77583479a.png"}}]);