"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[1049],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return n?o.createElement(g,i(i({ref:t},l),{},{components:n})):o.createElement(g,i({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},874:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c="Creating Custom Images",u={unversionedId:"products/Cloud-VPS-and-VDS/Tutorial/creating-custom-images",id:"products/Cloud-VPS-and-VDS/Tutorial/creating-custom-images",title:"Creating Custom Images",description:"While it is possible to create a Custom Image completely from scratch, the following example will build upon an existing Debian cloud image. Most Linux distributions are providing compatible images in the qcow2 format that are ready to be used on a Contabo VPS or VDS.",source:"@site/docs/products/Cloud-VPS-and-VDS/Tutorial/creating-custom-images.md",sourceDirName:"products/Cloud-VPS-and-VDS/Tutorial",slug:"/products/Cloud-VPS-and-VDS/Tutorial/creating-custom-images",permalink:"/docs/products/Cloud-VPS-and-VDS/Tutorial/creating-custom-images",editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Cloud-VPS-and-VDS/Tutorial/creating-custom-images.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"productSidebar",previous:{title:"Using Custom Images",permalink:"/docs/products/Cloud-VPS-and-VDS/Tutorial/custom-images"},next:{title:"Persisting hostname",permalink:"/docs/products/Cloud-VPS-and-VDS/HowTo/hostname"}},l={},m=[],d={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-custom-images"},"Creating Custom Images"),(0,a.kt)("p",null,"While it is possible to create a Custom Image completely from scratch, the following example will build upon an existing Debian cloud image. Most Linux distributions are providing compatible images in the qcow2 format that are ready to be used on a Contabo VPS or VDS."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The following commands are meant to be run on a Linux VPS or VDS. A new and empty instance installed with Debian 11 was used here."))),(0,a.kt)("p",null,"Refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://www.libguestfs.org/virt-customize.1.html"},"libguestfs documentation")," to see all options that are available with the ",(0,a.kt)("inlineCode",{parentName:"p"},"virt-customize")," command. This example is only covering the basic functionality."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Install libguestfs-tools\nsudo apt install -y --no-install-recommends libguestfs-tools\n\n# Create a new directory and cd into it\nmkdir deb11custom\ncd deb11custom\n\n# Download the official Debian 11 cloud image\nwget -O deb11custom.qcow2 https://cloud.debian.org/images/cloud/bullseye/latest/debian-11-genericcloud-amd64.qcow2 \n\n# Optional: Resize the image from its default 2 GB to 10 GB\nqemu-img resize deb11custom.qcow2 10G\n\n# Customize the image\n# Note: growpart and resize2fs are only required if the image was resized\nvirt-customize -a deb11custom.qcow2 \\\n  --run-command 'growpart /dev/sda 1' \\\n  --run-command 'resize2fs /dev/sda1' \\\n  --update \\\n  --install ca-certificates,git,htop,rsync,vim\n\n# Spin up a temporary HTTP server to serve the image, CTRL+C to stop\npython3 -m http.server\n")),(0,a.kt)("p",null,"Your Custom Image is now ready to be downloaded to your Contabo Custom Image repository. You may either use the ",(0,a.kt)("a",{parentName:"p",href:"https://my.contabo.com/"},"Customer Control Panel")," or for example our CLI tool on your local machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cntb create image --name 'Debian 11 Custom' \\\n  --description 'Includes common packages' \\\n  --url http://<SERVER_IPV4>:8000/deb11custom.qcow2 \\\n  --osType Linux \\\n  --version 11\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVER_IPV4")," with the public IPv4 address of the instance you built the image on. Don't forget to stop the temporary HTTP server once the image has finished downloading."))}p.isMDXComponent=!0}}]);