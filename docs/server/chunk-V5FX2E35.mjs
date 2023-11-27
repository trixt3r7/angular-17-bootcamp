import './polyfills.server.mjs';
import{$ as j,A as k3,B as q,Ba as q3,C as k2,D as Z2,E as z,Ea as r1,F as M,Fa as j3,G as A3,H as V2,I as m2,J as F1,K as L,L as A2,M as T1,N as _1,O as D3,P as P3,Q as f,R as l,S as b,T as F3,U as T3,V as F,W as D2,X as _3,Y as E3,Z as m,_ as c1,a as x3,aa as a1,b as Y2,ba as D,c as A1,ca as B3,d as w2,da as E1,e as H2,ea as B1,f as P,g as b3,h as X2,i as y3,j as N3,k as S3,l as D1,la as R3,m as l2,ma as I3,n as K2,na as R1,o as f2,oa as O3,p as Z,q as c2,qa as B,r as z2,ra as e1,s as k,sa as U3,t as a2,ta as i1,u as A,ua as G3,v as Q2,w as e2,x as J2,xa as W3,y as P1,z as w3}from"./chunk-S7URGKNR.mjs";import{a as J,b as d2}from"./chunk-KRLCULJA.mjs";var $3=(()=>{let c=class c{constructor(){this.title="angular-17-bootcamp"}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=k({type:c,selectors:[["app-root"]],standalone:!0,features:[D],decls:36,vars:0,consts:[[1,"d-flex","flex-row"],[1,"p-3","me-5","mt-2"],["src","../assets/angular-bootcamp-logo.svg","alt","","width","200px","height","52px"],[1,"nav","flex-column","mt-3"],[1,"nav-item"],["routerLink","/home",1,"nav-link"],[1,"nav-category"],["routerLink","/pipes",1,"nav-link"],["routerLink","/directives",1,"nav-link"],["routerLink","/signals",1,"nav-link"],[1,"container","mt-4"]],template:function(r,s){r&1&&(f(0,"div",0)(1,"div",1),b(2,"img",2),f(3,"ul",3)(4,"li",4)(5,"a",5),m(6,"Home"),l()()(),f(7,"ul",3)(8,"li")(9,"span",6),m(10,"GUIDES"),l()(),f(11,"li",4)(12,"a",7),m(13,"Pipes"),l()(),f(14,"li",4)(15,"a",8),m(16,"Directives"),l()(),f(17,"li",4)(18,"a",9),m(19,"Signals"),l()()(),f(20,"ul",3)(21,"li")(22,"span",6),m(23,"BEST PRACTICES"),l()(),f(24,"li",4)(25,"a",5),m(26,"OnPush"),l()()(),f(27,"ul",3)(28,"li")(29,"span",6),m(30,"API REFERENCES"),l()(),f(31,"li",4)(32,"a",5),m(33,"TBD"),l()()()(),f(34,"div",10),b(35,"router-outlet"),l()())},dependencies:[B,q3,r1]});let a=c;return a})();var Y3={prefix:"fas",iconName:"vial",icon:[512,512,[129514],"f492","M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5V416c0 53 43 96 96 96h5.5c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256L352 109.3 402.7 160l-96 96H205.3z"]};var X3={prefix:"fas",iconName:"circle-arrow-right",icon:[512,512,["arrow-circle-right"],"f0a9","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"]};var K3={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Q3={prefix:"fas",iconName:"signs-post",icon:[512,512,["map-signs"],"f277","M224 32H64C46.3 32 32 46.3 32 64v64c0 17.7 14.3 32 32 32H441.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 256c0-17.7-14.3-32-32-32H288V192H224v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32V256zM288 480V384H224v96c0 17.7 14.3 32 32 32s32-14.3 32-32z"]};var J3={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]};var Z3={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]};var M2=(()=>{let c=class c{};c.camera=J3,c.copy=Z3,c.vial=Y3,c.arrowRightCircle=X3,c.arrowRight=K3,c.signsPost=Q3;let a=c;return a})();function c4(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),i.push.apply(i,e)}return i}function u(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?c4(Object(i),!0).forEach(function(e){y(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):c4(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function d1(a){"@babel/helpers - typeof";return d1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},d1(a)}function T6(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function a4(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function _6(a,c,i){return c&&a4(a.prototype,c),i&&a4(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function y(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function a3(a,c){return B6(a)||I6(a,c)||y4(a,c)||U6()}function O2(a){return E6(a)||R6(a)||y4(a)||O6()}function E6(a){if(Array.isArray(a))return W1(a)}function B6(a){if(Array.isArray(a))return a}function R6(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function I6(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],r=!0,s=!1,n,t;try{for(i=i.call(a);!(r=(n=i.next()).done)&&(e.push(n.value),!(c&&e.length===c));r=!0);}catch(o){s=!0,t=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(s)throw t}}return e}}function y4(a,c){if(a){if(typeof a=="string")return W1(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return W1(a,c)}}function W1(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function O6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var e4=function(){},e3={},N4={},S4=null,w4={mark:e4,measure:e4};try{typeof window<"u"&&(e3=window),typeof document<"u"&&(N4=document),typeof MutationObserver<"u"&&(S4=MutationObserver),typeof performance<"u"&&(w4=performance)}catch{}var G6=e3.navigator||{},i4=G6.userAgent,r4=i4===void 0?"":i4,r2=e3,g=N4,s4=S4,s1=w4,g5=!!r2.document,K=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",k4=~r4.indexOf("MSIE")||~r4.indexOf("Trident/"),n1,t1,o1,l1,f1,$="___FONT_AWESOME___",q1=16,A4="fa",D4="svg-inline--fa",v2="data-fa-i2svg",j1="data-fa-pseudo-element",W6="data-fa-pseudo-element-pending",i3="data-prefix",r3="data-icon",n4="fontawesome-i2svg",q6="async",j6=["HTML","HEAD","STYLE","SCRIPT"],P4=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),C="classic",x="sharp",s3=[C,x];function U2(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[C]}})}var _2=U2((n1={},y(n1,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),y(n1,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),n1)),E2=U2((t1={},y(t1,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(t1,x,{solid:"fass",regular:"fasr",light:"fasl"}),t1)),B2=U2((o1={},y(o1,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(o1,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),o1)),$6=U2((l1={},y(l1,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(l1,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),l1)),Y6=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,F4="fa-layers-text",X6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,K6=U2((f1={},y(f1,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(f1,x,{900:"fass",400:"fasr",300:"fasl"}),f1)),T4=[1,2,3,4,5,6,7,8,9,10],Q6=T4.concat([11,12,13,14,15,16,17,18,19,20]),J6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],h2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R2=new Set;Object.keys(E2[C]).map(R2.add.bind(R2));Object.keys(E2[x]).map(R2.add.bind(R2));var Z6=[].concat(s3,O2(R2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",h2.GROUP,h2.SWAP_OPACITY,h2.PRIMARY,h2.SECONDARY]).concat(T4.map(function(a){return"".concat(a,"x")})).concat(Q6.map(function(a){return"w-".concat(a)})),F2=r2.FontAwesomeConfig||{};function c0(a){var c=g.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function a0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}g&&typeof g.querySelector=="function"&&(t4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],t4.forEach(function(a){var c=a3(a,2),i=c[0],e=c[1],r=a0(c0(i));r!=null&&(F2[e]=r)}));var t4,_4={styleDefault:"solid",familyDefault:"classic",cssPrefix:A4,replacementClass:D4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};F2.familyPrefix&&(F2.cssPrefix=F2.familyPrefix);var x2=u(u({},_4),F2);x2.autoReplaceSvg||(x2.observeMutations=!1);var p={};Object.keys(_4).forEach(function(a){Object.defineProperty(p,a,{enumerable:!0,set:function(i){x2[a]=i,T2.forEach(function(e){return e(p)})},get:function(){return x2[a]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(c){x2.cssPrefix=c,T2.forEach(function(i){return i(p)})},get:function(){return x2.cssPrefix}});r2.FontAwesomeConfig=p;var T2=[];function e0(a){return T2.push(a),function(){T2.splice(T2.indexOf(a),1)}}var i2=q1,W={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function i0(a){if(!(!a||!K)){var c=g.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=g.head.childNodes,e=null,r=i.length-1;r>-1;r--){var s=i[r],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return g.head.insertBefore(c,e),a}}var r0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function I2(){for(var a=12,c="";a-- >0;)c+=r0[Math.random()*62|0];return c}function b2(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function n3(a){return a.classList?b2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function E4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s0(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(E4(a[i]),'" ')},"").trim()}function V1(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function t3(a){return a.size!==W.size||a.x!==W.x||a.y!==W.y||a.rotate!==W.rotate||a.flipX||a.flipY}function n0(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(s," ").concat(n," ").concat(t)},v={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:v}}function t0(a){var c=a.transform,i=a.width,e=i===void 0?q1:i,r=a.height,s=r===void 0?q1:r,n=a.startCentered,t=n===void 0?!1:n,o="";return t&&k4?o+="translate(".concat(c.x/i2-e/2,"em, ").concat(c.y/i2-s/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/i2,"em), calc(-50% + ").concat(c.y/i2,"em)) "):o+="translate(".concat(c.x/i2,"em, ").concat(c.y/i2,"em) "),o+="scale(".concat(c.size/i2*(c.flipX?-1:1),", ").concat(c.size/i2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var o0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function B4(){var a=A4,c=D4,i=p.cssPrefix,e=p.replacementClass,r=o0;if(i!==a||e!==c){var s=new RegExp("\\.".concat(a,"\\-"),"g"),n=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");r=r.replace(s,".".concat(i,"-")).replace(n,"--".concat(i,"-")).replace(t,".".concat(e))}return r}var o4=!1;function I1(){p.autoAddCss&&!o4&&(i0(B4()),o4=!0)}var l0={mixout:function(){return{dom:{css:B4,insertCss:I1}}},hooks:function(){return{beforeDOMElementCreation:function(){I1()},beforeI2svg:function(){I1()}}}},Y=r2||{};Y[$]||(Y[$]={});Y[$].styles||(Y[$].styles={});Y[$].hooks||(Y[$].hooks={});Y[$].shims||(Y[$].shims=[]);var O=Y[$],R4=[],f0=function a(){g.removeEventListener("DOMContentLoaded",a),H1=1,R4.map(function(c){return c()})},H1=!1;K&&(H1=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),H1||g.addEventListener("DOMContentLoaded",f0));function m0(a){K&&(H1?setTimeout(a,0):R4.push(a))}function G2(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,r=a.children,s=r===void 0?[]:r;return typeof a=="string"?E4(a):"<".concat(c," ").concat(s0(e),">").concat(s.map(G2).join(""),"</").concat(c,">")}function l4(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var h0=function(c,i){return function(e,r,s,n){return c.call(i,e,r,s,n)}},O1=function(c,i,e,r){var s=Object.keys(c),n=s.length,t=r!==void 0?h0(i,r):i,o,v,h;for(e===void 0?(o=1,h=c[s[0]]):(o=0,h=e);o<n;o++)v=s[o],h=t(h,c[v],v,c);return h};function u0(a){for(var c=[],i=0,e=a.length;i<e;){var r=a.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var s=a.charCodeAt(i++);(s&64512)==56320?c.push(((r&1023)<<10)+(s&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function $1(a){var c=u0(a);return c.length===1?c[0].toString(16):null}function v0(a,c){var i=a.length,e=a.charCodeAt(c),r;return e>=55296&&e<=56319&&i>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function f4(a){return Object.keys(a).reduce(function(c,i){var e=a[i],r=!!e.icon;return r?c[e.iconName]=e.icon:c[i]=e,c},{})}function Y1(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,s=f4(c);typeof O.hooks.addPack=="function"&&!r?O.hooks.addPack(a,f4(c)):O.styles[a]=u(u({},O.styles[a]||{}),s),a==="fas"&&Y1("fa",c)}var m1,h1,u1,C2=O.styles,p0=O.shims,d0=(m1={},y(m1,C,Object.values(B2[C])),y(m1,x,Object.values(B2[x])),m1),o3=null,I4={},O4={},U4={},G4={},W4={},H0=(h1={},y(h1,C,Object.keys(_2[C])),y(h1,x,Object.keys(_2[x])),h1);function z0(a){return~Z6.indexOf(a)}function V0(a,c){var i=c.split("-"),e=i[0],r=i.slice(1).join("-");return e===a&&r!==""&&!z0(r)?r:null}var q4=function(){var c=function(s){return O1(C2,function(n,t,o){return n[o]=O1(t,s,{}),n},{})};I4=c(function(r,s,n){if(s[3]&&(r[s[3]]=n),s[2]){var t=s[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=n})}return r}),O4=c(function(r,s,n){if(r[n]=n,s[2]){var t=s[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=n})}return r}),W4=c(function(r,s,n){var t=s[2];return r[n]=n,t.forEach(function(o){r[o]=n}),r});var i="far"in C2||p.autoFetchSvg,e=O1(p0,function(r,s){var n=s[0],t=s[1],o=s[2];return t==="far"&&!i&&(t="fas"),typeof n=="string"&&(r.names[n]={prefix:t,iconName:o}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});U4=e.names,G4=e.unicodes,o3=M1(p.styleDefault,{family:p.familyDefault})};e0(function(a){o3=M1(a.styleDefault,{family:p.familyDefault})});q4();function l3(a,c){return(I4[a]||{})[c]}function M0(a,c){return(O4[a]||{})[c]}function u2(a,c){return(W4[a]||{})[c]}function j4(a){return U4[a]||{prefix:null,iconName:null}}function C0(a){var c=G4[a],i=l3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function s2(){return o3}var f3=function(){return{prefix:null,iconName:null,rest:[]}};function M1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?C:i,r=_2[e][a],s=E2[e][a]||E2[e][r],n=a in O.styles?a:null;return s||n||null}var m4=(u1={},y(u1,C,Object.keys(B2[C])),y(u1,x,Object.keys(B2[x])),u1);function C1(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,s=(c={},y(c,C,"".concat(p.cssPrefix,"-").concat(C)),y(c,x,"".concat(p.cssPrefix,"-").concat(x)),c),n=null,t=C;(a.includes(s[C])||a.some(function(v){return m4[C].includes(v)}))&&(t=C),(a.includes(s[x])||a.some(function(v){return m4[x].includes(v)}))&&(t=x);var o=a.reduce(function(v,h){var d=V0(p.cssPrefix,h);if(C2[h]?(h=d0[t].includes(h)?$6[t][h]:h,n=h,v.prefix=h):H0[t].indexOf(h)>-1?(n=h,v.prefix=M1(h,{family:t})):d?v.iconName=d:h!==p.replacementClass&&h!==s[C]&&h!==s[x]&&v.rest.push(h),!r&&v.prefix&&v.iconName){var H=n==="fa"?j4(v.iconName):{},V=u2(v.prefix,v.iconName);H.prefix&&(n=null),v.iconName=H.iconName||V||v.iconName,v.prefix=H.prefix||v.prefix,v.prefix==="far"&&!C2.far&&C2.fas&&!p.autoFetchSvg&&(v.prefix="fas")}return v},f3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===x&&(C2.fass||p.autoFetchSvg)&&(o.prefix="fass",o.iconName=u2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=s2()||"fas"),o}var g0=function(){function a(){T6(this,a),this.definitions={}}return _6(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){i.definitions[t]=u(u({},i.definitions[t]||{}),n[t]),Y1(t,n[t]);var o=B2[C][t];o&&Y1(o,n[t]),q4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var n=r[s],t=n.prefix,o=n.iconName,v=n.icon,h=v[2];i[t]||(i[t]={}),h.length>0&&h.forEach(function(d){typeof d=="string"&&(i[t][d]=v)}),i[t][o]=v}),i}}]),a}(),h4=[],g2={},L2={},L0=Object.keys(L2);function x0(a,c){var i=c.mixoutsTo;return h4=a,g2={},Object.keys(L2).forEach(function(e){L0.indexOf(e)===-1&&delete L2[e]}),h4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(i[n]=r[n]),d1(r[n])==="object"&&Object.keys(r[n]).forEach(function(t){i[n]||(i[n]={}),i[n][t]=r[n][t]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){g2[n]||(g2[n]=[]),g2[n].push(s[n])})}e.provides&&e.provides(L2)}),i}function X1(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var s=g2[a]||[];return s.forEach(function(n){c=n.apply(null,[c].concat(e))}),c}function p2(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var r=g2[a]||[];r.forEach(function(s){s.apply(null,i)})}function X(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return L2[a]?L2[a].apply(null,c):void 0}function K1(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||s2();if(c)return c=u2(i,c)||c,l4($4.definitions,i,c)||l4(O.styles,i,c)}var $4=new g0,b0=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,p2("noAuto")},y0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K?(p2("beforeI2svg",c),X("pseudoElements2svg",c),X("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,m0(function(){S0({autoReplaceSvgRoot:i}),p2("watch",c)})}},N0={icon:function(c){if(c===null)return null;if(d1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:u2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=M1(c[0]);return{prefix:e,iconName:u2(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(p.cssPrefix,"-"))>-1||c.match(Y6))){var r=C1(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||s2(),iconName:u2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var s=s2();return{prefix:s,iconName:u2(s,c)||c}}}},_={noAuto:b0,config:p,dom:y0,parse:N0,library:$4,findIconDefinition:K1,toHtml:G2},S0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?g:i;(Object.keys(O.styles).length>0||p.autoFetchSvg)&&K&&p.autoReplaceSvg&&_.dom.i2svg({node:e})};function g1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return G2(e)})}}),Object.defineProperty(a,"node",{get:function(){if(K){var e=g.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function w0(a){var c=a.children,i=a.main,e=a.mask,r=a.attributes,s=a.styles,n=a.transform;if(t3(n)&&i.found&&!e.found){var t=i.width,o=i.height,v={x:t/o/2,y:.5};r.style=V1(u(u({},s),{},{"transform-origin":"".concat(v.x+n.x/16,"em ").concat(v.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function k0(a){var c=a.prefix,i=a.iconName,e=a.children,r=a.attributes,s=a.symbol,n=s===!0?"".concat(c,"-").concat(p.cssPrefix,"-").concat(i):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:n}),children:e}]}]}function m3(a){var c=a.icons,i=c.main,e=c.mask,r=a.prefix,s=a.iconName,n=a.transform,t=a.symbol,o=a.title,v=a.maskId,h=a.titleId,d=a.extra,H=a.watchable,V=H===void 0?!1:H,S=e.found?e:i,E=S.width,I=S.height,U=r==="fak",N=[p.replacementClass,s?"".concat(p.cssPrefix,"-").concat(s):""].filter(function(Q){return d.classes.indexOf(Q)===-1}).filter(function(Q){return Q!==""||!!Q}).concat(d.classes).join(" "),w={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":s,class:N,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(I)})},G=U&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/I*16*.0625,"em")}:{};V&&(w.attributes[v2]=""),o&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(h||I2())},children:[o]}),delete w.attributes.title);var T=u(u({},w),{},{prefix:r,iconName:s,main:i,mask:e,maskId:v,transform:n,symbol:t,styles:u(u({},G),d.styles)}),t2=e.found&&i.found?X("generateAbstractMask",T)||{children:[],attributes:{}}:X("generateAbstractIcon",T)||{children:[],attributes:{}},o2=t2.children,k1=t2.attributes;return T.children=o2,T.attributes=k1,t?k0(T):w0(T)}function u4(a){var c=a.content,i=a.width,e=a.height,r=a.transform,s=a.title,n=a.extra,t=a.watchable,o=t===void 0?!1:t,v=u(u(u({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});o&&(v[v2]="");var h=u({},n.styles);t3(r)&&(h.transform=t0({transform:r,startCentered:!0,width:i,height:e}),h["-webkit-transform"]=h.transform);var d=V1(h);d.length>0&&(v.style=d);var H=[];return H.push({tag:"span",attributes:v,children:[c]}),s&&H.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),H}function A0(a){var c=a.content,i=a.title,e=a.extra,r=u(u(u({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),s=V1(e.styles);s.length>0&&(r.style=s);var n=[];return n.push({tag:"span",attributes:r,children:[c]}),i&&n.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),n}var U1=O.styles;function Q1(a){var c=a[0],i=a[1],e=a.slice(4),r=a3(e,1),s=r[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(h2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(h2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(h2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:i,icon:n}}var D0={found:!1,width:512,height:512};function P0(a,c){!P4&&!p.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function J1(a,c){var i=c;return c==="fa"&&p.styleDefault!==null&&(c=s2()),new Promise(function(e,r){var s={found:!1,width:512,height:512,icon:X("missingIconAbstract")||{}};if(i==="fa"){var n=j4(a)||{};a=n.iconName||a,c=n.prefix||c}if(a&&c&&U1[c]&&U1[c][a]){var t=U1[c][a];return e(Q1(t))}P0(a,c),e(u(u({},D0),{},{icon:p.showMissingIcons&&a?X("missingIconAbstract")||{}:{}}))})}var v4=function(){},Z1=p.measurePerformance&&s1&&s1.mark&&s1.measure?s1:{mark:v4,measure:v4},P2='FA "6.4.2"',F0=function(c){return Z1.mark("".concat(P2," ").concat(c," begins")),function(){return Y4(c)}},Y4=function(c){Z1.mark("".concat(P2," ").concat(c," ends")),Z1.measure("".concat(P2," ").concat(c),"".concat(P2," ").concat(c," begins"),"".concat(P2," ").concat(c," ends"))},h3={begin:F0,end:Y4},v1=function(){};function p4(a){var c=a.getAttribute?a.getAttribute(v2):null;return typeof c=="string"}function T0(a){var c=a.getAttribute?a.getAttribute(i3):null,i=a.getAttribute?a.getAttribute(r3):null;return c&&i}function _0(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(p.replacementClass)}function E0(){if(p.autoReplaceSvg===!0)return p1.replace;var a=p1[p.autoReplaceSvg];return a||p1.replace}function B0(a){return g.createElementNS("http://www.w3.org/2000/svg",a)}function R0(a){return g.createElement(a)}function X4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?B0:R0:i;if(typeof a=="string")return g.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(n){r.setAttribute(n,a.attributes[n])});var s=a.children||[];return s.forEach(function(n){r.appendChild(X4(n,{ceFn:e}))}),r}function I0(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var p1={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore(X4(r),i)}),i.getAttribute(v2)===null&&p.keepOriginalSource){var e=g.createComment(I0(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~n3(i).indexOf(p.replacementClass))return p1.replace(c);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(t,o){return o===p.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(t){return G2(t)}).join(`
`);i.setAttribute(v2,""),i.innerHTML=n}};function d4(a){a()}function K4(a,c){var i=typeof c=="function"?c:v1;if(a.length===0)i();else{var e=d4;p.mutateApproach===q6&&(e=r2.requestAnimationFrame||d4),e(function(){var r=E0(),s=h3.begin("mutate");a.map(r),s(),i()})}}var u3=!1;function Q4(){u3=!0}function c3(){u3=!1}var z1=null;function H4(a){if(s4&&p.observeMutations){var c=a.treeCallback,i=c===void 0?v1:c,e=a.nodeCallback,r=e===void 0?v1:e,s=a.pseudoElementsCallback,n=s===void 0?v1:s,t=a.observeMutationsRoot,o=t===void 0?g:t;z1=new s4(function(v){if(!u3){var h=s2();b2(v).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!p4(d.addedNodes[0])&&(p.searchPseudoElements&&n(d.target),i(d.target)),d.type==="attributes"&&d.target.parentNode&&p.searchPseudoElements&&n(d.target.parentNode),d.type==="attributes"&&p4(d.target)&&~J6.indexOf(d.attributeName))if(d.attributeName==="class"&&T0(d.target)){var H=C1(n3(d.target)),V=H.prefix,S=H.iconName;d.target.setAttribute(i3,V||h),S&&d.target.setAttribute(r3,S)}else _0(d.target)&&r(d.target)})}}),K&&z1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function O0(){z1&&z1.disconnect()}function U0(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,r){var s=r.split(":"),n=s[0],t=s.slice(1);return n&&t.length>0&&(e[n]=t.join(":").trim()),e},{})),i}function G0(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=C1(n3(a));return r.prefix||(r.prefix=s2()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=M0(r.prefix,a.innerText)||l3(r.prefix,$1(a.innerText))),!r.iconName&&p.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function W0(a){var c=b2(a.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return p.autoA11y&&(i?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(e||I2()):(c["aria-hidden"]="true",c.focusable="false")),c}function q0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:W,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function z4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=G0(a),e=i.iconName,r=i.prefix,s=i.rest,n=W0(a),t=X1("parseNodeAttributes",{},a),o=c.styleParser?U0(a):[];return u({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:W,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:n}},t)}var j0=O.styles;function J4(a){var c=p.autoReplaceSvg==="nest"?z4(a,{styleParser:!1}):z4(a);return~c.extra.classes.indexOf(F4)?X("generateLayersText",a,c):X("generateSvgReplacementMutation",a,c)}var n2=new Set;s3.map(function(a){n2.add("fa-".concat(a))});Object.keys(_2[C]).map(n2.add.bind(n2));Object.keys(_2[x]).map(n2.add.bind(n2));n2=O2(n2);function V4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K)return Promise.resolve();var i=g.documentElement.classList,e=function(d){return i.add("".concat(n4,"-").concat(d))},r=function(d){return i.remove("".concat(n4,"-").concat(d))},s=p.autoFetchSvg?n2:s3.map(function(h){return"fa-".concat(h)}).concat(Object.keys(j0));s.includes("fa")||s.push("fa");var n=[".".concat(F4,":not([").concat(v2,"])")].concat(s.map(function(h){return".".concat(h,":not([").concat(v2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=b2(a.querySelectorAll(n))}catch{}if(t.length>0)e("pending"),r("complete");else return Promise.resolve();var o=h3.begin("onTree"),v=t.reduce(function(h,d){try{var H=J4(d);H&&h.push(H)}catch(V){P4||V.name==="MissingIcon"&&console.error(V)}return h},[]);return new Promise(function(h,d){Promise.all(v).then(function(H){K4(H,function(){e("active"),e("complete"),r("pending"),typeof c=="function"&&c(),o(),h()})}).catch(function(H){o(),d(H)})})}function $0(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;J4(a).then(function(i){i&&K4([i],c)})}function Y0(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:K1(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:K1(r||{})),a(e,u(u({},i),{},{mask:r}))}}var X0=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?W:e,s=i.symbol,n=s===void 0?!1:s,t=i.mask,o=t===void 0?null:t,v=i.maskId,h=v===void 0?null:v,d=i.title,H=d===void 0?null:d,V=i.titleId,S=V===void 0?null:V,E=i.classes,I=E===void 0?[]:E,U=i.attributes,N=U===void 0?{}:U,w=i.styles,G=w===void 0?{}:w;if(c){var T=c.prefix,t2=c.iconName,o2=c.icon;return g1(u({type:"icon"},c),function(){return p2("beforeDOMElementCreation",{iconDefinition:c,params:i}),p.autoA11y&&(H?N["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(S||I2()):(N["aria-hidden"]="true",N.focusable="false")),m3({icons:{main:Q1(o2),mask:o?Q1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:t2,transform:u(u({},W),r),symbol:n,title:H,maskId:h,titleId:S,extra:{attributes:N,styles:G,classes:I}})})}},K0={mixout:function(){return{icon:Y0(X0)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=V4,i.nodeCallback=$0,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,r=e===void 0?g:e,s=i.callback,n=s===void 0?function(){}:s;return V4(r,n)},c.generateSvgReplacementMutation=function(i,e){var r=e.iconName,s=e.title,n=e.titleId,t=e.prefix,o=e.transform,v=e.symbol,h=e.mask,d=e.maskId,H=e.extra;return new Promise(function(V,S){Promise.all([J1(r,t),h.iconName?J1(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var I=a3(E,2),U=I[0],N=I[1];V([i,m3({icons:{main:U,mask:N},prefix:t,iconName:r,transform:o,symbol:v,maskId:d,title:s,titleId:n,extra:H,watchable:!0})])}).catch(S)})},c.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.transform,t=i.styles,o=V1(t);o.length>0&&(r.style=o);var v;return t3(n)&&(v=X("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(v||s.icon),{children:e,attributes:r}}}},Q0={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return g1({type:"layer"},function(){p2("beforeDOMElementCreation",{assembler:i,params:e});var n=[];return i(function(t){Array.isArray(t)?t.map(function(o){n=n.concat(o.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(O2(s)).join(" ")},children:n}]})}}}},J0={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,n=e.classes,t=n===void 0?[]:n,o=e.attributes,v=o===void 0?{}:o,h=e.styles,d=h===void 0?{}:h;return g1({type:"counter",content:i},function(){return p2("beforeDOMElementCreation",{content:i,params:e}),A0({content:i.toString(),title:s,extra:{attributes:v,styles:d,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(O2(t))}})})}}}},Z0={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?W:r,n=e.title,t=n===void 0?null:n,o=e.classes,v=o===void 0?[]:o,h=e.attributes,d=h===void 0?{}:h,H=e.styles,V=H===void 0?{}:H;return g1({type:"text",content:i},function(){return p2("beforeDOMElementCreation",{content:i,params:e}),u4({content:i,transform:u(u({},W),s),title:t,extra:{attributes:d,styles:V,classes:["".concat(p.cssPrefix,"-layers-text")].concat(O2(v))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var r=e.title,s=e.transform,n=e.extra,t=null,o=null;if(k4){var v=parseInt(getComputedStyle(i).fontSize,10),h=i.getBoundingClientRect();t=h.width/v,o=h.height/v}return p.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([i,u4({content:i.innerHTML,width:t,height:o,transform:s,title:r,extra:n,watchable:!0})])}}},c8=new RegExp('"',"ug"),M4=[1105920,1112319];function a8(a){var c=a.replace(c8,""),i=v0(c,0),e=i>=M4[0]&&i<=M4[1],r=c.length===2?c[0]===c[1]:!1;return{value:$1(r?c[0]:c),isSecondary:e||r}}function C4(a,c){var i="".concat(W6).concat(c.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(i)!==null)return e();var s=b2(a.children),n=s.filter(function(o2){return o2.getAttribute(j1)===c})[0],t=r2.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(X6),v=t.getPropertyValue("font-weight"),h=t.getPropertyValue("content");if(n&&!o)return a.removeChild(n),e();if(o&&h!=="none"&&h!==""){var d=t.getPropertyValue("content"),H=~["Sharp"].indexOf(o[2])?x:C,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?E2[H][o[2].toLowerCase()]:K6[H][v],S=a8(d),E=S.value,I=S.isSecondary,U=o[0].startsWith("FontAwesome"),N=l3(V,E),w=N;if(U){var G=C0(E);G.iconName&&G.prefix&&(N=G.iconName,V=G.prefix)}if(N&&!I&&(!n||n.getAttribute(i3)!==V||n.getAttribute(r3)!==w)){a.setAttribute(i,w),n&&a.removeChild(n);var T=q0(),t2=T.extra;t2.attributes[j1]=c,J1(N,V).then(function(o2){var k1=m3(u(u({},T),{},{icons:{main:o2,mask:f3()},prefix:V,iconName:w,extra:t2,watchable:!0})),Q=g.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(Q,a.firstChild):a.appendChild(Q),Q.outerHTML=k1.map(function(F6){return G2(F6)}).join(`
`),a.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function e8(a){return Promise.all([C4(a,"::before"),C4(a,"::after")])}function i8(a){return a.parentNode!==document.head&&!~j6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(j1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function g4(a){if(K)return new Promise(function(c,i){var e=b2(a.querySelectorAll("*")).filter(i8).map(e8),r=h3.begin("searchPseudoElements");Q4(),Promise.all(e).then(function(){r(),c3(),c()}).catch(function(){r(),c3(),i()})})}var r8={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=g4,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?g:e;p.searchPseudoElements&&g4(r)}}},L4=!1,s8={mixout:function(){return{dom:{unwatch:function(){Q4(),L4=!0}}}},hooks:function(){return{bootstrap:function(){H4(X1("mutationObserverCallbacks",{}))},noAuto:function(){O0()},watch:function(i){var e=i.observeMutationsRoot;L4?c3():H4(X1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},x4=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),n=s[0],t=s.slice(1).join("-");if(n&&t==="h")return e.flipX=!0,e;if(n&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(n){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},n8={mixout:function(){return{parse:{transform:function(i){return x4(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=x4(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,s=i.containerWidth,n=i.iconWidth,t={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),v="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),h="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(o," ").concat(v," ").concat(h)},H={transform:"translate(".concat(n/2*-1," -256)")},V={outer:t,inner:d,path:H};return{tag:"g",attributes:u({},V.outer),children:[{tag:"g",attributes:u({},V.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),V.path)}]}]}}}},G1={x:0,y:0,width:"100%",height:"100%"};function b4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function t8(a){return a.tag==="g"?a.children:[a]}var o8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),s=r?C1(r.split(" ").map(function(n){return n.trim()})):f3();return s.prefix||(s.prefix=s2()),i.mask=s,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.mask,t=i.maskId,o=i.transform,v=s.width,h=s.icon,d=n.width,H=n.icon,V=n0({transform:o,containerWidth:d,iconWidth:v}),S={tag:"rect",attributes:u(u({},G1),{},{fill:"white"})},E=h.children?{children:h.children.map(b4)}:{},I={tag:"g",attributes:u({},V.inner),children:[b4(u({tag:h.tag,attributes:u(u({},h.attributes),V.path)},E))]},U={tag:"g",attributes:u({},V.outer),children:[I]},N="mask-".concat(t||I2()),w="clip-".concat(t||I2()),G={tag:"mask",attributes:u(u({},G1),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,U]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:t8(H)},G]};return e.push(T,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(N,")")},G1)}),{children:e,attributes:r}}}},l8={provides:function(c){var i=!1;r2.matchMedia&&(i=r2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=u(u({},s),{},{attributeName:"opacity"}),t={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:u(u({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:u(u({},n),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},f8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return i.symbol=s,i}}}},m8=[l0,K0,Q0,J0,Z0,r8,s8,n8,o8,l8,f8];x0(m8,{mixoutsTo:_});var L5=_.noAuto,x5=_.config,b5=_.library,y5=_.dom,Z4=_.parse,N5=_.findIconDefinition,S5=_.toHtml,c6=_.icon,w5=_.layer,h8=_.text,u8=_.counter;var p8=["*"],d8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},H8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},z8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},V8=a=>a.prefix!==void 0&&a.iconName!==void 0,M8=(a,c)=>V8(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},C8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=f2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),g8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...e){for(let r of e){let s=Object.keys(r).map(n=>r[n]);this.addIcons(...s)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=f2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),L8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=A({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[e2]});let a=c;return a})(),x8=(()=>{let c=class c{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(M(k2),M(q))},c.\u0275cmp=k({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[e2,D],ngContentSelectors:p8,decls:1,vars:0,template:function(r,s){r&1&&(_3(),E3(0))},encapsulation:2});let a=c;return a})(),L1=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,s,n,t){this.sanitizer=e,this.config=r,this.iconLibrary=s,this.stackItem=n,this.classes=[],t!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){H8();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=M8(e,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(d8(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?Z4.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...z8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let s=c6(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(M(i1),M(C8),M(g8),M(L8,8),M(x8,8))},c.\u0275cmp=k({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(F3("innerHTML",s.renderedIconHTML,k3),F1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[e2,D],decls:0,vars:0,template:function(r,s){},encapsulation:2});let a=c;return a})();var y2=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=a2({type:c}),c.\u0275inj=Z({});let a=c;return a})();var b8=(a,c)=>c.title;function y8(a,c){if(a&1&&(f(0,"a",2)(1,"div",3)(2,"div",4)(3,"div",5),b(4,"fa-icon",6),l(),f(5,"h5",7),m(6),l(),f(7,"p",8),m(8),l()()()()),a&2){let i=c.$implicit,e=D2();L("routerLink",i.link),z(4),L("icon",e.Icons.arrowRight),z(2),c1(i.title),z(2),j(" ",i.description," ")}}var e6=(()=>{let c=class c{constructor(){this.Icons=M2,this.guideCards=[],this.guideCards=[{title:"Pipes",description:"Use pipes to transform strings, currency amounts, dates, and other data for display.",link:"/pipes"},{title:"Directives",description:"Use Angular's built-in directives to manage forms, lists, styles, and what users see.",link:"/directives"},{title:"Signals",description:"Granularly tracks how and where your state is used throughout an application.",link:"/signals"}]}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=k({type:c,selectors:[["app-home"]],standalone:!0,features:[D],decls:7,vars:0,consts:[[1,"lead"],[1,"d-flex","gap-2","flex-wrap"],["role","button",1,"card-link",3,"routerLink"],[1,"card"],[1,"card-body"],[1,"card-icon-goto"],[3,"icon"],[1,"card-title"],[1,"card-text"],["class","card-link","role","button",3,"routerLink"]],template:function(r,s){r&1&&(f(0,"h1"),m(1,"Angular 17 Bootcamp"),l(),f(2,"p",0),m(3,"A place to test Angular functionality"),l(),f(4,"div",1),D3(5,y8,9,4,"a",9,b8),l()),r&2&&(z(5),P3(s.guideCards))},dependencies:[B,y2,L1,r1],styles:['.card[_ngcontent-%COMP%]{position:relative;background:#F2F2F2;color:#454545;border:0px;width:18rem;overflow:hidden}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-40px;right:-40px;width:80px;height:80px;background:linear-gradient(45deg,rgb(240,7,12) 0%,rgb(204,38,213) 50%,rgb(119,2,255) 100%);border-radius:50%;transition:all .3s ease}.card[_ngcontent-%COMP%]:hover:before{top:0;right:0;width:100%;height:100%;border-radius:0}.card[_ngcontent-%COMP%]:hover{color:#fff;transition:all .3s ease}.card-body[_ngcontent-%COMP%]{z-index:100;padding:1.5rem}.card-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700}.card-text[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400;padding-bottom:1rem}.card-link[_ngcontent-%COMP%]{text-decoration:none}.card-icon-goto[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;font-size:2rem;padding:.5rem}']});let a=c;return a})();var i6=(()=>{let c=class c{transform(e){let r="";for(let s=e.length-1;s>=0;s--)r+=e[s];return r}};c.\u0275fac=function(r){return new(r||c)},c.\u0275pipe=Q2({name:"reverse",type:c,pure:!0,standalone:!0});let a=c;return a})();var r6=(()=>{let c=class c{transform(e){switch(!0){case e<1024:return e+" bytes";case(e>=1024&&e<1048576):return(e/1024).toFixed(1)+" KB";case(e>=1048576&&e<1073741824):return(e/1048576).toFixed(1)+" MB";case e>=1073741824:return(e/1073741824).toFixed(1)+" GB";default:return e+" bytes"}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275pipe=Q2({name:"fileSize",type:c,pure:!0,standalone:!0});let a=c;return a})();var h6=(()=>{let c=class c{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(r){return new(r||c)(M(k2),M(q))},c.\u0275dir=A({type:c});let a=c;return a})(),u6=(()=>{let c=class c extends h6{};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=J2(c)))(s||c)}})(),c.\u0275dir=A({type:c,features:[m2]});let a=c;return a})(),z3=new c2("NgValueAccessor");var N8={provide:z3,useExisting:K2(()=>N1),multi:!0};function S8(){let a=R1()?R1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var w8=new c2("CompositionEventMode"),N1=(()=>{let c=class c extends h6{constructor(e,r,s){super(e,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!S8())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(r){return new(r||c)(M(k2),M(q),M(w8,8))},c.\u0275dir=A({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&F("input",function(t){return s._handleInput(t.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(t){return s._compositionEnd(t.target.value)})},features:[a1([N8]),m2]});let a=c;return a})();var k8=new c2("NgValidators"),A8=new c2("NgAsyncValidators");function v6(a){return a!=null}function p6(a){return T3(a)?w2(a):a}function d6(a){let c={};return a.forEach(i=>{c=i!=null?J(J({},c),i):c}),Object.keys(c).length===0?null:c}function H6(a,c){return c.map(i=>i(a))}function D8(a){return!a.validate}function z6(a){return a.map(c=>D8(c)?c:i=>c.validate(i))}function P8(a){if(!a)return null;let c=a.filter(v6);return c.length==0?null:function(i){return d6(H6(i,c))}}function V6(a){return a!=null?P8(z6(a)):null}function F8(a){if(!a)return null;let c=a.filter(v6);return c.length==0?null:function(i){let e=H6(i,c).map(p6);return b3(e).pipe(P(d6))}}function M6(a){return a!=null?F8(z6(a)):null}function s6(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function T8(a){return a._rawValidators}function _8(a){return a._rawAsyncValidators}function v3(a){return a?Array.isArray(a)?a:[a]:[]}function b1(a,c){return Array.isArray(a)?a.includes(c):a===c}function n6(a,c){let i=v3(c);return v3(a).forEach(r=>{b1(i,r)||i.push(r)}),i}function t6(a,c){return v3(c).filter(i=>!b1(a,i))}var y1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=V6(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=M6(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}},p3=class extends y1{get formDirective(){return null}get path(){return null}},j2=class extends y1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},d3=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},E8={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},r7=d2(J({},E8),{"[class.ng-submitted]":"isSubmitted"}),C6=(()=>{let c=class c extends d3{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(M(j2,2))},c.\u0275dir=A({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&A2("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[m2]});let a=c;return a})();var W2="VALID",x1="INVALID",N2="PENDING",q2="DISABLED";function B8(a){return(S1(a)?a.validators:a)||null}function R8(a){return Array.isArray(a)?V6(a):a||null}function I8(a,c){return(S1(c)?c.asyncValidators:a)||null}function O8(a){return Array.isArray(a)?M6(a):a||null}function S1(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}var H3=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===W2}get invalid(){return this.status===x1}get pending(){return this.status==N2}get disabled(){return this.status===q2}get enabled(){return this.status!==q2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(n6(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(n6(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(t6(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(t6(c,this._rawAsyncValidators))}hasValidator(c){return b1(this._rawValidators,c)}hasAsyncValidator(c){return b1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=N2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=q2,this.errors=null,this._forEachChild(e=>{e.disable(d2(J({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d2(J({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=W2,this._forEachChild(e=>{e.enable(d2(J({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(d2(J({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===W2||this.status===N2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?q2:W2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=N2,this._hasOwnPendingAsyncValidator=!0;let i=p6(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new V2,this.statusChanges=new V2}_calculateStatus(){return this._allControlsDisabled()?q2:this.errors?x1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(N2)?N2:this._anyControlsHaveStatus(x1)?x1:W2}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){S1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=R8(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=O8(this._rawAsyncValidators)}};var g6=new c2("CallSetDisabledState",{providedIn:"root",factory:()=>V3}),V3="always";function U8(a,c){return[...c.path,a]}function G8(a,c,i=V3){q8(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),j8(a,c),Y8(a,c),$8(a,c),W8(a,c)}function o6(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function W8(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function q8(a,c){let i=T8(a);c.validator!==null?a.setValidators(s6(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=_8(a);c.asyncValidator!==null?a.setAsyncValidators(s6(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let r=()=>a.updateValueAndValidity();o6(c._rawValidators,r),o6(c._rawAsyncValidators,r)}function j8(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&L6(a,c)})}function $8(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&L6(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function L6(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function Y8(a,c){let i=(e,r)=>{c.valueAccessor.writeValue(e),r&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function X8(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function K8(a){return Object.getPrototypeOf(a.constructor)===u6}function Q8(a,c){if(!c)return null;Array.isArray(c);let i,e,r;return c.forEach(s=>{s.constructor===N1?i=s:K8(s)?e=s:r=s}),r||e||i||null}function l6(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function f6(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var J8=class extends H3{constructor(c=null,i,e){super(B8(i),I8(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),S1(i)&&(i.nonNullable||i.initialValueIsDefault)&&(f6(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){l6(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){l6(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){f6(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var Z8={provide:j2,useExisting:K2(()=>M3)},m6=(()=>Promise.resolve())(),M3=(()=>{let c=class c extends j2{constructor(e,r,s,n,t,o){super(),this._changeDetectorRef=t,this.callSetDisabledState=o,this.control=new J8,this._registered=!1,this.name="",this.update=new V2,this._parent=e,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Q8(this,n)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),X8(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){G8(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){m6.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,s=r!==0&&R3(r);m6.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?U8(e,this._parent):[e]}};c.\u0275fac=function(r){return new(r||c)(M(p3,9),M(k8,10),M(A8,10),M(z3,10),M(A3,8),M(g6,8))},c.\u0275dir=A({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[a1([Z8]),m2,e2]});let a=c;return a})();var c5={provide:z3,useExisting:K2(()=>C3),multi:!0},C3=(()=>{let c=class c extends u6{writeValue(e){let r=e??"";this.setProperty("value",r)}registerOnChange(e){this.onChange=r=>{e(r==""?null:parseFloat(r))}}};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=J2(c)))(s||c)}})(),c.\u0275dir=A({type:c,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&F("input",function(t){return s.onChange(t.target.value)})("blur",function(){return s.onTouched()})},features:[a1([c5]),m2]});let a=c;return a})();var a5=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=a2({type:c}),c.\u0275inj=Z({});let a=c;return a})();var e5=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=a2({type:c}),c.\u0275inj=Z({imports:[a5]});let a=c;return a})();var x6=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:g6,useValue:e.callSetDisabledState??V3}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=a2({type:c}),c.\u0275inj=Z({imports:[e5]});let a=c;return a})();var $2=new c2("HIGHLIGHT_OPTIONS"),g3;function r5(){if(!g3)try{g3=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:a=>a})}catch{}return g3}function s5(a){return r5()?.createHTML(a)||a}var n5=(()=>{let c=class c{constructor(e,r,s){this.doc=e,this.platformId=r,this._options=s,this._ready=new x3(null),this.ready=this._ready.asObservable().pipe(X2(n=>!!n),S3(1)),e1(r)&&(e.defaultView.hljs?this._ready.next(e.defaultView.hljs):(this._loadLibrary().pipe(D1(n=>this._options&&this._options.lineNumbersLoader?(e.defaultView.hljs=n,this.loadLineNumbers().pipe(l2(t=>{t.activateLineNumbers(),this._ready.next(n)}))):(this._ready.next(n),A1)),N3(n=>(console.error("[HLJS] ",n),A1))).subscribe(),this._options?.themePath&&this.loadTheme(this._options.themePath)))}_loadLibrary(){if(this._options){if(this._options.fullLibraryLoader&&this._options.coreLibraryLoader)return H2(()=>"The full library and the core library were imported, only one of them should be imported!");if(this._options.fullLibraryLoader&&this._options.languages)return H2(()=>"The highlighting languages were imported they are not needed!");if(this._options.coreLibraryLoader&&!this._options.languages)return H2(()=>"The highlighting languages were not imported!");if(!this._options.coreLibraryLoader&&this._options.languages)return H2(()=>"The core library was not imported!");if(this._options.fullLibraryLoader)return this.loadFullLibrary();if(this._options.coreLibraryLoader&&this._options.languages&&Object.keys(this._options.languages).length)return this.loadCoreLibrary().pipe(D1(e=>this._loadLanguages(e)))}return H2(()=>"Highlight.js library was not imported!")}_loadLanguages(e){let r=Object.entries(this._options.languages).map(([s,n])=>L3(n()).pipe(l2(t=>e.registerLanguage(s,t))));return y3(...r).pipe(P(()=>e))}loadCoreLibrary(){return L3(this._options.coreLibraryLoader())}loadFullLibrary(){return L3(this._options.fullLibraryLoader())}loadLineNumbers(){return w2(this._options.lineNumbersLoader())}setTheme(e){e1(this.platformId)&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.doc.createElement("link"),this._themeLinkElement.href=e,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.doc.head.appendChild(this._themeLinkElement)}};c.\u0275fac=function(r){return new(r||c)(z2(O3),z2(P1),z2($2,8))},c.\u0275prov=f2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),L3=a=>w2(a).pipe(X2(c=>!!c?.default),P(c=>c.default)),t5=(()=>{let c=class c{get hljs(){return this._hljs}constructor(e,r){this._loader=e,this._hljs=null,e.ready.subscribe(s=>{this._hljs=s,r&&r.config&&(s.configure(r.config),s.listLanguages().length<1&&console.error("[HighlightJS]: No languages were registered!"))})}highlight(e,{language:r,ignoreIllegals:s}){return this._loader.ready.pipe(P(n=>n.highlight(e,{language:r,ignoreIllegals:s})))}highlightAuto(e,r){return this._loader.ready.pipe(P(s=>s.highlightAuto(e,r)))}highlightElement(e){return this._loader.ready.pipe(P(r=>r.highlightElement(e)))}highlightAll(){return this._loader.ready.pipe(P(e=>e.highlightAll()))}configure(e){return this._loader.ready.pipe(P(r=>r.configure(e)))}registerLanguage(e,r){return this._loader.ready.pipe(l2(s=>s.registerLanguage(e,r)))}unregisterLanguage(e){return this._loader.ready.pipe(l2(r=>r.unregisterLanguage(e)))}registerAliases(e,{languageName:r}){return this._loader.ready.pipe(l2(s=>s.registerAliases(e,{languageName:r})))}listLanguages(){return this._loader.ready.pipe(P(e=>e.listLanguages()))}getLanguage(e){return this._loader.ready.pipe(P(r=>r.getLanguage(e)))}safeMode(){return this._loader.ready.pipe(P(e=>e.safeMode()))}debugMode(){return this._loader.ready.pipe(P(e=>e.debugMode()))}lineNumbersBlock(e){return this._loader.ready.pipe(X2(r=>!!r.lineNumbersBlock),l2(r=>r.lineNumbersBlock(e)))}};c.\u0275fac=function(r){return new(r||c)(z2(n5),z2($2,8))},c.\u0275prov=f2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),b6=(()=>{let c=class c{constructor(e,r,s,n,t){this._hljs=r,this._sanitizer=s,this.platformId=n,this._options=t,this.highlighted=new V2,this._nativeElement=e.nativeElement}ngOnChanges(e){e1(this.platformId)&&e?.code?.currentValue!==null&&e.code.currentValue!==e.code.previousValue&&(this.code?this.highlightElement(this.code,this.languages):this.setTextContent(""))}highlightElement(e,r){this.setTextContent(e),this._hljs.highlightAuto(e,r).subscribe(s=>{this.setInnerHTML(s?.value),this.lineNumbers&&this._options&&this._options.lineNumbersLoader&&this.addLineNumbers(),this.highlighted.emit(s)})}addLineNumbers(){this.destroyLineNumbersObserver(),Y2.schedule(()=>{this._hljs.lineNumbersBlock(this._nativeElement).subscribe(),this._lineNumbersObs=new MutationObserver(()=>{this._nativeElement.firstElementChild&&this._nativeElement.firstElementChild.tagName.toUpperCase()==="TABLE"&&this._nativeElement.classList.add("hljs-line-numbers"),this.destroyLineNumbersObserver()}),this._lineNumbersObs.observe(this._nativeElement,{childList:!0})})}destroyLineNumbersObserver(){this._lineNumbersObs&&(this._lineNumbersObs.disconnect(),this._lineNumbersObs=null)}setTextContent(e){Y2.schedule(()=>this._nativeElement.textContent=e)}setInnerHTML(e){Y2.schedule(()=>this._nativeElement.innerHTML=s5(this._sanitizer.sanitize(w3.HTML,e)||""))}};c.\u0275fac=function(r){return new(r||c)(M(q),M(t5),M(i1),M(P1),M($2,8))},c.\u0275dir=A({type:c,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(r,s){r&2&&A2("hljs",!0)},inputs:{code:["highlight","code"],languages:"languages",lineNumbers:"lineNumbers"},outputs:{highlighted:"highlighted"},standalone:!0,features:[e2]});let a=c;return a})(),w1=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=a2({type:c}),c.\u0275inj=Z({});let a=c;return a})();var l5=a=>[a],S2=(()=>{let c=class c{constructor(){this.showLineNumbers=!0,this.Icons=M2}copyToClipboard(e){navigator.clipboard.writeText(e)}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=k({type:c,selectors:[["shared-syntax-highlight"]],inputs:{title:"title",code:"code",language:"language",showLineNumbers:"showLineNumbers"},standalone:!0,features:[D],decls:7,vars:7,consts:[[1,"code-title"],[1,"position-relative"],[1,"btn","btn-copy","position-absolute","top-0","end-0"],[3,"icon","click"],[3,"highlight","languages","lineNumbers"]],template:function(r,s){r&1&&(f(0,"span",0),m(1),l(),f(2,"div",1)(3,"button",2)(4,"fa-icon",3),F("click",function(){return s.copyToClipboard(s.code)}),l()(),f(5,"pre"),b(6,"code",4),l()()),r&2&&(z(1),c1(s.title),z(3),L("icon",s.Icons.copy),z(2),L("highlight",s.code)("languages",B3(5,l5,s.language))("lineNumbers",s.showLineNumbers))},dependencies:[B,w1,b6,y2,L1],styles:[".btn-copy[_ngcontent-%COMP%]{color:#adb5bd}.btn-copy[_ngcontent-%COMP%]:hover{color:#6c757d}.code-title[_ngcontent-%COMP%]{background-color:#cc26d51a;display:block;padding:.5rem;font-weight:600;border-radius:.5rem .5rem 0 0;border:1px solid #e1e4e8}"]});let a=c;return a})();function f5(a,c){if(a&1&&(m(0),E1(1,"reverse")),a&2){let i=D2();j(" ",B1(1,1,i.textReverse)," ")}}function m5(a,c){a&1&&(f(0,"span"),m(1,"\xA0"),l())}function h5(a,c){if(a&1&&(m(0),E1(1,"fileSize")),a&2){let i=D2();j(" ",B1(1,1,i.myFileSize)," ")}}function u5(a,c){a&1&&(f(0,"span"),m(1,"\xA0"),l())}var y6=(()=>{let c=class c{constructor(){this.Icons=M2,this.textReverse="",this.templateReverse="<p>{{ textReverse | reverse }}</p>",this.appReverse=`import { Component } from '@angular/core';
  import { ReversePipe } from '../../../pipes/reverse.pipe';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [ReversePipe]
  })
  export class AppComponent {
    textReverse: string = 'Reversed text';
  }`,this.pipeReverse=`import { Pipe, PipeTransform } from '@angular/core';
  @Pipe({
    name: 'reverse',
    standalone: true
  })
  export class ReversePipe implements PipeTransform {
    transform(value: string): string {
      let reverse = '';
      for (let i = value.length - 1; i >= 0; i--) {
          reverse += value[i];
      }
      return reverse;
    }
  }`,this.myFileSize=123456789,this.templateFileSize="<p>{{ myFileSize | fileSize }}</p>",this.appFileSize=`import { Component } from '@angular/core';
  import { FileSizePipe } from '../../../pipes/file-size.pipe';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [FileSizePipe]
  })
  export class AppComponent {
    myFileSize: number = 123456789;
  }`,this.pipeFileSize=`import { Pipe, PipeTransform } from '@angular/core';
  @Pipe({
    name: 'fileSize',
    standalone: true
  })
  export class FileSizePipe implements PipeTransform {
  
    transform(size: number): string {
  
      switch (true) {
        case (size < 1024):
          return size + ' bytes';
        case (size >= 1024 && size < 1048576):
          return (size / 1024).toFixed(1) + ' KB';
        case (size >= 1048576 && size < 1073741824):
          return (size / 1048576).toFixed(1) + ' MB';
        case (size >= 1073741824):
          return (size / 1073741824).toFixed(1) + ' GB';
        default:
          return size + ' bytes'  ;
      }
    }
  }`}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=k({type:c,selectors:[["app-pipes"]],standalone:!0,features:[D],decls:43,vars:11,consts:[["href","https://angular.dev/guide/pipes","target","_blank"],[1,"border","p-3","mb-3","rounded","shadow-sm"],[1,"d-block","fw-semibold"],[1,"input-group","mb-3","py-1"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"p-0","m-0"],["title","reverse.pipe.ts","language","typescript",3,"code"],["title","app.component.ts","language","typescript",3,"code"],["title","app.component.html","language","xml",3,"code"],[1,"my-4"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],["title","file-size.pipe.ts","language","typescript",3,"code","showLineNumbers"]],template:function(r,s){r&1&&(f(0,"h1"),m(1,"Pipes"),l(),f(2,"p")(3,"strong"),m(4,"Angular Docs:\xA0"),l(),f(5,"a",0),m(6,"Understanding Pipes"),l()(),f(7,"h3"),m(8,"Description"),l(),f(9,"p"),m(10,"Use pipes to transform strings, currency amounts, dates, and other data for display."),l(),b(11,"hr"),f(12,"h4"),m(13,"Pipe: Reverse Text"),l(),f(14,"div",1)(15,"span",2),m(16,"Input"),l(),f(17,"div",3)(18,"input",4),F("ngModelChange",function(t){return s.textReverse=t}),l()(),f(19,"span",2),m(20,"Result"),l(),f(21,"p",5),T1(22,f5,2,3)(23,m5,2,0),l()(),b(24,"shared-syntax-highlight",6)(25,"shared-syntax-highlight",7)(26,"shared-syntax-highlight",8)(27,"hr",9),f(28,"h4"),m(29,"Pipe: File size"),l(),f(30,"div",1)(31,"span",2),m(32,"Input (file size in bytes)"),l(),f(33,"div",3)(34,"input",10),F("ngModelChange",function(t){return s.myFileSize=t}),l()(),f(35,"span",2),m(36,"Result"),l(),f(37,"p",5),T1(38,h5,2,3)(39,u5,2,0),l()(),b(40,"shared-syntax-highlight",11)(41,"shared-syntax-highlight",7)(42,"shared-syntax-highlight",8)),r&2&&(z(18),L("ngModel",s.textReverse),z(4),_1(22,s.textReverse?22:23),z(2),L("code",s.pipeReverse),z(1),L("code",s.appReverse),z(1),L("code",s.templateReverse),z(8),L("ngModel",s.myFileSize),z(4),_1(38,s.myFileSize?38:39),z(2),L("code",s.pipeFileSize)("showLineNumbers",!0),z(1),L("code",s.appFileSize),z(1),L("code",s.templateFileSize))},dependencies:[B,i6,r6,x6,N1,C3,C6,M3,w1,y2,S2]});let a=c;return a})();var N6=(()=>{let c=class c{constructor(e){this.element=e}onMouseEnter(){this.highlight("yellow")}onMouseLeave(){this.highlight("")}highlight(e){this.element.nativeElement.style.backgroundColor=e}};c.\u0275fac=function(r){return new(r||c)(M(q))},c.\u0275dir=A({type:c,selectors:[["","appHighlight",""]],hostBindings:function(r,s){r&1&&F("mouseenter",function(){return s.onMouseEnter()})("mouseleave",function(){return s.onMouseLeave()})},standalone:!0});let a=c;return a})();var S6=(()=>{let c=class c{constructor(){this.appConfirmVisit=()=>{}}confirmVisit(){window.confirm("Are you sure you want to continue?")&&this.appConfirmVisit()}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=A({type:c,selectors:[["","appConfirmVisit",""]],hostBindings:function(r,s){r&1&&F("click",function(t){return s.confirmVisit(t)})},inputs:{appConfirmVisit:"appConfirmVisit"},standalone:!0});let a=c;return a})();var w6=(()=>{let c=class c{constructor(){this.highlightCode=`import { Directive, ElementRef, HostListener } from '@angular/core';
  @Directive({
    selector: '[appHighlight]',
    standalone: true
  })
  export class HighlightDirective {  
    constructor(private element: ElementRef) {
    }
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
    private highlight(color: string) {
      this.element.nativeElement.style.backgroundColor = color;
    }
  }
  `,this.highlightTemplate="<p appHighlight>Highlight me!</p>",this.confirmVisitCode=`import { Directive, HostListener, Input } from '@angular/core';

  @Directive({
    selector: '[appConfirmVisit]',
    standalone: true
  })
  export class ConfirmVisitDirective {
    constructor() { }
    @Input() appConfirmVisit = () => {};
    
    @HostListener('click', ['$event']) 
    confirmVisit() {
      const confirmed = window.confirm('Are you sure you want to continue?');
      if(confirmed) {
        this.appConfirmVisit();
      }
    }
  }
  `,this.confirmVisitTemplate=`<button
  type="button"
  class="btn btn-primary text-white"
  [appConfirmVisit]="visitPipesPage">
  Visit Pipes Page
</button>`}visitPipesPage(){location.href="/pipes"}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=k({type:c,selectors:[["app-directives"]],standalone:!0,features:[D],decls:83,vars:5,consts:[["href","https://angular.dev/guide/directives","target","_blank"],[1,"my-4"],["href","https://angular.dev/guide/components","target","_blank"],["href","https://angular.dev/guide/directives/attribute-directives","target","_blank"],[1,"border","p-3","mb-3","rounded","shadow-sm"],[1,"d-block","fw-semibold"],["appHighlight",""],["title","highlight.directive.ts","language","typescript",3,"code"],["title","app.component.html","language","xml",3,"code"],["type","button",1,"btn","btn-primary","text-white",3,"appConfirmVisit"],["title","confirm-visit.directive.ts","language","typescript",3,"code"]],template:function(r,s){r&1&&(f(0,"h1"),m(1,"Directives"),l(),f(2,"p")(3,"strong"),m(4,"Angular Docs:\xA0"),l(),f(5,"a",0),m(6,"Built-in directives"),l()(),f(7,"h3"),m(8,"Description"),l(),f(9,"p"),m(10,"Use Angular's built-in directives to manage forms, lists, styles, and what users see. "),b(11,"br"),m(12,` The different types of Angular directives are as follows:
`),l(),f(13,"p")(14,"strong"),m(15,"Components:"),l(),m(16," Used with a template. This type of directive is the most common directive type."),l(),f(17,"p")(18,"strong"),m(19,"Attribute directives:"),l(),m(20," Change the appearance or behavior of an element, component, or another directive."),l(),f(21,"p")(22,"strong"),m(23,"Structural directives:"),l(),m(24," Change the DOM layout by adding and removing DOM elements."),l(),b(25,"hr",1),f(26,"h3"),m(27,"Components"),l(),f(28,"p")(29,"strong"),m(30,"Angular Docs:\xA0"),l(),f(31,"a",2),m(32,"Anatomy of a component"),l()(),f(33,"p"),m(34,"You should be used to Component directives as they are created with the CLI new component command."),l(),f(35,"p")(36,"strong"),m(37,"Components are the most common of the three directive types."),l(),m(38," A component controls a patch of screen called a view. You define a component's application logic\u2014what it does to support the view\u2014inside a class. The class interacts with the view through an API of properties and methods. "),l(),f(39,"p"),m(40,"Every component must have:"),l(),f(41,"ul")(42,"li"),m(43,"A TypeScript class with behaviors such as handling user input and fetching data from a server"),l(),f(44,"li"),m(45,"An HTML template that controls what renders into the DOM"),l(),f(46,"li"),m(47,"A CSS selector that defines how the component is used in HTML"),l()(),b(48,"hr",1),f(49,"h3"),m(50,"Attribute directives"),l(),f(51,"p")(52,"strong"),m(53,"Angular Docs:\xA0"),l(),f(54,"a",3),m(55,"Attribute directives"),l()(),f(56,"p"),m(57,"Attribute directives are used as attributes of elements. They change the appearance or behavior of an element, component, or another directive."),l(),f(58,"p")(59,"strong"),m(60,"ngClass, ngStyle, and ngModel"),l(),m(61," are examples of attribute directives built-in to the Angular framework."),l(),f(62,"p"),m(63,"Dropdowns, accordions, and tabs are just a few common use cases for custom attribute directives. When you have a UI element that will be common throughout your app, you can implement an attribute directive and share it across components and modules to avoid repeating the code for the same functionality."),l(),f(64,"h4"),m(65,"Directive: Highlight"),l(),f(66,"div",4)(67,"span",5),m(68,"Result on hover"),l(),f(69,"span",6),m(70,"Highlight me!"),l()(),b(71,"shared-syntax-highlight",7)(72,"shared-syntax-highlight",8)(73,"hr",1),f(74,"h4"),m(75,"Directive: Confirm Visit"),l(),f(76,"div",4)(77,"span",5),m(78,"Action"),l(),f(79,"button",9),m(80," Visit Pipes Page "),l()(),b(81,"shared-syntax-highlight",10)(82,"shared-syntax-highlight",8)),r&2&&(z(71),L("code",s.highlightCode),z(1),L("code",s.highlightTemplate),z(7),L("appConfirmVisit",s.visitPipesPage),z(2),L("code",s.confirmVisitCode),z(1),L("code",s.confirmVisitTemplate))},dependencies:[B,N6,S6,S2]});let a=c;return a})();var k6=(()=>{let c=class c{constructor(){this.countWritable=Z2(0),this.countReadOnly=Z2(100),this.countReadOnlyAlt=Z2(100).asReadonly(),this.signalCode=`  import { Component, WritableSignal, signal, Signal } from '@angular/core';
  ...
  
  @Component({
    selector: 'app-signals',
    standalone: true,
    imports: [CommonModule, SyntaxHighlightComponent],
    templateUrl: './signals.component.html',
    styleUrl: './signals.component.scss'
  })
  export class SignalsComponent {
    countWritable: WritableSignal<number> = signal(0);
    countReadOnly: Signal<number> = signal(100);
    countReadOnlyAlt = signal(100).asReadonly();
    
    incrementCount() {
      this.countWritable.set(this.countWritable() + 1);
    }
  
    incrementReadOnlyCount() {
      // this.countReadOnly.set(this.countReadOnly() + 1);
      // .set() is not available on ReadOnly signals
    }    
  }`,this.signalTemplate=`  <p class="m-0">Count: {{ countWritable() }}</p>
  <p class="m-0">Count * Count: {{ countWritable() * countWritable() }}</p>
  <p class="m-0">Count (ReadOnly) : {{ countReadOnly() }}</p>`}incrementCount(){this.countWritable.set(this.countWritable()+1)}incrementReadOnlyCount(){}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=k({type:c,selectors:[["app-signals"]],standalone:!0,features:[D],decls:38,vars:5,consts:[["href","https://angular.dev/guide/signals","target","_blank"],[1,"my-4"],[1,"border","p-3","mb-3","rounded","shadow-sm"],[1,"d-block","fw-semibold"],[1,"input-group","mb-3","py-1"],[1,"btn","btn-primary","text-white",3,"click"],[1,"m-0"],["title","app.component.ts","language","typescript",3,"code"],["title","app.component.html","language","xml",3,"code"]],template:function(r,s){r&1&&(f(0,"h1"),m(1,"Signals"),l(),f(2,"p")(3,"strong"),m(4,"Angular Docs:\xA0"),l(),f(5,"a",0),m(6,"Angular Signals"),l()(),f(7,"h3"),m(8,"Description"),l(),f(9,"p"),m(10,`Angular Signals is a system that granularly tracks how and where your state is used throughout an application, allowing the framework to optimize rendering updates.
`),l(),f(11,"h5"),m(12,"What are signals?"),l(),f(13,"p"),m(14,"A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from simple primitives to complex data structures."),l(),f(15,"p"),m(16,"You read a signal's value by calling its getter function, which allows Angular to track where the signal is used."),l(),f(17,"p"),m(18,"Signals may be either writable or read-only."),l(),b(19,"hr",1),f(20,"h4"),m(21,"Signals: Increment Count"),l(),f(22,"div",2)(23,"span",3),m(24,"Action"),l(),f(25,"div",4)(26,"button",5),F("click",function(){return s.incrementCount()}),m(27," Increment count "),l()(),f(28,"span",3),m(29,"Result"),l(),f(30,"p",6),m(31),l(),f(32,"p",6),m(33),l(),f(34,"p",6),m(35),l()(),b(36,"shared-syntax-highlight",7)(37,"shared-syntax-highlight",8)),r&2&&(z(31),j("Count: ",s.countWritable(),""),z(2),j("Count * Count: ",s.countWritable()*s.countWritable(),""),z(2),j("Count (ReadOnly) : ",s.countReadOnly(),""),z(1),L("code",s.signalCode),z(1),L("code",s.signalTemplate))},dependencies:[B,S2]});let a=c;return a})();var A6=[{path:"pipes",component:y6},{path:"directives",component:w6},{path:"signals",component:k6},{path:"home",component:e6},{path:"",redirectTo:"/home",pathMatch:"full"}];var D6={providers:[j3(A6),G3(),{provide:$2,useValue:{lineNumbers:!0,coreLibraryLoader:()=>import("./chunk-5DFUAZGJ.mjs"),lineNumbersLoader:()=>import("./chunk-QGKFANKT.mjs"),languages:{typescript:()=>import("./chunk-YRDPS55A.mjs"),css:()=>import("./chunk-3GS6QULX.mjs"),xml:()=>import("./chunk-2IZTARUM.mjs"),json:()=>import("./chunk-P5WAISDC.mjs")}}}]};var v5={providers:[W3()]},P6=I3(D6,v5);var p5=()=>U3($3,P6),nc=p5;export{nc as a};
