if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const t=e=>i(e,a),r={module:{uri:a},exports:c,require:t};s[a]=Promise.all(n.map((e=>r[e]||t(e)))).then((e=>(l(...e),c)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"canastilla"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/canastilla/css/app.9489de42.css",revision:null},{url:"/canastilla/favicon.png",revision:"fee47b3e90510a4d9b2af6849726163c"},{url:"/canastilla/index.html",revision:"e2e1c582f36e6aa72815db55c66bfb79"},{url:"/canastilla/js/app.5c6b7cd1.js",revision:null},{url:"/canastilla/js/chunk-vendors.bedf4d7b.js",revision:null},{url:"/canastilla/manifest.json",revision:"ff1fde9b346358a6eb2043f2b4dc1fcb"},{url:"/canastilla/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
