"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[6356],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),b=i,d=p["".concat(l,".").concat(b)]||p[b]||h[b]||a;return r?o.createElement(d,n(n({ref:t},u),{},{components:r})):o.createElement(d,n({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,n[1]=c;for(var s=2;s<a;s++)n[s]=r[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},784:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return h}});var o=r(7462),i=r(3366),a=(r(7294),r(3905)),n=["components"],c={sidebar_position:4},l="Share Object Storage with public",s={unversionedId:"products/Object-Storage/Tutorial/shareWithPublic",id:"products/Object-Storage/Tutorial/shareWithPublic",title:"Share Object Storage with public",description:"Users have the opportunity to share their object storage with the public (see this section) or to selected users (see here).",source:"@site/docs/products/Object-Storage/Tutorial/shareWithPublic.md",sourceDirName:"products/Object-Storage/Tutorial",slug:"/products/Object-Storage/Tutorial/shareWithPublic",permalink:"/docs/products/Object-Storage/Tutorial/shareWithPublic",editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/Tutorial/shareWithPublic.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"productSidebar",previous:{title:"Manual Increase of Storage Capacity",permalink:"/docs/products/Object-Storage/Tutorial/manualscale"},next:{title:"Share Object Storage with selected users",permalink:"/docs/products/Object-Storage/Tutorial/shareWithUserManagement"}},u={},h=[{value:"How do I share Storage with the public?",id:"how-do-i-share-storage-with-the-public",level:2},{value:"How do I share a Bucket with the public?",id:"how-do-i-share-a-bucket-with-the-public",level:3},{value:"How do I share a File / Folder with the public?",id:"how-do-i-share-a-file--folder-with-the-public",level:3},{value:"Peculiarity for Sharing Folders",id:"peculiarity-for-sharing-folders",level:3}],p={toc:h};function b(e){var t=e.components,c=(0,i.Z)(e,n);return(0,a.kt)("wrapper",(0,o.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"share-object-storage-with-public"},"Share Object Storage with public"),(0,a.kt)("p",null,"Users have the opportunity to share their object storage with the public (see this section) or to selected users (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tutorial/shareWithUserManagement"},"here"),")."),(0,a.kt)("h2",{id:"how-do-i-share-storage-with-the-public"},"How do I share Storage with the public?"),(0,a.kt)("p",null,"Users can give access to buckets, files and folders to the public.\nFor this, the customer creates a link to the file or folder in their storage to distribute and share it with the public."),(0,a.kt)("h3",{id:"how-do-i-share-a-bucket-with-the-public"},"How do I share a Bucket with the public?"),(0,a.kt)("p",null,"To make it accessible to the public a link to a selected bucket can be created."),(0,a.kt)("p",null,"For this, the following steps need to be followed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into your Object Storage Panel"),(0,a.kt)("li",{parentName:"ul"},"Open the Bucket Overview (see image below)",(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/products/object-storage/tutorial/bucketoverview.png?raw=true",alt:"Bucket Overview"}))),(0,a.kt)("li",{parentName:"ul"},"Click on the 'Public Sharing' icon ",(0,a.kt)("img",{alt:"xmlexample",src:r(239).Z,width:"30",height:"36"})," to open the menu for setting properties for public sharing:",(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/products/object-storage/tutorial/sharepublic.png?raw=true",alt:"Public Sharing"})))),(0,a.kt)("p",null,"The slider on  top displays the currently selected public access to this storage.  By sliding to the left the feature is deativated, sliding to the right activates it."),(0,a.kt)("p",null,"If the access is active, a public link to the bucket is automatically created and appears below.\nThis link can be distributed and shared with the public (after confirming the settings by 'Save').\nAll public users can then access the bucket via this link."),(0,a.kt)("p",null,"The status of a bucket's public access can also be seen in bucket overview (see first image above)."),(0,a.kt)("h3",{id:"how-do-i-share-a-file--folder-with-the-public"},"How do I share a File / Folder with the public?"),(0,a.kt)("p",null,"To share only a specific file or folder from the bucket with the public the following steps need to be taken:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open detailed view of the bucket that contains the file / folder you want to share (see image below) via clicking on its name in the storage overview",(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/products/object-storage/tutorial/share3.png?raw=true",alt:"Bucket detail view"}))),(0,a.kt)("li",{parentName:"ul"},"Click on 'More' and then 'Public sharing' to open the menu shown under \"How do I share a Bucket witht the public?\"")),(0,a.kt)("p",null,"The status of a bucket's public access also appears in the bucket overview (see image above)."),(0,a.kt)("h3",{id:"peculiarity-for-sharing-folders"},"Peculiarity for Sharing Folders"),(0,a.kt)("p",null,"Note: Browsers do not support the option to show the content of a folder. Therefore, a XML message appears."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/products/object-storage/tutorial/xmlfolderexample.png?raw=true",alt:" "})),(0,a.kt)("p",null,"You can open the public folder by using corresponding ",(0,a.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tools/compatibility"},"Tools")," or via the Contabo Object Storage Panel."))}b.isMDXComponent=!0},239:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAMAAACpD3pbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURf////39/fj4+PX29vX19mtyejI8RtDS1YuQlq6xtkxUXQAAAJEnZbAAAAAMdFJOU///////////////ABLfzs4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAACcSURBVDhPzZLRDoQgDAQbY4r6/x9su13BouiTuRtfFke6xCA/Zr55KvOAZ0s9cXUFmvkG6JfpzEQ2VS3MTtdtVpeI0BEPiustMnTyPlqV73q7WO3Uyk7ajZWmUU2vGIrYgIZHZ0l7T7sFu3ngCnQchd3IB9DMjn2zMjrQqdA76hEv1q6J6/FPfdPWn4b3vvFsQ39018KONO2/IrID5B0LOOAkq34AAAAASUVORK5CYII="}}]);