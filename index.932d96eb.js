var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,g,v,m,y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=y.parcelRequire3a11;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},y.parcelRequire3a11=k);var E={},S={},L=function(e){return e&&e.Math==Math&&e};S=L("object"==typeof globalThis&&globalThis)||L("object"==typeof window&&window)||L("object"==typeof self&&self)||L("object"==typeof y&&y)||function(){return this}()||S||Function("return this")();var O={},j={};O=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var T={},$={};$=!j(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});"use strict";var F=Function.prototype.call;T=$?F.bind(F):function(){return F.apply(F,arguments)};var M={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;t=x&&!M.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:M;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},q={},A={},H=Function.prototype,N=H.call,R=$&&H.bind.bind(N,N),C={},D=(A=$?R:function(e){return function(){return N.apply(e,arguments)}})({}.toString),W=A("".slice);C=function(e){return W(D(e),8,-1)};var z=Object,U=A("".split);q=j(function(){return!z("z").propertyIsEnumerable(0)})?function(e){return"String"==C(e)?U(e,""):z(e)}:z;var G={},B={};B=function(e){return null==e};var J=TypeError;G=function(e){if(B(e))throw J("Can't call method on "+e);return e},I=function(e){return q(G(e))};var Y={},Q={},V={},K={},X={},Z="object"==typeof document&&document.all,ee=(X={all:Z,IS_HTMLDDA:void 0===Z&&void 0!==Z}).all;K=X.IS_HTMLDDA?function(e){return"function"==typeof e||e===ee}:function(e){return"function"==typeof e};var et=X.all;V=X.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:K(e)||e===et}:function(e){return"object"==typeof e?null!==e:K(e)};var er={},en={};en=function(e,t){var r;return arguments.length<2?K(r=S[e])?r:void 0:S[e]&&S[e][t]};var ei={};ei=A({}.isPrototypeOf);var eo={},ea={},es={},ec={};ec="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eu=S.process,el=S.Deno,ed=eu&&eu.versions||el&&el.version,ef=ed&&ed.v8;ef&&(n=(r=ef.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&ec&&(!(r=ec.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=ec.match(/Chrome\/(\d+)/))&&(n=+r[1]),es=n;var ep=S.String;eo=(ea=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol();return!ep(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&es&&es<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eh=Object;er=eo?function(e){return"symbol"==typeof e}:function(e){var t=en("Symbol");return K(t)&&ei(t.prototype,eh(e))};var eg={},ev={},em={},ey=String;em=function(e){try{return ey(e)}catch(e){return"Object"}};var eb=TypeError;ev=function(e){if(K(e))return e;throw eb(em(e)+" is not a function")},eg=function(e,t){var r=e[t];return B(r)?void 0:ev(r)};var e_={},ew=TypeError;e_=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!V(n=T(r,e))||K(r=e.valueOf)&&!V(n=T(r,e))||"string"!==t&&K(r=e.toString)&&!V(n=T(r,e)))return n;throw ew("Can't convert object to primitive value")};var ek={},eE={};eE=!1;var eS={},eL={},eO=Object.defineProperty;eL=function(e,t){try{eO(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var ej="__core-js_shared__";eS=S[ej]||eL(ej,{}),(ek=function(e,t){return eS[e]||(eS[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.1",mode:eE?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eT={},e$={},eF=Object;e$=function(e){return eF(G(e))};var eM=A({}.hasOwnProperty);eT=Object.hasOwn||function(e,t){return eM(e$(e),t)};var ex={},eP=0,eI=Math.random(),eq=A(1..toString);ex=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eP+eI,36)};var eA=S.Symbol,eH=ek("wks"),eN=eo?eA.for||eA:eA&&eA.withoutSetter||ex,eR=TypeError,eC=function(e){return eT(eH,e)||(eH[e]=ea&&eT(eA,e)?eA[e]:eN("Symbol."+e)),eH[e]}("toPrimitive");Q=function(e,t){if(!V(e)||er(e))return e;var r,n=eg(e,eC);if(n){if(void 0===t&&(t="default"),!V(r=T(n,e,t))||er(r))return r;throw eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),e_(e,t)},Y=function(e){var t=Q(e,"string");return er(t)?t:t+""};var eD={},eW={},ez=S.document,eU=V(ez)&&V(ez.createElement);eW=function(e){return eU?ez.createElement(e):{}},eD=!O&&!j(function(){return 7!=Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});var eG=Object.getOwnPropertyDescriptor;e=O?eG:function(e,r){if(e=I(e),r=Y(r),eD)try{return eG(e,r)}catch(e){}if(eT(e,r))return P(!T(t,e,r),e[r])};var eB={},eJ={};eJ=O&&j(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eY={},eQ=String,eV=TypeError;eY=function(e){if(V(e))return e;throw eV(eQ(e)+" is not an object")};var eK=TypeError,eX=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";i=O?eJ?function(e,t,r){if(eY(e),t=Y(t),eY(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eZ(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eX(e,t,r)}:eX:function(e,t,r){if(eY(e),t=Y(t),eY(r),eD)try{return eX(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eB=O?function(e,t,r){return i(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e3={},e4={},e7=Function.prototype,e9=O&&Object.getOwnPropertyDescriptor,e8=eT(e7,"name")&&(!O||O&&e9(e7,"name").configurable),e6={},e5=A(Function.toString);K(eS.inspectSource)||(eS.inspectSource=function(e){return e5(e)}),e6=eS.inspectSource;var te={},tt={},tr=S.WeakMap;tt=K(tr)&&/native code/.test(String(tr));var tn={},ti=ek("keys");tn=function(e){return ti[e]||(ti[e]=ex(e))};var to={};to={};var ta="Object already initialized",ts=S.TypeError,tc=S.WeakMap;if(tt||eS.state){var tu=eS.state||(eS.state=new tc);tu.get=tu.get,tu.has=tu.has,tu.set=tu.set,o=function(e,t){if(tu.has(e))throw ts(ta);return t.facade=e,tu.set(e,t),t},a=function(e){return tu.get(e)||{}},s=function(e){return tu.has(e)}}else{var tl=tn("state");to[tl]=!0,o=function(e,t){if(eT(e,tl))throw ts(ta);return t.facade=e,eB(e,tl,t),t},a=function(e){return eT(e,tl)?e[tl]:{}},s=function(e){return eT(e,tl)}}var tf=(te={set:o,get:a,has:s,enforce:function(e){return s(e)?a(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=a(t)).type!==e)throw ts("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=te.get,th=String,tg=Object.defineProperty,tv=A("".slice),tm=A("".replace),ty=A([].join),tb=O&&!j(function(){return 8!==tg(function(){},"length",{value:8}).length}),t_=String(String).split("String"),tw=e4=function(e,t,r){"Symbol("===tv(th(t),0,7)&&(t="["+tm(th(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eT(e,"name")||e8&&e.name!==t)&&(O?tg(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&eT(r,"arity")&&e.length!==r.arity&&tg(e,"length",{value:r.arity});try{r&&eT(r,"constructor")&&r.constructor?O&&tg(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return eT(n,"source")||(n.source=ty(t_,"string"==typeof t?t:"")),e};Function.prototype.toString=tw(function(){return K(this)&&tp(this).source||e6(this)},"toString"),e3=function(e,t,r,n){n||(n={});var o=n.enumerable,a=void 0!==n.name?n.name:t;if(K(r)&&e4(r,a,n),n.global)o?e[t]=r:eL(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:i(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tk={},tE={},tS={},tL={},tO={},tj={},tT=Math.ceil,t$=Math.floor;tj=Math.trunc||function(e){var t=+e;return(t>0?t$:tT)(t)},tO=function(e){var t=+e;return t!=t||0===t?0:tj(t)};var tF=Math.max,tM=Math.min;tL=function(e,t){var r=tO(e);return r<0?tF(r+t,0):tM(r,t)};var tx={},tP={},tI=Math.min;tP=function(e){return e>0?tI(tO(e),9007199254740991):0},tx=function(e){return tP(e.length)};var tq=function(e){return function(t,r,n){var i,o=I(t),a=tx(o),s=tL(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tA={includes:tq(!0),indexOf:tq(!1)}.indexOf,tH=A([].push);tS=function(e,t){var r,n=I(e),i=0,o=[];for(r in n)!eT(to,r)&&eT(n,r)&&tH(o,r);for(;t.length>i;)eT(n,r=t[i++])&&(~tA(o,r)||tH(o,r));return o};var tN=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(e){return tS(e,tN)},u=Object.getOwnPropertySymbols;var tR=A([].concat);tE=en("Reflect","ownKeys")||function(e){var t=c(eY(e));return u?tR(t,u(e)):t},tk=function(t,r,n){for(var o=tE(r),a=0;a<o.length;a++){var s=o[a];eT(t,s)||n&&eT(n,s)||i(t,s,e(r,s))}};var tC={},tD=/#|\.prototype\./,tW=function(e,t){var r=tU[tz(e)];return r==tB||r!=tG&&(K(t)?j(t):!!t)},tz=tW.normalize=function(e){return String(e).replace(tD,".").toLowerCase()},tU=tW.data={},tG=tW.NATIVE="N",tB=tW.POLYFILL="P";tC=tW,E=function(t,r){var n,i,o,a,s,c=t.target,u=t.global,l=t.stat;if(n=u?S:l?S[c]||eL(c,{}):(S[c]||{}).prototype)for(i in r){if(a=r[i],o=t.dontCallGetSet?(s=e(n,i))&&s.value:n[i],!tC(u?i:c+(l?".":"#")+i,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;tk(a,o)}(t.sham||o&&o.sham)&&eB(a,"sham",!0),e3(n,i,a,t)}};var tJ={},tY={},tQ=Function.prototype,tV=tQ.apply,tK=tQ.call;tY="object"==typeof Reflect&&Reflect.apply||($?tK.bind(tV):function(){return tK.apply(tV,arguments)});var tX={},tZ={},t0=(tZ=function(e){if("Function"===C(e))return A(e)})(tZ.bind);tX=function(e,t){return ev(e),void 0===t?e:$?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=en("document","documentElement");var t2={};t2=A([].slice);var t3={},t4=TypeError;t3=function(e,t){if(e<t)throw t4("Not enough arguments");return e};var t7={};t7=/(?:ipad|iphone|ipod).*applewebkit/i.test(ec);var t9={},t8={},t6=t8={};function t5(){throw Error("setTimeout has not been defined")}function re(){throw Error("clearTimeout has not been defined")}function rt(e){if(l===setTimeout)return setTimeout(e,0);if((l===t5||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:t5}catch(e){l=t5}try{d="function"==typeof clearTimeout?clearTimeout:re}catch(e){d=re}}();var rr=[],rn=!1,ri=-1;function ro(){rn&&f&&(rn=!1,f.length?rr=f.concat(rr):ri=-1,rr.length&&ra())}function ra(){if(!rn){var e=rt(ro);rn=!0;for(var t=rr.length;t;){for(f=rr,rr=[];++ri<t;)f&&f[ri].run();ri=-1,t=rr.length}f=null,rn=!1,function(e){if(d===clearTimeout)return clearTimeout(e);if((d===re||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}(e)}}function rs(e,t){this.fun=e,this.array=t}function rc(){}t6.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];rr.push(new rs(e,t)),1!==rr.length||rn||rt(ra)},rs.prototype.run=function(){this.fun.apply(null,this.array)},t6.title="browser",t6.browser=!0,t6.env={},t6.argv=[],t6.version="",t6.versions={},t6.on=rc,t6.addListener=rc,t6.once=rc,t6.off=rc,t6.removeListener=rc,t6.removeAllListeners=rc,t6.emit=rc,t6.prependListener=rc,t6.prependOnceListener=rc,t6.listeners=function(e){return[]},t6.binding=function(e){throw Error("process.binding is not supported")},t6.cwd=function(){return"/"},t6.chdir=function(e){throw Error("process.chdir is not supported")},t6.umask=function(){return 0},t9=void 0!==t8&&"process"==C(t8);var ru=S.setImmediate,rl=S.clearImmediate,rd=S.process,rf=S.Dispatch,rp=S.Function,rh=S.MessageChannel,rg=S.String,rv=0,rm={},ry="onreadystatechange";j(function(){p=S.location});var rb=function(e){if(eT(rm,e)){var t=rm[e];delete rm[e],t()}},r_=function(e){return function(){rb(e)}},rw=function(e){rb(e.data)},rk=function(e){S.postMessage(rg(e),p.protocol+"//"+p.host)};ru&&rl||(ru=function(e){t3(arguments.length,1);var t=K(e)?e:rp(e),r=t2(arguments,1);return rm[++rv]=function(){tY(t,void 0,r)},h(rv),rv},rl=function(e){delete rm[e]},t9?h=function(e){rd.nextTick(r_(e))}:rf&&rf.now?h=function(e){rf.now(r_(e))}:rh&&!t7?(v=(g=new rh).port2,g.port1.onmessage=rw,h=tX(v.postMessage,v)):S.addEventListener&&K(S.postMessage)&&!S.importScripts&&p&&"file:"!==p.protocol&&!j(rk)?(h=rk,S.addEventListener("message",rw,!1)):h=ry in eW("script")?function(e){t1.appendChild(eW("script"))[ry]=function(){t1.removeChild(this),rb(e)}}:function(e){setTimeout(r_(e),0)});var rE=(tJ={set:ru,clear:rl}).clear;E({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rE},{clearImmediate:rE});"use strict";var rS=tJ.set,rL={},rO={};rO="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rj=S.Function,rT=/MSIE .\./.test(ec)||rO&&function(){var e=S.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();rL=function(e,t){var r=t?2:1;return rT?function(n,i){var o=t3(arguments.length,1)>r,a=K(n)?n:rj(n),s=o?t2(arguments,r):[],c=o?function(){tY(a,this,s)}:a;return t?e(c,i):e(c)}:e};var r$=S.setImmediate?rL(rS,!1):rS;E({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==r$},{setImmediate:r$});var rF=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new j(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return $()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(T([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:$}}function $(){return{value:t,done:!0}}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=T,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rF}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rF:Function("r","regeneratorRuntime = r")(rF)}const rM="https://forkify-api.herokuapp.com/api/v2/recipes/",rx="8d2b43b9-07b6-487d-b10e-a16cadd02c34",rP=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("request took too long! Timpout after 1 second"))},1e3)})]),i=await n.json();if(!n.ok)throw new error("error 1");return i}catch(e){throw e}},rI={recipe:{},search:{query:"",results:[],page:1,RESULT_PER_PAGE:10},bookmarks:[]},rq=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rA=async function(e){try{let t=await rP(`${rM}${e}?key=${rx}`);rI.recipe=rq(t),rI.bookmarks.some(t=>t.id===e)?rI.recipe.bookmark=!0:rI.recipe.bookmark=!1}catch(e){throw Error(`sorry , we could not found the recipe ${e}`)}},rH=async function(e){try{let t=await rP(`${rM}?search=${e}&key=${rx}`);rI.search.query=e,rI.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rI.search.page=1}catch(e){throw e("sorry , we could not found the  search results")}},rN=function(e=rI.search.page){let t=rI.search.results.length,r=10*e,n=r>t?t:r;return rI.search.results.slice((e-1)*10,n)},rR=function(e){rI.recipe.ingredients.forEach(t=>t.quantity=t.quantity*e/rI.recipe.servings),rI.recipe.servings=e},rC=function(){localStorage.setItem("bookmarks",JSON.stringify(rI.bookmarks))},rD=function(e){rI.bookmarks.push(e),e.id===rI.recipe.id&&(rI.recipe.bookmark=!0),rC()},rW=function(e){let t=rI.bookmarks.findIndex(t=>t.id===e);rI.bookmarks.splice(t,1),e===rI.recipe.id&&(rI.recipe.bookmark=!1),rC()};!function(){let e=localStorage.getItem("bookmarks");e&&(rI.bookmarks=JSON.parse(e))}();const rz=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}});console.log(t);let r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:e.cookingTime,servings:e.servings,ingredients:t},n=await rP(`${rM}?key=${rx}`,r);console.log(n),rI.recipe=rq(n),rD(rI.recipe)}catch(e){throw e}};var rU={};rU=new URL(k("27Lyk").resolve("eyyUD"),import.meta.url).toString();var rG={};Object.defineProperty(rG,"Fraction",{get:()=>m,set:e=>m=e,enumerable:!0,configurable:!0}),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=function(){var e=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},t=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r};return function(){if(e(this.denominator)){var r=t(this.denominator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(e(this.numerator)){var r=t(this.numerator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}}(),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},m=Fraction;class rB{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clearInput(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clearInput(){this._parentElement.innerHTML=""}renderSpiner(){let e=`
  <div class="spinner">
          <svg>
            <use href="${b(rU)}#icon-loader"></use>
          </svg>
        </div>`;this._clearInput(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
          <div>
            <svg>
              <use href="${b(rU)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
  `;this._clearInput(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._Message){let t=`<div class="message">
          <div>
            <svg>
              <use href="${b(rU)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
  `;this._clearInput(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){if(console.log("updatinh!!"),!e||Array.isArray(e)&&0===e.length)return;this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}}class rJ extends rB{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return console.log(`_generateMarkup :${this._data.ingredients}`),`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${b(rU)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${b(rU)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${b(rU)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" 
              data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${b(rU)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${b(rU)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${b(rU)}#icon-bookmark${this._data.bookmark?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${b(rU)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateMarkupIngredient(e){return`
              <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${b(rU)}#icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${e.quantity?new(b(rG)).Fraction(e.quantity).toString():""}</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${e.unit}</span>
                   ${e.description}
                  </div>
              </li>`}}var rY=new rJ;class rQ{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerRender(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rV=new rQ,rK=new class extends rB{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return` <li class="preview">
            <a class="preview__link ${e===this._data.id?"preview__link--active":""} " href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                
              </div>
                       <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${b(rU)}#icon-user"></use>
            </svg>
          </div>
            </a>
          </li>`}};class rX extends rB{_parentElement=document.querySelector(".results");_errorMessage="We could not find that result. Please try again!";_message="";_generateMarkup(){return console.log(this._data),this._data.map(e=>rK.render(e,!1)).join("")}}var rZ=new rX;class r0 extends rB{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=this._data.results.length/this._data.RESULT_PER_PAGE;if(1===this._data.page){if(this._data.RESULT_PER_PAGE>=this._data.results.length)return;return` <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page+1}</span>
            <svg class="search__icon">
              <use href="${b(rU)}#icon-arrow-right"></use>
            </svg>
          </button>`}return this._data.page>=e?`<button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${b(rU)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page-1}</span>
          </button>`:`<button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${b(rU)}#icon-arrow-left"></use>
            </svg>
            <span>${this._data.page-1}</span>
          </button>
          <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page+1}</span>
            <svg class="search__icon">
              <use href="${b(rU)}#icon-arrow-right"></use>
            </svg>
          </button> `}addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(console.log(r),!r)return;let n=+r.dataset.goto;e(n)})}}var r1=new r0;class r2 extends rB{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet find a nice recpie and bookmark it";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>rK.render(e,!1)).join("")}}var r3=new r2;class r4 extends rB{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_Message="the recipy was uploaded succesfuly!!!";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHiddeWindow()}toggelWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggelWindow.bind(this))}_addHandlerHiddeWindow(){this._btnClose.addEventListener("click",this.toggelWindow.bind(this)),this._overlay.addEventListener("click",this.toggelWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}}var r7=new r4;const r9=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rY.renderSpiner(),await rA(e),rZ.update(rN()),rY.render(rI.recipe),r3.update(rI.bookmarks)}catch(e){throw rY.renderError(e),e}},r8=async function(){try{rZ.renderSpiner();let e=rV.getQuery();await rH(e),rZ.render(rN()),r1.render(rI.search)}catch(e){throw e}},r6=async function(e){try{r7.renderSpiner(),await rz(e),console.log(rI.recipe),rY.render(rI.recipe),r7.renderMessage("you sucssesfuly added the recipy!!!"),r3.render(rI.bookmarks),window.history.pushState(null,"",`#${rI.recipe.id}`),setTimeout(function(){r7.toggelWindow()},2500)}catch(e){r7.renderError(e.message)}};r3.addHandlerRender(function(){r3.render(rI.bookmarks)}),rY.addHandlerRender(r9),rY.addHandlerUpdateServings(function(e){rR(e),rY.update(rI.recipe)}),rY.addHandlerAddBookmark(function(){rI.recipe.bookmark?rW(rI.recipe.id):rD(rI.recipe),rY.update(rI.recipe),r3.render(rI.bookmarks)}),rV.addHandlerRender(r8),r1.addHandlerClick(function(e){console.log(e),rI.search.page=e,rZ.render(rN()),r1.render(rI.search)}),r7.addHandlerUpload(r6);
//# sourceMappingURL=index.932d96eb.js.map
