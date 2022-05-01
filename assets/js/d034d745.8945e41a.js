"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[5299],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return g}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(a),g=r,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||n;return a?o.createElement(m,i(i({ref:t},l),{},{components:a})):o.createElement(m,i({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<n;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},870:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],c={sidebar_position:2},u="Auto-Scale of Storage Capacity",s={unversionedId:"products/Object-Storage/Tutorial/autoscale",id:"products/Object-Storage/Tutorial/autoscale",title:"Auto-Scale of Storage Capacity",description:"When purchasing Object Storage its capacity needs to be specified during the order process.",source:"@site/docs/products/Object-Storage/Tutorial/autoscale.md",sourceDirName:"products/Object-Storage/Tutorial",slug:"/products/Object-Storage/Tutorial/autoscale",permalink:"/docs/products/Object-Storage/Tutorial/autoscale",editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/Tutorial/autoscale.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"productSidebar",previous:{title:"Create and Fill Buckets in Object Storage",permalink:"/docs/products/Object-Storage/Tutorial/CreateAndFillBucket"},next:{title:"Manual Increase of Storage Capacity",permalink:"/docs/products/Object-Storage/Tutorial/manualscale"}},l={},p=[{value:"Where can I see the Auto-Scale Status of my individual Storage?",id:"where-can-i-see-the-auto-scale-status-of-my-individual-storage",level:2},{value:"How can I edit my Auto-Scale Settings?",id:"how-can-i-edit-my-auto-scale-settings",level:2},{value:"Where can I find more Product and Pricing Information about Auto-Scaling?",id:"where-can-i-find-more-product-and-pricing-information-about-auto-scaling",level:2},{value:"How can I add more space to my Storage without Auto-Scaling?",id:"how-can-i-add-more-space-to-my-storage-without-auto-scaling",level:2}],d={toc:p};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"auto-scale-of-storage-capacity"},"Auto-Scale of Storage Capacity"),(0,n.kt)("p",null,"When purchasing Object Storage its capacity needs to be specified during the order process.\nBy activating the Auto Scaling feature the size of a specific storage increases automatically up to a preselected limit (in TB) as soon as the initially purchased limit is reached."),(0,n.kt)("h2",{id:"where-can-i-see-the-auto-scale-status-of-my-individual-storage"},"Where can I see the Auto-Scale Status of my individual Storage?"),(0,n.kt)("p",null,"In your object storage overview you can find the column 'Auto-Scaling Status' (see image below):"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/products/object-storage/tutorial/autoscaleOverview.png?raw=true",alt:"AutoScale Overview"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the status is 'ON' (green) auto scaling for this specific storage is activated. The current limit can be seen and edited via Auto-Scaling Settings."),(0,n.kt)("li",{parentName:"ul"},"If the status is 'OFF' (red) auto scaling for this specific storage is deactivated.")),(0,n.kt)("h2",{id:"how-can-i-edit-my-auto-scale-settings"},"How can I edit my Auto-Scale Settings?"),(0,n.kt)("p",null,"To activate auto-scaling:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into your Object Storage Panel"),(0,n.kt)("li",{parentName:"ul"},"Open the tab 'Storage Settings' (see also in image above)"),(0,n.kt)("li",{parentName:"ul"},"Select a storage, go to 'more' and click on 'Auto-Scaling Settings'")),(0,n.kt)("p",null,"The following menu opens:"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/products/object-storage/tutorial/autoscaleSettings.png?raw=true",alt:"AutoScale Settings"})),(0,n.kt)("p",null,"The slider on top displays the current state of auto-scale for this storage. By a sliding to the left the feature is deativated, sliding to the right activates it."),(0,n.kt)("p",null,"If the feature is active, you can select the maximum amount to which your object storage will be automatically expanded every month if needed. When the purchased space is at capacity your space will be expanded in steps of 250GB up to your pre-defined limit. The setting needs to be confirmed by selecting 'Save Settings'."),(0,n.kt)("h2",{id:"where-can-i-find-more-product-and-pricing-information-about-auto-scaling"},"Where can I find more Product and Pricing Information about Auto-Scaling?"),(0,n.kt)("p",null,"For general product and pricing information please see ",(0,n.kt)("a",{parentName:"p",href:"https://contabo.com/en/object-storage"},"here"),"."),(0,n.kt)("h2",{id:"how-can-i-add-more-space-to-my-storage-without-auto-scaling"},"How can I add more space to my Storage without Auto-Scaling?"),(0,n.kt)("p",null,"If you want to expand the memory of your storage permanently and immediately please use the 'Add more GB' option in your storage settings instead (see ",(0,n.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tutorial/manualscale"},"here"),".)."))}g.isMDXComponent=!0}}]);