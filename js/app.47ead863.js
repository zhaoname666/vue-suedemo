(function(){"use strict";var e={8485:function(e,n,t){var r=t(9242),o=t(3396);function u(e,n){const t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[(0,o.Wm)(t,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("上传接口")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(t,{to:"/form"},{default:(0,o.w5)((()=>[(0,o.Uk)("表单")])),_:1})]),(0,o.Wm)(r)],64)}var i=t(89);const a={},f=(0,i.Z)(a,[["render",u]]);var c=f,l=t(1419),d=(t(4415),t(2483));const s=[{path:"/about",name:"about",component:()=>Promise.all([t.e(311),t.e(426)]).then(t.bind(t,9426)),children:[]},{path:"/form",name:"form",component:()=>Promise.all([t.e(311),t.e(501)]).then(t.bind(t,1501)),children:[]},{path:"/formTo",name:"formTo",component:()=>t.e(3).then(t.bind(t,8003)),children:[]}],p=(0,d.p7)({history:(0,d.r5)(),routes:s});var m=p;(0,r.ri)(c).use(l.Z).use(m).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,u){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],u=e[l][2];for(var a=!0,f=0;f<r.length;f++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[f])}))?r.splice(f--,1):(a=!1,u<i&&(i=u));if(a){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{3:"636de451",311:"eeb94d9f",426:"069831ec",501:"643707d6"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{3:"fc363fc7",426:"74afa4a8",501:"7665a5fc"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-demo:";t.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var a,f;if(void 0!==u)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+u){a=d;break}}a||(f=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+u),a.src=r),e[r]=[o];var s=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),f&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vue-suedemo/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css";var i=function(t){if(u.onerror=u.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,f=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=a,u.parentNode&&u.parentNode.removeChild(u),o(f)}};return u.onerror=u.onload=i,u.href=n,t?t.parentNode.insertBefore(u,t.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],u=o.getAttribute("data-href");if(u===e||u===n)return o}},r=function(r){return new Promise((function(o,u){var i=t.miniCssF(r),a=t.p+i;if(n(i,a))return o();e(r,a,null,o,u)}))},o={143:0};t.f.miniCss=function(e,n){var t={3:1,426:1,501:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(n),a=new Error,f=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};t.l(i,f,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,i=r[0],a=r[1],f=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(f)var l=f(t)}for(n&&n(r);c<i.length;c++)u=i[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},r=self["webpackChunkvue_demo"]=self["webpackChunkvue_demo"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8485)}));r=t.O(r)})();
//# sourceMappingURL=app.47ead863.js.map