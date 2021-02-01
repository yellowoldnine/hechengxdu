(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var m=this||self;function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}} 
function n(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n=aa:n=ba;return n.apply(null,arguments)}function ca(a,b){function c(){}c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.O=function(d,e,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[e].apply(d,g)}};function da(a,b){Array.prototype.forEach.call(a,b,void 0)};(class{constructor(a,b){this.g=b===ea?a:""}}).prototype.toString=function(){return this.g.toString()};var ea={};function p(a){p[" "](a);return a}p[" "]=function(){};function fa(){}var ha="function"==typeof Uint8Array,la=[];function r(a,b){if(b<a.l){b+=a.m;var c=a.g[b];return c!==la?c:a.g[b]=[]}if(a.i)return c=a.i[b],c===la?a.i[b]=[]:c}function t(a,b,c){a=r(a,b);return null==a?c:a}function y(a,b){return t(a,b,"")}function z(a,b){a=r(a,b);a=null==a?a:!!a;return null==a?!1:a}function ma(a){a=r(a,13);a=null==a?a:+a;return null==a?0:a} 
function A(a){if(a.j)for(var b in a.j){var c=a.j[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&A(c[d]);else c&&A(c)}return a.g}function na(a){return new oa(a?JSON.parse(a):null)}fa.prototype.toString=function(){return A(this).toString()};function oa(a){this.j=null;a||(a=[]);this.m=-1;this.g=a;a:{if(a=this.g.length){--a;var b=this.g[a];if(!(null===b||"object"!=typeof b||Array.isArray(b)||ha&&b instanceof Uint8Array)){this.l=a- -1;this.i=b;break a}}this.l=Number.MAX_VALUE}}ca(oa,fa);var pa=document,C=window;class qa{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};function D(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function E(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)};var ra=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function G(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{p(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function sa(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}let H=[];const I=()=>{const a=H;H=[];for(const b of a)try{b()}catch(c){}}; 
var ta=a=>{H.push(a);1==H.length&&(window.Promise?Promise.resolve().then(I):window.setImmediate?setImmediate(I):setTimeout(I,0))},ua=(a,b)=>{"complete"===a.readyState||"interactive"===a.readyState?ta(b):a.addEventListener("DOMContentLoaded",b)},va=(a,b)=>{"complete"===a.document.readyState?ta(b):a.addEventListener("load",b)};function J(a,b,c=null){wa(a,b,c)}function wa(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=a.document.createElement("img");if(c){const e=f=>{c&&c(f);E(d,"load",e);E(d,"error",e)};D(d,"load",e);D(d,"error",e)}d.src=b;a.google_image_requests.push(d)};let xa=0;function ya(a){return(a=za(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function za(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)} 
function Aa(){if(!(.01<Math.random())){var a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${24}&version=${ya(24)}&sample=${.01}`,b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):J(b,a)}};var Ba={};function M(){if(Ba!==Ba)throw Error("Bad secret");};function Ca(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null};var N,Da=class{};class Ea extends Da{constructor(){var a=null!==Fa&&void 0!==Fa?Fa:"";super();M();this.g=a}toString(){return this.g.toString()}}var Fa=null===(N=Ca())||void 0===N?void 0:N.emptyHTML;new Ea;var Ga,Ha=class{};class Ia extends Ha{constructor(){var a=null!==Ja&&void 0!==Ja?Ja:"";super();M();this.g=a}toString(){return this.g.toString()}}var Ja=null===(Ga=Ca())||void 0===Ga?void 0:Ga.emptyScript;new Ia;var Ka=class{};class Pa extends Ka{constructor(a){super();M();this.g=a}toString(){return this.g}}new Pa("about:blank");new Pa("about:invalid#zTSz");var Qa=a=>a.innerHeight>=a.innerWidth?0:90,Ra=!!window.google_async_iframe_id;let O=Ra&&window.parent||window;const Sa=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Ta=class{constructor(a,b){this.g=a;this.i=b}},Ua=class{constructor(a,b){this.url=a;this.N=!!b;this.depth=null}};function P(a,b){const c={};c[a]=b;return[c]}function Va(a,b,c,d,e){const f=[];sa(a,function(g,k){(g=Wa(g,b,c,d,e))&&f.push(k+"="+g)});return f.join(b)} 
function Wa(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Wa(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Va(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function Xa(a){let b=1;for(const c in a.i)b=c.length>b?c.length:b;return 3997-b-a.j.length-1} 
function Ya(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=Xa(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],k=a.i[g];for(let h=0;h<k.length;h++){if(!d){c=null==c?g:c;break}let l=Va(k[h],a.j,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;b+=l;e=a.j;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class Za{constructor(){this.j="&";this.i={};this.l=0;this.g=[]}};function Q(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{let g;c instanceof Za?g=c:(g=new Za,sa(c,(h,l)=>{var q=g,u=q.l++;h=P(l,h);q.g.push(u);q.i[u]=h}));const k=Ya(g,a.i,"/pagead/gen_204?id="+b+"&");k&&("undefined"!==typeof f?J(m,k,f):J(m,k))}catch(g){}}class $a{constructor(){this.i="http:"===C.location.protocol?"http:":"https:";this.g=Math.random()}};let R=null;var ab=()=>{const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},bb=()=>{const a=m.performance;return a&&a.now?a.now():null};class cb{constructor(a,b){var c=bb()||ab();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const S=m.performance,db=!!(S&&S.mark&&S.measure&&S.clearMarks),T=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=db){var b;if(null===R){R="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(R=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=R;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function eb(a){a&&S&&T()&&(S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class fb{constructor(){var a=U;this.events=[];this.i=a||m;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=T()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new cb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;S&&T()&&S.mark(b);return a}};function gb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function hb(a,b,c){let d,e;try{if(a.g&&a.g.g){e=a.g.start(b.toString(),3);d=c();var f=a.g;c=e;if(f.g&&"number"===typeof c.value){c.duration=(bb()||ab())-c.value;var g=`goog_${c.label}_${c.uniqueId}_end`;S&&T()&&S.mark(g);!f.g||2048<f.events.length||f.events.push(c)}}else d=c()}catch(k){f=!0;try{eb(e),f=a.m(b,new qa(k,{message:gb(k)}),void 0,void 0)}catch(h){a.F(217,h)}if(f){let h,l;null==(h=window.console)||null==(l=h.error)||l.call(h,k)}else throw k;}return d} 
function ib(a,b){var c=V;return(...d)=>hb(c,a,()=>b.apply(void 0,d))} 
class jb{constructor(){var a=kb;this.l=W;this.i=null;this.m=this.F;this.g=void 0===a?null:a;this.j=!1}F(a,b,c,d,e){e=e||"jserror";let f;try{const v=new Za;var g=v;g.g.push(1);g.i[1]=P("context",a);b.error&&b.meta&&b.id||(b=new qa(b,{message:gb(b)}));if(b.msg){g=v;var k=b.msg.substring(0,512);g.g.push(2);g.i[2]=P("msg",k)}var h=b.meta||{};b=h;if(this.i)try{this.i(b)}catch(F){}if(d)try{d(b)}catch(F){}d=v;h=[h];d.g.push(3);d.i[3]=h;{d=m;h=[];b=null;do{var l=d;if(G(l)){var q=l.location.href;b=l.document&& 
l.document.referrer||null}else q=b,b=null;h.push(new Ua(q||""));try{d=l.parent}catch(K){d=null}}while(d&&l!=d);for(let K=0,La=h.length-1;K<=La;++K)h[K].depth=La-K;l=m;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==h.length-1)for(q=1;q<h.length;++q){var u=h[q];u.url||(u.url=l.location.ancestorOrigins[q-1]||"",u.N=!0)}var w=h;let F=new Ua(m.location.href,!1);l=null;const ia=w.length-1;for(u=ia;0<=u;--u){var x=w[u];!l&&Sa.test(x.url)&&(l=x);if(x.url&&!x.N){F=x;break}}x= 
null;const yb=w.length&&w[ia].url;0!=F.depth&&yb&&(x=w[ia]);f=new Ta(F,x)}if(f.i){w=v;var B=f.i.url||"";w.g.push(4);w.i[4]=P("top",B)}var ja={url:f.g.url||""};if(f.g.url){var ka=f.g.url.match(ra),L=ka[1],Ma=ka[3],Na=ka[4];B="";L&&(B+=L+":");Ma&&(B+="//",B+=Ma,Na&&(B+=":"+Na));var Oa=B}else Oa="";L=v;ja=[ja,{url:Oa}];L.g.push(5);L.i[5]=ja;Q(this.l,e,v,this.j,c)}catch(v){try{Q(this.l,e,{context:"ecmserr",rctx:a,msg:gb(v),url:f&&f.g.url},this.j,c)}catch(F){}}return!0}};let W,V;if(Ra&&!G(O)){let a="."+pa.domain;try{for(;2<a.split(".").length&&!G(O);)pa.domain=a=a.substr(a.indexOf(".")+1),O=window.parent}catch(b){}G(O)||(O=window)}const U=O,kb=new fb;var lb=()=>{if(!U.google_measure_js_timing){var a=kb;a.g=!1;a.events!=a.i.google_js_reporting_queue&&(T()&&da(a.events,eb),a.events.length=0)}};W=new $a;"number"!==typeof U.google_srt&&(U.google_srt=Math.random());var mb=W,nb=U.google_srt;0<=nb&&1>=nb&&(mb.g=nb);V=new jb; 
V.i=a=>{{const b=xa;0!==b&&(a.jc=String(b),a.shv=ya(b))}};V.j=!0;"complete"==U.document.readyState?lb():kb.g&&D(U,"load",()=>{lb()});var X=(a,b)=>ib(a,b);function ob(a,b){a.g.parent.postMessage(b,"*");a.g.parent.parent!==a.g.parent&&a.g.parent.parent.postMessage(b,"*")}function Y(a,b,c={}){c.msg_type=b;c.googMsgType="sth";ob(a,a.g.JSON.stringify(c))}function Z(a,b){y(a.i,3)&&(b.qid=y(a.i,3));y(a.i,4)&&(b.agcid=y(a.i,4));y(a.i,10)&&(b.eid=y(a.i,10));b.req=C.location.href;Q(W,a.I(),b,!0,void 0,void 0)}function pb(a){try{const b=+a.g.localStorage.getItem("LAST_INTERSTITIAL_TIME"),c=Date.now();if(b&&b<c)return c-b}catch(b){}return null} 
function qb(a){if(a.A||z(a.i,2))return!0;let b=!0;const c=pb(a);c&&(b=36E5<=c);if(b)try{a.g.localStorage.removeItem("LAST_INTERSTITIAL_TIME")}catch(d){}return b} 
function rb(a){a.g.IntersectionObserver&&.01<ma(a.i)?(new a.g.IntersectionObserver((b,c)=>{b.forEach(d=>{if(!(0>=d.intersectionRatio)){a.s();for(const e of a.j.document.getElementsByClassName("GoogleActiveViewElement"))e.removeAttribute("data-google-av-dm");c.disconnect()}})},{threshold:ma(a.i)})).observe(a.g.document.documentElement):D(a.g,"message",X(262,b=>{a:{if(b&&(a.g.parent==b.source||a.g.parent.parent==b.source)){var c={};try{c=a.g.JSON.parse(b.data)}catch(d){b=void 0;break a}"i-view"==(c&& 
c.msg_type)&&a.m&&a.s()}b=void 0}return b}));a.A||(a.u=X(263,()=>{a.m=qb(a);if(!a.m){var b={};b.i_tslv=pb(a);Y(a,"i-no",b)}}),D(a.g,"storage",a.u));va(a.g,()=>{Y(a,"i-adframe-load")})} 
class sb{constructor(a,b){this.g=C;this.j=a;this.m=!1;this.u=null;this.o=0;this.i=b;this.A=z(this.i,11)||10===t(this.i,12,0)||11===t(this.i,12,0);if(this.m=qb(this))rb(this),y(this.i,1)&&ob(this,y(this.i,1))}I(){}s(){if(!this.o){this.u&&E(this.g,"storage",this.u);var a=this.o=Date.now();if(!z(this.i,2)&&!this.A)try{this.g.localStorage.setItem("LAST_INTERSTITIAL_TIME",""+a)}catch(b){}this.M();this.j&&(a=this.g.document.createEvent("Event"),a.initEvent("i-creative-view",!0,!1),this.j.dispatchEvent(a), 
a=this.g.document.createEvent("Event"),a.initEvent("onshow",!0,!1),this.g.dispatchEvent(a))}}M(a){let b;try{this.j.vv?this.j.vv():b=!0}catch(c){V.F(533,c,void 0,void 0);return}a=a||1;b?(Z(this,{vf:a}),3<=a||this.g.setTimeout(n(sb.prototype.M,this,a+1),3E3)):1<a&&Z(this,{vs:a})}};function tb(a){window.parent.postMessage(JSON.stringify({type:"rewarded",message:a}),"*")};var ub=a=>{a=a.document;let b={};a&&(b="CSS1Compat"==a.compatMode?a.documentElement:a.body);return b||{}};function vb(a,b,c){a={context:"iaf::itf",req:C.location.href,db:a?1:0,ls:b?1:0,eid:y(c,10),agcid:y(c,4),qid:y(c,3),rtype:t(c,12,0)};Q(W,"jserror",a,!0,void 0,void 0)}function wb(a,b){xb(a,b)&&(a.l.style.background="rgba(255,255,255, .8)",m.setTimeout(()=>{a.l.style.background="transparent";a.dismiss(2)},750))} 
function zb(a){var b=a.l.getBoundingClientRect(),c=b.bottom,d=b.right;const e=ub(a.g).clientHeight,f=ub(a.g).clientWidth,g=Math.floor(c-e),k=Math.floor(d-f);if(0<=g||5<k)c-=b.top,d-=b.left,b=a.g,Z(a,{dhb:g>=c?1:0,dhr:k>=d?1:0,h:e,w:f,bh:c,bw:d,opb:g,opr:k,pt:b.innerHeight>=b.innerWidth?1:0,req:a.g.location.href})}function Ab(a){const b=X(259,n(function(){Y(this,"i-blur");E(this.g,"blur",b)},a));D(a.g,"blur",b)}function Bb(a,b){var c={};z(a.i,15)?(tb("canceled"),tb("closed")):Y(a,b,c)} 
function Cb(a,b){a.g.goog_vignette_survey&&(a.g.goog_vignette_survey.display(a.g.document.getElementById("creative"),()=>{a.dismiss(3)},()=>{},1),b&&b.stopPropagation())}function Db(a){!1===a.G&&a.enableDismissListeners();a.L&&D(a.L,"click",X(261,c=>Cb(a,c)));const b=a.g.document.getElementById("abgc");b&&D(b,"click",X(830,c=>{c&&c.stopPropagation()}))}function Eb(a){D(a.g,"resize",()=>{{const b=Qa(a.g);a.B?(a.B=!1,a.D=90===b):(a.D?0===b:90===b)&&a.dismiss(4)}})} 
function Fb(a){var b=X(617,c=>{var d=a.l,e=document.activeElement;2==t(a.i,5,0)&&(e=a.j.document.activeElement);(27===c.which||13===c.which&&e===d)&&a.dismiss(5);if(9===c.which){d=Gb(a);{e=Array.prototype.indexOf.call(d,e,void 0);d=Hb.length;const f=Gb(a);c.shiftKey&&0===e?(c.preventDefault(),f[d-1].focus()):c.shiftKey||e!==d-1||(c.preventDefault(),f[0].focus())}}});D(a.g,"keydown",b);2===t(a.i,5,0)&&D(a.j,"keydown",b);b=Gb(a).filter((c,d)=>{c||Z(a,{missingFocusableChild:1,index:d});return!!c});da(b, 
(c,d)=>{c.setAttribute("tabindex",d+1)});b.length&&b[0].focus()}function Gb(a){return 2===t(a.i,5,0)?Ib.map(b=>a.j.document.getElementById(b)):Hb.map(b=>document.getElementById(b))}function xb(a,b){if(!b)return!0;if((b.preventDefault?b.defaultPrevented:!1===b.returnValue)||b.target&&b.target.ownerDocument==a.j.document)return!1;for(a=b.target;a;){if("creative"==a.id)return!1;a=a.parentElement}return!0} 
class Jb extends sb{constructor(a,b,c,d){super(a,d);this.l=b;this.L=c;this.H=0;this.K=X(260,e=>{this.dismiss(1);e&&e.stopPropagation()});this.J=e=>wb(this,e);this.C=[];this.v=[];this.B=this.D=this.G=!1}I(){return"ia_evt"}addViewListener(a){a=ib(483,a);this.o?a():this.C.push(a)}addDismissListener(a){this.v.push(ib(484,a))}disableDismissListeners(){this.G=!0;E(this.l,"click",this.K);E(this.g.document,"click",this.J)}enableDismissListeners(){this.G=!1;D(this.l,"click",this.K);D(this.g.document,"click", 
this.J)}dismiss(a){document.body.setAttribute("aria-hidden","true");Z(this,{ttd:Date.now()-this.o,req:C.location.href,pda:this.H,ds:a});this.H++||Ab(this);let b=0;for(let d=0;d<this.v.length;d++)b=Math.max(b,this.v[d]());b=Math.min(b,1E3);let c="i-dismiss";6===a?c="r-dismiss-before-reward":7===a&&(c="r-dismiss-after-reward");0===b?Bb(this,c):m.setTimeout(()=>Bb(this,c),b)}s(){super.s();this.D=90===Qa(this.g);this.B=0===this.g.innerWidth&&0===this.g.innerHeight;this.l.setAttribute("aria-label",y(this.i, 
7));Db(this);Eb(this);hb(V,772,()=>Fb(this));zb(this);for(let a=0;a<this.C.length;a++)this.C[a]();Aa()}}var Hb=["dismiss-button","creative"],Ib=["dismiss-button","creative-content"];{xa=24;const a=za(24,document.currentScript);if(null==a)throw Error("JSC not found 24");var Kb;{const b={},c=a.attributes;for(let d=c.length-1;0<=d;d--){const e=c[d].name;0===e.indexOf("data-jcp-")&&(b[e.substring(9)]=c[d].value)}Kb=b}(function(b){const c=na(b.config);b=X(258,()=>{{var d=document.getElementById("ad_iframe").contentWindow;var e=C.document;const f=d.document,g=t(c,5,0),k=0===g||2===g?f.getElementById(y(c,6)):e.getElementById(y(c,6));e=0===g?f.getElementById(y(c,8)):e.getElementById(y(c, 
8));let h;try{h=!!C.localStorage}catch(l){}k?(h||vb(k,h,c),d=new Jb(d,k,e,c)):(vb(k,h,c),d=null)}return window.interstitialAdFrame=d});if(0===t(c,5,0)||2===t(c,5,0)||z(c,16)){const d=document.getElementById("ad_iframe");null!=d.contentDocument?ua(d.contentDocument,b):document.getElementById("ad_iframe").addEventListener("load",b)}else b()})(Kb)};}).call(this);
