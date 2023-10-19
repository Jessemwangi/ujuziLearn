"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6433],{74444:function(a,b,c){c.d(b,{BH:function(){return C},L:function(){return k},LL:function(){return E},Pz:function(){return B},ZR:function(){return D},aH:function(){return A},"b$":function(){return r},eu:function(){return u},hl:function(){return t},m9:function(){return S},ne:function(){return O},pd:function(){return N},q4:function(){return z},ru:function(){return q},tV:function(){return l},uI:function(){return p},vZ:function(){return J},w1:function(){return s},xO:function(){return L},xb:function(){return I},"z$":function(){return o},zd:function(){return M}});var d=c(83454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ let e={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},f=function(a){return Error("Firebase Database ("+e.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)},g=function(a){let b=[],c=0;for(let d=0;d<a.length;d++){let e=a.charCodeAt(d);e<128?b[c++]=e:e<2048?(b[c++]=e>>6|192,b[c++]=63&e|128):(64512&e)==55296&&d+1<a.length&&(64512&a.charCodeAt(d+1))==56320?(e=65536+((1023&e)<<10)+(1023&a.charCodeAt(++d)),b[c++]=e>>18|240,b[c++]=e>>12&63|128,b[c++]=e>>6&63|128,b[c++]=63&e|128):(b[c++]=e>>12|224,b[c++]=e>>6&63|128,b[c++]=63&e|128)}return b},h=function(a){let b=[],c=0,d=0;for(;c<a.length;){let e=a[c++];if(e<128)b[d++]=String.fromCharCode(e);else if(e>191&&e<224){let f=a[c++];b[d++]=String.fromCharCode((31&e)<<6|63&f)}else if(e>239&&e<365){let g=a[c++],h=a[c++],i=a[c++],j=((7&e)<<18|(63&g)<<12|(63&h)<<6|63&i)-65536;b[d++]=String.fromCharCode(55296+(j>>10)),b[d++]=String.fromCharCode(56320+(1023&j))}else{let k=a[c++],l=a[c++];b[d++]=String.fromCharCode((15&e)<<12|(63&k)<<6|63&l)}}return b.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(a,b){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();let c=b?this.byteToCharMapWebSafe_:this.byteToCharMap_,d=[];for(let e=0;e<a.length;e+=3){let f=a[e],g=e+1<a.length,h=g?a[e+1]:0,i=e+2<a.length,j=i?a[e+2]:0,k=f>>2,l=(3&f)<<4|h>>4,m=(15&h)<<2|j>>6,n=63&j;i||(n=64,g||(m=64)),d.push(c[k],c[l],c[m],c[n])}return d.join("")},encodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?btoa(a):this.encodeByteArray(g(a),b)},decodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?atob(a):h(this.decodeStringToByteArray(a,b))},decodeStringToByteArray(a,b){this.init_();let c=b?this.charToByteMapWebSafe_:this.charToByteMap_,d=[];for(let e=0;e<a.length;){let f=c[a.charAt(e++)],g=e<a.length,h=g?c[a.charAt(e)]:0;++e;let i=e<a.length,j=i?c[a.charAt(e)]:64;++e;let k=e<a.length,l=k?c[a.charAt(e)]:64;if(++e,null==f||null==h||null==j||null==l)throw Error();let m=f<<2|h>>4;if(d.push(m),64!==j){let n=h<<4&240|j>>2;if(d.push(n),64!==l){let o=j<<6&192|l;d.push(o)}}}return d},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},j=function(a){let b=g(a);return i.encodeByteArray(b,!0)},k=function(a){return j(a).replace(/\./g,"")},l=function(a){try{return i.decodeString(a,!0)}catch(b){console.error("base64Decode failed: ",b)}return null};function m(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:let c=b;return new Date(c.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(let d in b)b.hasOwnProperty(d)&&n(d)&&(a[d]=m(a[d],b[d]));return a}function n(a){return"__proto__"!==a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function q(){let a="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof a&& void 0!==a.id}function r(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function s(){let a=o();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function t(){return"object"==typeof indexedDB}function u(){return new Promise((a,b)=>{try{let c=!0,d="validate-browser-context-for-indexeddb-analytics-module",e=self.indexedDB.open(d);e.onsuccess=()=>{e.result.close(),c||self.indexedDB.deleteDatabase(d),a(!0)},e.onupgradeneeded=()=>{c=!1},e.onerror=()=>{var a;b((null===(a=e.error)|| void 0===a?void 0:a.message)||"")}}catch(f){b(f)}})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let v=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==c.g)return c.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,w=()=>{if(void 0===d|| void 0===d.env)return;let a=d.env.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},x=()=>{if("undefined"==typeof document)return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(b){return}let c=a&&l(a[1]);return c&&JSON.parse(c)},y=()=>{try{return v()||w()||x()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},z=a=>{var b,c;return null===(c=null===(b=y())|| void 0===b?void 0:b.emulatorHosts)|| void 0===c?void 0:c[a]},A=()=>{var a;return null===(a=y())|| void 0===a?void 0:a.config},B=a=>{var b;return null===(b=y())|| void 0===b?void 0:b[`_${a}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}wrapCallback(a){return(b,c)=>{b?this.reject(b):this.resolve(c),"function"==typeof a&&(this.promise.catch(()=>{}),1===a.length?a(b):a(b,c))}}}class D extends Error{constructor(a,b,c){super(b),this.code=a,this.customData=c,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(a,b,c){this.service=a,this.serviceName=b,this.errors=c}create(a,...b){let c=b[0]||{},d=`${this.service}/${a}`,e=this.errors[a],f=e?F(e,c):"Error",g=`${this.serviceName}: ${f} (${d}).`,h=new D(d,g,c);return h}}function F(a,b){return a.replace(G,(a,c)=>{let d=b[c];return null!=d?String(d):`<${c}?>`})}let G=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function H(a){return JSON.parse(a)}function I(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}function J(a,b){if(a===b)return!0;let c=Object.keys(a),d=Object.keys(b);for(let e of c){if(!d.includes(e))return!1;let f=a[e],g=b[e];if(K(f)&&K(g)){if(!J(f,g))return!1}else if(f!==g)return!1}for(let h of d)if(!c.includes(h))return!1;return!0}function K(a){return null!==a&&"object"==typeof a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function L(a){let b=[];for(let[c,d]of Object.entries(a))Array.isArray(d)?d.forEach(a=>{b.push(encodeURIComponent(c)+"="+encodeURIComponent(a))}):b.push(encodeURIComponent(c)+"="+encodeURIComponent(d));return b.length?"&"+b.join("&"):""}function M(a){let b={},c=a.replace(/^\?/,"").split("&");return c.forEach(a=>{if(a){let[c,d]=a.split("=");b[decodeURIComponent(c)]=decodeURIComponent(d)}}),b}function N(a){let b=a.indexOf("?");if(!b)return"";let c=a.indexOf("#",b);return a.substring(b,c>0?c:void 0)}function O(a,b){let c=new P(a,b);return c.subscribe.bind(c)}class P{constructor(a,b){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=b,this.task.then(()=>{a(this)}).catch(a=>{this.error(a)})}next(a){this.forEachObserver(b=>{b.next(a)})}error(a){this.forEachObserver(b=>{b.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,b,c){let d;if(void 0===a&& void 0===b&& void 0===c)throw Error("Missing Observer.");void 0===(d=Q(a,["next","error","complete"])?a:{next:a,error:b,complete:c}).next&&(d.next=R),void 0===d.error&&(d.error=R),void 0===d.complete&&(d.complete=R);let e=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?d.error(this.finalError):d.complete()}catch(a){}}),this.observers.push(d),e}unsubscribeOne(a){void 0!==this.observers&& void 0!==this.observers[a]&&(delete this.observers[a],this.observerCount-=1,0===this.observerCount&& void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let b=0;b<this.observers.length;b++)this.sendOne(b,a)}sendOne(a,b){this.task.then(()=>{if(void 0!==this.observers&& void 0!==this.observers[a])try{b(this.observers[a])}catch(c){"undefined"!=typeof console&&console.error&&console.error(c)}})}close(a){!this.finalized&&(this.finalized=!0,void 0!==a&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q(a,b){if("object"!=typeof a||null===a)return!1;for(let c of b)if(c in a&&"function"==typeof a[c])return!0;return!1}function R(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function S(a){return a&&a._delegate?a._delegate:a}},15503:function(a,b,c){c.d(b,{ZF:function(){return d.ZF}});var d=c(25816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,d.KN)("firebase","9.12.1","app")},17702:function(a,b,c){c.d(b,{Xb:function(){return d.a5},v0:function(){return d.n},LS:function(){return d.a0},e5:function(){return d.a6},w7:function(){return d.y},ck:function(){return d.af}});var d=c(41352);c(74444),c(25816),c(53333),c(8463)},25816:function(a,b,c){c.d(b,{Jn:function(){return K},qX:function(){return H},Xd:function(){return G},Mq:function(){return M},ZF:function(){return L},KN:function(){return N}});var d,e=c(8463),f=c(53333),g=c(74444);let h=(a,b)=>b.some(b=>a instanceof b),i,j,k=new WeakMap,l=new WeakMap,m=new WeakMap,n=new WeakMap,o=new WeakMap,p={get(a,b,c){if(a instanceof IDBTransaction){if("done"===b)return l.get(a);if("objectStoreNames"===b)return a.objectStoreNames||m.get(a);if("store"===b)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return q(a[b])},set(a,b,c){return a[b]=c,!0},has(a,b){return a instanceof IDBTransaction&&("done"===b||"store"===b)||b in a}};function q(a){if(a instanceof IDBRequest)return function(a){let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("success",e),a.removeEventListener("error",f)},e=()=>{b(q(a.result)),d()},f=()=>{c(a.error),d()};a.addEventListener("success",e),a.addEventListener("error",f)});return b.then(b=>{b instanceof IDBCursor&&k.set(b,a)}).catch(()=>{}),o.set(b,a),b}(a);if(n.has(a))return n.get(a);let b=function(a){if("function"==typeof a){var b;return(b=a)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(j||(j=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(b)?function(...a){return b.apply(r(this),a),q(k.get(this))}:function(...a){return q(b.apply(r(this),a))}:function(a,...c){let d=b.call(r(this),a,...c);return m.set(d,a.sort?a.sort():[a]),q(d)}}return(a instanceof IDBTransaction&&function(a){if(l.has(a))return;let b=new Promise((b,c)=>{let d=()=>{a.removeEventListener("complete",e),a.removeEventListener("error",f),a.removeEventListener("abort",f)},e=()=>{b(),d()},f=()=>{c(a.error||new DOMException("AbortError","AbortError")),d()};a.addEventListener("complete",e),a.addEventListener("error",f),a.addEventListener("abort",f)});l.set(a,b)}(a),h(a,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(a,p):a}(a);return b!==a&&(n.set(a,b),o.set(b,a)),b}let r=a=>o.get(a),s=["get","getKey","getAll","getAllKeys","count"],t=["put","add","delete","clear"],u=new Map;function v(a,b){if(!(a instanceof IDBDatabase&&!(b in a)&&"string"==typeof b))return;if(u.get(b))return u.get(b);let c=b.replace(/FromIndex$/,""),d=b!==c,e=t.includes(c);if(!(c in(d?IDBIndex:IDBObjectStore).prototype)||!(e||s.includes(c)))return;let f=async function(a,...b){let f=this.transaction(a,e?"readwrite":"readonly"),g=f.store;return d&&(g=g.index(b.shift())),(await Promise.all([g[c](...b),e&&f.done,]))[0]};return u.set(b,f),f}!function(a){p=a(p)}(a=>({...a,get:(b,c,d)=>v(b,c)||a.get(b,c,d),has:(b,c)=>!!v(b,c)||a.has(b,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w{constructor(a){this.container=a}getPlatformInfoString(){let a=this.container.getProviders();return a.map(a=>{if(!x(a))return null;{let b=a.getImmediate();return`${b.library}/${b.version}`}}).filter(a=>a).join(" ")}}function x(a){let b=a.getComponent();return(null==b?void 0:b.type)==="VERSION"}let y="@firebase/app",z="0.8.2",A=new f.Yd("@firebase/app"),B="[DEFAULT]",C={[y]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},D=new Map,E=new Map;function F(a,b){try{a.container.addComponent(b)}catch(c){A.debug(`Component ${b.name} failed to register with FirebaseApp ${a.name}`,c)}}function G(a){let b=a.name;if(E.has(b))return A.debug(`There were multiple attempts to register component ${b}.`),!1;for(let c of(E.set(b,a),D.values()))F(c,a);return!0}function H(a,b){let c=a.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),a.container.getProvider(b)}let I=new g.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J{constructor(a,b,c){this._isDeleted=!1,this._options=Object.assign({},a),this._config=Object.assign({},b),this._name=b.name,this._automaticDataCollectionEnabled=b.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new e.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ let K="9.12.1";function L(a,b={}){let c=a;if("object"!=typeof b){let d=b;b={name:d}}let f=Object.assign({name:B,automaticDataCollectionEnabled:!1},b),h=f.name;if("string"!=typeof h||!h)throw I.create("bad-app-name",{appName:String(h)});if(c||(c=(0,g.aH)()),!c)throw I.create("no-options");let i=D.get(h);if(i){if((0,g.vZ)(c,i.options)&&(0,g.vZ)(f,i.config))return i;throw I.create("duplicate-app",{appName:h})}let j=new e.H0(h);for(let k of E.values())j.addComponent(k);let l=new J(c,f,j);return D.set(h,l),l}function M(a=B){let b=D.get(a);if(!b&&a===B)return L();if(!b)throw I.create("no-app",{appName:a});return b}function N(a,b,c){var d;let f=null!==(d=C[a])&& void 0!==d?d:a;c&&(f+=`-${c}`);let g=f.match(/\s|\//),h=b.match(/\s|\//);if(g||h){let i=[`Unable to register library "${f}" with version "${b}":`];g&&i.push(`library name "${f}" contains illegal characters (whitespace or "/")`),g&&h&&i.push("and"),h&&i.push(`version name "${b}" contains illegal characters (whitespace or "/")`),A.warn(i.join(" "));return}G(new e.wA(`${f}-version`,()=>({library:f,version:b}),"VERSION"))}let O="firebase-heartbeat-store",P=null;function Q(){return P||(P=(function(a,b,{blocked:c,upgrade:d,blocking:e,terminated:f}={}){let g=indexedDB.open(a,1),h=q(g);return d&&g.addEventListener("upgradeneeded",a=>{d(q(g.result),a.oldVersion,a.newVersion,q(g.transaction))}),c&&g.addEventListener("blocked",()=>c()),h.then(a=>{f&&a.addEventListener("close",()=>f()),e&&a.addEventListener("versionchange",()=>e())}).catch(()=>{}),h})("firebase-heartbeat-database",1,{upgrade:(a,b)=>{0===b&&a.createObjectStore(O)}}).catch(a=>{throw I.create("idb-open",{originalErrorMessage:a.message})})),P}async function R(a){var b;try{let c=await Q();return c.transaction(O).objectStore(O).get(T(a))}catch(d){if(d instanceof g.ZR)A.warn(d.message);else{let e=I.create("idb-get",{originalErrorMessage:null===(b=d)|| void 0===b?void 0:b.message});A.warn(e.message)}}}async function S(a,b){var c;try{let d=await Q(),e=d.transaction(O,"readwrite"),f=e.objectStore(O);return await f.put(b,T(a)),e.done}catch(h){if(h instanceof g.ZR)A.warn(h.message);else{let i=I.create("idb-set",{originalErrorMessage:null===(c=h)|| void 0===c?void 0:c.message});A.warn(i.message)}}}function T(a){return`${a.name}!${a.options.appId}`}class U{constructor(a){this.container=a,this._heartbeatsCache=null;let b=this.container.getProvider("app").getImmediate();this._storage=new X(b),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){let a=this.container.getProvider("platform-logger").getImmediate(),b=a.getPlatformInfoString(),c=V();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(a=>a.date===c))?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:b}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let b=new Date(a.date).valueOf(),c=Date.now();return c-b<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let a=V(),{heartbeatsToSend:b,unsentEntries:c}=W(this._heartbeatsCache.heartbeats),d=(0,g.L)(JSON.stringify({version:2,heartbeats:b}));return this._heartbeatsCache.lastSentHeartbeatDate=a,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}}function V(){let a=new Date;return a.toISOString().substring(0,10)}function W(a,b=1024){let c=[],d=a.slice();for(let e of a){let f=c.find(a=>a.agent===e.agent);if(f){if(f.dates.push(e.date),Y(c)>b){f.dates.pop();break}}else if(c.push({agent:e.agent,dates:[e.date]}),Y(c)>b){c.pop();break}d=d.slice(1)}return{heartbeatsToSend:c,unsentEntries:d}}class X{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,g.hl)()&&(0,g.eu)().then(()=>!0).catch(()=>!1)}async read(){let a=await this._canUseIndexedDBPromise;if(!a)return{heartbeats:[]};{let b=await R(this.app);return b||{heartbeats:[]}}}async overwrite(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:a.heartbeats})}}async add(a){var b;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(b=a.lastSentHeartbeatDate)&& void 0!==b?b:d.lastSentHeartbeatDate,heartbeats:[...d.heartbeats,...a.heartbeats]})}}}function Y(a){return(0,g.L)(JSON.stringify({version:2,heartbeats:a})).length}G(new e.wA("platform-logger",a=>new w(a),"PRIVATE")),G(new e.wA("heartbeat",a=>new U(a),"PRIVATE")),N(y,z,""),N(y,z,"esm2017"),N("fire-js","")},8463:function(a,b,c){c.d(b,{H0:function(){return j},wA:function(){return e}});var d=c(74444);class e{constructor(a,b,c){this.name=a,this.instanceFactory=b,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let f="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class g{constructor(a,b){this.name=a,this.container=b,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){let b=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(b)){let c=new d.BH;if(this.instancesDeferred.set(b,c),this.isInitialized(b)||this.shouldAutoInitialize())try{let e=this.getOrInitializeService({instanceIdentifier:b});e&&c.resolve(e)}catch(f){}}return this.instancesDeferred.get(b).promise}getImmediate(a){var b;let c=this.normalizeInstanceIdentifier(null==a?void 0:a.identifier),d=null!==(b=null==a?void 0:a.optional)&& void 0!==b&&b;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(e){if(d)return null;throw e}else{if(d)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,this.shouldAutoInitialize()){if(i(a))try{this.getOrInitializeService({instanceIdentifier:f})}catch(b){}for(let[c,d]of this.instancesDeferred.entries()){let e=this.normalizeInstanceIdentifier(c);try{let g=this.getOrInitializeService({instanceIdentifier:e});d.resolve(g)}catch(h){}}}}clearInstance(a=f){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){let a=Array.from(this.instances.values());await Promise.all([...a.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...a.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return null!=this.component}isInitialized(a=f){return this.instances.has(a)}getOptions(a=f){return this.instancesOptions.get(a)||{}}initialize(a={}){let{options:b={}}=a,c=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let d=this.getOrInitializeService({instanceIdentifier:c,options:b});for(let[e,f]of this.instancesDeferred.entries()){let g=this.normalizeInstanceIdentifier(e);c===g&&f.resolve(d)}return d}onInit(a,b){var c;let d=this.normalizeInstanceIdentifier(b),e=null!==(c=this.onInitCallbacks.get(d))&& void 0!==c?c:new Set;e.add(a),this.onInitCallbacks.set(d,e);let f=this.instances.get(d);return f&&a(f,d),()=>{e.delete(a)}}invokeOnInitCallbacks(a,b){let c=this.onInitCallbacks.get(b);if(c)for(let d of c)try{d(a,b)}catch(e){}}getOrInitializeService({instanceIdentifier:a,options:b={}}){let c=this.instances.get(a);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:h(a),options:b}),this.instances.set(a,c),this.instancesOptions.set(a,b),this.invokeOnInitCallbacks(c,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,c)}catch(d){}return c||null}normalizeInstanceIdentifier(a=f){return this.component?this.component.multipleInstances?a:f:a}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function h(a){return a===f?void 0:a}function i(a){return"EAGER"===a.instantiationMode}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class j{constructor(a){this.name=a,this.providers=new Map}addComponent(a){let b=this.getProvider(a.name);if(b.isComponentSet())throw Error(`Component ${a.name} has already been registered with ${this.name}`);b.setComponent(a)}addOrOverwriteComponent(a){let b=this.getProvider(a.name);b.isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);let b=new g(a,this);return this.providers.set(a,b),b}getProviders(){return Array.from(this.providers.values())}}},53333:function(a,b,c){var d,e;c.d(b,{Yd:function(){return j},in:function(){return d}});(e=d||(d={}))[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";let f={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},g=d.INFO,h={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},i=(a,b,...c)=>{if(b<a.logLevel)return;let d=new Date().toISOString(),e=h[b];if(e)console[e](`[${d}]  ${a.name}:`,...c);else throw Error(`Attempted to log a message with an invalid logType (value: ${b})`)};class j{constructor(a){this.name=a,this._logLevel=g,this._logHandler=i,this._userLogHandler=null,[].push(this)}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in d))throw TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel="string"==typeof a?f[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if("function"!=typeof a)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...a),this._logHandler(this,d.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...a),this._logHandler(this,d.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,d.INFO,...a),this._logHandler(this,d.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,d.WARN,...a),this._logHandler(this,d.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...a),this._logHandler(this,d.ERROR,...a)}}}}])