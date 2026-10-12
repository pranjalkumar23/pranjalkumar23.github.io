var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var C={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return w(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function pe(e){var t=C.T,n={};n.types=t===null?null:t.types,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,fe)}catch(e){fe(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}}function me(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else pe(me.bind(null,e))}var he={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=he,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.addTransitionType=me,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=pe,e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var S=!1,ee=-1,te=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<te)}function w(){if(g=!1,S){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(w)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=w,re=function(){ae.postMessage(null)}}else re=function(){_(w,0)};function oe(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function te(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ne(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var w=Object.assign,re=Symbol.for(`react.element`),ie=Symbol.for(`react.transitional.element`),ae=Symbol.for(`react.portal`),oe=Symbol.for(`react.fragment`),se=Symbol.for(`react.strict_mode`),ce=Symbol.for(`react.profiler`),le=Symbol.for(`react.consumer`),ue=Symbol.for(`react.context`),de=Symbol.for(`react.forward_ref`),fe=Symbol.for(`react.suspense`),pe=Symbol.for(`react.suspense_list`),me=Symbol.for(`react.memo`),he=Symbol.for(`react.lazy`),ge=Symbol.for(`react.activity`),_e=Symbol.for(`react.legacy_hidden`),ve=Symbol.for(`react.memo_cache_sentinel`),ye=Symbol.for(`react.view_transition`),be=Symbol.for(`react.recoverable`),xe=Symbol.iterator;function Se(e){return typeof e!=`object`||!e?null:(e=xe&&e[xe]||e[`@@iterator`],typeof e==`function`?e:null)}var Ce=Symbol.for(`react.client.reference`);function we(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case oe:return`Fragment`;case ce:return`Profiler`;case se:return`StrictMode`;case fe:return`Suspense`;case pe:return`SuspenseList`;case ge:return`Activity`;case ye:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ae:return`Portal`;case ue:return e.displayName||`Context`;case le:return(e._context.displayName||`Context`)+`.Consumer`;case de:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case me:return t=e.displayName||null,t===null?we(e.type)||`Memo`:t;case he:t=e._payload,e=e._init;try{return we(e(t))}catch{}}return null}var Te=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee={pending:!1,data:null,method:null,action:null},De=[],Oe=-1;function ke(e){return{current:e}}function Ae(e){0>Oe||(e.current=De[Oe],De[Oe]=null,Oe--)}function D(e,t){Oe++,De[Oe]=e.current,e.current=t}var je=ke(null),Me=ke(null),Ne=ke(null),Pe=ke(null);function Fe(e,t){switch(D(Ne,t),D(Me,e),D(je,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Ae(je),D(je,e)}function Ie(){Ae(je),Ae(Me),Ae(Ne)}function Le(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,D(Pe,e)),t=je.current;var n=dp(t,e.type);t!==n&&(D(Me,e),D(je,n))}function O(e){Me.current===e&&(Ae(je),Ae(Me)),Pe.current===e&&(Ae(Pe),sh._currentValue=Ee)}var Re,ze;function Be(e){if(Re===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Re=t&&t[1]||``,ze=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Re+e+ze}var Ve=!1;function He(e,t){if(!e||Ve)return``;Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Be(n):``}function Ue(e,t){switch(e.tag){case 26:case 27:case 5:return Be(e.type);case 16:return Be(`Lazy`);case 13:return e.child!==t&&t!==null?Be(`Suspense Fallback`):Be(`Suspense`);case 19:return Be(`SuspenseList`);case 0:case 15:return He(e.type,!1);case 11:return He(e.type.render,!1);case 1:return He(e.type,!0);case 31:return Be(`Activity`);case 30:return Be(`ViewTransition`);default:return``}}function We(e){try{var t=``,n=null;do t+=Ue(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ge=Object.prototype.hasOwnProperty,Ke=t.unstable_scheduleCallback,qe=t.unstable_cancelCallback,Je=t.unstable_shouldYield,Ye=t.unstable_requestPaint,Xe=t.unstable_now,Ze=t.unstable_getCurrentPriorityLevel,Qe=t.unstable_ImmediatePriority,$e=t.unstable_UserBlockingPriority,et=t.unstable_NormalPriority,tt=t.unstable_LowPriority,nt=t.unstable_IdlePriority,rt=t.log,it=t.unstable_setDisableYieldValue,at=null,ot=null;function st(e){if(typeof rt==`function`&&it(e),ot&&typeof ot.setStrictMode==`function`)try{ot.setStrictMode(at,e)}catch{}}var ct=Math.clz32?Math.clz32:dt,lt=Math.log,ut=Math.LN2;function dt(e){return e>>>=0,e===0?32:31-(lt(e)/ut|0)|0}var ft=256,k=262144,pt=4194304;function mt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=mt(n))):i=mt(o):i=mt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=mt(n))):i=mt(o)):i=mt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function gt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _t(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-ct(n),i=1<<r;t|=e[r],n&=~i}return t}function vt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=pt;return pt<<=1,!(pt&62914560)&&(pt=4194304),e}function bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function St(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ct(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ct(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function wt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Tt(e,t){var n=t&-t;return n=n&42?1:Et(n),(n&(e.suspendedLanes|t))===0?n:0}function Et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ot(){var e=E.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function kt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var At=Math.random().toString(36).slice(2),jt=`__reactFiber$`+At,Mt=`__reactProps$`+At,Nt=`__reactContainer$`+At,Pt=`__reactEvents$`+At,Ft=`__reactListeners$`+At,It=`__reactHandles$`+At,Lt=`__reactResources$`+At,Rt=`__reactMarker$`+At,zt=`__reactLoad$`+At;function A(e){delete e[jt],delete e[Mt],delete e[Ft],delete e[It]}function Bt(e){var t;if(t=e[jt])return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[jt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Vt(e){if(e=e[jt]||e[Nt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ht(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ut(e){var t=e[Lt];return t||=e[Lt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Wt(e){e[Rt]=!0}function Gt(e){e[zt]=void 0}var Kt=new Set,qt={};function Jt(e,t){Yt(e,t),Yt(e+`Capture`,t)}function Yt(e,t){for(qt[e]=t,e=0;e<t.length;e++)Kt.add(t[e])}var Xt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Zt={},Qt={};function $t(e){return Ge.call(Qt,e)?!0:Ge.call(Zt,e)?!1:Xt.test(e)?Qt[e]=!0:(Zt[e]=!0,!1)}var j=!1;function en(){var e=j;return j=!1,e}function tn(e,t,n){if($t(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function nn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function rn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function an(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function on(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function M(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sn(e){if(!e._valueTracker){var t=on(e)?`checked`:`value`;e._valueTracker=M(e,t,``+e[t])}}function cn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=on(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var ln=/[\n"\\]/g;function un(e){return e.replace(ln,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function dn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+an(t)):e.value!==``+an(t)&&(e.value=``+an(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):pn(e,an(n)):o===`number`&&e.value==t?pn(e,an(e.value)):pn(e,an(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+an(s):e.removeAttribute(`name`)}function fn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){sn(e);return}n=n==null?``:``+an(n),t=t==null?n:``+an(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),sn(e)}function pn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function mn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hn(e,t,n){if(t!=null&&(t=``+an(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+an(n)}function gn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(Te(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=an(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),sn(e)}function _n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function yn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||vn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function bn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,j=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(yn(e,a,r),j=!0)}else for(var o in t)t.hasOwnProperty(o)&&yn(e,o,t[o])}function xn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wn(e){return Cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Tn(){}var En=null;function Dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var On=null,kn=null;function An(e){var t=Vt(e);if(t&&(e=t.stateNode)){var n=e[Mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(dn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+un(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Mt]||null;if(!a)throw Error(i(90));dn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&cn(r)}break a;case`textarea`:hn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&mn(e,!!n.multiple,t,!1)}}}var jn=!1;function Mn(e,t,n){if(jn)return e(t,n);jn=!0;try{return e(t)}finally{if(jn=!1,(On!==null||kn!==null)&&(zd(),On&&(t=On,e=kn,kn=On=null,An(t),e)))for(t=0;t<e.length;t++)An(e[t])}}function Nn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Pn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Fn=!1;if(Pn)try{var In={};Object.defineProperty(In,"passive",{get:function(){Fn=!0}}),window.addEventListener(`test`,In,In),window.removeEventListener(`test`,In,In)}catch{Fn=!1}var Ln=null,Rn=null,zn=null;function Bn(){if(zn)return zn;var e,t=Rn,n=t.length,r,i=`value`in Ln?Ln.value:Ln.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return zn=i.slice(e,1<r?1-r:void 0)}function Vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function Un(){return!1}function Wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Hn:Un,this.isPropagationStopped=Un,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kn=Wn(Gn),qn=w({},Gn,{view:0,detail:0}),Jn=Wn(qn),Yn,Xn,Zn,Qn=w({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Zn&&(Zn&&e.type===`mousemove`?(Yn=e.screenX-Zn.screenX,Xn=e.screenY-Zn.screenY):Xn=Yn=0,Zn=e),Yn)},movementY:function(e){return`movementY`in e?e.movementY:Xn}}),$n=Wn(Qn),er=Wn(w({},Qn,{dataTransfer:0})),tr=Wn(w({},qn,{relatedTarget:0})),nr=Wn(w({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0})),rr=Wn(w({},Gn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),ir=Wn(w({},Gn,{data:0})),ar={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},or={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},sr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function cr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sr[e])?!!t[e]:!1}function lr(){return cr}var ur=Wn(w({},qn,{key:function(e){if(e.key){var t=ar[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?or[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(e){return e.type===`keypress`?Vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),dr=Wn(w({},Qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),fr=Wn(w({},Gn,{submitter:0})),pr=Wn(w({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr})),mr=Wn(w({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),hr=Wn(w({},Qn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),gr=Wn(w({},Gn,{newState:0,oldState:0,source:0})),_r=[9,13,27,32],vr=Pn&&`CompositionEvent`in window,yr=null;Pn&&`documentMode`in document&&(yr=document.documentMode);var br=Pn&&`TextEvent`in window&&!yr,xr=Pn&&(!vr||yr&&8<yr&&11>=yr),Sr=` `,Cr=!1;function wr(e,t){switch(e){case`keyup`:return _r.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Tr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Er=!1;function Dr(e,t){switch(e){case`compositionend`:return Tr(t);case`keypress`:return t.which===32?(Cr=!0,Sr):null;case`textInput`:return e=t.data,e===Sr&&Cr?null:e;default:return null}}function Or(e,t){if(Er)return e===`compositionend`||!vr&&wr(e,t)?(e=Bn(),zn=Rn=Ln=null,Er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return xr&&t.locale!==`ko`?null:t.data;default:return null}}var kr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!kr[e.type]:t===`textarea`}function jr(e,t,n,r){On?kn?kn.push(r):kn=[r]:On=r,t=Jf(t,`onChange`),0<t.length&&(n=new Kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Nr=null;function Pr(e){Vf(e,0)}function Fr(e){if(cn(Ht(e)))return e}function Ir(e,t){if(e===`change`)return t}var Lr=!1;if(Pn){var Rr;if(Pn){var zr=`oninput`in document;if(!zr){var Br=document.createElement(`div`);Br.setAttribute(`oninput`,`return;`),zr=typeof Br.oninput==`function`}Rr=zr}else Rr=!1;Lr=Rr&&(!document.documentMode||9<document.documentMode)}function Vr(){Mr&&(Mr.detachEvent(`onpropertychange`,Hr),Nr=Mr=null)}function Hr(e){if(e.propertyName===`value`&&Fr(Nr)){var t=[];jr(t,Nr,e,Dn(e)),Mn(Pr,t)}}function Ur(e,t,n){e===`focusin`?(Vr(),Mr=t,Nr=n,Mr.attachEvent(`onpropertychange`,Hr)):e===`focusout`&&Vr()}function Wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Fr(Nr)}function Gr(e,t){if(e===`click`)return Fr(t)}function Kr(e,t){if(e===`input`||e===`change`)return Fr(t)}function qr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Jr=typeof Object.is==`function`?Object.is:qr;function Yr(e,t){if(Jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ge.call(t,i)||!Jr(e[i],t[i]))return!1}return!0}function Xr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qr(e,t){var n=Zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Zr(n)}}function $r(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$r(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ei(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var ni=Pn&&`documentMode`in document&&11>=document.documentMode,ri=null,ii=null,ai=null,oi=!1;function si(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oi||ri==null||ri!==Xr(r)||(r=ri,`selectionStart`in r&&ti(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&Yr(ai,r)||(ai=r,r=Jf(ii,`onSelect`),0<r.length&&(t=new Kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ri)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var li={animationend:ci(`Animation`,`AnimationEnd`),animationiteration:ci(`Animation`,`AnimationIteration`),animationstart:ci(`Animation`,`AnimationStart`),transitionrun:ci(`Transition`,`TransitionRun`),transitionstart:ci(`Transition`,`TransitionStart`),transitioncancel:ci(`Transition`,`TransitionCancel`),transitionend:ci(`Transition`,`TransitionEnd`)},ui={},di={};Pn&&(di=document.createElement(`div`).style,`AnimationEvent`in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),`TransitionEvent`in window||delete li.transitionend.transition);function fi(e){if(ui[e])return ui[e];if(!li[e])return e;var t=li[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in di)return ui[e]=t[n];return e}var pi=fi(`animationend`),mi=fi(`animationiteration`),hi=fi(`animationstart`),gi=fi(`transitionrun`),_i=fi(`transitionstart`),vi=fi(`transitioncancel`),yi=fi(`transitionend`),bi=new Map,xi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);xi.push(`scrollEnd`);function Si(e,t){bi.set(e,t),Jt(t,[e])}var Ci=0;function wi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=xd.identifierPrefix;var n=Ci++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Ti(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Ei(e,t){return e=Ti(e),t=Ti(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Di=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Oi=[],ki=0,Ai=0;function ji(){for(var e=ki,t=Ai=ki=0;t<e;){var n=Oi[t];Oi[t++]=null;var r=Oi[t];Oi[t++]=null;var i=Oi[t];Oi[t++]=null;var a=Oi[t];if(Oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Fi(n,i,a)}}function Mi(e,t,n,r){Oi[ki++]=e,Oi[ki++]=t,Oi[ki++]=n,Oi[ki++]=r,Ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ni(e,t,n,r){return Mi(e,t,n,r),Ii(e)}function Pi(e,t){return Mi(e,null,null,t),Ii(e)}function Fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ct(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ii(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Li={};function Ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(e,t,n,r){return new Ri(e,t,n,r)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,t){var n=e.alternate;return n===null?(n=zi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ui(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Bi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,je.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ge:return e=zi(31,n,t,a),e.elementType=ge,e.lanes=o,e;case oe:return Wi(n.children,a,o,t);case se:s=8,a|=24;break;case ce:return e=zi(12,n,t,a|2),e.elementType=ce,e.lanes=o,e;case fe:return e=zi(13,n,t,a),e.elementType=fe,e.lanes=o,e;case pe:return e=zi(19,n,t,a),e.elementType=pe,e.lanes=o,e;case _e:case ye:return e=a|32,e=zi(30,n,t,e),e.elementType=ye,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ue:s=10;break a;case le:s=9;break a;case de:s=11;break a;case me:s=14;break a;case he:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=zi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Wi(e,t,n,r){return e=zi(7,e,r,t),e.lanes=n,e}function Gi(e,t,n){return e=zi(6,e,null,t),e.lanes=n,e}function Ki(e){var t=zi(18,null,null,0);return t.stateNode=e,t}function qi(e,t,n){return t=zi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ji=new WeakMap;function Yi(e,t){if(typeof e==`object`&&e){var n=Ji.get(e);return n===void 0?(t={value:e,source:t,stack:We(t)},Ji.set(e,t),t):n}return{value:e,source:t,stack:We(t)}}var Xi=[],Zi=0,Qi=null,$i=0,ea=[],ta=0,na=null,ra=1,ia=``;function aa(e,t){Xi[Zi++]=$i,Xi[Zi++]=Qi,Qi=e,$i=t}function oa(e,t,n){ea[ta++]=ra,ea[ta++]=ia,ea[ta++]=na,na=e;var r=ra;e=ia;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var a=32-ct(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ra=1<<32-ct(t)+i|n<<i|r,ia=a+e}else ra=1<<a|n<<i|r,ia=e}function sa(e){e.return!==null&&(aa(e,1),oa(e,1,0))}function ca(e){for(;e===Qi;)Qi=Xi[--Zi],Xi[Zi]=null,$i=Xi[--Zi],Xi[Zi]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,ia=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function la(e,t){ea[ta++]=ra,ea[ta++]=ia,ea[ta++]=na,ra=t.id,ia=t.overflow,na=e}var ua=null,N=null,P=!1,da=null,fa=!1,pa=Error(i(519));function ma(e){throw ba(Yi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),pa}function ha(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[jt]=e,t[Mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),fn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),gn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Tn),t=!0):t=!1,t||ma(e,!0)}function ga(e){for(ua=e.return;ua;)switch(ua.tag){case 5:case 31:case 13:fa=!1;return;case 27:case 3:fa=!0;return;default:ua=ua.return}}function _a(e){if(e!==ua)return!1;if(!P)return ga(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&N&&ma(e),ga(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=dm(e)}else t===27?(t=N,Sp(e.type)?(e=um,um=null,N=e):N=t):N=ua?lm(e.stateNode.nextSibling):null;return!0}function va(){N=ua=null,P=!1}function ya(){var e=da;return e!==null&&(md===null?md=e:md.push.apply(md,e),da=null),e}function ba(e){da===null?da=[e]:da.push(e)}var xa=ke(null),Sa=null,Ca=null;function wa(e,t,n){D(xa,t._currentValue),t._currentValue=n}function Ta(e){e._currentValue=xa.current,Ae(xa)}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Da(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ea(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ea(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Oa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Pe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&Da(t,e,n,r),t.flags|=262144,e!==null}function ka(e){for(e=e.firstContext;e!==null;){if(!Jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){Sa=e,Ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ja(e){return Na(Sa,e)}function Ma(e,t){return Sa===null&&Aa(e),Na(e,t)}function Na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ca===null){if(e===null)throw Error(i(308));Ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ca=Ca.next=t;return n}var Pa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Fa=t.unstable_scheduleCallback,Ia=t.unstable_NormalPriority,La={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ra(){return{controller:new Pa,data:new Map,refCount:0}}function za(e){e.refCount--,e.refCount===0&&Fa(Ia,function(){e.controller.abort()})}function Ba(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Va=null;function Ha(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ua=null,Wa=0,Ga=0,Ka=null;function qa(e,t){if(Ua===null){var n=Ua=[];Wa=0,Ga=Pf(),Ka={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Wa++,t.then(Ja,Ja),t}function Ja(){if(--Wa===0&&(Va=null,Ua!==null)){Ka!==null&&(Ka.status=`fulfilled`);var e=Ua;Ua=null,Ga=0,Ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Xa=T.S;T.S=function(e,t){if(_d=Xe(),typeof t==`object`&&t&&typeof t.then==`function`&&qa(e,t),Va!==null)for(var n=bf;n!==null;)Ba(n,Va),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ba(r,n),r=r.next;if(Ga!==0){r=Va,r===null&&(r=Va=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Xa!==null&&Xa(e,t)};var Za=ke(null);function Qa(){var e=Za.current;return e===null?G.pooledCache:e}function $a(e,t){t===null?D(Za,Za.current):D(Za,t.pool)}function eo(){var e=Qa();return e===null?null:{parent:La._currentValue,pool:e}}var to=Error(i(460)),no=Error(i(474)),ro=Error(i(542)),io={then:function(){}};function ao(e){return e=e.status,e===`fulfilled`||e===`rejected`}function oo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Tn,Tn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,uo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(Tn,Tn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,uo(e),e}throw co=t,to}}function so(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(co=e,to):e}}var co=null;function lo(){if(co===null)throw Error(i(459));var e=co;return co=null,e}function uo(e){if(e===to||e===ro)throw Error(i(483))}var fo=null,po=0;function mo(e){var t=po;return po+=1,fo===null&&(fo=[]),oo(fo,e,t)}function ho(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function go(e,t){throw t.$$typeof===re?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function _o(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Gi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===oe?(e=d(e,t,n.props.children,r,n.key),ho(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===he&&so(i)===t.type)?(t=a(t,n.props),ho(t,n),t.return=e,t):(t=Ui(n.type,n.key,n.props,null,e.mode,r),ho(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=qi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Wi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ie:return n=Ui(t.type,t.key,t.props,null,e.mode,n),ho(n,t),n.return=e,n;case ae:return t=qi(t,e.mode,n),t.return=e,t;case he:return t=so(t),f(e,t,n)}if(Te(t)||Se(t))return t=Wi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,mo(t),n);if(t.$$typeof===ue)return f(e,Ma(e,t),n);go(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ie:return n.key===i?l(e,t,n,r):null;case ae:return n.key===i?u(e,t,n,r):null;case he:return n=so(n),p(e,t,n,r)}if(Te(n)||Se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,mo(n),r);if(n.$$typeof===ue)return p(e,t,Ma(e,n),r);go(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ie:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ae:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case he:return r=so(r),m(e,t,n,r,i)}if(Te(r)||Se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,mo(r),i);if(r.$$typeof===ue)return m(e,t,n,Ma(t,r),i);go(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&aa(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&aa(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&aa(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&aa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&aa(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&aa(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===oe&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ie:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===oe){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),ho(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===he&&so(l)===r.type){n(e,r.sibling),c=a(r,o.props),ho(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===oe?(c=Wi(o.props.children,e.mode,c,o.key),ho(c,o),c.return=e,e=c):(c=Ui(o.type,o.key,o.props,null,e.mode,c),ho(c,o),c.return=e,e=c)}return s(e);case ae:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=qi(o,e.mode,c),c.return=e,e=c}return s(e);case he:return o=so(o),_(e,r,o,c)}if(Te(o))return h(e,r,o,c);if(Se(o)){if(l=Se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,mo(o),c);if(o.$$typeof===ue)return _(e,r,Ma(e,o),c);go(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Gi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{po=0;var i=_(e,t,n,r);return fo=null,i}catch(t){if(t===to||t===ro)throw t;var a=zi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var vo=_o(!0),yo=_o(!1),bo=!1;function xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function So(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Co(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ii(e),Fi(e,null,n),t}return Mi(e,r,t,n),Ii(e)}function F(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wt(e,n)}}function To(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Eo=!1;function Do(){if(Eo){var e=Ka;if(e!==null)throw e}}function Oo(e,t,n,r){Eo=!1;var i=e.updateQueue;bo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Ga&&(Eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:bo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),cd|=o,e.lanes=o,e.memoizedState=d}}function ko(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ao(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ko(n[e],t)}var jo=ke(null),Mo=ke(0);function No(e,t){e=od,D(Mo,e),D(jo,t),od=e|t.baseLanes}function Po(){D(Mo,od),D(jo,jo.current)}function Fo(){od=Mo.current,Ae(jo),Ae(Mo)}var Io=ke(null),Lo=null;function Ro(e){var t=e.alternate;D(I,I.current&1),D(Io,e),Lo===null&&(t===null||jo.current!==null||t.memoizedState!==null)&&(Lo=e)}function zo(e){D(I,I.current),D(Io,e),Lo===null&&(Lo=e)}function Bo(e){e.tag===22?(D(I,I.current),D(Io,e),Lo===null&&(Lo=e)):Vo()}function Vo(){D(I,I.current),D(Io,Io.current)}function Ho(e){Ae(Io),Lo===e&&(Lo=null),Ae(I)}var I=ke(0);function Uo(e,t){D(Io,Io.current),D(I,t)}function Wo(e){Ae(I),Ae(Io),Lo===e&&(Lo=null)}function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=0,L=null,R=null,qo=null,Jo=!1,Yo=!1,Xo=!1,Zo=0,Qo=0,$o=null,es=0;function ts(){throw Error(i(321))}function ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jr(e[n],t[n]))return!1;return!0}function rs(e,t,n,r,i,a){return Ko=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?yc:bc,Xo=!1,a=n(r,i),Xo=!1,Yo&&(a=as(t,n,r,i)),is(e),a}function is(e){T.H=vc;var t=R!==null&&R.next!==null;if(Ko=0,qo=R=L=null,Jo=!1,Qo=0,$o=null,t)throw Error(i(300));e===null||Lc||(e=e.dependencies,e!==null&&ka(e)&&(Lc=!0))}function as(e,t,n,r){L=e;var a=0;do{if(Yo&&($o=null),Qo=0,Yo=!1,25<=a)throw Error(i(301));if(a+=1,qo=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=xc,o=t(n,r)}while(Yo);return o}function os(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?fs(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function ss(){var e=Zo!==0;return Zo=0,e}function cs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ls(e){if(Jo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Jo=!1}Ko=0,qo=R=L=null,Yo=!1,Qo=Zo=0,$o=null}function us(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qo===null?L.memoizedState=qo=e:qo=qo.next=e,qo}function z(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=qo===null?L.memoizedState:qo.next;if(t!==null)qo=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},qo===null?L.memoizedState=qo=e:qo=qo.next=e}return qo}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(e){var t=Qo;return Qo+=1,$o===null&&($o=[]),e=oo($o,e,t),t=L,(qo===null?t.memoizedState:qo.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?yc:bc),e}function ps(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return fs(e);if(e.$$typeof===be)return;if(e.$$typeof===ue)return ja(e)}throw Error(i(438,String(e)))}function ms(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ds(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ve;return t.index++,n}function hs(e,t){return typeof t==`function`?t(e):t}function gs(e){return _s(z(),R,e)}function _s(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Ko&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ga&&(d=!0);else if((Ko&p)===p){u=u.next,p===Ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,cd|=p;f=u.action,Xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,cd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Jr(o,e.memoizedState)&&(Lc=!0,d&&(n=Ka,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function vs(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Jr(o,t.memoizedState)||(Lc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ys(e,t,n){var r=L,a=z(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Jr((R||a).memoizedState,n);if(s&&(a.memoizedState=n,Lc=!0),a=a.queue,Ws(Ss.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||qo!==null&&!!(qo.memoizedState.tag&1),zs(e?9:8,{destroy:void 0},xs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,G===null)throw Error(i(349));o||Ko&127||bs(r,t,n)}return n}function bs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=ds(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xs(e,t,n,r){t.value=n,t.getSnapshot=r,Cs(t)&&ws(e)}function Ss(e,t,n){return n(function(){Cs(t)&&ws(e)})}function Cs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jr(e,n)}catch{return!0}}function ws(e){var t=Pi(e,2);t!==null&&Pd(t,e,2)}function Ts(e){var t=us();if(typeof e==`function`){var n=e;if(e=n(),Xo){st(!0);try{n()}finally{st(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t}function Es(e,t,n,r){return e.baseState=n,_s(e,R,typeof r==`function`?r:hs)}function Ds(e,t,n,r,a){if(hc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Os(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Os(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};o.types=a===null?null:a.types,T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),ks(e,t,s)}catch(n){js(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),ks(e,t,a)}catch(n){js(e,t,n)}}function ks(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){As(e,t,n)},function(n){return js(e,t,n)}):As(e,t,n)}function As(e,t,n){t.status=`fulfilled`,t.value=n,Ms(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Os(e,n)))}function js(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ms(t),t=t.next;while(t!==r)}e.action=null}function Ms(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ns(e,t){return t}function Ps(e,t){if(P){var n=G.formState;if(n!==null){a:{var r=L;if(P){if(N){b:{for(var i=N,a=fa;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=lm(i.nextSibling),r=i.data===`F!`;break a}}ma(r)}r=!1}r&&(t=n[0])}}return n=us(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:t},n.queue=r,n=fc.bind(null,L,r),r.dispatch=n,r=Ts(!1),a=mc.bind(null,L,!1,r.queue),r=us(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ds.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Fs(e){return Is(z(),R,e)}function Is(e,t,n){if(t=_s(e,t,Ns)[0],e=gs(hs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=fs(t)}catch(e){throw e===to?ro:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,zs(9,{destroy:void 0},Ls.bind(null,i,n),null)),[r,a,e]}function Ls(e,t){e.action=t}function Rs(e){var t=z(),n=R;if(n!==null)return Is(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function zs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=ds(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Bs(){return z().memoizedState}function Vs(e,t,n,r){var i=us();L.flags|=e,i.memoizedState=zs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Hs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&ns(r,R.memoizedState.deps)?i.memoizedState=zs(t,a,n,r):(L.flags|=e,i.memoizedState=zs(1|t,a,n,r))}function Us(e,t){Vs(8390656,8,e,t)}function Ws(e,t){Hs(2048,8,e,t)}function Gs(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=ds(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ks(e){var t=z().memoizedState;return Gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function qs(e,t){return Hs(4,2,e,t)}function Js(e,t){return Hs(4,4,e,t)}function Ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xs(e,t,n){n=n==null?null:n.concat([e]),Hs(4,4,Ys.bind(null,t,e),n)}function Zs(){}function Qs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $s(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ns(t,r[1]))return r[0];if(r=e(),Xo){st(!0);try{e()}finally{st(!1)}}return n.memoizedState=[r,t],r}function ec(e,t,n){return n===void 0||Ko&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),L.lanes|=e,cd|=e,n)}function tc(e,t,n,r){return Jr(n,t)?n:jo.current===null?!(Ko&106)||Ko&1073741824&&!(q&261930)?(Lc=!0,e.memoizedState=n):(e=Md(),L.lanes|=e,cd|=e,t):(e=ec(e,n,r),Jr(e,t)||(Lc=!0),e)}function nc(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};s.types=o===null?null:o.types,T.T=s,mc(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?pc(e,t,Ya(c,r),jd(e)):pc(e,t,r,jd(e))}catch(n){pc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function rc(){}function ic(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ac(e).queue;nc(e,a,t,Ee,n===null?rc:function(){return oc(e),n(r)})}function ac(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ee,baseState:Ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:Ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function oc(e){var t=ac(e);t.next===null&&(t=e.alternate.memoizedState),pc(e,t.next.queue,{},jd())}function sc(){return ja(sh)}function cc(){return z().memoizedState}function lc(){return z().memoizedState}function uc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=Co(n);var r=wo(t,e,n);r!==null&&(Pd(r,t,n),F(r,t,n)),t={cache:Ra()},e.payload=t;return}t=t.return}}function dc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hc(e)?gc(t,n):(n=Ni(e,t,n,r),n!==null&&(Pd(n,e,r),_c(n,t,r)))}function fc(e,t,n){pc(e,t,n,jd())}function pc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hc(e))gc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Jr(s,o))return Mi(e,t,i,0),G===null&&ji(),!1}catch{}if(n=Ni(e,t,i,r),n!==null)return Pd(n,e,r),_c(n,t,r),!0}return!1}function mc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hc(e)){if(t)throw Error(i(479))}else t=Ni(e,n,r,2),t!==null&&Pd(t,e,2)}function hc(e){var t=e.alternate;return e===L||t!==null&&t===L}function gc(e,t){Yo=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _c(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wt(e,n)}}var vc={readContext:ja,use:ps,useCallback:ts,useContext:ts,useEffect:ts,useImperativeHandle:ts,useLayoutEffect:ts,useInsertionEffect:ts,useMemo:ts,useReducer:ts,useRef:ts,useState:ts,useDebugValue:ts,useDeferredValue:ts,useTransition:ts,useSyncExternalStore:ts,useId:ts,useHostTransitionStatus:ts,useFormState:ts,useActionState:ts,useOptimistic:ts,useMemoCache:ts,useCacheRefresh:ts,useEffectEvent:ts},yc={readContext:ja,use:ps,useCallback:function(e,t){return us().memoizedState=[e,t===void 0?null:t],e},useContext:ja,useEffect:Us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Vs(4194308,4,Ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vs(4194308,4,e,t)},useInsertionEffect:function(e,t){Vs(4,2,e,t)},useMemo:function(e,t){var n=us();t=t===void 0?null:t;var r=e();if(Xo){st(!0);try{e()}finally{st(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=us();if(n!==void 0){var i=n(t);if(Xo){st(!0);try{n(t)}finally{st(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=dc.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=us();return e={current:e},t.memoizedState=e},useState:function(e){e=Ts(e);var t=e.queue,n=fc.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zs,useDeferredValue:function(e,t){return ec(us(),e,t)},useTransition:function(){var e=Ts(!1);return e=nc.bind(null,L,e.queue,!0,!1),us().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=us();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||bs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Us(Ss.bind(null,r,o,e),[e]),r.flags|=2048,zs(9,{destroy:void 0},xs.bind(null,r,o,n,t),null),n},useId:function(){var e=us(),t=G.identifierPrefix;if(P){var n=ia,r=ra;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Zo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=es++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:sc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e){var t=us();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mc.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:ms,useCacheRefresh:function(){return us().memoizedState=uc.bind(null,L)},useEffectEvent:function(e){var t=us(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},bc={readContext:ja,use:ps,useCallback:Qs,useContext:ja,useEffect:Ws,useImperativeHandle:Xs,useInsertionEffect:qs,useLayoutEffect:Js,useMemo:$s,useReducer:gs,useRef:Bs,useState:function(){return gs(hs)},useDebugValue:Zs,useDeferredValue:function(e,t){return tc(z(),R.memoizedState,e,t)},useTransition:function(){var e=gs(hs)[0],t=z().memoizedState;return[typeof e==`boolean`?e:fs(e),t]},useSyncExternalStore:ys,useId:cc,useHostTransitionStatus:sc,useFormState:Fs,useActionState:Fs,useOptimistic:function(e,t){return Es(z(),R,e,t)},useMemoCache:ms,useCacheRefresh:lc,useEffectEvent:Ks},xc={readContext:ja,use:ps,useCallback:Qs,useContext:ja,useEffect:Ws,useImperativeHandle:Xs,useInsertionEffect:qs,useLayoutEffect:Js,useMemo:$s,useReducer:vs,useRef:Bs,useState:function(){return vs(hs)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=z();return R===null?ec(n,e,t):tc(n,R.memoizedState,e,t)},useTransition:function(){var e=vs(hs)[0],t=z().memoizedState;return[typeof e==`boolean`?e:fs(e),t]},useSyncExternalStore:ys,useId:cc,useHostTransitionStatus:sc,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){var n=z();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Es(n,R,e,t)},useMemoCache:ms,useCacheRefresh:lc,useEffectEvent:Ks};function Sc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Co(r);i.payload=t,n!=null&&(i.callback=n),t=wo(e,i,r),t!==null&&(Pd(t,e,r),F(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Co(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=wo(e,i,r),t!==null&&(Pd(t,e,r),F(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=Co(n);r.tag=2,t!=null&&(r.callback=t),t=wo(e,r,n),t!==null&&(Pd(t,e,n),F(t,e,n))}};function wc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(i,a):!0}function Tc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cc.enqueueReplaceState(t,t.state,null)}function Ec(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=w({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Dc(e){Di(e)}function Oc(e){console.error(e)}function kc(e){Di(e)}function Ac(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function jc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Mc(e,t,n){return n=Co(n),n.tag=3,n.payload={element:null},n.callback=function(){Ac(e,t)},n}function Nc(e){return e=Co(e),e.tag=3,e}function Pc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){jc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){jc(t,n,r),typeof i!=`function`&&(bd===null?bd=new Set([this]):bd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Fc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Oa(t,n,a,!0),n=Io.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Lo===null?Kd():n.alternate===null&&sd===0&&(sd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===io?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===io?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(P)return t=Io.current,t===null?(r!==pa&&(t=Error(i(423),{cause:r}),ba(Yi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Yi(r,n),a=Mc(e.stateNode,r,a),To(e,a),sd!==4&&(sd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==pa&&(e=Error(i(422),{cause:r}),ba(Yi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Yi(o,n),pd===null?pd=[o]:pd.push(o),sd!==4&&(sd=2),t===null)return!0;r=Yi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Mc(n.stateNode,r,e),To(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(bd===null||!bd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Nc(a),Pc(a,e,n,r),To(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Ic=Error(i(461)),Lc=!1;function Rc(e,t,n,r){t.child=e===null?yo(t,null,n,r):vo(t,e.child,n,r)}function zc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Aa(t),r=rs(e,t,n,o,a,i),s=ss(),e!==null&&!Lc?(cs(e,t,i),fl(e,t,i)):(P&&s&&sa(t),t.flags|=1,Rc(e,t,r,i),t.child)}function Bc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Bi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Vc(e,t,a,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Yr:n,n(o,r)&&e.ref===t.ref)return fl(e,t,i)}return t.flags|=1,e=Vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Vc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Yr(a,r)&&e.ref===t.ref){if(Lc=!1,t.pendingProps=r=a,pl(e,i))e.flags&131072&&(Lc=!0);else return t.lanes=e.lanes,fl(e,t,i)}}return Jc(e,t,n,r,i)}function Hc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$a(t,a===null?null:a.cachePool),a===null?Po():No(t,a),Bo(t);else return r=t.lanes=536870912,Uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&$a(t,null),Po(),Vo()):($a(t,a.cachePool),No(t,a),Vo(),t.memoizedState=null);return Rc(e,t,i,n),t.child}function B(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(e,t,n,r,i){var a=Qa();return a=a===null?null:{parent:La._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&$a(t,null),Po(),Bo(t),e!==null&&Oa(e,t,r,!0),t.childLanes=i,null}function Wc(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(e,t,n){return vo(t,e.child,null,n),e=Wc(t,t.pendingProps),e.flags|=2,Ho(t),t.memoizedState=null,e}function Kc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=Wc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},B(null,e);if(zo(t),(e=N)?(e=am(e,fa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na===null?null:{id:ra,overflow:ia},retryLane:536870912,hydrationErrors:null},n=Ki(e),n.return=t,t.child=n,ua=t,N=null)):e=null,e===null)throw ma(t);return t.lanes=536870912,null}return Wc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(zo(t),a){if(t.flags&256)t.flags&=-257,t=Gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Lc||Oa(e,t,n,!1),a=(n&e.childLanes)!==0,Lc||a){if(jo.current===null){if(r=G,r!==null&&(s=Tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Pi(e,s),Pd(r,e,s),Ic;Kd()}t=Gc(e,t,n)}else e=o.treeContext,N=lm(s.nextSibling),ua=t,P=!0,da=null,fa=!1,e!==null&&la(t,e),t=Wc(t,r),t.flags|=134221824;return t}return e=Vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jc(e,t,n,r,i){return Aa(t),n=rs(e,t,n,r,void 0,i),r=ss(),e!==null&&!Lc?(cs(e,t,i),fl(e,t,i)):(P&&r&&sa(t),t.flags|=1,Rc(e,t,n,i),t.child)}function Yc(e,t,n,r,i,a){return Aa(t),t.updateQueue=null,n=as(t,r,n,i),is(e),r=ss(),e!==null&&!Lc?(cs(e,t,a),fl(e,t,a)):(P&&r&&sa(t),t.flags|=1,Rc(e,t,n,a),t.child)}function Xc(e,t,n,r,i){if(Aa(t),t.stateNode===null){var a=Li,o=n.contextType;typeof o==`object`&&o&&(a=ja(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Cc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},xo(t),o=n.contextType,a.context=typeof o==`object`&&o?ja(o):Li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Sc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Cc.enqueueReplaceState(a,a.state,null),Oo(t,r,a,i),Do(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ec(n,s);a.props=c;var l=a.context,u=n.contextType;o=Li,typeof u==`object`&&u&&(o=ja(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Tc(t,a,r,o),bo=!1;var f=t.memoizedState;a.state=f,Oo(t,r,a,i),Do(),l=t.memoizedState,s||f!==l||bo?(typeof d==`function`&&(Sc(t,n,d,r),l=t.memoizedState),(c=bo||wc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,So(e,t),o=t.memoizedProps,u=Ec(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Li,typeof l==`object`&&l&&(c=ja(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Tc(t,a,r,c),bo=!1,f=t.memoizedState,a.state=f,Oo(t,r,a,i),Do();var p=t.memoizedState;o!==d||f!==p||bo||e!==null&&e.dependencies!==null&&ka(e.dependencies)?(typeof s==`function`&&(Sc(t,n,s,r),p=t.memoizedState),(u=bo||wc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ka(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,qc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=vo(t,e.child,null,i),t.child=vo(t,null,n,i)):Rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=fl(e,t,i),e}function Zc(e,t,n,r){return va(),t.flags|=256,Rc(e,t,n,r),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:eo()}}function el(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=dd),e}function tl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(I.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(P){if(i?Ro(t):Vo(),(e=N)?(e=am(e,fa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na===null?null:{id:ra,overflow:ia},retryLane:536870912,hydrationErrors:null},n=Ki(e),n.return=t,t.child=n,ua=t,N=null)):e=null,e===null)throw ma(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Vo(),i=t.mode,a=rl({mode:`hidden`,children:a},i),r=Wi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=$c(n),r.childLanes=el(e,o,n),t.memoizedState=Qc,B(null,r)):(Ro(t),nl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return al(e,t,a,o,r,c,s,n)}return i?(Vo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Vi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Wi(i,a,n,null),i.flags|=2):i=Vi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,B(null,r),r=t.child,i=e.child.memoizedState,i===null?i=$c(n):(a=i.cachePool,a===null?a=eo():(s=La._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=el(e,o,n),t.memoizedState=Qc,B(e.child,r)):(Ro(t),n=e.child,e=n.sibling,n=Vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function nl(e,t){return t=rl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=zi(22,e,null,t),e.lanes=0,e}function il(e,t,n){return vo(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function al(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Ro(t),t.flags&=-257,il(e,t,c)):t.memoizedState===null?(Vo(),o=a.fallback,s=t.mode,a=rl({mode:`visible`,children:a.children},s),o=Wi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,vo(t,e.child,null,c),a=t.child,a.memoizedState=$c(c),a.childLanes=el(e,r,c),t.memoizedState=Qc,B(null,a)):(Vo(),t.child=e.child,t.flags|=128,null);if(Ro(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ba({value:a,source:null,stack:null})),il(e,t,c)}if(Lc||Oa(e,t,c,!1),r=(c&e.childLanes)!==0,Lc||r){if(jo.current!==null)return il(e,t,c);if(r=G,r!==null&&(a=Tt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Pi(e,a),Pd(r,e,a),Ic;return om(o)||Kd(),il(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,N=lm(o.nextSibling),ua=t,P=!0,da=null,fa=!1,e!==null&&la(t,e),t=nl(t,a.children),t.flags|=134221824,t)}function ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n)}function sl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Go(n)===null&&(t=e),e=e.sibling}return t}function cl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ll(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ul(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=I.current;if(t.flags&128)return Uo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Uo(t,o),i===`backwards`&&e!==null?(ll(e),Rc(e,t,r,n),ll(e)):Rc(e,t,r,n),r=P?$i:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ol(e,n,t);else if(e.tag===19)ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ll(t)),cl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,a,r);break;case`together`:cl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,a,r)}return t.child}function dl(e,t,n){var r=t.pendingProps;return wa(t,t.type,r.value),Rc(e,t,r.children,n),t.child}function fl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ka(e)))}function ml(e,t,n){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),wa(t,La,e.memoizedState.cache),va();break;case 27:case 5:Le(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,zo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ro(t),t.flags|=128,null;r=Oa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?tl(e,t,n):(Ro(t),e=fl(e,t,n),e===null?null:e.sibling)}Ro(t);break;case 19:if(t.flags&128)return ul(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ul(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Uo(t,I.current),r)break;return null;case 22:return t.lanes=0,Hc(e,t,n,t.pendingProps);case 24:wa(t,La,e.memoizedState.cache)}return fl(e,t,n)}function hl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Lc=!0;else{if(!pl(e,n)&&!(t.flags&128))return Lc=!1,ml(e,t,n);Lc=!!(e.flags&131072)}}else Lc=!1,P&&t.flags&1048576&&oa(t,$i,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=so(t.elementType),t.type=e,typeof e==`function`)Bi(e)?(r=Ec(e,r),t.tag=1,t=Xc(null,t,e,r,n)):(t.tag=0,t=Jc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===de){t.tag=11,t=zc(null,t,e,r,n);break a}if(a===me){t.tag=14,t=Bc(null,t,e,r,n);break a}if(a===ue){t.tag=10,t.type=e,t=dl(null,t,n);break a}}throw t=we(e)||e,Error(i(306,t,``))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ec(r,t.pendingProps),Xc(e,t,r,a,n);case 3:a:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,So(e,t),Oo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,wa(t,La,r),r!==o.cache&&Da(t,[La],n,!0),Do(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Zc(e,t,r,n);break a}if(r!==a){a=Yi(Error(i(424)),t),ba(a),t=Zc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=lm(e.firstChild),ua=t,P=!0,da=null,fa=!0,n=yo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(va(),r===a){t=fl(e,t,n);break a}Rc(e,t,r,n)}t=t.child}return t;case 26:return qc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(t.stateNode=fp(t.type,t.pendingProps,Ne.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Le(t),e===null&&P&&(r=t.stateNode=hm(t.type,t.pendingProps,Ne.current),ua=t,fa=!0,a=N,Sp(t.type)?(um=a,N=lm(r.firstChild)):N=a),Rc(e,t,t.pendingProps.children,n),qc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=rm(r,t.type,t.pendingProps,fa),r===null?a=!1:(t.stateNode=r,ua=t,N=lm(r.firstChild),fa=!1,a=!0)),a||ma(t)),Le(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=rs(e,t,os,null,null,n),sh._currentValue=a),qc(e,t),Rc(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=im(n,t.pendingProps,fa),n===null?e=!1:(t.stateNode=n,ua=t,N=null,e=!0)),e||ma(t)),null;case 13:return tl(e,t,n);case 4:return Fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vo(t,null,r,n):Rc(e,t,r,n),t.child;case 11:return zc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,qc(e,t),Rc(e,t,r,n),t.child;case 8:return Rc(e,t,t.pendingProps.children,n),t.child;case 12:return Rc(e,t,t.pendingProps.children,n),t.child;case 10:return dl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Aa(t),a=ja(a),r=r(a),t.flags|=1,Rc(e,t,r,n),t.child;case 14:return Bc(e,t,t.type,t.pendingProps,n);case 15:return Vc(e,t,t.type,t.pendingProps,n);case 19:return ul(e,t,n);case 31:return Kc(e,t,n);case 22:return Hc(e,t,n,t.pendingProps);case 24:return Aa(t),r=ja(La),e===null?(a=Qa(),a===null&&(a=G,o=Ra(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},xo(t),wa(t,La,a)):((e.lanes&n)!==0&&(So(e,t),Oo(t,null,null,n),Do()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,wa(t,La,r),r!==a.cache&&Da(t,[La],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),wa(t,La,r))),Rc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:P&&sa(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:qc(e,t),Rc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function gl(e){e.flags|=4}function _l(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw co=io,no}}else e.flags&=-16777217}function vl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw co=io,no}}function yl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:yt(),e.lanes|=t,fd|=t)}function bl(e,t){if(!P)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xl(e,t,n){var r=t.pendingProps;switch(ca(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ta(La),Ie(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_a(t)?gl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ya())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(gl(t),o===null?(V(t),_l(t,a,null,r,n)):(V(t),vl(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(gl(t),V(t),vl(t,o)):(e=e.memoizedProps,e!==r&&gl(t),V(t),_l(t,a,e,r,n)),null;case 27:if(O(t),n=Ne.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),t.subtreeFlags&=-33554433,null}e=je.current,_a(t)?ha(t,e):(e=hm(a,r,n),t.stateNode=e,gl(t))}return V(t),t.subtreeFlags&=-33554433,null;case 5:if(O(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),t.subtreeFlags&=-33554433,null}if(o=je.current,_a(t))ha(t,o);else{var s=lp(Ne.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[jt]=t,o[Mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&gl(t)}}return V(t),t.subtreeFlags&=-33554433,_l(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Ne.current,_a(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ua,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[jt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ma(t,!0)}else e=lp(e).createTextNode(r),e[jt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=_a(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[jt]=t}else va(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=ya(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ho(t),t):(Ho(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=_a(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[jt]=t}else va(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=ya(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ho(t),t):(Ho(t),null)}return Ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yl(t,t.updateQueue),V(t),null);case 4:return Ie(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,V(t),null;case 10:return Ta(t.type),V(t),null;case 19:if(Wo(t),r=t.memoizedState,r===null)return V(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)bl(r,!1);else{if(sd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Go(e),o!==null){for(t.flags|=128,bl(r,!1),e=o.updateQueue,t.updateQueue=e,yl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hi(n,e),n=n.sibling;return Uo(t,I.current&1|2),P&&aa(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Xe()>vd&&(t.flags|=128,a=!0,bl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,yl(t,e),bl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!P)return V(t),null}else 2*Xe()-r.renderingStartTime>vd&&n!==536870912&&(t.flags|=128,a=!0,bl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Xe(),e.sibling=null,o=I.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||P?Uo(t,o):(n=o,D(Io,t),D(I,n),Lo===null&&(Lo=t)),P&&aa(t,r.treeForkCount),e}return V(t),null;case 22:case 23:return Ho(t),Fo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&yl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Ae(Za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ta(La),V(t),null;case 25:return null;case 30:return t.flags|=33554432,V(t),null}throw Error(i(156,t.tag))}function Sl(e,t){switch(ca(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ta(La),Ie(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return O(t),null;case 31:if(t.memoizedState!==null){if(Ho(t),t.alternate===null)throw Error(i(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Wo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ie(),null;case 10:return Ta(t.type),null;case 22:case 23:return Ho(t),Fo(),e!==null&&Ae(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ta(La),null;case 25:return null;default:return null}}function Cl(e,t){switch(ca(t),t.tag){case 3:Ta(La),Ie();break;case 26:case 27:case 5:O(t);break;case 4:Ie();break;case 31:t.memoizedState!==null&&Ho(t);break;case 13:Ho(t);break;case 19:Wo(t);break;case 10:Ta(t.type);break;case 22:case 23:Ho(t),Fo(),e!==null&&Ae(Za);break;case 24:Ta(La)}}function wl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function El(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ao(t,n)}catch(t){Z(e,e.return,t)}}}function Dl(e,t,n){n.props=Ec(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=wi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Al(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function jl(e){for(var t=e.return;t!==null&&(Pl(t)&&em(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Ml(e){for(var t=e.return;t!==null&&(Pl(t)&&tm(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Nl(e){return e.tag===5||e.tag===3||e.tag===27}function Pl(e){return e&&e.tag===7&&e.stateNode!==null}function Fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Il(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Mt]=t}catch(t){Z(e,e.return,t)}}function Ll(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Rl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tn)),Al(e,r),j=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Al(e,r),j=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Bl(e,t,n,r),e=e.sibling;e!==null;)Bl(e,t,n,r),e=e.sibling}function Vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[jt]=e,t[Mt]=n}catch(t){Z(e,e.return,t)}}var Hl=!1,Ul=null;function Wl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Hl=!0)}var Gl=null;function Kl(){var e=Gl;return Gl=null,e}var ql=0;function Jl(e,t,n,r,i){return ql=0,Yl(e.child,t,n,r,i)}function Yl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Hl=!0,Tp(o,ql===0?t:t+`_`+ql,n),ql++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Yl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Xl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Xl(e.child,t)),e=e.sibling}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Zl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=Ei(t.default,t.share),t!==`none`&&(Jl(e,n,t,null,!1)||Xl(e.child,!1))}e=e.sibling}}function Ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=wi(r,n),a=Ei(r.default,n.paired?r.share:r.enter);a===`none`?Zl(e):Jl(e,i,a,null,!1)?(Zl(e),n.paired||t||Nd(e,r.onEnter)):Xl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e,t),e=e.sibling;else Zl(e)}function $l(e){if(Ul!==null&&Ul.size!==0){var t=Ul;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Ei(n.default,n.share);if(a!==`none`&&(Jl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Xl(e.child,!1)),t.delete(r),t.size===0)break}}}$l(e)}e=e.sibling}}}function eu(e){if(e.tag===30){var t=e.memoizedProps,n=wi(t,e.stateNode),r=Ul===null?void 0:Ul.get(n),i=Ei(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Jl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ul.delete(n),Nd(e,t.onShare)):Xl(e.child,!1)),Ul!==null&&$l(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else Ul!==null&&$l(e)}function tu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=wi(t,e.stateNode);t=Ei(t.default,t.update),e.flags&=-5,t!==`none`&&Jl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&tu(e);e=e.sibling}}function nu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Xl(e.child,!1))}nu(e)}e=e.sibling}}function ru(e){if(e.tag===30)e.stateNode.paired=null,Xl(e.child,!1),nu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ru(e),e=e.sibling;else nu(e)}function iu(e){for(e=e.child;e!==null;)e.tag===30?Xl(e.child,!1):e.subtreeFlags&33554432&&iu(e),e=e.sibling}function au(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&ql<a.length){var l=a[ql],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,ql===0?n:n+`_`+ql,i),s&&e.flags&4||(Gl===null&&(Gl=[]),Gl.push(c,ql===0?r:r+`_`+ql,t.memoizedProps)),ql++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:au(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ou(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=wi(n,r),a=Ei(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;ql=0,i=au(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ou(e,t);e=e.sibling}}var su=!1,H=!1,cu=!1,lu=!1,uu=typeof WeakSet==`function`?WeakSet:Set,du=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,sp=gh,e=ei(e),ti(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,du=t,t=n?9270:1024;du!==null;){if(e=du,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&eu(r[a]);if(e.alternate===null&&e.flags&2)n&&Wl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&eu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Wl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,du=r):(n&&tu(e),_u(n))}}Ul=null}function _u(e){for(;du!==null;){var t=du,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Ec(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=wi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=Ei(a.default,a.update),a!==`none`&&Jl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,du=r;break}du=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lu(e,n),r&4&&wl(5,n);break;case 1:if(Lu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ec(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&El(n),r&512&&Ol(n,n.return);break;case 3:if(Lu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ao(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Vl(n);case 26:case 5:Lu(e,n),t===null&&r&4&&Fl(n),r&512&&Ol(n,n.return);break;case 12:Lu(e,n);break;case 31:Lu(e,n),r&4&&Eu(e,n);break;case 13:Lu(e,n),r&4&&Du(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||su,!r){var a=t!==null&&t.memoizedState!==null||H;t=su,i=H,su=r,(H=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),zu(e,n,r)):Lu(e,n),su=t,H=i}break;case 30:Lu(e,n),r&512&&Ol(n,n.return);break;case 7:r&512&&Ol(n,n.return);default:Lu(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,j=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&A(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Cu=!1;function wu(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount==`function`)try{ot.onCommitFiberUnmount(at,n)}catch{}switch(n.tag){case 26:H||kl(n,t),wu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!H&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||kl(n,t),Ml(n);var r=U,i=Cu;Sp(n.type)&&(U=n.stateNode,Cu=!1),wu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),U=r,Cu=i;break;case 5:H||kl(n,t),Ml(n);case 6:if(n.tag===6&&Ml(n),r=U,i=Cu,U=null,wu(e,t,n),U=r,Cu=i,U!==null){if(Cu)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode),j=!0}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode),j=!0}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(Cu?(e=U,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(U,n.stateNode));break;case 4:r=U,i=Cu,U=n.stateNode.containerInfo,Cu=!0,wu(e,t,n),U=r,Cu=i;break;case 0:case 11:case 14:case 15:Tl(2,n,t),H||Tl(4,n,t),wu(e,t,n);break;case 1:H||(kl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Dl(n,t,r)),wu(e,t,n);break;case 21:wu(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,wu(e,t,n),H=r;break;case 30:kl(n,t),wu(e,t,n);break;case 7:H||kl(n,t),wu(e,t,n);break;default:wu(e,t,n)}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Ou(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uu),t;default:throw Error(i(435,e.tag))}}function ku(e,t){var n=Ou(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Au(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){U=l.stateNode,Cu=!1;break a}break;case 5:U=l.stateNode,Cu=!1;break a;case 3:case 4:U=l.stateNode.containerInfo,Cu=!0;break a}l=l.return}if(U===null)throw Error(i(160));Tu(s,c,o),U=null,Cu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e,n),t=t.sibling}var ju=null;function Mu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Au(t,e,n),Nu(e),a&4&&(Tl(3,e,e.return),wl(3,e),Tl(5,e,e.return));break;case 1:Au(t,e,n),Nu(e),a&512&&(H||r===null||kl(r,r.return)),a&64&&su&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ju,Au(t,e,n),Nu(e),a&512&&(H||r===null||kl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(su)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Rt]||r[jt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[jt]=e,Wt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[jt]=e,Wt(r),t=r}e.stateNode=t}}else su||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Il(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||H||t.parentNode.removeChild(t)):a.count--,n===null?su||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Au(t,e,n),Nu(e),a&512&&(H||r===null||kl(r,r.return)),r!==null&&a&4&&Il(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=cu,cu=!1,Au(t,e,n),cu=o,Nu(e),a&512&&(H||r===null||kl(r,r.return)),e.flags&32){t=e.stateNode;try{_n(t,``),j=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Il(e,t,r===null?t:r.memoizedProps)),a&1024&&(lu=!0);break;case 6:if(Au(t,e,n),Nu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,j=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(j=!1,Wm=null,o=ju,ju=bm(t.containerInfo),Au(t,e,n),ju=o,Nu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}lu&&(lu=!1,Pu(e)),j=!1;break;case 4:a=cu,cu=su,r=en(),o=ju,ju=bm(e.stateNode.containerInfo),Au(t,e,n),Nu(e),ju=o,j&&pu&&(mu=!0),j=r,cu=a;break;case 12:Au(t,e,n),Nu(e);break;case 31:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Au(t,e,n),Nu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(gd=Xe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=su,l=H,u=cu;su=c||o,cu=u||o,H=l||s,Au(t,e,n),H=l,cu=u,su=c,Nu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||su||H||(t=s||H,n=su,r=H,su=o||su,H=t,Ru(e,2),su=n,H=r),!o&&cu||yu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:a&512&&(H||r===null||kl(r,r.return)),a=en(),o=pu,s=(n&335544064)===n,c=e.memoizedProps,pu=s&&Ei(c.default,c.update)!==`none`,Au(t,e,n),Nu(e),s&&r!==null&&j&&(e.flags|=4),pu=o,j=a;break;case 21:break;case 7:a&512&&(H||r===null||kl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Au(t,e,n),Nu(e)}}function Nu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ll(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Pl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Nl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Bl(e,Rl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(_n(l,``),n.flags&=-33),Bl(e,Rl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;zl(e,Rl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Fu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling;else ou(t,!1)}function Iu(e,t){var n=e.alternate;if(n===null)Ql(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Kl(),Fu(t,e),!fu&&!mu){if(e=Gl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}Gl=null;break;case 5:Fu(t,e);break;case 4:r=fu,fu=!1,Fu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Fu(t,e):Ql(e,!1));break;case 30:r=fu,i=Kl(),fu=!1,Fu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=wi(a,o),o=wi(n.memoizedProps,o);var s=Ei(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ql=0,t=au(e,n,t,o,s,a,!0),ql!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Gl=i):i!==null&&(i.push.apply(i,Gl),Gl=i),fu=e.flags&32?!0:r;break;default:Fu(t,e)}}function Lu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ru(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Tl(4,n,n.return),Ru(n,r);break;case 1:kl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Dl(n,n.return,i),Ru(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:kl(n,n.return),n.tag!==5&&n.tag!==27||Ml(n),Ru(n,r);break;case 6:Ml(n);break;case 26:kl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||H||i.parentNode.removeChild(i),Ru(n,r);break;case 22:n.memoizedState===null&&Ru(n,r);break;case 30:kl(n,n.return),Ru(n,r);break;case 7:kl(n,n.return);default:Ru(n,r)}e=e.sibling}}function zu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:zu(i,a,n),wl(4,a);break;case 1:if(zu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)ko(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&El(a),Ol(a,a.return);break;case 27:n&2&&Vl(a);case 5:a.tag!==5&&a.tag!==27||jl(a),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 6:jl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||su||Km(bm(c.ownerDocument),a.type,c),zu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 12:zu(i,a,n);break;case 31:zu(i,a,n),s&&o&4&&Eu(i,a);break;case 13:zu(i,a,n),s&&o&4&&Du(i,a);break;case 22:a.memoizedState===null&&zu(i,a,n),Ol(a,a.return);break;case 30:zu(i,a,n),Ol(a,a.return);break;case 7:Ol(a,a.return);default:zu(i,a,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&za(n))}function Vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&za(e))}function Hu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Uu(e,t,n,r),t=t.sibling;else i&&iu(t)}function Uu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hu(e,t,n,r),a&2048&&wl(9,t);break;case 1:Hu(e,t,n,r);break;case 3:Hu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&za(a)));break;case 12:if(a&2048){Hu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Hu(e,t,n,r);break;case 31:Hu(e,t,n,r);break;case 13:Hu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ru(t),o._visibility&2?Hu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ru(s),o._visibility&2?Hu(e,t,n,r):Gu(e,t)),a&2048&&Bu(s,t);break;case 24:Hu(e,t,n,r),a&2048&&Vu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Xl(a.child,!0),Xl(t.child,!0))),Hu(e,t,n,r);break;default:Hu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),wl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Bu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Vu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Bu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Vu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ju,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ju;ju=bm(e.stateNode.containerInfo),qu(e,t,n),ju=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ul===null&&(Ul=new Map),Ul.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Tl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;du!==null;){var n=du;switch(n.tag){case 0:case 11:case 15:Tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:za(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,du=r;else a:for(n=e;du!==null;){r=du;var i=r.sibling,a=r.return;if(Su(r),r===n){du=null;break a}if(i!==null){i.return=a,du=i;break a}du=a}}}var ed={getCacheForType:function(e){var t=ja(La),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ja(La).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=0,pd=null,md=null,hd=!1,gd=0,_d=0,vd=1/0,yd=null,bd=null,Y=0,xd=null,Sd=null,Cd=0,wd=0,Td=null,Ed=null,X=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return W&2&&q!==0?q&-q:T.T===null?Ot():Pf()}function Md(){if(dd===0){if(!(q&536870912)||P){var e=k;k<<=1,!(k&3932160)&&(k=262144),dd=e}else dd=536870912}return e=Io.current,e!==null&&(e.flags|=32),dd}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(wi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,q,dd,!1)),xt(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ld|=n),sd===4&&Rd(e,q,dd,!1)),Ef(e))}function Fd(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||gt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){id&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=pd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=o,ld|=o,a=4;break a}o=md,md=a,o!==null&&(md===null?md=o:md.push.apply(md,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,dd,!rd);break a;case 2:md=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=gd+300-Xe(),10<a)){if(Rd(r,t,dd,!rd),ht(r,0,!0)!==0)break a;Cd=t,r.timeoutHandle=gp(Id.bind(null,r,n,md,yd,hd,t,dd,ld,fd,rd,o,`Throttled`,-0,0),a);break a}Id(r,n,md,yd,hd,t,dd,ld,fd,rd,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Tn},Ul=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?gd-Xe():(a&4194048)===a?_d-Xe():0,m=eh(d,m),m!==null)){Cd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=_t(e,t),t&=~ud,t&=~ld,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ct(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ct(e,n,t)}function zd(){return W&6?!0:(Df(0,!1),!1)}function Bd(){if(K!==null){if(J===0)var e=K.return;else e=K,Ca=Sa=null,ls(e),fo=null,po=0,e=K;for(;e!==null;)Cl(e.alternate,e),e=e.return;K=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Cd=0,Bd(),G=e,K=n=Vi(e.current,null),q=t,J=0,nd=null,rd=!1,id=gt(e,t),ad=!1,fd=dd=ud=ld=cd=sd=0,md=pd=null,hd=!1,od=_t(e,t),ji(),n}function Hd(e,t){L=null,T.H=vc,t===to||t===ro?(t=lo(),J=3):t===no?(t=lo(),J=4):J=t===Ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(sd=1,Ac(e,Yi(t,e.current)))}function Ud(){var e=Io.current;return e===null?!0:(q&4194048)===q?Lo===null:(q&62914560)===q||q&536870912?e===Lo:!1}function Wd(){var e=T.H;return T.H=vc,e===null?vc:e}function Gd(){var e=T.A;return T.A=ed,e}function Kd(){sd=4,rd||(q&4194048)!==q&&Io.current!==null||(id=!0),!(cd&134217727)&&!(ld&134217727)||G===null||Rd(G,q,dd,!1)}function qd(e,t,n){var r=W;W|=2;var i=Wd(),a=Gd();(G!==e||q!==t)&&(yd=null,Vd(e,t)),t=!1;var o=sd;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Io.current===null&&(t=!0);var l=J;if(J=0,nd=null,$d(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,$d(e,s,c,l)}}Jd(),o=sd;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,Ca=Sa=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,ji()),o}function Jd(){for(;K!==null;)Zd(K)}function Yd(e,t){var n=W;W|=2;var r=Wd(),a=Gd();G!==e||q!==t?(yd=null,vd=Xe()+500,Vd(e,t)):id=gt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=nd;b:switch(J){case 1:J=0,nd=null,$d(e,t,o,1);break;case 2:case 9:if(ao(o)){J=0,nd=null,Qd(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Ef(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:ao(o)?(J=0,nd=null,Qd(t)):(J=0,nd=null,$d(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Ym(s):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,ef(u))}break b}}J=0,nd=null,$d(e,t,o,5);break;case 6:J=0,nd=null,$d(e,t,o,6);break;case 8:Bd(),sd=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return Ca=Sa=null,T.H=r,T.A=a,W=n,K===null?(G=null,q=0,ji(),sd):0}function Xd(){for(;K!==null&&!Je();)Zd(K)}function Zd(e){var t=hl(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:ls(t);var r=t;r===ua&&(P?(ga(r),r.tag===5&&r.stateNode!=null&&(N=r.stateNode)):(ga(r),P=!0));default:Cl(n,t),t=K=Hi(t,od),t=hl(n,t,od)}e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function $d(e,t,n,r){Ca=Sa=null,ls(t),fo=null,po=0;var i=t.return;try{if(Fc(e,i,t,n,q)){sd=1,Ac(e,Yi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;sd=1,Ac(e,Yi(n,e.current)),K=null;return}t.flags&32768?(P||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=Io.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,rd);return}e=t.return;var n=xl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);sd===0&&(sd=5)}function tf(e,t){do{var n=Sl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);sd=6,K=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(Y!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===G&&(K=G=null,q=0),Sd=t,xd=e,Cd=n,Td=a,Ed=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(wd=s,s|=Ai,St(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ha(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(et,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Hl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,E.p=i,T.T=r}}Y=1,Hl?X=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(Y!==0){var t=xd.onRecoverableError;t(e,{componentStack:null})}}function of(){Y===3&&(Y=0,Iu(Sd,xd),Y=4)}function sf(){if(Y===1){Y=0;var e=xd,t=Sd,n=Cd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=T.T,T.T=null;var i=E.p;E.p=2;var a=W;W|=4;try{pu=mu=!1,Mu(t,e,n),n=cp;var o=ei(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&$r(s.ownerDocument.documentElement,s)){if(c!==null&&ti(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Qr(s,h),v=Qr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{W=a,E.p=i,T.T=r}}e.current=t,Y=2}}function cf(){if(Y===2){Y=0;var e=xd,t=Sd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}Y=3}}function lf(){if(Y===4||Y===3){Y=0;var e=X;X=null,Ye();var t=xd,n=Sd,r=Cd,i=Ed,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Y=5:(Y=0,Sd=xd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(bd=null),Dt(r),n=n.stateNode,ot&&typeof ot.onCommitFiberRoot==`function`)try{ot.onCommitFiberRoot(at,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=T.T,a=E.p,E.p=2,T.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{T.T=n,E.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Cd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,za(t)))}function df(){return X!==null&&(X.skipTransition(),X=null),sf(),cf(),lf(),ff()}function ff(){if(Y!==5)return!1;var e=xd,t=wd;wd=0;var n=Dt(Cd),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=Td,Td=null;var o=xd,s=Cd;if(Y=0,Sd=xd=null,Cd=0,W&6)throw Error(i(331));var c=W;if(W|=4,Zu(o.current),Uu(o,o.current,s,n),W=c,Df(0,!1),ot&&typeof ot.onPostCommitFiberRoot==`function`)try{ot.onPostCommitFiberRoot(at,o)}catch{}return!0}finally{E.p=a,T.T=r,uf(e,t)}}function pf(e,t,n){t=Yi(n,t),t=Mc(e.stateNode,t,2),e=wo(e,t,2),e!==null&&(xt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(bd===null||!bd.has(r))){e=Yi(n,e),n=Nc(2),r=wo(t,n,2),r!==null&&(Pc(n,r,t,e),xt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(sd===4||sd===3&&(q&62914560)===q&&300>Xe()-gd?W&2?ud|=n:Vd(e,0):ud|=n,fd===q&&(fd=0)),Ef(e)}function gf(e,t){t===0&&(t=yt()),e=Pi(e,t),e!==null&&(xt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ke(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ct(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=q,a=ht(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||gt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Xe(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}Y!==0&&Y!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ct(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=vt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=ht(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&qe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||gt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&qe(r),Dt(n)){case 2:case 8:n=$e;break;case 32:n=et;break;case 268435456:n=nt;break;default:n=et}return r=jf.bind(null,e),n=Ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&qe(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(Y!==0&&Y!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=q;return r=ht(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Xe()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){W&6?Ke(Qe,Of):kf()})}function Pf(){if(Tf===0){var e=Ga;e===0&&(e=ft,ft<<=1,!(ft&261888)&&(ft=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:wn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Mt]||null).action),o=r.submitter;o&&(t=(t=o[Mt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);ic(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ic(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<xi.length;Lf++){var Rf=xi[Lf];Si(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}Si(pi,`onAnimationEnd`),Si(mi,`onAnimationIteration`),Si(hi,`onAnimationStart`),Si(`dblclick`,`onDoubleClick`),Si(`focusin`,`onFocus`),Si(`focusout`,`onBlur`),Si(gi,`onTransitionRun`),Si(_i,`onTransitionStart`),Si(vi,`onTransitionCancel`),Si(yi,`onTransitionEnd`),Yt(`onMouseEnter`,[`mouseout`,`mouseover`]),Yt(`onMouseLeave`,[`mouseout`,`mouseover`]),Yt(`onPointerEnter`,[`pointerout`,`pointerover`]),Yt(`onPointerLeave`,[`pointerout`,`pointerover`]),Jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Di(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Di(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Pt];n===void 0&&(n=t[Pt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Kt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Mn(function(){var r=a,i=Dn(n),s=[];a:{var c=bi.get(e);if(c!==void 0){var l=Kn,u=e;switch(e){case`keypress`:if(Vn(n)===0)break a;case`keydown`:case`keyup`:l=ur;break;case`focusin`:u=`focus`,l=tr;break;case`focusout`:u=`blur`,l=tr;break;case`beforeblur`:case`afterblur`:l=tr;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=$n;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=er;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=pr;break;case pi:case mi:case hi:l=nr;break;case yi:l=mr;break;case`scroll`:case`scrollend`:l=Jn;break;case`wheel`:l=hr;break;case`copy`:case`cut`:case`paste`:l=rr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=dr;break;case`submit`:l=fr;break;case`toggle`:case`beforetoggle`:l=gr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Nn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==En&&(u=n.relatedTarget||n.fromElement)&&(Bt(u)||u[Nt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Bt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=$n,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=dr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Ht(c),h=l==null?u:Ht(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Bt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ne(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Ht(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Ir;else if(Ar(c)){if(Lr)_=Kr;else{_=Wr;var v=Ur}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&xn(r.elementType)&&(_=Ir):_=Gr;if(_&&=_(e,r)){jr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Ht(r):window,e){case`focusin`:(Ar(v)||v.contentEditable===`true`)&&(ri=v,ii=r,ai=null);break;case`focusout`:ai=ii=ri=null;break;case`mousedown`:oi=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:oi=!1,si(s,n,i);break;case`selectionchange`:if(ni)break;case`keydown`:case`keyup`:si(s,n,i)}var y;if(vr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Er?wr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(xr&&n.locale!==`ko`&&(Er||b!==`onCompositionStart`?b===`onCompositionEnd`&&Er&&(y=Bn()):(Ln=i,Rn=`value`in Ln?Ln.value:Ln.textContent,Er=!0)),v=Jf(r,b),0<v.length&&(b=new ir(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Tr(n),y!==null&&(b.data=y)))),(y=br?Dr(e,n):Or(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new ir(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Nn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Nn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Nn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Nn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||_n(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&_n(e,``+r);else return;break;case`className`:nn(e,`class`,r);break;case`tabIndex`:nn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:nn(e,n,r);break;case`style`:bn(e,r,o);return;case`data`:if(t!==`object`){nn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=wn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=wn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Tn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=wn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),tn(e,`popover`,r);break;case`xlinkActuate`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:rn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:rn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:rn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:rn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:tn(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Sn.get(n)||n,tn(e,n,r);else return}j=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:bn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)_n(e,r);else if(typeof r==`number`||typeof r==`bigint`)_n(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=Tn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!qt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Mt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}j=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):tn(e,n,r)}return}j=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}fn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&mn(e,!!r,n,!0):mn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}gn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(xn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(j=!0),o=m;break;case`name`:m!==f&&(j=!0),a=m;break;case`checked`:m!==f&&(j=!0),u=m;break;case`defaultChecked`:m!==f&&(j=!0),d=m;break;case`value`:m!==f&&(j=!0),s=m;break;case`defaultValue`:m!==f&&(j=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}dn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(j=!0),p=o;break;case`defaultValue`:o!==l&&(j=!0),c=o;break;case`multiple`:o!==l&&(j=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?mn(e,!!n,n?[]:``,!1):mn(e,!!n,t,!0)):mn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(j=!0),p=a;break;case`defaultValue`:a!==o&&(j=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}hn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(j=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(xn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[jt]=r,n[Mt]=t,np(n,e,t),Wt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Rt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:w({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Bt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ne(n,a,C),t===null?t=!1:(h(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ne(r,a,C),t===null?t=!1:(h(t,!0,te,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),A(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Rt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===Tn&&(e.onclick=null),A(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);A(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=E.d;E.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Vt(e);t!==null&&t.tag===5&&t.type===`form`?oc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=un(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Wt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+un(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+un(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+un(n.imageSizes)+`"]`)):i+=`[href="`+un(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=w({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[zt]=!0,o.onload=o.onerror=function(){Gt(o)}),Wt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+un(r)+`"][href="`+un(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=w({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Wt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Ut(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=w({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Wt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Ut(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Wt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Ut(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Wt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Ne.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Ut(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Ut(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Ut(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+un(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[zt]){r.loading=1;return}}else t=e.createElement(`link`),t[zt]=!0,t.onload=t.onerror=Gt.bind(null,t),np(t,`link`,n),Wt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+un(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+un(n.href)+`"]`);if(r)return t.instance=r,Wt(r),r;var a=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Wt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Wt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Wt(a),a):(r=n,(a=vm.get(o))&&(r=w({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Wt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Rt]||a[jt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Wt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:ue,Provider:null,Consumer:null,_currentValue:Ee,_currentValue2:Ee,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=zi(3,null,null,t),e.current=a,a.stateNode=e,t=Ra(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},xo(a),e}function uh(e){return e?(e=Li,e):Li}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=Co(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=wo(e,r,t),n!==null&&(Pd(n,e,t),F(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Pi(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=Et(t);var n=Pi(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,yh(e,t,n,r)}finally{E.p=a,T.T=i}}function vh(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,yh(e,t,n,r)}finally{E.p=a,T.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=mt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ct(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(W&6)&&(vd=Xe()+500,Df(0,!1))}}break;case 31:case 13:s=Pi(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Dn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ze()){case Qe:return 2;case $e:return 8;case et:case tt:return 32;case nt:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Vt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,kt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,kt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);En=r,n.target.dispatchEvent(r),En=null}else return t=Vt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Vt(n);a!==null&&(e.splice(t,3),t-=3,ic(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Mt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Mt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Nt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{at=Jh.inject(qh),ot=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Dc,s=Oc,c=kc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Nt]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()})),x=(0,_.createContext)({});function S(e){let t=(0,_.useRef)(null);return t.current===null&&(t.current=e()),t.current}var ee=typeof window<`u`?_.useLayoutEffect:_.useEffect,te=(0,_.createContext)(null);function C(e,t){e.indexOf(t)===-1&&e.push(t)}function ne(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var w=(e,t,n)=>n>t?t:n<e?e:n,re={},ie=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ae=e=>typeof e==`object`&&!!e,oe=e=>/^0[^.\s]+$/u.test(e);function se(e){let t;return()=>(t===void 0&&(t=e()),t)}var ce=e=>e,le=(...e)=>e.reduce((e,t)=>n=>t(e(n))),ue=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},de=class{constructor(){this.subscriptions=[]}add(e){return C(this.subscriptions,e),()=>this.remove(e)}remove(e){ne(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},fe=e=>e*1e3,pe=e=>e/1e3,me=(e,t)=>t?1e3/t*e:0,he=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ge=1e-7,_e=12;function ve(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=he(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>ge&&++s<_e);return o}function ye(e,t,n,r){if(e===t&&n===r)return ce;let i=t=>ve(t,0,1,e,n);return e=>e===0||e===1?e:he(i(e),t,r)}var be=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,xe=e=>t=>1-e(1-t),Se=ye(.33,1.53,.69,.99),Ce=xe(Se),we=be(Ce),Te=e=>e>=1?1:(e*=2)<1?.5*Ce(e):.5*(2-2**(-10*(e-1))),T=e=>1-Math.sin(Math.acos(e)),E=xe(T),Ee=be(T),De=ye(.42,0,1,1),Oe=ye(0,0,.58,1),ke=ye(.42,0,.58,1),Ae=e=>Array.isArray(e)&&typeof e[0]!=`number`,D=e=>Array.isArray(e)&&typeof e[0]==`number`,je={linear:ce,easeIn:De,easeInOut:ke,easeOut:Oe,circIn:T,circInOut:Ee,circOut:E,backIn:Ce,backInOut:we,backOut:Se,anticipate:Te},Me=e=>typeof e==`string`,Ne=e=>{if(D(e)){e.length;let[t,n,r,i]=e;return ye(t,n,r,i)}return Me(e)?(je[e],`${e}`,je[e]):e},Pe=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Fe(e){let t=new Set,n=new Set,r=!1,i=!1,a=new Set,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(n.add(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var Ie=40;function Le(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Pe.reduce((e,t)=>(e[t]=Fe(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=re.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Ie),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Pe.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Pe.length;t++)o[Pe[t]].cancel(e)},state:i,steps:o}}var{schedule:O,cancel:Re,state:ze,steps:Be}=Le(typeof requestAnimationFrame<`u`?requestAnimationFrame:ce,!0),Ve;function He(){Ve=void 0}var Ue={now:()=>(Ve===void 0&&Ue.set(ze.isProcessing||re.useManualTiming?ze.timestamp:performance.now()),Ve),set:e=>{Ve=e,queueMicrotask(He)}},We=e=>Math.round(e*1e5)/1e5,Ge=e=>t=>typeof t==`string`&&t.startsWith(e),Ke=Ge(`--`),qe=Ge(`var(--`),Je=e=>qe(e)?Ye.test(e.split(`/*`)[0].trim()):!1,Ye=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Xe(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Ze={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Qe={...Ze,transform:e=>w(0,1,e)},$e={...Ze,default:1},et=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function tt(e){return e==null}var nt=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,rt=(e,t)=>n=>!!(typeof n==`string`&&nt.test(n)&&n.startsWith(e)||t&&!tt(n)&&Object.prototype.hasOwnProperty.call(n,t)),it=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(et);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},at=e=>w(0,255,e),ot={...Ze,transform:e=>Math.round(at(e))},st={test:rt(`rgb`,`red`),parse:it(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+ot.transform(e)+`, `+ot.transform(t)+`, `+ot.transform(n)+`, `+We(Qe.transform(r))+`)`};function ct(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var lt={test:rt(`#`),parse:ct,transform:st.transform},ut=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),dt=ut(`deg`),ft=ut(`%`),k=ut(`px`),pt=ut(`vh`),mt=ut(`vw`),ht={...ft,parse:e=>ft.parse(e)/100,transform:e=>ft.transform(e*100)},gt={test:rt(`hsl`,`hue`),parse:it(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+ft.transform(We(t))+`, `+ft.transform(We(n))+`, `+We(Qe.transform(r))+`)`},_t={test:e=>st.test(e)||lt.test(e)||gt.test(e),parse:e=>st.test(e)?st.parse(e):gt.test(e)?gt.parse(e):lt.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?st.transform(e):gt.transform(e),getAnimatableNone:e=>{let t=_t.parse(e);return t.alpha=0,_t.transform(t)}},vt=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,yt=new RegExp(et.source),bt=new RegExp(vt.source,`i`);function xt(e){return isNaN(e)&&typeof e==`string`&&(yt.test(e)||bt.test(e))}var St=`number`,Ct=`color`,wt=`var`,Tt=`var(`,Et="${}",Dt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ot(e){let t=e.toString();return yt.test(t)||bt.test(t)}function kt(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Dt,e=>(_t.test(e)?(r.color.push(a),i.push(Ct),n.push(_t.parse(e))):e.startsWith(Tt)?(r.var.push(a),i.push(wt),n.push(e)):(r.number.push(a),i.push(St),n.push(parseFloat(e))),++a,Et)).split(Et),indexes:r,types:i}}function At(e){return kt(e).values}function jt({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===St?We(r[a]):e===Ct?_t.transform(r[a]):r[a]}return i}}function Mt(e){return jt(kt(e))}var Nt=e=>typeof e==`number`?0:_t.test(e)?_t.getAnimatableNone(e):e,Pt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Nt(e);function Ft(e){let t=kt(e);return jt(t)(t.values.map((e,n)=>Pt(e,t.split[n])))}var It={test:xt,parse:At,createTransformer:Mt,getAnimatableNone:Ft};function Lt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Rt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Lt(s,r,e+1/3),a=Lt(s,r,e),o=Lt(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function zt(e,t){return n=>n>0?t:e}var A=(e,t,n)=>e+(t-e)*n,Bt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Vt=[lt,st,gt],Ht=e=>Vt.find(t=>t.test(e));function Ut(e){let t=Ht(e);if(!t)return`${e}`,!1;let n=t.parse(e);return t===gt&&(n=Rt(n)),n}var Wt=(e,t)=>{let n=Ut(e),r=Ut(t);if(!n||!r)return zt(e,t);let i={...n};return e=>(i.red=Bt(n.red,r.red,e),i.green=Bt(n.green,r.green,e),i.blue=Bt(n.blue,r.blue,e),i.alpha=A(n.alpha,r.alpha,e),st.transform(i))},Gt=new Set([`none`,`hidden`]);function Kt(e,t){return Gt.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function qt(e,t){return n=>A(e,t,n)}function Jt(e){return typeof e==`number`?qt:typeof e==`string`?Je(e)?zt:_t.test(e)?Wt:Qt:Array.isArray(e)?Yt:typeof e==`object`?_t.test(e)?Wt:Xt:zt}function Yt(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Jt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Xt(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Jt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Zt(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Qt=(e,t)=>{let n=It.createTransformer(t),r=kt(e),i=kt(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Gt.has(e)&&!i.values.length||Gt.has(t)&&!r.values.length?Kt(e,t):le(Yt(Zt(r,i),i.values),n):(`${e}${t}`,zt(e,t))},$t=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function j(e,t){let n=$t.exec(e);if(!n)return;let r=$t.exec(t);if(!r||n[2]!==r[2])return;let i=n[2],a=parseFloat(n[1]),o=parseFloat(r[1]);return e=>We(A(a,o,e))+i}function en(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return A(e,t,n);if(typeof e==`string`&&typeof t==`string`){let n=j(e,t);if(n)return n}return Jt(e)(e,t)}var tn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>O.update(t,e),stop:()=>Re(t),now:()=>ze.isProcessing?ze.timestamp:Ue.now()}},nn=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},rn=2e4;function an(e,t=50,n=rn,r){let i=0,a=e.next(i);for(r?.push(a.value);!a.done&&i<n;)i+=t,a=e.next(i),r?.push(a.value);return i>=n?1/0:i}function on(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(an(r),rn);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:pe(i)}}var M={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function sn(e,t){return e*Math.sqrt(1-t*t)}var cn=12;function ln(e,t,n){let r=n;for(let n=1;n<cn;n++)r-=e(r)/t(r);return r}var un=.001;function dn({duration:e=M.duration,bounce:t=M.bounce,velocity:n=M.velocity,mass:r=M.mass}){let i,a;M.maxDuration;let o=1-t;o=w(M.minDamping,M.maxDamping,o),e=w(M.minDuration,M.maxDuration,pe(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=sn(t,o),c=Math.exp(-i);return un-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o*o*t*t*e,c=Math.exp(-r),l=sn(t*t,o);return(-i(t)+un>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=ln(i,a,s);if(e=fe(e),isNaN(c))return{stiffness:M.stiffness,damping:M.damping,duration:e};{let t=c*c*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var fn=[`duration`,`bounce`];function pn(e,t){return t.some(t=>e[t]!==void 0)}var mn=(e,t)=>(t?e>=0:e>0)&&e<1/0;function hn(e,t){if(mn(e,t))return e}function gn(e){let t=hn(e.stiffness),n=hn(e.damping,!0),r=hn(e.mass),i={...e,stiffness:t??M.stiffness,damping:n??M.damping,mass:r??M.mass,isResolvedFromDuration:!1,isTimeDefined:(t??n??r)===void 0&&pn(e,fn)};if(i.isTimeDefined){if(i.velocity=0,e.visualDuration){let t=e.visualDuration,n=2*Math.PI/(t*1.2),r=n*n,a=2*w(.05,1,1-(e.bounce||0))*Math.sqrt(r);i={...i,mass:M.mass,stiffness:r,damping:a}}else{let e=dn(i);i={...i,...e,mass:M.mass},i.isResolvedFromDuration=!0}(!mn(i.stiffness)||!mn(i.damping,!0))&&(i.stiffness=M.stiffness,i.damping=M.damping)}return i}function _n(e=M.visualDuration,t=M.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},r=n.keyframes[0],i=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:o,damping:s,mass:c,duration:l,velocity:u,isResolvedFromDuration:d,isTimeDefined:f}=gn({...n,velocity:-pe(n.velocity||0)}),p=s/(2*Math.sqrt(o*c)),m=pe(Math.sqrt(o/c)),h=p*m,g={target:i,delta:i-r,velocity:u||0,restSpeed:0,restDelta:0},_=()=>{let e=Math.abs(g.delta)<5;g.restSpeed=n.restSpeed||(e?M.restSpeed.granular:M.restSpeed.default),g.restDelta=n.restDelta||(e?M.restDelta.granular:M.restDelta.default)};_();let v,y,b;if(p<1){let e=sn(m,p),t={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};b=()=>{t.A=(g.velocity+h*g.delta)/e,t.sinC=h*t.A+g.delta*e,t.cosC=h*g.delta-t.A*e};let n=n=>{n!==t.t&&(t.t=n,t.env=Math.exp(-h*n),t.sin=Math.sin(e*n),t.cos=Math.cos(e*n))};v=e=>(n(e),g.target-t.env*(t.A*t.sin+g.delta*t.cos)),y=e=>(n(e),t.env*(t.sinC*t.sin+t.cosC*t.cos))}else if(p===1){v=e=>g.target-Math.exp(-m*e)*(g.delta+(g.velocity+m*g.delta)*e);let e={C:0};b=()=>{e.C=g.velocity+m*g.delta},y=t=>Math.exp(-m*t)*(m*e.C*t-g.velocity)}else{let e=m*Math.sqrt(p*p-1);v=t=>{let n=Math.exp(-h*t),r=Math.min(e*t,300);return g.target-n*((g.velocity+h*g.delta)*Math.sinh(r)+e*g.delta*Math.cosh(r))/e};let t={P:0,sinh:0,cosh:0};b=()=>{t.P=(g.velocity+h*g.delta)/e,t.sinh=h*t.P-g.delta*e,t.cosh=h*g.delta-t.P*e},y=n=>{let r=Math.exp(-h*n),i=Math.min(e*n,300);return r*(t.sinh*Math.sinh(i)+t.cosh*Math.cosh(i))}}b();let x=d&&l||null,S={calculatedDuration:x,retarget:(e,t)=>{g.target=e[e.length-1],g.delta=g.target-e[0],g.velocity=f?0:-pe(t),n.restSpeed&&n.restDelta||_(),S.calculatedDuration=x,a.done=!1,b()},velocity:e=>fe(y(e)),next:e=>{let t=v(e);if(d)a.done=e>=l;else{let n=fe(y(e));a.done=Math.abs(n)<=g.restSpeed&&Math.abs(g.target-t)<=g.restDelta}return a.value=a.done?g.target:t,a},toString:()=>{let e=Math.min(an(S),rn),t=nn(t=>S.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return S}_n.applyToOptions=e=>{let t=on(e,100,_n);return e.ease=t.ease,e.duration=fe(t.duration),e.type=`keyframes`,e};function vn({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>e<s||e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>{let t=v(e);f.done=Math.abs(t)<=l,f.value=f.done?_:_+t},b,x,S=e=>{p(f.value)&&(b=e,x=_n({keyframes:[f.value,m(f.value)],velocity:-v(e)/r*1e3,damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return!x&&b===void 0&&(t=!0,y(e),S(e)),b!==void 0&&e>=b?x.next(e-b):(!t&&y(e),f)}}}function yn(e,t,n){let r=[],i=n||re.mix||en,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=le(Array.isArray(t)?t[n]||ce:t,a)),r.push(a)}return r}function bn(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=yn(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=ue(e[r],e[r+1],n);return s[r](i)};return n?t=>l(w(e[0],e[a-1],t)):l}function xn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=ue(0,t,r);e.push(A(n,1,i))}}function Sn(e){let t=[0];return xn(t,e.length-1),t}function Cn(e,t){return e.map(e=>e*t)}function wn(e,t){return e.map(()=>t||ke).splice(0,e.length-1)}function Tn({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Ae(r)?r.map(Ne):Ne(r)||ke,a={done:!1,value:t[0]};if(t.length===2&&!Array.isArray(i)&&(!n||n.length!==2||n[0]===0&&n[1]===1)){let[n,r]=t,o=n===r?void 0:(re.mix||en)(n,r);return{calculatedDuration:e,next:t=>(a.value=o?o(i(e>0?w(0,1,t/e):1)):r,a.done=t>=e,a)}}let o=bn(Cn(n&&n.length===t.length?n:Sn(t),e),t,{ease:Array.isArray(i)?i:wn(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var En=5;function Dn(e,t,n){let r=Math.max(t-En,0);return me(n-e(r),t-r)}function On(e,t,n=0){return t<=0?n:e.velocity?e.velocity(t):Dn(t=>e.next(t).value,t,e.next(t).value)}var kn=e=>e!==null;function An(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(kn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var jn={decay:vn,inertia:vn,tween:Tn,keyframes:Tn,spring:_n};function Mn(e){typeof e.type==`string`&&(e.type=jn[e.type])}function Nn(e,t){return{kind:e,animation:t,timestamp:Ue.now(),frameTimestamp:ze.timestamp,frameIsProcessing:ze.isProcessing}}function Pn(e,t,n){let r=globalThis.__MOTION_INSPECT__;if(r)try{r({...Nn(`animation-start`,e),options:n?{...t,...n}:t})}catch{}}function Fn(e,t){let n=globalThis.__MOTION_INSPECT__;if(n)try{n({...Nn(`layout-animation-start`,e),node:t})}catch{}}var In=class{constructor(){this.isResolved=!1}get finished(){return this._finished||=this.isResolved?Promise.resolve():new Promise(e=>{this._resolve=e}),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){this.isResolved=!0,this._resolve?.()}then(e,t){return this.finished.then(e,t)}},Ln=e=>e/100,Rn=class extends In{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Ue.now()&&this.tick(Ue.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause(),Pn(this,this.options)}initAnimation(){let{options:e}=this;Mn(e);let{type:t=Tn,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Tn;s!==Tn&&typeof o[0]!=`number`&&(this.mixKeyframes=le(Ln,en(o[0],o[1])),o=[0,100]);let c=s(o===e.keyframes?e:{...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=an(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=w(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==vn&&(b.value=An(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return pe(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+pe(e)}get time(){return pe(this.currentTime)}set time(e){e=fe(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){return On(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Ue.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=pe(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=tn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Ue.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}},zn=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Bn(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(et)||[];if(!r)return e;let i=n.replace(r,``),a=+!!zn.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Vn=/\b([a-z-]*)\(.*?\)/gu,Hn={...It,getAnimatableNone:e=>{let t=e.match(Vn);return t?t.map(Bn).join(` `):e}},Un={...It,getAnimatableNone:e=>{let t=It.parse(e);return It.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Wn={...Ze,transform:Math.round},Gn={borderWidth:k,borderTopWidth:k,borderRightWidth:k,borderBottomWidth:k,borderLeftWidth:k,borderRadius:k,borderTopLeftRadius:k,borderTopRightRadius:k,borderBottomRightRadius:k,borderBottomLeftRadius:k,width:k,maxWidth:k,height:k,maxHeight:k,top:k,right:k,bottom:k,left:k,inset:k,insetBlock:k,insetBlockStart:k,insetBlockEnd:k,insetInline:k,insetInlineStart:k,insetInlineEnd:k,padding:k,paddingTop:k,paddingRight:k,paddingBottom:k,paddingLeft:k,paddingBlock:k,paddingBlockStart:k,paddingBlockEnd:k,paddingInline:k,paddingInlineStart:k,paddingInlineEnd:k,margin:k,marginTop:k,marginRight:k,marginBottom:k,marginLeft:k,marginBlock:k,marginBlockStart:k,marginBlockEnd:k,marginInline:k,marginInlineStart:k,marginInlineEnd:k,fontSize:k,backgroundPositionX:k,backgroundPositionY:k,rotate:dt,pathRotation:dt,rotateX:dt,rotateY:dt,rotateZ:dt,scale:$e,scaleX:$e,scaleY:$e,scaleZ:$e,skew:dt,skewX:dt,skewY:dt,distance:k,translateX:k,translateY:k,translateZ:k,x:k,y:k,z:k,perspective:k,transformPerspective:k,opacity:Qe,originX:ht,originY:ht,originZ:k,zIndex:Wn,fillOpacity:Qe,strokeOpacity:Qe,numOctaves:Wn},Kn={...Gn,color:_t,backgroundColor:_t,outlineColor:_t,fill:_t,stroke:_t,borderColor:_t,borderTopColor:_t,borderRightColor:_t,borderBottomColor:_t,borderLeftColor:_t,filter:Hn,WebkitFilter:Hn,mask:Un,WebkitMask:Un},qn=e=>Kn[e],Jn=new Set([Hn,Un]);function Yn(e,t){let n=qn(e);return Jn.has(n)||(n=It),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function Xn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Zn=e=>e*180/Math.PI,Qn=e=>er(Zn(Math.atan2(e[1],e[0]))),$n={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Qn,rotateZ:Qn,skewX:e=>Zn(Math.atan(e[1])),skewY:e=>Zn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},er=e=>(e%=360,e<0&&(e+=360),e),tr=Qn,nr=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),rr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ir={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:nr,scaleY:rr,scale:e=>(nr(e)+rr(e))/2,rotateX:e=>er(Zn(Math.atan2(e[6],e[5]))),rotateY:e=>er(Zn(Math.atan2(-e[2],e[0]))),rotateZ:tr,rotate:tr,skewX:e=>Zn(Math.atan(e[4])),skewY:e=>Zn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ar(e){return+!!e.includes(`scale`)}function or(e,t){if(!e||e===`none`)return ar(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=ir,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=$n,i=t}if(!i)return ar(t);let a=r[t],o=i[1].split(`,`).map(cr);return typeof a==`function`?a(o):o[a]}var sr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return or(n,t)};function cr(e){return parseFloat(e.trim())}var lr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],ur=new Set([...lr,`pathRotation`]),dr=e=>e===Ze||e===k,fr=new Set([`x`,`y`,`z`]),pr=lr.filter(e=>!fr.has(e));function mr(e){let t=[];return pr.forEach(n=>{let r=e.getValue(n);if(r!==void 0){let e=r.get(),i=+!!n.startsWith(`scale`);if(e===i)return;t.push([n,e]),r.set(i)}}),t}var hr=new Set([`bottom`,`right`]);function gr(e,t,n,r,i,a){let o=parseFloat(e);if(!isNaN(o))return o;let{min:s,max:c}=t()[n],l=c-s;return a===`border-box`?l:l-parseFloat(r)-parseFloat(i)}var _r={width:({width:e,paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r},i)=>gr(e,i,`x`,t,n,r),height:({height:e,paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r},i)=>gr(e,i,`y`,t,n,r),top:({top:e})=>parseFloat(e),left:({left:e})=>parseFloat(e),bottom:({top:e},t)=>{let{y:n}=t();return parseFloat(e)+(n.max-n.min)},right:({left:e},t)=>{let{x:n}=t();return parseFloat(e)+(n.max-n.min)},x:({transform:e})=>or(e,`x`),y:({transform:e})=>or(e,`y`)};_r.translateX=_r.x,_r.translateY=_r.y;var vr=new Set,yr=!1,br=!1,xr=!1;function Sr(){if(br){let e=[],t=new Set,n=new Set;vr.forEach(r=>{r.needsMeasurement&&(e.push(r),t.add(r.element),hr.has(r.name)&&n.add(r.element))});let r=new Map;n.forEach(e=>{let t=mr(e);t.length&&(r.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=r.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}br=!1,yr=!1,vr.forEach(e=>e.complete(xr)),vr.clear()}function Cr(){vr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(br=!0)})}function wr(){xr=!0,Cr(),Sr(),xr=!1}function Tr(e,t,n){if(typeof e==`string`){if(ie(e)||oe(e))return parseFloat(e);if(!It.test(e)&&It.test(n))return Yn(t,n)}return e??void 0}var Er=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(vr.add(this),yr||(yr=!0,O.read(Cr),O.resolveKeyframes(Sr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=Tr(n.readValue(t,a),t,a);r!==void 0&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Xn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),vr.delete(this)}cancel(){this.state===`scheduled`&&(vr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Dr=e=>e.startsWith(`--`);function Or(e,t,n){Dr(t)?e.style.setProperty(t,n):e.style[t]=n}var kr={};function Ar(e,t){let n=se(e);return()=>kr[t]??n()}var jr=Ar(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Mr=Ar(()=>window.ViewTimeline!==void 0,`viewTimeline`),Nr=Ar(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Pr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Fr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Pr([0,.65,.55,1]),circOut:Pr([.55,0,1,.45]),backIn:Pr([.31,.01,.66,-.59]),backOut:Pr([.33,1.53,.69,.99])};function Ir(e,t){if(e)return typeof e==`function`?Nr()?nn(e,t):`ease-out`:D(e)?Pr(e):Array.isArray(e)?e.map(e=>Ir(e,t)||Fr.easeOut):Fr[e]}function Lr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Ir(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function Rr(e){return typeof e==`function`&&`applyToOptions`in e}function zr({type:e,...t}){return Rr(e)&&Nr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Br=class extends In{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=zr(e);this.animation=Lr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=An(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Or(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()},Pn(this,e,c)}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return pe(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+pe(e)}get time(){return pe(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=fe(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&jr()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),ce):r(this)}},Vr={anticipate:Te,backInOut:we,circInOut:Ee};function Hr(e){return e in Vr}function Ur(e){typeof e.ease==`string`&&Hr(e.ease)&&(e.ease=Vr[e.ease])}var Wr=10,Gr=class extends Br{constructor(e){Ur(e),Mn(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Rn({...a,autoplay:!1}),s=Math.max(Wr,Ue.now()-this.startTime),c=w(0,Wr,s-Wr),l=o.sample(s).value,{name:u}=this.options;i&&u&&Or(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Kr=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(It.test(e)||e===`0`)&&!e.startsWith(`url(`));function qr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Jr(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Kr(i,t),s=Kr(a,t);return!o||!s?(o!==s&&`${t}${i}${a}${o?a:i}`,!1):qr(e)||(n===`spring`||Rr(n))&&r}function Yr(e){e.duration=0,e.type=`keyframes`}var Xr=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),Zr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Qr(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Zr.test(e[t]))return!0;return!1}var $r=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),ei=se(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function ti(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!n||!(Xr.has(n)||$r.has(n)))return!1;let c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return ei()&&(Xr.has(n)||$r.has(n)&&Qr(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var ni=40,ri=class extends In{constructor(e){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ue.now();let{keyframes:t,name:n,motionValue:r,element:i}=e,a=e;a.autoplay??=!0,a.delay??=0,a.type??=`keyframes`,a.repeat??=0,a.repeatDelay??=0,a.repeatType??=`loop`;let o=i?.KeyframeResolver||Er;this.keyframeResolver=new o(t,(e,t,n)=>this.onKeyframesResolved(e,t,a,!n),n,r,i),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Ue.now();let u=!0;Jr(e,i,a,o)||(u=!1,(re.instantAnimations||!s)&&l?.(An(e,n,t)),e[0]=e[e.length-1],Yr(n),n.repeat=0);let d=r?this.resolvedAt&&this.resolvedAt-this.createdAt>ni?this.resolvedAt:this.createdAt:void 0,{onComplete:f}=n;n.startTime??=d,n.finalKeyframe=t,n.keyframes=e,n.onComplete=()=>{f?.(),this.notifyFinished()};let p=u&&!c&&ti(n),m;if(p){n.element=n.motionValue?.owner?.current;try{m=new Gr(n)}catch{m=new Rn(n)}}else m=new Rn(n);this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this._animation.finished:super.finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),wr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function ii(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var ai=30,oi=e=>!isNaN(parseFloat(e)),si={current:void 0},ci=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Ue.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.notifyChange(),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ue.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=oi(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){var n;return e===`change`?this.onChangeSubscribe(t):((n=this.events)[e]||(n[e]=new de)).add(t)}onChangeSubscribe(e){let{events:t}=this;return!t.change&&!this.changeSubscriber?this.changeSubscriber=e:(t.change||(t.change=new de,t.change.add(this.changeSubscriber),this.changeSubscriber=void 0),t.change.add(e)),()=>{this.changeSubscriber===e?this.changeSubscriber=void 0:t.change?.remove(e),this.stopIfUnobserved()}}stopIfUnobserved(){O.read(()=>{!this.changeSubscriber&&!this.events.change?.getSize()&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.notifyChange()}notifyChange(){let{current:e,changeSubscriber:t}=this;t?t(e):this.events.change?.notify(e)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return si.current&&si.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Ue.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ai)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,ai);return me(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0;let n=!1,r;r=e(()=>{n=!0,this.events.animationComplete?.notify(),this.animation===r&&this.clearAnimation(),t()}),n||(this.animation=r),this.events.animationStart?.notify()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){this.animation=void 0}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function li(e,t){return new ci(e,t)}function ui(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function di(e,t){let n=e?.[t]??e?.default??e;return n===e?n:ui(n,e)}var fi={type:`spring`,stiffness:500,damping:25,restSpeed:10},pi=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),mi={type:`keyframes`,duration:.8},hi={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},gi=(e,{keyframes:t})=>t.length>2?mi:ur.has(e)?e.startsWith(`scale`)?pi(t[1]):fi:hi,_i=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function vi(e){for(let t in e)if(!_i.has(t))return!0;return!1}var yi=(e,t,n,r={},i,a)=>o=>{let s=di(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=fe(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};vi(s)||Object.assign(u,gi(e,u)),u.duration&&=fe(u.duration),u.repeatDelay&&=fe(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Yr(u),u.delay===0&&(d=!0)),(re.instantAnimations||re.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Yr(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=An(u.keyframes,s);if(e!==void 0){O.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Rn(u):new ri(u)},bi=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xi(e){let t=bi.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Si(e,t,n=1){`${e}`;let[r,i]=xi(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return ie(e)?parseFloat(e):e}return Je(i)?Si(i,t,n+1):i}function Ci(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function wi(e,t,n,r){if(typeof t==`function`){let[i,a]=Ci(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ci(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Ti(e,t,n){let r=e.getProps();return wi(r,t,n===void 0?r.custom:n,e)}var Ei=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...lr]),Di=e=>Array.isArray(e);function Oi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,li(n))}function ki(e){return Di(e)?e[e.length-1]||0:e}function Ai(e,t){let{transitionEnd:n={},transition:r={},...i}=Ti(e,t)||{};i={...i,...n};for(let t in i)Oi(e,t,ki(i[t]))}var ji=e=>!!(e&&e.getVelocity);function Mi(e){return!!(ji(e)&&e.add)}function Ni(e,t){let n=e.getValue(`willChange`);if(Mi(n))return n.add(t);if(!n&&re.WillChange){let n=new re.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Pi(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Fi=`data-`+Pi(`framerAppearId`);function Ii(e){return e.props[Fi]}var Li=typeof window<`u`;function Ri({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function zi(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?ui(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&Ri(f,t))continue;let o={delay:n,...di(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){O.update(()=>r.set(i));continue}let p=!1;if(Li&&window.MotionHandoffAnimation){let n=Ii(e);if(n){let e=window.MotionHandoffAnimation(n,t,O);e!==null&&(o.startTime=e,p=!0)}}Ni(e,t);let m=l??e.shouldReduceMotion;r.start(yi(t,r,i,m&&Ei.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>O.update(()=>{o&&Ai(e,o)});d.length?Promise.all(d).then(t):t()}return d}function Bi(e,t,n={}){let r=Ti(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(zi(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Vi(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function Vi(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Bi(c,t,{...o,delay:n+(typeof r==`function`?0:r)+ii(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Hi(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Bi(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Bi(e,t,n);else{let i=typeof t==`function`?Ti(e,t,n.custom):t;r=Promise.all(zi(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Ui={test:e=>e===`auto`,parse:e=>e},Wi=e=>t=>t.test(e),Gi=[Ze,k,ft,dt,mt,pt,Ui],Ki=e=>Gi.find(Wi(e));function qi(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||oe(e)}var Ji=new Set([`auto`,`none`,`0`]);function Yi(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Ji.has(t)&&Ot(t)&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]!==i&&(e[r]=Yn(n,i))}var Xi=class extends Er{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Je(r))){let i=Si(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Ei.has(n)||e.length!==2)return;let[r,i]=e;if(typeof r==`number`&&typeof i==`number`)return;let a=Ki(r),o=Ki(i);if(Xe(r)!==Xe(i)&&_r[n]){this.needsMeasurement=!0;return}if(a!==o){if(dr(a)&&dr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else _r[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||qi(e[t]))&&n.push(t);n.length&&Yi(e,n,t)}measure(){let{element:e,name:t}=this;return _r[t](window.getComputedStyle(e.current),()=>e.measureViewportBox())}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&this.motionValue?.jump(r,!1)}measureEndState(){let{element:e,unresolvedKeyframes:t}=this;if(!e||!e.current)return;this.motionValue?.jump(this.measuredOrigin,!1);let n=t.length-1,r=t[n];t[n]=this.measure(),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Zi=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function Qi(e){return ae(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}function $i(e){return ae(e)&&`ownerSVGElement`in e}var ea=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function ta(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var na={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},ra=lr.length;function ia(e,t,n){let r=``,i=!0;for(let a=0;a<ra;a++){let o=lr[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ea(s,Gn[o]);if(!c){i=!1;let t=na[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${ea(a,Gn.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function aa(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(ur.has(e)){o=!0;continue}if(Ke(e)){i[e]=n;continue}{let t=ea(n,Gn[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=ia(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}var oa={offset:`stroke-dashoffset`,array:`stroke-dasharray`},sa={offset:`strokeDashoffset`,array:`strokeDasharray`};function ca(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?oa:sa;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var la=[`transform`,`opacity`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function ua(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(aa(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of la)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ca(d,i,a,o,!1)}function N({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function P({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function da(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function fa(e){return e===void 0||e===1}function pa({scale:e,scaleX:t,scaleY:n}){return!fa(e)||!fa(t)||!fa(n)}function ma(e){return pa(e)||ha(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ha(e){return ga(e.x)||ga(e.y)}function ga(e){return e&&e!==`0%`}function _a(e,t,n){return n+t*(e-n)}function va(e,t,n,r,i){return i!==void 0&&(e=_a(e,i,r)),_a(e,n,r)+t}function ya(e,t=0,n=1,r,i){e.min=va(e.min,t,n,r,i),e.max=va(e.max,t,n,r,i)}function ba(e,{x:t,y:n}){ya(e.x,t.translate,t.scale,t.originPoint),ya(e.y,n.translate,n.scale,n.originPoint)}var xa=.999999999999,Sa=1.0000000000001;function Ca(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(wa(e.x,-a.scroll.offset.x),wa(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ba(e,o)),r&&ma(a.latestValues)&&Da(e,a.latestValues,a.layout?.layoutBox))}t.x<Sa&&t.x>xa&&(t.x=1),t.y<Sa&&t.y>xa&&(t.y=1)}function wa(e,t){e.min+=t,e.max+=t}function Ta(e,t,n,r,i=.5){ya(e,t,n,A(e.min,e.max,i),r)}function Ea(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Da(e,t,n){let r=n??e;Ta(e.x,Ea(t.x,r.x),t.scaleX,t.scale,t.originX),Ta(e.y,Ea(t.y,r.y),t.scaleY,t.scale,t.originY)}function Oa(e,t){return N(da(e.getBoundingClientRect(),t))}function ka(e,t,n){let r=Oa(e,n),{scroll:i}=t;return i&&(wa(r.x,i.offset.x),wa(r.y,i.offset.y)),r}var{schedule:Aa,cancel:ja}=Le(queueMicrotask,!1),Ma={x:!1,y:!1};function Na(){return Ma.x||Ma.y}function Pa(e){return e===`x`||e===`y`?Ma[e]?null:(Ma[e]=!0,()=>{Ma[e]=!1}):Ma.x||Ma.y?null:(Ma.x=Ma.y=!0,()=>{Ma.x=Ma.y=!1})}function Fa(e,t){let n=ta(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Ia(e){return!(e.pointerType===`touch`||Na())}function La(e,t,n={}){let[r,i,a]=Fa(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Ia(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Ra=(e,t)=>t?e===t||Ra(e,t.parentElement):!1,za=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Ba=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Va(e){return Ba.has(e.tagName)||e.isContentEditable===!0}var Ha=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Ua(e){return Ha.has(e.tagName)||e.isContentEditable===!0}var Wa=new WeakSet;function Ga(e){return t=>{t.key===`Enter`&&e(t)}}function Ka(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var qa=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ga(()=>{if(Wa.has(n))return;Ka(n,`down`);let e=Ga(()=>{Ka(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Ka(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Ja(e){return za(e)&&!Na()}var Ya=new WeakSet;function Xa(e,t,n={}){let[r,i,a]=Fa(e,n),o=e=>{let r=e.currentTarget;if(!Ja(e)||Ya.has(e))return;Wa.add(r),n.stopPropagation&&Ya.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),Wa.has(r)&&Wa.delete(r),Ja(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||Ra(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Qi(e)&&(e.addEventListener(`focus`,e=>qa(e,i)),!Va(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}var Za=new WeakMap,Qa,$a=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:$i(r)&&`getBBox`in r?r.getBBox()[t]:r[n],eo=$a(`inline`,`width`,`offsetWidth`),to=$a(`block`,`height`,`offsetHeight`);function no({target:e,borderBoxSize:t}){Za.get(e)?.forEach(n=>{n(e,{get width(){return eo(e,t)},get height(){return to(e,t)}})})}function ro(e){e.forEach(no)}function io(){typeof ResizeObserver<`u`&&(Qa=new ResizeObserver(ro))}function ao(e,t){Qa||io();let n=ta(e);return n.forEach(e=>{let n=Za.get(e);n||(n=new Set,Za.set(e,n)),n.add(t),Qa?.observe(e)}),()=>{n.forEach(e=>{let n=Za.get(e);n?.delete(t),n?.size||Qa?.unobserve(e)})}}var oo=new Set,so;function co(){so=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};oo.forEach(t=>t(e))},window.addEventListener(`resize`,so)}function lo(e){return oo.add(e),so||co(),()=>{oo.delete(e),!oo.size&&typeof so==`function`&&(window.removeEventListener(`resize`,so),so=void 0)}}function uo(e,t){return typeof e==`function`?lo(e):ao(e,t)}function fo(e,t){let n,r=()=>{let{currentTime:r}=t,i=(r===null?0:r.value)/100;n!==i&&e(i),n=i};return O.preUpdate(r,!0),()=>Re(r)}var po={value:null,addProjectionMetrics:null};function mo(e){return $i(e)&&e.tagName===`svg`}function ho(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=bn(i,a,o);return t?s(r):s}var go=new Set,_o=({timestamp:e})=>{go.forEach(t=>t.tick(e))},vo=class extends In{constructor(e){super(),this.state=`idle`,this.startTime=0,this.currentTime=0,this.started=!1,this.hasNextTarget=!1,this.nextTarget=0,this.stop=()=>{this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,Mn(e),this.factory=e.type||Tn,this.generator=this.factory(e);let{driver:t}=e;t&&(this.driver=t(e=>this.tick(e))),this.startTime=this.now(),this.state=`running`,this.driver?this.driver.start():(go.size||O.update(_o,!0),go.add(this))}setTarget(e,t){this.nextTarget=e,this.nextVelocity=t,this.hasNextTarget=!0}retarget(e,t){let{options:n,generator:r}=this;n.keyframes=e,n.velocity=t,this.startTime=this.now(),this.currentTime=0,r.retarget?r.retarget(e,t):this.generator=this.factory(n)}tick(e){let{options:t,hasNextTarget:n}=this,{delay:r=0,onUpdate:i,onPlay:a}=t,o=Math.round(e-this.startTime)-r,s=this.currentTime=Math.max(0,o),c=this.generator.next(s),l=o<0?t.keyframes[0]:c.value;if(n){this.hasNextTarget=!1;let{keyframes:e}=t;e[0]=l,e[1]=this.nextTarget,this.retarget(e,this.nextVelocity??this.getGeneratorVelocity())}(n||!this.started)&&(this.started=!0,a?.()),this.state===`running`&&(i?.(l),c.done&&o>=0&&!n&&!this.hasNextTarget&&this.state===`running`&&(this.notifyFinished(),this.teardown(),this.state=`finished`,t.onComplete?.()))}getGeneratorVelocity(){return On(this.generator,this.currentTime,this.options.velocity)}now(){return this.driver?this.driver.now():Ue.now()}teardown(){this.state=`idle`,this.driver?this.driver.stop():(go.delete(this),go.size||Re(_o))}};function yo(e,t,n={}){let r=e.get(),i=null,a,o=typeof r==`string`?r.replace(/[\d.-]/g,``):void 0,s=e=>a(o?e+o:e),c=()=>e.events.animationStart?.notify(),l=()=>{i&&=(i.stop(),null),e.animation=void 0};if(e.attach((t,r)=>{a=r;let o=xo(t);if(i?.state===`running`){i.setTarget(o,n.velocity);return}let u=xo(e.get()),d=i?i.getGeneratorVelocity():e.getVelocity();if(l(),u===o)return;let f=i=new vo({keyframes:[u,o],velocity:d,type:`spring`,restDelta:.001,restSpeed:.01,...n,onUpdate:s,onPlay:c});e.animation=f,f.then(()=>{i===f&&(i=null,e.animation=void 0,e.events.animationComplete?.notify())})},l),ji(t)){let r=n.skipInitialAnimation===!0,i=t.on(`change`,t=>{r?(r=!1,e.jump(bo(t,o),!1)):e.set(bo(t,o))}),a=e.on(`destroy`,i);return()=>{i(),a()}}return l}function bo(e,t){return t?e+t:e}function xo(e){return typeof e==`number`?e:parseFloat(e)}var So=()=>({translate:0,scale:1,origin:0,originPoint:0}),Co=()=>({x:So(),y:So()}),wo=()=>({min:0,max:0}),F=()=>({x:wo(),y:wo()}),To=new WeakMap;function Eo(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Do(e){return typeof e==`string`||Array.isArray(e)}var Oo=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],ko=[`initial`,...Oo];function Ao(e){if(Eo(e.animate))return!0;for(let t=0;t<ko.length;t++)if(Do(e[ko[t]]))return!0;return!1}function jo(e){return!!(Ao(e)||e.variants)}function Mo(e,t,n){for(let r in t){let i=t[r],a=n[r];if(ji(i))e.addValue(r,i);else if(ji(a))e.addValue(r,li(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,li(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var No={current:null},Po={current:!1},Fo=typeof window<`u`;function Io(){if(Po.current=!0,Fo){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>No.current=e.matches;e.addEventListener(`change`,t),t()}else No.current=!1}}var Lo=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Ro={};function zo(e){Ro=e}function Bo(){return Ro}var Vo=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Er,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Ue.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,O.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ao(t),this.isVariantNode=jo(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&ji(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,To.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Po.current||Io(),this.shouldReduceMotion=No.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Re(this.notifyUpdate),Re(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Xr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Br({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:fe(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=ur.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&O.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Ro){let t=Ro[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):F()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Lo.length;t++){let n=Lo[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Mo(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=li(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(ie(n)||oe(n))?n=parseFloat(n):typeof n!=`number`&&!It.test(n)&&It.test(t)&&(n=Yn(e,t)),this.setBaseTarget(e,ji(n)?n.get():n)),ji(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=wi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!ji(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new de),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Aa.render(this.render)}},Ho=class extends Vo{constructor(){super(...arguments),this.KeyframeResolver=Xi}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;ji(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},I=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Uo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Wo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Go={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(k.test(e))e=parseFloat(e);else return e}return`${Wo(e,t.target.x)}% ${Wo(e,t.target.y)}%`}},Ko={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=It.parse(e);if(i.length>5)return r;let a=It.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=A(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},L={borderRadius:{...Go,applyTo:[...Zi]},borderTopLeftRadius:Go,borderTopRightRadius:Go,borderBottomLeftRadius:Go,borderBottomRightRadius:Go,boxShadow:Ko};function R(e,{layout:t,layoutId:n}){return ur.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!L[e]||e===`opacity`)}function qo(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(ji(r[t])||i&&ji(i[t])||R(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Jo(e){return window.getComputedStyle(e)}var Yo=class extends Ho{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Uo}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(ur.has(t))return this.projection?.isProjecting?ar(t):sr(e,t);{let n=Jo(e),r=(Ke(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Oa(e,t)}build(e,t,n){aa(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return qo(e,t,n)}},Xo=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Zo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Qo(e,t,n,r){Uo(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Xo.has(n)?n:Pi(n),t.attrs[n])}function $o(e,t,n){let r=qo(e,t,n);for(let n in e)if(ji(e[n])||ji(t[n])){let t=lr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var es=class extends Ho{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=F}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ur.has(t)){let e=qn(t);return e&&e.default||0}if(la.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=Xo.has(t)?t:Pi(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return $o(e,t,n)}build(e,t,n){ua(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Qo(e,t,n,r)}mount(e){this.isSVGTag=Zo(e.tagName),super.mount(e)}},ts=ko.length;function ns(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&ns(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<ts;n++){let r=ko[n],i=e.props[r];(Do(i)||i===!1)&&(t[r]=i)}return t}function rs(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var is=[...Oo].reverse(),as=Oo.length;function os(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Hi(e,t,n)))}function ss(e){let t=os(e),n=us(),r=!0,i=!1,a=t=>(n,r)=>{let i=Ti(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=ns(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<as;t++){let p=is[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Do(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Eo(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=cs(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],ee=S.reduce(a(p),{});_===!1&&(ee={});let{prevResolvedValues:te={}}=m,C={...te,...ee},ne=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in C){let t=ee[e],n=te[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Di(t)&&Di(n)?!rs(t,n)||y:t!==n,r?t==null?u.add(e):ne(e):t!==void 0&&u.has(e)?ne(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=ee,m.isActive&&(d={...d,...ee}),(r||i)&&e.blockInitialAnimation&&(b=!1);let w=v&&y;b&&(!w||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!w&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Ti(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=ii(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Ti(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=us(),i=!0}}}function cs(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!rs(t,e):!1}function ls(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function us(){return{animate:ls(!0),whileInView:ls(),whileHover:ls(),whileTap:ls(),whileDrag:ls(),whileFocus:ls(),exit:ls()}}function z(e,t){e.min=t.min,e.max=t.max}function ds(e,t){z(e.x,t.x),z(e.y,t.y)}function fs(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var ps=.9999,ms=1.0001,hs=-.01,gs=.01;function _s(e){return e.max-e.min}function vs(e,t,n){return Math.abs(e-t)<=n}function ys(e,t,n,r=.5){e.origin=r,e.originPoint=A(t.min,t.max,e.origin),e.scale=_s(n)/_s(t),e.translate=A(n.min,n.max,e.origin)-e.originPoint,(e.scale>=ps&&e.scale<=ms||isNaN(e.scale))&&(e.scale=1),(e.translate>=hs&&e.translate<=gs||isNaN(e.translate))&&(e.translate=0)}function bs(e,t,n,r){ys(e.x,t.x,n.x,r?r.originX:void 0),ys(e.y,t.y,n.y,r?r.originY:void 0)}function xs(e,t,n,r=0){e.min=(r?A(n.min,n.max,r):n.min)+t.min,e.max=e.min+_s(t)}function Ss(e,t,n,r){xs(e.x,t.x,n.x,r?.x),xs(e.y,t.y,n.y,r?.y)}function Cs(e,t,n,r=0){let i=r?A(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+_s(t)}function ws(e,t,n,r){Cs(e.x,t.x,n.x,r?.x),Cs(e.y,t.y,n.y,r?.y)}function Ts(e,t,n,r,i){return e-=t,e=_a(e,1/n,r),i!==void 0&&(e=_a(e,1/i,r)),e}function Es(e,t=0,n=1,r=.5,i,a=e,o=e){if(ft.test(t)&&(t=parseFloat(t),t=A(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=A(a.min,a.max,r);e===a&&(s-=t),e.min=Ts(e.min,t,n,s,i),e.max=Ts(e.max,t,n,s,i)}function Ds(e,t,[n,r,i],a,o){Es(e,t[n],t[r],t[i],t.scale,a,o)}var Os=[`x`,`scaleX`,`originX`],ks=[`y`,`scaleY`,`originY`];function As(e,t,n,r){Ds(e.x,t,Os,n?n.x:void 0,r?r.x:void 0),Ds(e.y,t,ks,n?n.y:void 0,r?r.y:void 0)}function js(e){return e.translate===0&&e.scale===1}function Ms(e){return js(e.x)&&js(e.y)}function Ns(e,t){return e.min===t.min&&e.max===t.max}function Ps(e,t){return Ns(e.x,t.x)&&Ns(e.y,t.y)}function Fs(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Is(e,t){return Fs(e.x,t.x)&&Fs(e.y,t.y)}function Ls(e){return _s(e.x)/_s(e.y)}function Rs(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function zs(e){return[e(`x`),e(`y`)]}function Bs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Vs=Zi.length,Hs=e=>typeof e==`string`?parseFloat(e):e,Us=e=>typeof e==`number`||k.test(e);function Ws(e,t,n,r,i,a){i?(e.opacity=A(0,n.opacity??1,Ks(r)),e.opacityExit=A(t.opacity??1,0,qs(r))):a&&(e.opacity=A(t.opacity??1,n.opacity??1,r));for(let i=0;i<Vs;i++){let a=Zi[i],o=Gs(t,a),s=Gs(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||Us(o)===Us(s)?(e[a]=Math.max(A(Hs(o),Hs(s),r),0),(ft.test(s)||ft.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=A(t.rotate||0,n.rotate||0,r))}function Gs(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Ks=Js(0,.5,E),qs=Js(.5,.95,ce);function Js(e,t,n){return r=>r<e?0:r>t?1:n(ue(e,t,r))}function Ys(e,t,n){let r=ji(e)?e:li(e);return r.start(yi(``,r,t,n)),r.animation}function Xs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var Zs=(e,t)=>e.depth-t.depth,Qs=class{constructor(){this.children=[],this.isDirty=!1}add(e){C(this.children,e),this.isDirty=!0}remove(e){ne(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Zs),this.isDirty=!1,this.children.forEach(e)}};function $s(e,t){let n=Ue.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Re(r),e(a-t))};return O.setup(r,!0),()=>Re(r)}function ec(e){return ji(e)?e.get():e}var tc=class{constructor(){this.members=[]}add(e){C(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(ne(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(ne(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},nc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},rc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ic=[``,`X`,`Y`,`Z`],ac=1e3,oc=0;function sc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function cc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Ii(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,O,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&cc(r)}function lc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=oc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,po.value&&(rc.nodes=rc.calculatedTargetDeltas=rc.calculatedProjections=0),this.nodes.forEach(fc),this.nodes.forEach(xc),this.nodes.forEach(Sc),this.nodes.forEach(pc),po.addProjectionMetrics&&po.addProjectionMetrics(rc)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Qs)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new de),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=$i(t)&&!mo(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;O.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=$s(i,250),nc.hasAnimatedSinceResize&&(nc.hasAnimatedSinceResize=!1,this.nodes.forEach(bc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||kc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Is(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...di(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||bc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Re(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Cc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&cc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(gc),this.nodes.forEach(hc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_c);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(vc),this.nodes.forEach(yc),this.nodes.forEach(uc),this.nodes.forEach(dc)):this.nodes.forEach(_c),this.clearAllSnapshots();let e=Ue.now();ze.delta=w(0,1e3/60,e-ze.timestamp),ze.timestamp=e,ze.isProcessing=!0,Be.update.process(ze),Be.preRender.process(ze),Be.render.process(ze),ze.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Aa.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mc),this.sharedNodes.forEach(wc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,O.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){O.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),this.snapshot&&!_s(this.snapshot.measuredBox.x)&&!_s(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=F(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Ms(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||ma(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Nc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return F();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Fc))){let{scroll:e}=this.root;e&&(wa(t.x,e.offset.x),wa(t.y,e.offset.y))}return t}removeElementScroll(e){let t=F();if(ds(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&ds(t,e),wa(t.x,i.offset.x),wa(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||F();ds(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(wa(r.x,-n.scroll.offset.x),wa(r.y,-n.scroll.offset.y)),ma(n.latestValues)&&Da(r,n.latestValues,n.layout?.layoutBox)}return ma(this.latestValues)&&Da(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=F();ds(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!ma(n.latestValues))continue;let r;n.instance&&(pa(n.latestValues)&&n.updateSnapshot(),r=F(),ds(r,n.measurePageBox())),As(t,n.latestValues,n.snapshot?.layoutBox,r)}return ma(this.latestValues)&&As(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ze.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=ze.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target=F(),this.targetWithTransforms=F()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ss(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):ds(this.target,this.layout.layoutBox),ba(this.target,this.targetDelta)):ds(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),po.value&&rc.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||pa(this.parent.latestValues)||ha(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=F(),this.relativeTargetOrigin=F(),ws(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),ds(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===ze.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;ds(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Ca(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=F());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fs(this.prevProjectionDelta.x,this.projectionDelta.x),fs(this.prevProjectionDelta.y,this.projectionDelta.y)),bs(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Rs(this.projectionDelta.x,this.prevProjectionDelta.x)||!Rs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),po.value&&rc.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Co(),this.projectionDelta=Co(),this.projectionDeltaWithTransform=Co()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=Co();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=F(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!(!c||u||this.options.crossfade!==!0||this.path.some(Oc));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=A(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=A(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(Tc(o.x,e.x,n),Tc(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ws(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Dc(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&Ps(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=F(),ds(f,this.relativeTarget)),c&&(this.animationValues=a,Ws(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Re(this.pendingAnimation),void 0),this.pendingAnimation=O.update(()=>{nc.hasAnimatedSinceResize=!0,this.motionValue||=li(0),this.motionValue.jump(0,!1),this.currentAnimation=Ys(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),Fn(this.currentAnimation,this),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ac),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,layout:n,latestValues:r}=e,{target:i}=e;if(t&&i&&n){if(this!==e&&this.layout&&n&&Pc(this.options.animationType,this.layout.layoutBox,n.layoutBox)){i=this.target||F();let t=_s(this.layout.layoutBox.x);i.x.min=e.target.x.min,i.x.max=i.x.min+t;let n=_s(this.layout.layoutBox.y);i.y.min=e.target.y.min,i.y.max=i.y.min+n}ds(t,i),Da(t,r),bs(this.projectionDeltaWithTransform,this.layoutCorrected,t,r)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new tc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&sc(`z`,e,r,this.animationValues);for(let t=0;t<ic.length;t++)sc(`rotate${ic[t]}`,e,r,this.animationValues),sc(`skew${ic[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=ec(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=ec(t?.pointerEvents)||``),this.hasProjected&&!ma(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Bs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in L){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=L[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?ec(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(hc),this.root.sharedNodes.clear()}}}function uc(e){e.updateLayout()}function dc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)zs(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=_s(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;z(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Pc(i,t.layoutBox,n)&&zs(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=_s(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Co();bs(o,n,t.layoutBox);let s=Co();a?bs(s,e.applyTransform(r,!0),t.measuredBox):bs(s,n,t.layoutBox);let c=!Ms(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=F();ws(s,t.layoutBox,i.layoutBox,o);let c=F();ws(c,n,a.layoutBox,o),Is(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function fc(e){po.value&&rc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function pc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function mc(e){e.clearSnapshot()}function hc(e){e.clearMeasurements()}function gc(e){e.isLayoutDirty=!0,e.updateLayout()}function _c(e){e.isLayoutDirty=!1}function vc(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function yc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function bc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function xc(e){e.resolveTargetDelta()}function Sc(e){e.calcProjection()}function Cc(e){e.resetSkewAndRotation()}function wc(e){e.removeLeadSnapshot()}function Tc(e,t,n){e.translate=A(t.translate,0,n),e.scale=A(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ec(e,t,n,r){e.min=A(t.min,n.min,r),e.max=A(t.max,n.max,r)}function Dc(e,t,n,r){Ec(e.x,t.x,n.x,r),Ec(e.y,t.y,n.y,r)}function Oc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var kc={duration:.45,ease:[.4,0,.1,1]},Ac=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),jc=Ac(`applewebkit/`)&&!Ac(`chrome/`)?Math.round:ce;function Mc(e){e.min=jc(e.min),e.max=jc(e.max)}function Nc(e){Mc(e.x),Mc(e.y)}function Pc(e,t,n){return e===`position`||e===`preserve-aspect`&&!vs(Ls(t),Ls(n),.2)}function Fc(e){return e!==e.root&&e.scroll?.wasRoot}var Ic=lc({attachResizeListener:(e,t)=>Xs(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Lc={current:void 0},Rc=lc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Lc.current){let e=new Ic({});e.mount(window),e.setOptions({layoutScroll:!0}),Lc.current=e}return Lc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),zc=(0,_.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Bc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Vc(...e){return t=>{let n=!1,r=e.map(e=>{let r=Bc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Bc(e[t],null)}}}}function Hc(...e){return _.useCallback(Vc(...e),e)}var B=b(),Uc=class extends _.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Qi(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Qi(e)&&e.offsetWidth||0,r=Qi(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function Wc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,_.useId)(),s=(0,_.useRef)(null),c=(0,_.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,_.useContext)(zc),u=Hc(s,a===!1?void 0:e.props?.ref??e?.ref);return(0,_.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,B.jsx)(Uc,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:_.cloneElement(e,{ref:u})})}var Gc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=S(Kc),d=(0,_.useId)(),f=(0,_.useRef)(n),p=(0,_.useRef)(r);ee(()=>{f.current=n,p.current=r});let m=!0,h=(0,_.useMemo)(()=>(m=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>{u.delete(e),!f.current&&!u.size&&p.current?.()})}),[n,u,r]);return a&&m&&(h={...h}),(0,_.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),_.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,B.jsx)(Wc,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,B.jsx)(te.Provider,{value:h,children:e})};function Kc(){return new Map}function qc(e=!0){let t=(0,_.useContext)(te);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,_.useId)();(0,_.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,_.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Jc=e=>e.key||``;function Yc(e){let t=[];return _.Children.forEach(e,e=>{(0,_.isValidElement)(e)&&t.push(e)}),t}var Xc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=qc(o),f=(0,_.useMemo)(()=>Yc(e),[e]),p=o&&!u?[]:f.map(Jc),m=(0,_.useRef)(!0),h=(0,_.useRef)(f),g=S(()=>new Map),v=(0,_.useRef)(new Set),[y,b]=(0,_.useState)(f),[te,C]=(0,_.useState)(f);ee(()=>{o&&!u&&!te.length&&d?.()},[u,o,te.length,d]),ee(()=>{m.current=!1,h.current=f;for(let e=0;e<te.length;e++){let t=Jc(te[e]);p.includes(t)?(g.delete(t),v.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[te,p.length,p.join(`-`)]);let ne=[];if(f!==y){let e=[...f],t=0;for(let n of te){let r=p.indexOf(Jc(n));r===-1?(e.splice(t++,0,n),ne.push(n)):t=r+ne.length+1}return a===`wait`&&ne.length&&(e=ne),C(Yc(e)),b(f),null}let{forceRender:w}=(0,_.useContext)(x);return(0,B.jsx)(B.Fragment,{children:te.map(e=>{let _=Jc(e),y=o&&!u?!1:f===te||p.includes(_);return(0,B.jsx)(Gc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(v.current.has(_))return;if(g.has(_))v.current.add(_),g.set(_,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(w?.(),C(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},_)})})},Zc=(0,_.createContext)({strict:!1}),Qc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},$c=!1;function el(){if($c)return;let e={};for(let t in Qc)e[t]={isEnabled:e=>Qc[t].some(t=>!!e[t])};zo(e),$c=!0}function tl(){return el(),Bo()}function nl(e){let t=tl();for(let n in e)t[n]={...t[n],...e[n]};zo(t)}var rl=(0,_.createContext)({});function il(e,t){if(Ao(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Do(t)?t:void 0,animate:Do(n)?n:void 0}}return e.inherit===!1?{}:t}function al(e){let{initial:t,animate:n}=il(e,(0,_.useContext)(rl));return(0,_.useMemo)(()=>({initial:t,animate:n}),[ol(t),ol(n)])}function ol(e){return Array.isArray(e)?e.join(` `):e}var sl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function cl(e,t,n){for(let r in t)!ji(t[r])&&!R(r,n)&&(e[r]=t[r])}function ll({transformTemplate:e},t){return(0,_.useMemo)(()=>{let n=sl();return aa(n,t,e),Object.assign({},n.vars,n.style)},[t])}function ul(e,t){let n=e.style||{},r={};return cl(r,n,e),Object.assign(r,ll(e,t)),r}function dl(e,t){let n={},r=ul(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var fl=()=>({...sl(),attrs:{}});function pl(e,t,n,r){let i=(0,_.useMemo)(()=>{let n=fl();return ua(n,t,Zo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};cl(t,e.style,e),i.style={...t,...i.style}}return i}var ml=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function hl(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||ml.has(e)}function gl(e,t){return e.startsWith(`on`)?!hl(e):t?.(e)??!hl(e)}function _l(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&(ji(e[a])||(gl(a,r)||n===!0&&hl(a)||!t&&!hl(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}var vl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function yl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(vl.indexOf(e)>-1||/[A-Z]/u.test(e))}function bl(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??yl(e)?pl:dl)(t,r,i,e),l=_l(t,typeof e==`string`,a,s),u=e===_.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,_.useMemo)(()=>ji(d)?d.get():d,[d]);return(0,_.createElement)(e,{...u,children:f})}function V({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:xl(n,r,i,e),renderState:t()}}function xl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=ec(a[e]);let{initial:o,animate:s}=e,c=Ao(e),l=jo(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Eo(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=wi(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Sl=e=>(t,n)=>{let r=(0,_.useContext)(rl),i=(0,_.useContext)(te),a=()=>V(e,t,r,i);return n?a():S(a)},Cl=Sl({scrapeMotionValuesFromProps:qo,createRenderState:sl}),wl=Sl({scrapeMotionValuesFromProps:$o,createRenderState:fl}),Tl=Symbol.for(`motionComponentSymbol`);function El(e,t,n){let r=(0,_.useRef)(n);(0,_.useInsertionEffect)(()=>{r.current=n});let i=(0,_.useRef)(null);return(0,_.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var Dl=(0,_.createContext)({});function Ol(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function kl(e,t,n,r,i,a){let{visualElement:o}=(0,_.useContext)(rl),s=(0,_.useContext)(Zc),c=(0,_.useContext)(te),l=(0,_.useContext)(zc),u=l.reducedMotion,d=l.skipAnimations,f=(0,_.useRef)(null),p=(0,_.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,_.useContext)(Dl);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Al(f.current,n,i,h);let g=(0,_.useRef)(!1);(0,_.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let v=n[Fi],y=(0,_.useRef)(!!v&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(v)&&window.MotionHasOptimisedAnimation?.(v));return ee(()=>{p.current&&m&&(m.animationState?.animateChanges(),m.enteringChildren=void 0)},[]),ee(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),y.current&&m.animationState&&m.animationState.animateChanges())}),(0,_.useEffect)(()=>{m&&(!y.current&&m.animationState&&m.animationState.animateChanges(),y.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(v)}),!1),m.enteringChildren=void 0)}),m}function Al(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:jl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Ol(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function jl(e){if(e)return e.options.allowProjection===!1?jl(e.parent):e.projection}function Ml(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&nl(r);let a=n?n===`svg`:yl(e),o=a?wl:Cl;function s(n,s){let c,l={...(0,_.useContext)(zc),...n,layoutId:Nl(n)},{isStatic:u,isValidProp:d}=l,f=al(n),p=o(n,u);if(!u&&typeof window<`u`){Pl(l,r);let t=Fl(l);c=t.MeasureLayout,f.visualElement=kl(e,p,l,i,t.ProjectionNode,a)}return(0,B.jsxs)(rl.Provider,{value:f,children:[c&&f.visualElement?(0,B.jsx)(c,{visualElement:f.visualElement,...l}):null,bl(e,n,El(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,_.forwardRef)(s);return c[Tl]=e,c}function Nl({layoutId:e}){let t=(0,_.useContext)(x).id;return t&&e!==void 0?t+`-`+e:e}function Pl(e,t){(0,_.useContext)(Zc).strict}function Fl(e){let{drag:t,layout:n}=tl();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Il(e,t){if(typeof Proxy>`u`)return Ml;let n=new Map,r=(n,r)=>Ml(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Ml(a,void 0,e,t)),n.get(a))})}var Ll=(e,t)=>t.isSVG??yl(e)?new es(t):new Yo(t,{allowProjection:e!==_.Fragment}),Rl=class extends I{constructor(e){super(e),e.animationState||=ss(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Eo(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},zl=0,Bl={animation:{Feature:Rl},exit:{Feature:class extends I{constructor(){super(...arguments),this.id=zl++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Ti(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.blockInitialAnimation=!1,this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1,this.exitAnimation=void 0;return}let r=this.exitAnimation=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.exitAnimation===r&&(this.isExitComplete=!0,t(this.id))})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Vl(e){return{point:{x:e.pageX,y:e.pageY}}}var Hl=e=>t=>za(t)&&e(t,Vl(t));function Ul(e,t,n,r){return Xs(e,t,Hl(n),r)}var Wl=({current:e})=>e?e.ownerDocument.defaultView:null,Gl=(e,t)=>Math.abs(e-t);function Kl(e,t){let n=Gl(e.x,t.x),r=Gl(e.y,t.y);return Math.sqrt(n**2+r**2)}var ql=new Set([`auto`,`scroll`]),Jl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.hasPendingMove=!1,this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Yl(this.lastRawMoveEventInfo,this.transformPagePoint));let e=Zl(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Kl(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e;this.history.push({...r,timestamp:Ue.now()});let{onStart:i,onMove:a}=this.handlers;t||(i&&i(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Yl(t,this.transformPagePoint),this.hasPendingMove=!0,O.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.hasPendingMove&&this.updatePoint(),this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Zl(e.type===`pointercancel`?this.lastMoveEventInfo:Yl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!za(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Yl(Vl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=ze;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Zl(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=le(Ul(this.contextWindow,`pointermove`,this.handlePointerMove,d),Ul(this.contextWindow,`pointerup`,this.handlePointerUp,d),Ul(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(ql.has(e.overflowX)||ql.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),O.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Re(this.updatePoint)}};function Yl(e,t){return t?{point:t(e.point)}:e}function Xl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Zl({point:e},t){return{point:e,delta:Xl(e,$l(t)),offset:Xl(e,Ql(t)),velocity:eu(t,.1)}}function Ql(e){return e[0]}function $l(e){return e[e.length-1]}function eu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=$l(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>fe(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>fe(t)*2&&(r=e[1]);let a=pe(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function tu(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?A(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?A(n,e,r.max):Math.min(e,n)),e}function nu(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function ru(e,{top:t,left:n,bottom:r,right:i}){return{x:nu(e.x,n,i),y:nu(e.y,t,r)}}function iu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function au(e,t){return{x:iu(e.x,t.x),y:iu(e.y,t.y)}}function ou(e,t){let n=.5,r=_s(e),i=_s(t);return i>r?n=ue(t.min,t.max-r,e.min):r>i&&(n=ue(e.min,e.max-i,t.min)),w(0,1,n)}function su(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var H=.35;function cu(e=H){return e===!1?e=0:e===!0&&(e=H),{x:lu(e,`left`,`right`),y:lu(e,`top`,`bottom`)}}function lu(e,t,n){return{min:uu(e,t),max:uu(e,n)}}function uu(e,t){return typeof e==`number`?e:e[t]||0}var du=new WeakMap,fu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=F(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(e),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Pa(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zs(e=>{let t=this.getAxisMotionValue(e).get()||0;if(ft.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=_s(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&O.update(()=>i(e,t),!1,!0),Ni(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=gu(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&O.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Jl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Wl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&O.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!hu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=tu(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Ol(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?ru(n.layoutBox,e):!1,this.elastic=cu(t),r!==this.constraints&&!Ol(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&zs(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=su(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ol(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=ka(n,r.root,this.visualElement.getTransformPagePoint()),a=au(r.layout.layoutBox,i);if(t){let e=t(P(a));this.hasMutatedConstraints=!!e,e&&(a=N(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=zs(o=>{if(!hu(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Ni(this.visualElement,e),n.start(yi(e,n,0,t,this.visualElement,!1))}stopAnimation(){zs(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor({clientX:e,clientY:t}){let{drag:n}=this.getProps(),r={x:e,y:t},i=this.visualElement.getTransformPagePoint()?.(r)||r,a=this.visualElement.measureViewportBox();zs(e=>{if(!hu(e,n,this.currentDirection))return;let t=this.getAxisMotionValue(e),{min:r,max:o}=a[e];t.set((t.get()||0)+i[e]-A(r,o,.5))})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ol(t)||!n||!this.constraints)return;this.stopAnimation();let r=this.constraints,i={x:0,y:0};zs(e=>{let t=this.getAxisMotionValue(e).get();i[e]=ou({min:t,max:t},r[e])});let{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),zs(t=>{let n=this.getAxisMotionValue(t);if(!hu(t,e,null)||!n.get())return;let{min:r,max:a}=this.constraints[t];n.set(A(r,a,i[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;du.set(this.visualElement,this);let e=this.visualElement.current,t=Ul(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Ua(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Ol(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=mu(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),O.read(r);let o=Xs(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(zs(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=H,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function pu(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function mu(e,t,n){let r=uo(e,pu(n)),i=uo(t,pu(n));return()=>{r(),i()}}function hu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function gu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var _u=class extends I{constructor(e){super(e),this.removeGroupControls=ce,this.removeListeners=ce,this.controls=new fu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ce}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},vu=e=>(t,n)=>{e&&O.update(()=>e(t,n),!1,!0)},yu=class extends I{constructor(){super(...arguments),this.removePointerDownListener=ce}onPointerDown(e){this.session=new Jl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:vu(e),onStart:vu(t),onMove:vu(n),onEnd:(e,t)=>{delete this.session,r&&O.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Ul(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},bu=!1,xu=class extends _.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),bu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),nc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),bu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||O.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Aa.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;bu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Su(e){let[t,n]=qc(),r=(0,_.useContext)(x);return(0,B.jsx)(xu,{...e,layoutGroup:r,switchLayoutGroup:(0,_.useContext)(Dl),isPresent:t,safeToRemove:n})}var U={pan:{Feature:yu},drag:{Feature:_u,ProjectionNode:Rc,MeasureLayout:Su}};function Cu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&O.postRender(()=>i(t,Vl(t)))}var wu=class extends I{mount(){let{current:e}=this.node;e&&(this.unmount=La(e,(e,t)=>(Cu(this.node,t,`Start`),e=>Cu(this.node,e,`End`))))}unmount(){}},Tu=class extends I{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}e&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=le(Xs(this.node.current,`focus`,()=>this.onFocus()),Xs(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Eu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&O.postRender(()=>i(t,Vl(t)))}var Du=class extends I{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Xa(e,(e,t)=>(Eu(this.node,t,`Start`),(e,{success:t})=>Eu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Ou=new WeakMap,ku=new WeakMap,Au=e=>{let t=Ou.get(e.target);t&&t(e)},ju=e=>{e.forEach(Au)};function Mu({root:e,...t}){let n=e||document;ku.has(n)||ku.set(n,{});let r=ku.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(ju,{root:e,...t})),r[i]}function Nu(e,t,n){let r=Mu(t);return Ou.set(e,n),r.observe(e),()=>{Ou.delete(e),r.unobserve(e)}}var Pu={some:0,all:1},Fu=class extends I{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Pu[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Nu(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Iu(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Iu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Lu={inView:{Feature:Fu},tap:{Feature:Du},focus:{Feature:Tu},hover:{Feature:wu}},Ru={layout:{ProjectionNode:Rc,MeasureLayout:Su}},zu=Il({...Bl,...Lu,...U,...Ru},Ll);function Bu(e){return typeof window>`u`?!1:e?Mr():jr()}var Vu=50,Hu=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Uu=()=>({time:0,x:Hu(),y:Hu()}),Wu={x:{length:`Width`,position:`Left`},y:{length:`Height`,position:`Top`}};function Gu(e,t,n,r){let i=n[t],{length:a,position:o}=Wu[t],s=i.current,c=n.time;i.current=Math.abs(e[`scroll${o}`]),i.containerLength=e[`client${a}`],i.targetLength=e[`scroll${a}`],i.scrollLength=i.targetLength-i.containerLength,i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=ue(0,i.scrollLength,i.current);let l=r-c;i.velocity=l>Vu?0:me(i.current-s,l)}function Ku(e,t,n){for(let r in Wu)Gu(e,r,t,n);t.time=n}var qu={start:0,center:.5,end:1};function Ju(e,t,n=0){let r=0;if(e in qu&&(e=qu[e]),typeof e==`string`){let t=parseFloat(e);e.endsWith(`px`)?r=t:e.endsWith(`%`)?e=t/100:e.endsWith(`vw`)?r=t/100*document.documentElement.clientWidth:e.endsWith(`vh`)?r=t/100*document.documentElement.clientHeight:e=t}return typeof e==`number`&&(r=t*e),n+r}var Yu=[0,0];function Xu(e,t,n,r){let i=Array.isArray(e)?e:Yu,a=0,o=0;return typeof e==`number`?i=[e,e]:typeof e==`string`&&(e=e.trim(),i=e.includes(` `)?e.split(` `):[e,qu[e]?e:`0`]),a=Ju(i[0],n,r),o=Ju(i[1],t),a-o}var Zu={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]};function Qu(e,t){let n=e.length-1;if(n<1)return 0;let r=e[0]>e[n],i=t=>e[r?n-t:t];if(e[0]===e[1]&&t<i(0))return+!!r;let a=0;for(;a<n-1&&t>=i(a+1);)a++;let o=(a+ue(i(a),i(a+1),t))/n;return r?1-o:o}function $u(e,t){let{offset:n=Zu.All,axis:r=`y`}=t,i=e[r];i.offset.length=0;let a=n.length;for(let e=0;e<a;e++)i.offset[e]=Xu(n[e],i.containerLength,i.targetLength,i.targetOffset);i.progress=w(0,1,Qu(i.offset,i.current))}function ed(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(Qi(r))n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName===`svg`){let e=r.getBoundingClientRect();r=r.parentElement;let t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,a=r.parentNode;for(;!i;)a.tagName===`svg`&&(i=a),a=r.parentNode;r=i}else break;return n}function td(e){return`getBBox`in e&&e.tagName!==`svg`?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function W(e,t,n,r={}){let{target:i}=r,a=i||r.offset;return{measure:t=>{if(a){n.time=t.time;for(let e in Wu){let r=e,{offset:i}=n[r];Object.assign(n[r],t[r]),n[r].offset=i}if(i&&i!==e){let t=ed(i,e),r=td(i);n.x.targetOffset=t.x,n.y.targetOffset=t.y,n.x.targetLength=r.width,n.y.targetLength=r.height}$u(n,r)}},notify:e=>t(a?n:e)}}var G=new WeakMap,K=new WeakMap,q=new WeakMap,J=new WeakMap,nd=e=>e===document.scrollingElement?window:e;function rd(e,{container:t=document.scrollingElement,trackContentSize:n=!1,...r}={}){if(!t)return ce;let i=q.get(t);i||(i=new Set,q.set(t,i));let a=W(t,e,Uu(),r);if(i.add(a),!G.has(t)){let e=Uu(),n=()=>{Ku(t,e,ze.timestamp);for(let t of i)t.measure(e);O.preUpdate(r)},r=()=>{for(let t of i)t.notify(e)},a=()=>O.read(n);G.set(t,a);let o=nd(t);window.addEventListener(`resize`,a),t!==document.documentElement&&K.set(t,uo(t,a)),o.addEventListener(`scroll`,a),a()}if(n&&!J.has(t)){let e=G.get(t),n={width:t.scrollWidth,height:t.scrollHeight},r=O.read(()=>{let r=t.scrollWidth,i=t.scrollHeight;(n.width!==r||n.height!==i)&&(e(),n.width=r,n.height=i)},!0);J.set(t,r)}let o=G.get(t);return O.read(o,!1,!0),()=>{Re(o);let e=q.get(t);if(!e||(e.delete(a),e.size))return;q.delete(t);let n=G.get(t);G.delete(t),n&&(nd(t).removeEventListener(`scroll`,n),K.get(t)?.(),window.removeEventListener(`resize`,n));let r=J.get(t);r&&(Re(r),J.delete(t))}}var id=[[Zu.Enter,`entry`],[Zu.Exit,`exit`],[Zu.Any,`cover`],[Zu.All,`contain`]],ad={start:0,end:1};function od(e){let t=e.trim().split(/\s+/);if(t.length!==2)return;let n=ad[t[0]],r=ad[t[1]];if(n!==void 0&&r!==void 0)return[n,r]}function sd(e){if(e.length!==2)return;let t=[];for(let n of e)if(Array.isArray(n))t.push(n);else if(typeof n==`string`){let e=od(n);if(!e)return;t.push(e)}else return;return t}function cd(e,t){let n=sd(e);if(!n)return!1;for(let e=0;e<2;e++){let r=n[e],i=t[e];if(r[0]!==i[0]||r[1]!==i[1])return!1}return!0}function ld(e){if(!e)return{rangeStart:`contain 0%`,rangeEnd:`contain 100%`};for(let[t,n]of id)if(cd(e,t))return{rangeStart:`${n} 0%`,rangeEnd:`${n} 100%`}}var ud=new Map;function dd(e){let t={value:0};return{currentTime:t,cancel:rd(n=>{t.value=n[e.axis].progress*100},e)}}function fd({container:e,...t}){let{axis:n}=t,r=ud.get(e);r||(r=new Map,ud.set(e,r));let i=t.target??`self`,a=r.get(i);a||(a={},r.set(i,a));let o=n+(t.offset??[]).join(`,`);return a[o]||(t.target&&Bu(t.target)?ld(t.offset)?a[o]=new ViewTimeline({subject:t.target,axis:n}):a[o]=dd({container:e,...t}):Bu()?a[o]=new ScrollTimeline({source:e,axis:n}):a[o]=dd({container:e,...t})),a[o]}function pd(e,t){let n=fd(t),r=t.target?ld(t.offset):void 0,i=t.target?Bu(t.target)&&!!r:Bu();return e.attachTimeline({timeline:i?n:void 0,...r&&i&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:e=>(e.pause(),fo(t=>{e.time=e.iterationDuration*t},n))})}function md(e,{axis:t=`y`,source:n,container:r=document.scrollingElement,...i}={}){if(!r)return ce;let a={axis:t,container:n||r,...i};return typeof e==`function`?rd(n=>e(n[t].progress,n),a):pd(e,a)}var hd=()=>({scrollX:li(0),scrollY:li(0),scrollXProgress:li(0),scrollYProgress:li(0)}),gd=e=>e?!e.current:!1;function _d(e,t,n,r){return{factory:i=>{let a,o=()=>{if(gd(n)||gd(r)){Aa.read(o);return}a=md(i,{...t,axis:e,container:n?.current||void 0,target:r?.current||void 0})};return Aa.read(o),()=>{ja(o),a?.()}},times:[0,1],keyframes:[0,1],ease:e=>e,duration:1}}function vd(e,t){return typeof window>`u`?!1:e?Mr()&&!!ld(t):jr()}function yd({container:e,target:t,...n}={}){let r=S(hd);vd(t,n.offset)&&(r.scrollXProgress.accelerate=_d(`x`,n,e,t),r.scrollYProgress.accelerate=_d(`y`,n,e,t));let i=(0,_.useRef)(null),a=(0,_.useRef)(!1),o=(0,_.useCallback)(()=>(i.current=md((e,{x:t,y:n})=>{r.scrollX.set(t.current),r.scrollXProgress.set(t.progress),r.scrollY.set(n.current),r.scrollYProgress.set(n.progress)},{...n,container:e?.current||void 0,target:t?.current||void 0}),()=>{i.current?.()}),[e,t,JSON.stringify(n.offset)]);return ee(()=>{if(a.current=!1,gd(e)||gd(t)){a.current=!0;return}return o()},[o]),(0,_.useEffect)(()=>{if(!a.current)return;let n,r=()=>{let r=gd(e),i=gd(t);!r&&!i&&(n=o())};return Aa.read(r),()=>{ja(r),n?.()}},[o]),r}function bd(e){let t=S(()=>li(e)),{isStatic:n}=(0,_.useContext)(zc);if(n){let[,n]=(0,_.useState)(e);(0,_.useEffect)(()=>t.on(`change`,n),[])}return t}function Y(e,t){let n=bd(t()),r=()=>n.set(t());return r(),ee(()=>{let t=()=>O.preRender(r,!1,!0),n=e.map(e=>e.on(`change`,t));return()=>{n.forEach(e=>e()),Re(r)}}),n}function xd(e){si.current=[],e();let t=Y(si.current,e);return si.current=void 0,t}function Sd(e,t,n,r){if(typeof e==`function`)return xd(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!=`function`)return wd(e,t,n,r);let i=typeof t==`function`?t:ho(t,n,r),a=Array.isArray(e)?Cd(e,i):Cd([e],([e])=>i(e)),o=Array.isArray(e)?void 0:e.accelerate;return o&&!o.isTransformed&&typeof t!=`function`&&Array.isArray(n)&&r?.clamp!==!1&&(a.accelerate={...o,times:t,keyframes:n,isTransformed:!0,...r?.ease?{ease:r.ease}:{}}),a}function Cd(e,t){let n=S(()=>[]);return Y(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}function wd(e,t,n,r){let i=S(()=>Object.keys(n)),a=S(()=>({}));for(let o of i)a[o]=Sd(e,t,n[o],r);return a}function Td(e,t={}){let{isStatic:n}=(0,_.useContext)(zc),r=()=>ji(e)?e.get():e;if(n)return Sd(r);let i=bd(r());return(0,_.useInsertionEffect)(()=>yo(i,e,t),[i,JSON.stringify(t)]),i}function Ed(e,t={}){return Td(e,{type:`spring`,...t})}var X=zu,Dd=(0,_.createContext)(null);function Od({children:e}){let t=bd(.5);return(0,_.useEffect)(()=>{let e=e=>t.set(e.clientX/window.innerWidth);return window.addEventListener(`pointermove`,e),()=>window.removeEventListener(`pointermove`,e)},[t]),(0,B.jsx)(Dd.Provider,{value:t,children:e})}function kd({className:e=``,travel:t=12}){let n=Ed(Sd((0,_.useContext)(Dd),[0,1],[-t,t]),{stiffness:150,damping:15,mass:.4});return(0,B.jsx)(`span`,{className:`eye ${e}`,children:(0,B.jsx)(X.span,{className:`eye-pupil`,style:{x:n}})})}var Ad=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lumira - Advanced Analytics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>

<body class="relative min-h-screen overflow-x-hidden flex flex-col font-sans text-[#F2F4FB] bg-[#070914] selection:bg-[#7FC4FF]/30 selection:text-[#7FC4FF]">

    <!-- WebGL Constellation Canvas Shell & Depth Overlay -->
    <div class="fixed inset-0 -z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#0E1222_0%,_#070914_100%)]"></div>
    <div class="fixed inset-0 -z-10 pointer-events-none">
        <canvas id="constellationCanvas" class="w-full h-full"></canvas>
    </div>
    <div class="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-[#0E1222]/40 to-[#070914] opacity-80"></div>

    <!-- Header (Elevated Glassy UI) -->
    <nav class="w-full relative z-20 bg-[#0E1222]/40 backdrop-blur-md border-b border-[#1C2236] shadow-[0_2px_8px_rgba(0,0,0,0.30)]">
        <div class="flex justify-between items-center py-5 px-6 md:px-12 max-w-[90rem] mx-auto">
            
            <!-- Brand -->
            <div class="flex items-center gap-2 text-[#F2F4FB]">
                <div class="relative h-8 w-8 bg-transparent border border-[#1C2236] flex items-center justify-center rounded-md" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <span class="h-2 w-2 rounded-full bg-[#E6C879]" style="box-shadow: 0 0 12px rgba(230,200,121,0.6);"></span>
                </div>
                <span class="text-xl font-thin tracking-tight uppercase ml-1">Lumira</span>
            </div>

            <div class="hidden md:flex items-center gap-10 text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Features</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Use Cases</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Developers</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Pricing</a>
            </div>

            <!-- Gradient Border Shell CTA -->
            <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/30 to-transparent">
                <a href="#" class="block bg-[#0E1222]/80 backdrop-blur-sm text-[#E6C879] px-6 py-2.5 rounded-full text-xs font-normal uppercase tracking-widest hover:bg-[#E6C879] hover:text-[#0E1222] transition-colors">
                    Get Access
                </a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-10 px-6 pt-24 pb-28 md:pt-32 lg:pt-40">

        <div class="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

            <!-- Trust Indicators -->
            <div class="flex items-center gap-4 mb-12 fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);">
                <div class="flex -space-x-3">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User 1" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-30 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User 2" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-20 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="User 3" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-10 opacity-80 mix-blend-luminosity">
                </div>

                <div class="flex flex-col items-start gap-1">
                    <div class="flex items-center text-[#E6C879] text-lg">
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                    </div>
                    <span class="text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">Trusted by 10,000+ data teams</span>
                </div>
            </div>

            <!-- Headline (Ultralight System Display - GSAP Masked Reveal) -->
            <h1 class="masked-reveal text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-[#F2F4FB] text-center leading-tight max-w-5xl cursor-default">
                Uncover hidden patterns<br />with intelligent analytics
            </h1>

            <!-- Subheadline (GSAP Masked Reveal) -->
            <p class="masked-reveal mt-8 text-lg md:text-xl text-[#9AA3BC] max-w-2xl font-normal leading-relaxed">
                Lumira synthesizes complex datasets, disparate sources, and endless metrics into actionable, automated insights that guide your decisions.
            </p>

            <!-- Chunky CTAs to Refined Border Shells -->
            <div class="flex flex-col sm:flex-row items-center gap-6 mt-14 w-full justify-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;">
                
                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/40 to-transparent w-full sm:w-auto" style="box-shadow: 0 16px 40px rgba(0,0,0,0.36);">
                    <a href="#" class="w-full sm:w-auto bg-[#E6C879] text-[#0E1222] px-12 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#E6C879]/90 transition-colors flex items-center justify-center">
                        Get Access
                    </a>
                </div>

                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/16 to-transparent w-full sm:w-auto" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <a href="#" class="w-full sm:w-auto bg-[#0E1222]/60 backdrop-blur-md text-[#F2F4FB] px-10 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#1C2236]/80 transition-colors flex items-center justify-center gap-2 group">
                        Explore Demo
                        <iconify-icon icon="solar:arrow-right-linear" class="text-xl text-[#7FC4FF] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" stroke-width="1.5"></iconify-icon>
                    </a>
                </div>

            </div>
        </div>

        <!-- Logos Section -->
        <div class="w-full mt-28 md:mt-32 max-w-6xl mx-auto flex flex-col items-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;">
            <p class="text-xs font-normal text-[#5C668A] mb-12 tracking-widest uppercase">Powering data-driven enterprises</p>

            <div class="flex flex-wrap justify-center items-center gap-10 md:gap-16">

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:box-linear" stroke-width="1.5"></iconify-icon>
                    Quantus
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:globus-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    NexusData
                </div>

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    OmniStream
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:routing-2-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    Veridian
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:letter-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    ApexMetrics
                </div>

                <div class="hidden lg:flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    Zenith
                </div>

            </div>
        </div>

    </main>

    <script>
        // WebGL Drifting Nodes & Network Logic
        const canvas = document.getElementById('constellationCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        const LINK = 160; 
        const MAX_NODES = window.innerWidth < 768 ? 40 : 85;
        let pointer = { x: -1000, y: -1000 };

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
        }
        
        window.addEventListener('resize', () => {
            resize();
            initNodes();
        });
        resize();

        function initNodes() {
            nodes = [];
            for(let i=0; i<MAX_NODES; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2.4 + 1.8
                });
            }
        }
        initNodes();

        // Pointer gravity tracker
        document.addEventListener('mousemove', e => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        });

        // Clear pointer on leave
        document.addEventListener('mouseleave', () => {
            pointer.x = -1000;
            pointer.y = -1000;
        });

        function dist(a, b) {
            return Math.hypot(a.x - b.x, a.y - b.y);
        }

        // Render Loop
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            // Draw Links first so nodes sit crisp on top
            ctx.strokeStyle = '#E6C879';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const d = dist(nodes[i], nodes[j]);
                    if (d < LINK) {
                        ctx.globalAlpha = 0.22 + (1 - d/LINK) * 0.55;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce off edges
                if(node.x < 0 || node.x > width) node.vx *= -1;
                if(node.y < 0 || node.y > height) node.vy *= -1;

                // Gentle Pointer gravity
                const pd = dist(node, pointer);
                if(pd < 220) {
                    node.x -= (node.x - pointer.x) * 0.005;
                    node.y -= (node.y - pointer.y) * 0.005;
                }
                
                // Draw Node (Pale Gold) — core + soft halo so particles read at retina scale
                const pulse = 0.78 + Math.sin(Date.now() * 0.001 + node.x) * 0.22;
                ctx.fillStyle = '#E6C879';
                ctx.globalAlpha = pulse * 0.28;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 2.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = pulse;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(animateCanvas);
        }
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            animateCanvas();
        }

        // --- Intersection Observer for structural fade-ins ---
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        });

        // --- GSAP Masked Staggered Word Reveal ---
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
                gsap.registerPlugin(ScrollTrigger);
                
                const revealElements = document.querySelectorAll('.masked-reveal');
                
                revealElements.forEach(el => {
                    // Non-destructive split that respects <br> tags
                    const html = el.innerHTML;
                    const fragments = html.split(/(<br\\s*\\/?>|\\s+)/);
                    el.innerHTML = '';
                    
                    fragments.forEach(frag => {
                        if (/<br/i.test(frag)) {
                            el.appendChild(document.createElement('br'));
                        } else if (frag.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.style.cssText = 'overflow: hidden; display: inline-block; vertical-align: bottom; padding-top: 0.1em; margin-top: -0.1em;';
                            
                            const inner = document.createElement('span');
                            inner.className = 'reveal-word';
                            inner.style.cssText = 'display: inline-block; transform: translateY(110%); will-change: transform;';
                            inner.innerHTML = frag;
                            
                            wrapper.appendChild(inner);
                            el.appendChild(wrapper);
                        } else {
                            // Preserve spaces
                            el.appendChild(document.createTextNode(frag));
                        }
                    });

                    // Trigger the animation
                    gsap.to(el.querySelectorAll('.reveal-word'), {
                        y: '0%',
                        duration: 1.2,
                        ease: 'power4.out',
                        stagger: 0.04,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                        }
                    });
                });
            }
        });
    <\/script>
</body>
</html>`,jd=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenith Compute Network</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:wght@400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030509] min-h-screen flex items-center justify-center p-4 md:p-12 font-sans antialiased text-[#FFFFFF] overflow-x-hidden selection:bg-[#60A5FA] selection:text-[#030509]">

    <!-- Gradient Border Shell Technique -->
    <div class="w-full max-w-[1440px] shadow-[0px_100px_80px_rgba(0,0,0,0.12),_0px_41.8px_33.4px_rgba(0,0,0,0.086),_0px_22.3px_17.9px_rgba(0,0,0,0.07)]" style="display:inline-block; padding:1px; border-radius:24px; background:linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0));">
        
        <!-- Main Inner Surface -->
        <div class="relative w-full flex flex-col md:flex-row overflow-hidden min-h-[600px] md:min-h-[650px]" style="background:#030509; border-radius:23px; box-shadow:rgba(255, 255, 255, 0.02) 0px 0px 40px 0px inset;">
            
            <!-- Canvas Particle System Background Field -->
            <canvas id="particle-canvas" class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"></canvas>

            <!-- Matte Noise Texture Overlay -->
            <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

            <!-- Left Column: Copy & Controls -->
            <div class="w-full md:w-[38%] px-8 lg:px-16 py-10 md:py-14 flex flex-col justify-between relative z-20 shrink-0 border-r border-white/5">
                
                <!-- Lineart Detail: Corner Brackets -->
                <div class="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/20"></div>
                <div class="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/20"></div>
                <div class="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/20"></div>
                <div class="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/20"></div>

                <!-- Top Badge -->
                <div class="fade-in-el opacity-0 inline-flex items-center gap-2 px-3 py-1 text-xs font-light tracking-widest uppercase mb-16 border border-white/10 text-[#60A5FA] rounded-full w-max bg-white/5 backdrop-blur-sm">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                    ZENITH COMPUTE
                </div>

                <!-- Heading (Playfair Display) -->
                <div>
                    <h1 id="hero-heading" class="text-5xl md:text-7xl tracking-tight text-[#FFFFFF] mb-6 leading-none opacity-0 font-light" style="font-family: 'Playfair Display', serif;">
                        Infinite execution threads.<br>The cognitive backbone.
                    </h1>

                    <!-- Body Text -->
                    <p class="fade-in-el opacity-0 text-[#9CA3AF] text-lg leading-relaxed max-w-[320px] font-light mb-8" style="font-family: 'Inter', sans-serif;">
                        An autonomous state-management protocol synchronizing distributed workloads across edge micro-clusters and centralized servers. Adjust the target environment to refine processing speed.
                    </p>
                    
                    <!-- Primary Action Button -->
                    <button class="fade-in-el opacity-0 bg-[#60A5FA] text-[#030509] px-8 py-3.5 rounded-full text-sm font-light w-max hover:bg-blue-300 transition-colors flex items-center gap-2" style="font-family: 'Inter', sans-serif;">
                        Provision Network
                        <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                    </button>
                </div>

                <!-- Custom Slider Control -->
                <div class="fade-in-el opacity-0 mt-16 pt-8 w-full relative">
                    <!-- Track Line -->
                    <div class="w-full h-[1px] bg-white/10 relative">
                        <!-- Thumb / Active Indicator -->
                        <div class="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#60A5FA] rounded-full shadow-[0_0_12px_rgba(96,165,250,0.6)]"></div>
                    </div>
                    
                    <!-- Labels -->
                    <div class="flex justify-between mt-4 w-full" style="font-family: 'Inter', sans-serif;">
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Local</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Edge</span>
                        <span class="text-xs font-light tracking-widest uppercase text-[#60A5FA] cursor-default">Ring</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Core</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Cloud</span>
                    </div>
                </div>

            </div>

            <!-- Right Column: Media Frame -->
            <div class="w-full md:w-[62%] relative bg-transparent overflow-hidden min-h-[400px] md:min-h-0 border-t md:border-t-0 border-white/5 pointer-events-none" style="transform-style: preserve-3d;">
                
                <!-- Deep Integration Gradients -->
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-[#030509] via-transparent to-transparent opacity-90"></div>
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#030509] via-[#030509]/30 to-transparent opacity-80"></div>
                
                <!-- Glassmorphism Floating Logic Card -->
                <div id="floating-card" class="absolute top-[25%] right-[12%] z-40 bg-white/[0.03] backdrop-blur-xl border border-[#60A5FA]/20 p-5 rounded-2xl shadow-[0_22px_40px_rgba(0,0,0,0.4)] w-[220px] text-[#60A5FA] pointer-events-auto">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-8 h-8 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
                            <iconify-icon icon="solar:transfer-horizontal-linear" stroke-width="1.5"></iconify-icon>
                        </div>
                        <span class="text-xs uppercase tracking-widest font-light" style="font-family: 'Inter', sans-serif;">Throughput</span>
                    </div>
                    <div class="text-3xl leading-9 tracking-tighter mb-1" style="font-family: 'Inter', sans-serif;">128.6 PB/s</div>
                    <div class="text-xs uppercase tracking-widest text-[#60A5FA]/60" style="font-family: 'Inter', sans-serif;">Sync Efficiency</div>
                </div>

            </div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // --- ASCII Particle System Implementation ---
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');

            let width, height;
            let nodes = [];
            let beams = [];
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()'.split('');
            let mouse = { x: -1000, y: -1000 };

            function resize() {
                width = canvas.clientWidth;
                height = canvas.clientHeight;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }

            window.addEventListener('resize', () => {
                resize();
                initParticles();
            });

            window.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            function initParticles() {
                nodes = Array.from({ length: 90 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vy: (Math.random() * 0.4) + 0.1,
                    char: chars[Math.floor(Math.random() * chars.length)]
                }));

                beams = Array.from({ length: 25 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    length: Math.random() * 100 + 50,
                    speed: (Math.random() * 6) + 3,
                    opacity: Math.random() * 0.5 + 0.3
                }));
            }

            resize();
            initParticles();

            function draw() {
                ctx.clearRect(0, 0, width, height);

                // 1. Upward Beams (Fast)
                beams.forEach(b => {
                    b.y -= b.speed;
                    if (b.y + b.length < 0) {
                        b.y = height + 100;
                        b.x = Math.random() * width;
                    }
                    let g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
                    g.addColorStop(0, \`rgba(96, 165, 250, \${b.opacity})\`);
                    g.addColorStop(1, 'transparent');
                    ctx.strokeStyle = g;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x, b.y + b.length);
                    ctx.stroke();
                });

                // 2. Interactive Nodes (ASCII)
                ctx.font = '12px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Proximity Lines
                ctx.lineWidth = 0.5;
                for(let i = 0; i < nodes.length; i++) {
                    let n1 = nodes[i];
                    for(let j = i + 1; j < nodes.length; j++) {
                        let n2 = nodes[j];
                        let d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
                        if(d < 120) {
                            ctx.strokeStyle = \`rgba(156, 163, 175, \${0.15 * (1 - d/120)})\`;
                            ctx.beginPath();
                            ctx.moveTo(n1.x, n1.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }
                }

                nodes.forEach(n => {
                    n.y += n.vy; // Slow drift
                    if(n.y > height + 20) {
                        n.y = -20;
                        n.x = Math.random() * width;
                    }

                    let dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);

                    // Dynamic Character Swap
                    if (dist < 180 || Math.random() > 0.98) n.char = chars[Math.floor(Math.random() * chars.length)];

                    // Mouse Connection
                    if (dist < 180) {
                        ctx.strokeStyle = \`rgba(96, 165, 250, \${0.5 * (1 - dist/180)})\`;
                        ctx.beginPath(); 
                        ctx.moveTo(n.x, n.y); 
                        ctx.lineTo(mouse.x, mouse.y); 
                        ctx.stroke();
                    }

                    ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(156, 163, 175, 0.4)';
                    ctx.fillText(n.char, n.x, n.y);
                });

                requestAnimationFrame(draw);
            }
            draw();

            // --- GSAP Timeline Reveals ---
            const heading = document.getElementById('hero-heading');
            
            // Staggered vertical masked word setup
            const words = heading.innerHTML.trim().split(/(<br\\s*\\/?>|\\s+)/).filter(w => w.trim().length > 0 || w.toLowerCase().includes('<br'));
            let newHTML = '';
            words.forEach(word => {
                if(word.toLowerCase().includes('<br')) {
                    newHTML += '<br/>';
                } else if (word.trim() !== '') {
                    newHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span class="reveal-word inline-block translate-y-full opacity-0">\${word}</span></span> \`;
                }
            });
            heading.innerHTML = newHTML;
            heading.style.opacity = 1;

            const tl = gsap.timeline({ 
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%"
                },
                delay: 0.1 
            });

            tl.to('.reveal-word', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.04,
                ease: "power4.out"
            }, 0);

            tl.to('.fade-in-el', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            }, 0.6);

            // Canvas Timeline Integration
            tl.to(canvas, { opacity: 1, duration: 2, ease: "power2.inOut" }, 0.2);

            // Floating Logic independent 3D shifts
            gsap.to('#floating-card', {
                y: "-=12",
                rotationX: 4,
                rotationY: -4,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        });
    <\/script>
</body>
</html>`,Md=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omnichannel Data Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet">
</head>
<body class="font-sans antialiased text-white m-0 p-0 h-screen w-full flex flex-col overflow-hidden selection:bg-blue-500/30 bg-black relative" style="font-family: 'Inter', sans-serif;">

    <!-- Background Image Stage -->
    <div class="absolute inset-0 z-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"></div>
    
    <!-- Directional Tonal Washes for Readability -->
    <div class="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

    <!-- Visible Structural Grid Scaffold -->
    <div class="absolute inset-0 z-10 pointer-events-none flex justify-center w-full">
        <div class="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-4 border-x border-white/5 divide-y-0 md:divide-x divide-white/5 relative">
            <!-- Structural Line Markers -->
            <div class="hidden md:block absolute top-[20%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute top-[20%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <!-- Grid columns -->
            <div class="relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block"></div>
        </div>
    </div>

    <!-- Controls Box (Top Right Anchored) -->
    <div class="absolute top-6 right-6 md:top-8 md:right-8 z-40 flex gap-3">
        <!-- Gradient Border Treatment Applied via wrapper -->
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button id="pauseBtn" class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Pause Animation">
                <iconify-icon icon="solar:pause-linear" width="18" height="18" stroke-width="1.5" class="group-hover:scale-110 transition-transform"></iconify-icon>
            </button>
        </div>
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Settings">
                <iconify-icon icon="solar:settings-linear" width="18" height="18" stroke-width="1.5" class="group-hover:rotate-90 transition-transform duration-500"></iconify-icon>
            </button>
        </div>
    </div>

    <!-- Additive Canvas Overlay -->
    <canvas id="particle-canvas" class="absolute inset-0 w-full h-full z-20 pointer-events-none"></canvas>

    <!-- Anchored Content Overlay low in viewport -->
    <main class="relative z-30 flex-grow w-full flex flex-col justify-end pb-12 md:pb-24">
        <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-end">
                
                <!-- Primary Headline Block -->
                <header class="md:col-span-2 flex flex-col gap-6">
                    <h1 class="text-4xl md:text-5xl font-extralight tracking-tight leading-tight text-white drop-shadow-lg">
                        <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Omnichannel</span></span> <br>
                        <span class="text-white/60">
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Data</span></span>
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Intelligence</span></span>
                        </span>
                    </h1>
                    <p id="split-text-target" class="text-sm md:text-base font-extralight text-white/50 max-w-sm leading-relaxed tracking-wide">
                        Empowering next-generation analytics platforms with real-time distributed insights and secure, scalable hybrid-cloud processing architectures.
                    </p>
                </header>

                <!-- Secondary Framed Grid Lane (Stats) with Premium Gradient Border -->
                <div class="md:col-span-2 relative p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent backdrop-blur-sm">
                    <!-- Corner structural crosses -->
                    <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border-t border-l border-white/40 z-10"></div>
                    <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border-t border-r border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border-b border-l border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border-b border-r border-white/40 z-10"></div>

                    <!-- Grid Layout for Stats inside Gradient Wrapper -->
                    <div class="grid grid-cols-2 gap-px bg-white/5 w-full h-full relative z-0">
                        <!-- Stat 1 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">120+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Edge<br>Nodes</span>
                        </div>

                        <!-- Stat 2 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">5.2P</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Data<br>Indexed</span>
                        </div>

                        <!-- Stat 3 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">&lt;10ms</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Query<br>Latency</span>
                        </div>

                        <!-- Stat 4 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">3.4B+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Event<br>Triggers</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <script>
        // Set up the masked text reveal dynamically for the paragraph text
        const p = document.getElementById('split-text-target');
        const text = p.innerText.trim();
        const words = text.split(/\\s+/);
        p.innerHTML = '';
        words.forEach(word => {
            p.innerHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block gsap-word translate-y-full">\${word}</span></span> \`;
        });

        // Initialize GSAP ScrollTrigger for masked reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.gsap-word', {
            y: "0%",
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.04,
            scrollTrigger: {
                trigger: "main",
                start: "top 95%"
            }
        });

        // Canvas Particle Network (Original logic preserved)
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        const pauseBtn = document.getElementById('pauseBtn');
        let isPaused = false;

        let width, height;
        let particles = [];
        const particleCount = 200;
        const speedMultiplier = 1.1;

        let originX, originY;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            originX = width / 2;
            originY = height * 0.7; // Lowered slightly to fit grid stage better
        }

        class Particle {
            constructor() {
                this.reset();
                this.z = Math.random() * 1000;
            }

            reset() {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 600;
                
                this.x = Math.cos(angle) * radius;
                this.y = (Math.sin(angle) * radius) - 150; 
                
                this.z = 1000; 
                this.speed = (Math.random() * 2 + 1) * speedMultiplier;
                
                // Restrained blue and white hues for technical atmosphere
                const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';
                this.color = \`rgb(\${hue})\`;
                this.length = Math.random() * 2 + 0.5;
            }

            update() {
                this.z -= this.speed;
                if (this.z <= 0) {
                    this.reset();
                }
            }

            draw() {
                const fov = 300; 
                
                const scale = fov / this.z;
                const px = originX + this.x * scale;
                const py = originY + this.y * scale;

                const prevZ = this.z + this.speed * this.length;
                const prevScale = fov / prevZ;
                const prevPx = originX + this.x * prevScale;
                const prevPy = originY + this.y * prevScale;

                let opacity = 1 - (this.z / 1000);
                if (this.z < 100) opacity = this.z / 100; 
                if (opacity < 0) opacity = 0;

                ctx.beginPath();
                ctx.moveTo(prevPx, prevPy);
                ctx.lineTo(px, py);
                
                ctx.strokeStyle = this.color.replace('rgb', 'rgba').replace(')', \`, \${opacity * 0.9})\`);
                // Hairline strokes stay crisp under retina DPR scaling
                ctx.lineWidth = Math.max(0.25, (1 - (this.z / 1000)) * 0.4);
                ctx.lineCap = 'butt';
                ctx.lineJoin = 'miter';
                
                ctx.stroke();
            }
        }

        function init() {
            resize();
            window.addEventListener('resize', resize);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);

            if (!isPaused) {
                // Faster fade keeps streaks sharp instead of smeared
                ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
                ctx.fillRect(0, 0, width, height);

                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
            }
        }

        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            const icon = pauseBtn.querySelector('iconify-icon');
            if (isPaused) {
                icon.setAttribute('icon', 'solar:play-linear');
            } else {
                icon.setAttribute('icon', 'solar:pause-linear');
            }
        });

        init();
    <\/script>
</body>
</html>`,Nd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Flux</title>
    
    <!-- Tailwind & Iconify -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- GSAP Core & ScrollTrigger -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    
    <!-- Three.js Import Map -->
    <script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
        }
    }
    <\/script>
</head>
<body class="bg-[#050505] text-white selection:bg-white selection:text-black font-extralight overflow-x-hidden relative" style="font-family: 'Space Grotesk', sans-serif;">

    <!-- Loading Overlay -->
    <div id="loader" class="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-1000">
        <div class="flex flex-col items-center gap-4">
            <div class="h-px w-24 bg-neutral-800 overflow-hidden relative">
                <div id="shimmer-bar" class="absolute inset-y-0 left-0 bg-white w-full -translate-x-full"></div>
            </div>
            <p class="text-xs uppercase tracking-[0.2em] text-neutral-500 font-light">
                Booting Sequence
            </p>
        </div>
    </div>

    <!-- 3D Canvas Container -->
    <div class="fixed inset-0 z-0">
        <canvas id="webgl-canvas" class="w-full h-full outline-none cursor-auto"></canvas>
    </div>

    <!-- Container Lines & Corner Squares -->
    <div class="fixed inset-y-6 inset-x-6 md:inset-y-12 md:inset-x-12 border-x border-white/10 pointer-events-none z-10 flex flex-col justify-between">
        <!-- Top Left -->
        <div class="absolute top-0 -translate-y-1/2 -left-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Top Right -->
        <div class="absolute top-0 -translate-y-1/2 -right-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Bottom Left -->
        <div class="absolute bottom-0 translate-y-1/2 -left-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
        <!-- Bottom Right -->
        <div class="absolute bottom-0 translate-y-1/2 -right-[3px] w-1.5 h-1.5 bg-neutral-900 border border-neutral-500 rounded-none"></div>
    </div>

    <!-- Scrollable UI Overlay -->
    <div class="relative z-20 flex flex-col min-h-[160vh] pointer-events-none">
        
        <!-- Fixed Navigation -->
        <header class="fixed top-6 md:top-12 left-6 right-6 md:left-12 md:right-12 px-6 py-6 flex justify-between items-center pointer-events-auto opacity-0 nav-item z-30">
            <div class="flex items-center gap-3 group cursor-pointer">
                <div class="w-8 h-8 rounded-none border border-neutral-800 flex items-center justify-center bg-[#050505] group-hover:border-neutral-400 transition-colors duration-300">
                    <span class="font-light text-xs tracking-tighter text-white">Q</span>
                </div>
                <span class="text-xs font-light tracking-widest text-neutral-400 group-hover:text-white transition-colors uppercase glitch-target">
                    Quantum
                </span>
            </div>

            <nav class="hidden md:flex items-center gap-10 px-8 py-3 rounded-none" style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(8px); border: 1px solid transparent; background-clip: padding-box, border-box; background-image: linear-gradient(#050505, #050505), linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%);">
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Topology</a>
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Matrix</a>
                <a href="#" class="uppercase tracking-widest text-neutral-500 hover:text-white transition-colors text-xs font-light">Protocol</a>
            </nav>

            <button class="group flex items-center gap-3 px-5 py-2.5 rounded-none transition-all duration-300" style="background: linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05)) border-box; border: 1px solid transparent;">
                <span class="text-xs font-light tracking-widest uppercase text-neutral-400 group-hover:text-white">Connect</span>
                <iconify-icon icon="solar:arrow-right-linear" width="14" class="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all"></iconify-icon>
            </button>
        </header>

        <!-- Main Content Area -->
        <main class="flex-grow flex flex-col pt-[35vh] pb-[40vh] px-12 md:px-24 pointer-events-none relative z-20 w-full max-w-6xl mx-auto scroll-trigger-area">
            <div class="space-y-12">
                <!-- Status Tagline -->
                <div class="overflow-hidden">
                    <div class="flex items-center gap-3 mask-word translate-y-full inline-flex">
                        <span class="flex h-1.5 w-1.5 rounded-none bg-neutral-300 shadow-[0_0_8px_rgba(255,255,255,0.6)]"></span>
                        <p class="text-xs uppercase tracking-[0.25em] text-neutral-400 font-extralight">
                            Neural Node: Active
                        </p>
                    </div>
                </div>

                <!-- Headline with Staggered Masked Reveal -->
                <div class="max-w-4xl flex flex-wrap gap-x-6 gap-y-2">
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-white glitch-target">Dynamic</span></span>
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-white glitch-target">Resonance</span></span>
                    <span class="inline-block overflow-hidden pb-2"><span class="mask-word inline-block translate-y-[110%] text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-700 glitch-target">Field.</span></span>
                </div>

                <!-- Description -->
                <div class="overflow-hidden max-w-lg">
                    <p class="mask-word translate-y-[110%] inline-block text-sm md:text-base text-neutral-500 leading-relaxed font-extralight">
                        An autonomous volumetric simulation powered by algorithmic dispersion and real-time data flow.
                    </p>
                </div>

                <!-- CTA Actions -->
                <div class="overflow-hidden pt-6">
                    <div class="mask-word translate-y-[110%] flex flex-wrap gap-5 pointer-events-auto">
                        <button class="relative group px-8 py-3.5 bg-white text-black rounded-none overflow-hidden">
                            <div class="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <div class="relative flex items-center gap-3">
                                <span class="text-xs uppercase tracking-widest font-light text-black">Initialize</span>
                                <iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
                            </div>
                        </button>

                        <button class="group px-8 py-3.5 rounded-none transition-colors backdrop-blur-sm" style="background: linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02)) padding-box, linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%) border-box; border: 1px solid transparent;">
                            <div class="flex items-center gap-3">
                                <span class="text-xs uppercase tracking-widest font-light text-neutral-400 group-hover:text-white transition-colors">System Specs</span>
                                <iconify-icon icon="solar:document-linear" width="16" class="text-neutral-500 group-hover:text-white transition-colors"></iconify-icon>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Fixed Footer -->
        <footer class="fixed bottom-6 md:bottom-12 left-6 right-6 md:left-12 md:right-12 pointer-events-auto nav-item opacity-0 px-6 py-6 grid grid-cols-3 items-end z-30">
            <div class="flex flex-col gap-2">
                <span class="text-[10px] uppercase tracking-widest text-neutral-600 font-light">Telemetry</span>
                <span id="coords" class="text-xs font-mono text-neutral-300 font-extralight">0.00.0.00.00</span>
            </div>

            <div class="hidden sm:flex flex-col gap-2 items-center">
                <span class="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-light">Scroll to traverse</span>
                <div class="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent"></div>
            </div>
            
            <div class="flex gap-6 justify-self-end">
                <a href="#" class="text-neutral-600 hover:text-white transition-colors">
                    <iconify-icon icon="solar:link-linear" width="18"></iconify-icon>
                </a>
                <a href="#" class="text-neutral-600 hover:text-white transition-colors">
                    <iconify-icon icon="solar:maximize-square-linear" width="18"></iconify-icon>
                </a>
            </div>
        </footer>
    </div>

    <!-- Main Logic & Interactions -->
    <script type="module">
        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // --- Configuration (Monotone) ---
        const config = {
            colors: {
                bg: 0x050505,
                primary: 0xdddddd, 
                secondary: 0x555555
            }
        };

        // --- Scene Setup ---
        const canvas = document.querySelector('#webgl-canvas');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(config.colors.bg);
        scene.fog = new THREE.FogExp2(config.colors.bg, 0.04);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 7;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false,
            powerPreference: "high-performance",
            alpha: false
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;

        // --- Objects Container ---
        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        // --- 1. Vortex Particle Field (Smaller Dots) ---
        const vortexCount = 9500;
        const vortexPositions = new Float32Array(vortexCount * 3);
        const vortexRadius = new Float32Array(vortexCount);
        const vortexAngle = new Float32Array(vortexCount);
        const vortexHeight = new Float32Array(vortexCount);
        const vortexSpeed = new Float32Array(vortexCount);

        for (let i = 0; i < vortexCount; i++) {
            const i3 = i * 3;
            const y = (Math.random() - 0.5) * 7.5;
            const funnel = 0.4 + Math.abs(y) * 0.2;
            const r = (0.1 + Math.pow(Math.random(), 1.5) * 2.5) * funnel;
            const a = Math.random() * Math.PI * 2;

            vortexHeight[i] = y;
            vortexRadius[i] = r;
            vortexAngle[i] = a;
            vortexSpeed[i] = 0.5 + Math.random() * 0.8;

            vortexPositions[i3] = Math.cos(a) * r;
            vortexPositions[i3 + 1] = y;
            vortexPositions[i3 + 2] = Math.sin(a) * r;
        }

        const vortexGeometry = new THREE.BufferGeometry();
        vortexGeometry.setAttribute('position', new THREE.BufferAttribute(vortexPositions, 3));
        const vortexMaterial = new THREE.PointsMaterial({
            size: 0.006, // Smaller dots requested
            color: config.colors.primary,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const vortexPoints = new THREE.Points(vortexGeometry, vortexMaterial);
        mainGroup.add(vortexPoints);

        // --- 2. Spiral Guides ---
        function createSpiralLine(turnOffset, color) {
            const spiralPoints = [];
            const pointCount = 400;
            for (let i = 0; i < pointCount; i++) {
                const t = i / (pointCount - 1);
                const angle = t * Math.PI * 14 + turnOffset;
                const radius = 0.2 + t * 2.8;
                const y = (0.5 - t) * 6.0;
                spiralPoints.push(new THREE.Vector3(
                    Math.cos(angle) * radius,
                    y,
                    Math.sin(angle) * radius
                ));
            }
            const spiralGeometry = new THREE.BufferGeometry().setFromPoints(spiralPoints);
            const spiralMaterial = new THREE.LineBasicMaterial({
                color,
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending
            });
            return new THREE.Line(spiralGeometry, spiralMaterial);
        }

        const spiralLineA = createSpiralLine(0, config.colors.secondary);
        const spiralLineB = createSpiralLine(Math.PI, config.colors.primary);
        mainGroup.add(spiralLineA);
        mainGroup.add(spiralLineB);

        // --- 3. Ambient Particles ---
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 300;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 12;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.008,
            color: config.colors.secondary,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // --- Post Processing ---
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.4, 0.85);
        bloomPass.strength = 0.6;
        bloomPass.radius = 0.3;
        bloomPass.threshold = 0.2;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // --- Interactions & Animation State ---
        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
            
            // Coordinates Update
            const xVal = (event.clientX / window.innerWidth).toFixed(2);
            const yVal = (event.clientY / window.innerHeight).toFixed(2);
            document.getElementById('coords').innerText = \`\${xVal}.\${yVal}.00\`;
        });

        // --- Animation Loop ---
        const clock = new THREE.Clock();

        function animate() {
            const elapsedTime = clock.getElapsedTime();

            targetX = mouseX * 0.001;
            targetY = mouseY * 0.0008;

            mainGroup.rotation.y += 0.002;
            mainGroup.rotation.y += 0.03 * (targetX - mainGroup.rotation.y);
            mainGroup.rotation.x += 0.03 * (targetY - mainGroup.rotation.x);

            const positions = vortexGeometry.attributes.position.array;
            for (let i = 0; i < vortexCount; i++) {
                const i3 = i * 3;
                const spin = elapsedTime * vortexSpeed[i] * 0.5 + vortexHeight[i] * 0.5;
                const angle = vortexAngle[i] + spin;
                const pulse = Math.sin(elapsedTime * 1.2 + i * 0.01) * 0.05;
                const radius = vortexRadius[i] + pulse;

                positions[i3] = Math.cos(angle) * radius;
                positions[i3 + 1] = vortexHeight[i] + Math.sin(elapsedTime + i * 0.02) * 0.03;
                positions[i3 + 2] = Math.sin(angle) * radius;
            }
            vortexGeometry.attributes.position.needsUpdate = true;

            spiralLineA.rotation.y = elapsedTime * 0.15;
            spiralLineB.rotation.y = -elapsedTime * 0.12;

            particlesMesh.rotation.y = elapsedTime * 0.03;
            particlesMesh.rotation.x = -mouseY * 0.0001;

            composer.render();
            requestAnimationFrame(animate);
        }

        // --- Resize ---
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
        });

        // --- Init & GSAP Animations ---
        window.onload = () => {
            animate();

            // Loader Shimmer loop
            gsap.to("#shimmer-bar", { x: "100%", duration: 1.5, repeat: -1, ease: "power1.inOut" });

            const tl = gsap.timeline();

            // 1. Loader Exit & Nav Enter
            tl.to("#loader", {
                opacity: 0,
                duration: 1.0,
                onComplete: () => { document.getElementById("loader").style.display = "none"; }
            })
            .from(mainGroup.scale, { x: 0.6, y: 0.6, z: 0.6, duration: 2.0, ease: "power3.out" }, "-=0.5")
            .to(".nav-item", { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out" }, "-=1.5");

            // 2. ScrollTrigger Masked Staggered Word Reveal
            gsap.to(".mask-word", {
                scrollTrigger: {
                    trigger: ".scroll-trigger-area",
                    start: "top 80%",
                },
                y: 0,
                duration: 1.4,
                stagger: 0.1,
                ease: "power4.out"
            });
        };
    <\/script>

    <!-- JS based Glitch Effect to avoid arbitrary style tags -->
    <script>
        (function(){
            const targets = document.querySelectorAll('.glitch-target');
            let lastX = 0, lastY = 0, lastTime = 0;
            
            document.addEventListener('mousemove', e => {
                const now = Date.now(), dt = now - lastTime;
                if (dt > 40) {
                    const dx = e.clientX - lastX, dy = e.clientY - lastY;
                    const speed = Math.sqrt(dx * dx + dy * dy) / dt;
                    
                    if (speed > 2.0) {
                        targets.forEach(el => {
                            if (!el.dataset.animating) {
                                el.dataset.animating = "true";
                                gsap.to(el, {
                                    x: () => (Math.random() - 0.5) * 4,
                                    y: () => (Math.random() - 0.5) * 2,
                                    textShadow: "2px 0 rgba(255,255,255,0.4), -2px 0 rgba(100,100,100,0.4)",
                                    duration: 0.05,
                                    yoyo: true,
                                    repeat: 3,
                                    onComplete: () => {
                                        gsap.set(el, { x: 0, y: 0, textShadow: "none" });
                                        setTimeout(() => el.dataset.animating = "", 200);
                                    }
                                });
                            }
                        });
                    }
                    lastX = e.clientX; lastY = e.clientY; lastTime = now;
                }
            });
        })();
    <\/script>
</body>
</html>`,Pd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AEON // Portal</title>
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet">
</head>
<body style="
    --bg-base: #020202; 
    --bg-surface-1: rgba(255, 255, 255, 0.015); 
    --bg-surface-2: rgba(255, 255, 255, 0.04); 
    --bg-surface-3: rgba(255, 255, 255, 0.08);
    --text-primary: #F4F4F5; 
    --text-secondary: #A3A3A3; 
    --text-accent: #020202; 
    --text-tech: #666666;
    --bg-accent: #F4F4F5; 
    --bg-accent-active: #22C55E;
    --border-glow: rgba(255, 255, 255, 0.08);
    --glow-color: 255, 255, 255;
    background-color: var(--bg-base); 
    color: var(--text-primary);
    transition: background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
" class="font-['Inter'] min-h-screen overflow-hidden flex items-center justify-center antialiased selection:bg-[var(--bg-surface-3)] selection:text-[var(--text-primary)]">

    <!-- Ambient Background -->
    <div id="webgl-container" class="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen"></div>

    <!-- Structural Framing -->
    <div class="fixed inset-4 lg:inset-8 pointer-events-none z-0 border border-[var(--border-glow)] hidden lg:block transition-colors duration-700">
        <!-- Corner Registration Marks -->
        <div class="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-[var(--text-secondary)] transition-colors duration-500"></div>
        <div class="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-[var(--text-secondary)] transition-colors duration-500"></div>
        
        <!-- Precision Grid Lines -->
        <div class="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-[var(--border-glow)] to-transparent opacity-20"></div>
        <div class="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-glow)] to-transparent opacity-10"></div>
    </div>

    <!-- Interface Controls -->
    <div class="absolute top-6 lg:top-12 right-6 lg:right-12 z-20 flex items-center gap-6">
        <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-tech)] tracking-widest uppercase transition-colors duration-500 hidden sm:block">SYS-2.9</div>
        <button id="themeToggleBtn" class="h-8 px-4 border border-[var(--border-glow)] bg-[var(--bg-surface-1)] hover:bg-[var(--bg-surface-2)] text-[var(--text-primary)] backdrop-blur-md flex items-center gap-2 transition-all duration-300 text-xs font-light tracking-wide rounded-sm">
            <iconify-icon id="themeIcon" icon="solar:moon-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
            <span id="themeText">DARK</span>
        </button>
    </div>

    <!-- Metadata Labels -->
    <div class="absolute top-12 left-8 lg:top-16 lg:left-16 z-10 font-['JetBrains_Mono'] text-xs tracking-widest text-[var(--text-tech)] uppercase transition-colors duration-500 hidden sm:block">
        NEURAL.NET // ACTIVE
    </div>
    <div style="transform: translateY(-50%) rotate(90deg); transform-origin: center right;" class="absolute top-1/2 right-8 lg:right-12 z-10 font-['JetBrains_Mono'] text-xs tracking-widest text-[var(--text-tech)] uppercase flex items-center gap-4 transition-colors duration-500 hidden xl:flex">
        <span class="opacity-40">[</span>
        <span>PRT</span>
        <span class="opacity-40">=</span>
        <span>ECHO-9</span>
        <span class="opacity-40">]</span>
    </div>

    <!-- Remixed Layout: Typographic Hero + Interactive Section -->
    <div class="relative z-10 w-full max-w-[1440px] min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 py-24 gap-16 lg:gap-8">
        
        <!-- Hero Section -->
        <div class="w-full lg:w-1/2 flex flex-col gap-6 lg:pr-12">
            <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-secondary)] tracking-widest uppercase flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-[var(--bg-accent-active)] animate-pulse"></div>
                <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Authorization Pending</span></span>
            </div>
            
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-extralight leading-[0.95] text-[var(--text-primary)] uppercase">
                <span class="block overflow-hidden pb-2"><span class="block masked-word translate-y-full opacity-0">Establish</span></span>
                <span class="block overflow-hidden pb-2"><span class="block masked-word translate-y-full opacity-0">Connection</span></span>
            </h1>
            
            <p class="text-sm lg:text-base font-extralight text-[var(--text-secondary)] leading-relaxed max-w-md mt-4">
                <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Restricted network sector. Verify your identity via biometric uplink to access the centralized mainframe and quantum datasets.</span></span>
            </p>
        </div>

        <!-- Second Section (Interactive Card) -->
        <div class="w-full max-w-[420px] lg:w-1/2 flex justify-center lg:justify-end">
            
            <!-- Structural Shell with Gradient Border -->
            <div class="relative w-full rounded-sm p-[1px] bg-gradient-to-br from-[var(--border-glow)] via-transparent to-[var(--border-glow)] group">
                
                <div class="w-full rounded-sm bg-[var(--bg-surface-1)] backdrop-blur-2xl p-8 lg:p-10 flex flex-col gap-8 transition-colors duration-500 shadow-2xl shadow-black/40">
                    
                    <!-- Card Header -->
                    <div class="flex flex-col gap-2">
                        <div class="font-['JetBrains_Mono'] text-xs text-[var(--text-primary)] border border-[var(--border-glow)] bg-[var(--bg-surface-2)] px-3 py-1 self-start mb-2 tracking-widest uppercase rounded-sm transition-colors duration-500">IDENTITY.CHECK</div>
                        <h2 class="text-2xl tracking-tight font-light text-[var(--text-primary)]">
                            <span class="block overflow-hidden"><span class="block masked-word translate-y-full opacity-0">Authentication</span></span>
                        </h2>
                    </div>

                    <!-- Alternate Methods Grid -->
                    <div class="grid grid-cols-3 gap-3">
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Biometric Scan">
                            <iconify-icon icon="solar:fingerprint-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Hardware Token">
                            <iconify-icon icon="solar:smartphone-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                        <button class="h-12 rounded-sm bg-[var(--bg-surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--text-accent)] flex items-center justify-center transition-all duration-300 border border-[var(--border-glow)] group/btn" aria-label="Neural Passkey">
                            <iconify-icon icon="solar:shield-keyhole-linear" stroke-width="1.5" class="text-xl transition-transform duration-300 group-hover/btn:scale-110"></iconify-icon>
                        </button>
                    </div>

                    <!-- Divider -->
                    <div class="flex items-center gap-4 text-[var(--text-tech)] font-['JetBrains_Mono'] text-xs tracking-widest uppercase">
                        <div class="flex-1 h-[1px] bg-[var(--border-glow)] transition-colors duration-500"></div>
                        <span>FALLBACK PROTOCOL</span>
                        <div class="flex-1 h-[1px] bg-[var(--border-glow)] transition-colors duration-500"></div>
                    </div>

                    <!-- Input Fields -->
                    <div class="flex flex-col gap-5">
                        <div class="relative flex flex-col gap-2">
                            <label class="font-['JetBrains_Mono'] text-xs font-light text-[var(--text-secondary)] uppercase tracking-widest transition-colors duration-500">AGENT_ALIAS</label>
                            <input type="text" placeholder="agent.name@aeon.net" autocomplete="username" class="w-full px-4 h-12 border border-[var(--border-glow)] outline-none rounded-sm bg-[var(--bg-surface-1)] text-[var(--text-primary)] font-['Inter'] text-sm transition-all duration-300 focus:bg-[var(--bg-surface-2)] focus:border-[var(--text-secondary)] placeholder-[var(--text-tech)] font-light">
                        </div>
                        <div class="relative flex flex-col gap-2">
                            <label class="font-['JetBrains_Mono'] text-xs font-light text-[var(--text-secondary)] uppercase tracking-widest transition-colors duration-500">ACCESS_CODE</label>
                            <input type="password" placeholder="••••••••••••" autocomplete="current-password" class="w-full px-4 h-12 border border-[var(--border-glow)] outline-none rounded-sm bg-[var(--bg-surface-1)] text-[var(--text-primary)] font-['Inter'] text-sm transition-all duration-300 focus:bg-[var(--bg-surface-2)] focus:border-[var(--text-secondary)] placeholder-[var(--text-tech)] font-light">
                        </div>
                    </div>

                    <!-- Primary Action -->
                    <button class="h-14 mt-4 rounded-sm bg-[var(--bg-accent)] text-[var(--text-accent)] font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 hover:bg-[var(--bg-accent-active)] hover:text-white group/submit relative overflow-hidden">
                        <span class="relative z-10 flex items-center gap-2">
                            INITIATE LINK 
                            <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" class="text-base transition-transform duration-300 group-hover/submit:translate-x-1"></iconify-icon>
                        </span>
                    </button>

                </div>
            </div>
        </div>
    </div>

    <script>
        // GSAP Masked Reveal Directive
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.to(".masked-word", {
                y: "0%",
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.1,
                delay: 0.1
            });
        });

        // Theme Toggling Logic
        const body = document.body;
        const themeBtn = document.getElementById('themeToggleBtn');
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        let isDark = true;

        const themes = {
            dark: {
                '--bg-base': '#020202',
                '--bg-surface-1': 'rgba(255, 255, 255, 0.015)',
                '--bg-surface-2': 'rgba(255, 255, 255, 0.04)',
                '--bg-surface-3': 'rgba(255, 255, 255, 0.08)',
                '--text-primary': '#F4F4F5',
                '--text-secondary': '#A3A3A3',
                '--text-accent': '#020202',
                '--text-tech': '#666666',
                '--bg-accent': '#F4F4F5',
                '--bg-accent-active': '#22C55E',
                '--border-glow': 'rgba(255, 255, 255, 0.08)',
                '--glow-color': '255, 255, 255',
                shaderCore: '#FFFFFF',
                shaderFringe: '#1e3a8a'
            },
            light: {
                '--bg-base': '#F4F4F5',
                '--bg-surface-1': 'rgba(0, 0, 0, 0.02)',
                '--bg-surface-2': 'rgba(0, 0, 0, 0.05)',
                '--bg-surface-3': 'rgba(0, 0, 0, 0.1)',
                '--text-primary': '#020202',
                '--text-secondary': '#666666',
                '--text-accent': '#FFFFFF',
                '--text-tech': '#A3A3A3',
                '--bg-accent': '#020202',
                '--bg-accent-active': '#16A34A',
                '--border-glow': 'rgba(0, 0, 0, 0.08)',
                '--glow-color': '0, 0, 0',
                shaderCore: '#020202',
                shaderFringe: '#94a3b8'
            }
        };

        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            const currentTheme = isDark ? themes.dark : themes.light;

            for (const [key, value] of Object.entries(currentTheme)) {
                if (key.startsWith('--')) {
                    body.style.setProperty(key, value);
                }
            }

            if (isDark) {
                themeIcon.setAttribute('icon', 'solar:moon-linear');
                themeText.textContent = 'DARK';
            } else {
                themeIcon.setAttribute('icon', 'solar:sun-linear');
                themeText.textContent = 'LIGHT';
            }

            if (typeof material !== 'undefined') {
                material.uniforms.u_colorCore.value = new THREE.Color(currentTheme.shaderCore);
                material.uniforms.u_colorFringe.value = new THREE.Color(currentTheme.shaderFringe);
                material.uniforms.u_isLightMode.value = isDark ? 0.0 : 1.0;
            }
        });

        // Ambient WebGL Background
        const container = document.getElementById('webgl-container');
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);

        const vertexShader = \`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        \`;

        const fragmentShader = \`
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            uniform vec3 u_colorCore;
            uniform vec3 u_colorFringe;
            uniform float u_isLightMode;
            varying vec2 vUv;

            vec2 hash( vec2 p ) {
                p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
                return -1.0 + 2.0*fract(sin(p)*43758.5453123);
            }
            float noise( in vec2 p ) {
                const float K1 = 0.366025404;
                const float K2 = 0.211324865;
                vec2 i = floor( p + (p.x+p.y)*K1 );
                vec2 a = p - i + (i.x+i.y)*K2;
                vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
                vec2 b = a - o + K2;
                vec2 c = a - 1.0 + 2.0*K2;
                vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
                vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
                return dot( n, vec3(70.0) );
            }

            float sdArc(vec2 p, vec2 center, float radius, float width, float warp) {
                p.y += sin(p.x * 2.0 + u_time * 0.3) * warp;
                p.x += noise(p * 1.5 + u_time * 0.1) * (warp * 0.8);
                float d = length(p - center) - radius;
                return abs(d) - width;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                vec2 st = uv;
                st.x *= u_resolution.x / u_resolution.y;
                
                vec2 mouseOffset = (u_mouse - 0.5) * 0.05;
                st += mouseOffset;

                // Center organic form behind the content area
                vec2 center = vec2(0.5, 0.5);
                
                float d1 = sdArc(st, center, 0.6, 0.02, 0.15);
                float d2 = sdArc(st, center, 0.65, 0.06, 0.2);
                
                float coreGlow = exp(-d1 * 30.0);
                float fringeGlow = exp(-d2 * 10.0);
                float wash = smoothstep(1.5, -0.5, length(st - center)) * 0.15;

                vec3 finalColor = vec3(0.0);
                finalColor += u_colorCore * coreGlow;
                finalColor += u_colorFringe * fringeGlow;
                finalColor += u_colorFringe * wash * (sin(u_time * 0.5) * 0.2 + 0.8);

                float alpha = clamp(coreGlow + fringeGlow + wash, 0.0, 1.0);
                finalColor = vec3(1.0) - exp(-finalColor * 1.5);
                
                if(u_isLightMode > 0.5) {
                    alpha = clamp((coreGlow * 1.2 + fringeGlow + wash * 0.4), 0.0, 0.4);
                }

                gl_FragColor = vec4(finalColor, alpha * 0.6);
            }
        \`;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0.0 },
                u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
                u_colorCore: { value: new THREE.Color(themes.dark.shaderCore) },
                u_colorFringe: { value: new THREE.Color(themes.dark.shaderFringe) },
                u_isLightMode: { value: 0.0 }
            },
            transparent: true,
            blending: THREE.AdditiveBlending 
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let targetMouse = new THREE.Vector2(0.5, 0.5);
        document.addEventListener('mousemove', (e) => {
            targetMouse.x = e.clientX / window.innerWidth;
            targetMouse.y = 1.0 - (e.clientY / window.innerHeight); 
        });

        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.u_time.value = clock.getElapsedTime();
            material.uniforms.u_mouse.value.lerp(targetMouse, 0.03);
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            material.uniforms.u_resolution.value.set(width, height);
        });
    <\/script>
</body>
</html>`,Fd=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flow Field with Particle Trails</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: #0a0a0a; }
  canvas { display: block; width: 100vw; height: 100vh; }
  .label {
    position: fixed;
    top: 20px;
    left: 24px;
    font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(200, 149, 108, 0.5);
    z-index: 10;
    pointer-events: none;
    user-select: none;
  }
</style>
</head>
<body>
<div class="label">Flow Field</div>
<canvas id="canvas"></canvas>
<script>
// ─────────────────────────────────────────────
// Simplex Noise (compact implementation)
// Based on Stefan Gustavson's simplex noise
// ─────────────────────────────────────────────
const SimplexNoise = (function() {
  const F2 = 0.5 * (Math.sqrt(3) - 1);
  const G2 = (3 - Math.sqrt(3)) / 6;
  const F3 = 1 / 3;
  const G3 = 1 / 6;

  const grad3 = [
    [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
    [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
    [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
  ];

  function SimplexNoise(seed) {
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    const p = new Uint8Array(256);
    // Seed-based permutation
    seed = seed || Math.random() * 65536;
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      seed = (seed * 16807 + 0) % 2147483647;
      const j = seed % (i + 1);
      const tmp = p[i];
      p[i] = p[j];
      p[j] = tmp;
    }
    for (let i = 0; i < 512; i++) {
      this.perm[i] = p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  SimplexNoise.prototype.noise2D = function(xin, yin) {
    const perm = this.perm, permMod12 = this.permMod12;
    let n0, n1, n2;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const X0 = i - t, Y0 = j - t;
    const x0 = xin - X0, y0 = yin - Y0;
    let i1, j1;
    if (x0 > y0) { i1 = 1; j1 = 0; }
    else { i1 = 0; j1 = 1; }
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    let t0 = 0.5 - x0*x0 - y0*y0;
    if (t0 < 0) n0 = 0;
    else { t0 *= t0; const gi = permMod12[ii + perm[jj]]; n0 = t0 * t0 * (grad3[gi][0]*x0 + grad3[gi][1]*y0); }
    let t1 = 0.5 - x1*x1 - y1*y1;
    if (t1 < 0) n1 = 0;
    else { t1 *= t1; const gi = permMod12[ii + i1 + perm[jj + j1]]; n1 = t1 * t1 * (grad3[gi][0]*x1 + grad3[gi][1]*y1); }
    let t2 = 0.5 - x2*x2 - y2*y2;
    if (t2 < 0) n2 = 0;
    else { t2 *= t2; const gi = permMod12[ii + 1 + perm[jj + 1]]; n2 = t2 * t2 * (grad3[gi][0]*x2 + grad3[gi][1]*y2); }
    return 70 * (n0 + n1 + n2);
  };

  SimplexNoise.prototype.noise3D = function(xin, yin, zin) {
    const perm = this.perm, permMod12 = this.permMod12;
    let n0, n1, n2, n3;
    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s), j = Math.floor(yin + s), k = Math.floor(zin + s);
    const t = (i + j + k) * G3;
    const X0 = i - t, Y0 = j - t, Z0 = k - t;
    const x0 = xin - X0, y0 = yin - Y0, z0 = zin - Z0;
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; }
      else if (x0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; }
      else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; }
    } else {
      if (y0 < z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; }
      else if (x0 < z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; }
      else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; }
    }
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2*G3, y2 = y0 - j2 + 2*G3, z2 = z0 - k2 + 2*G3;
    const x3 = x0 - 1 + 3*G3, y3 = y0 - 1 + 3*G3, z3 = z0 - 1 + 3*G3;
    const ii = i & 255, jj = j & 255, kk = k & 255;
    let t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if (t0 < 0) n0 = 0;
    else { t0 *= t0; const gi = permMod12[ii+perm[jj+perm[kk]]]; n0 = t0*t0*(grad3[gi][0]*x0+grad3[gi][1]*y0+grad3[gi][2]*z0); }
    let t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if (t1 < 0) n1 = 0;
    else { t1 *= t1; const gi = permMod12[ii+i1+perm[jj+j1+perm[kk+k1]]]; n1 = t1*t1*(grad3[gi][0]*x1+grad3[gi][1]*y1+grad3[gi][2]*z1); }
    let t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if (t2 < 0) n2 = 0;
    else { t2 *= t2; const gi = permMod12[ii+i2+perm[jj+j2+perm[kk+k2]]]; n2 = t2*t2*(grad3[gi][0]*x2+grad3[gi][1]*y2+grad3[gi][2]*z2); }
    let t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if (t3 < 0) n3 = 0;
    else { t3 *= t3; const gi = permMod12[ii+1+perm[jj+1+perm[kk+1]]]; n3 = t3*t3*(grad3[gi][0]*x3+grad3[gi][1]*y3+grad3[gi][2]*z3); }
    return 32 * (n0 + n1 + n2 + n3);
  };

  return SimplexNoise;
})();

// ─────────────────────────────────────────────
// Flow Field Renderer
// ─────────────────────────────────────────────
(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const noise = new SimplexNoise(42);
  const dpr = window.devicePixelRatio || 1;

  let W, H;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Fill with background on resize to avoid flash
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);
  }

  window.addEventListener('resize', resize);
  resize();

  // ── Mouse tracking ──
  const mouse = { x: -9999, y: -9999, active: false };
  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });
  window.addEventListener('mouseleave', function() {
    mouse.active = false;
  });

  // ── Color palette ──
  // Warm tones: amber, gold, coral, with variations
  const palette = [
    { r: 200, g: 149, b: 108 }, // amber  #c8956c
    { r: 212, g: 165, b: 116 }, // gold   #d4a574
    { r: 224, g: 120, b: 80  }, // coral  #e07850
    { r: 190, g: 130, b: 90  }, // dark amber
    { r: 230, g: 180, b: 140 }, // light gold
    { r: 210, g: 100, b: 70  }, // deep coral
    { r: 180, g: 160, b: 120 }, // muted gold
  ];

  function lerpColor(a, b, t) {
    return {
      r: a.r + (b.r - a.r) * t,
      g: a.g + (b.g - a.g) * t,
      b: a.b + (b.b - a.b) * t
    };
  }

  function getColor(noiseVal) {
    // Map noise [-1,1] to palette index
    const t = (noiseVal + 1) * 0.5; // 0..1
    const idx = t * (palette.length - 1);
    const i = Math.floor(idx);
    const f = idx - i;
    const a = palette[Math.min(i, palette.length - 1)];
    const b = palette[Math.min(i + 1, palette.length - 1)];
    return lerpColor(a, b, f);
  }

  // ── Particles ──
  const PARTICLE_COUNT = 2500;
  let NOISE_SCALE = 0.0025;
  let SPEED = 1.2;
  const MOUSE_RADIUS = 150;
  const MOUSE_FORCE = 2.5;

  const particles = [];

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      speed: 0.4 + Math.random() * 1.0,
      alpha: 0.15 + Math.random() * 0.55,
      size: 0.5 + Math.random() * 1.5
    };
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(createParticle());
  }

  // ── Animation ──
  let time = 0;

  function draw() {
    // Fade previous frame with dark overlay — creates trailing effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.03)';
    ctx.fillRect(0, 0, W, H);

    time += 0.0008;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];

      // Sample noise field at particle position with time evolution
      const nx = p.x * NOISE_SCALE;
      const ny = p.y * NOISE_SCALE;
      const angle = noise.noise3D(nx, ny, time) * Math.PI * 2;

      // Secondary noise for color variation
      const colorNoise = noise.noise3D(nx * 1.5 + 100, ny * 1.5 + 100, time * 0.5);

      // Velocity from flow field
      let vx = Math.cos(angle) * p.speed * SPEED;
      let vy = Math.sin(angle) * p.speed * SPEED;

      // Mouse interaction — gentle push away
      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          vx += (dx / dist) * force;
          vy += (dy / dist) * force;
        }
      }

      // Store previous position for line drawing
      const px = p.x;
      const py = p.y;

      // Update position
      p.x += vx;
      p.y += vy;

      // Draw particle trail segment
      const color = getColor(colorNoise);
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + p.alpha + ')';
      ctx.lineWidth = p.size;
      ctx.stroke();

      // Respawn if offscreen
      if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) {
        p.x = Math.random() * W;
        p.y = Math.random() * H;
      }
    }

    requestAnimationFrame(draw);
  }

  // Initial fill
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H);

  requestAnimationFrame(draw);

  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'param') {
      switch (e.data.name) {
        case 'SPEED': SPEED = e.data.value; break;
        case 'NOISE_SCALE': NOISE_SCALE = e.data.value; break;
      }
    }
  });
})();
<\/script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"216c03e5eb1b42998a91f716785010f9","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"><\/script>
</body>
</html>
`,Id=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aegis Security - Remixed Bento</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Mono&display=swap" rel="stylesheet">
</head>
<body class="bg-[#111111] text-black antialiased min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-x-hidden selection:bg-yellow-300 selection:text-black" style="font-family: 'Space Mono', monospace;">

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl mx-auto min-h-[85vh] py-8">
        
        <!-- Card 1: Grainy / Light (Black Globe) -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#f4f4f0, #f4f4f0) padding-box, linear-gradient(135deg, #ffffff 0%, #d1d5db 100%) border-box;">
            <!-- Noise Overlay -->
            <div class="absolute inset-0 z-10 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E'); mix-blend-mode: multiply;"></div>
            
            <!-- WebGL Background -->
            <div class="absolute inset-0 z-0 top-1/4">
                <canvas id="webgl-lines" class="w-full h-full opacity-60"></canvas>
            </div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.01</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] mb-4 masked-reveal">
                    Absolute stealth.<br>Zero presence.
                </h2>
                <p class="text-xs leading-relaxed font-sans max-w-[220px] text-black/70 masked-reveal" style="font-family: 'Inter', sans-serif;">
                    Your network footprint.<br>Entirely eradicated.
                </p>
            </main>
        </article>

        <!-- Card 2: Yellow Grid + Aura Asset Image -->
        <article class="col-span-1 relative w-full h-[500px] md:h-auto min-h-[450px] rounded-[2rem] flex flex-col justify-between p-8 overflow-hidden shadow-2xl border border-transparent" style="background: linear-gradient(#FDE047, #FDE047) padding-box, linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(202,138,4,0.4) 100%) border-box;">
            
            <!-- Aura Asset Image Background -->
            <div class="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" class="w-full h-full object-cover" alt="Futuristic Deconstructed Pyramid">
            </div>

            <!-- Grid Background Overlay -->
            <div class="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style="background-image: linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px); background-size: 1.5rem 1.5rem;"></div>

            <!-- Header -->
            <header class="relative z-20 flex justify-between items-center text-sm tracking-tight font-normal">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.02</span>
            </header>

            <!-- Main Content -->
            <main class="relative z-20 mt-auto">
                <h2 class="text-3xl md:text-4xl tracking-tight leading-[1.1] masked-reveal">
                    Adaptive shields.<br>Total autonomy.
                </h2>
            </main>
        </article>

        <!-- Card 3: Black Halftone -->
        <article class="col-span-1 md:col-span-2 relative w-full h-[450px] md:h-[350px] rounded-[2rem] flex flex-col md:flex-row justify-between p-8 overflow-hidden text-white shadow-2xl border border-transparent" style="font-family: 'Inter', sans-serif; background: linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%) border-box;">
            
            <!-- WebGL Halftone Background -->
            <div class="absolute inset-0 z-0 md:left-1/3 pointer-events-none">
                <canvas id="webgl-halftone" class="w-full h-full"></canvas>
            </div>

            <!-- Header (Left on desktop) -->
            <header class="relative z-20 flex md:flex-col justify-between md:justify-start items-center md:items-start text-sm tracking-tight font-normal text-white/90 gap-4" style="font-family: 'Space Mono', monospace;">
                <div class="flex items-center gap-1.5">
                    <iconify-icon icon="solar:shield-network-linear" width="20" height="20" class="text-yellow-400" style="stroke-width: 1.5;"></iconify-icon>
                    <span>aegis</span>
                </div>
                <span class="text-xs opacity-50 uppercase tracking-widest">Sector.03</span>
            </header>

            <!-- Main Content (Right on desktop) -->
            <main class="relative z-20 mt-auto md:mt-0 md:self-end md:text-right max-w-md w-full">
                <h2 class="text-4xl md:text-5xl tracking-tight leading-[1.1] font-normal mb-4 md:mb-6 uppercase masked-reveal">
                    Quantum<br>Core.
                </h2>
                <p class="text-xs leading-relaxed text-white/70 md:ml-auto md:max-w-[240px] masked-reveal" style="font-family: 'Space Mono', monospace;">
                    Next-gen cryptography<br>for modern infrastructure.
                </p>
            </main>
        </article>

    </div>

    <script>
        // GSAP ScrollTrigger Setup
        gsap.registerPlugin(ScrollTrigger);

        // Utility: Split text into words and wrap for masking
        function wrapWords(element) {
            const text = element.innerHTML;
            const words = text.split(/(<br>|\\s+)/).filter(Boolean);
            element.innerHTML = '';
            
            words.forEach(word => {
                if (word === '<br>') {
                    element.appendChild(document.createElement('br'));
                    return;
                }
                if (word.trim() === '') {
                    element.appendChild(document.createTextNode(' '));
                    return;
                }

                const outerSpan = document.createElement('span');
                outerSpan.style.display = 'inline-block';
                outerSpan.style.overflow = 'hidden';
                outerSpan.style.verticalAlign = 'bottom';
                outerSpan.style.paddingBottom = '0.1em'; // Prevent clipping on descenders

                const innerSpan = document.createElement('span');
                innerSpan.style.display = 'inline-block';
                innerSpan.innerHTML = word;
                innerSpan.classList.add('reveal-target');
                innerSpan.style.transform = 'translateY(110%)';
                innerSpan.style.willChange = 'transform';

                outerSpan.appendChild(innerSpan);
                element.appendChild(outerSpan);
            });
        }

        // Apply masking structure and animation
        document.querySelectorAll('.masked-reveal').forEach(el => {
            wrapWords(el);
            
            gsap.to(el.querySelectorAll('.reveal-target'), {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: "0%",
                duration: 0.85,
                ease: "power4.out",
                stagger: 0.04
            });
        });

        /* --- WebGL Section 1: Abstract Lines --- */
        const initLinesWebGL = () => {
            const canvas = document.getElementById('webgl-lines');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = parent.clientWidth;
                const height = parent.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();

            camera.position.z = 4.5;

            const group = new THREE.Group();
            scene.add(group);

            const material = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.85 }); 
            const particlesCount = 200;
            
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i+=3) {
                const r = 2.5;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                
                positions[i] = r * Math.sin(phi) * Math.cos(theta);
                positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
                positions[i+2] = r * Math.cos(phi);
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const index = [];
            for (let i = 0; i < particlesCount; i++) {
                for (let j = i + 1; j < particlesCount; j++) {
                    const dx = positions[i*3] - positions[j*3];
                    const dy = positions[i*3+1] - positions[j*3+1];
                    const dz = positions[i*3+2] - positions[j*3+2];
                    const distSq = dx*dx + dy*dy + dz*dz;
                    if (distSq < 1.2) { 
                        index.push(i, j);
                    }
                }
            }
            geometry.setIndex(index);
            
            const lines = new THREE.LineSegments(geometry, material);
            group.add(lines);

            const animate = () => {
                requestAnimationFrame(animate);
                group.rotation.y += 0.002;
                group.rotation.x += 0.001;
                renderer.render(scene, camera);
            };
            animate();
        };

        /* --- WebGL Section 3: Animated Halftone --- */
        const initHalftoneWebGL = () => {
            const canvas = document.getElementById('webgl-halftone');
            if(!canvas) return;
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setClearColor(0x0A0A0A, 1);
            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
            
            const resize = () => {
                const parent = canvas.parentElement;
                const width = Math.max(1, (parent && parent.clientWidth) || window.innerWidth || canvas.clientWidth || 1);
                const height = Math.max(1, (parent && parent.clientHeight) || window.innerHeight || canvas.clientHeight || 1);
                renderer.setSize(width, height, false);
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                const aspect = width / height;
                camera.left = -aspect;
                camera.right = aspect;
                camera.bottom = -1;
                camera.top = 1;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', resize);
            resize();
            camera.position.z = 1;

            const gridSize = 20;
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const scales = [];

            for (let x = -gridSize; x <= gridSize; x++) {
                for (let y = -gridSize; y <= gridSize; y++) {
                    positions.push(x * 0.15, y * 0.15, 0);
                    scales.push(1); 
                }
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('scale', new THREE.Float32BufferAttribute(scales, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color1: { value: new THREE.Color(0xFBBF24) }, 
                    color2: { value: new THREE.Color(0xFFFFFF) }
                },
                vertexShader: \`
                    attribute float scale;
                    varying vec2 vUv;
                    varying float vScale;
                    uniform float time;
                    
                    void main() {
                        vUv = position.xy;
                        float dist = length(position.xy);
                        float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);
                        vScale = animatedScale;
                        
                        gl_PointSize = animatedScale * 5.0; 
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                \`,
                fragmentShader: \`
                    uniform vec3 color1;
                    uniform vec3 color2;
                    varying vec2 vUv;
                    varying float vScale;
                    
                    void main() {
                        vec2 coord = gl_PointCoord - vec2(0.5);
                        if(length(coord) > 0.5) discard;
                        
                        vec3 finalColor = mix(color2, color1, (vUv.y + 1.0) * 0.5);
                        gl_FragColor = vec4(finalColor, vScale * 0.9);
                    }
                \`,
                transparent: true
            });

            const points = new THREE.Points(geometry, material);
            scene.add(points);

            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                material.uniforms.time.value = clock.getElapsedTime();
                renderer.render(scene, camera);
            };
            animate();
        };

        // Initialize WebGL instances
        initLinesWebGL();
        initHalftoneWebGL();
    <\/script>
</body>
</html>`,Ld=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network Diagnostics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=JetBrains+Mono:wght@200;300;400&display=swap" rel="stylesheet">
    <style>
        /* Essential mask utility for inner gradient borders */
        .mask-border {
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
        }
    </style>
</head>
<body class="bg-[#020804] text-white/90 antialiased min-h-screen flex items-center justify-center p-6 md:p-12 selection:bg-[#34d399]/20 font-sans relative overflow-hidden">

    <!-- Aura Asset Image Background Layer -->
    <div class="absolute inset-0 z-0 opacity-20 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')] bg-cover bg-center pointer-events-none mix-blend-screen"></div>

    <!-- WebGL-style Lines & Particles Background -->
    <canvas id="bg-waves" class="absolute inset-0 z-0 pointer-events-none opacity-40"></canvas>

    <main id="main-container" class="max-w-7xl w-full relative bg-white/[0.04] p-px z-10 backdrop-blur-sm shadow-2xl shadow-[#34d399]/5 rounded-sm">
        
        <div id="flashlight" class="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 pointer-events-none" style="background: radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(52,211,153,0.08), transparent 40%);"></div>

        <!-- Corner Accents -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>
        <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border border-[#34d399]/30 bg-[#020804] z-30"></div>

        <!-- Horizontal Shooting Line -->
        <div class="hidden md:block absolute -top-px left-0 right-0 h-px overflow-hidden z-20 pointer-events-none">
            <div id="shoot-h" class="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-transparent via-[#34d399]/80 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-px md:gap-x-px relative z-10">
            
            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>

                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    CORE-X
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-layers" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Neural Synchrony"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Optimized for zero-latency cognitive routing, maintaining absolute parity across decentralized processing nodes.</p>
                </div>
            </article>

            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>
                
                <div class="hidden md:block absolute top-0 bottom-0 -left-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot1" class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-[#34d399]/70 to-transparent"></div>
                </div>
                
                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    LINK-Y
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-nodes" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Fluid Topologies"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Self-healing network architectures that dynamically adjust vectors to circumvent bottlenecks and systemic anomalies.</p>
                </div>
            </article>

            <article class="relative flex flex-col py-12 md:p-12 bg-[#020804]/90 backdrop-blur-md">
                <!-- Border Gradient Overlay -->
                <div class="absolute inset-0 border border-transparent bg-[linear-gradient(to_bottom,rgba(52,211,153,0.35),transparent)] mask-border pointer-events-none z-20"></div>

                <div class="hidden md:block absolute top-0 bottom-0 -left-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot2" class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#34d399]/60 to-transparent"></div>
                </div>
                <div class="hidden md:block absolute top-0 bottom-0 -right-px w-px overflow-hidden z-20 pointer-events-none">
                    <div id="shoot3" class="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via-[#34d399]/70 to-transparent"></div>
                </div>

                <header class="text-xs text-white/40 mb-16 uppercase tracking-widest font-mono flex items-center gap-3 font-extralight">
                    <iconify-icon icon="solar:network-linear" stroke-width="1.5" class="text-sm text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"></iconify-icon>
                    GRID-Z
                </header>
                <div class="flex-grow flex items-center justify-center mb-16 relative h-56 w-full">
                    <canvas id="canvas-flow" class="absolute inset-0 w-full h-full" style="touch-action: none;"></canvas>
                </div>
                <div>
                    <h3 class="text-lg font-extralight tracking-tight mb-3 text-white/90 flex items-center">
                        <span class="typewriter" data-text="Elastic Matrices"></span><span class="animate-pulse inline-block w-1 h-4 bg-[#34d399]/80 ml-2 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                    </h3>
                    <p class="text-sm text-white/40 leading-relaxed font-extralight reveal-text">Responsive structural frameworks that instantly allocate computational mass during spikes and retract to preserve efficiency.</p>
                </div>
            </article>

        </div>
    </main>

    <script>
        // WebGL-style Background (Lines & Particles)
        const bgCanvas = document.getElementById('bg-waves');
        const bgCtx = bgCanvas.getContext('2d', { alpha: true });
        let bw, bh, bgT = 0;
        const resizeBg = () => {
            bw = window.innerWidth; bh = window.innerHeight;
            bgCanvas.width = bw; bgCanvas.height = bh;
        };
        window.addEventListener('resize', resizeBg);
        resizeBg();

        const drawBg = () => {
            bgT += 0.012;
            bgCtx.clearRect(0, 0, bw, bh);
            bgCtx.save();
            bgCtx.translate(bw / 2, bh / 2 + 150);
            
            const cols = 32, rows = 22, sp = 65;
            bgCtx.lineWidth = 1;
            
            for(let z = 0; z < rows; z++) {
                for(let x = 0; x < cols; x++) {
                    const px = (x - cols/2) * sp;
                    const pz = z * sp;
                    const scale = 800 / (800 + pz);
                    const sx = px * scale;
                    const y = Math.sin(x * 0.3 + bgT) * Math.cos(z * 0.3 + bgT) * 60;
                    const sy = (y + 50) * scale - 200;

                    bgCtx.fillStyle = \`rgba(52,211,153, \${0.7 * scale})\`;
                    bgCtx.beginPath();
                    bgCtx.arc(sx, sy, 1.2 * scale, 0, Math.PI*2);
                    bgCtx.fill();

                    if (x > 0) {
                        const pxL = (x - 1 - cols/2) * sp;
                        const sxL = pxL * scale;
                        const yL = Math.sin((x - 1) * 0.3 + bgT) * Math.cos(z * 0.3 + bgT) * 60;
                        const syL = (yL + 50) * scale - 200;
                        bgCtx.strokeStyle = \`rgba(52,211,153, \${0.12 * scale})\`;
                        bgCtx.beginPath();
                        bgCtx.moveTo(sx, sy); bgCtx.lineTo(sxL, syL);
                        bgCtx.stroke();
                    }
                    if (z > 0) {
                        const pzU = (z - 1) * sp;
                        const scaleU = 800 / (800 + pzU);
                        const sxU = px * scaleU;
                        const yU = Math.sin(x * 0.3 + bgT) * Math.cos((z - 1) * 0.3 + bgT) * 60;
                        const syU = (yU + 50) * scaleU - 200;
                        bgCtx.strokeStyle = \`rgba(52,211,153, \${0.12 * scale})\`;
                        bgCtx.beginPath();
                        bgCtx.moveTo(sx, sy); bgCtx.lineTo(sxU, syU);
                        bgCtx.stroke();
                    }
                }
            }
            bgCtx.restore();
            requestAnimationFrame(drawBg);
        };
        drawBg();

        // Interactive & Shooting Lines
        const mainEl = document.getElementById('main-container');
        const flash = document.getElementById('flashlight');
        const s1 = document.getElementById('shoot1'), s2 = document.getElementById('shoot2');
        const s3 = document.getElementById('shoot3'), sh = document.getElementById('shoot-h');
        let pos1 = -200, pos2 = -400, pos3 = -300, posH = -300;

        mainEl.addEventListener('mousemove', (e) => {
            const rect = mainEl.getBoundingClientRect();
            flash.style.setProperty('--x', \`\${e.clientX - rect.left}px\`);
            flash.style.setProperty('--y', \`\${e.clientY - rect.top}px\`);
            flash.style.opacity = '1';
        });
        mainEl.addEventListener('mouseleave', () => flash.style.opacity = '0');

        const animateShoots = () => {
            const h = mainEl.offsetHeight || 1000, w = mainEl.offsetWidth || 1200;
            pos1 += 2.5; pos2 += 1.8; pos3 += 3; posH += 3.5;
            if (pos1 > h) pos1 = -200;
            if (pos2 > h) pos2 = -200;
            if (pos3 > h) pos3 = -200;
            if (posH > w) posH = -300;
            if (s1) s1.style.transform = \`translateY(\${pos1}px)\`;
            if (s2) s2.style.transform = \`translateY(\${pos2}px)\`;
            if (s3) s3.style.transform = \`translateY(\${pos3}px)\`;
            if (sh) sh.style.transform = \`translateX(\${posH}px)\`;
            requestAnimationFrame(animateShoots);
        };
        animateShoots();

        // Typewriter Effect
        document.querySelectorAll('.typewriter').forEach(el => {
            const text = el.getAttribute('data-text');
            let i = 0, isDeleting = false;
            const type = () => {
                i += isDeleting ? -1 : 1;
                el.textContent = text.substring(0, i);
                let delay = isDeleting ? 30 : 80;
                if (!isDeleting && i === text.length) { delay = 4000; isDeleting = true; }
                else if (isDeleting && i === 0) { delay = 1500; isDeleting = false; }
                setTimeout(type, delay);
            };
            type();
        });

        // GSAP Masked Staggered Word Reveal 
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.reveal-text').forEach((el) => {
            const words = el.innerText.split(' ');
            el.innerHTML = '';
            words.forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.className = 'inline-block overflow-hidden mr-[0.25em] align-bottom leading-tight';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-full will-change-transform';
                inner.innerText = word;
                wrapper.appendChild(inner);
                el.appendChild(wrapper);
            });

            gsap.to(el.querySelectorAll('.will-change-transform'), {
                y: 0,
                ease: "power4.out",
                duration: 0.8,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: el,
                    start: "top 95%",
                }
            });
        });

        // 3D Canvas Utilities
        const projectIso = (x, y, z) => {
            const angle = Math.PI / 6; 
            return { x: (x - z) * Math.cos(angle), y: y + (x + z) * Math.sin(angle) };
        };

        const setupCanvas = (id, renderFn) => {
            const canvas = document.getElementById(id);
            const ctx = canvas.getContext('2d', { alpha: true });
            let w, h, time = 0;
            const resize = () => {
                const rect = canvas.parentElement.getBoundingClientRect();
                w = rect.width; h = rect.height;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = w * dpr; canvas.height = h * dpr;
                ctx.scale(dpr, dpr);
            };
            window.addEventListener('resize', resize);
            resize();
            const loop = () => {
                time += 0.015;
                ctx.clearRect(0, 0, w, h);
                ctx.save();
                ctx.translate(w / 2, h / 2 + 5);
                renderFn(ctx, time);
                ctx.restore();
                requestAnimationFrame(loop);
            };
            loop();
        };

        // Card 1: Fixed Cropping
        setupCanvas('canvas-layers', (ctx, t) => {
            const size = 42, layers = 5, gap = 20;
            ctx.lineWidth = 1;
            for (let i = layers - 1; i >= 0; i--) {
                const yOff = i * gap - (layers * gap) / 2 + Math.sin(t + i * 0.4) * 4;
                const p1 = projectIso(-size, yOff, -size), p2 = projectIso(size, yOff, -size);
                const p3 = projectIso(size, yOff, size), p4 = projectIso(-size, yOff, size);

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y); ctx.closePath();
                
                ctx.fillStyle = '#020804'; ctx.fill();
                ctx.strokeStyle = i === 0 ? 'rgba(52,211,153,0.8)' : 'rgba(52,211,153,0.15)';
                ctx.stroke();

                if (i === 0) {
                    ctx.save();
                    const center = projectIso(0, yOff, 0);
                    ctx.translate(center.x, center.y); ctx.scale(1, 0.5);
                    const sqSize = size * 0.55;
                    ctx.beginPath(); ctx.rect(-sqSize, -sqSize, sqSize * 2, sqSize * 2);
                    ctx.strokeStyle = 'rgba(52,211,153,0.4)'; ctx.stroke();
                    ctx.clip();
                    for(let j = -sqSize; j < sqSize; j += 4) {
                        ctx.beginPath(); ctx.moveTo(-sqSize, j); ctx.lineTo(sqSize, j);
                        ctx.strokeStyle = 'rgba(52,211,153,0.2)'; ctx.stroke();
                    }
                    ctx.restore();
                }
                
                if (i < layers - 1) {
                    const nextY = (i+1) * gap - (layers * gap) / 2 + Math.sin(t + (i+1) * 0.4) * 4;
                    const p1Next = projectIso(-size, nextY, -size), p3Next = projectIso(size, nextY, size);
                    ctx.beginPath(); ctx.setLineDash([2, 2]);
                    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p1Next.x, p1Next.y);
                    ctx.moveTo(p3.x, p3.y); ctx.lineTo(p3Next.x, p3Next.y);
                    ctx.strokeStyle = 'rgba(52,211,153,0.1)'; ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
        });

        // Card 2
        const drawCube = (ctx, x, y, z, s, colorStr) => {
            const pts = [
                projectIso(x-s, y-s, z-s), projectIso(x+s, y-s, z-s), projectIso(x+s, y-s, z+s), projectIso(x-s, y-s, z+s),
                projectIso(x-s, y+s, z-s), projectIso(x+s, y+s, z-s), projectIso(x+s, y+s, z+s), projectIso(x-s, y+s, z+s)
            ];
            ctx.strokeStyle = colorStr; ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[1].x, pts[1].y); ctx.lineTo(pts[2].x, pts[2].y); ctx.lineTo(pts[3].x, pts[3].y); ctx.closePath();
            ctx.moveTo(pts[4].x, pts[4].y); ctx.lineTo(pts[5].x, pts[5].y); ctx.lineTo(pts[6].x, pts[6].y); ctx.lineTo(pts[7].x, pts[7].y); ctx.closePath();
            ctx.moveTo(pts[0].x, pts[0].y); ctx.lineTo(pts[4].x, pts[4].y);
            ctx.moveTo(pts[1].x, pts[1].y); ctx.lineTo(pts[5].x, pts[5].y);
            ctx.moveTo(pts[2].x, pts[2].y); ctx.lineTo(pts[6].x, pts[6].y);
            ctx.moveTo(pts[3].x, pts[3].y); ctx.lineTo(pts[7].x, pts[7].y);
            ctx.stroke();
        };

        setupCanvas('canvas-nodes', (ctx, t) => {
            const s = 22, float = Math.sin(t) * 4;
            drawCube(ctx, -35, -float, -35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 35, float, -35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, -35, float, 35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 35, -float, 35, s, 'rgba(52,211,153,0.15)');
            drawCube(ctx, 0, Math.cos(t)*6 - 15, 0, s*0.9, 'rgba(52,211,153,0.6)'); 
        });

        // Card 3
        setupCanvas('canvas-flow', (ctx, t) => {
            const size = 65, segments = 22, step = (size * 2) / segments;
            ctx.lineWidth = 1;
            const getH = (x, z) => {
                const dist = Math.sqrt(x*x + z*z);
                const peak = Math.max(0, 45 - dist * 1.1);
                const wave = Math.sin(x*0.2 + t*1.5) * Math.cos(z*0.2 + t*1.5) * 5;
                return -peak - wave + 15;
            };

            for (let z = -size; z < size; z += step) {
                for (let x = -size; x < size; x += step) {
                    const y1 = getH(x, z), y2 = getH(x + step, z);
                    const y3 = getH(x + step, z + step), y4 = getH(x, z + step);
                    const p1 = projectIso(x, y1, z), p2 = projectIso(x + step, y2, z);
                    const p3 = projectIso(x + step, y3, z + step), p4 = projectIso(x, y4, z + step);

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                    ctx.lineTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y); ctx.closePath();
                    ctx.fillStyle = '#020804'; ctx.fill();

                    const heightRatio = Math.max(0, (-y1) / 30);
                    const alpha = 0.05 + heightRatio * 0.4;
                    ctx.strokeStyle = heightRatio > 0.6 ? \`rgba(52,211,153,\${alpha + 0.3})\` : \`rgba(52,211,153,\${alpha + 0.05})\`;
                    ctx.stroke();
                }
            }
        });
    <\/script>
</body>
</html>`,Rd=`<!doctype html>
<html lang="en" data-autofocus-guard-installed="1"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanguard Security - Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.top-0{top:0px}.z-0{z-index:0}.z-50{z-index:50}.z-10{z-index:10}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-2{margin-top:0.5rem}.mt-auto{margin-top:auto}.flex{display:flex}.grid{display:grid}.h-1{height:0.25rem}.h-32{height:8rem}.h-\\[65vh\\]{height:65vh}.h-full{height:100%}.min-h-screen{min-height:100vh}.min-h-\\[500px\\]{min-height:500px}.w-full{width:100%}.max-w-2xl{max-width:42rem}.max-w-4xl{max-width:56rem}.max-w-7xl{max-width:80rem}.max-w-\\[40px\\]{max-width:40px}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1\\.5{gap:0.375rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-6{gap:1.5rem}.gap-\\[2px\\]{gap:2px}.overflow-hidden{overflow:hidden}.rounded{border-radius:0.25rem}.rounded-md{border-radius:0.375rem}.rounded-sm{border-radius:0.125rem}.rounded-xl{border-radius:0.75rem}.border-b{border-bottom-width:1px}.border-white\\/5{border-color:rgb(255 255 255 / 0.05)}.bg-\\[\\#0a0a0a\\]{--tw-bg-opacity:1;background-color:rgb(10 10 10 / var(--tw-bg-opacity, 1))}.bg-\\[\\#0a0a0a\\]\\/80{background-color:rgb(10 10 10 / 0.8)}.bg-\\[\\#1a1a1a\\]{--tw-bg-opacity:1;background-color:rgb(26 26 26 / var(--tw-bg-opacity, 1))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1))}.bg-\\[\\#121212\\]{--tw-bg-opacity:1;background-color:rgb(18 18 18 / var(--tw-bg-opacity, 1))}.bg-blue-500\\/80{background-color:rgb(59 130 246 / 0.8)}.bg-purple-500\\/80{background-color:rgb(168 85 247 / 0.8)}.bg-slate-500{--tw-bg-opacity:1;background-color:rgb(100 116 139 / var(--tw-bg-opacity, 1))}.p-6{padding:1.5rem}.px-1\\.5{padding-left:0.375rem;padding-right:0.375rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:0.125rem;padding-bottom:0.125rem}.py-1\\.5{padding-top:0.375rem;padding-bottom:0.375rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:3rem;padding-bottom:3rem}.pt-16{padding-top:4rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.font-sans{font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.text-base{font-size:1rem;line-height:1.5rem}.text-xs{font-size:0.75rem;line-height:1rem}.text-5xl{font-size:3rem;line-height:1}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.font-light{font-weight:300}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-0.025em}.tracking-wide{letter-spacing:0.025em}.text-slate-200{--tw-text-opacity:1;color:rgb(226 232 240 / var(--tw-text-opacity, 1))}.text-slate-300{--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity, 1))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-80{opacity:0.8}.backdrop-blur-md{--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.selection\\:bg-blue-500\\/30 *::selection{background-color:rgb(59 130 246 / 0.3)}.selection\\:bg-blue-500\\/30::selection{background-color:rgb(59 130 246 / 0.3)}.before\\:absolute::before{content:var(--tw-content);position:absolute}.before\\:inset-0::before{content:var(--tw-content);inset:0px}.before\\:-z-10::before{content:var(--tw-content);z-index:-10}.before\\:rounded-md::before{content:var(--tw-content);border-radius:0.375rem}.before\\:rounded-xl::before{content:var(--tw-content);border-radius:0.75rem}.before\\:bg-gradient-to-b::before{content:var(--tw-content);background-image:linear-gradient(to bottom, var(--tw-gradient-stops))}.before\\:from-white\\/20::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.2) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:from-white\\/15::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.15) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.before\\:to-transparent::before{content:var(--tw-content);--tw-gradient-to:transparent var(--tw-gradient-to-position)}.before\\:p-\\[1px\\]::before{content:var(--tw-content);padding:1px}.before\\:transition-colors::before{content:var(--tw-content);transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.before\\:duration-500::before{content:var(--tw-content);transition-duration:500ms}.before\\:\\[mask-composite\\:exclude\\]::before{content:var(--tw-content);-webkit-mask-composite:xor;mask-composite:exclude}.before\\:\\[mask\\:linear-gradient\\(\\#fff_0_0\\)_content-box\\2c linear-gradient\\(\\#fff_0_0\\)\\]::before{content:var(--tw-content);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)}.hover\\:bg-\\[\\#222\\]:hover{--tw-bg-opacity:1;background-color:rgb(34 34 34 / var(--tw-bg-opacity, 1))}.hover\\:before\\:from-white\\/25:hover::before{content:var(--tw-content);--tw-gradient-from:rgb(255 255 255 / 0.25) var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.group:hover .group-hover\\:opacity-100{opacity:1}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\\:text-7xl{font-size:4.5rem;line-height:1}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-8xl{font-size:6rem;line-height:1}}</style><meta name="disabled-font-classes" content="font-inter,font-roboto,font-poppins,font-playfair,font-merriweather,font-bricolage,font-work-sans,font-pt-serif,font-space-mono,font-cormorant,font-newsreader,font-dm-sans,font-oswald,font-geist-mono,font-space-grotesk,font-montserrat,font-quicksand,font-google-sans-flex,font-nunito,font-geist,font-jakarta,font-instrument-serif"><link id="all-fonts-link-font-manrope" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style></head>
<body class="bg-[#0a0a0a] text-slate-200 min-h-screen selection:bg-blue-500/30 antialiased font-sans">

    <!-- Header -->
    <header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div class="flex items-center gap-2">
            <span class="text-base text-white tracking-tight font-medium font-sans">Vanguard</span>
            <span class="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded tracking-wide font-sans">Security</span>
        </div>
        <button class="relative flex items-center gap-1.5 bg-[#1a1a1a] hover:bg-[#222] transition-colors text-slate-300 text-xs px-3 py-1.5 rounded-md z-0 before:absolute before:inset-0 before:-z-10 before:rounded-md before:p-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor] font-sans">
            <iconify-icon icon="solar:alt-arrow-left-linear" stroke-width="1.5"></iconify-icon>
            Back to Portal
        </button>
    </header>

    <!-- Hero Section with Canvas Animation & Aura Background -->
    <section class="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/5 pt-16">
        <!-- Aura Abstract Asset Image Background -->
        <div class="absolute inset-0 z-0 opacity-20 mix-blend-screen bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center"></div>
        
        <!-- WebGL/Canvas Background -->
        <canvas id="particle-canvas" class="absolute inset-0 z-0 w-full h-full opacity-80" width="1519" height="715"></canvas>
        
        <!-- Hero Content -->
        <div class="relative z-10 text-center mx-4 max-w-4xl w-full">
            <h1 class="reveal-text text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-6 font-manrope font-light">
                Autonomous Cyber<br>Immunity
            </h1>
            <p class="reveal-text text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-manrope font-light">
                Securing global infrastructure through AI-driven threat intelligence and proactive zero-day neutralization.
            </p>
        </div>
    </section>

    <!-- Content Grid Section -->
    <section class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Card 1 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Sentinel Protocol <span class="text-xs text-slate-500 font-normal font-sans">(Threat Detection)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Deep learning algorithms monitoring data streams to isolate vulnerabilities before they manifest.
                    </p>
                </div>
                
                <!-- Animated Dot Chart -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <!-- Bars -->
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-slate-500 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Nexus Guardian <span class="text-xs text-slate-500 font-normal font-sans">(Node Security)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Heuristic analysis tracking process execution and memory states to halt malicious payloads instantly.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Purple tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-purple-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="relative bg-[#121212] rounded-xl p-6 h-full flex flex-col group z-0 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/15 hover:before:from-white/25 before:to-transparent before:transition-colors before:duration-500 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] before:[WebkitMaskComposite:xor]">
                <div class="mb-4">
                    <h3 class="reveal-text text-base text-white tracking-tight flex items-baseline gap-2 font-medium font-sans">
                        Aether Monitor <span class="text-xs text-slate-500 font-normal font-sans">(Cloud Defense)</span>
                    </h3>
                    <p class="text-sm text-slate-400 mt-2 leading-relaxed font-normal font-sans">
                        Continuous validation of distributed environments and access controls to maintain absolute state integrity.
                    </p>
                </div>
                
                <!-- Animated Dot Chart (Blue tint) -->
                <div class="mt-auto pt-6 flex items-end gap-3 h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 0.15;"></div>
                    </div>
                    <div class="chart-col flex flex-col-reverse gap-[2px] w-full max-w-[40px]">
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                        <div class="chart-dot w-full h-1 bg-blue-500/80 rounded-sm transition-opacity duration-300" style="opacity: 1;"></div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Scripts -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // Text Masked Reveal with GSAP Split Logic
            document.querySelectorAll('.reveal-text').forEach(el => {
                const html = el.innerHTML;
                const newHtml = html.split(/(<br\\s*\\/?>|\\s+)/).map(part => {
                    if (part.match(/<br/i)) return part;
                    if (part.trim() === '') return part; 
                    return \`<span style="display:inline-block; overflow:hidden; vertical-align:top;"><span class="reveal-word" style="display:inline-block; transform:translateY(100%); opacity:0;">\${part}</span></span>\`;
                }).join('');
                el.innerHTML = newHtml;
            });

            gsap.registerPlugin(ScrollTrigger);
            gsap.utils.toArray('.reveal-text').forEach(el => {
                gsap.to(el.querySelectorAll('.reveal-word'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%'
                    }
                });
            });

            // Chart Animation Logic
            setInterval(() => {
                document.querySelectorAll('.chart-col').forEach(col => {
                    const dots = col.querySelectorAll('.chart-dot');
                    const activeCount = Math.floor(Math.random() * (dots.length + 1));
                    dots.forEach((dot, index) => {
                        dot.style.opacity = index < activeCount ? '1' : '0.15';
                    });
                });
            }, 600);

            // Canvas Background Logic
            const canvas = document.getElementById('particle-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                let width, height;
                
                const spacing = 16;
                const dotRadius = 1.5;
                let time = 0;

                function resize() {
                    width = canvas.width = canvas.offsetWidth;
                    height = canvas.height = canvas.offsetHeight;
                }
                
                window.addEventListener('resize', resize);
                resize();

                function draw() {
                    ctx.clearRect(0, 0, width, height);
                    
                    const cols = Math.floor(width / spacing);
                    const rows = Math.floor(height / spacing);
                    
                    const offsetX = (width - cols * spacing) / 2;
                    const offsetY = (height - rows * spacing) / 2;

                    for (let i = 0; i <= cols; i++) {
                        for (let j = 0; j <= rows; j++) {
                            const x = offsetX + i * spacing;
                            const y = offsetY + j * spacing;
                            
                            const nx = i * 0.1;
                            const ny = j * 0.1;
                            
                            const wave1 = Math.sin(nx + time * 0.5) * Math.cos(ny - time * 0.3);
                            const wave2 = Math.sin(nx * 0.5 - ny * 0.5 + time * 0.8);
                            const value = wave1 + wave2;

                            if (value > 0.1) {
                                ctx.beginPath();
                                ctx.arc(x, y, dotRadius, 0, Math.PI * 2);

                                const highlightCheck = Math.sin(i * 12.34) * Math.cos(j * 56.78);
                                
                                if (highlightCheck > 0.98) {
                                    ctx.fillStyle = '#3b82f6'; // Blue highlight
                                } else if (highlightCheck < -0.98) {
                                    ctx.fillStyle = '#8b5cf6'; // Purple highlight
                                } else {
                                    const alpha = Math.min(0.6, (value - 0.1) * 0.8);
                                    ctx.fillStyle = \`rgba(148, 163, 184, \${alpha})\`;
                                }
                                
                                ctx.fill();
                            }
                        }
                    }
                    
                    time += 0.02;
                    requestAnimationFrame(draw);
                }
                
                draw();
            }
        });
    <\/script>

</body></html>`,zd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skeuomorphic Toggle UI - Blue Remix</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-slate-50 flex items-center justify-center min-h-screen p-4 antialiased" style="background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px); background-size: 120px 120px; background-position: center center;">

    <!-- Card Container with Premium Gradient Border -->
    <div id="toggle-card" class="relative rounded-[2rem] w-full max-w-[380px] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.12)] p-[1px] bg-gradient-to-b from-slate-200/80 via-slate-100/50 to-slate-50/20 z-10">
        
        <div class="bg-white rounded-[calc(2rem-1px)] w-full h-full overflow-hidden flex flex-col relative">
            
            <!-- Top Section: 3D Environment -->
            <div class="relative h-64 w-full flex items-center justify-center overflow-hidden" style="background: radial-gradient(circle at 50% 50%, #f0f7ff 0%, #ffffff 80%);">
                
                <!-- Light Rays -->
                <div class="absolute inset-0 pointer-events-none opacity-40" style="background: repeating-conic-gradient(from 0deg at 50% -10%, rgba(59, 130, 246, 0.04) 0deg, transparent 4deg, transparent 8deg, rgba(59, 130, 246, 0.04) 12deg);"></div>

                <!-- Soft Overlay Shadows -->
                <div class="absolute inset-0 pointer-events-none" style="box-shadow: inset 0 20px 40px -10px rgba(0,0,0,0.04), inset 0 -20px 40px -10px rgba(59, 130, 246, 0.05);"></div>

                <!-- Simulated WebGL Waves / Ripples -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <!-- Ambient Wave Base -->
                    <div class="absolute bottom-0 w-full h-32" style="background: radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 70%);"></div>
                    
                    <!-- Outer Ripple -->
                    <div class="absolute w-[320px] h-[160px] rounded-[80px]" style="border: 1px solid rgba(96, 165, 250, 0.05); box-shadow: 0 0 30px rgba(96, 165, 250, 0.06), inset 0 0 20px rgba(96, 165, 250, 0.03);"></div>
                    <!-- Middle Ripple -->
                    <div class="absolute w-[260px] h-[120px] rounded-[60px]" style="border: 1px solid rgba(96, 165, 250, 0.12); box-shadow: 0 0 20px rgba(96, 165, 250, 0.1), inset 0 0 15px rgba(96, 165, 250, 0.05);"></div>
                    <!-- Inner Ripple -->
                    <div class="absolute w-[220px] h-[90px] rounded-[45px]" style="border: 1px solid rgba(96, 165, 250, 0.2); box-shadow: 0 0 15px rgba(96, 165, 250, 0.18), inset 0 0 10px rgba(96, 165, 250, 0.1);"></div>
                </div>

                <!-- Dotted Pattern Arc -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] pointer-events-none" style="mask-image: radial-gradient(circle at bottom, transparent 50px, black 51px); -webkit-mask-image: radial-gradient(circle at bottom, transparent 50px, black 51px);">
                    <div class="w-full h-full opacity-40" style="background-image: radial-gradient(rgba(59, 130, 246, 0.7) 1.5px, transparent 1.5px); background-size: 8px 8px; mask-image: linear-gradient(to bottom, black, transparent); -webkit-mask-image: linear-gradient(to bottom, black, transparent);"></div>
                </div>

                <!-- Skeuomorphic Toggle Control -->
                <div id="skeuomorphic-toggle" role="switch" aria-checked="true" tabindex="0" class="relative z-10 w-48 h-16 rounded-full p-1.5 cursor-pointer select-none" style="background: repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%); box-shadow: inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4); border: 1px solid #60a5fa; transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;">
                    <div id="skeuomorphic-thumb" class="absolute top-1.5 left-1.5 w-[116px] h-[calc(100%-0.75rem)] rounded-full flex items-center justify-center" style="background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%); box-shadow: 0 10px 20px -4px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(0,0,0,0.04), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(96, 165, 250, 0.2); border: 1px solid #e0edfa; transform: translateX(64px); transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;">
                        <span class="text-sm font-normal text-slate-800 tracking-wide" style="text-shadow: 0 1px 1px rgba(255,255,255,0.9); transition: color 0.35s ease, opacity 0.35s ease;">Live Sync</span>
                    </div>
                </div>
            </div>

            <!-- Bottom Section: Content -->
            <div class="p-7 pb-9 bg-white z-20 relative">
                <!-- Icon -->
                <div class="w-8 h-8 rounded-[0.6rem] mb-4 flex items-center justify-center" style="background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%); box-shadow: inset 0 2px 2px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.1), 0 4px 8px -2px rgba(37, 99, 235, 0.4); border: 1px solid #1d4ed8;">
                    <iconify-icon icon="solar:server-square-linear" class="text-white text-base" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.2));"></iconify-icon>
                </div>
                
                <!-- Text -->
                <h2 class="text-xl font-normal tracking-tight text-slate-900 mb-1.5 mask-reveal">Real-time Updates</h2>
                <p class="text-sm text-slate-500 leading-relaxed mask-reveal">Seamless background integration keeps everything current.</p>
            </div>
            
        </div>
    </div>

    <script>
        (function () {
            var toggle = document.getElementById('skeuomorphic-toggle');
            var thumb = document.getElementById('skeuomorphic-thumb');
            var label = thumb && thumb.querySelector('span');
            if (!toggle || !thumb) return;

            var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%)';
            var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)';
            var ON_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4)';
            var OFF_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(255,255,255,0.55), 0 0 0 6px rgba(241, 245, 249, 0.9), 0 0 18px 2px rgba(148, 163, 184, 0.25)';
            var ON_BORDER = '#60a5fa';
            var OFF_BORDER = '#94a3b8';
            var ON_THUMB_SHADOW = '0 10px 20px -4px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(0,0,0,0.04), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(96, 165, 250, 0.2)';
            var OFF_THUMB_SHADOW = '0 8px 16px -4px rgba(15, 23, 42, 0.18), 0 3px 5px -2px rgba(0,0,0,0.05), inset 0 3px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(148, 163, 184, 0.25)';

            function travel() {
                return Math.max(0, toggle.clientWidth - thumb.clientWidth - 12);
            }

            function apply(on) {
                toggle.setAttribute('aria-checked', on ? 'true' : 'false');
                toggle.style.background = on ? ON_BG : OFF_BG;
                toggle.style.boxShadow = on ? ON_SHADOW : OFF_SHADOW;
                toggle.style.borderColor = on ? ON_BORDER : OFF_BORDER;
                thumb.style.transform = 'translateX(' + (on ? travel() : 0) + 'px)';
                thumb.style.boxShadow = on ? ON_THUMB_SHADOW : OFF_THUMB_SHADOW;
                if (label) {
                    label.style.opacity = on ? '1' : '0.72';
                    label.style.color = on ? '#1e293b' : '#475569';
                }
            }

            function flip() {
                apply(toggle.getAttribute('aria-checked') !== 'true');
            }

            apply(true);
            toggle.addEventListener('click', flip);
            toggle.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    flip();
                }
            });
            window.addEventListener('resize', function () {
                apply(toggle.getAttribute('aria-checked') === 'true');
            });
        })();

        document.addEventListener("DOMContentLoaded", () => {
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
            gsap.registerPlugin(ScrollTrigger);
            
            document.querySelectorAll('.mask-reveal').forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                
                text.split(/(\\s+)/).forEach(part => {
                    if (!part.trim()) {
                        el.appendChild(document.createTextNode(part));
                        return;
                    }
                    
                    const wrapper = document.createElement('span');
                    wrapper.style.display = 'inline-block';
                    wrapper.style.overflow = 'hidden';
                    wrapper.style.verticalAlign = 'bottom';
                    
                    const inner = document.createElement('span');
                    inner.innerText = part;
                    inner.style.display = 'inline-block';
                    inner.className = 'reveal-word';
                    inner.style.transform = 'translateY(110%)';
                    inner.style.opacity = '0';
                    
                    wrapper.appendChild(inner);
                    el.appendChild(wrapper);
                });
                
                gsap.to(el.querySelectorAll('.reveal-word'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                    }
                });
            });
        });
    <\/script>
</body>
</html>`,Bd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Matrix State</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Geist:wght@300;400&family=Gloock&display=swap" rel="stylesheet">
</head>
<body class="bg-[#050505] text-white h-screen w-screen overflow-hidden relative selection:bg-white/20 selection:text-white">
    
    <!-- WebGL Background Canvas -->
    <canvas id="glcanvas" class="absolute inset-0 z-0 w-full h-full"></canvas>

    <!-- Aura Asset Image Overlay (Mix Blend Texture) -->
    <div class="absolute inset-0 z-10 opacity-30 mix-blend-screen pointer-events-none bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')] bg-cover bg-center"></div>

    <!-- Structural Framing Lines with Corner Squares -->
    <div class="absolute inset-6 md:inset-12 border border-white/10 pointer-events-none z-20 transition-all duration-1000 fade-target" style="opacity: 0;">
        <div class="absolute -top-1 -left-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -top-1 -right-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -bottom-1 -left-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
        <div class="absolute -bottom-1 -right-1 w-2 h-2 border border-white/30 bg-[#050505]"></div>
    </div>

    <!-- Main Content Overlay -->
    <main class="absolute inset-0 z-30 p-12 md:p-20 flex flex-col justify-between pointer-events-none">
        
        <!-- Top Row: Editorial Grid Metadata -->
        <header class="grid grid-cols-2 md:grid-cols-3 w-full gap-8 fade-target transition-all duration-1000 ease-out font-['DM_Mono'] uppercase" style="opacity: 0; transform: translateY(10px);">
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light">
                <span class="text-gray-200">SYSTEM — 09</span>
                <span>NETWORK UPLINK</span>
            </div>
            <div class="hidden md:flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light text-center">
                <span class="text-gray-200">PING 1.2MS</span>
                <span>SYNC COMPLETE</span>
            </div>
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-light text-right">
                <span class="text-gray-200">SECURITY</span>
                <span>SECURED</span>
            </div>
        </header>

        <!-- Middle: Dashboard Layout -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-12 md:gap-8 fade-target transition-all duration-1000 ease-out flex-1 mt-12 md:mt-0" style="opacity: 0; transform: translateY(10px);">
            
            <!-- Left: Title & Context -->
            <section class="flex-shrink-0 z-40 pointer-events-auto">
                <h2 class="font-['Gloock'] text-5xl md:text-7xl font-normal tracking-tight text-white leading-none uppercase">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">QUANTUM</span></span><br>
                    <span class="inline-block overflow-hidden align-bottom italic text-gray-300 pr-4"><span class="reveal-word inline-block translate-y-full">MATRIX</span></span>
                </h2>
                <p class="font-['Geist'] text-sm text-gray-400 mt-6 max-w-xs font-light leading-relaxed">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">Continuous</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">monitoring</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">of</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">decentralized</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">server</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">arrays.</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">All</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">telemetry</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">data</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">is</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">perfectly</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">synchronized</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">across</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">the</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">global</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">infrastructure</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-word inline-block translate-y-full">network.</span></span>
                </p>
            </section>

            <!-- Right: Telemetry Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl pointer-events-auto font-['Geist'] z-40">
                <!-- Metric Card 1 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Bandwidth</span>
                            <iconify-icon icon="solar:graph-up-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="text-3xl font-normal tracking-tight text-white">142.8<span class="text-sm text-gray-500 ml-1 font-light">GB/s</span></div>
                        <div class="w-full h-0.5 bg-white/10 mt-2">
                            <div class="h-full bg-gray-300 w-[88%]"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Metric Card 2 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Server Uplinks</span>
                            <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="text-3xl font-normal tracking-tight text-white">8,192</div>
                        <div class="flex items-end gap-1 h-4 mt-2 opacity-70">
                            <div class="w-full bg-white/20 h-1/2"></div>
                            <div class="w-full bg-white/40 h-3/4"></div>
                            <div class="w-full bg-white/30 h-1/3"></div>
                            <div class="w-full bg-white/60 h-full"></div>
                            <div class="w-full bg-white/50 h-2/3"></div>
                            <div class="w-full bg-white/80 h-[90%]"></div>
                        </div>
                    </div>
                </div>

                <!-- Metric Card 3 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Health</span>
                            <div class="w-1.5 h-1.5 rounded-full bg-gray-200 animate-pulse"></div>
                        </div>
                        <div class="text-xl font-normal tracking-tight text-gray-200 leading-snug mt-auto">
                            Systems nominal across all primary regions.
                        </div>
                    </div>
                </div>

                <!-- Metric Card 4 -->
                <div class="p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent h-full">
                    <div class="bg-[#050505]/70 backdrop-blur-md p-5 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500 h-full">
                        <div class="flex justify-between items-center text-xs font-['DM_Mono'] text-gray-400 tracking-widest uppercase">
                            <span>Firewalls</span>
                            <iconify-icon icon="solar:shield-check-linear" stroke-width="1.5" class="text-base text-gray-200"></iconify-icon>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-auto font-['DM_Mono']">
                            <span class="text-xs border border-white/10 px-2 py-1 text-gray-300">AES-256</span>
                            <span class="text-xs border border-white/10 px-2 py-1 text-gray-300">BIOMETRIC</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Row: Status Footer -->
        <footer class="w-full flex justify-between items-end fade-target transition-all duration-1000 ease-out mt-8" style="opacity: 0; transform: translateY(10px);">
            <div class="flex items-center gap-3 text-xs text-gray-500 tracking-widest font-['DM_Mono'] uppercase font-light">
                <iconify-icon icon="solar:radar-linear" stroke-width="1.5" class="text-lg text-gray-200"></iconify-icon>
                <span class="hidden md:inline">MONITORING SECTORS</span>
            </div>
            <div class="flex flex-col gap-2 text-xs text-gray-500 tracking-widest font-['DM_Mono'] uppercase font-light text-right">
                <span class="text-gray-200">ROOT.USER</span>
                <span>SESSION ACTIVE</span>
            </div>
        </footer>
    </main>

    <!-- UI Animation Logic -->
    <script>
        window.addEventListener('load', () => {
            gsap.registerPlugin(ScrollTrigger);

            // Initial UI fade
            document.querySelectorAll('.fade-target').forEach((el, i) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, i * 150 + 100);
            });

            // Masked word reveal
            gsap.to('.reveal-word', {
                scrollTrigger: {
                    trigger: '.reveal-word',
                    start: 'top 95%',
                },
                y: '0%',
                duration: 0.8,
                stagger: 0.03,
                ease: 'power4.out',
                delay: 0.3
            });
        });
    <\/script>

    <!-- WebGL Logic -->
    <script>
        const canvas = document.getElementById('glcanvas');
        const gl = canvas.getContext('webgl');

        let mouseX = -1000, mouseY = -1000;
        let lastMouseMove = 0;
        let currentMouseActive = 0.0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = canvas.clientHeight - e.clientY;
            lastMouseMove = Date.now();
        });

        const vsSource = \`
            attribute vec4 aVertexPosition;
            void main() {
                gl_Position = aVertexPosition;
            }
        \`;

        const fsSource = \`
            precision highp float;
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform vec2 u_mouse;
            uniform float u_mouseActive;

            float hash(float n) { return fract(sin(n)*753.5453123); }
            float noise(float x) {
                float i = floor(x);
                float f = fract(x);
                f = f*f*(3.0-2.0*f);
                return mix(hash(i), hash(i+1.0), f);
            }

            vec2 sdLine(vec2 p, vec2 a, vec2 b) {
                vec2 pa = p - a, ba = b - a;
                float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
                return vec2(length(pa - ba * h), h);
            }

            float lightning(vec2 uv, vec2 a, vec2 b, float t) {
                vec2 ab = b - a;
                float len = length(ab);
                if(len < 0.01) return 0.0;
                vec2 dir = ab / len;
                
                vec2 pa = uv - a;
                float h = clamp(dot(pa, dir) / len, 0.0, 1.0);
                float dist = length(pa - dir * (h * len));
                
                float env = sin(h * 3.1415);
                
                float offset = (noise(h * 25.0 - t * 35.0) - 0.5) * 0.08 * env;
                offset += (noise(h * 70.0 + t * 50.0) - 0.5) * 0.02 * env;
                
                float d = abs(dist + offset);
                
                return (0.0002 / (d + 0.0002) + 0.00001 / (d*d + 0.00001)) * env;
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                uv = uv * 2.0 - 1.0;
                uv.x *= u_resolution.x / u_resolution.y;

                vec2 mouseUV = u_mouse / u_resolution.xy;
                mouseUV = mouseUV * 2.0 - 1.0;
                mouseUV.x *= u_resolution.x / u_resolution.y;

                vec2 center = vec2(-0.8, -0.2);
                center.x += sin(u_time * 0.4) * 0.03;
                center.y += cos(u_time * 0.3) * 0.03;

                vec2 dirUp = normalize(vec2(0.15, 1.0));
                vec2 dirRight = normalize(vec2(1.0, -0.25));
                vec2 dirDownLeft = normalize(vec2(-0.8, -0.6));

                vec2 l1 = sdLine(uv, center, center + dirUp * 5.0);
                vec2 l2 = sdLine(uv, center, center + dirRight * 5.0);
                vec2 l3 = sdLine(uv, center, center + dirDownLeft * 5.0);

                float intensity = 0.006;
                float glow = intensity / (l1.x + 0.001) +
                             intensity / (l2.x + 0.001) +
                             (intensity * 0.4) / (l3.x + 0.001);

                float pulse1 = smoothstep(0.1, 0.0, abs(l1.y - fract(u_time * 0.4))) * 0.03 / (l1.x + 0.001);
                float pulse2 = smoothstep(0.1, 0.0, abs(l2.y - fract(u_time * 0.5 + 0.3))) * 0.03 / (l2.x + 0.001);
                float pulse3 = smoothstep(0.1, 0.0, abs(l3.y - fract(u_time * 0.3 + 0.7))) * 0.015 / (l3.x + 0.001);
                glow += pulse1 + pulse2 + pulse3;

                vec2 p1 = center + dirUp * clamp(dot(mouseUV - center, dirUp), 0.0, 5.0);
                vec2 p2 = center + dirRight * clamp(dot(mouseUV - center, dirRight), 0.0, 5.0);
                vec2 p3 = center + dirDownLeft * clamp(dot(mouseUV - center, dirDownLeft), 0.0, 5.0);
                
                float lgt1 = lightning(uv, p1, mouseUV, u_time);
                float lgt2 = lightning(uv, p2, mouseUV, u_time + 10.0);
                float lgt3 = lightning(uv, p3, mouseUV, u_time + 20.0);
                
                float flicker = step(0.1, noise(u_time * 60.0)) * (noise(u_time * 150.0) * 0.8 + 0.2);
                
                float d1 = length(mouseUV - p1);
                float d2 = length(mouseUV - p2);
                float d3 = length(mouseUV - p3);
                
                glow += lgt1 * smoothstep(2.0, 0.0, d1) * u_mouseActive * flicker;
                glow += lgt2 * smoothstep(2.0, 0.0, d2) * u_mouseActive * flicker;
                glow += lgt3 * smoothstep(2.0, 0.0, d3) * u_mouseActive * flicker;

                float distToCenter = length(uv - center);
                glow += 0.04 / (distToCenter + 0.01);

                vec3 baseColor = vec3(0.6, 0.75, 1.0);
                vec3 finalColor = baseColor * glow;

                finalColor *= 0.85 + 0.15 * sin(u_time * 2.0 - distToCenter * 8.0);

                float vignette = 1.0 - smoothstep(0.4, 2.0, length(uv));
                finalColor *= vignette;

                float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
                finalColor += n * 0.02;

                gl_FragColor = vec4(finalColor, 1.0);
            }
        \`;

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
            return shader;
        }

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, createShader(gl, gl.VERTEX_SHADER, vsSource));
        gl.attachShader(shaderProgram, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
        gl.linkProgram(shaderProgram);

        const programInfo = {
            program: shaderProgram,
            attribLocations: { vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition') },
            uniformLocations: {
                resolution: gl.getUniformLocation(shaderProgram, 'u_resolution'),
                time: gl.getUniformLocation(shaderProgram, 'u_time'),
                mouse: gl.getUniformLocation(shaderProgram, 'u_mouse'),
                mouseActive: gl.getUniformLocation(shaderProgram, 'u_mouseActive'),
            },
        };

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0]), gl.STATIC_DRAW);

        let startTime = Date.now();

        function render() {
            if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            }
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.useProgram(programInfo.program);

            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

            let timeSinceMove = Date.now() - lastMouseMove;
            let targetActive = timeSinceMove < 150 ? 1.0 : Math.max(0.0, 1.0 - (timeSinceMove - 150) / 350.0);
            currentMouseActive += (targetActive - currentMouseActive) * 0.15;

            gl.uniform2f(programInfo.uniformLocations.resolution, gl.canvas.width, gl.canvas.height);
            gl.uniform1f(programInfo.uniformLocations.time, (Date.now() - startTime) * 0.001);
            gl.uniform2f(programInfo.uniformLocations.mouse, mouseX, mouseY);
            gl.uniform1f(programInfo.uniformLocations.mouseActive, currentMouseActive);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    <\/script>
</body>
</html>`,Vd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus Gateway</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap" rel="stylesheet">
</head>
<body class="bg-black text-slate-300 antialiased min-h-screen flex flex-col selection:bg-slate-700 selection:text-white relative" style="font-family: 'Inter', sans-serif;">

    <!-- Global Dither Overlay -->
    <div class="fixed inset-0 z-50 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202%202%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fsvg%3E'); background-size: 2px 2px;"></div>

    <!-- Visualization Background -->
    <div class="fixed inset-0 z-0 overflow-hidden bg-black">
        <div class="absolute inset-0 z-0 opacity-10" style="background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(0, 0, 0, 0) 80%);"></div>
        <canvas id="flow-canvas" class="absolute inset-0 w-full h-full z-10"></canvas>
    </div>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-30 px-6 py-12 min-h-screen w-full">
        
        <!-- Premium Login Card with Hover Border Gradient -->
        <div class="max-w-md w-full bg-black/95 backdrop-blur-xl rounded-2xl p-7 md:p-8 shadow-2xl flex flex-col relative group">
            
            <!-- Base Border -->
            <div class="absolute inset-0 border border-white/[0.04] rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-transparent"></div>
            
            <!-- Hover Gradient Border -->
            <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <!-- Header Text -->
            <div class="text-center mb-8 w-full relative z-20">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/50 border border-slate-700/50 mb-6 shadow-inner">
                    <iconify-icon icon="solar:cpu-bolt-linear" width="24" height="24" stroke-width="1.5" class="text-slate-200"></iconify-icon>
                </div>
                <h1 id="reveal-title" class="text-3xl md:text-4xl font-thin tracking-tight text-white leading-tight mb-3 uppercase flex flex-wrap justify-center gap-x-2">
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Nexus</span></span>
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Gateway</span></span>
                </h1>
                <p class="text-sm text-slate-500 font-extralight leading-relaxed">
                    Verify identity to initialize secure connection with the primary framework. Oversee active protocols and routing.
                </p>
            </div>

            <!-- Form -->
            <form class="space-y-5 relative z-20">
                <div>
                    <label for="identifier" class="text-xs font-light text-slate-400 mb-1.5 block uppercase tracking-widest">Operative ID</label>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="text" id="identifier" class="relative w-full bg-transparent px-3 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="operative@nexus.net">
                    </div>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1.5">
                        <label for="key" class="text-xs font-light text-slate-400 block uppercase tracking-widest">Security Key</label>
                        <a href="#" class="text-xs font-extralight text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-2">Recover access</a>
                    </div>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="password" id="key" class="relative w-full bg-transparent pl-3 pr-10 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="••••••••">
                        <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors z-30" aria-label="Toggle visibility">
                            <iconify-icon icon="solar:eye-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                        </button>
                    </div>
                </div>
                <div class="flex items-center gap-2 pt-1">
                    <div class="relative flex items-center justify-center w-4 h-4">
                        <input type="checkbox" id="session" class="peer appearance-none w-4 h-4 border border-slate-700 rounded bg-black/50 checked:bg-slate-300 checked:border-slate-300 cursor-pointer transition-colors">
                        <iconify-icon icon="solar:check-linear" width="12" height="12" stroke-width="1.5" class="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none"></iconify-icon>
                    </div>
                    <label for="session" class="text-xs font-extralight text-slate-400 cursor-pointer select-none uppercase tracking-wider">Maintain persistent uplink</label>
                </div>
                
                <!-- Primary Button -->
                <button type="submit" class="w-full bg-[#0a0a0a] hover:bg-[#111] text-white text-sm font-light py-2.5 rounded-lg transition-all mt-2 uppercase tracking-widest relative group/btn shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]">
                    <div class="absolute inset-0 border border-white/10 rounded-lg pointer-events-none transition-colors duration-300 group-hover/btn:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20">Initialize Uplink</span>
                </button>
            </form>

            <!-- Divider -->
            <div class="relative flex items-center py-6 z-20">
                <div class="flex-grow border-t border-slate-800/60"></div>
                <span class="flex-shrink-0 px-4 text-xs font-extralight text-slate-600 uppercase tracking-widest">Alternative Auth</span>
                <div class="flex-grow border-t border-slate-800/60"></div>
            </div>

            <!-- Alternative Options -->
            <div class="grid grid-cols-2 gap-3 z-20">
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:buildings-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Corporate SSO</span>
                </button>
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:code-circle-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Git Auth</span>
                </button>
            </div>
        </div>

        <!-- Social Proof -->
        <div class="mt-8 flex flex-col items-center gap-4 relative z-20">
            <div class="flex -space-x-2">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <div class="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-xs text-slate-300 font-extralight shadow-lg">+</div>
            </div>
            <p class="text-xs text-slate-600 font-extralight uppercase tracking-widest">Validated by distributed consensus nodes</p>
        </div>

    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // GSAP Masked Reveal for Heading
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".reveal-word", {
                y: "0%",
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#reveal-title",
                    start: "top 95%",
                }
            });

            // Flow Canvas Animation
            const canvas = document.getElementById('flow-canvas');
            const ctx = canvas.getContext('2d');
            
            let width, height;
            let explosions = [];

            function resize() {
                const dpr = window.devicePixelRatio || 1;
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }
            window.addEventListener('resize', resize);
            resize();

            window.addEventListener('click', (e) => {
                explosions.push({ x: e.clientX, y: e.clientY, radius: 0, life: 1 });
            });

            const paths = [];
            const numPaths = 80;
            
            for(let i = 0; i < numPaths; i++) {
                paths.push({
                    isLeft: i % 2 === 0,
                    startY: (i / numPaths) * height * 1.4 - height * 0.2,
                    particles: [{
                        t: Math.random(),
                        speed: 0.0015 + Math.random() * 0.002
                    }]
                });
            }

            function getBezierPoint(t, p0, p1, p2, p3) {
                const u = 1 - t;
                return {
                    x: u**3 * p0.x + 3 * u**2 * t * p1.x + 3 * u * t**2 * p2.x + t**3 * p3.x,
                    y: u**3 * p0.y + 3 * u**2 * t * p1.y + 3 * u * t**2 * p2.y + t**3 * p3.y
                };
            }

            function render() {
                ctx.clearRect(0, 0, width, height);
                const centerX = width / 2;
                const centerY = height / 2;

                explosions.forEach(exp => {
                    exp.radius += 15;
                    exp.life -= 0.015;
                });
                explosions = explosions.filter(exp => exp.life > 0);

                paths.forEach(path => {
                    const p0 = { x: path.isLeft ? 0 : width, y: path.startY };
                    const p1 = { x: path.isLeft ? centerX * 0.5 : width - centerX * 0.5, y: path.startY };
                    const p2 = { x: path.isLeft ? centerX * 0.8 : width - centerX * 0.8, y: centerY };
                    const p3 = { x: centerX, y: centerY };

                    ctx.beginPath();
                    ctx.moveTo(p0.x, p0.y);
                    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
                    ctx.lineWidth = 1.2;
                    ctx.setLineDash([1, 4]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    path.particles.forEach(p => {
                        p.t += p.speed;
                        if (p.t > 1) {
                            p.t = 0;
                            path.startY += (Math.random() - 0.5) * 10;
                        }

                        let pos = getBezierPoint(p.t, p0, p1, p2, p3);

                        let dxTotal = 0, dyTotal = 0;
                        explosions.forEach(exp => {
                            let dx = pos.x - exp.x;
                            let dy = pos.y - exp.y;
                            let dist = Math.hypot(dx, dy);
                            if (dist < exp.radius + 120 && dist > exp.radius - 120) {
                                let force = (1 - Math.abs(dist - exp.radius) / 120) * exp.life;
                                dxTotal += (dx / dist) * force * 80;
                                dyTotal += (dy / dist) * force * 80;
                            }
                        });
                        
                        pos.x += dxTotal;
                        pos.y += dyTotal;

                        ctx.fillStyle = \`rgba(255, 255, 255, 0.7)\`;
                        ctx.fillRect(pos.x - 1.5, pos.y - 1.5, 3, 3);
                    });
                });
                
                requestAnimationFrame(render);
            }
            
            render();
        });
    <\/script>
</body>
</html>`,Hd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Connectivity Nexus</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="font-sans antialiased text-blue-950 min-h-screen flex flex-col" style="background: linear-gradient(180deg, rgba(240,244,248,0.92) 0%, rgba(225,234,244,0.92) 40%, rgba(196,217,239,0.92) 80%, rgba(166,200,234,0.92) 100%), url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg') center/cover no-repeat fixed; background-blend-mode: normal;">

    <!-- Main Structural Container -->
    <div class="max-w-6xl mx-auto w-full flex-grow flex flex-col border-x border-transparent relative bg-white/20 backdrop-blur-[2px]" style="border-image: linear-gradient(to bottom, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
        
        <!-- Top Corner Squares -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>

        <!-- Header Section -->
        <header class="pt-24 pb-20 px-6 text-center border-b border-transparent relative z-10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <h1 id="reveal-title" class="text-5xl md:text-6xl font-normal tracking-tight text-blue-950 max-w-3xl mx-auto leading-tight">
                The nexus of <br> global connectivity
            </h1>
            
            <!-- Header Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </header>

        <!-- Stats Section -->
        <section class="border-b border-transparent relative z-10 bg-white/10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-300/40 text-center">
                
                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-950 tracking-tight">150+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        countries integrated worldwide
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/90 tracking-tight">
                        <span class="text-blue-500/80 font-light mr-1">$</span>3.1T
                    </div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        annual transfer volume
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/80 tracking-tight">99.999%</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        infrastructure reliability
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6">
                    <div class="text-4xl font-normal text-blue-700/80 tracking-tight">850M+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        verified digital identities
                    </div>
                </div>

            </div>
            
            <!-- Stats Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </section>

        <!-- Animation Section -->
        <main class="flex-grow relative overflow-hidden min-h-[500px]">
            
            <!-- Controls -->
            <div class="absolute top-6 right-6 flex gap-2 z-20">
                <button id="pauseBtn" class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Pause animation">
                    <iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
                <button class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Settings">
                    <iconify-icon icon="solar:settings-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
            </div>

            <!-- Canvas Container -->
            <canvas id="networkCanvas" class="absolute inset-0 w-full h-full block z-0"></canvas>
            
            <!-- Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </main>
    </div>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('networkCanvas');
        const ctx = canvas.getContext('2d', { alpha: true });
        let width, height;
        let particles = [];
        let isPlaying = true;
        let animationFrameId;

        function resize() {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            initParticles();
        }

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.angle = Math.PI + (Math.random() * Math.PI); 
                if (Math.random() > 0.3) {
                    this.angle = Math.PI * 1.25 + (Math.random() * Math.PI * 0.5);
                }

                this.speed = 0.5 + Math.random() * 2.5;
                this.distance = initial ? Math.random() * (height * 1.2) : Math.random() * 50;
                this.maxLength = 20 + Math.random() * 180;
                this.length = 0;
                this.alpha = 0;
            }

            update() {
                this.distance += this.speed;
                this.length = Math.min(this.maxLength, this.distance * 0.8);
                
                const normalizedDist = this.distance / (height * 1.2);
                this.alpha = Math.min(1, this.distance / 100) * Math.max(0, 1 - normalizedDist);

                if (this.distance > height * 1.5) {
                    this.reset();
                }
            }

            draw() {
                const originX = width / 2;
                const originY = height + 50;

                const startX = originX + Math.cos(this.angle) * this.distance;
                const startY = originY + Math.sin(this.angle) * this.distance;
                const endX = originX + Math.cos(this.angle) * (this.distance + this.length);
                const endY = originY + Math.sin(this.angle) * (this.distance + this.length);

                const distRatio = Math.min(1, this.distance / height);
                const hue = 220 + (distRatio * 15);
                const lightness = 15 + (distRatio * 35);
                
                const color = \`hsla(\${hue}, 90%, \${lightness}%, \${this.alpha})\`;
                const tailColor = \`hsla(\${hue}, 90%, \${Math.max(5, lightness - 15)}%, \${this.alpha * 0.05})\`;

                ctx.beginPath();
                const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
                gradient.addColorStop(0, tailColor);
                gradient.addColorStop(1, color);
                
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.5 + (distRatio * 2);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(endX, endY, 0.5 + (distRatio * 1.5), 0, Math.PI * 2);
                ctx.fillStyle = \`hsla(\${hue}, 100%, \${lightness + 20}%, \${this.alpha * 1.5})\`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 150 : 400;
            for(let i=0; i<particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!isPlaying) return;
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            cancelAnimationFrame(animationFrameId);
            resize();
            if(isPlaying) animate();
        });

        resize();
        animate();

        const pauseBtn = document.getElementById('pauseBtn');
        pauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                animate();
            } else {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:play-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                cancelAnimationFrame(animationFrameId);
            }
        });

        // GSAP Masked Text Reveal
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);
            
            const titleEl = document.getElementById('reveal-title');
            if (titleEl) {
                const lines = titleEl.innerHTML.split(/<br\\s*\\/?>/i);
                titleEl.innerHTML = '';
                
                lines.forEach((line, index) => {
                    const words = line.split(' ');
                    words.forEach((word) => {
                        if (word.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.className = 'inline-block overflow-hidden align-bottom';
                            wrapper.style.paddingBottom = '0.1em'; 
                            wrapper.style.marginBottom = '-0.1em';
                            
                            const inner = document.createElement('span');
                            inner.className = 'inline-block reveal-text';
                            inner.style.transform = 'translateY(110%)';
                            inner.innerHTML = word;
                            
                            wrapper.appendChild(inner);
                            titleEl.appendChild(wrapper);
                            titleEl.appendChild(document.createTextNode(' '));
                        }
                    });
                    if (index < lines.length - 1) {
                        titleEl.appendChild(document.createElement('br'));
                    }
                });

                gsap.to('.reveal-text', {
                    y: 0,
                    ease: 'power4.out',
                    duration: 1.2,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: '#reveal-title',
                        start: 'top 90%',
                    }
                });
            }
        });
    <\/script>
</body>
</html>`,Ud=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Interface</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#0a0a0c] text-zinc-400 font-mono min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-zinc-800 selection:text-white">
    
    <!-- Aura Asset Background Image -->
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" 
         class="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none z-0" 
         alt="">

    <!-- WebGL-simulated Background Animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Main UI Container -->
    <main class="relative z-10 w-full max-w-2xl flex flex-col gap-12 sm:gap-20">

        <!-- PANEL 1: CORE (Red/Orange) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#c87a65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#c87a65]">
                
                <!-- Top Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#c87a65]/20 pb-2">
                    <h1 class="gsap-reveal text-3xl sm:text-4xl tracking-tight font-medium uppercase animate-pulse" style="animation-duration: 4s;">[ CORE ]</h1>
                    <div class="flex gap-6 text-xs tracking-wider">
                        <div class="flex flex-col gap-1">
                            <span>CONF.SYS</span>
                            <span class="opacity-70">RESTART</span>
                            <span class="opacity-70">SLEEP</span>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span>BUILD_11</span>
                            <span class="opacity-70">ANALYZE</span>
                            <span class="opacity-70">INPUT NEEDED</span>
                        </div>
                    </div>
                </div>

                <!-- Middle Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start gap-6">
                    <!-- Dot Matrix -->
                    <div class="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 opacity-80" id="matrix-1">
                        <!-- Populated by JS for brevity -->
                    </div>
                    
                    <!-- Right Controls -->
                    <div class="flex flex-col gap-2 min-w-[200px]">
                        <div class="flex items-center justify-between border-b border-[#c87a65]/20 pb-1">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full bg-[#c87a65] animate-ping" style="animation-duration: 3s;"></div>
                                <span class="text-lg tracking-widest">++</span>
                            </div>
                            <span class="text-xs">HASH: 0x3C9A</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span>2B-44 - TEMP: 61°C</span>
                            <div class="w-8 h-3 rounded-full border border-[#c87a65]/50 flex items-center p-[1px]">
                                <div class="w-2 h-full bg-[#c87a65] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PANEL 2: SECURE (Green) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-l from-[#7a9f65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-3 text-[#7a9f65]">
                
                <!-- Ruler -->
                <div class="relative w-full h-4 border-t border-[#7a9f65]/30 flex justify-between">
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                </div>

                <div class="flex flex-col sm:flex-row justify-between items-end gap-6">
                    <!-- Large Dot Pattern -->
                    <div class="flex flex-col gap-2 opacity-90">
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div></div>
                    </div>

                    <!-- Info Box & Title -->
                    <div class="flex flex-col items-end gap-2 w-full sm:w-auto">
                        <div class="flex items-stretch gap-2">
                            <div class="border border-[#7a9f65]/30 p-2 text-xs flex flex-col justify-center min-w-[120px]">
                                <span>APPROVED</span>
                                <span class="opacity-70">ID: X7-44</span>
                                <span class="opacity-70">SEQ: #0933</span>
                            </div>
                            <div class="border border-[#7a9f65]/30 p-2 flex items-center justify-center">
                                <iconify-icon icon="solar:clock-circle-linear" class="text-xl"></iconify-icon>
                            </div>
                            <!-- Logo Box -->
                            <div class="w-12 h-12 bg-[#7a9f65] relative overflow-hidden flex-shrink-0">
                                <div class="absolute w-16 h-4 bg-[#0a0a0c] -rotate-45 top-4 -left-2"></div>
                            </div>
                        </div>
                        <h2 class="gsap-reveal text-2xl sm:text-3xl tracking-tight font-medium uppercase">SECURE</h2>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="flex flex-col sm:flex-row justify-between text-xs mt-2 opacity-80">
                    <span>LOADING <span class="animate-pulse">...</span></span>
                    <span>//KEY: <span class="text-white opacity-90">0x7B11</span>//</span>
                </div>
                <div class="text-xs opacity-70">
                    SYNCING - ID: 88-K - DATA DROP: 0.2% SECTOR 9
                </div>
            </div>
        </section>

        <!-- PANEL 3: 909 (Purple/Blue) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-t from-[#756a9f]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#756a9f]">
                
                <div class="flex flex-col sm:flex-row items-center justify-between gap-8">
                    
                    <!-- Left: Node Diagram -->
                    <div class="relative w-32 h-16 flex-shrink-0 hidden sm:block">
                        <!-- Lines -->
                        <div class="absolute top-2 left-2 w-20 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-10 left-6 w-16 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-2 left-22 w-px h-8 bg-[#756a9f]/50 rotate-45 origin-top-left"></div>
                        <div class="absolute top-10 left-6 w-px h-6 bg-[#756a9f]/50 -rotate-45 origin-top-left"></div>
                        
                        <!-- Nodes -->
                        <div class="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-1.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-5.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-14.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        
                        <!-- Arrows -->
                        <div class="absolute top-5 left-0 flex items-center gap-1">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                    </div>

                    <!-- Middle: Title -->
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-1 sm:hidden">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                        <h3 class="gsap-reveal text-5xl sm:text-6xl tracking-tight font-normal">909</h3>
                    </div>

                    <!-- Right: Info & Circle -->
                    <div class="flex items-center gap-6">
                        <div class="flex flex-col text-xs">
                            <span>SECURITY-NET</span>
                            <span class="opacity-70">ACTIVE</span>
                            <span class="opacity-70">STAT: 0xBB02</span>
                            <div class="flex gap-1 mt-1">
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current bg-current"></div>
                            </div>
                        </div>
                        
                        <!-- Circular Dots -->
                        <div class="relative w-12 h-12 animate-spin" style="animation-duration: 10s; animation-timing-function: linear;">
                            <div class="absolute inset-0" id="circle-dots">
                                <!-- Populated by JS -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="text-center sm:text-left text-xs flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-8 mt-2 opacity-80">
                    <span>UPLINK STATUS - <span class="text-white opacity-90">ONLINE</span></span>
                    <span>POWER: 48V - DRAW: 1.8A</span>
                </div>
            </div>
        </section>

    </main>

    <script>
        // GSAP Masked Staggered Reveal Logic
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.gsap-reveal').forEach(el => {
            const text = el.innerText;
            const words = text.split(' ');
            el.innerHTML = '';
            words.forEach((word, i) => {
                const outer = document.createElement('span');
                // Ensure overflow hidden and adjust alignment
                outer.className = 'inline-block overflow-hidden pb-1 -mb-1 align-bottom';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-[120%]';
                inner.innerText = word + (i < words.length - 1 ? '\\u00A0' : '');
                outer.appendChild(inner);
                el.appendChild(outer);
                
                gsap.to(inner, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                    }
                });
            });
        });

        // Populate Matrix 1
        const matrixContainer = document.getElementById('matrix-1');
        let matrixHTML = '';
        for(let i=0; i<80; i++) {
            const isFilled = Math.random() > 0.6;
            const isDim = Math.random() > 0.5;
            matrixHTML += \`<div class="w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''} \${isDim ? 'opacity-30' : ''}"></div>\`;
        }
        matrixContainer.innerHTML = matrixHTML;

        // Populate Circle Dots
        const circleContainer = document.getElementById('circle-dots');
        let circleHTML = '';
        for(let i=0; i<12; i++) {
            const angle = (i * 30) * (Math.PI / 180);
            const x = 24 + 20 * Math.cos(angle) - 3; // center 24, radius 20, offset half width
            const y = 24 + 20 * Math.sin(angle) - 3;
            const isFilled = i % 3 === 0;
            circleHTML += \`<div class="absolute w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''}" style="left: \${x}px; top: \${y}px;"></div>\`;
        }
        circleContainer.innerHTML = circleHTML;

        // WebGL-simulated Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const numParticles = window.innerWidth < 640 ? 30 : 70;
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        }

        function drawLines() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 1;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / 120) * 0.42})\`;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                ctx.fillRect(p.x - 0.75, p.y - 0.75, 1.5, 1.5);
            }
            requestAnimationFrame(drawLines);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawLines();
    <\/script>
</body>
</html>`,Wd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus / Systems</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #050505;
        }
        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }
    </style>
</head>
<body class="text-zinc-300 min-h-screen flex flex-col overflow-x-hidden selection:bg-white/20 antialiased">

    <!-- Navbar / Top Brand -->
    <nav class="w-full relative z-20">
        <!-- Gradient Border Bottom -->
        <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-2 text-sm tracking-tight font-medium text-white">
                <iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
                <span>NEXUS / CORE</span>
            </div>
            <div class="flex items-center gap-6 text-xs font-mono text-zinc-500">
                <span class="hidden sm:block reveal-text">BUILD.v7.2.1</span>
                <span class="flex items-center gap-2 text-zinc-400">
                    <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span class="reveal-text">ACTIVE</span>
                </span>
            </div>
        </div>
    </nav>

    <!-- Main Layout with Vertical Container Lines -->
    <main class="flex-grow w-full max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-3">
        
        <!-- Gradient Container Borders -->
        <div class="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
        <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>

        <!-- Decoration: Corner Squares for Container Lines -->
        <div class="absolute -top-[1px] -left-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -top-[1px] -right-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -bottom-[1px] -left-[3px] w-[5px] h-[5px] bg-white z-20"></div>
        <div class="absolute -bottom-[1px] -right-[3px] w-[5px] h-[5px] bg-white z-20"></div>

        <!-- Section 01: Hypercube -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'); background-size: cover; background-position: center;"></div>
            
            <!-- Gradient Divider Right -->
            <div class="hidden lg:block absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
            <!-- Gradient Divider Bottom (Mobile) -->
            <div class="block lg:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

            <!-- Header -->
            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Prismatic Core</span>
                <span class="reveal-text">01//</span>
            </div>
            
            <!-- Description Top -->
            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                The foundational structure processes raw data streams, organizing chaotic inputs into structured geometric architectures.
            </p>

            <!-- Visual (Canvas) -->
            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas1" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
                <!-- Axis Labels -->
                <span class="absolute left-0 top-1/2 text-[10px] text-zinc-700 font-mono -translate-y-1/2 reveal-text">Input</span>
                <span class="absolute right-0 top-1/2 text-[10px] text-zinc-700 font-mono -translate-y-1/2 reveal-text">Output</span>
            </div>

            <!-- Footer -->
            <div class="relative z-10 space-y-6">
                <div class="pt-4 relative">
                    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
                    <h3 class="text-sm font-medium text-white mb-2 reveal-text">Sequence: Alpha</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed reveal-text">
                        Nexus enables the synthesis of physical and virtual environments, unlocking realms previously hidden from standard view.
                    </p>
                </div>
                <!-- Mini Grid Decor -->
                <div class="flex justify-end">
                    <div class="grid grid-cols-4 grid-rows-3 gap-[1px] bg-[#1a1a1c] border border-[#1a1a1c] w-24 h-16 opacity-50">
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div>
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b] flex items-center justify-center"><div class="w-1 h-1 bg-white rounded-full"></div></div><div class="bg-[#09090b]"></div>
                        <div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div><div class="bg-[#09090b]"></div>
                    </div>
                </div>
                <div class="flex justify-between items-end font-mono text-[10px] text-zinc-600">
                    <span class="reveal-text">Nexus.sys</span>
                    <span class="reveal-text">V-00.XX.1024</span>
                </div>
            </div>
        </div>

        <!-- Section 02: Logic Cylinders -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg'); background-size: cover; background-position: center;"></div>
            
            <!-- Gradient Divider Right -->
            <div class="hidden lg:block absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent z-20"></div>
            <!-- Gradient Divider Bottom (Mobile) -->
            <div class="block lg:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Cognitive Mesh</span>
                <span class="reveal-text">02//</span>
            </div>

            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                Data flow stems from legacy nodes. An interface born from overlapping algorithms and encrypted keys.
            </p>

            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas2" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
                <!-- Floating Glyphs -->
                <div class="absolute inset-0 flex items-center justify-center gap-16 pointer-events-none">
                    <iconify-icon icon="solar:code-scan-linear" class="text-white/20 text-4xl animate-[pulse_4s_ease-in-out_infinite]"></iconify-icon>
                    <iconify-icon icon="solar:database-linear" class="text-white/20 text-4xl animate-[pulse_4s_ease-in-out_infinite] animation-delay-2000"></iconify-icon>
                </div>
            </div>

            <div class="relative z-10 space-y-6">
                <div class="text-right">
                    <p class="text-xs text-zinc-500 leading-relaxed max-w-[240px] ml-auto reveal-text">
                        Within Nexus, metrics are redefined: bridging analytical processing and immersive interaction. The ultimate signature of digital evolution.
                    </p>
                </div>
                <div class="relative flex justify-between items-end font-mono text-[10px] text-zinc-600 pt-12">
                    <div class="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <span class="reveal-text">Nexus.sys</span>
                    <span class="reveal-text">SYS.MEM.OVERFLOW</span>
                </div>
            </div>
        </div>

        <!-- Section 03: Esoteric Sphere -->
        <div class="group relative p-8 lg:p-10 flex flex-col justify-between h-[600px] lg:h-[800px] overflow-hidden">
            <!-- Background Image Aura Asset -->
            <div class="absolute inset-0 z-0 opacity-[0.08] mix-blend-screen transition-opacity duration-1000 group-hover:opacity-[0.2]" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg'); background-size: cover; background-position: center;"></div>

            <div class="relative z-10 flex justify-between items-start font-mono text-xs text-zinc-500 uppercase tracking-widest">
                <span class="text-zinc-300 font-medium font-sans reveal-text">Kinetic Frequency</span>
                <span class="reveal-text">03//</span>
            </div>

            <p class="relative z-10 mt-8 text-xs text-zinc-400 leading-relaxed max-w-[280px] reveal-text">
                "Frequency" denotes the synchronization of fragmented data packets, individuals, or systems oscillating at parallel states.
            </p>

            <div data-wireframe-visual class="relative z-10 flex-grow flex items-center justify-center py-12">
                <canvas id="canvas3" class="w-full max-w-[300px] aspect-square opacity-80 mix-blend-screen"></canvas>
            </div>

            <div class="relative z-10 space-y-6">
                 <div class="pt-4 relative">
                    <div class="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <h3 class="text-sm font-medium text-white mb-2 reveal-text">State: Synchronized</h3>
                    <p class="text-xs text-zinc-500 leading-relaxed reveal-text">
                        Frequency: Data equals the juncture between pure logic and tactile feedback. Tuning to optimal processing bandwidths.
                    </p>
                </div>
                <div class="flex justify-between items-end font-mono text-[10px] text-zinc-600">
                    <div class="flex gap-2">
                        <span class="w-2 h-2 rounded-full border border-zinc-700"></span>
                        <span class="w-2 h-2 rounded-full border border-zinc-700 bg-white/20"></span>
                        <span class="w-2 h-2 rounded-full border border-zinc-700"></span>
                    </div>
                    <span class="reveal-text">Nexus.sys</span>
                </div>
            </div>
        </div>
    </main>

    <!-- Bottom Interface Bar -->
    <footer class="w-full relative z-20 bg-[#09090b]">
        <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between font-mono text-[10px] text-zinc-600 uppercase">
            <div class="flex items-center gap-4">
                <span class="reveal-text">Ping: 2ms</span>
                <span class="hidden sm:inline reveal-text">Cipher: RSA-4096</span>
            </div>
            <div class="flex items-center gap-4">
                <a href="#" class="hover:text-white transition-colors">Privacy</a>
                <a href="#" class="hover:text-white transition-colors">Terms</a>
                <a href="#" class="hover:text-white transition-colors">Doctrine</a>
            </div>
        </div>
    </footer>

    <!-- WebGL-like Canvas Animation Script & GSAP Reveal -->
    <script>
        // GSAP ScrollTrigger Text Reveal
        gsap.registerPlugin(ScrollTrigger);
        
        document.querySelectorAll('.reveal-text').forEach(el => {
            const text = el.innerText.trim();
            const words = text.split(/\\s+/);
            el.innerHTML = words.map(word => 
                \`<span style="overflow: hidden; display: inline-block; vertical-align: top;"><span style="display: inline-block; transform: translateY(100%);" class="reveal-word">\${word}</span></span>\`
            ).join(' ');

            gsap.to(el.querySelectorAll('.reveal-word'), {
                y: '0%',
                duration: 0.8,
                stagger: 0.03,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Wireframe Engine
        class WireframeEngine {
            constructor(canvasId, shapeType) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.width = this.canvas.offsetWidth;
                this.height = this.canvas.offsetHeight;
                this.canvas.width = this.width * 2; 
                this.canvas.height = this.height * 2;
                this.ctx.scale(2, 2);
                this.cx = this.width / 2;
                this.cy = this.height / 2;
                this.shapeType = shapeType;
                
                this.points = [];
                this.edges = [];
                this.angleX = 0;
                this.angleY = 0;
                
                this.initShape();
                this.animate();
            }

            initShape() {
                if (this.shapeType === 'cube') {
                    const s = 80;
                    this.points.push({x: s, y: s, z: s}, {x: -s, y: -s, z: s}, {x: -s, y: s, z: -s}, {x: s, y: -s, z: -s});
                    this.points.push({x: -s, y: -s, z: -s}, {x: s, y: s, z: -s}, {x: s, y: -s, z: s}, {x: -s, y: s, z: s});
                    this.edges.push([0,1], [0,2], [0,3], [1,2], [1,3], [2,3]);
                    this.edges.push([4,5], [4,6], [4,7], [5,6], [5,7], [6,7]);
                } else if (this.shapeType === 'cylinders') {
                    const r = 70;
                    const segments = 24;
                    for(let i=0; i<segments; i++) {
                        const theta = (i/segments) * Math.PI * 2;
                        this.points.push({ x: Math.cos(theta)*r, y: Math.sin(theta)*r, z: -30 });
                        this.points.push({ x: Math.cos(theta)*r, y: Math.sin(theta)*r, z: 30 });
                        let next = (i+1)%segments;
                        this.edges.push([i*2, next*2], [i*2+1, next*2+1], [i*2, i*2+1]);
                    }
                     let offset = this.points.length;
                     for(let i=0; i<segments; i++) {
                        const theta = (i/segments) * Math.PI * 2;
                        this.points.push({ x: Math.cos(theta)*r, y: -30, z: Math.sin(theta)*r });
                        this.points.push({ x: Math.cos(theta)*r, y: 30, z: Math.sin(theta)*r });
                        let next = (i+1)%segments;
                        this.edges.push([offset + i*2, offset + next*2], [offset + i*2+1, offset + next*2+1], [offset + i*2, offset + i*2+1]);
                    }
                } else if (this.shapeType === 'sphere') {
                    const t = (1.0 + Math.sqrt(5.0)) / 2.0;
                    const s = 50; 
                    const p = [
                        [-1,  t,  0], [ 1,  t,  0], [-1, -t,  0], [ 1, -t,  0],
                        [ 0, -1,  t], [ 0,  1,  t], [ 0, -1, -t], [ 0,  1, -t],
                        [ t,  0, -1], [ t,  0,  1], [-t,  0, -1], [-t,  0,  1]
                    ];
                    p.forEach(v => this.points.push({x: v[0]*s, y: v[1]*s, z: v[2]*s}));
                    for(let i=0; i<this.points.length; i++){
                        for(let j=i+1; j<this.points.length; j++){
                            let d = Math.hypot(this.points[i].x - this.points[j].x, this.points[i].y - this.points[j].y, this.points[i].z - this.points[j].z);
                            if(d < s*2.1) this.edges.push([i,j]);
                        }
                    }
                     p.forEach(v => this.points.push({x: v[0]*s*0.5, y: v[1]*s*0.5, z: v[2]*s*0.5}));
                     let off = 12;
                     for(let i=0; i<12; i++){
                        for(let j=i+1; j<12; j++){
                            let d = Math.hypot(this.points[off+i].x - this.points[off+j].x, this.points[off+i].y - this.points[off+j].y, this.points[off+i].z - this.points[off+j].z);
                            if(d < s*1.1) this.edges.push([off+i,off+j]);
                        }
                        this.edges.push([i, off+i]); 
                     }
                }
            }

            project(p) {
                let x = p.x * Math.cos(this.angleY) - p.z * Math.sin(this.angleY);
                let z = p.z * Math.cos(this.angleY) + p.x * Math.sin(this.angleY);
                let y = p.y * Math.cos(this.angleX) - z * Math.sin(this.angleX);
                z = z * Math.cos(this.angleX) + p.y * Math.sin(this.angleX);
                
                let fov = 400;
                let scale = fov / (fov + z);
                return { x: x * scale + this.cx, y: y * scale + this.cy, z: z };
            }

            animate() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.angleY += 0.005;
                this.angleX += 0.002;
                
                this.ctx.lineWidth = 0.8;

                let projected = this.points.map(p => this.project(p));

                this.edges.forEach(e => {
                    let p1 = projected[e[0]];
                    let p2 = projected[e[1]];
                    let depth = (p1.z + p2.z) / 2;
                    let alpha = Math.max(0.1, (1 - (depth / 200)));
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = \`rgba(255, 255, 255, \${alpha * 0.4})\`;
                    this.ctx.stroke();
                });

                projected.forEach(p => {
                    let alpha = Math.max(0.1, (1 - (p.z / 200)));
                    if (alpha > 0.5) {
                        this.ctx.fillStyle = \`rgba(255, 255, 255, \${alpha})\`;
                        this.ctx.fillRect(p.x-1, p.y-1, 2, 2);
                    }
                });

                requestAnimationFrame(() => this.animate());
            }
        }

        window.onload = () => {
            new WireframeEngine('canvas1', 'cube');
            new WireframeEngine('canvas2', 'cylinders');
            new WireframeEngine('canvas3', 'sphere');
        };
    <\/script>
</body>
</html>`,Gd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Defenses</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&family=Plus+Jakarta+Sans:wght@300;400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030303] min-h-screen flex flex-col items-center justify-center overflow-hidden text-white relative antialiased selection:bg-red-500/30" style="font-family: 'Plus Jakarta Sans', sans-serif;">
    
    <!-- Canvas for background line animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 opacity-50 pointer-events-none"></canvas>

    <!-- Ambient background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

    <main class="relative z-10 flex flex-col items-center justify-center w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6">
        
        <!-- 3D Card Carousel -->
        <div class="relative flex items-center justify-center w-full h-[400px] sm:h-[650px]" style="perspective: 1200px;">
            <div id="carousel" class="relative w-full h-full flex items-center justify-center" style="transform-style: preserve-3d;">
                
                <!-- Left Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-r from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(-180%) translateZ(-400px) rotateY(35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-r from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(-120%) translateZ(-250px) rotateY(25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-r from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(-60%) translateZ(-100px) rotateY(15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Right Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-l from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(180%) translateZ(-400px) rotateY(-35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-l from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(120%) translateZ(-250px) rotateY(-25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-l from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(60%) translateZ(-100px) rotateY(-15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Center Active Card -->
                <div class="card absolute w-36 sm:w-72 h-[269px] sm:h-[461px] bg-gradient-to-br from-[#ff4747] to-[#cc0000] rounded-xl flex items-center justify-center z-30 border border-red-300/40 overflow-hidden cursor-pointer pointer-events-auto" style="transform: translateZ(50px); box-shadow: 0 0 80px 15px rgba(220, 38, 38, 0.35), inset 0 0 30px rgba(255,255,255,0.15);">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none" alt="Abstract Pattern">
                    <div class="relative flex w-full h-full pointer-events-none" style="background-image: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%), repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 12px);">
                    </div>
                </div>
            </div>
        </div>

        <!-- Typography Section (Overlayed) -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-40" id="hero-text">
            
            <!-- Monospaced Technical Badge -->
            <div id="hero-badge" class="opacity-0 flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a0505]/80 backdrop-blur-md text-red-400 text-xs font-light tracking-widest uppercase mb-8" style="font-family: 'DM Mono', monospace; box-shadow: 0 0 20px rgba(220,38,38,0.15); border: 1px solid transparent; background-clip: padding-box, border-box; background-origin: padding-box, border-box; background-image: linear-gradient(#1a0505, #1a0505), linear-gradient(to right, rgba(153,27,27,0.6), rgba(239,68,68,0.3));">
                <iconify-icon icon="solar:radar-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                <span>Continuous Network Surveillance</span>
            </div>
            
            <!-- Elegant Serif Headline -->
            <h1 class="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#f5f5f5] leading-none max-w-5xl flex flex-col items-center gap-y-2 sm:gap-y-4" style="font-family: 'Cormorant Garamond', serif; text-shadow: 0 10px 40px rgba(0,0,0,0.9);">
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">Expose</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">hidden</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">vulnerabilities</span></span>
                </div>
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 italic text-red-100">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">within</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">your</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">cloud</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">infrastructure</span></span>
                </div>
            </h1>

            <!-- Clean Sans-Serif CTA -->
            <button id="hero-button" class="opacity-0 group relative mt-10 sm:mt-14 px-8 py-4 rounded-lg text-sm font-light text-white transition-all active:scale-95 pointer-events-auto flex items-center justify-center bg-red-600 border border-red-500/50 overflow-hidden" style="font-family: 'Plus Jakarta Sans', sans-serif;">
                <span class="absolute inset-0 w-full h-full bg-red-500 transition-all duration-500 ease-out [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)] z-0"></span>
                <span class="relative z-10 flex items-center gap-2">
                    Start Threat Assessment
                    <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" stroke-width="1.5"></iconify-icon>
                </span>
            </button>
        </div>
    </main>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const particleCount = window.innerWidth < 768 ? 40 : 100;
            
            for(let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseLength: Math.random() * 80 + 20,
                    speedY: Math.random() * 0.8 + 0.2,
                    baseOpacity: Math.random() * 0.2 + 0.05
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            particles.forEach(p => {
                const distFromCenterX = Math.abs(p.x - centerX);
                const distFromCenterY = Math.abs(p.y - centerY);
                
                const proximityX = Math.max(0, 1 - (distFromCenterX / (width / 2)));
                const proximityY = Math.max(0, 1 - (distFromCenterY / (height / 2)));
                const centerProximity = proximityX * (0.4 + proximityY * 0.6);
                
                const currentLength = p.baseLength * (1 + centerProximity * 4); 
                
                const currentOpacity = Math.min(1.0, p.baseOpacity + (centerProximity * 2.0));
                const brightness = Math.floor(centerProximity * 180);
                
                ctx.beginPath();
                const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + currentLength);
                grad.addColorStop(0, \`rgba(220, 38, 38, 0)\`);
                grad.addColorStop(0.5, \`rgba(255, \${38 + brightness}, \${38 + brightness}, \${currentOpacity})\`);
                grad.addColorStop(1, \`rgba(220, 38, 38, 0)\`);
                
                ctx.strokeStyle = grad;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x, p.y + currentLength);
                ctx.stroke();

                p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);
                
                if(p.y + currentLength < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // 3D Cards Floating, Mouse Tracking & Hover Animation
        const carousel = document.getElementById('carousel');
        const cards = document.querySelectorAll('.card');
        let time = 0;
        let targetRotateY = 0;
        let currentRotateY = 0;

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => card.isHovered = true);
            card.addEventListener('mouseleave', () => card.isHovered = false);
            card.hoverAmt = 0;
        });

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            targetRotateY = x * 40; 
        });

        function animateCards() {
            time += 0.015;
            currentRotateY += (targetRotateY - currentRotateY) * 0.08;
            carousel.style.transform = \`rotateY(\${currentRotateY}deg)\`;

            cards.forEach((card, index) => {
                if(!card.dataset.baseTransform) {
                    card.dataset.baseTransform = card.style.transform;
                    const match = card.dataset.baseTransform.match(/translateX\\(([^)]+)\\)/);
                    card.directionX = match ? parseFloat(match[1]) : 0;
                }
                
                const targetHover = card.isHovered ? 1 : 0;
                card.hoverAmt += (targetHover - card.hoverAmt) * 0.15;
                
                const hoverZ = card.hoverAmt * 60;
                const hoverY = card.hoverAmt * -20;
                let hoverX = 0;
                
                if (card.directionX < 0) hoverX = card.hoverAmt * -40;
                else if (card.directionX > 0) hoverX = card.hoverAmt * 40;

                const offset = Math.sin(time + (index * 0.5)) * 8;
                
                card.style.transform = \`\${card.dataset.baseTransform} translateX(\${hoverX}px) translateY(\${offset + hoverY}px) translateZ(\${hoverZ}px)\`;
            });
            requestAnimationFrame(animateCards);
        }
        animateCards();

        // Entrance Animation with GSAP Masked Reveal
        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            // Animate headline words in a masked stagger
            gsap.to('.word', {
                y: "0%",
                duration: 1.2,
                stagger: 0.06,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#hero-text",
                    start: "top 90%"
                }
            });

            // Fade in and float up the badge and button sequentially
            gsap.fromTo(['#hero-badge', '#hero-button'], 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out", delay: 0.4 }
            );
        }, 150);
    <\/script>
</body>
</html>`,Kd=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Override</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-zinc-900 text-orange-500 font-mono w-full h-screen overflow-hidden relative select-none flex items-center justify-center">

    <!-- Aura Asset Background Image (Subtle) -->
    <div class="absolute inset-0 z-[-1] opacity-30 mix-blend-screen bg-cover bg-center" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg');"></div>

    <!-- Dither / Noise Overlay -->
    <div class="pointer-events-none absolute inset-0 z-50 opacity-[0.06] mix-blend-screen" style="background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 2 2%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3Crect x=%221%22 y=%221%22 width=%221%22 height=%221%22 fill=%22%23f97316%22/%3E%3C/svg%3E'); background-size: 2px 2px;"></div>

    <!-- WebGL-style Block by Block Animation Canvas -->
    <canvas id="grid-canvas" class="absolute inset-0 z-0 opacity-50" aria-hidden="true"></canvas>

    <!-- Viewport Corner Markers -->
    <div class="absolute top-4 left-4 w-4 h-4 border-t border-l border-orange-500/50 z-10"></div>
    <div class="absolute top-4 right-4 w-4 h-4 border-t border-r border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-orange-500/50 z-10"></div>
    <div class="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-orange-500/50 z-10"></div>

    <!-- Background Telemetry Text -->
    <div class="absolute top-8 left-8 text-xs font-thin opacity-60 tracking-widest flex flex-col gap-1 z-10 hidden sm:flex">
        <span>SYNC_PHASE: <span id="log-frame">000000</span></span>
        <span>SYS_OVERRIDE_SEQ: [ ACTIVE ]</span>
        <span>ROUTE_MAP: TRACING</span>
        <span>CRIT_ALERT:</span>
        <span class="text-orange-600 animate-pulse">> ERR_TIMEOUT</span>
        <span id="typewriter" class="text-orange-400"></span>
    </div>

    <div class="absolute bottom-8 right-8 text-xs font-thin opacity-60 tracking-widest text-right z-10 hidden sm:block">
        <span id="log-mem">REG_ADDR: 0xFA48B2</span><br>
        <span>STATE: OVERRIDING</span>
    </div>

    <!-- Main Content Container -->
    <main class="relative z-20 w-full max-w-5xl h-full flex items-center justify-center px-4 sm:px-16">
        
        <!-- Container Lines & Mini Squares -->
        <div class="absolute inset-y-12 left-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute inset-y-12 right-8 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent hidden sm:block"></div>
        <div class="absolute top-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/4 left-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute top-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>
        <div class="absolute bottom-1/3 right-[30px] w-1.5 h-1.5 border border-orange-500/80 hidden sm:block"></div>

        <!-- The Main Orange Block (Gradient Border for Premium Surface) -->
        <div class="p-[1px] bg-gradient-to-br from-orange-300 via-orange-600/70 to-orange-900/40 relative w-full shadow-[0_0_50px_rgba(249,115,22,0.15)]">
            
            <div class="relative w-full h-40 sm:h-48 bg-[#f97316] flex items-center transition-all duration-100">
                
                <!-- Top Left Tab -->
                <div class="absolute -top-6 left-0 h-6 w-24 bg-[#f97316] flex items-center justify-between px-2 text-xs font-normal text-zinc-800 tracking-widest border-b border-zinc-800">
                    <span>TIMEOUT</span>
                    <div class="w-1.5 h-1.5 bg-zinc-800"></div>
                </div>

                <!-- Right Edge Extrusions & Cutouts -->
                <div class="absolute -top-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute top-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>
                <div class="absolute -bottom-3 right-0 h-3 w-10 sm:w-16 bg-[#f97316]">
                    <div class="absolute bottom-1 right-1 w-1 h-1 bg-zinc-800"></div>
                </div>

                <!-- Left Edge Middle Cutout -->
                <div class="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-4 bg-zinc-800 border-r border-[#f97316]/50"></div>
                <!-- Right Edge Middle Cutout -->
                <div class="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-6 bg-zinc-800"></div>

                <!-- Inner Layout -->
                <div class="flex w-full h-full px-4 sm:px-8">
                    
                    <!-- Left Section: Warning & Text -->
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6 w-full sm:w-1/2 border-zinc-800/30 sm:border-r pr-0 sm:pr-6 relative gs-reveal-container">
                        <!-- Subtle animated background highlight in left section -->
                        <div class="absolute inset-0 bg-white/5 opacity-0 animate-[pulse_4s_ease-in-out_infinite]" style="animation-direction: alternate;"></div>
                        
                        <iconify-icon icon="solar:round-transfer-horizontal-linear" class="text-zinc-800 text-5xl sm:text-7xl shrink-0 animate-spin-slow relative z-10" style="stroke-width: 1.5px; animation: spin 4s linear infinite;"></iconify-icon>
                        <div class="flex flex-col relative z-10 pt-1">
                            <h1 class="text-zinc-800 text-3xl sm:text-5xl font-light tracking-tight leading-[0.85] uppercase overflow-hidden pb-1">
                                <span class="block gs-reveal">System</span>
                            </h1>
                            <h2 class="text-zinc-800 text-3xl sm:text-5xl font-thin tracking-tight leading-[0.85] uppercase mt-1 overflow-hidden pb-1">
                                <span class="block gs-reveal">Override</span>
                            </h2>
                        </div>
                    </div>

                    <!-- Right Section: Data Matrix -->
                    <div class="hidden sm:flex flex-1 relative items-center justify-end pl-6">
                        <!-- Crosshairs / Guides -->
                        <div class="absolute inset-x-6 top-1/2 h-px bg-zinc-800/20 -translate-y-1/2"></div>
                        <div class="absolute inset-y-8 right-32 w-px bg-zinc-800/20"></div>
                        <div class="absolute inset-y-8 right-12 w-px bg-zinc-800/20"></div>

                        <!-- Data Grid Blocks -->
                        <div class="flex gap-4 sm:gap-6 relative z-10">
                            <!-- Block Group 1 -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                            
                            <!-- Block Group 2 (Offset) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit mt-8">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] opacity-20 animate-pulse"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>

                            <div class="w-2"></div>

                            <!-- Block Group 3 (Top aligned, missing piece blinking to suggest retry) -->
                            <div class="grid grid-cols-2 gap-1.5 h-fit">
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                                <div class="w-5 h-5 bg-transparent border border-zinc-800 relative animate-pulse">
                                    <div class="absolute inset-x-1 top-1/2 h-px bg-zinc-800"></div>
                                    <div class="absolute inset-y-1 left-1/2 w-px bg-zinc-800"></div>
                                </div>
                                <div class="w-5 h-5 bg-zinc-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Left Micro Details -->
                <div class="absolute bottom-2 left-4 flex gap-2 items-center text-zinc-800">
                    <iconify-icon icon="solar:server-square-linear" class="text-lg opacity-80" style="stroke-width: 1.5px;"></iconify-icon>
                    <div class="flex flex-col">
                        <span class="text-xs tracking-widest opacity-80 uppercase font-light leading-none">AUTH_NODE // ACCESS DENIED</span>
                        <span class="text-xs tracking-widest opacity-60 uppercase font-thin mt-1">EXECUTING BYPASS PROTOCOL...</span>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        // GSAP ScrollTrigger Masked Reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".gs-reveal", {
            y: "120%",
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".gs-reveal-container",
                start: "top 95%",
            }
        });

        // WebGL-style Block by Block Animation (Simulated in 2D for constraints)
        const canvas = document.getElementById('grid-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, time = 0;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        function draw() {
            ctx.clearRect(0, 0, width, height);
            time += 0.04;

            const blockSize = 48;
            const blockGap = 2;
            const pitch = blockSize + blockGap;
            const cols = Math.ceil(width / pitch);
            const rows = Math.ceil(height / pitch);

            const centerX = cols / 2;
            const centerY = rows / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const dist = Math.sqrt(Math.pow(i - centerX, 2) + Math.pow(j - centerY, 2));
                    const wave = Math.sin(time - dist * 0.4);
                    
                    if (wave > 0) {
                        const alpha = wave * 0.15; 
                        ctx.fillStyle = \`rgba(249, 115, 22, \${alpha})\`;
                        
                        // Block scaling for "Z-depth" pulsing feel
                        const scale = wave * 0.7 + 0.3;
                        const size = blockSize * scale;
                        const offset = (pitch - size) / 2;
                        
                        ctx.fillRect(i * pitch + offset, j * pitch + offset, size, size);
                    }
                }
            }
            requestAnimationFrame(draw);
        }
        draw();

        // Simulate telemetry data updates
        setInterval(() => {
            const frameLog = document.getElementById('log-frame');
            const memLog = document.getElementById('log-mem');
            if (frameLog) frameLog.innerText = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
            if (memLog) {
                const hex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
                memLog.innerText = \`REG_ADDR: 0x\${hex}\`;
            }
        }, 150);

        // Typewriter Animation Logic
        const typewriterElement = document.getElementById('typewriter');
        if (typewriterElement) {
            const phrases = ["> INITIATING BYPASS...", "> FLUSHING REGISTERS...", "> TIMEOUT: RETRYING..."];
            let phraseIdx = 0;
            let charIdx = 0;
            let isDeleting = false;
            
            function type() {
                const currentPhrase = phrases[phraseIdx];
                if (isDeleting) {
                    charIdx--;
                } else {
                    charIdx++;
                }
                
                typewriterElement.innerText = currentPhrase.substring(0, charIdx) + "_";
                
                let speed = isDeleting ? 30 : 60;
                
                if (!isDeleting && charIdx === currentPhrase.length) {
                    speed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    speed = 500;
                }
                
                setTimeout(type, speed);
            }
            type();
        }
    <\/script>
</body>
</html>`,qd=`<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexusNode Infrastructure</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-black text-white font-sans min-h-screen relative overflow-x-hidden selection:bg-white/20 selection:text-white font-light" style="background-color: #000; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">

    <!-- WebGL Background Container -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <canvas id="topo-canvas" class="w-full h-full"></canvas>
        <!-- Gradient overlay to fade bottom and top for text readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-90 z-10"></div>
    </div>

    <!-- Main Content -->
    <main class="relative z-20 flex flex-col min-h-screen">
        
        <!-- Navigation -->
        <header class="container mx-auto px-6 py-6 flex items-center justify-between reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out">
            <div class="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors cursor-pointer">
                <iconify-icon icon="solar:radar-linear" width="24"></iconify-icon>
                <span class="font-light text-sm tracking-tight">NexusNode</span>
            </div>
            <nav class="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-extralight">
                <a href="#" class="hover:text-white transition-colors">Compute Clusters</a>
                <a href="#" class="hover:text-white transition-colors">Observability</a>
                <a href="#" class="hover:text-white transition-colors">Throughput</a>
                <a href="#" class="hover:text-white transition-colors">Consensus</a>
            </nav>
            <div class="flex items-center gap-4">
                <a href="#" class="hidden md:block text-sm text-neutral-400 font-extralight hover:text-white transition-colors">Sign In</a>
                <button class="bg-white text-black px-4 py-2 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors">
                    Get Started
                </button>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
            <div class="max-w-4xl mx-auto flex flex-col items-center">
                
                <!-- Pill Badge -->
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                    <span class="flex h-2 w-2 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span class="text-xs font-extralight text-neutral-300 tracking-wide uppercase">Nexus OS v4.2 deployment ready</span>
                    <iconify-icon icon="solar:alt-arrow-right-linear" width="14" class="text-neutral-500"></iconify-icon>
                </div>

                <h1 class="mask-container text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.1]">
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Orchestrate</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">the</span></span>
                    <br class="hidden md:block" />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600 font-extralight inline-block">
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">neural</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">compute</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">fabric.</span></span>
                    </span>
                </h1>
                
                <p class="mask-container mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-extralight">
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Provision</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">ultra-low</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">latency</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">inference</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">nodes</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">with</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">zero</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">configuration.</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Enterprise-grade</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">AI</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">infrastructure</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">built</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">for</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">real-time</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">model</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">serving.</span></span>
                </p>
                
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors group">
                        Launch Workspace
                        <iconify-icon icon="solar:transfer-horizontal-linear" width="18" class="group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                    </button>
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-light text-white border border-white/20 hover:bg-white/5 transition-colors">
                        View Documentation
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Matrix with Subtler Gradient Borders -->
        <section class="container mx-auto px-6 py-24 pb-32">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300">
                
                <!-- Feature Card 1 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Homomorphic</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Encryption</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Cryptographic isolation guaranteeing absolute data privacy during active model inference across edge nodes.</p>
                    </div>
                </div>

                <!-- Feature Card 2 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Serverless</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">GPUs</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">On-demand distributed compute layers. Elastic scaling powered by decentralized tensor processing units.</p>
                    </div>
                </div>

                <!-- Feature Card 3 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Global</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">State</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Sync</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Distributed vector database integration. Access and mutate embedding states with sub-millisecond precision.</p>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- Interactions & WebGL Implementation -->
    <script>
        // Native Reveal Animations Trigger
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.remove('opacity-0', 'translate-y-4');
            });
        }, 100);

        // GSAP Masked Reveal Implementation
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.mask-container').forEach(container => {
            const words = container.querySelectorAll('.mask-word');
            gsap.to(words, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 95%",
                },
                y: "0%",
                opacity: 1,
                duration: 1.1,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.1
            });
        });

        // WebGL Topography
        const canvas = document.getElementById('topo-canvas');
        const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false });

        if (gl) {
            const vsSource = \`
                attribute vec2 a_position;
                void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
            \`;

            const fsSource = \`
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;
                uniform float u_dpr;

                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v){
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
                    i = mod(i, 289.0);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m; m = m*m;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    st.x *= u_resolution.x / u_resolution.y;

                    // 1px physical grid rendering
                    float gridSize = 48.0 * u_dpr;
                    vec2 gridSt = gl_FragCoord.xy / gridSize;
                    vec2 gridFract = fract(gridSt);
                    float lineThickness = 1.0 / gridSize;
                    float gridLines = step(1.0 - lineThickness, gridFract.x) + step(1.0 - lineThickness, gridFract.y);
                    gridLines = clamp(gridLines, 0.0, 1.0) * 0.12; 

                    // Ultra-thin Topographic Lines
                    float noiseScale = 1.4;
                    vec2 noisePos = st * noiseScale + vec2(u_time * 0.015, u_time * 0.025);
                    float n = snoise(noisePos) * 0.5 + 0.5;
                    float numBands = 10.0;
                    float bandVal = n * numBands;
                    float triangleWave = abs(fract(bandVal) - 0.5) * 2.0; 
                    
                    // Thinner smoothstep constraint for fine industrial aesthetic
                    float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;

                    vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;

                    gl_FragColor = vec4(color, 1.0);
                }
            \`;

            function createShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            }

            const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");
            const dprLocation = gl.getUniformLocation(program, "u_dpr");

            function resizeCanvas() {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(dprLocation, dpr);
            }

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            let startTime = performance.now();
            function render(time) {
                gl.uniform1f(timeLocation, (time - startTime) * 0.001);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        }
    <\/script>
</body>
</html>`,Jd={mode:`dark`,speed:1,size:1,gap:2,length:1,density:1,strokeWidth:1,opacity:1,hue:0,saturation:1,brightness:1},Yd=`#eef1f6`;function Xd(e,t,n){return Math.min(n,Math.max(t,e))}function Zd(e,t,n=1){return Math.max(n,Math.round(e*t))}function Qd(e){return e===`cylinders`||e===`sphere`?e:`cube`}function $d(e,t=3){let n=Number(e).toFixed(t);return n.includes(`.`)?n:`${n}.0`}function ef(e,t=`dark`){return e==null?t:e===`light`||e===1||e===`1`?`light`:`dark`}function tf(){if(typeof document>`u`||typeof window>`u`)return`dark`;let e=document.documentElement,t=e.dataset.scheme??e.dataset.theme;return t===`light`||t===`dark`?t:window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`}function nf(e){let[t,n]=(0,_.useState)(tf);return(0,_.useEffect)(()=>{if(!e||typeof document>`u`||typeof window>`u`)return;let t=document.documentElement,r=window.matchMedia(`(prefers-color-scheme: dark)`),i=()=>n(tf()),a=new MutationObserver(i);return a.observe(t,{attributes:!0,attributeFilter:[`data-scheme`,`data-theme`]}),r.addEventListener(`change`,i),i(),()=>{a.disconnect(),r.removeEventListener(`change`,i)}},[e]),t}function rf(e,t){return typeof e==`function`?e(t):e}var af=`
[data-threeui-role="ui"].flex-grow {
  flex: none !important;
  width: min(calc(100% - 32px), var(--threeui-target-width, 360px)) !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: calc(100% - 32px) !important;
  aspect-ratio: 1 / 1 !important;
  margin: 0 !important;
  overflow: hidden !important;
}
[data-threeui-role="ui"] > canvas {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
`;function of(e,{mode:t}){let n=e.replaceAll(`time += 0.015;`,`time += 0.015 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`);return t===`light`&&(n=n.replaceAll(`ctx.fillStyle = '#020804';`,`ctx.fillStyle = '${Yd}';`).replaceAll(`rgba(52,211,153,`,`rgba(4,120,87,`)),n}var sf={constellationField:{title:`Constellation Field`,source:Ad,supportsMode:!0,background:e=>e===`light`?Yd:`#070914`,targets:[{selector:`#constellationCanvas`,role:`background`}],patch(e,{size:t,length:n,density:r,strokeWidth:i,mode:a}){let o=e.replace(`const LINK = 160;`,`const LINK = ${Math.round(160*n)};`).replace(`const MAX_NODES = window.innerWidth < 768 ? 40 : 85;`,`const MAX_NODES = window.innerWidth < 768 ? ${Zd(40,r,8)} : ${Zd(85,r,12)};`).replace(`radius: Math.random() * 2.4 + 1.8`,`radius: (Math.random() * 2.4 + 1.8) * ${t}`).replace(`ctx.lineWidth = 1;`,`ctx.lineWidth = ${Number(Math.max(.25,i).toFixed(2))};`).replace(`node.x += node.vx;`,`node.x += node.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`node.y += node.vy;`,`node.y += node.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`);return a===`light`&&(o=o.replace(`ctx.strokeStyle = '#E6C879';`,`ctx.strokeStyle = '#8B6914';`).replace(`ctx.fillStyle = '#E6C879';`,`ctx.fillStyle = '#8B6914';`)),o}},particleDrift:{title:`Particle Drift`,source:jd,supportsMode:!0,background:e=>e===`light`?Yd:`#030509`,targets:[{selector:`#particle-canvas`,role:`background`}],patch(e,{size:t,length:n,density:r,mode:i}){let a=Math.round(120*n),o=i===`light`?.22:.15,s=e.replace(`Array.from({ length: 90 })`,`Array.from({ length: ${Zd(90,r,12)} })`).replace(`Array.from({ length: 25 })`,`Array.from({ length: ${Zd(25,r,4)} })`).replace(`length: Math.random() * 100 + 50,`,`length: (Math.random() * 100 + 50) * ${n},`).replace(`n.y += n.vy; // Slow drift`,`n.y += n.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1); // Slow drift`).replace(`b.y -= b.speed;`,`b.y -= b.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`if(d < 120) {`,`if(d < ${a}) {`).replace(`0.15 * (1 - d/120)`,`${o} * (1 - d/${a})`).replace(`ctx.lineWidth = 1.5;`,`ctx.lineWidth = ${Number((1.5*t).toFixed(2))};`);return i===`light`&&(s=s.replaceAll(`rgba(96, 165, 250,`,`rgba(37, 99, 235,`).replaceAll(`rgba(156, 163, 175,`,`rgba(36, 48, 68,`).replace(`ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(36, 48, 68, 0.4)';`,`ctx.fillStyle = dist < 180 ? '#2563EB' : 'rgba(36, 48, 68, 0.55)';`)),s}},particleNetwork:{title:`Particle Network`,source:Md,supportsMode:!0,background:e=>e===`light`?Yd:`#05070d`,targets:[{selector:`#particle-canvas`,role:`background`}],patch(e,{size:t,length:n,density:r,mode:i}){let a=e.replace(`const particleCount = 200;`,`const particleCount = ${Zd(200,r,40)};`).replace(`this.length = Math.random() * 2 + 0.5;`,`this.length = (Math.random() * 2 + 0.5) * ${n};`).replace(`this.z -= this.speed;`,`this.z -= this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`const fov = 300;`,`const fov = ${Math.round(300/Math.max(.4,t))};`);return i===`light`&&(a=a.replace(`ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';`,`ctx.fillStyle = 'rgba(238, 241, 246, 0.55)';`).replace(`const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';`,`const hue = Math.random() > 0.5 ? '36, 48, 68' : '37, 99, 235';`)),a}},fluxVortex:{title:`Flux Vortex`,source:Nd,background:`#050505`,targets:[{selector:`#webgl-canvas`,role:`background`}],patch(e,{size:t,density:n}){return e.replace(`const vortexCount = 9500;`,`const vortexCount = ${Zd(9500,n,1200)};`).replace(`const particlesCount = 300;`,`const particlesCount = ${Zd(300,n,40)};`).replace(`size: 0.006, // Smaller dots requested`,`size: ${Number((.006*t).toFixed(4))}, // Smaller dots requested`).replace(`size: 0.008,`,`size: ${Number((.008*t).toFixed(4))},`)}},portalField:{title:`Portal Field`,source:Pd,background:`#05060a`,targets:[{selector:`#webgl-container`,role:`background`}],patch(e,{size:t,length:n}){return e.replace(`float d1 = sdArc(st, center, 0.6, 0.02, 0.15);`,`float d1 = sdArc(st, center, ${$d(.6*n,3)}, ${$d(.02*t,4)}, 0.15);`).replace(`float d2 = sdArc(st, center, 0.65, 0.06, 0.2);`,`float d2 = sdArc(st, center, ${$d(.65*n,3)}, ${$d(.06*t,4)}, 0.2);`)}},flowField:{title:`Flow Field`,source:Fd,background:`#0a0a0a`,targets:[{selector:`#canvas`,role:`background`}],patch(e,{size:t,length:n,density:r}){return e.replace(/<script defer src="https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js[^>]*><\/script>/,``).replace(`const PARTICLE_COUNT = 2500;`,`const PARTICLE_COUNT = ${Zd(2500,r,300)};`).replace(`let NOISE_SCALE = 0.0025;`,`let NOISE_SCALE = ${Number((.0025/n).toFixed(6))};`).replace(`time += 0.0008;`,`time += 0.0008 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);`).replace(`let vx = Math.cos(angle) * p.speed * SPEED;`,`let vx = Math.cos(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);`).replace(`let vy = Math.sin(angle) * p.speed * SPEED;`,`let vy = Math.sin(angle) * p.speed * SPEED * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||0);`).replace(`ctx.lineWidth = p.size;`,`ctx.lineWidth = p.size * ${Number(t.toFixed(3))};`)}},amberHalftone:{title:`Amber Halftone`,source:Id,supportsMode:!0,background:e=>e===`light`?Yd:`#0A0A0A`,targets:[{selector:`#webgl-halftone`,role:`background`}],patch(e,{size:t,length:n,density:r,mode:i}){let a=Number((.085/Math.max(.25,r)).toFixed(4)),o=Math.max(12,Math.ceil(2.8/a)),s=Number((9*t).toFixed(2)),c=Number((6*n).toFixed(2)),l=e.replace(`const gridSize = 20;`,`const gridSize = ${o};`).replace(`positions.push(x * 0.15, y * 0.15, 0);`,`positions.push(x * ${a}, y * ${a}, 0);`).replace(`float animatedScale = scale * (sin(dist * 6.0 - time * 2.5) * 0.5 + 0.5);`,`float animatedScale = scale * (sin(dist * ${$d(c,2)} - time * 2.5) * 0.5 + 0.5);`).replace(`gl_PointSize = animatedScale * 5.0;`,`gl_PointSize = animatedScale * ${$d(s,2)};`).replace(`material.uniforms.time.value = clock.getElapsedTime();`,`material.uniforms.time.value = clock.getElapsedTime() * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`);return i===`light`&&(l=l.replace(`renderer.setClearColor(0x0A0A0A, 1);`,`renderer.setClearColor(0xeef1f6, 1);`).replace(`color1: { value: new THREE.Color(0xFBBF24) },`,`color1: { value: new THREE.Color(0xB45309) },`).replace(`color2: { value: new THREE.Color(0xFFFFFF) }`,`color2: { value: new THREE.Color(0x1a1f2a) }`)),l}},diagnosticsLayers:{title:`Layered Planes`,source:Ld,supportsMode:!0,background:e=>e===`light`?Yd:`#020804`,targets:[{selector:`#main-container article:nth-of-type(1) .flex-grow`,role:`ui`,width:`360px`}],focusCss:af,patch:of},diagnosticsNodes:{title:`Node Cubes`,source:Ld,supportsMode:!0,background:e=>e===`light`?Yd:`#020804`,targets:[{selector:`#main-container article:nth-of-type(2) .flex-grow`,role:`ui`,width:`360px`}],focusCss:af,patch:of},diagnosticsFlow:{title:`Flowing Mesh`,source:Ld,supportsMode:!0,background:e=>e===`light`?Yd:`#020804`,targets:[{selector:`#main-container article:nth-of-type(3) .flex-grow`,role:`ui`,width:`360px`}],focusCss:af,patch:of},signalParticles:{title:`Signal Particles`,source:Rd,supportsMode:!0,background:e=>e===`light`?Yd:`#0a0a0a`,targets:[{selector:`#particle-canvas`,role:`background`}],patch(e,{size:t,length:n,mode:r}){let i=e.replace(`const spacing = 16;`,`const spacing = ${Math.max(6,Math.round(16/Math.max(.35,n)))};`).replace(`const dotRadius = 1.5;`,`const dotRadius = ${Number((1.5*t).toFixed(2))};`).replace(`time += 0.02;`,`time += 0.02 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`);return r===`light`&&(i=i.replace(`ctx.fillStyle = '#3b82f6'; // Blue highlight`,`ctx.fillStyle = '#1d4ed8'; // Blue highlight`).replace(`ctx.fillStyle = '#8b5cf6'; // Purple highlight`,`ctx.fillStyle = '#5b21b6'; // Purple highlight`).replace("ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;","ctx.fillStyle = `rgba(36, 48, 68, ${alpha})`;")),i}},skeuomorphicToggle:{title:`Skeuomorphic Toggle`,source:zd,supportsMode:!0,defaultMode:`auto`,background:e=>e===`light`?`#f8fafc`:`#0b1220`,targets:[{selector:`#skeuomorphic-toggle`,role:`ui`,width:`192px`}],focusCss:`
#skeuomorphic-toggle {
  width: 12rem !important;
  height: 4rem !important;
  margin: auto !important;
  overflow: visible !important;
  max-height: none !important;
}
`,patch(e,{mode:t}){return t===`dark`?e.replace(`var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%)';`,`var ON_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.035) 2px, rgba(255,255,255,0.035) 4px), linear-gradient(180deg, #1e3a8a 0%, #172554 100%)';`).replace(`var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)';`,`var OFF_BG = 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.025) 2px, rgba(255,255,255,0.025) 4px), linear-gradient(180deg, #1e293b 0%, #0f172a 100%)';`).replace(`var ON_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.7), 0 0 0 6px rgba(239, 246, 255, 0.8), 0 0 25px 5px rgba(96, 165, 250, 0.4)';`,`var ON_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.52), inset 0 -2px 4px rgba(147,197,253,0.24), 0 0 0 6px rgba(15,23,42,0.96), 0 0 26px 5px rgba(59,130,246,0.42)';`).replace(`var OFF_SHADOW = 'inset 0 4px 8px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(255,255,255,0.55), 0 0 0 6px rgba(241, 245, 249, 0.9), 0 0 18px 2px rgba(148, 163, 184, 0.25)';`,`var OFF_SHADOW = 'inset 0 5px 10px rgba(0,0,0,0.56), inset 0 -2px 4px rgba(148,163,184,0.12), 0 0 0 6px rgba(15,23,42,0.96), 0 0 18px 2px rgba(30,64,175,0.2)';`).replace(`var ON_BORDER = '#60a5fa';`,`var ON_BORDER = '#3b82f6';`).replace(`var OFF_BORDER = '#94a3b8';`,`var OFF_BORDER = '#334155';`).replace(`background: linear-gradient(180deg, #ffffff 0%, #f4f8ff 100%);`,`background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 100%);`).replace(`border: 1px solid #e0edfa;`,`border: 1px solid #64748b;`):e}},matrixField:{title:`Matrix Field`,source:Bd,background:`#000000`,targets:[{selector:`#glcanvas`,role:`background`}],patch(e,{size:t,length:n}){return e.replace(`float intensity = 0.006;`,`float intensity = ${$d(.006*t*n,5)};`)}},gatewayFlow:{title:`Gateway Flow`,source:Vd,supportsMode:!0,background:e=>e===`light`?Yd:`#000000`,targets:[{selector:`#flow-canvas`,role:`background`}],patch(e,{size:t,density:n,mode:r}){let i=e.replace(`const numPaths = 80;`,`const numPaths = ${Zd(80,n,12)};`).replace(`p.t += p.speed;`,`p.t += p.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`ctx.lineWidth = 1.2;`,`ctx.lineWidth = ${Number((1.2*t).toFixed(2))};`);return r===`light`&&(i=i.replace(`ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';`,`ctx.strokeStyle = 'rgba(26, 31, 42, 0.4)';`).replace("ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;","ctx.fillStyle = `rgba(26, 31, 42, 0.75)`;")),i}},connectivityGraph:{title:`Connectivity Graph`,source:Hd,supportsMode:!0,defaultMode:`light`,background:e=>e===`light`?`#c4d9ef`:`#0a1220`,targets:[{selector:`#networkCanvas`,role:`background`}],patch(e,{size:t,length:n,density:r,mode:i}){let a=e.replace(`const particleCount = window.innerWidth < 768 ? 150 : 400;`,`const particleCount = window.innerWidth < 768 ? ${Zd(150,r,30)} : ${Zd(400,r,60)};`).replace(`this.maxLength = 20 + Math.random() * 180;`,`this.maxLength = (20 + Math.random() * 180) * ${n};`).replace(`this.distance += this.speed;`,`this.distance += this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`ctx.lineWidth = 0.5 + (distRatio * 2);`,`ctx.lineWidth = (0.5 + (distRatio * 2)) * ${t};`);return i===`dark`&&(a=a.replace(`const lightness = 15 + (distRatio * 35);`,`const lightness = 58 + (distRatio * 28);`).replace("const tailColor = `hsla(${hue}, 90%, ${Math.max(5, lightness - 15)}%, ${this.alpha * 0.05})`;","const tailColor = `hsla(${hue}, 90%, ${Math.max(40, lightness - 15)}%, ${this.alpha * 0.08})`;")),a}},interfaceLines:{title:`Interface Lines`,source:Ud,supportsMode:!0,background:e=>e===`light`?Yd:`#050505`,targets:[{selector:`#bg-canvas`,role:`background`}],patch(e,{size:t,length:n,density:r,mode:i}){let a=Math.round(120*n),o=e.replace(`const numParticles = window.innerWidth < 640 ? 30 : 70;`,`const numParticles = window.innerWidth < 640 ? ${Zd(30,r,8)} : ${Zd(70,r,12)};`).replace(`p.x += p.vx;`,`p.x += p.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`p.y += p.vy;`,`p.y += p.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`if (dist < 120)`,`if (dist < ${a})`).replace(`ctx.lineWidth = 1;`,`ctx.lineWidth = ${Number((1*t).toFixed(2))};`);return o=i===`light`?o.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(26, 31, 42, \${0.28 + (1 - dist / ${a}) * 0.42})\`;`).replace(`ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';`,`ctx.fillStyle = 'rgba(26, 31, 42, 0.85)';`):o.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / ${a}) * 0.42})\`;`),o}},wireframeForms:{title:`Wireframe Forms`,source:Wd,supportsMode:!0,background:e=>e===`light`?Yd:`#050505`,targets:[{selector:`main`,role:`ui`,width:`1040px`}],focusCss:`
main {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: center !important;
  gap: clamp(1rem, 3vw, 2.5rem) !important;
  height: auto !important;
  min-height: 0 !important;
  padding: 1.5rem !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  grid-template-columns: none !important;
}
main > .absolute { display: none !important; }
main > .group {
  height: auto !important;
  min-height: 0 !important;
  padding: 0 !important;
  overflow: visible !important;
  background: transparent !important;
  flex: 0 0 auto !important;
  width: min(72vw, 480px) !important;
}
main > .group:not([data-wireframe-selected]) { display: none !important; }
main > .group > :not([data-wireframe-visual]) { display: none !important; }
main > .group > [data-wireframe-visual] {
  padding: 0 !important;
  flex-grow: 0 !important;
  width: 100% !important;
  aspect-ratio: 1 !important;
}
main > .group > [data-wireframe-visual] > :not(canvas) { display: none !important; }
#canvas1, #canvas2, #canvas3 {
  width: 100% !important;
  max-width: none !important;
  height: 100% !important;
  opacity: 1 !important;
  mix-blend-mode: normal !important;
}
`,patch(e,{variant:t,size:n,length:r,mode:i}){let a=Qd(t),o={cube:`<!-- Section 01: Hypercube -->`,cylinders:`<!-- Section 02: Logic Cylinders -->`,sphere:`<!-- Section 03: Esoteric Sphere -->`}[a],s=e.replace(`${o}
        <div class="group`,`${o}
        <div data-wireframe-selected="${a}" class="group`).replace(`this.angleY += 0.005;`,`this.angleY += 0.005 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`this.angleX += 0.002;`,`this.angleX += 0.002 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`const s = 80;`,`const s = ${Math.round(80*r)};`).replace(`const r = 70;`,`const r = ${Math.round(70*r)};`).replace(`const s = 50; `,`const s = ${Math.round(50*r)}; `).replace(`this.ctx.lineWidth = 0.8;`,`this.ctx.lineWidth = ${Number((.8*n).toFixed(2))};`);return i===`light`&&(s=s.replace("this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;","this.ctx.strokeStyle = `rgba(26, 31, 42, ${alpha * 0.45})`;").replace("this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;","this.ctx.fillStyle = `rgba(26, 31, 42, ${alpha})`;")),s}},defenseLines:{title:`Defense Lines`,source:Gd,supportsMode:!0,background:e=>e===`light`?`#f4ecec`:`#120303`,targets:[{selector:`#bg-canvas`,role:`background`}],patch(e,{size:t,length:n,density:r,mode:i}){let a=e.replace(`const particleCount = window.innerWidth < 768 ? 40 : 100;`,`const particleCount = window.innerWidth < 768 ? ${Zd(40,r,8)} : ${Zd(100,r,16)};`).replace(`baseLength: Math.random() * 80 + 20,`,`baseLength: (Math.random() * 80 + 20) * ${n},`).replace(`p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);`,`p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5) * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`).replace(`ctx.lineWidth = 0.5;`,`ctx.lineWidth = ${Number((.5*t).toFixed(2))};`);return i===`light`&&(a=a.replaceAll(`rgba(220, 38, 38, 0)`,`rgba(153, 27, 27, 0)`).replace("grad.addColorStop(0.5, `rgba(255, ${38 + brightness}, ${38 + brightness}, ${currentOpacity})`);","grad.addColorStop(0.5, `rgba(185, ${20 + brightness * 0.55}, ${20 + brightness * 0.55}, ${currentOpacity})`);")),a}},overrideGrid:{title:`Override Grid`,source:Kd,supportsMode:!0,background:e=>e===`light`?Yd:`#050505`,targets:[{selector:`#grid-canvas`,role:`background`}],patch(e,{size:t,gap:n,mode:r}){let i=Math.max(8,Math.round(t)),a=Math.max(0,Math.round(n)),o=e.replace(`const blockSize = 48;`,`const blockSize = ${i};`).replace(`const blockGap = 2;`,`const blockGap = ${a};`).replace(`time += 0.04;`,`time += 0.04 * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);`);return r===`light`&&(o=o.replace("ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;","ctx.fillStyle = `rgba(194, 65, 12, ${alpha * 1.35})`;")),o}},topoField:{title:`Topo Field`,source:qd,supportsMode:!0,background:e=>e===`light`?Yd:`#000000`,targets:[{selector:`#topo-canvas`,role:`background`}],patch(e,{length:t,density:n,mode:r}){let i=e.replace(`float noiseScale = 1.4;`,`float noiseScale = ${$d(1.4*t,3)};`).replace(`float numBands = 10.0;`,`float numBands = ${$d(10*n,2)};`);return r===`light`&&(i=i.replace(`gridLines = clamp(gridLines, 0.0, 1.0) * 0.12;`,`gridLines = clamp(gridLines, 0.0, 1.0) * 0.55;`).replace(`float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;`,`float topoLines = smoothstep(0.03, 0.00, triangleWave) * 0.95;`).replace(`vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;`,`vec3 paper = vec3(0.933, 0.945, 0.965);
                    vec3 ink = vec3(0.12, 0.14, 0.18);
                    float lines = clamp(gridLines + topoLines, 0.0, 1.0);
                    vec3 color = mix(paper, ink, lines);`)),i}}};function cf(e,t){let n=t.mode,r=rf(e.background,n),i=JSON.stringify(e.targets).replace(/</g,`\\u003c`),a=JSON.stringify({mode:n,speed:t.speed,size:t.size,gap:t.gap,length:t.length,density:t.density,strokeWidth:t.strokeWidth,opacity:t.opacity}).replace(/</g,`\\u003c`),o=e.patch?e.patch(e.source,{variant:t.variant,size:t.size,gap:t.gap,length:t.length,density:t.density,strokeWidth:t.strokeWidth,mode:n}):e.source,s=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${r} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${e.focusCss??``}
</style>`,c=`<script data-threeui-controls>
(function () {
  var controls = ${a};
  window.__SF_CONTROLS = controls;
  var origin = performance.now();
  var virtual = 0;
  var last = origin;
  var performanceNow = performance.now.bind(performance);
  var dateNow = Date.now.bind(Date);
  var dateOrigin = dateNow();
  performance.now = function () {
    var real = performanceNow();
    virtual += (real - last) * (controls.speed || 1);
    last = real;
    return origin + virtual;
  };
  Date.now = function () {
    return dateOrigin + (performance.now() - origin);
  };
  var raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = function (callback) {
    return raf(function () {
      callback(performance.now());
    });
  };
  function applyVisual() {
    var opacity = controls.opacity == null ? 1 : controls.opacity;
    var size = controls.size == null ? 1 : controls.size;
    Array.prototype.forEach.call(document.querySelectorAll('[data-threeui-role]'), function (element) {
      element.style.opacity = String(opacity);
      if (element.getAttribute('data-threeui-role') === 'ui') {
        element.style.transform = 'scale(' + size + ')';
        element.style.transformOrigin = 'center center';
      }
    });
  }
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'threeui-controls') return;
    var next = event.data.controls || {};
    Object.keys(next).forEach(function (key) { controls[key] = next[key]; });
    applyVisual();
  });
  window.__SF_APPLY_CONTROLS = applyVisual;
})();
<\/script>`,l=`<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${i};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    if (window.__SF_APPLY_CONTROLS) window.__SF_APPLY_CONTROLS();
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return o.replace(/<head([^>]*)>/i,`<head$1>${c}${s}`).replace(/<\/body>/i,`${l}</body>`)}function lf({definition:e,variant:t=`cube`,mode:n,speed:r=Jd.speed,size:i=Jd.size,gap:a=Jd.gap,length:o=Jd.length,density:s=Jd.density,strokeWidth:c=Jd.strokeWidth,opacity:l=Jd.opacity,hue:u=Jd.hue,saturation:d=Jd.saturation,brightness:f=Jd.brightness,className:p,style:m}){let h=(0,_.useRef)(null),g=n??e.defaultMode??Jd.mode,v=nf(g===`auto`),y=g===`auto`?v:ef(g,Jd.mode),b=rf(e.background,y),x=Xd(r,0,3),S=Xd(i,.05,200),ee=Xd(a,0,64),te=Xd(o,.35,2.5),C=Xd(s,.25,2.5),ne=Xd(c,.25,8),w=Xd(l,.05,1),re=Xd(u,-180,180),ie=Xd(d,0,2),ae=Xd(f,.35,1.65),oe=(0,_.useMemo)(()=>cf(e,{variant:t,mode:y,speed:Jd.speed,size:S,gap:ee,length:te,density:C,strokeWidth:ne,opacity:Jd.opacity}),[e,y,C,ee,te,S,ne,t]);(0,_.useEffect)(()=>{let e=h.current?.contentWindow;e&&e.postMessage({type:`threeui-controls`,controls:{mode:y,speed:x,size:S,gap:ee,length:te,density:C,strokeWidth:ne,opacity:w}},`*`)},[y,C,ee,te,w,S,x,ne,oe]);let se=re===0&&ie===1&&ae===1?void 0:`hue-rotate(${re}deg) saturate(${ie}) brightness(${ae})`;return(0,B.jsx)(`iframe`,{ref:h,className:p,title:e.title,srcDoc:oe,sandbox:`allow-scripts`,loading:`eager`,style:{display:`block`,width:`100%`,height:`100%`,border:0,background:b,filter:se,...m}})}function uf(e){return function(t){return(0,B.jsx)(lf,{...t,definition:e})}}var df=uf(sf.constellationField),ff=uf(sf.particleDrift),pf=uf(sf.particleNetwork);sf.fluxVortex,sf.portalField,sf.flowField,sf.amberHalftone,sf.diagnosticsLayers,sf.diagnosticsNodes,sf.diagnosticsFlow,sf.signalParticles,sf.skeuomorphicToggle,sf.matrixField;var Z=uf(sf.gatewayFlow),mf=uf(sf.connectivityGraph),hf=uf(sf.interfaceLines);sf.wireframeForms;var gf=uf(sf.defenseLines);sf.overrideGrid;var _f={"constellation-field":df,"particle-drift":ff,"particle-network":pf,"gateway-flow":Z,"connectivity-graph":mf,"interface-lines":hf,"defense-lines":gf,"topo-field":uf(sf.topoField)};function vf({variant:e=`constellation-field`,...t}){let n=_f[e];return(0,B.jsx)(n,{...t})}function yf(){return(0,B.jsx)(`div`,{className:`site-background`,"aria-hidden":`true`,children:(0,B.jsx)(vf,{variant:`particle-drift`,mode:`dark`,speed:1,size:1,length:1,density:1,opacity:1,hue:0,saturation:1,brightness:1})})}var bf=[{id:`about`,label:`About`},{id:`work`,label:`Work`},{id:`contact`,label:`Contact`}],xf=[{slug:`incigraph`,title:`InciGraph`,tag:`AI / Data Graph`,description:`Chemical supply-chain traceability graph with a natural-language query interface — ask who supplies or uses a chemical.`,details:`InciGraph maps relationships between chemicals, the products that use them, the brands behind those products, and who supplies them. Instead of clicking through filters, you type a question — "who sells titanium dioxide", "products using parabens" — and a natural-language parser resolves it into a graph query and renders the connected nodes live.`,stack:[`Node.js`,`Vanilla JS`,`Rule-based NLU`,`Force-directed graph`],repo:`https://github.com/pranjalkumar23/incigraph`,demo:`https://incigraph.pranjal.ai/`,demoLabel:`Live demo →`,note:null},{slug:`traveldeals`,title:`TravelDeals`,tag:`Automation`,description:`Tracks flight and cruise prices and only surfaces genuine drops against each route’s own history — no bookings, just alerts.`,details:`A multi-service pipeline: dedicated ingest workers pull flight and cruise fares on a schedule, a detector service compares each new price against that specific route’s own historical baseline, and only publishes a deal when it clears a quality bar. It never touches payments or bookings — every deal links straight out to the airline, cruise line, or OTA.`,stack:[`Node.js services`,`Postgres`,`Scheduled ingestion`,`Next.js web app`],repo:`https://github.com/pranjalkumar23/travel-deals`,demo:`https://traveldeals.pranjal.ai/`,demoLabel:`Static preview →`,note:`Preview only — the live deal feed needs Postgres plus scheduled ingest/detector services, which can’t run on GitHub Pages.`},{slug:`swapkaro`,title:`SwapKaro`,tag:`Marketplace`,description:`Full-stack barter marketplace — list items, propose swaps, match with other traders, and track proposals end to end.`,details:`A complete barter marketplace: list what you have, browse a "wanted" board for what others are after, propose a swap, and track it through a matches dashboard with city-proximity-aware matching. Built with Next.js Server Actions, cookie-based sessions, and Zod validation.`,stack:[`Next.js`,`Server Actions`,`Zod`,`Session auth`],repo:`https://github.com/pranjalkumar23/swapkaro`,demo:`https://swapkaro.pranjal.ai/`,demoLabel:`Static preview →`,note:`Preview only — Next.js Server Actions need a Node server, which GitHub Pages can’t run.`},{slug:`tuneglobe`,title:`TuneGlobe`,tag:`Web App`,description:`Explore and stream live radio stations from anywhere in the world on an interactive map, backed by Firebase.`,details:`Drop a pin anywhere on the world map and stream that region’s live radio instantly. Accounts, favorites, and station data are backed by Firebase Auth and Firestore, with Cloud Functions handling server-side logic like payment verification for premium features.`,stack:[`Firebase Auth`,`Firestore`,`Cloud Functions`,`Interactive map UI`],repo:`https://github.com/pranjalkumar23/tuneglobe`,demo:`https://tuneglobe.netlify.app/`,demoLabel:`Live site →`,note:null},{slug:`kundali`,title:`Kundali`,tag:`Mockup`,description:`Vedic astrology mockup — Panchang timing and Kundali matching explained in plain Hindi or English.`,details:`A design mockup for a Vedic astrology product: Panchang timing lookups and Kundali (birth chart) matching, written to feel rooted in tradition rather than gimmicky — plain-language explanations in Hindi or English with a clear verdict instead of vague mysticism.`,stack:[`Static HTML/CSS/JS`],repo:`https://github.com/pranjalkumar23/kundali`,demo:`https://kundali.pranjal.ai/`,demoLabel:`Live demo →`,note:null},{slug:`central-house-homestay`,title:`The Central House`,tag:`Hospitality`,description:`Booking site for a vegetarian homestay in Bhowali, Uttarakhand, near Kainchi Dham and Nainital.`,details:`A multi-page marketing and booking site for a real vegetarian homestay in Shyamkhet, Bhowali — rooms, photo gallery, and a direct contact/enquiry flow, built to read as calm and trustworthy for travelers researching a stay near Kainchi Dham and Nainital.`,stack:[`Static HTML/CSS/JS`],repo:`https://github.com/pranjalkumar23/central-house-homestay`,demo:`https://thecentralhouse.in/`,demoLabel:`Live site →`,note:null},{slug:`itowers-exente`,title:`iTowers Exente`,tag:`Community`,description:`Resident portal for a 438-home gated community in Bengaluru — amenities, announcements, and access info.`,details:`The official resident-facing site for iTowers Exente, a 438-home Kolte-Patil gated community in Electronic City, Bengaluru — amenity info (rooftop pool, gym, clubhouse, tennis and basketball courts), announcements, and general access information for residents and prospective buyers.`,stack:[`React`,`Static build`],repo:`https://github.com/pranjalkumar23/itowers-exente`,demo:`https://itowersexente.com/`,demoLabel:`Live site →`,note:null},{slug:`wind-chime-studio`,title:`Wind Chime Studio`,tag:`Design Exploration`,description:`Three creative directions for one product — temple chimes in India, a poetic Hindi wind bell, and bronze-and-jade Japanese chimes.`,details:`The same product — a wind chime — explored through three completely different creative lenses: devotional temple-chime branding for an Indian audience, a poetic Hindi "curtain of verse" wind bell, and a minimal bronze-and-jade aesthetic drawn from Japanese furin. A study in how tone and visual language change the same idea.`,stack:[`Static HTML/CSS/JS`,`Typography-led design`],repo:`https://github.com/pranjalkumar23/wind-chime-studio`,demo:`https://windchime.pranjal.ai/`,demoLabel:`Live demo →`,note:null},{slug:`expense-tracker`,title:`Expense Tracker`,tag:`Android / On-device`,description:`Reads bank SMS alerts on-device to categorize spending and surface monthly patterns — no server, no cloud.`,details:`A fully on-device Android app: it reads bank and card SMS alerts, buckets spending into categories (savings, credit card, UPI, other), and generates monthly reports with spending patterns and reduction recommendations. No server, no cloud, no account — everything stays on the phone.`,stack:[`Android`,`On-device parsing`,`No backend`],repo:`https://github.com/pranjalkumar23/expense-tracker`,demo:null,demoLabel:null,note:`Android app — no web demo.`}];function Sf(e){let[t,n]=(0,_.useState)(e[0]);return(0,_.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&n(e.target.id)})},{threshold:.5});return e.forEach(e=>{let n=document.getElementById(e);n&&t.observe(n)}),()=>t.disconnect()},[e]),t}function Cf(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=setTimeout(()=>t(!0),900);return()=>clearTimeout(e)},[]),(0,B.jsx)(Xc,{children:!e&&(0,B.jsx)(X.div,{className:`curtain`,initial:{y:0},exit:{y:`-100%`},transition:{duration:.7,ease:[.76,0,.24,1]},children:(0,B.jsx)(X.span,{className:`curtain-mark`,initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},transition:{duration:.5,ease:`easeOut`},children:`PK`})})})}function wf({active:e}){return(0,B.jsxs)(X.nav,{className:`nav`,initial:{y:-60,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,delay:.9,ease:`easeOut`},children:[(0,B.jsx)(`a`,{href:`#top`,className:`nav-mark`,children:`PK`}),(0,B.jsx)(`ul`,{className:`nav-links`,children:bf.map(t=>(0,B.jsx)(`li`,{children:(0,B.jsxs)(`a`,{href:`#${t.id}`,className:e===t.id?`active`:``,children:[e===t.id&&(0,B.jsx)(X.span,{layoutId:`nav-pill`,className:`nav-pill`,transition:{type:`spring`,stiffness:400,damping:32}}),(0,B.jsx)(`span`,{className:`nav-label`,children:t.label})]})},t.id))})]})}var Tf={hidden:{y:`110%`},visible:e=>({y:`0%`,transition:{duration:.7,delay:1+e*.04,ease:[.16,1,.3,1]}})};function Ef({word:e,startIndex:t}){return(0,B.jsx)(`span`,{className:`letters`,children:e.split(``).map((e,n)=>(0,B.jsx)(`span`,{className:`letter-mask`,children:(0,B.jsx)(X.span,{className:`letter`,custom:t+n,variants:Tf,initial:`hidden`,animate:`visible`,children:e})},`${e}-${n}`))})}function Df(){let e=(0,_.useRef)(null),{scrollYProgress:t}=yd({target:e,offset:[`start start`,`end start`]}),n=Sd(t,[0,1],[`0%`,`35%`]),r=Sd(t,[0,1],[1,.3]);return(0,B.jsxs)(`section`,{id:`top`,className:`hero`,ref:e,children:[(0,B.jsxs)(X.div,{className:`hero-inner`,style:{y:n,opacity:r},children:[(0,B.jsx)(`h1`,{className:`sr-only`,children:`Pranjal Kumar`}),(0,B.jsx)(`div`,{className:`hero-title`,"aria-hidden":`true`,children:(0,B.jsxs)(`span`,{className:`hero-line`,children:[(0,B.jsx)(Ef,{word:`PRANJAL`,startIndex:0}),(0,B.jsx)(X.span,{className:`eye-wrap`,initial:{scale:0},animate:{scale:1},transition:{duration:.6,delay:1.4,ease:`backOut`},children:(0,B.jsx)(kd,{})})]})}),(0,B.jsx)(X.div,{className:`marquee`,initial:{opacity:0,scaleX:0},animate:{opacity:1,scaleX:1},transition:{duration:.5,delay:1.5,ease:`easeOut`},children:(0,B.jsxs)(`div`,{className:`marquee-track`,children:[(0,B.jsx)(`span`,{children:`FULL-STACK DEVELOPER • BUILDER • PROBLEM SOLVER • SHIPPING PROJECTS •`}),(0,B.jsx)(`span`,{"aria-hidden":`true`,children:`FULL-STACK DEVELOPER • BUILDER • PROBLEM SOLVER • SHIPPING PROJECTS •`})]})}),(0,B.jsx)(`div`,{className:`hero-title`,"aria-hidden":`true`,children:(0,B.jsxs)(`span`,{className:`hero-line hero-line-right`,children:[(0,B.jsx)(X.span,{className:`eye-wrap`,initial:{scale:0},animate:{scale:1},transition:{duration:.6,delay:1.6,ease:`backOut`},children:(0,B.jsx)(kd,{})}),(0,B.jsx)(Ef,{word:`KUMAR`,startIndex:7})]})})]}),(0,B.jsx)(X.a,{href:`#work`,className:`hero-scroll`,"aria-label":`Scroll to work`,initial:{opacity:0},animate:{opacity:1,y:[0,8,0]},transition:{opacity:{delay:2,duration:.6},y:{duration:2,repeat:1/0}},children:`⌄`})]})}var Of={hidden:{opacity:0,y:40},visible:(e=0)=>({opacity:1,y:0,transition:{duration:.6,delay:e*.12,ease:[.16,1,.3,1]}})};function kf(){return(0,B.jsxs)(`section`,{id:`about`,className:`about`,children:[(0,B.jsxs)(X.h2,{className:`about-heading`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.6},variants:Of,children:[`AB`,(0,B.jsx)(X.span,{className:`eye-wrap`,initial:{scale:0,rotate:-20},whileInView:{scale:1,rotate:0},viewport:{once:!0,amount:.6},transition:{duration:.6,delay:.2,ease:`backOut`},children:(0,B.jsx)(kd,{className:`eye--heading`})}),`UT`]}),(0,B.jsx)(`div`,{className:`about-copy`,children:[`Hi, I'm Pranjal Kumar.`,`I build full-stack products end to end — from AI-powered graphs and autonomous agents to marketplaces, booking sites, and mobile tools. I like taking an idea from a blank file to something real people can use.`,`Take a look at what I've been building lately.`].map((e,t)=>(0,B.jsx)(X.p,{custom:t+1,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.6},variants:Of,children:e},t))})]})}function Af({project:e,index:t,isOpen:n,onToggle:r}){let i=bd(0),a=bd(0),o=Ed(Sd(a,[-.5,.5],[10,-10]),{stiffness:200,damping:20}),s=Ed(Sd(i,[-.5,.5],[-10,10]),{stiffness:200,damping:20});return(0,B.jsxs)(X.button,{type:`button`,className:`project-card ${n?`project-card--active`:``}`,style:{"--hue":`${t*47%360}`,rotateX:o,rotateY:s,transformPerspective:600},onMouseMove:e=>{let t=e.currentTarget.getBoundingClientRect();i.set((e.clientX-t.left)/t.width-.5),a.set((e.clientY-t.top)/t.height-.5)},onMouseLeave:()=>{i.set(0),a.set(0)},onClick:()=>r(e.slug),"aria-expanded":n,initial:{opacity:0,y:60,scale:.9},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.4},transition:{duration:.5,delay:t*.08,ease:[.16,1,.3,1]},whileHover:{scale:1.04},whileTap:{scale:.97},children:[(0,B.jsx)(`span`,{className:`project-tag`,children:e.tag}),(0,B.jsx)(`span`,{className:`project-title`,children:e.title}),(0,B.jsx)(`span`,{className:`project-desc`,children:e.description})]})}function jf({project:e}){return(0,B.jsx)(X.div,{className:`project-detail`,initial:{opacity:0,height:0},animate:{opacity:1,height:`auto`},exit:{opacity:0,height:0},transition:{duration:.4,ease:[.16,1,.3,1]},children:(0,B.jsxs)(`div`,{className:`project-detail-inner`,children:[(0,B.jsxs)(`div`,{className:`project-detail-header`,children:[(0,B.jsx)(`span`,{className:`project-tag`,children:e.tag}),(0,B.jsx)(`h3`,{children:e.title})]}),(0,B.jsx)(`p`,{className:`project-detail-copy`,children:e.details}),(0,B.jsx)(`ul`,{className:`project-stack`,children:e.stack.map(e=>(0,B.jsx)(`li`,{children:e},e))}),(0,B.jsxs)(`div`,{className:`project-detail-links`,children:[e.repo&&(0,B.jsx)(`a`,{href:e.repo,target:`_blank`,rel:`noreferrer`,className:`project-link`,children:`View source →`}),e.demo&&(0,B.jsx)(`a`,{href:e.demo,target:`_blank`,rel:`noreferrer`,className:`project-link`,children:e.demoLabel||`Live demo →`}),e.note&&(0,B.jsx)(`span`,{className:`project-note`,children:e.note})]})]})})}function Mf(){let e=(0,_.useRef)(null),[t,n]=(0,_.useState)(null),r=t=>{e.current?.scrollBy({left:t,behavior:`smooth`})},i=e=>{n(t=>t===e?null:e)},a=xf.find(e=>e.slug===t);return(0,B.jsxs)(`section`,{id:`work`,className:`work`,children:[(0,B.jsxs)(X.h2,{className:`work-heading`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.6},variants:Of,children:[`PR`,(0,B.jsx)(X.span,{className:`eye-wrap`,initial:{scale:0,rotate:-20},whileInView:{scale:1,rotate:0},viewport:{once:!0,amount:.6},transition:{duration:.6,delay:.2,ease:`backOut`},children:(0,B.jsx)(kd,{className:`eye--heading`})}),`JECTS`]}),(0,B.jsx)(`div`,{className:`work-scroller`,ref:e,children:xf.map((e,n)=>(0,B.jsx)(Af,{project:e,index:n,isOpen:t===e.slug,onToggle:i},e.slug))}),(0,B.jsxs)(X.div,{className:`work-controls`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.3,duration:.5},children:[(0,B.jsx)(X.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>r(-360),"aria-label":`Scroll left`,children:`←`}),(0,B.jsx)(X.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>r(360),"aria-label":`Scroll right`,children:`→`})]}),(0,B.jsx)(Xc,{mode:`wait`,children:a&&(0,B.jsx)(jf,{project:a},a.slug)})]})}function Nf(){return(0,B.jsxs)(`section`,{id:`contact`,className:`contact`,children:[(0,B.jsxs)(X.h2,{className:`contact-heading`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.6},variants:Of,children:[`LET'S C`,(0,B.jsx)(X.span,{className:`eye-wrap`,initial:{scale:0,rotate:20},whileInView:{scale:1,rotate:0},viewport:{once:!0,amount:.6},transition:{duration:.6,delay:.2,ease:`backOut`},children:(0,B.jsx)(kd,{className:`eye--heading`})}),`NNECT`]}),(0,B.jsxs)(X.p,{className:`contact-copy`,custom:1,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.6},variants:Of,children:[`Have a project in mind, or just want to say hi? Reach me at`,` `,(0,B.jsx)(X.a,{href:`mailto:pranjalkumar23@gmail.com`,className:`contact-link`,whileHover:{letterSpacing:`0.02em`},children:`pranjalkumar23@gmail.com`}),`.`]})]})}function Pf(){return(0,B.jsxs)(X.footer,{className:`footer`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:[(0,B.jsxs)(`div`,{className:`footer-links`,children:[(0,B.jsx)(`a`,{href:`https://github.com/pranjalkumar23`,target:`_blank`,rel:`noreferrer`,children:`GitHub`}),(0,B.jsx)(`a`,{href:`https://www.linkedin.com/in/pranjal-k/`,target:`_blank`,rel:`noreferrer`,children:`LinkedIn`})]}),(0,B.jsxs)(`p`,{children:[`© Pranjal Kumar `,new Date().getFullYear()]})]})}function Ff(){let e=Sf([`top`,`about`,`work`,`contact`]);return(0,B.jsxs)(Od,{children:[(0,B.jsx)(yf,{}),(0,B.jsx)(Cf,{}),(0,B.jsx)(wf,{active:e}),(0,B.jsx)(Df,{}),(0,B.jsx)(kf,{}),(0,B.jsx)(Mf,{}),(0,B.jsx)(Nf,{}),(0,B.jsx)(Pf,{})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,B.jsx)(_.StrictMode,{children:(0,B.jsx)(Ff,{})}));