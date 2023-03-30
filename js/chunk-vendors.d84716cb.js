(self["webpackChunkkino_cms"]=self["webpackChunkkino_cms"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),s=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(s(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),s=String,i=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw i("Can't set "+s(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),s=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw s("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),s=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(s(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),s=n(1400),i=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=i(c),l=s(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),s=n(3157),i=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(s(e)&&!o(e,"length").writable)throw i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),s=r({}.toString),i=r("".slice);e.exports=function(e){return i(s(e),8,-1)}},648:function(e,t,n){var r=n(1694),s=n(614),i=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?i(t):"Object"==(r=i(t))&&s(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),s=n(3887),i=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=s(t),c=o.f,u=i.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var r=n(9781),s=n(3070),i=n(9114);e.exports=r?function(e,t,n){return s.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),s=n(3070),i=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&i(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:s.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),s=Object.defineProperty;e.exports=function(e,t){try{s(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),s=TypeError;e.exports=function(e,t){if(!delete e[t])throw s("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),s=n(111),i=r.document,o=s(i)&&s(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,s,i=n(7854),o=n(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),e.exports=s},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),s=Error,i=r("".replace),o=function(e){return String(s(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!s.prepareStackTrace)while(t--)e=i(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),s=n(1236).f,i=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,f,d,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(d=t[h],e.dontCallGetSet?(p=s(l,h),f=p&&p.value):f=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(e.sham||f&&f.sham)&&i(d,"sham",!0),o(l,h,d,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),s=Function.prototype.call;e.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(e,t,n){var r=n(9781),s=n(2597),i=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=s(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),s=Function.prototype,i=s.call,o=r&&s.bind.bind(i,i);e.exports=r?o:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),s=n(614),i=function(e){return s(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),s=n(8554);e.exports=function(e,t){var n=e[t];return s(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),s=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(s(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),s=n(7293),i=n(317);e.exports=!r&&!s((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),s=n(7293),i=n(4326),o=Object,a=r("".split);e.exports=s((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),s=n(111),i=n(7674);e.exports=function(e,t,n){var o,a;return i&&r(o=t.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&i(e,a),e}},2788:function(e,t,n){var r=n(1702),s=n(614),i=n(5465),o=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(e){return o(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,s,i,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return i(e)?s(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=s(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var _=h.state||(h.state=new g);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw m(p);return t.facade=e,_.set(e,t),t},s=function(e){return _.get(e)||{}},i=function(e){return _.has(e)}}else{var b=f("state");d[b]=!0,r=function(e,t){if(l(e,b))throw m(p);return t.facade=e,u(e,b,t),t},s=function(e){return l(e,b)?e[b]:{}},i=function(e){return l(e,b)}}e.exports={set:r,get:s,has:i,enforce:y,getterFor:v}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),s=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===s}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),s=n(614),i=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(s(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),s=n(4154),i=s.all;e.exports=s.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),s=n(614),i=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return s(t)&&i(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),s=n(614),i=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,f=Object.defineProperty,d=o&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||a&&e.name!==t)&&(o?f(e,"name",{value:t,configurable:!0}):e.name=t),d&&n&&i(n,"arity")&&e.length!==n.arity&&f(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?o&&f(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(s){}var r=l(e);return i(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return s(this)&&h(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),s=n(4664),i=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";t.f=r?i?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=l(e,t);r&&r[d]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),s)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),s=n(6916),i=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!s(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),s=n(748),i=s.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),s=n(2597),i=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,l=[];for(n in r)!s(a,n)&&s(r,n)&&c(l,n);while(t.length>u)s(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),s=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return s(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),s=n(614),i=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&s(n=e.toString)&&!i(a=r(n,e)))return a;if(s(n=e.valueOf)&&!i(a=r(n,e)))return a;if("string"!==t&&s(n=e.toString)&&!i(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),s=n(1702),i=n(8006),o=n(5181),a=n(9670),c=s([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),s=TypeError;e.exports=function(e){if(r(e))throw s("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),s=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=s(e))}},5465:function(e,t,n){var r=n(7854),s=n(3072),i="__core-js_shared__",o=r[i]||s(i,{});e.exports=o},2309:function(e,t,n){var r=n(1913),s=n(5465);(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),s=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!s((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),s=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?s(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),s=n(4488);e.exports=function(e){return r(s(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),s=Math.min;e.exports=function(e){return e>0?s(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),s=Object;e.exports=function(e){return s(r(e))}},7593:function(e,t,n){var r=n(6916),s=n(111),i=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!s(e)||i(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!s(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),s=n(2190);e.exports=function(e){var t=r(e,"string");return s(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),s=r("toStringTag"),i={};i[s]="z",e.exports="[object z]"===String(i)},1340:function(e,t,n){var r=n(648),s=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),s=0,i=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++s+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),s=n(7293);e.exports=r&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),s=n(614),i=r.WeakMap;e.exports=s(i)&&/native code/.test(String(i))},5112:function(e,t,n){var r=n(7854),s=n(2309),i=n(2597),o=n(9711),a=n(6293),c=n(3307),u=s("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!i(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&i(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):f(t)}return u[e]}},7658:function(e,t,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(e){var t=s(this),n=i(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(e){var t=s(this),n=i(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),s=n(7854),i=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),f=n(3678),d=n(1060),p=n(9781),m=n(1913),g="DOMException",y=i("Error"),v=i(g),_=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),s=y(t);return s.name=g,a(r,"stack",o(1,d(s.stack,1))),l(r,this,_),r},b=_.prototype=v.prototype,w="stack"in y(g),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(s,g),I=!!T&&!(T.writable&&T.configurable),k=w&&!I&&!E;r({global:!0,constructor:!0,forced:m||k},{DOMException:k?_:v});var S=i(g),C=S.prototype;if(C.constructor!==S)for(var N in m||a(C,"constructor",o(1,S)),f)if(c(f,N)){var A=f[N],R=A.s;c(S,R)||a(S,R,o(6,A.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return S},L:function(){return a},LL:function(){return R},P0:function(){return T},Pz:function(){return k},Sg:function(){return C},UG:function(){return h},ZR:function(){return A},aH:function(){return I},b$:function(){return d},eu:function(){return g},hl:function(){return m},m9:function(){return H},ne:function(){return V},pd:function(){return U},q4:function(){return E},ru:function(){return f},tV:function(){return c},uI:function(){return l},vZ:function(){return D},w1:function(){return p},xO:function(){return M},xb:function(){return x},z$:function(){return u},zd:function(){return F}});n(2801),n(7658);
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const u=s<e.length,l=u?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return i.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function f(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){try{return"object"===typeof indexedDB}catch(e){return!1}}function g(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function y(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const v=()=>y().__FIREBASE_DEFAULTS__,_=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},b=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},w=()=>{try{return v()||_()||b()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},E=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},T=e=>{const t=E(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},I=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},k=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function C(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
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
 */const N="FirebaseError";class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=N,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?O(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new A(r,o,n);return a}}function O(e,t){return e.replace(L,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
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
 */function x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(P(n)&&P(i)){if(!D(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function P(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function M(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function F(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function V(e,t){const n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=$(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
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
 */
/**
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
 */
function H(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{$y:function(){return De},B:function(){return o},BK:function(){return et},Bj:function(){return i},EB:function(){return u},Fl:function(){return it},IU:function(){return Fe},Jd:function(){return N},OT:function(){return Re},PG:function(){return xe},SU:function(){return Je},Um:function(){return Ae},Vh:function(){return nt},WL:function(){return Xe},X$:function(){return L},X3:function(){return Me},XI:function(){return We},Xl:function(){return Ue},YS:function(){return Oe},ZM:function(){return Ze},cE:function(){return I},dq:function(){return He},iH:function(){return qe},j:function(){return R},lk:function(){return A},nZ:function(){return c},oR:function(){return ze},qj:function(){return Ne},qq:function(){return E},sT:function(){return k},yT:function(){return Pe}});n(7658);var r=n(7139);let s;class i{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=s,!e&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(e){if(this.active){const t=s;try{return s=this,e()}finally{s=t}}else 0}on(){s=this}off(){s=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function o(e){return new i(e)}function a(e,t=s){t&&t.active&&t.effects.push(e)}function c(){return s}function u(e){s&&s.cleanups.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},h=e=>(e.w&y)>0,f=e=>(e.n&y)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=y},p=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];h(s)&&!f(s)?s.delete(e):t[n++]=s,s.w&=~y,s.n&=~y}t.length=n}},m=new WeakMap;let g=0,y=1;const v=30;let _;const b=Symbol(""),w=Symbol("");class E{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=_,t=S;while(e){if(e===this)return;e=e.parent}try{return this.parent=_,_=this,S=!0,y=1<<++g,g<=v?d(this):T(this),this.fn()}finally{g<=v&&p(this),y=1<<--g,_=this.parent,S=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_===this?this.deferStop=!0:this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function I(e,t){e.effect&&(e=e.effect.fn);const n=new E(e);t&&((0,r.l7)(n,t),t.scope&&a(n,t.scope)),t&&t.lazy||n.run();const s=n.run.bind(n);return s.effect=n,s}function k(e){e.effect.stop()}let S=!0;const C=[];function N(){C.push(S),S=!1}function A(){const e=C.pop();S=void 0===e||e}function R(e,t,n){if(S&&_){let t=m.get(e);t||m.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=l());const s=void 0;O(r,s)}}function O(e,t){let n=!1;g<=v?f(e)||(e.n|=y,n=!h(e)):n=!e.has(_),n&&(e.add(_),_.deps.push(e))}function L(e,t,n,s,i,o){const a=m.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(s);a.forEach(((t,n)=>{("length"===n||n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(b)),(0,r._N)(e)&&c.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(b)),(0,r._N)(e)&&c.push(a.get(w)));break;case"set":(0,r._N)(e)&&c.push(a.get(b));break}if(1===c.length)c[0]&&x(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);x(l(e))}}function x(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&D(r,t);for(const r of n)r.computed||D(r,t)}function D(e,t){(e!==_||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),M=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),F=H(),U=H(!1,!0),V=H(!0),j=H(!0,!0),$=B();function B(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Fe(this);for(let t=0,s=this.length;t<s;t++)R(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Fe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){N();const n=Fe(this)[t].apply(this,e);return A(),n}})),e}function H(e=!1,t=!1){return function(n,s,i){if("__v_isReactive"===s)return!e;if("__v_isReadonly"===s)return e;if("__v_isShallow"===s)return t;if("__v_raw"===s&&i===(e?t?ke:Ie:t?Te:Ee).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)($,s))return Reflect.get($,s,i);const a=Reflect.get(n,s,i);return((0,r.yk)(s)?M.has(s):P(s))?a:(e||R(n,"get",s),t?a:He(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?e?Re(a):Ne(a):a)}}const q=G(),W=G(!0);function G(e=!1){return function(t,n,s,i){let o=t[n];if(De(o)&&He(o)&&!He(s))return!1;if(!e&&(Pe(s)||De(s)||(o=Fe(o),s=Fe(s)),!(0,r.kJ)(t)&&He(o)&&!He(s)))return o.value=s,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,s,i);return t===Fe(i)&&(a?(0,r.aU)(s,o)&&L(t,"set",n,s,o):L(t,"add",n,s)),c}}function K(e,t){const n=(0,r.RI)(e,t),s=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&L(e,"delete",t,void 0,s),i}function z(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&M.has(t)||R(e,"has",t),n}function J(e){return R(e,"iterate",(0,r.kJ)(e)?"length":b),Reflect.ownKeys(e)}const Y={get:F,set:q,deleteProperty:K,has:z,ownKeys:J},X={get:V,set(e,t){return!0},deleteProperty(e,t){return!0}},Q=(0,r.l7)({},Y,{get:U,set:W}),Z=(0,r.l7)({},X,{get:j}),ee=e=>e,te=e=>Reflect.getPrototypeOf(e);function ne(e,t,n=!1,r=!1){e=e["__v_raw"];const s=Fe(e),i=Fe(t);n||(t!==i&&R(s,"get",t),R(s,"get",i));const{has:o}=te(s),a=r?ee:n?je:Ve;return o.call(s,t)?a(e.get(t)):o.call(s,i)?a(e.get(i)):void(e!==s&&e.get(t))}function re(e,t=!1){const n=this["__v_raw"],r=Fe(n),s=Fe(e);return t||(e!==s&&R(r,"has",e),R(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function se(e,t=!1){return e=e["__v_raw"],!t&&R(Fe(e),"iterate",b),Reflect.get(e,"size",e)}function ie(e){e=Fe(e);const t=Fe(this),n=te(t),r=n.has.call(t,e);return r||(t.add(e),L(t,"add",e,e)),this}function oe(e,t){t=Fe(t);const n=Fe(this),{has:s,get:i}=te(n);let o=s.call(n,e);o||(e=Fe(e),o=s.call(n,e));const a=i.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&L(n,"set",e,t,a):L(n,"add",e,t),this}function ae(e){const t=Fe(this),{has:n,get:r}=te(t);let s=n.call(t,e);s||(e=Fe(e),s=n.call(t,e));const i=r?r.call(t,e):void 0,o=t.delete(e);return s&&L(t,"delete",e,void 0,i),o}function ce(){const e=Fe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&L(e,"clear",void 0,void 0,n),r}function ue(e,t){return function(n,r){const s=this,i=s["__v_raw"],o=Fe(i),a=t?ee:e?je:Ve;return!e&&R(o,"iterate",b),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function le(e,t,n){return function(...s){const i=this["__v_raw"],o=Fe(i),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...s),h=n?ee:t?je:Ve;return!t&&R(o,"iterate",u?w:b),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function he(e){return function(...t){return"delete"!==e&&this}}function fe(){const e={get(e){return ne(this,e)},get size(){return se(this)},has:re,add:ie,set:oe,delete:ae,clear:ce,forEach:ue(!1,!1)},t={get(e){return ne(this,e,!1,!0)},get size(){return se(this)},has:re,add:ie,set:oe,delete:ae,clear:ce,forEach:ue(!1,!0)},n={get(e){return ne(this,e,!0)},get size(){return se(this,!0)},has(e){return re.call(this,e,!0)},add:he("add"),set:he("set"),delete:he("delete"),clear:he("clear"),forEach:ue(!0,!1)},r={get(e){return ne(this,e,!0,!0)},get size(){return se(this,!0)},has(e){return re.call(this,e,!0)},add:he("add"),set:he("set"),delete:he("delete"),clear:he("clear"),forEach:ue(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{e[s]=le(s,!1,!1),n[s]=le(s,!0,!1),t[s]=le(s,!1,!0),r[s]=le(s,!0,!0)})),[e,n,t,r]}const[de,pe,me,ge]=fe();function ye(e,t){const n=t?e?ge:me:e?pe:de;return(t,s,i)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get((0,r.RI)(n,s)&&s in t?n:t,s,i)}const ve={get:ye(!1,!1)},_e={get:ye(!1,!0)},be={get:ye(!0,!1)},we={get:ye(!0,!0)};const Ee=new WeakMap,Te=new WeakMap,Ie=new WeakMap,ke=new WeakMap;function Se(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ce(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Se((0,r.W7)(e))}function Ne(e){return De(e)?e:Le(e,!1,Y,ve,Ee)}function Ae(e){return Le(e,!1,Q,_e,Te)}function Re(e){return Le(e,!0,X,be,Ie)}function Oe(e){return Le(e,!0,Z,we,ke)}function Le(e,t,n,s,i){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=i.get(e);if(o)return o;const a=Ce(e);if(0===a)return e;const c=new Proxy(e,2===a?s:n);return i.set(e,c),c}function xe(e){return De(e)?xe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function De(e){return!(!e||!e["__v_isReadonly"])}function Pe(e){return!(!e||!e["__v_isShallow"])}function Me(e){return xe(e)||De(e)}function Fe(e){const t=e&&e["__v_raw"];return t?Fe(t):e}function Ue(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ve=e=>(0,r.Kn)(e)?Ne(e):e,je=e=>(0,r.Kn)(e)?Re(e):e;function $e(e){S&&_&&(e=Fe(e),O(e.dep||(e.dep=l())))}function Be(e,t){e=Fe(e),e.dep&&x(e.dep)}function He(e){return!(!e||!0!==e.__v_isRef)}function qe(e){return Ge(e,!1)}function We(e){return Ge(e,!0)}function Ge(e,t){return He(e)?e:new Ke(e,t)}class Ke{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Fe(e),this._value=t?e:Ve(e)}get value(){return $e(this),this._value}set value(e){const t=this.__v_isShallow||Pe(e)||De(e);e=t?e:Fe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ve(e),Be(this,e))}}function ze(e){Be(e,void 0)}function Je(e){return He(e)?e.value:e}const Ye={get:(e,t,n)=>Je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Xe(e){return xe(e)?e:new Proxy(e,Ye)}class Qe{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>$e(this)),(()=>Be(this)));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Ze(e){return new Qe(e)}function et(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=nt(e,n);return t}class tt{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function nt(e,t,n){const r=e[t];return He(r)?r:new tt(e,t,n)}var rt;class st{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[rt]=!1,this._dirty=!0,this.effect=new E(e,(()=>{this._dirty||(this._dirty=!0,Be(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Fe(this);return $e(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function it(e,t,n=!1){let s,i;const o=(0,r.mf)(e);o?(s=e,i=r.dG):(s=e.get,i=e.set);const a=new st(s,i,o||!i,n);return a}rt="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return a},$y:function(){return r.$y},Ah:function(){return Xe},B:function(){return r.B},BK:function(){return r.BK},Bj:function(){return r.Bj},Bz:function(){return Cr},C3:function(){return jn},C_:function(){return s.C_},Cn:function(){return $},EB:function(){return r.EB},Eo:function(){return ln},F4:function(){return Kn},FN:function(){return ar},Fl:function(){return kr},G:function(){return qr},HX:function(){return B},HY:function(){return In},Ho:function(){return zn},IU:function(){return r.IU},JJ:function(){return ue},Jd:function(){return Ye},KU:function(){return o},Ko:function(){return ft},LL:function(){return ct},MW:function(){return Sr},MX:function(){return jr},Mr:function(){return Vr},Nv:function(){return dt},OT:function(){return r.OT},Ob:function(){return Me},P$:function(){return Te},PG:function(){return r.PG},Q2:function(){return ut},Q6:function(){return Ae},RC:function(){return Le},Rh:function(){return fe},Rr:function(){return Rr},S3:function(){return c},SU:function(){return r.SU},U2:function(){return ke},Uc:function(){return Fr},Uk:function(){return Jn},Um:function(){return r.Um},Us:function(){return un},Vh:function(){return r.Vh},WI:function(){return pt},WL:function(){return r.WL},WY:function(){return Nr},Wm:function(){return Wn},X3:function(){return r.X3},XI:function(){return r.XI},Xl:function(){return r.Xl},Xn:function(){return ze},Y1:function(){return yr},Y3:function(){return _},Y8:function(){return be},YP:function(){return me},YS:function(){return r.YS},Yq:function(){return Ze},ZK:function(){return i},ZM:function(){return r.ZM},Zq:function(){return Ur},_:function(){return qn},_A:function(){return s._A},aZ:function(){return Re},b9:function(){return Ar},bT:function(){return et},bv:function(){return Ke},cE:function(){return r.cE},d1:function(){return tt},dD:function(){return j},dG:function(){return tr},dl:function(){return Ue},dq:function(){return r.dq},ec:function(){return x},eq:function(){return Wr},f3:function(){return le},h:function(){return Mr},hR:function(){return s.hR},i8:function(){return Br},iD:function(){return Mn},iH:function(){return r.iH},ic:function(){return Je},j4:function(){return Fn},j5:function(){return s.j5},kC:function(){return s.kC},kq:function(){return Xn},l1:function(){return Or},lA:function(){return Un},lR:function(){return En},m0:function(){return he},mW:function(){return R},mv:function(){return Pr},mx:function(){return gt},n4:function(){return Z},nK:function(){return Ne},nQ:function(){return $r},nZ:function(){return r.nZ},oR:function(){return r.oR},of:function(){return vr},p1:function(){return Dr},qG:function(){return Cn},qZ:function(){return Dn},qb:function(){return I},qj:function(){return r.qj},qq:function(){return r.qq},ry:function(){return Gr},sT:function(){return r.sT},se:function(){return Ve},sv:function(){return Sn},uE:function(){return Yn},u_:function(){return xr},up:function(){return ot},vl:function(){return Qe},vs:function(){return s.vs},w5:function(){return H},wF:function(){return Ge},wg:function(){return Rn},wy:function(){return nt},xv:function(){return kn},yT:function(){return r.yT},yX:function(){return de},zw:function(){return s.zw}});n(7658),n(541);var r=n(4870),s=n(7139);function i(e,...t){}function o(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){c(i,t,n)}return s}function a(e,t,n,r){if((0,s.mf)(e)){const i=o(e,t,n,r);return i&&(0,s.tI)(i)&&i.catch((e=>{c(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(a(e[s],t,n,r));return i}function c(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const s=t.proxy,i=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,i))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,s,i])}u(e,n,s,r)}function u(e,t,n,r=!0){console.error(e)}let l=!1,h=!1;const f=[];let d=0;const p=[];let m=null,g=0;const y=Promise.resolve();let v=null;function _(e){const t=v||y;return e?t.then(this?e.bind(this):e):t}function b(e){let t=d+1,n=f.length;while(t<n){const r=t+n>>>1,s=C(f[r]);s<e?t=r+1:n=r}return t}function w(e){f.length&&f.includes(e,l&&e.allowRecurse?d+1:d)||(null==e.id?f.push(e):f.splice(b(e.id),0,e),E())}function E(){l||h||(h=!0,v=y.then(A))}function T(e){const t=f.indexOf(e);t>d&&f.splice(t,1)}function I(e){(0,s.kJ)(e)?p.push(...e):m&&m.includes(e,e.allowRecurse?g+1:g)||p.push(e),E()}function k(e,t=(l?d+1:0)){for(0;t<f.length;t++){const e=f[t];e&&e.pre&&(f.splice(t,1),t--,e())}}function S(e){if(p.length){const e=[...new Set(p)];if(p.length=0,m)return void m.push(...e);for(m=e,m.sort(((e,t)=>C(e)-C(t))),g=0;g<m.length;g++)m[g]();m=null,g=0}}const C=e=>null==e.id?1/0:e.id,N=(e,t)=>{const n=C(e)-C(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){h=!1,l=!0,f.sort(N);s.dG;try{for(d=0;d<f.length;d++){const e=f[d];e&&!1!==e.active&&o(e,null,14)}}finally{d=0,f.length=0,S(e),l=!1,v=null,(f.length||p.length)&&A(e)}}new Set;new Map;let R,O=[],L=!1;function x(e,t){var n,r;if(R=e,R)R.enabled=!0,O.forEach((({event:e,args:t})=>R.emit(e,...t))),O=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null===(r=null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||void 0===r?void 0:r.includes("jsdom"))){const e=t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[];e.push((e=>{x(e,t)})),setTimeout((()=>{R||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,L=!0,O=[])}),3e3)}else L=!0,O=[]}function D(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||s.kT;let i=n;const o=t.startsWith("update:"),c=o&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||s.kT;o&&(i=n.map((e=>(0,s.HD)(e)?e.trim():e))),t&&(i=n.map(s.He))}let u;let l=r[u=(0,s.hR)(t)]||r[u=(0,s.hR)((0,s._A)(t))];!l&&o&&(l=r[u=(0,s.hR)((0,s.rs)(t))]),l&&a(l,e,6,i);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,a(h,e,6,i)}}function P(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const o=e.emits;let a={},c=!1;if(!(0,s.mf)(e)){const r=e=>{const n=P(e,t,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((e=>a[e]=null)):(0,s.l7)(a,o),(0,s.Kn)(e)&&r.set(e,a),a):((0,s.Kn)(e)&&r.set(e,null),null)}function M(e,t){return!(!e||!(0,s.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,s.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,s.RI)(e,(0,s.rs)(t))||(0,s.RI)(e,t))}let F=null,U=null;function V(e){const t=F;return F=e,U=e&&e.type.__scopeId||null,t}function j(e){U=e}function $(){U=null}const B=e=>H;function H(e,t=F,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Dn(-1);const s=V(t);let i;try{i=e(...n)}finally{V(s),r._d&&Dn(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function q(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[a],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,_;const b=V(e);try{if(4&n.shapeFlag){const e=i||r;v=Qn(f.call(e,e,d,o,m,p,g)),_=l}else{const e=t;0,v=Qn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),_=t.props?l:G(l)}}catch(E){Nn.length=0,c(E,e,1),v=Wn(Sn)}let w=v;if(_&&!1!==y){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(a&&e.some(s.tR)&&(_=K(_,a)),w=zn(w,_))}return n.dirs&&(w=zn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,V(b),v}function W(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!Un(r))return;if(r.type!==Sn||"v-if"===r.children){if(t)return;t=r}}return t}const G=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,s.F7)(n))&&((t||(t={}))[n]=e[n]);return t},K=(e,t)=>{const n={};for(const r in e)(0,s.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function z(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||J(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?J(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function J(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!M(n,i))return!0}return!1}function Y({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const X=e=>e.__isSuspense,Q={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,i,o,a,c,u){null==e?te(t,n,r,s,i,o,a,c,u):ne(e,t,n,r,s,o,a,c,u)},hydrate:se,create:re,normalize:ie},Z=Q;function ee(e,t){const n=e.props&&e.props[t];(0,s.mf)(n)&&n()}function te(e,t,n,r,s,i,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),f=e.suspense=re(e,s,r,t,h,n,i,o,a,c);u(null,f.pendingBranch=e.ssContent,h,null,r,f,i,o),f.deps>0?(ee(e,"onPending"),ee(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,i,o),ce(f,e.ssFallback)):f.resolve()}function ne(e,t,n,r,s,i,o,a,{p:c,um:u,o:{createElement:l}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const f=t.ssContent,d=t.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:g,isHydrating:y}=h;if(m)h.pendingBranch=f,Vn(f,m)?(c(m,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():g&&(c(p,d,n,r,s,null,i,o,a),ce(h,d))):(h.pendingId++,y?(h.isHydrating=!1,h.activeBranch=m):u(m,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),g?(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(c(p,d,n,r,s,null,i,o,a),ce(h,d))):p&&Vn(f,p)?(c(p,f,n,r,s,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(p&&Vn(f,p))c(p,f,n,r,s,h,i,o,a),ce(h,f);else if(ee(t,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:e,pendingId:t}=h;e>0?setTimeout((()=>{h.pendingId===t&&h.fallback(d)}),e):0===e&&h.fallback(d)}}function re(e,t,n,r,i,o,a,u,l,h,f=!1){const{p:d,m:p,um:m,n:g,o:{parentNode:y,remove:v}}=h,_=(0,s.He)(e.props&&e.props.timeout),b={vnode:e,parent:t,parentComponent:n,isSVG:a,container:r,hiddenContainer:i,anchor:o,deps:0,pendingId:0,timeout:"number"===typeof _?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:r,pendingId:s,effects:i,parentComponent:o,container:a}=b;if(b.isHydrating)b.isHydrating=!1;else if(!e){const e=n&&r.transition&&"out-in"===r.transition.mode;e&&(n.transition.afterLeave=()=>{s===b.pendingId&&p(r,a,t,0)});let{anchor:t}=b;n&&(t=g(n),m(n,o,b,!0)),e||p(r,a,t,0)}ce(b,r),b.pendingBranch=null,b.isInFallback=!1;let c=b.parent,u=!1;while(c){if(c.pendingBranch){c.effects.push(...i),u=!0;break}c=c.parent}u||I(i),b.effects=[],ee(t,"onResolve")},fallback(e){if(!b.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:s,isSVG:i}=b;ee(t,"onFallback");const o=g(n),a=()=>{b.isInFallback&&(d(null,e,s,o,r,null,i,u,l),ce(b,e))},c=e.transition&&"out-in"===e.transition.mode;c&&(n.transition.afterLeave=a),b.isInFallback=!0,m(n,r,null,!0),c||a()},move(e,t,n){b.activeBranch&&p(b.activeBranch,e,t,n),b.container=e},next(){return b.activeBranch&&g(b.activeBranch)},registerDep(e,t){const n=!!b.pendingBranch;n&&b.deps++;const r=e.vnode.el;e.asyncDep.catch((t=>{c(t,e,0)})).then((s=>{if(e.isUnmounted||b.isUnmounted||b.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:i}=e;gr(e,s,!1),r&&(i.el=r);const o=!r&&e.subTree.el;t(e,i,y(r||e.subTree.el),r?null:g(e.subTree),b,a,l),o&&v(o),Y(e,i.el),n&&0===--b.deps&&b.resolve()}))},unmount(e,t){b.isUnmounted=!0,b.activeBranch&&m(b.activeBranch,n,e,t),b.pendingBranch&&m(b.pendingBranch,n,e,t)}};return b}function se(e,t,n,r,s,i,o,a,c){const u=t.suspense=re(t,r,n,e.parentNode,document.createElement("div"),null,s,i,o,a,!0),l=c(e,u.pendingBranch=t.ssContent,n,u,i,o);return 0===u.deps&&u.resolve(),l}function ie(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=oe(r?n.default:n),e.ssFallback=r?oe(n.fallback):Wn(Sn)}function oe(e){let t;if((0,s.mf)(e)){const n=xn&&e._c;n&&(e._d=!1,Rn()),e=e(),n&&(e._d=!0,t=An,On())}if((0,s.kJ)(e)){const t=W(e);0,e=t}return e=Qn(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function ae(e,t){t&&t.pendingBranch?(0,s.kJ)(e)?t.effects.push(...e):t.effects.push(e):I(e)}function ce(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,s=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=s,Y(r,s))}function ue(e,t){if(or){let n=or.provides;const r=or.parent&&or.parent.provides;r===n&&(n=or.provides=Object.create(r)),n[e]=t}else 0}function le(e,t,n=!1){const r=or||F;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,s.mf)(t)?t.call(r.proxy):t}else 0}function he(e,t){return ge(e,null,t)}function fe(e,t){return ge(e,null,{flush:"post"})}function de(e,t){return ge(e,null,{flush:"sync"})}const pe={};function me(e,t,n){return ge(e,t,n)}function ge(e,t,{immediate:n,deep:i,flush:c,onTrack:u,onTrigger:l}=s.kT){const h=or;let f,d,p=!1,m=!1;if((0,r.dq)(e)?(f=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,i=!0):(0,s.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?_e(e):(0,s.mf)(e)?o(e,h,2):void 0))):f=(0,s.mf)(e)?t?()=>o(e,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),a(e,h,3,[y])}:s.dG,t&&i){const e=f;f=()=>_e(e())}let g,y=e=>{d=E.onStop=()=>{o(e,h,4)}};if(dr){if(y=s.dG,t?n&&a(t,h,3,[f(),m?[]:void 0,y]):f(),"sync"!==c)return s.dG;{const e=Ur();g=e.__watcherHandles||(e.__watcherHandles=[])}}let v=m?new Array(e.length).fill(pe):pe;const _=()=>{if(E.active)if(t){const e=E.run();(i||p||(m?e.some(((e,t)=>(0,s.aU)(e,v[t]))):(0,s.aU)(e,v)))&&(d&&d(),a(t,h,3,[e,v===pe?void 0:m&&v[0]===pe?[]:v,y]),v=e)}else E.run()};let b;_.allowRecurse=!!t,"sync"===c?b=_:"post"===c?b=()=>cn(_,h&&h.suspense):(_.pre=!0,h&&(_.id=h.uid),b=()=>w(_));const E=new r.qq(f,b);t?n?_():v=E.run():"post"===c?cn(E.run.bind(E),h&&h.suspense):E.run();const T=()=>{E.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,E)};return g&&g.push(T),T}function ye(e,t,n){const r=this.proxy,i=(0,s.HD)(e)?e.includes(".")?ve(r,e):()=>r[e]:e.bind(r,r);let o;(0,s.mf)(t)?o=t:(o=t.handler,n=t);const a=or;cr(this);const c=ge(i,o.bind(r),n);return a?cr(a):ur(),c}function ve(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function _e(e,t){if(!(0,s.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))_e(e.value,t);else if((0,s.kJ)(e))for(let n=0;n<e.length;n++)_e(e[n],t);else if((0,s.DM)(e)||(0,s._N)(e))e.forEach((e=>{_e(e,t)}));else if((0,s.PO)(e))for(const n in e)_e(e[n],t);return e}function be(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ke((()=>{e.isMounted=!0})),Ye((()=>{e.isUnmounting=!0})),e}const we=[Function,Array],Ee={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:we,onEnter:we,onAfterEnter:we,onEnterCancelled:we,onBeforeLeave:we,onLeave:we,onAfterLeave:we,onLeaveCancelled:we,onBeforeAppear:we,onAppear:we,onAfterAppear:we,onAppearCancelled:we},setup(e,{slots:t}){const n=ar(),s=be();let i;return()=>{const o=t.default&&Ae(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Sn){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(s.isLeaving)return Se(a);const l=Ce(a);if(!l)return Se(a);const h=ke(l,c,s,n);Ne(l,h);const f=n.subTree,d=f&&Ce(f);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(d&&d.type!==Sn&&(!Vn(l,d)||p)){const e=ke(d,c,s,n);if(Ne(d,e),"out-in"===u)return s.isLeaving=!0,e.afterLeave=()=>{s.isLeaving=!1,!1!==n.update.active&&n.update()},Se(a);"in-out"===u&&l.type!==Sn&&(e.delayLeave=(e,t,n)=>{const r=Ie(s,d);r[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},Te=Ee;function Ie(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ke(e,t,n,r){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:_,onAppearCancelled:b}=t,w=String(e.key),E=Ie(n,e),T=(e,t)=>{e&&a(e,r,9,t)},I=(e,t)=>{const n=t[1];T(e,t),(0,s.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:o,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!i)return;r=y||u}t._leaveCb&&t._leaveCb(!0);const s=E[w];s&&Vn(e,s)&&s.el._leaveCb&&s.el._leaveCb(),T(r,[t])},enter(e){let t=l,r=h,s=f;if(!n.isMounted){if(!i)return;t=v||l,r=_||h,s=b||f}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?s:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?I(t,[e,a]):a()},leave(t,r){const s=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(d,[t]);let i=!1;const o=t._leaveCb=n=>{i||(i=!0,r(),T(n?g:m,[t]),t._leaveCb=void 0,E[s]===e&&delete E[s])};E[s]=e,p?I(p,[t,o]):o()},clone(e){return ke(e,t,n,r)}};return k}function Se(e){if(De(e))return e=zn(e),e.children=null,e}function Ce(e){return De(e)?e.children?e.children[0]:void 0:e}function Ne(e,t){6&e.shapeFlag&&e.component?Ne(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ae(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===In?(128&o.patchFlag&&s++,r=r.concat(Ae(o.children,t,a))):(t||o.type!==Sn)&&r.push(null!=a?zn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Re(e){return(0,s.mf)(e)?{setup:e,name:e.name}:e}const Oe=e=>!!e.type.__asyncLoader;function Le(e){(0,s.mf)(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:i,delay:o=200,timeout:a,suspensible:u=!0,onError:l}=e;let h,f=null,d=0;const p=()=>(d++,f=null,m()),m=()=>{let e;return f||(e=f=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),l)return new Promise(((t,n)=>{const r=()=>t(p()),s=()=>n(e);l(e,r,s,d+1)}));throw e})).then((t=>e!==f&&f?f:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),h=t,t))))};return Re({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return h},setup(){const e=or;if(h)return()=>xe(h,e);const t=t=>{f=null,c(t,e,13,!i)};if(u&&e.suspense||dr)return m().then((t=>()=>xe(t,e))).catch((e=>(t(e),()=>i?Wn(i,{error:e}):null)));const s=(0,r.iH)(!1),l=(0,r.iH)(),d=(0,r.iH)(!!o);return o&&setTimeout((()=>{d.value=!1}),o),null!=a&&setTimeout((()=>{if(!s.value&&!l.value){const e=new Error(`Async component timed out after ${a}ms.`);t(e),l.value=e}}),a),m().then((()=>{s.value=!0,e.parent&&De(e.parent.vnode)&&w(e.parent.update)})).catch((e=>{t(e),l.value=e})),()=>s.value&&h?xe(h,e):l.value&&i?Wn(i,{error:l.value}):n&&!d.value?Wn(n):void 0}})}function xe(e,t){const{ref:n,props:r,children:s,ce:i}=t.vnode,o=Wn(e,r,s);return o.ref=n,o.ce=i,delete t.vnode.ce,o}const De=e=>e.type.__isKeepAlive,Pe={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=ar(),r=n.ctx;if(!r.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const i=new Map,o=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:h,o:{createElement:f}}}=r,d=f("div");function p(e){Be(e),h(e,n,c,!0)}function m(e){i.forEach(((t,n)=>{const r=Tr(t.type);!r||e&&e(r)||g(n)}))}function g(e){const t=i.get(e);a&&t.type===a.type?a&&Be(a):p(t),i.delete(e),o.delete(e)}r.activate=(e,t,n,r,i)=>{const o=e.component;l(e,t,n,0,c),u(o.vnode,e,t,n,o,c,r,e.slotScopeIds,i),cn((()=>{o.isDeactivated=!1,o.a&&(0,s.ir)(o.a);const t=e.props&&e.props.onVnodeMounted;t&&nr(t,o.parent,e)}),c)},r.deactivate=e=>{const t=e.component;l(e,d,null,1,c),cn((()=>{t.da&&(0,s.ir)(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&nr(n,t.parent,e),t.isDeactivated=!0}),c)},me((()=>[e.include,e.exclude]),(([e,t])=>{e&&m((t=>Fe(e,t))),t&&m((e=>!Fe(t,e)))}),{flush:"post",deep:!0});let y=null;const v=()=>{null!=y&&i.set(y,He(n.subTree))};return Ke(v),Je(v),Ye((()=>{i.forEach((e=>{const{subTree:t,suspense:r}=n,s=He(t);if(e.type!==s.type)p(e);else{Be(s);const e=s.component.da;e&&cn(e,r)}}))})),()=>{if(y=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return a=null,n;if(!Un(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let s=He(r);const c=s.type,u=Tr(Oe(s)?s.type.__asyncResolved||{}:c),{include:l,exclude:h,max:f}=e;if(l&&(!u||!Fe(l,u))||h&&u&&Fe(h,u))return a=s,r;const d=null==s.key?c:s.key,p=i.get(d);return s.el&&(s=zn(s),128&r.shapeFlag&&(r.ssContent=s)),y=d,p?(s.el=p.el,s.component=p.component,s.transition&&Ne(s,s.transition),s.shapeFlag|=512,o.delete(d),o.add(d)):(o.add(d),f&&o.size>parseInt(f,10)&&g(o.values().next().value)),s.shapeFlag|=256,a=s,X(r.type)?r:s}}},Me=Pe;function Fe(e,t){return(0,s.kJ)(e)?e.some((e=>Fe(e,t))):(0,s.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function Ue(e,t){je(e,"a",t)}function Ve(e,t){je(e,"da",t)}function je(e,t,n=or){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(qe(t,r,n),n){let e=n.parent;while(e&&e.parent)De(e.parent.vnode)&&$e(r,t,n,e),e=e.parent}}function $e(e,t,n,r){const i=qe(t,e,r,!0);Xe((()=>{(0,s.Od)(r[t],i)}),n)}function Be(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function He(e){return 128&e.shapeFlag?e.ssContent:e}function qe(e,t,n=or,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),cr(n);const i=a(t,n,e,s);return ur(),(0,r.lk)(),i});return s?i.unshift(o):i.push(o),o}}const We=e=>(t,n=or)=>(!dr||"sp"===e)&&qe(e,((...e)=>t(...e)),n),Ge=We("bm"),Ke=We("m"),ze=We("bu"),Je=We("u"),Ye=We("bum"),Xe=We("um"),Qe=We("sp"),Ze=We("rtg"),et=We("rtc");function tt(e,t=or){qe("ec",e,t)}function nt(e,t){const n=F;if(null===n)return e;const r=Er(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=s.kT]=t[o];e&&((0,s.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&_e(n),i.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function rt(e,t,n,s){const i=e.dirs,o=t&&t.dirs;for(let c=0;c<i.length;c++){const u=i[c];o&&(u.oldValue=o[c].value);let l=u.dir[s];l&&((0,r.Jd)(),a(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const st="components",it="directives";function ot(e,t){return lt(st,e,!0,t)||e}const at=Symbol();function ct(e){return(0,s.HD)(e)?lt(st,e,!1)||e:e||at}function ut(e){return lt(it,e)}function lt(e,t,n=!0,r=!1){const i=F||or;if(i){const n=i.type;if(e===st){const e=Tr(n,!1);if(e&&(e===t||e===(0,s._A)(t)||e===(0,s.kC)((0,s._A)(t))))return n}const o=ht(i[e]||n[e],t)||ht(i.appContext[e],t);return!o&&r?n:o}}function ht(e,t){return e&&(e[t]||e[(0,s._A)(t)]||e[(0,s.kC)((0,s._A)(t))])}function ft(e,t,n,r){let i;const o=n&&n[r];if((0,s.kJ)(e)||(0,s.HD)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=t(e[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}function dt(e,t){for(let n=0;n<t.length;n++){const r=t[n];if((0,s.kJ)(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{const t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function pt(e,t,n={},r,s){if(F.isCE||F.parent&&Oe(F.parent)&&F.parent.isCE)return"default"!==t&&(n.name=t),Wn("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Rn();const o=i&&mt(i(n)),a=Fn(In,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function mt(e){return e.some((e=>!Un(e)||e.type!==Sn&&!(e.type===In&&!mt(e.children))))?e:null}function gt(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,s.hR)(r)]=e[r];return n}const yt=e=>e?lr(e)?Er(e)||e.proxy:yt(e.parent):null,vt=(0,s.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yt(e.parent),$root:e=>yt(e.root),$emit:e=>e.emit,$options:e=>Ct(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=_.bind(e.proxy)),$watch:e=>ye.bind(e)}),_t=(e,t)=>e!==s.kT&&!e.__isScriptSetup&&(0,s.RI)(e,t),bt={get({_:e},t){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(_t(i,t))return c[t]=1,i[t];if(o!==s.kT&&(0,s.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,s.RI)(h,t))return c[t]=3,a[t];if(n!==s.kT&&(0,s.RI)(n,t))return c[t]=4,n[t];Et&&(c[t]=0)}}const f=vt[t];let d,p;return f?("$attrs"===t&&(0,r.j)(e,"get",t),f(e)):(d=u.__cssModules)&&(d=d[t])?d:n!==s.kT&&(0,s.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,s.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return _t(i,t)?(i[t]=n,!0):r!==s.kT&&(0,s.RI)(r,t)?(r[t]=n,!0):!(0,s.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||e!==s.kT&&(0,s.RI)(e,a)||_t(t,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(vt,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,s.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const wt=(0,s.l7)({},bt,{get(e,t){if(t!==Symbol.unscopables)return bt.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!(0,s.e1)(t);return n}});let Et=!0;function Tt(e){const t=Ct(e),n=e.proxy,i=e.ctx;Et=!1,t.beforeCreate&&kt(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:E,render:T,renderTracked:I,renderTriggered:k,errorCaptured:S,serverPrefetch:C,expose:N,inheritAttrs:A,components:R,directives:O,filters:L}=t,x=null;if(h&&It(h,i,x,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,s.mf)(e)&&(i[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,s.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Et=!0,a)for(const r in a){const e=a[r],t=(0,s.mf)(e)?e.bind(n,n):(0,s.mf)(e.get)?e.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(e)&&(0,s.mf)(e.set)?e.set.bind(n):s.dG,c=kr({get:t,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)St(u[r],i,n,r);if(l){const e=(0,s.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{ue(t,e[t])}))}function D(e,t){(0,s.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(f&&kt(f,e,"c"),D(Ge,d),D(Ke,p),D(ze,m),D(Je,g),D(Ue,y),D(Ve,v),D(tt,S),D(et,I),D(Ze,k),D(Ye,b),D(Xe,E),D(Qe,C),(0,s.kJ)(N))if(N.length){const t=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===s.dG&&(e.render=T),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),O&&(e.directives=O)}function It(e,t,n=s.dG,i=!1){(0,s.kJ)(e)&&(e=Lt(e));for(const o in e){const n=e[o];let a;a=(0,s.Kn)(n)?"default"in n?le(n.from||o,n.default,!0):le(n.from||o):le(n),(0,r.dq)(a)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function kt(e,t,n){a((0,s.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function St(e,t,n,r){const i=r.includes(".")?ve(n,r):()=>n[r];if((0,s.HD)(e)){const n=t[e];(0,s.mf)(n)&&me(i,n)}else if((0,s.mf)(e))me(i,e.bind(n));else if((0,s.Kn)(e))if((0,s.kJ)(e))e.forEach((e=>St(e,t,n,r)));else{const r=(0,s.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,s.mf)(r)&&me(i,r,e)}else 0}function Ct(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((e=>Nt(u,e,a,!0))),Nt(u,t,a)):u=t,(0,s.Kn)(t)&&o.set(t,u),u}function Nt(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Nt(e,i,n,!0),s&&s.forEach((t=>Nt(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=At[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const At={data:Rt,props:Dt,emits:Dt,methods:Dt,computed:Dt,beforeCreate:xt,created:xt,beforeMount:xt,mounted:xt,beforeUpdate:xt,updated:xt,beforeDestroy:xt,beforeUnmount:xt,destroyed:xt,unmounted:xt,activated:xt,deactivated:xt,errorCaptured:xt,serverPrefetch:xt,components:Dt,directives:Dt,watch:Pt,provide:Rt,inject:Ot};function Rt(e,t){return t?e?function(){return(0,s.l7)((0,s.mf)(e)?e.call(this,this):e,(0,s.mf)(t)?t.call(this,this):t)}:t:e}function Ot(e,t){return Dt(Lt(e),Lt(t))}function Lt(e){if((0,s.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xt(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?(0,s.l7)((0,s.l7)(Object.create(null),e),t):t}function Pt(e,t){if(!e)return t;if(!t)return e;const n=(0,s.l7)(Object.create(null),e);for(const r in t)n[r]=xt(e[r],t[r]);return n}function Mt(e,t,n,i=!1){const o={},a={};(0,s.Nj)(a,$n,1),e.propsDefaults=Object.create(null),Ut(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Ft(e,t,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;Ut(e,t,o,a)&&(h=!0);for(const i in u)t&&((0,s.RI)(t,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(t,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(o[i]=Vt(l,u,i,void 0,e,!0)):delete o[i]);if(a!==u)for(const e in a)t&&(0,s.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(M(e.emitsOptions,i))continue;const c=t[i];if(l)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const t=(0,s._A)(i);o[t]=Vt(l,u,t,c,e,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function Ut(e,t,n,i){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,s.Gg)(r))continue;const l=t[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(e.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Vt(o,t,c,i[c],e,!(0,s.RI)(i,c))}}return u}function Vt(e,t,n,r,i,o){const a=e[n];if(null!=a){const e=(0,s.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,s.mf)(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(cr(i),r=s[n]=e.call(null,t),ur())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function jt(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const o=e.props,a={},c=[];let u=!1;if(!(0,s.mf)(e)){const r=e=>{u=!0;const[n,r]=jt(e,t,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,s.Kn)(e)&&r.set(e,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,s._A)(o[h]);$t(e)&&(a[e]=s.kT)}else if(o){0;for(const e in o){const t=(0,s._A)(e);if($t(t)){const n=o[e],r=a[t]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=qt(Boolean,r.type),n=qt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,s.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,s.Kn)(e)&&r.set(e,l),l}function $t(e){return"$"!==e[0]}function Bt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Ht(e,t){return Bt(e)===Bt(t)}function qt(e,t){return(0,s.kJ)(t)?t.findIndex((t=>Ht(t,e))):(0,s.mf)(t)&&Ht(t,e)?0:-1}const Wt=e=>"_"===e[0]||"$stable"===e,Gt=e=>(0,s.kJ)(e)?e.map(Qn):[Qn(e)],Kt=(e,t,n)=>{if(t._n)return t;const r=H(((...e)=>Gt(t(...e))),n);return r._c=!1,r},zt=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Wt(i))continue;const n=e[i];if((0,s.mf)(n))t[i]=Kt(i,n,r);else if(null!=n){0;const e=Gt(n);t[i]=()=>e}}},Jt=(e,t)=>{const n=Gt(t);e.slots.default=()=>n},Yt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,s.Nj)(t,"_",n)):zt(t,e.slots={})}else e.slots={},t&&Jt(e,t);(0,s.Nj)(e.slots,$n,1)},Xt=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,a=s.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,s.l7)(i,t),n||1!==e||delete i._):(o=!t.$stable,zt(t,i)),a=t}else t&&(Jt(e,t),a={default:1});if(o)for(const s in i)Wt(s)||s in a||delete i[s]};function Qt(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zt=0;function en(e,t){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=Qt(),o=new Set;let a=!1;const c=i.app={_uid:Zt++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Br,get config(){return i.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,s.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,s.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(s,o,u){if(!a){0;const l=Wn(n,r);return l.appContext=i,o&&t?t(l,s):e(l,s,u),a=!0,c._container=s,s.__vue_app__=c,Er(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}function tn(e,t,n,i,a=!1){if((0,s.kJ)(e))return void e.forEach(((e,r)=>tn(e,t&&((0,s.kJ)(t)?t[r]:t),n,i,a)));if(Oe(i)&&!a)return;const c=4&i.shapeFlag?Er(i.component)||i.component.proxy:i.el,u=a?null:c,{i:l,r:h}=e;const f=t&&t.r,d=l.refs===s.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,s.HD)(f)?(d[f]=null,(0,s.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,s.mf)(h))o(h,l,12,[u,d]);else{const t=(0,s.HD)(h),i=(0,r.dq)(h);if(t||i){const r=()=>{if(e.f){const n=t?(0,s.RI)(p,h)?p[h]:d[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):t?(d[h]=[c],(0,s.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],e.k&&(d[e.k]=h.value))}else t?(d[h]=u,(0,s.RI)(p,h)&&(p[h]=u)):i&&(h.value=u,e.k&&(d[e.k]=u))};u?(r.id=-1,cn(r,n)):r()}else 0}}let nn=!1;const rn=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,sn=e=>8===e.nodeType;function on(e){const{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:o,parentNode:a,remove:c,insert:u,createComment:l}}=e,h=(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),S(),void(t._vnode=e);nn=!1,f(t.firstChild,e,null,null,null),S(),t._vnode=e,nn&&console.error("Hydration completed but contains mismatches.")},f=(n,r,s,c,l,h=!1)=>{const v=sn(n)&&"["===n.data,_=()=>g(n,r,s,c,l,v),{type:b,ref:w,shapeFlag:E,patchFlag:T}=r;let I=n.nodeType;r.el=n,-2===T&&(h=!1,r.dynamicChildren=null);let k=null;switch(b){case kn:3!==I?""===r.children?(u(r.el=i(""),a(n),n),k=n):k=_():(n.data!==r.children&&(nn=!0,n.data=r.children),k=o(n));break;case Sn:k=8!==I||v?_():o(n);break;case Cn:if(v&&(n=o(n),I=n.nodeType),1===I||3===I){k=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=1===k.nodeType?k.outerHTML:k.data),t===r.staticCount-1&&(r.anchor=k),k=o(k);return v?o(k):k}_();break;case In:k=v?m(n,r,s,c,l,h):_();break;default:if(1&E)k=1!==I||r.type.toLowerCase()!==n.tagName.toLowerCase()?_():d(n,r,s,c,l,h);else if(6&E){r.slotScopeIds=l;const e=a(n);if(t(r,e,null,s,c,rn(e),h),k=v?y(n):o(n),k&&sn(k)&&"teleport end"===k.data&&(k=o(k)),Oe(r)){let t;v?(t=Wn(In),t.anchor=k?k.previousSibling:e.lastChild):t=3===n.nodeType?Jn(""):Wn("div"),t.el=n,r.component.subTree=t}}else 64&E?k=8!==I?_():r.type.hydrate(n,r,s,c,l,h,e,p):128&E&&(k=r.type.hydrate(n,r,s,c,rn(a(n)),l,h,e,f))}return null!=w&&tn(w,null,c,r),k},d=(e,t,n,i,o,a)=>{a=a||!!t.dynamicChildren;const{type:u,props:l,patchFlag:h,shapeFlag:f,dirs:d}=t,m="input"===u&&d||"option"===u;if(m||-1!==h){if(d&&rt(t,null,n,"created"),l)if(m||!a||48&h)for(const t in l)(m&&t.endsWith("value")||(0,s.F7)(t)&&!(0,s.Gg)(t))&&r(e,t,null,l[t],!1,void 0,n);else l.onClick&&r(e,"onClick",null,l.onClick,!1,void 0,n);let u;if((u=l&&l.onVnodeBeforeMount)&&nr(u,n,t),d&&rt(t,null,n,"beforeMount"),((u=l&&l.onVnodeMounted)||d)&&ae((()=>{u&&nr(u,n,t),d&&rt(t,null,n,"mounted")}),i),16&f&&(!l||!l.innerHTML&&!l.textContent)){let r=p(e.firstChild,t,e,n,i,o,a);while(r){nn=!0;const e=r;r=r.nextSibling,c(e)}}else 8&f&&e.textContent!==t.children&&(nn=!0,e.textContent=t.children)}return e.nextSibling},p=(e,t,r,s,i,o,a)=>{a=a||!!t.dynamicChildren;const c=t.children,u=c.length;for(let l=0;l<u;l++){const t=a?c[l]:c[l]=Qn(c[l]);if(e)e=f(e,t,s,i,o,a);else{if(t.type===kn&&!t.children)continue;nn=!0,n(null,t,r,null,s,i,rn(r),o)}}return e},m=(e,t,n,r,s,i)=>{const{slotScopeIds:c}=t;c&&(s=s?s.concat(c):c);const h=a(e),f=p(o(e),t,h,n,r,s,i);return f&&sn(f)&&"]"===f.data?o(t.anchor=f):(nn=!0,u(t.anchor=l("]"),h,f),f)},g=(e,t,r,s,i,u)=>{if(nn=!0,t.el=null,u){const t=y(e);while(1){const n=o(e);if(!n||n===t)break;c(n)}}const l=o(e),h=a(e);return c(e),n(null,t,h,l,r,s,rn(h),i),l},y=e=>{let t=0;while(e)if(e=o(e),e&&sn(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return o(e);t--}return e};return[h,f]}function an(){}const cn=ae;function un(e){return hn(e)}function ln(e){return hn(e,on)}function hn(e,t){an();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:m=s.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,s=null,i=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Vn(e,t)&&(r=Q(e),W(e,s,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case kn:v(e,t,n,r);break;case Sn:_(e,t,n,r);break;case Cn:null==e&&b(t,n,r,o);break;case In:D(e,t,n,r,s,i,o,a,c);break;default:1&h?C(e,t,n,r,s,i,o,a,c):6&h?P(e,t,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,s,i,o,a,c,ee)}null!=l&&s&&tn(l,e&&e.ref,i,t||e,!t)},v=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=p(e),i(e,n,r),e=s;i(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,s,i,o,a,c)=>{o=o||"svg"===t.type,null==e?N(t,n,r,s,i,o,a,c):O(e,t,s,i,o,a,c)},N=(e,t,n,r,o,u,l,h)=>{let d,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:_}=e;if(d=e.el=c(e.type,u,g&&g.is,g),8&y?f(d,e.children):16&y&&R(e.children,d,null,r,o,u&&"foreignObject"!==m,l,h),_&&rt(e,null,r,"created"),g){for(const t in g)"value"===t||(0,s.Gg)(t)||a(d,t,null,g[t],u,e.children,r,o,X);"value"in g&&a(d,"value",null,g.value),(p=g.onVnodeBeforeMount)&&nr(p,r,e)}A(d,e,e.scopeId,l,r),_&&rt(e,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),i(d,t,n),((p=g&&g.onVnodeMounted)||b||_)&&cn((()=>{p&&nr(p,r,e),b&&v.enter(d),_&&rt(e,null,r,"mounted")}),o)},A=(e,t,n,r,s)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(s){let n=s.subTree;if(t===n){const t=s.vnode;A(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},R=(e,t,n,r,s,i,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Zn(e[u]):Qn(e[u]);y(null,c,t,n,r,s,i,o,a)}},O=(e,t,n,r,i,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=t;l|=16&e.patchFlag;const p=e.props||s.kT,m=t.props||s.kT;let g;n&&fn(n,!1),(g=m.onVnodeBeforeUpdate)&&nr(g,n,t,e),d&&rt(t,e,n,"beforeUpdate"),n&&fn(n,!0);const y=i&&"foreignObject"!==t.type;if(h?L(e.dynamicChildren,h,u,n,r,y,o):c||j(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)x(u,t,p,m,n,r,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const s=t.dynamicProps;for(let t=0;t<s.length;t++){const o=s[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,i,e.children,n,r,X)}}1&l&&e.children!==t.children&&f(u,t.children)}else c||null!=h||x(u,t,p,m,n,r,i);((g=m.onVnodeUpdated)||d)&&cn((()=>{g&&nr(g,n,t,e),d&&rt(t,e,n,"updated")}),r)},L=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===In||!Vn(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,s,i,o,!0)}},x=(e,t,n,r,i,o,c)=>{if(n!==r){if(n!==s.kT)for(const u in n)(0,s.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,i,o,X);for(const u in r){if((0,s.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,i,o,X)}"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,s,o,a,c,l)=>{const h=t.el=e?e.el:u(""),f=t.anchor=e?e.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(i(h,n,r),i(f,n,r),R(t.children,n,f,s,o,a,c,l)):d>0&&64&d&&p&&e.dynamicChildren?(L(e.dynamicChildren,p,n,s,o,a,c),(null!=t.key||s&&t===s.subTree)&&dn(e,t,!0)):j(e,t,n,f,s,o,a,c,l)},P=(e,t,n,r,s,i,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,c):M(t,n,r,s,i,o,c):F(e,t,c)},M=(e,t,n,r,s,i,o)=>{const a=e.component=ir(e,r,s);if(De(e)&&(a.ctx.renderer=ee),pr(a),a.asyncDep){if(s&&s.registerDep(a,U),!e.el){const e=a.subTree=Wn(Sn);_(null,e,t,n)}}else U(a,e,t,n,s,i,o)},F=(e,t,n)=>{const r=t.component=e.component;if(z(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,T(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,i,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:i,parent:u,vnode:l}=e,h=n;0,fn(e,!1),n?(n.el=l.el,V(e,n,c)):n=l,r&&(0,s.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&nr(t,u,n,l),fn(e,!0);const f=q(e);0;const p=e.subTree;e.subTree=f,y(p,f,d(p.el),Q(p),e,o,a),n.el=f.el,null===h&&Y(e,f.el),i&&cn(i,o),(t=n.props&&n.props.onVnodeUpdated)&&cn((()=>nr(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:f}=e,d=Oe(t);if(fn(e,!1),l&&(0,s.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&nr(r,f,t),fn(e,!0),c&&ne){const n=()=>{e.subTree=q(e),ne(c,e.subTree,e,o,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=q(e);0,y(null,r,n,i,e,o,a),t.el=r.el}if(h&&cn(h,o),!d&&(r=u&&u.onVnodeMounted)){const e=t;cn((()=>nr(r,f,e)),o)}(256&t.shapeFlag||f&&Oe(f.vnode)&&256&f.vnode.shapeFlag)&&e.a&&cn(e.a,o),e.isMounted=!0,t=n=i=null}},l=e.effect=new r.qq(u,(()=>w(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,fn(e,!0),h()},V=(e,t,n)=>{t.component=e;const s=e.vnode.props;e.vnode=t,e.next=null,Ft(e,t.props,s,n),Xt(e,t.children,n),(0,r.Jd)(),k(),(0,r.lk)()},j=(e,t,n,r,s,i,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void B(u,h,n,r,s,i,o,a,c);if(256&d)return void $(u,h,n,r,s,i,o,a,c)}8&p?(16&l&&X(u,s,i),h!==u&&f(n,h)):16&l?16&p?B(u,h,n,r,s,i,o,a,c):X(u,s,i,!0):(8&l&&f(n,""),16&p&&R(h,n,r,s,i,o,a,c))},$=(e,t,n,r,i,o,a,c,u)=>{e=e||s.Z6,t=t||s.Z6;const l=e.length,h=t.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=t[d]=u?Zn(t[d]):Qn(t[d]);y(e[d],r,n,null,i,o,a,c,u)}l>h?X(e,i,o,!0,!1,f):R(t,n,r,i,o,a,c,u,f)},B=(e,t,n,r,i,o,a,c,u)=>{let l=0;const h=t.length;let f=e.length-1,d=h-1;while(l<=f&&l<=d){const r=e[l],s=t[l]=u?Zn(t[l]):Qn(t[l]);if(!Vn(r,s))break;y(r,s,n,null,i,o,a,c,u),l++}while(l<=f&&l<=d){const r=e[f],s=t[d]=u?Zn(t[d]):Qn(t[d]);if(!Vn(r,s))break;y(r,s,n,null,i,o,a,c,u),f--,d--}if(l>f){if(l<=d){const e=d+1,s=e<h?t[e].el:r;while(l<=d)y(null,t[l]=u?Zn(t[l]):Qn(t[l]),n,s,i,o,a,c,u),l++}}else if(l>d)while(l<=f)W(e[l],i,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=d;l++){const e=t[l]=u?Zn(t[l]):Qn(t[l]);null!=e.key&&g.set(e.key,l)}let v,_=0;const b=d-m+1;let w=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=e[l];if(_>=b){W(r,i,o,!0);continue}let s;if(null!=r.key)s=g.get(r.key);else for(v=m;v<=d;v++)if(0===T[v-m]&&Vn(r,t[v])){s=v;break}void 0===s?W(r,i,o,!0):(T[s-m]=l+1,s>=E?E=s:w=!0,y(r,t[s],n,null,i,o,a,c,u),_++)}const I=w?pn(T):s.Z6;for(v=I.length-1,l=b-1;l>=0;l--){const e=m+l,s=t[e],f=e+1<h?t[e+1].el:r;0===T[l]?y(null,s,n,f,i,o,a,c,u):w&&(v<0||l!==I[v]?H(s,n,f,2):v--)}}},H=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void H(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===In){i(o,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Cn)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),cn((()=>c.enter(o)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),u=()=>{e(o,(()=>{a(),s&&s()}))};r?r(o,a,u):u()}else i(o,t,n)},W=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=e;if(null!=a&&tn(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const d=1&l&&f,p=!Oe(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&nr(m,t,e),6&l)J(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);d&&rt(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,s,ee,r):u&&(i!==In||h>0&&64&h)?X(u,t,n,!1,!0):(i===In&&384&h||!s&&16&l)&&X(c,t,n),r&&G(e)}(p&&(m=o&&o.onVnodeUnmounted)||d)&&cn((()=>{m&&nr(m,t,e),d&&rt(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===In)return void K(n,r);if(t===Cn)return void I(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,o=()=>t(n,i);r?r(e.el,i,o):o()}else i()},K=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=e;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&cn(c,t),cn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)W(e[o],t,n,r,s)},Q=e=>6&e.shapeFlag?Q(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),k(),S(),t._vnode=e},ee={p:y,um:W,m:H,r:G,mt:M,mc:R,pc:j,pbc:L,n:Q,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:en(Z,te)}}function fn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function dn(e,t,n=!1){const r=e.children,i=t.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Zn(i[s]),t.el=e.el),n||dn(e,t)),t.type===kn&&(t.el=e.el)}}function pn(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=t[o];return n}const mn=e=>e.__isTeleport,gn=e=>e&&(e.disabled||""===e.disabled),yn=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,vn=(e,t)=>{const n=e&&e.to;if((0,s.HD)(n)){if(t){const e=t(n);return e}return null}return n},_n={__isTeleport:!0,process(e,t,n,r,s,i,o,a,c,u){const{mc:l,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:m,createComment:g}}=u,y=gn(t.props);let{shapeFlag:v,children:_,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),u=t.anchor=m("");d(e,n,r),d(u,n,r);const h=t.target=vn(t.props,p),f=t.targetAnchor=m("");h&&(d(f,h),o=o||yn(h));const g=(e,t)=>{16&v&&l(_,e,t,s,i,o,a,c)};y?g(n,u):h&&g(h,f)}else{t.el=e.el;const r=t.anchor=e.anchor,l=t.target=e.target,d=t.targetAnchor=e.targetAnchor,m=gn(e.props),g=m?n:l,v=m?r:d;if(o=o||yn(l),b?(f(e.dynamicChildren,b,g,s,i,o,a),dn(e,t,!0)):c||h(e,t,g,v,s,i,o,a,!1),y)m||bn(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=vn(t.props,p);e&&bn(t,e,null,u,0)}else m&&bn(t,l,d,u,1)}Tn(t)},remove(e,t,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:f}=e;if(h&&i(l),(o||!gn(f))&&(i(u),16&a))for(let d=0;d<c.length;d++){const e=c[d];s(e,t,n,!0,!!e.dynamicChildren)}},move:bn,hydrate:wn};function bn(e,t,n,{o:{insert:r},m:s},i=2){0===i&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=e,h=2===i;if(h&&r(o,t,n),(!h||gn(l))&&16&c)for(let f=0;f<u.length;f++)s(u[f],t,n,2);h&&r(a,t,n)}function wn(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=t.target=vn(t.props,c);if(l){const c=l._lpa||l.firstChild;if(16&t.shapeFlag)if(gn(t.props))t.anchor=u(o(e),t,a(e),n,r,s,i),t.targetAnchor=c;else{t.anchor=o(e);let a=c;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,l._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(c,t,l,n,r,s,i)}Tn(t)}return t.anchor&&o(t.anchor)}const En=_n;function Tn(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const In=Symbol(void 0),kn=Symbol(void 0),Sn=Symbol(void 0),Cn=Symbol(void 0),Nn=[];let An=null;function Rn(e=!1){Nn.push(An=e?null:[])}function On(){Nn.pop(),An=Nn[Nn.length-1]||null}let Ln,xn=1;function Dn(e){xn+=e}function Pn(e){return e.dynamicChildren=xn>0?An||s.Z6:null,On(),xn>0&&An&&An.push(e),e}function Mn(e,t,n,r,s,i){return Pn(qn(e,t,n,r,s,i,!0))}function Fn(e,t,n,r,s){return Pn(Wn(e,t,n,r,s,!0))}function Un(e){return!!e&&!0===e.__v_isVNode}function Vn(e,t){return e.type===t.type&&e.key===t.key}function jn(e){Ln=e}const $n="__vInternal",Bn=({key:e})=>null!=e?e:null,Hn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,s.HD)(e)||(0,r.dq)(e)||(0,s.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function qn(e,t=null,n=null,r=0,i=null,o=(e===In?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bn(t),ref:t&&Hn(t),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:F};return c?(er(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,s.HD)(n)?8:16),xn>0&&!a&&An&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&An.push(u),u}const Wn=Gn;function Gn(e,t=null,n=null,i=0,o=null,a=!1){if(e&&e!==at||(e=Sn),Un(e)){const r=zn(e,t,!0);return n&&er(r,n),xn>0&&!a&&An&&(6&r.shapeFlag?An[An.indexOf(e)]=r:An.push(r)),r.patchFlag|=-2,r}if(Ir(e)&&(e=e.__vccOpts),t){t=Kn(t);let{class:e,style:n}=t;e&&!(0,s.HD)(e)&&(t.class=(0,s.C_)(e)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),t.style=(0,s.j5)(n))}const c=(0,s.HD)(e)?1:X(e)?128:mn(e)?64:(0,s.Kn)(e)?4:(0,s.mf)(e)?2:0;return qn(e,t,n,i,o,c,a,!0)}function Kn(e){return e?(0,r.X3)(e)||$n in e?(0,s.l7)({},e):e:null}function zn(e,t,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=e,c=t?tr(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Bn(c),ref:t&&t.ref?n&&i?(0,s.kJ)(i)?i.concat(Hn(t)):[i,Hn(t)]:Hn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==In?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zn(e.ssContent),ssFallback:e.ssFallback&&zn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return u}function Jn(e=" ",t=0){return Wn(kn,null,e,t)}function Yn(e,t){const n=Wn(Cn,null,e);return n.staticCount=t,n}function Xn(e="",t=!1){return t?(Rn(),Fn(Sn,null,e)):Wn(Sn,null,e)}function Qn(e){return null==e||"boolean"===typeof e?Wn(Sn):(0,s.kJ)(e)?Wn(In,null,e.slice()):"object"===typeof e?Zn(e):Wn(kn,null,String(e))}function Zn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:zn(e)}function er(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,s.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),er(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||$n in t?3===r&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,s.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&r?(n=16,t=[Jn(t)]):n=8);e.children=t,e.shapeFlag|=n}function tr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,s.C_)([t.class,r.class]));else if("style"===e)t.style=(0,s.j5)([t.style,r.style]);else if((0,s.F7)(e)){const n=t[e],i=r[e];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function nr(e,t,n,r=null){a(e,t,7,[n,r])}const rr=Qt();let sr=0;function ir(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||rr,a={uid:sr++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jt(i,o),emitsOptions:P(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=D.bind(null,a),e.ce&&e.ce(a),a}let or=null;const ar=()=>or||F,cr=e=>{or=e,e.scope.on()},ur=()=>{or&&or.scope.off(),or=null};function lr(e){return 4&e.vnode.shapeFlag}let hr,fr,dr=!1;function pr(e,t=!1){dr=t;const{props:n,children:r}=e.vnode,s=lr(e);Mt(e,n,s,t),Yt(e,r);const i=s?mr(e,t):void 0;return dr=!1,i}function mr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,bt));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?wr(e):null;cr(e),(0,r.Jd)();const a=o(i,e,0,[e.props,n]);if((0,r.lk)(),ur(),(0,s.tI)(a)){if(a.then(ur,ur),t)return a.then((n=>{gr(e,n,t)})).catch((t=>{c(t,e,0)}));e.asyncDep=a}else gr(e,a,t)}else _r(e,t)}function gr(e,t,n){(0,s.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,s.Kn)(t)&&(e.setupState=(0,r.WL)(t)),_r(e,n)}function yr(e){hr=e,fr=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,wt))}}const vr=()=>!hr;function _r(e,t,n){const i=e.type;if(!e.render){if(!t&&hr&&!i.render){const t=i.template||Ct(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=hr(t,c)}}e.render=i.render||s.dG,fr&&fr(e)}cr(e),(0,r.Jd)(),Tt(e),(0,r.lk)(),ur()}function br(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function wr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=br(e))},slots:e.slots,emit:e.emit,expose:t}}function Er(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in vt?vt[n](e):void 0},has(e,t){return t in e||t in vt}}))}function Tr(e,t=!0){return(0,s.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Ir(e){return(0,s.mf)(e)&&"__vccOpts"in e}const kr=(e,t)=>(0,r.Fl)(e,t,dr);function Sr(){return null}function Cr(){return null}function Nr(e){0}function Ar(e,t){return null}function Rr(){return Lr().slots}function Or(){return Lr().attrs}function Lr(){const e=ar();return e.setupContext||(e.setupContext=wr(e))}function xr(e,t){const n=(0,s.kJ)(e)?e.reduce(((e,t)=>(e[t]={},e)),{}):e;for(const r in t){const e=n[r];e?(0,s.kJ)(e)||(0,s.mf)(e)?n[r]={type:e,default:t[r]}:e.default=t[r]:null===e&&(n[r]={default:t[r]})}return n}function Dr(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Pr(e){const t=ar();let n=e();return ur(),(0,s.tI)(n)&&(n=n.catch((e=>{throw cr(t),e}))),[n,()=>cr(t)]}function Mr(e,t,n){const r=arguments.length;return 2===r?(0,s.Kn)(t)&&!(0,s.kJ)(t)?Un(t)?Wn(e,null,[t]):Wn(e,t):Wn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Un(n)&&(n=[n]),Wn(e,t,n))}const Fr=Symbol(""),Ur=()=>{{const e=le(Fr);return e}};function Vr(){return void 0}function jr(e,t,n,r){const s=n[r];if(s&&$r(s,e))return s;const i=t();return i.memo=e.slice(),n[r]=i}function $r(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if((0,s.aU)(n[r],t[r]))return!1;return xn>0&&An&&An.push(e),!0}const Br="3.2.45",Hr={createComponentInstance:ir,setupComponent:pr,renderComponentRoot:q,setCurrentRenderingInstance:V,isVNode:Un,normalizeVNode:Qn},qr=Hr,Wr=null,Gr=null},9242:function(e,t,n){"use strict";n.r(t),n.d(t,{BaseTransition:function(){return s.P$},Comment:function(){return s.sv},EffectScope:function(){return s.Bj},Fragment:function(){return s.HY},KeepAlive:function(){return s.Ob},ReactiveEffect:function(){return s.qq},Static:function(){return s.qG},Suspense:function(){return s.n4},Teleport:function(){return s.lR},Text:function(){return s.xv},Transition:function(){return H},TransitionGroup:function(){return ue},VueElement:function(){return M},callWithAsyncErrorHandling:function(){return s.$d},callWithErrorHandling:function(){return s.KU},camelize:function(){return s._A},capitalize:function(){return s.kC},cloneVNode:function(){return s.Ho},compatUtils:function(){return s.ry},computed:function(){return s.Fl},createApp:function(){return qe},createBlock:function(){return s.j4},createCommentVNode:function(){return s.kq},createElementBlock:function(){return s.iD},createElementVNode:function(){return s._},createHydrationRenderer:function(){return s.Eo},createPropsRestProxy:function(){return s.p1},createRenderer:function(){return s.Us},createSSRApp:function(){return We},createSlots:function(){return s.Nv},createStaticVNode:function(){return s.uE},createTextVNode:function(){return s.Uk},createVNode:function(){return s.Wm},customRef:function(){return s.ZM},defineAsyncComponent:function(){return s.RC},defineComponent:function(){return s.aZ},defineCustomElement:function(){return x},defineEmits:function(){return s.Bz},defineExpose:function(){return s.WY},defineProps:function(){return s.MW},defineSSRCustomElement:function(){return D},devtools:function(){return s.mW},effect:function(){return s.cE},effectScope:function(){return s.B},getCurrentInstance:function(){return s.FN},getCurrentScope:function(){return s.nZ},getTransitionRawChildren:function(){return s.Q6},guardReactiveProps:function(){return s.F4},h:function(){return s.h},handleError:function(){return s.S3},hydrate:function(){return He},initCustomFormatter:function(){return s.Mr},initDirectivesForSSR:function(){return ze},inject:function(){return s.f3},isMemoSame:function(){return s.nQ},isProxy:function(){return s.X3},isReactive:function(){return s.PG},isReadonly:function(){return s.$y},isRef:function(){return s.dq},isRuntimeOnly:function(){return s.of},isShallow:function(){return s.yT},isVNode:function(){return s.lA},markRaw:function(){return s.Xl},mergeDefaults:function(){return s.u_},mergeProps:function(){return s.dG},nextTick:function(){return s.Y3},normalizeClass:function(){return s.C_},normalizeProps:function(){return s.vs},normalizeStyle:function(){return s.j5},onActivated:function(){return s.dl},onBeforeMount:function(){return s.wF},onBeforeUnmount:function(){return s.Jd},onBeforeUpdate:function(){return s.Xn},onDeactivated:function(){return s.se},onErrorCaptured:function(){return s.d1},onMounted:function(){return s.bv},onRenderTracked:function(){return s.bT},onRenderTriggered:function(){return s.Yq},onScopeDispose:function(){return s.EB},onServerPrefetch:function(){return s.vl},onUnmounted:function(){return s.Ah},onUpdated:function(){return s.ic},openBlock:function(){return s.wg},popScopeId:function(){return s.Cn},provide:function(){return s.JJ},proxyRefs:function(){return s.WL},pushScopeId:function(){return s.dD},queuePostFlushCb:function(){return s.qb},reactive:function(){return s.qj},readonly:function(){return s.OT},ref:function(){return s.iH},registerRuntimeCompiler:function(){return s.Y1},render:function(){return Be},renderList:function(){return s.Ko},renderSlot:function(){return s.WI},resolveComponent:function(){return s.up},resolveDirective:function(){return s.Q2},resolveDynamicComponent:function(){return s.LL},resolveFilter:function(){return s.eq},resolveTransitionHooks:function(){return s.U2},setBlockTracking:function(){return s.qZ},setDevtoolsHook:function(){return s.ec},setTransitionHooks:function(){return s.nK},shallowReactive:function(){return s.Um},shallowReadonly:function(){return s.YS},shallowRef:function(){return s.XI},ssrContextKey:function(){return s.Uc},ssrUtils:function(){return s.G},stop:function(){return s.sT},toDisplayString:function(){return s.zw},toHandlerKey:function(){return s.hR},toHandlers:function(){return s.mx},toRaw:function(){return s.IU},toRef:function(){return s.Vh},toRefs:function(){return s.BK},transformVNodeArgs:function(){return s.C3},triggerRef:function(){return s.oR},unref:function(){return s.SU},useAttrs:function(){return s.l1},useCssModule:function(){return F},useCssVars:function(){return U},useSSRContext:function(){return s.Zq},useSlots:function(){return s.Rr},useTransitionState:function(){return s.Y8},vModelCheckbox:function(){return ve},vModelDynamic:function(){return ke},vModelRadio:function(){return be},vModelSelect:function(){return we},vModelText:function(){return ye},vShow:function(){return De},version:function(){return s.i8},warn:function(){return s.ZK},watch:function(){return s.YP},watchEffect:function(){return s.m0},watchPostEffect:function(){return s.Rh},watchSyncEffect:function(){return s.yX},withAsyncContext:function(){return s.mv},withCtx:function(){return s.w5},withDefaults:function(){return s.b9},withDirectives:function(){return s.wy},withKeys:function(){return xe},withMemo:function(){return s.MX},withModifiers:function(){return Oe},withScopeId:function(){return s.HX}});n(7658);var r=n(7139),s=n(3396),i=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(t.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const s=c.content;if(r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const s=e.style,i=(0,r.HD)(n);if(n&&!i){for(const e in n)d(s,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(s,e,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const f=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=g(e,t);f.test(n)?e.setProperty((0,r.rs)(s),n.replace(f,""),"important"):e[s]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let s=(0,r._A)(t);if("filter"!==s&&s in e)return m[t]=s;s=(0,r.kC)(s);for(let r=0;r<p.length;r++){const n=p[r]+s;if(n in e)return m[t]=n}return t}const y="http://www.w3.org/1999/xlink";function v(e,t,n,s,i){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(y,t.slice(6,t.length)):e.setAttributeNS(y,t,n);else{const s=(0,r.Pq)(t);null==n||s&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function _(e,t,n,s,i,o,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,i,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function w(e,t,n,r){e.removeEventListener(t,n,r)}function E(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=I(t);if(r){const o=i[t]=N(r,s);b(e,n,o,a)}else o&&(w(e,n,o,a),i[t]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function I(e){let t;if(T.test(e)){let n;t={};while(n=e.match(T))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let k=0;const S=Promise.resolve(),C=()=>k||(S.then((()=>k=0)),k=Date.now());function N(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,s.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=C(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,O=(e,t,n,s,i=!1,o,a,c,u)=>{"class"===t?l(e,s,i):"style"===t?h(e,n,s):(0,r.F7)(t)?(0,r.tR)(t)||E(e,t,n,s,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):L(e,t,s,i))?_(e,t,s,o,a,c,u):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),v(e,t,s,i))};function L(e,t,n,s){return s?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}function x(e,t){const n=(0,s.aZ)(e);class r extends M{constructor(e){super(n,e,t)}}return r.def=n,r}const D=e=>x(e,He),P="undefined"!==typeof HTMLElement?HTMLElement:class{};class M extends P{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,(0,s.Y3)((()=>{this._connected||(Be(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})).observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:s}=e;let i;if(n&&!(0,r.kJ)(n))for(const o in n){const e=n[o];(e===Number||e&&e.type===Number)&&(o in this._props&&(this._props[o]=(0,r.He)(this._props[o])),(i||(i=Object.create(null)))[(0,r._A)(o)]=!0)}this._numberProps=i,t&&this._resolveProps(e),this._applyStyles(s),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=(0,r.kJ)(t)?t:Object.keys(t||{});for(const r of Object.keys(this))"_"!==r[0]&&n.includes(r)&&this._setProp(r,this[r],!0,!1);for(const s of n.map(r._A))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(e){this._setProp(s,e)}})}_setAttr(e){let t=this.getAttribute(e);const n=(0,r._A)(e);this._numberProps&&this._numberProps[n]&&(t=(0,r.He)(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,s=!0){t!==this._props[e]&&(this._props[e]=t,s&&this._instance&&this._update(),n&&(!0===t?this.setAttribute((0,r.rs)(e),""):"string"===typeof t||"number"===typeof t?this.setAttribute((0,r.rs)(e),t+""):t||this.removeAttribute((0,r.rs)(e))))}_update(){Be(this._createVNode(),this.shadowRoot)}_createVNode(){const e=(0,s.Wm)(this._def,(0,r.l7)({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),(0,r.rs)(e)!==e&&t((0,r.rs)(e),n)};let n=this;while(n=n&&(n.parentNode||n.host))if(n instanceof M){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function F(e="$style"){{const t=(0,s.FN)();if(!t)return r.kT;const n=t.type.__cssModules;if(!n)return r.kT;const i=n[e];return i||r.kT}}function U(e){const t=(0,s.FN)();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>j(e,n)))},r=()=>{const r=e(t.proxy);V(t.subTree,r),n(r)};(0,s.Rh)(r),(0,s.bv)((()=>{const e=new MutationObserver(r);e.observe(t.subTree.el.parentNode,{childList:!0}),(0,s.Ah)((()=>e.disconnect()))}))}function V(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{V(n.activeBranch,t)}))}while(e.component)e=e.component.subTree;if(1&e.shapeFlag&&e.el)j(e.el,t);else if(e.type===s.HY)e.children.forEach((e=>V(e,t)));else if(e.type===s.qG){let{el:n,anchor:r}=e;while(n){if(j(n,t),n===r)break;n=n.nextSibling}}}function j(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty(`--${e}`,t[e])}}const $="transition",B="animation",H=(e,{slots:t})=>(0,s.h)(s.P$,z(e),t);H.displayName="Transition";const q={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},W=H.props=(0,r.l7)({},s.P$.props,q),G=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},K=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function z(e){const t={};for(const r in e)r in q||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=J(i),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:E,onBeforeAppear:T=v,onAppear:I=_,onAppearCancelled:k=b}=t,S=(e,t,n)=>{Q(e,t?h:c),Q(e,t?l:a),n&&n()},C=(e,t)=>{e._isLeaving=!1,Q(e,f),Q(e,p),Q(e,d),t&&t()},N=e=>(t,n)=>{const r=e?I:_,i=()=>S(t,e,n);G(r,[t,i]),Z((()=>{Q(t,e?u:o),X(t,e?h:c),K(r)||te(t,s,g,i)}))};return(0,r.l7)(t,{onBeforeEnter(e){G(v,[e]),X(e,o),X(e,a)},onBeforeAppear(e){G(T,[e]),X(e,u),X(e,l)},onEnter:N(!1),onAppear:N(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);X(e,f),ie(),X(e,d),Z((()=>{e._isLeaving&&(Q(e,f),X(e,p),K(w)||te(e,s,y,n))})),G(w,[e,n])},onEnterCancelled(e){S(e,!1),G(b,[e])},onAppearCancelled(e){S(e,!0),G(k,[e])},onLeaveCancelled(e){C(e),G(E,[e])}})}function J(e){if(null==e)return null;if((0,r.Kn)(e))return[Y(e.enter),Y(e.leave)];{const t=Y(e);return[t,t]}}function Y(e){const t=(0,r.He)(e);return t}function X(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function Q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let ee=0;function te(e,t,n,r){const s=e._endId=++ee,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ne(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,f),i()},f=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,f)}function ne(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),s=r(`${$}Delay`),i=r(`${$}Duration`),o=re(s,i),a=r(`${B}Delay`),c=r(`${B}Duration`),u=re(a,c);let l=null,h=0,f=0;t===$?o>0&&(l=$,h=o,f=i.length):t===B?u>0&&(l=B,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?$:B:null,f=l?l===$?i.length:c.length:0);const d=l===$&&/\b(transform|all)(,|$)/.test(r(`${$}Property`).toString());return{type:l,timeout:h,propCount:f,hasTransform:d}}function re(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>se(t)+se(e[n]))))}function se(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ie(){return document.body.offsetHeight}const oe=new WeakMap,ae=new WeakMap,ce={name:"TransitionGroup",props:(0,r.l7)({},W,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,s.FN)(),r=(0,s.Y8)();let o,a;return(0,s.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!de(o[0].el,n.vnode.el,t))return;o.forEach(le),o.forEach(he);const r=o.filter(fe);ie(),r.forEach((e=>{const n=e.el,r=n.style;X(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const s=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",s),n._moveCb=null,Q(n,t))};n.addEventListener("transitionend",s)}))})),()=>{const c=(0,i.IU)(e),u=z(c);let l=c.tag||s.HY;o=a,a=t.default?(0,s.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,s.nK)(t,(0,s.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,s.nK)(t,(0,s.U2)(t,u,r,n)),oe.set(t,t.el.getBoundingClientRect())}return(0,s.Wm)(l,null,a)}}},ue=ce;function le(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function he(e){ae.set(e,e.el.getBoundingClientRect())}function fe(e){const t=oe.get(e),n=ae.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${s}px)`,t.transitionDuration="0s",e}}function de(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:i}=ne(r);return s.removeChild(r),i}const pe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function me(e){e.target.composing=!0}function ge(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ye={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=pe(i);const o=s||i.props&&"number"===i.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n&&(s=s.trim()),o&&(s=(0,r.He)(s)),e._assign(s)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",me),b(e,"compositionend",ge),b(e,"change",ge))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},o){if(e._assign=pe(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(s&&e.value.trim()===t)return;if((i||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ve={deep:!0,created(e,t,n){e._assign=pe(n),b(e,"change",(()=>{const t=e._modelValue,n=Te(e),s=e.checked,i=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),o=-1!==e;if(s&&!o)i(t.concat(n));else if(!s&&o){const n=[...t];n.splice(e,1),i(n)}}else if((0,r.DM)(t)){const e=new Set(t);s?e.add(n):e.delete(n),i(e)}else i(Ie(e,s))}))},mounted:_e,beforeUpdate(e,t,n){e._assign=pe(n),_e(e,t,n)}};function _e(e,{value:t,oldValue:n},s){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,s.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=(0,r.WV)(t,Ie(e,!0)))}const be={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=pe(n),b(e,"change",(()=>{e._assign(Te(e))}))},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=pe(s),t!==n&&(e.checked=(0,r.WV)(t,s.props.value))}},we={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const i=(0,r.DM)(t);b(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(Te(e)):Te(e)));e._assign(e.multiple?i?new Set(t):t:t[0])})),e._assign=pe(s)},mounted(e,{value:t}){Ee(e,t)},beforeUpdate(e,t,n){e._assign=pe(n)},updated(e,{value:t}){Ee(e,t)}};function Ee(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let s=0,i=e.options.length;s<i;s++){const i=e.options[s],o=Te(i);if(n)(0,r.kJ)(t)?i.selected=(0,r.hq)(t,o)>-1:i.selected=t.has(o);else if((0,r.WV)(Te(i),t))return void(e.selectedIndex!==s&&(e.selectedIndex=s))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Te(e){return"_value"in e?e._value:e.value}function Ie(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ke={created(e,t,n){Ce(e,t,n,null,"created")},mounted(e,t,n){Ce(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Ce(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Ce(e,t,n,r,"updated")}};function Se(e,t){switch(e){case"SELECT":return we;case"TEXTAREA":return ye;default:switch(t){case"checkbox":return ve;case"radio":return be;default:return ye}}}function Ce(e,t,n,r,s){const i=Se(e.tagName,n.props&&n.props.type),o=i[s];o&&o(e,t,n,r)}function Ne(){ye.getSSRProps=({value:e})=>({value:e}),be.getSSRProps=({value:e},t)=>{if(t.props&&(0,r.WV)(t.props.value,e))return{checked:!0}},ve.getSSRProps=({value:e},t)=>{if((0,r.kJ)(e)){if(t.props&&(0,r.hq)(e,t.props.value)>-1)return{checked:!0}}else if((0,r.DM)(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},ke.getSSRProps=(e,t)=>{if("string"!==typeof t.type)return;const n=Se(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const Ae=["ctrl","shift","alt","meta"],Re={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ae.some((n=>e[`${n}Key`]&&!t.includes(n)))},Oe=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Re[t[e]];if(r&&r(n,t))return}return e(n,...r)},Le={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xe=(e,t)=>n=>{if(!("key"in n))return;const s=(0,r.rs)(n.key);return t.some((e=>e===s||Le[e]===s))?e(n):void 0},De={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Pe(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),Pe(e,!0),r.enter(e)):r.leave(e,(()=>{Pe(e,!1)})):Pe(e,t))},beforeUnmount(e,{value:t}){Pe(e,t)}};function Pe(e,t){e.style.display=t?e._vod:"none"}function Me(){De.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Fe=(0,r.l7)({patchProp:O},u);let Ue,Ve=!1;function je(){return Ue||(Ue=(0,s.Us)(Fe))}function $e(){return Ue=Ve?Ue:(0,s.Eo)(Fe),Ve=!0,Ue}const Be=(...e)=>{je().render(...e)},He=(...e)=>{$e().hydrate(...e)},qe=(...e)=>{const t=je().createApp(...e);const{mount:n}=t;return t.mount=e=>{const s=Ge(e);if(!s)return;const i=t._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t},We=(...e)=>{const t=$e().createApp(...e);const{mount:n}=t;return t.mount=e=>{const t=Ge(e);if(t)return n(t,!0,t instanceof SVGElement)},t};function Ge(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}let Ke=!1;const ze=()=>{Ke||(Ke=!0,Ne(),Me())}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return p},DM:function(){return H},E9:function(){return me},F7:function(){return P},Gg:function(){return te},HD:function(){return G},He:function(){return de},Kn:function(){return z},Kp:function(){return c},NO:function(){return x},Nj:function(){return fe},Od:function(){return U},PO:function(){return Z},Pq:function(){return T},RI:function(){return j},S0:function(){return ee},W7:function(){return Q},WB:function(){return w},WV:function(){return S},Z6:function(){return O},_A:function(){return ie},_N:function(){return B},aN:function(){return b},aU:function(){return le},dG:function(){return L},e1:function(){return o},eS:function(){return _},fY:function(){return r},hR:function(){return ue},hq:function(){return C},ir:function(){return he},j5:function(){return u},kC:function(){return ce},kJ:function(){return $},kT:function(){return R},l7:function(){return F},m:function(){return s},mf:function(){return W},rs:function(){return ae},tI:function(){return J},tR:function(){return M},vs:function(){return m},wh:function(){return ne},yA:function(){return I},yL:function(){return d},yk:function(){return K},zw:function(){return N}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const s={[1]:"TEXT",[2]:"CLASS",[4]:"STYLE",[8]:"PROPS",[16]:"FULL_PROPS",[32]:"HYDRATE_EVENTS",[64]:"STABLE_FRAGMENT",[128]:"KEYED_FRAGMENT",[256]:"UNKEYED_FRAGMENT",[512]:"NEED_PATCH",[1024]:"DYNAMIC_SLOTS",[2048]:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i),a=2;function c(e,t=0,n=e.length){let r=e.split(/(\r?\n)/);const s=r.filter(((e,t)=>t%2===1));r=r.filter(((e,t)=>t%2===0));let i=0;const o=[];for(let c=0;c<r.length;c++)if(i+=r[c].length+(s[c]&&s[c].length||0),i>=t){for(let e=c-a;e<=c+a||n>i;e++){if(e<0||e>=r.length)continue;const a=e+1;o.push(`${a}${" ".repeat(Math.max(3-String(a).length,0))}|  ${r[e]}`);const u=r[e].length,l=s[e]&&s[e].length||0;if(e===c){const e=t-(i-(u+l)),r=Math.max(1,n>i?u-e:n-t);o.push("   |  "+" ".repeat(e)+"^".repeat(r))}else if(e>c){if(n>i){const e=Math.max(Math.min(n-i,u),1);o.push("   |  "+"^".repeat(e))}i+=u+l}}break}return o.join("\n")}function u(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=G(r)?d(r):u(r);if(s)for(const e in s)t[e]=s[e]}return t}return G(e)||z(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:([^]+)/,f=/\/\*.*?\*\//gs;function d(e){const t={};return e.replace(f,"").split(l).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function p(e){let t="";if(G(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=p(e[n]);r&&(t+=r+" ")}else if(z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function m(e){if(!e)return null;let{class:t,style:n}=e;return t&&!G(t)&&(e.class=p(t)),n&&(e.style=u(n)),e}const g="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",y="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",v="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",_=r(g),b=r(y),w=r(v),E="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",T=r(E);function I(e){return!!e||""===e}function k(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=S(e[r],t[r]);return n}function S(e,t){if(e===t)return!0;let n=q(e),r=q(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=K(e),r=K(t),n||r)return e===t;if(n=$(e),r=$(t),n||r)return!(!n||!r)&&k(e,t);if(n=z(e),r=z(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!S(e[n],t[n]))return!1}}return String(e)===String(t)}function C(e,t){return e.findIndex((e=>S(e,t)))}const N=e=>G(e)?e:null==e?"":$(e)||z(e)&&(e.toString===Y||!W(e.toString))?JSON.stringify(e,A,2):String(e),A=(e,t)=>t&&t.__v_isRef?A(e,t.value):B(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:H(t)?{[`Set(${t.size})`]:[...t.values()]}:!z(t)||$(t)||Z(t)?t:String(t),R={},O=[],L=()=>{},x=()=>!1,D=/^on[^a-z]/,P=e=>D.test(e),M=e=>e.startsWith("onUpdate:"),F=Object.assign,U=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},V=Object.prototype.hasOwnProperty,j=(e,t)=>V.call(e,t),$=Array.isArray,B=e=>"[object Map]"===X(e),H=e=>"[object Set]"===X(e),q=e=>"[object Date]"===X(e),W=e=>"function"===typeof e,G=e=>"string"===typeof e,K=e=>"symbol"===typeof e,z=e=>null!==e&&"object"===typeof e,J=e=>z(e)&&W(e.then)&&W(e.catch),Y=Object.prototype.toString,X=e=>Y.call(e),Q=e=>X(e).slice(8,-1),Z=e=>"[object Object]"===X(e),ee=e=>G(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,te=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ne=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),re=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},se=/-(\w)/g,ie=re((e=>e.replace(se,((e,t)=>t?t.toUpperCase():"")))),oe=/\B([A-Z])/g,ae=re((e=>e.replace(oe,"-$1").toLowerCase())),ce=re((e=>e.charAt(0).toUpperCase()+e.slice(1))),ue=re((e=>e?`on${ce(e)}`:"")),le=(e,t)=>!Object.is(e,t),he=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fe=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},de=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let pe;const me=()=>pe||(pe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},5658:function(e,t,n){"use strict";n.d(t,{o:function(){return In},QT:function(){return kn}});n(7658);
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const r="undefined"!==typeof window;const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>s?Symbol(e):e,o=(e,t,n)=>a({l:e,k:t,s:n}),a=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),c=e=>"number"===typeof e&&isFinite(e),u=e=>"[object Date]"===k(e),l=e=>"[object RegExp]"===k(e),h=e=>S(e)&&0===Object.keys(e).length;function f(e,t){"undefined"!==typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const d=Object.assign;let p;const m=()=>p||(p="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});function g(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const y=Object.prototype.hasOwnProperty;function v(e,t){return y.call(e,t)}const _=Array.isArray,b=e=>"function"===typeof e,w=e=>"string"===typeof e,E=e=>"boolean"===typeof e,T=e=>null!==e&&"object"===typeof e,I=Object.prototype.toString,k=e=>I.call(e),S=e=>"[object Object]"===k(e),C=e=>null==e?"":_(e)||S(e)&&e.toString===I?JSON.stringify(e,null,2):String(e);
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const N={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};N.EXPECTED_TOKEN,N.INVALID_TOKEN_IN_PLACEHOLDER,N.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,N.UNKNOWN_ESCAPE_SEQUENCE,N.INVALID_UNICODE_ESCAPE_SEQUENCE,N.UNBALANCED_CLOSING_BRACE,N.UNTERMINATED_CLOSING_BRACE,N.EMPTY_PLACEHOLDER,N.NOT_ALLOW_NEST_PLACEHOLDER,N.INVALID_LINKED_FORMAT,N.MUST_HAVE_MESSAGES_IN_PLURAL,N.UNEXPECTED_EMPTY_LINKED_MODIFIER,N.UNEXPECTED_EMPTY_LINKED_KEY,N.UNEXPECTED_LEXICAL_ANALYSIS;function A(e,t,n={}){const{domain:r,messages:s,args:i}=n,o=e,a=new SyntaxError(String(o));return a.code=e,t&&(a.location=t),a.domain=r,a}function R(e){throw e}function O(e,t,n){return{line:e,column:t,offset:n}}function L(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const x=" ",D="\r",P="\n",M=String.fromCharCode(8232),F=String.fromCharCode(8233);function U(e){const t=e;let n=0,r=1,s=1,i=0;const o=e=>t[e]===D&&t[e+1]===P,a=e=>t[e]===P,c=e=>t[e]===F,u=e=>t[e]===M,l=e=>o(e)||a(e)||c(e)||u(e),h=()=>n,f=()=>r,d=()=>s,p=()=>i,m=e=>o(e)||c(e)||u(e)?P:t[e],g=()=>m(n),y=()=>m(n+i);function v(){return i=0,l(n)&&(r++,s=0),o(n)&&n++,n++,s++,t[n]}function _(){return o(n+i)&&i++,i++,t[n+i]}function b(){n=0,r=1,s=1,i=0}function w(e=0){i=e}function E(){const e=n+i;while(e!==n)v();i=0}return{index:h,line:f,column:d,peekOffset:p,charAt:m,currentChar:g,currentPeek:y,next:v,peek:_,reset:b,resetPeek:w,skipToPeek:E}}const V=void 0,j="'",$="tokenizer";function B(e,t={}){const n=!1!==t.location,r=U(e),s=()=>r.index(),i=()=>O(r.line(),r.column(),r.index()),o=i(),a=s(),c={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:l}=t;function h(e,t,n,...r){const s=u();if(t.column+=n,t.offset+=n,l){const n=L(s.startLoc,t),i=A(e,n,{domain:$,args:r});l(i)}}function f(e,t,r){e.endLoc=i(),e.currentType=t;const s={type:t};return n&&(s.loc=L(e.startLoc,e.endLoc)),null!=r&&(s.value=r),s}const d=e=>f(e,14);function p(e,t){return e.currentChar()===t?(e.next(),t):(h(N.EXPECTED_TOKEN,i(),0,t),"")}function m(e){let t="";while(e.currentPeek()===x||e.currentPeek()===P)t+=e.currentPeek(),e.peek();return t}function g(e){const t=m(e);return e.skipToPeek(),t}function y(e){if(e===V)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function v(e){if(e===V)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}function _(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=y(e.currentPeek());return e.resetPeek(),r}function b(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r="-"===e.currentPeek()?e.peek():e.currentPeek(),s=v(r);return e.resetPeek(),s}function w(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=e.currentPeek()===j;return e.resetPeek(),r}function E(e,t){const{currentType:n}=t;if(8!==n)return!1;m(e);const r="."===e.currentPeek();return e.resetPeek(),r}function T(e,t){const{currentType:n}=t;if(9!==n)return!1;m(e);const r=y(e.currentPeek());return e.resetPeek(),r}function I(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;m(e);const r=":"===e.currentPeek();return e.resetPeek(),r}function k(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?y(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||t===x||!t)&&(t===P?(e.peek(),r()):y(t))},s=r();return e.resetPeek(),s}function S(e){m(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function C(e){const t=m(e),n="%"===e.currentPeek()&&"{"===e.peek();return e.resetPeek(),{isModulo:n,hasSpace:t.length>0}}function R(e,t=!0){const n=(t=!1,r="",s=!1)=>{const i=e.currentPeek();return"{"===i?"%"!==r&&t:"@"!==i&&i?"%"===i?(e.peek(),n(t,"%",!0)):"|"===i?!("%"!==r&&!s)||!(r===x||r===P):i===x?(e.peek(),n(!0,x,s)):i!==P||(e.peek(),n(!0,P,s)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function D(e,t){const n=e.currentChar();return n===V?V:t(n)?(e.next(),n):null}function M(e){const t=e=>{const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t};return D(e,t)}function F(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57};return D(e,t)}function B(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102};return D(e,t)}function H(e){let t="",n="";while(t=F(e))n+=t;return n}function q(e){g(e);const t=e.currentChar();return"%"!==t&&h(N.EXPECTED_TOKEN,i(),0,t),e.next(),"%"}function W(e){let t="";while(1){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!R(e))break;t+=n,e.next()}else if(n===x||n===P)if(R(e))t+=n,e.next();else{if(S(e))break;t+=n,e.next()}else t+=n,e.next()}return t}function G(e){g(e);let t="",n="";while(t=M(e))n+=t;return e.currentChar()===V&&h(N.UNTERMINATED_CLOSING_BRACE,i(),0),n}function K(e){g(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${H(e)}`):t+=H(e),e.currentChar()===V&&h(N.UNTERMINATED_CLOSING_BRACE,i(),0),t}function z(e){g(e),p(e,"'");let t="",n="";const r=e=>e!==j&&e!==P;while(t=D(e,r))n+="\\"===t?J(e):t;const s=e.currentChar();return s===P||s===V?(h(N.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),s===P&&(e.next(),p(e,"'")),n):(p(e,"'"),n)}function J(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return Y(e,t,4);case"U":return Y(e,t,6);default:return h(N.UNKNOWN_ESCAPE_SEQUENCE,i(),0,t),""}}function Y(e,t,n){p(e,t);let r="";for(let s=0;s<n;s++){const n=B(e);if(!n){h(N.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function X(e){g(e);let t="",n="";const r=e=>"{"!==e&&"}"!==e&&e!==x&&e!==P;while(t=D(e,r))n+=t;return n}function Q(e){let t="",n="";while(t=M(e))n+=t;return n}function Z(e){const t=(n=!1,r)=>{const s=e.currentChar();return"{"!==s&&"%"!==s&&"@"!==s&&"|"!==s&&s?s===x?r:s===P?(r+=s,e.next(),t(n,r)):(r+=s,e.next(),t(!0,r)):r};return t(!1,"")}function ee(e){g(e);const t=p(e,"|");return g(e),t}function te(e,t){let n=null;const r=e.currentChar();switch(r){case"{":return t.braceNest>=1&&h(N.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),e.next(),n=f(t,2,"{"),g(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&h(N.EMPTY_PLACEHOLDER,i(),0),e.next(),n=f(t,3,"}"),t.braceNest--,t.braceNest>0&&g(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&h(N.UNTERMINATED_CLOSING_BRACE,i(),0),n=ne(e,t)||d(t),t.braceNest=0,n;default:let r=!0,s=!0,o=!0;if(S(e))return t.braceNest>0&&h(N.UNTERMINATED_CLOSING_BRACE,i(),0),n=f(t,1,ee(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return h(N.UNTERMINATED_CLOSING_BRACE,i(),0),t.braceNest=0,re(e,t);if(r=_(e,t))return n=f(t,5,G(e)),g(e),n;if(s=b(e,t))return n=f(t,6,K(e)),g(e),n;if(o=w(e,t))return n=f(t,7,z(e)),g(e),n;if(!r&&!s&&!o)return n=f(t,13,X(e)),h(N.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,n.value),g(e),n;break}return n}function ne(e,t){const{currentType:n}=t;let r=null;const s=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||s!==P&&s!==x||h(N.INVALID_LINKED_FORMAT,i(),0),s){case"@":return e.next(),r=f(t,8,"@"),t.inLinked=!0,r;case".":return g(e),e.next(),f(t,9,".");case":":return g(e),e.next(),f(t,10,":");default:return S(e)?(r=f(t,1,ee(e)),t.braceNest=0,t.inLinked=!1,r):E(e,t)||I(e,t)?(g(e),ne(e,t)):T(e,t)?(g(e),f(t,12,Q(e))):k(e,t)?(g(e),"{"===s?te(e,t)||r:f(t,11,Z(e))):(8===n&&h(N.INVALID_LINKED_FORMAT,i(),0),t.braceNest=0,t.inLinked=!1,re(e,t))}}function re(e,t){let n={type:14};if(t.braceNest>0)return te(e,t)||d(t);if(t.inLinked)return ne(e,t)||d(t);const r=e.currentChar();switch(r){case"{":return te(e,t)||d(t);case"}":return h(N.UNBALANCED_CLOSING_BRACE,i(),0),e.next(),f(t,3,"}");case"@":return ne(e,t)||d(t);default:if(S(e))return n=f(t,1,ee(e)),t.braceNest=0,t.inLinked=!1,n;const{isModulo:r,hasSpace:s}=C(e);if(r)return s?f(t,0,W(e)):f(t,4,q(e));if(R(e))return f(t,0,W(e));break}return n}function se(){const{currentType:e,offset:t,startLoc:n,endLoc:o}=c;return c.lastType=e,c.lastOffset=t,c.lastStartLoc=n,c.lastEndLoc=o,c.offset=s(),c.startLoc=i(),r.currentChar()===V?f(c,14):re(r,c)}return{nextToken:se,currentOffset:s,currentPosition:i,context:u}}const H="parser",q=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function W(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function G(e={}){const t=!1!==e.location,{onError:n}=e;function r(e,t,r,s,...i){const o=e.currentPosition();if(o.offset+=s,o.column+=s,n){const e=L(r,o),s=A(t,e,{domain:H,args:i});n(s)}}function s(e,n,r){const s={type:e,start:n,end:n};return t&&(s.loc={start:r,end:r}),s}function i(e,n,r,s){e.end=n,s&&(e.type=s),t&&e.loc&&(e.loc.end=r)}function o(e,t){const n=e.context(),r=s(3,n.offset,n.startLoc);return r.value=t,i(r,e.currentOffset(),e.currentPosition()),r}function a(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=s(5,r,o);return a.index=parseInt(t,10),e.nextToken(),i(a,e.currentOffset(),e.currentPosition()),a}function c(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=s(4,r,o);return a.key=t,e.nextToken(),i(a,e.currentOffset(),e.currentPosition()),a}function u(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=s(9,r,o);return a.value=t.replace(q,W),e.nextToken(),i(a,e.currentOffset(),e.currentPosition()),a}function l(e){const t=e.nextToken(),n=e.context(),{lastOffset:o,lastStartLoc:a}=n,c=s(8,o,a);return 12!==t.type?(r(e,N.UNEXPECTED_EMPTY_LINKED_MODIFIER,n.lastStartLoc,0),c.value="",i(c,o,a),{nextConsumeToken:t,node:c}):(null==t.value&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,n.lastStartLoc,0,K(t)),c.value=t.value||"",i(c,e.currentOffset(),e.currentPosition()),{node:c})}function h(e,t){const n=e.context(),r=s(7,n.offset,n.startLoc);return r.value=t,i(r,e.currentOffset(),e.currentPosition()),r}function f(e){const t=e.context(),n=s(6,t.offset,t.startLoc);let o=e.nextToken();if(9===o.type){const t=l(e);n.modifier=t.node,o=t.nextConsumeToken||e.nextToken()}switch(10!==o.type&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,K(o)),o=e.nextToken(),2===o.type&&(o=e.nextToken()),o.type){case 11:null==o.value&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,K(o)),n.key=h(e,o.value||"");break;case 5:null==o.value&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,K(o)),n.key=c(e,o.value||"");break;case 6:null==o.value&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,K(o)),n.key=a(e,o.value||"");break;case 7:null==o.value&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,K(o)),n.key=u(e,o.value||"");break;default:r(e,N.UNEXPECTED_EMPTY_LINKED_KEY,t.lastStartLoc,0);const l=e.context(),f=s(7,l.offset,l.startLoc);return f.value="",i(f,l.offset,l.startLoc),n.key=f,i(n,l.offset,l.startLoc),{nextConsumeToken:o,node:n}}return i(n,e.currentOffset(),e.currentPosition()),{node:n}}function p(e){const t=e.context(),n=1===t.currentType?e.currentOffset():t.offset,l=1===t.currentType?t.endLoc:t.startLoc,h=s(2,n,l);h.items=[];let d=null;do{const n=d||e.nextToken();switch(d=null,n.type){case 0:null==n.value&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,K(n)),h.items.push(o(e,n.value||""));break;case 6:null==n.value&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,K(n)),h.items.push(a(e,n.value||""));break;case 5:null==n.value&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,K(n)),h.items.push(c(e,n.value||""));break;case 7:null==n.value&&r(e,N.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,K(n)),h.items.push(u(e,n.value||""));break;case 8:const s=f(e);h.items.push(s.node),d=s.nextConsumeToken||null;break}}while(14!==t.currentType&&1!==t.currentType);const p=1===t.currentType?t.lastOffset:e.currentOffset(),m=1===t.currentType?t.lastEndLoc:e.currentPosition();return i(h,p,m),h}function m(e,t,n,o){const a=e.context();let c=0===o.items.length;const u=s(1,t,n);u.cases=[],u.cases.push(o);do{const t=p(e);c||(c=0===t.items.length),u.cases.push(t)}while(14!==a.currentType);return c&&r(e,N.MUST_HAVE_MESSAGES_IN_PLURAL,n,0),i(u,e.currentOffset(),e.currentPosition()),u}function g(e){const t=e.context(),{offset:n,startLoc:r}=t,s=p(e);return 14===t.currentType?s:m(e,n,r,s)}function y(n){const o=B(n,d({},e)),a=o.context(),c=s(0,a.offset,a.startLoc);return t&&c.loc&&(c.loc.source=n),c.body=g(o),14!==a.currentType&&r(o,N.UNEXPECTED_LEXICAL_ANALYSIS,a.lastStartLoc,0,n[a.offset]||""),i(c,o.currentOffset(),o.currentPosition()),c}return{parse:y}}function K(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function z(e,t={}){const n={ast:e,helpers:new Set},r=()=>n,s=e=>(n.helpers.add(e),e);return{context:r,helper:s}}function J(e,t){for(let n=0;n<e.length;n++)Y(e[n],t)}function Y(e,t){switch(e.type){case 1:J(e.cases,t),t.helper("plural");break;case 2:J(e.items,t);break;case 6:const n=e;Y(n.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function X(e,t={}){const n=z(e);n.helper("normalize"),e.body&&Y(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function Q(e,t){const{sourceMap:n,filename:r,breakLineCode:s,needIndent:i}=t,o={source:e.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:s,needIndent:i,indentLevel:0},a=()=>o;function c(e,t){o.code+=e}function u(e,t=!0){const n=t?s:"";c(i?n+"  ".repeat(e):n)}function l(e=!0){const t=++o.indentLevel;e&&u(t)}function h(e=!0){const t=--o.indentLevel;e&&u(t)}function f(){u(o.indentLevel)}const d=e=>`_${e}`,p=()=>o.needIndent;return{context:a,push:c,indent:l,deindent:h,newline:f,helper:d,needIndent:p}}function Z(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),re(e,t.key),t.modifier?(e.push(", "),re(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function ee(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const s=t.items.length;for(let i=0;i<s;i++){if(re(e,t.items[i]),i===s-1)break;e.push(", ")}e.deindent(r()),e.push("])")}function te(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const s=t.cases.length;for(let n=0;n<s;n++){if(re(e,t.cases[n]),n===s-1)break;e.push(", ")}e.deindent(r()),e.push("])")}}function ne(e,t){t.body?re(e,t.body):e.push("null")}function re(e,t){const{helper:n}=e;switch(t.type){case 0:ne(e,t);break;case 1:te(e,t);break;case 2:ee(e,t);break;case 6:Z(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:0}}const se=(e,t={})=>{const n=w(t.mode)?t.mode:"normal",r=w(t.filename)?t.filename:"message.intl",s=!!t.sourceMap,i=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",o=t.needIndent?t.needIndent:"arrow"!==n,a=e.helpers||[],c=Q(e,{mode:n,filename:r,sourceMap:s,breakLineCode:i,needIndent:o});c.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),c.indent(o),a.length>0&&(c.push(`const { ${a.map((e=>`${e}: _${e}`)).join(", ")} } = ctx`),c.newline()),c.push("return "),re(c,e),c.deindent(o),c.push("}");const{code:u,map:l}=c.context();return{ast:e,code:u,map:l?l.toJSON():void 0}};function ie(e,t={}){const n=d({},t),r=G(n),s=r.parse(e);return X(s,n),se(s,n)}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const oe={I18nInit:"i18n:init",FunctionTranslate:"function:translate"},ae=[];ae[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},ae[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},ae[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},ae[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},ae[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},ae[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},ae[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const ce=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ue(e){return ce.test(e)}function le(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t!==n||34!==t&&39!==t?e:e.slice(1,-1)}function he(e){if(void 0===e||null===e)return"o";const t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function fe(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(ue(t)?le(t):"*"+t)}function de(e){const t=[];let n,r,s,i,o,a,c,u=-1,l=0,h=0;const f=[];function d(){const t=e[u+1];if(5===l&&"'"===t||6===l&&'"'===t)return u++,s="\\"+t,f[0](),!0}f[0]=()=>{void 0===r?r=s:r+=s},f[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},f[2]=()=>{f[0](),h++},f[3]=()=>{if(h>0)h--,l=4,f[0]();else{if(h=0,void 0===r)return!1;if(r=fe(r),!1===r)return!1;f[1]()}};while(null!==l)if(u++,n=e[u],"\\"!==n||!d()){if(i=he(n),c=ae[l],o=c[i]||c["l"]||8,8===o)return;if(l=o[0],void 0!==o[1]&&(a=f[o[1]],a&&(s=n,!1===a())))return;if(7===l)return t}}const pe=new Map;function me(e,t){return T(e)?e[t]:null}function ge(e,t){if(!T(e))return null;let n=pe.get(t);if(n||(n=de(t),n&&pe.set(t,n)),!n)return null;const r=n.length;let s=e,i=0;while(i<r){const e=s[n[i]];if(void 0===e)return null;s=e,i++}return s}const ye=e=>e,ve=e=>"",_e="text",be=e=>0===e.length?"":e.join(""),we=C;function Ee(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function Te(e){const t=c(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(c(e.named.count)||c(e.named.n))?c(e.named.count)?e.named.count:c(e.named.n)?e.named.n:t:t}function Ie(e,t){t.count||(t.count=e),t.n||(t.n=e)}function ke(e={}){const t=e.locale,n=Te(e),r=T(e.pluralRules)&&w(t)&&b(e.pluralRules[t])?e.pluralRules[t]:Ee,s=T(e.pluralRules)&&w(t)&&b(e.pluralRules[t])?Ee:void 0,i=e=>e[r(n,e.length,s)],o=e.list||[],a=e=>o[e],u=e.named||{};c(e.pluralIndex)&&Ie(n,u);const l=e=>u[e];function h(t){const n=b(e.messages)?e.messages(t):!!T(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):ve)}const f=t=>e.modifiers?e.modifiers[t]:ye,d=S(e.processor)&&b(e.processor.normalize)?e.processor.normalize:be,p=S(e.processor)&&b(e.processor.interpolate)?e.processor.interpolate:we,m=S(e.processor)&&w(e.processor.type)?e.processor.type:_e,g=(e,...t)=>{const[n,r]=t;let s="text",i="";1===t.length?T(n)?(i=n.modifier||i,s=n.type||s):w(n)&&(i=n||i):2===t.length&&(w(n)&&(i=n||i),w(r)&&(s=r||s));let o=h(e)(y);return"vnode"===s&&_(o)&&i&&(o=o[0]),i?f(i)(o,s):o},y={["list"]:a,["named"]:l,["plural"]:i,["linked"]:g,["message"]:h,["type"]:m,["interpolate"]:p,["normalize"]:d};return y}let Se=null;function Ce(e){Se=e}function Ne(e,t,n){Se&&Se.emit(oe.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Ae=Re(oe.FunctionTranslate);function Re(e){return t=>Se&&Se.emit(e,t)}const Oe={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};Oe.NOT_FOUND_KEY,Oe.FALLBACK_TO_TRANSLATE,Oe.CANNOT_FORMAT_NUMBER,Oe.FALLBACK_TO_NUMBER_FORMAT,Oe.CANNOT_FORMAT_DATE,Oe.FALLBACK_TO_DATE_FORMAT;function Le(e,t,n){return[...new Set([n,..._(t)?t:T(t)?Object.keys(t):w(t)?[t]:[n]])]}function xe(e,t,n){const r=w(n)?n:Ve,s=e;s.__localeChainCache||(s.__localeChainCache=new Map);let i=s.__localeChainCache.get(r);if(!i){i=[];let e=[n];while(_(e))e=De(i,e,t);const o=_(t)||!S(t)?t:t["default"]?t["default"]:null;e=w(o)?[o]:o,_(e)&&De(i,e,!1),s.__localeChainCache.set(r,i)}return i}function De(e,t,n){let r=!0;for(let s=0;s<t.length&&E(r);s++){const i=t[s];w(i)&&(r=Pe(e,t[s],n))}return r}function Pe(e,t,n){let r;const s=t.split("-");do{const t=s.join("-");r=Me(e,t,n),s.splice(-1,1)}while(s.length&&!0===r);return r}function Me(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const s=t.replace(/!/g,"");e.push(s),(_(n)||S(n))&&n[s]&&(r=n[s])}return r}const Fe="9.2.2",Ue=-1,Ve="en-US",je="",$e=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Be(){return{upper:(e,t)=>"text"===t&&w(e)?e.toUpperCase():"vnode"===t&&T(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&w(e)?e.toLowerCase():"vnode"===t&&T(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&w(e)?$e(e):"vnode"===t&&T(e)&&"__v_isVNode"in e?$e(e.children):e}}let He,qe,We;function Ge(e){He=e}function Ke(e){qe=e}function ze(e){We=e}let Je=null;const Ye=e=>{Je=e},Xe=()=>Je;let Qe=null;const Ze=e=>{Qe=e},et=()=>Qe;let tt=0;function nt(e={}){const t=w(e.version)?e.version:Fe,n=w(e.locale)?e.locale:Ve,r=_(e.fallbackLocale)||S(e.fallbackLocale)||w(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,s=S(e.messages)?e.messages:{[n]:{}},i=S(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=S(e.numberFormats)?e.numberFormats:{[n]:{}},a=d({},e.modifiers||{},Be()),c=e.pluralRules||{},u=b(e.missing)?e.missing:null,h=!E(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,p=!E(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,m=!!e.fallbackFormat,g=!!e.unresolving,y=b(e.postTranslation)?e.postTranslation:null,v=S(e.processor)?e.processor:null,I=!E(e.warnHtmlMessage)||e.warnHtmlMessage,k=!!e.escapeParameter,C=b(e.messageCompiler)?e.messageCompiler:He,N=b(e.messageResolver)?e.messageResolver:qe||me,A=b(e.localeFallbacker)?e.localeFallbacker:We||Le,R=T(e.fallbackContext)?e.fallbackContext:void 0,O=b(e.onWarn)?e.onWarn:f,L=e,x=T(L.__datetimeFormatters)?L.__datetimeFormatters:new Map,D=T(L.__numberFormatters)?L.__numberFormatters:new Map,P=T(L.__meta)?L.__meta:{};tt++;const M={version:t,cid:tt,locale:n,fallbackLocale:r,messages:s,modifiers:a,pluralRules:c,missing:u,missingWarn:h,fallbackWarn:p,fallbackFormat:m,unresolving:g,postTranslation:y,processor:v,warnHtmlMessage:I,escapeParameter:k,messageCompiler:C,messageResolver:N,localeFallbacker:A,fallbackContext:R,onWarn:O,__meta:P};return M.datetimeFormats=i,M.numberFormats=o,M.__datetimeFormatters=x,M.__numberFormatters=D,__INTLIFY_PROD_DEVTOOLS__&&Ne(M,t,P),M}function rt(e,t,n,r,s){const{missing:i,onWarn:o}=e;if(null!==i){const r=i(e,n,t,s);return w(r)?r:t}return t}function st(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}const it=e=>e;let ot=Object.create(null);function at(e,t={}){{const n=t.onCacheKey||it,r=n(e),s=ot[r];if(s)return s;let i=!1;const o=t.onError||R;t.onError=e=>{i=!0,o(e)};const{code:a}=ie(e,t),c=new Function(`return ${a}`)();return i?c:ot[r]=c}}let ct=N.__EXTEND_POINT__;const ut=()=>++ct,lt={INVALID_ARGUMENT:ct,INVALID_DATE_ARGUMENT:ut(),INVALID_ISO_DATE_ARGUMENT:ut(),__EXTEND_POINT__:ut()};function ht(e){return A(e,null,void 0)}lt.INVALID_ARGUMENT,lt.INVALID_DATE_ARGUMENT,lt.INVALID_ISO_DATE_ARGUMENT;const ft=()=>"",dt=e=>b(e);function pt(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:a}=e,[c,u]=_t(...t),l=E(u.missingWarn)?u.missingWarn:e.missingWarn,h=E(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,f=E(u.escapeParameter)?u.escapeParameter:e.escapeParameter,p=!!u.resolvedMessage,m=w(u.default)||E(u.default)?E(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:"",g=n||""!==m,y=w(u.locale)?u.locale:e.locale;f&&mt(u);let[v,_,b]=p?[c,y,a[y]||{}]:gt(e,c,y,o,h,l),T=v,I=c;if(p||w(T)||dt(T)||g&&(T=m,I=T),!p&&(!w(T)&&!dt(T)||!w(_)))return s?Ue:c;let k=!1;const S=()=>{k=!0},C=dt(T)?T:yt(e,c,_,T,I,S);if(k)return T;const N=wt(e,_,b,u),A=ke(N),R=vt(e,C,A),O=r?r(R,c):R;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:w(c)?c:dt(T)?T.key:"",locale:_||(dt(T)?T.locale:""),format:w(T)?T:dt(T)?T.source:"",message:O};t.meta=d({},e.__meta,Xe()||{}),Ae(t)}return O}function mt(e){_(e.list)?e.list=e.list.map((e=>w(e)?g(e):e)):T(e.named)&&Object.keys(e.named).forEach((t=>{w(e.named[t])&&(e.named[t]=g(e.named[t]))}))}function gt(e,t,n,r,s,i){const{messages:o,onWarn:a,messageResolver:c,localeFallbacker:u}=e,l=u(e,r,n);let h,f={},d=null,p=n,m=null;const g="translate";for(let y=0;y<l.length;y++){h=m=l[y],f=o[h]||{};if(null===(d=c(f,t))&&(d=f[t]),w(d)||b(d))break;const n=rt(e,t,h,i,g);n!==t&&(d=n),p=m}return[d,h,f]}function yt(e,t,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:a}=e;if(dt(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}if(null==o){const e=()=>r;return e.locale=n,e.key=t,e}const c=o(r,bt(e,n,s,r,a,i));return c.locale=n,c.key=t,c.source=r,c}function vt(e,t,n){const r=t(n);return r}function _t(...e){const[t,n,r]=e,s={};if(!w(t)&&!c(t)&&!dt(t))throw ht(lt.INVALID_ARGUMENT);const i=c(t)?String(t):(dt(t),t);return c(n)?s.plural=n:w(n)?s.default=n:S(n)&&!h(n)?s.named=n:_(n)&&(s.list=n),c(r)?s.plural=r:w(r)?s.default=r:S(r)&&d(s,r),[i,s]}function bt(e,t,n,r,s,i){return{warnHtmlMessage:s,onError:e=>{throw i&&i(e),e},onCacheKey:e=>o(t,n,e)}}function wt(e,t,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:u,missingWarn:l,fallbackContext:h}=e,f=r=>{let s=o(n,r);if(null==s&&h){const[,,e]=gt(h,r,t,a,u,l);s=o(e,r)}if(w(s)){let n=!1;const i=()=>{n=!0},o=yt(e,r,t,s,r,i);return n?ft:o}return dt(s)?s:ft},d={locale:t,modifiers:s,pluralRules:i,messages:f};return e.processor&&(d.processor=e.processor),r.list&&(d.list=r.list),r.named&&(d.named=r.named),c(r.plural)&&(d.pluralIndex=r.plural),d}const Et="undefined"!==typeof Intl;Et&&Intl.DateTimeFormat,Et&&Intl.NumberFormat;function Tt(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=e,{__datetimeFormatters:a}=e;const[c,u,l,f]=kt(...t),p=E(l.missingWarn)?l.missingWarn:e.missingWarn,m=(E(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,!!l.part),g=w(l.locale)?l.locale:e.locale,y=o(e,s,g);if(!w(c)||""===c)return new Intl.DateTimeFormat(g,f).format(u);let v,_={},b=null,T=g,I=null;const k="datetime format";for(let h=0;h<y.length;h++){if(v=I=y[h],_=n[v]||{},b=_[c],S(b))break;rt(e,c,v,p,k),T=I}if(!S(b)||!w(v))return r?Ue:c;let C=`${v}__${c}`;h(f)||(C=`${C}__${JSON.stringify(f)}`);let N=a.get(C);return N||(N=new Intl.DateTimeFormat(v,d({},b,f)),a.set(C,N)),m?N.formatToParts(u):N.format(u)}const It=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function kt(...e){const[t,n,r,s]=e,i={};let o,a={};if(w(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw ht(lt.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();o=new Date(n);try{o.toISOString()}catch(l){throw ht(lt.INVALID_ISO_DATE_ARGUMENT)}}else if(u(t)){if(isNaN(t.getTime()))throw ht(lt.INVALID_DATE_ARGUMENT);o=t}else{if(!c(t))throw ht(lt.INVALID_ARGUMENT);o=t}return w(n)?i.key=n:S(n)&&Object.keys(n).forEach((e=>{It.includes(e)?a[e]=n[e]:i[e]=n[e]})),w(r)?i.locale=r:S(r)&&(a=r),S(s)&&(a=s),[i.key||"",o,i,a]}function St(e,t,n){const r=e;for(const s in n){const e=`${t}__${s}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function Ct(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=e,{__numberFormatters:a}=e;const[c,u,l,f]=At(...t),p=E(l.missingWarn)?l.missingWarn:e.missingWarn,m=(E(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,!!l.part),g=w(l.locale)?l.locale:e.locale,y=o(e,s,g);if(!w(c)||""===c)return new Intl.NumberFormat(g,f).format(u);let v,_={},b=null,T=g,I=null;const k="number format";for(let h=0;h<y.length;h++){if(v=I=y[h],_=n[v]||{},b=_[c],S(b))break;rt(e,c,v,p,k),T=I}if(!S(b)||!w(v))return r?Ue:c;let C=`${v}__${c}`;h(f)||(C=`${C}__${JSON.stringify(f)}`);let N=a.get(C);return N||(N=new Intl.NumberFormat(v,d({},b,f)),a.set(C,N)),m?N.formatToParts(u):N.format(u)}const Nt=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function At(...e){const[t,n,r,s]=e,i={};let o={};if(!c(t))throw ht(lt.INVALID_ARGUMENT);const a=t;return w(n)?i.key=n:S(n)&&Object.keys(n).forEach((e=>{Nt.includes(e)?o[e]=n[e]:i[e]=n[e]})),w(r)?i.locale=r:S(r)&&(o=r),S(s)&&(o=s),[i.key||"",a,i,o]}function Rt(e,t,n){const r=e;for(const s in n){const e=`${t}__${s}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(m().__INTLIFY_PROD_DEVTOOLS__=!1);var Ot=n(3396),Lt=n(4870);
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const xt="9.2.2";function Dt(){let e=!1;"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(e=!0,m().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(e=!0,m().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(m().__INTLIFY_PROD_DEVTOOLS__=!1)}let Pt=Oe.__EXTEND_POINT__;const Mt=()=>++Pt,Ft={FALLBACK_TO_ROOT:Pt,NOT_SUPPORTED_PRESERVE:Mt(),NOT_SUPPORTED_FORMATTER:Mt(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:Mt(),NOT_SUPPORTED_GET_CHOICE_INDEX:Mt(),COMPONENT_NAME_LEGACY_COMPATIBLE:Mt(),NOT_FOUND_PARENT_SCOPE:Mt()};Ft.FALLBACK_TO_ROOT,Ft.NOT_SUPPORTED_PRESERVE,Ft.NOT_SUPPORTED_FORMATTER,Ft.NOT_SUPPORTED_PRESERVE_DIRECTIVE,Ft.NOT_SUPPORTED_GET_CHOICE_INDEX,Ft.COMPONENT_NAME_LEGACY_COMPATIBLE,Ft.NOT_FOUND_PARENT_SCOPE;let Ut=N.__EXTEND_POINT__;const Vt=()=>++Ut,jt={UNEXPECTED_RETURN_TYPE:Ut,INVALID_ARGUMENT:Vt(),MUST_BE_CALL_SETUP_TOP:Vt(),NOT_INSLALLED:Vt(),NOT_AVAILABLE_IN_LEGACY_MODE:Vt(),REQUIRED_VALUE:Vt(),INVALID_VALUE:Vt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Vt(),NOT_INSLALLED_WITH_PROVIDE:Vt(),UNEXPECTED_ERROR:Vt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Vt(),BRIDGE_SUPPORT_VUE_2_ONLY:Vt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Vt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Vt(),__EXTEND_POINT__:Vt()};function $t(e,...t){return A(e,null,void 0)}jt.UNEXPECTED_RETURN_TYPE,jt.INVALID_ARGUMENT,jt.MUST_BE_CALL_SETUP_TOP,jt.NOT_INSLALLED,jt.UNEXPECTED_ERROR,jt.NOT_AVAILABLE_IN_LEGACY_MODE,jt.REQUIRED_VALUE,jt.INVALID_VALUE,jt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,jt.NOT_INSLALLED_WITH_PROVIDE,jt.NOT_COMPATIBLE_LEGACY_VUE_I18N,jt.BRIDGE_SUPPORT_VUE_2_ONLY,jt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION,jt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;const Bt=i("__transrateVNode"),Ht=i("__datetimeParts"),qt=i("__numberParts"),Wt=i("__setPluralRules");i("__intlifyMeta");const Gt=i("__injectWithOption");function Kt(e){if(!T(e))return e;for(const t in e)if(v(e,t))if(t.includes(".")){const n=t.split("."),r=n.length-1;let s=e;for(let e=0;e<r;e++)n[e]in s||(s[n[e]]={}),s=s[n[e]];s[n[r]]=e[t],delete e[t],T(s[n[r]])&&Kt(s[n[r]])}else T(e[t])&&Kt(e[t]);return e}function zt(e,t){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=t,o=S(n)?n:_(r)?{}:{[e]:{}};if(_(r)&&r.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:t,resource:n}=e;t?(o[t]=o[t]||{},Yt(n,o[t])):Yt(n,o)}else w(e)&&Yt(JSON.parse(e),o)})),null==s&&i)for(const a in o)v(o,a)&&Kt(o[a]);return o}const Jt=e=>!T(e)||_(e);function Yt(e,t){if(Jt(e)||Jt(t))throw $t(jt.INVALID_VALUE);for(const n in e)v(e,n)&&(Jt(e[n])||Jt(t[n])?t[n]=e[n]:Yt(e[n],t[n]))}function Xt(e){return e.type}function Qt(e,t,n){let r=T(t.messages)?t.messages:{};"__i18nGlobal"in n&&(r=zt(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);if(s.length&&s.forEach((t=>{e.mergeLocaleMessage(t,r[t])})),T(t.datetimeFormats)){const n=Object.keys(t.datetimeFormats);n.length&&n.forEach((n=>{e.mergeDateTimeFormat(n,t.datetimeFormats[n])}))}if(T(t.numberFormats)){const n=Object.keys(t.numberFormats);n.length&&n.forEach((n=>{e.mergeNumberFormat(n,t.numberFormats[n])}))}}function Zt(e){return(0,Ot.Wm)(Ot.xv,null,e,0)}const en="__INTLIFY_META__";let tn=0;function nn(e){return(t,n,r,s)=>e(n,r,(0,Ot.FN)()||void 0,s)}const rn=()=>{const e=(0,Ot.FN)();let t=null;return e&&(t=Xt(e)[en])?{[en]:t}:null};function sn(e={},t){const{__root:n}=e,s=void 0===n;let i=!E(e.inheritLocale)||e.inheritLocale;const o=(0,Lt.iH)(n&&i?n.locale.value:w(e.locale)?e.locale:Ve),a=(0,Lt.iH)(n&&i?n.fallbackLocale.value:w(e.fallbackLocale)||_(e.fallbackLocale)||S(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:o.value),u=(0,Lt.iH)(zt(o.value,e)),h=(0,Lt.iH)(S(e.datetimeFormats)?e.datetimeFormats:{[o.value]:{}}),f=(0,Lt.iH)(S(e.numberFormats)?e.numberFormats:{[o.value]:{}});let p=n?n.missingWarn:!E(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,m=n?n.fallbackWarn:!E(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,g=n?n.fallbackRoot:!E(e.fallbackRoot)||e.fallbackRoot,y=!!e.fallbackFormat,v=b(e.missing)?e.missing:null,I=b(e.missing)?nn(e.missing):null,k=b(e.postTranslation)?e.postTranslation:null,C=n?n.warnHtmlMessage:!E(e.warnHtmlMessage)||e.warnHtmlMessage,N=!!e.escapeParameter;const A=n?n.modifiers:S(e.modifiers)?e.modifiers:{};let R,O=e.pluralRules||n&&n.pluralRules;const L=()=>{s&&Ze(null);const t={version:xt,locale:o.value,fallbackLocale:a.value,messages:u.value,modifiers:A,pluralRules:O,missing:null===I?void 0:I,missingWarn:p,fallbackWarn:m,fallbackFormat:y,unresolving:!0,postTranslation:null===k?void 0:k,warnHtmlMessage:C,escapeParameter:N,messageResolver:e.messageResolver,__meta:{framework:"vue"}};t.datetimeFormats=h.value,t.numberFormats=f.value,t.__datetimeFormatters=S(R)?R.__datetimeFormatters:void 0,t.__numberFormatters=S(R)?R.__numberFormatters:void 0;const n=nt(t);return s&&Ze(n),n};function x(){return[o.value,a.value,u.value,h.value,f.value]}R=L(),st(R,o.value,a.value);const D=(0,Ot.Fl)({get:()=>o.value,set:e=>{o.value=e,R.locale=o.value}}),P=(0,Ot.Fl)({get:()=>a.value,set:e=>{a.value=e,R.fallbackLocale=a.value,st(R,o.value,e)}}),M=(0,Ot.Fl)((()=>u.value)),F=(0,Ot.Fl)((()=>h.value)),U=(0,Ot.Fl)((()=>f.value));function V(){return b(k)?k:null}function j(e){k=e,R.postTranslation=e}function $(){return v}function B(e){null!==e&&(I=nn(e)),v=e,R.missing=I}const H=(e,t,r,i,o,a)=>{let u;if(x(),__INTLIFY_PROD_DEVTOOLS__)try{Ye(rn()),s||(R.fallbackContext=n?et():void 0),u=e(R)}finally{Ye(null),s||(R.fallbackContext=void 0)}else u=e(R);if(c(u)&&u===Ue){const[e,r]=t();return n&&g?i(n):o(e)}if(a(u))return u;throw $t(jt.UNEXPECTED_RETURN_TYPE)};function q(...e){return H((t=>Reflect.apply(pt,null,[t,...e])),(()=>_t(...e)),"translate",(t=>Reflect.apply(t.t,t,[...e])),(e=>e),(e=>w(e)))}function W(...e){const[t,n,r]=e;if(r&&!T(r))throw $t(jt.INVALID_ARGUMENT);return q(t,n,d({resolvedMessage:!0},r||{}))}function G(...e){return H((t=>Reflect.apply(Tt,null,[t,...e])),(()=>kt(...e)),"datetime format",(t=>Reflect.apply(t.d,t,[...e])),(()=>je),(e=>w(e)))}function K(...e){return H((t=>Reflect.apply(Ct,null,[t,...e])),(()=>At(...e)),"number format",(t=>Reflect.apply(t.n,t,[...e])),(()=>je),(e=>w(e)))}function z(e){return e.map((e=>w(e)||c(e)||E(e)?Zt(String(e)):e))}const J=e=>e,Y={normalize:z,interpolate:J,type:"vnode"};function X(...e){return H((t=>{let n;const r=t;try{r.processor=Y,n=Reflect.apply(pt,null,[r,...e])}finally{r.processor=null}return n}),(()=>_t(...e)),"translate",(t=>t[Bt](...e)),(e=>[Zt(e)]),(e=>_(e)))}function Q(...e){return H((t=>Reflect.apply(Ct,null,[t,...e])),(()=>At(...e)),"number format",(t=>t[qt](...e)),(()=>[]),(e=>w(e)||_(e)))}function Z(...e){return H((t=>Reflect.apply(Tt,null,[t,...e])),(()=>kt(...e)),"datetime format",(t=>t[Ht](...e)),(()=>[]),(e=>w(e)||_(e)))}function ee(e){O=e,R.pluralRules=O}function te(e,t){const n=w(t)?t:o.value,r=se(n);return null!==R.messageResolver(r,e)}function ne(e){let t=null;const n=xe(R,a.value,o.value);for(let r=0;r<n.length;r++){const s=u.value[n[r]]||{},i=R.messageResolver(s,e);if(null!=i){t=i;break}}return t}function re(e){const t=ne(e);return null!=t?t:n&&n.tm(e)||{}}function se(e){return u.value[e]||{}}function ie(e,t){u.value[e]=t,R.messages=u.value}function oe(e,t){u.value[e]=u.value[e]||{},Yt(t,u.value[e]),R.messages=u.value}function ae(e){return h.value[e]||{}}function ce(e,t){h.value[e]=t,R.datetimeFormats=h.value,St(R,e,t)}function ue(e,t){h.value[e]=d(h.value[e]||{},t),R.datetimeFormats=h.value,St(R,e,t)}function le(e){return f.value[e]||{}}function he(e,t){f.value[e]=t,R.numberFormats=f.value,Rt(R,e,t)}function fe(e,t){f.value[e]=d(f.value[e]||{},t),R.numberFormats=f.value,Rt(R,e,t)}tn++,n&&r&&((0,Ot.YP)(n.locale,(e=>{i&&(o.value=e,R.locale=e,st(R,o.value,a.value))})),(0,Ot.YP)(n.fallbackLocale,(e=>{i&&(a.value=e,R.fallbackLocale=e,st(R,o.value,a.value))})));const de={id:tn,locale:D,fallbackLocale:P,get inheritLocale(){return i},set inheritLocale(e){i=e,e&&n&&(o.value=n.locale.value,a.value=n.fallbackLocale.value,st(R,o.value,a.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:M,get modifiers(){return A},get pluralRules(){return O||{}},get isGlobal(){return s},get missingWarn(){return p},set missingWarn(e){p=e,R.missingWarn=p},get fallbackWarn(){return m},set fallbackWarn(e){m=e,R.fallbackWarn=m},get fallbackRoot(){return g},set fallbackRoot(e){g=e},get fallbackFormat(){return y},set fallbackFormat(e){y=e,R.fallbackFormat=y},get warnHtmlMessage(){return C},set warnHtmlMessage(e){C=e,R.warnHtmlMessage=e},get escapeParameter(){return N},set escapeParameter(e){N=e,R.escapeParameter=e},t:q,getLocaleMessage:se,setLocaleMessage:ie,mergeLocaleMessage:oe,getPostTranslationHandler:V,setPostTranslationHandler:j,getMissingHandler:$,setMissingHandler:B,[Wt]:ee};return de.datetimeFormats=F,de.numberFormats=U,de.rt=W,de.te=te,de.tm=re,de.d=G,de.n=K,de.getDateTimeFormat=ae,de.setDateTimeFormat=ce,de.mergeDateTimeFormat=ue,de.getNumberFormat=le,de.setNumberFormat=he,de.mergeNumberFormat=fe,de[Gt]=e.__injectWithOption,de[Bt]=X,de[Ht]=Z,de[qt]=Q,de}function on(e){const t=w(e.locale)?e.locale:Ve,n=w(e.fallbackLocale)||_(e.fallbackLocale)||S(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:t,r=b(e.missing)?e.missing:void 0,s=!E(e.silentTranslationWarn)&&!l(e.silentTranslationWarn)||!e.silentTranslationWarn,i=!E(e.silentFallbackWarn)&&!l(e.silentFallbackWarn)||!e.silentFallbackWarn,o=!E(e.fallbackRoot)||e.fallbackRoot,a=!!e.formatFallbackMessages,c=S(e.modifiers)?e.modifiers:{},u=e.pluralizationRules,h=b(e.postTranslation)?e.postTranslation:void 0,f=!w(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,p=!!e.escapeParameterHtml,m=!E(e.sync)||e.sync;let g=e.messages;if(S(e.sharedMessages)){const t=e.sharedMessages,n=Object.keys(t);g=n.reduce(((e,n)=>{const r=e[n]||(e[n]={});return d(r,t[n]),e}),g||{})}const{__i18n:y,__root:v,__injectWithOption:T}=e,I=e.datetimeFormats,k=e.numberFormats,C=e.flatJson;return{locale:t,fallbackLocale:n,messages:g,flatJson:C,datetimeFormats:I,numberFormats:k,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:a,modifiers:c,pluralRules:u,postTranslation:h,warnHtmlMessage:f,escapeParameter:p,messageResolver:e.messageResolver,inheritLocale:m,__i18n:y,__root:v,__injectWithOption:T}}function an(e={},t){{const t=sn(on(e)),n={id:t.id,get locale(){return t.locale.value},set locale(e){t.locale.value=e},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(e){t.fallbackLocale.value=e},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(e){},get missing(){return t.getMissingHandler()},set missing(e){t.setMissingHandler(e)},get silentTranslationWarn(){return E(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(e){t.missingWarn=E(e)?!e:e},get silentFallbackWarn(){return E(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(e){t.fallbackWarn=E(e)?!e:e},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(e){t.fallbackFormat=e},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(e){t.setPostTranslationHandler(e)},get sync(){return t.inheritLocale},set sync(e){t.inheritLocale=e},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){t.warnHtmlMessage="off"!==e},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(e){t.escapeParameter=e},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(e){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...e){const[n,r,s]=e,i={};let o=null,a=null;if(!w(n))throw $t(jt.INVALID_ARGUMENT);const c=n;return w(r)?i.locale=r:_(r)?o=r:S(r)&&(a=r),_(s)?o=s:S(s)&&(a=s),Reflect.apply(t.t,t,[c,o||a||{},i])},rt(...e){return Reflect.apply(t.rt,t,[...e])},tc(...e){const[n,r,s]=e,i={plural:1};let o=null,a=null;if(!w(n))throw $t(jt.INVALID_ARGUMENT);const u=n;return w(r)?i.locale=r:c(r)?i.plural=r:_(r)?o=r:S(r)&&(a=r),w(s)?i.locale=s:_(s)?o=s:S(s)&&(a=s),Reflect.apply(t.t,t,[u,o||a||{},i])},te(e,n){return t.te(e,n)},tm(e){return t.tm(e)},getLocaleMessage(e){return t.getLocaleMessage(e)},setLocaleMessage(e,n){t.setLocaleMessage(e,n)},mergeLocaleMessage(e,n){t.mergeLocaleMessage(e,n)},d(...e){return Reflect.apply(t.d,t,[...e])},getDateTimeFormat(e){return t.getDateTimeFormat(e)},setDateTimeFormat(e,n){t.setDateTimeFormat(e,n)},mergeDateTimeFormat(e,n){t.mergeDateTimeFormat(e,n)},n(...e){return Reflect.apply(t.n,t,[...e])},getNumberFormat(e){return t.getNumberFormat(e)},setNumberFormat(e,n){t.setNumberFormat(e,n)},mergeNumberFormat(e,n){t.mergeNumberFormat(e,n)},getChoiceIndex(e,t){return-1},__onComponentInstanceCreated(t){const{componentInstanceCreatedListener:r}=e;r&&r(t,n)}};return n}}const cn={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}};function un({slots:e},t){if(1===t.length&&"default"===t[0]){const t=e.default?e.default():[];return t.reduce(((e,t)=>[...e,..._(t.children)?t.children:[t]]),[])}return t.reduce(((t,n)=>{const r=e[n];return r&&(t[n]=r()),t}),{})}function ln(e){return Ot.HY}const hn={name:"i18n-t",props:d({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>c(e)||!isNaN(e)}},cn),setup(e,t){const{slots:n,attrs:r}=t,s=e.i18n||kn({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter((e=>"_"!==e)),o={};e.locale&&(o.locale=e.locale),void 0!==e.plural&&(o.plural=w(e.plural)?+e.plural:e.plural);const a=un(t,i),c=s[Bt](e.keypath,a,o),u=d({},r),l=w(e.tag)||T(e.tag)?e.tag:ln();return(0,Ot.h)(l,u,c)}}};function fn(e){return _(e)&&!w(e[0])}function dn(e,t,n,r){const{slots:s,attrs:i}=t;return()=>{const t={part:!0};let o={};e.locale&&(t.locale=e.locale),w(e.format)?t.key=e.format:T(e.format)&&(w(e.format.key)&&(t.key=e.format.key),o=Object.keys(e.format).reduce(((t,r)=>n.includes(r)?d({},t,{[r]:e.format[r]}):t),{}));const a=r(e.value,t,o);let c=[t.key];_(a)?c=a.map(((e,t)=>{const n=s[e.type],r=n?n({[e.type]:e.value,index:t,parts:a}):[e.value];return fn(r)&&(r[0].key=`${e.type}-${t}`),r})):w(a)&&(c=[a]);const u=d({},i),l=w(e.tag)||T(e.tag)?e.tag:ln();return(0,Ot.h)(l,u,c)}}const pn={name:"i18n-n",props:d({value:{type:Number,required:!0},format:{type:[String,Object]}},cn),setup(e,t){const n=e.i18n||kn({useScope:"parent",__useComponent:!0});return dn(e,t,Nt,((...e)=>n[qt](...e)))}},mn={name:"i18n-d",props:d({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},cn),setup(e,t){const n=e.i18n||kn({useScope:"parent",__useComponent:!0});return dn(e,t,It,((...e)=>n[Ht](...e)))}};function gn(e,t){const n=e;if("composition"===e.mode)return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return null!=r?r.__composer:e.global.__composer}}function yn(e){const t=t=>{const{instance:n,modifiers:r,value:s}=t;if(!n||!n.$)throw $t(jt.UNEXPECTED_ERROR);const i=gn(e,n.$);const o=vn(s);return[Reflect.apply(i.t,i,[..._n(o)]),i]},n=(n,s)=>{const[i,o]=t(s);r&&e.global===o&&(n.__i18nWatcher=(0,Ot.YP)(o.locale,(()=>{s.instance&&s.instance.$forceUpdate()}))),n.__composer=o,n.textContent=i},s=e=>{r&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},i=(e,{value:t})=>{if(e.__composer){const n=e.__composer,r=vn(t);e.textContent=Reflect.apply(n.t,n,[..._n(r)])}},o=e=>{const[n]=t(e);return{textContent:n}};return{created:n,unmounted:s,beforeUpdate:i,getSSRProps:o}}function vn(e){if(w(e))return{path:e};if(S(e)){if(!("path"in e))throw $t(jt.REQUIRED_VALUE,"path");return e}throw $t(jt.INVALID_VALUE)}function _n(e){const{path:t,locale:n,args:r,choice:s,plural:i}=e,o={},a=r||{};return w(n)&&(o.locale=n),c(s)&&(o.plural=s),c(i)&&(o.plural=i),[t,a,o]}function bn(e,t,...n){const r=S(n[0])?n[0]:{},s=!!r.useI18nComponentName,i=!E(r.globalInstall)||r.globalInstall;i&&(e.component(s?"i18n":hn.name,hn),e.component(pn.name,pn),e.component(mn.name,mn)),e.directive("t",yn(t))}function wn(e,t,n){return{beforeCreate(){const r=(0,Ot.FN)();if(!r)throw $t(jt.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const n=s.i18n;s.__i18n&&(n.__i18n=s.__i18n),n.__root=t,this===this.$root?this.$i18n=En(e,n):(n.__injectWithOption=!0,this.$i18n=an(n))}else s.__i18n?this===this.$root?this.$i18n=En(e,s):this.$i18n=an({__i18n:s.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;s.__i18nGlobal&&Qt(t,s,s),e.__onComponentInstanceCreated(this.$i18n),n.__setInstance(r,this.$i18n),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,t)=>this.$i18n.te(e,t),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e)},mounted(){0},unmounted(){const e=(0,Ot.FN)();if(!e)throw $t(jt.UNEXPECTED_ERROR);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(e),delete this.$i18n}}}function En(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[Wt](t.pluralizationRules||e.pluralizationRules);const n=zt(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach((t=>e.mergeLocaleMessage(t,n[t]))),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach((n=>e.mergeDateTimeFormat(n,t.datetimeFormats[n]))),t.numberFormats&&Object.keys(t.numberFormats).forEach((n=>e.mergeNumberFormat(n,t.numberFormats[n]))),e}const Tn=i("global-vue-i18n");function In(e={},t){const n=__VUE_I18N_LEGACY_API__&&E(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,r=!E(e.globalInjection)||e.globalInjection,s=!__VUE_I18N_LEGACY_API__||!n||!!e.allowComposition,o=new Map,[a,c]=Sn(e,n),u=i("");function l(e){return o.get(e)||null}function h(e,t){o.set(e,t)}function f(e){o.delete(e)}{const e={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return s},async install(t,...s){t.__VUE_I18N_SYMBOL__=u,t.provide(t.__VUE_I18N_SYMBOL__,e),!n&&r&&Pn(t,e.global),__VUE_I18N_FULL_INSTALL__&&bn(t,e,...s),__VUE_I18N_LEGACY_API__&&n&&t.mixin(wn(c,c.__composer,e));const i=t.unmount;t.unmount=()=>{e.dispose(),i()}},get global(){return c},dispose(){a.stop()},__instances:o,__getInstance:l,__setInstance:h,__deleteInstance:f};return e}}function kn(e={}){const t=(0,Ot.FN)();if(null==t)throw $t(jt.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&null!=t.appContext.app&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw $t(jt.NOT_INSLALLED);const n=Cn(t),r=An(n),s=Xt(t),i=Nn(e,s);if(__VUE_I18N_LEGACY_API__&&"legacy"===n.mode&&!e.__useComponent){if(!n.allowComposition)throw $t(jt.NOT_AVAILABLE_IN_LEGACY_MODE);return Ln(t,i,r,e)}if("global"===i)return Qt(r,e,s),r;if("parent"===i){let s=Rn(n,t,e.__useComponent);return null==s&&(s=r),s}const o=n;let a=o.__getInstance(t);if(null==a){const n=d({},e);"__i18n"in s&&(n.__i18n=s.__i18n),r&&(n.__root=r),a=sn(n),On(o,t,a),o.__setInstance(t,a)}return a}function Sn(e,t,n){const r=(0,Lt.B)();{const n=__VUE_I18N_LEGACY_API__&&t?r.run((()=>an(e))):r.run((()=>sn(e)));if(null==n)throw $t(jt.UNEXPECTED_ERROR);return[r,n]}}function Cn(e){{const t=(0,Ot.f3)(e.isCE?Tn:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw $t(e.isCE?jt.NOT_INSLALLED_WITH_PROVIDE:jt.UNEXPECTED_ERROR);return t}}function Nn(e,t){return h(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function An(e){return"composition"===e.mode?e.global:e.global.__composer}function Rn(e,t,n=!1){let r=null;const s=t.root;let i=t.parent;while(null!=i){const t=e;if("composition"===e.mode)r=t.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const e=t.__getInstance(i);null!=e&&(r=e.__composer,n&&r&&!r[Gt]&&(r=null))}if(null!=r)break;if(s===i)break;i=i.parent}return r}function On(e,t,n){(0,Ot.bv)((()=>{0}),t),(0,Ot.Ah)((()=>{e.__deleteInstance(t)}),t)}function Ln(e,t,n,r={}){const s="local"===t,i=(0,Lt.XI)(null);if(s&&e.proxy&&!e.proxy.$options.i18n&&!e.proxy.$options.__i18n)throw $t(jt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=!E(r.inheritLocale)||r.inheritLocale,a=(0,Lt.iH)(s&&o?n.locale.value:w(r.locale)?r.locale:Ve),c=(0,Lt.iH)(s&&o?n.fallbackLocale.value:w(r.fallbackLocale)||_(r.fallbackLocale)||S(r.fallbackLocale)||!1===r.fallbackLocale?r.fallbackLocale:a.value),u=(0,Lt.iH)(zt(a.value,r)),h=(0,Lt.iH)(S(r.datetimeFormats)?r.datetimeFormats:{[a.value]:{}}),f=(0,Lt.iH)(S(r.numberFormats)?r.numberFormats:{[a.value]:{}}),d=s?n.missingWarn:!E(r.missingWarn)&&!l(r.missingWarn)||r.missingWarn,p=s?n.fallbackWarn:!E(r.fallbackWarn)&&!l(r.fallbackWarn)||r.fallbackWarn,m=s?n.fallbackRoot:!E(r.fallbackRoot)||r.fallbackRoot,g=!!r.fallbackFormat,y=b(r.missing)?r.missing:null,v=b(r.postTranslation)?r.postTranslation:null,T=s?n.warnHtmlMessage:!E(r.warnHtmlMessage)||r.warnHtmlMessage,I=!!r.escapeParameter,k=s?n.modifiers:S(r.modifiers)?r.modifiers:{},C=r.pluralRules||s&&n.pluralRules;function N(){return[a.value,c.value,u.value,h.value,f.value]}const A=(0,Ot.Fl)({get:()=>i.value?i.value.locale.value:a.value,set:e=>{i.value&&(i.value.locale.value=e),a.value=e}}),R=(0,Ot.Fl)({get:()=>i.value?i.value.fallbackLocale.value:c.value,set:e=>{i.value&&(i.value.fallbackLocale.value=e),c.value=e}}),O=(0,Ot.Fl)((()=>i.value?i.value.messages.value:u.value)),L=(0,Ot.Fl)((()=>h.value)),x=(0,Ot.Fl)((()=>f.value));function D(){return i.value?i.value.getPostTranslationHandler():v}function P(e){i.value&&i.value.setPostTranslationHandler(e)}function M(){return i.value?i.value.getMissingHandler():y}function F(e){i.value&&i.value.setMissingHandler(e)}function U(e){return N(),e()}function V(...e){return i.value?U((()=>Reflect.apply(i.value.t,null,[...e]))):U((()=>""))}function j(...e){return i.value?Reflect.apply(i.value.rt,null,[...e]):""}function $(...e){return i.value?U((()=>Reflect.apply(i.value.d,null,[...e]))):U((()=>""))}function B(...e){return i.value?U((()=>Reflect.apply(i.value.n,null,[...e]))):U((()=>""))}function H(e){return i.value?i.value.tm(e):{}}function q(e,t){return!!i.value&&i.value.te(e,t)}function W(e){return i.value?i.value.getLocaleMessage(e):{}}function G(e,t){i.value&&(i.value.setLocaleMessage(e,t),u.value[e]=t)}function K(e,t){i.value&&i.value.mergeLocaleMessage(e,t)}function z(e){return i.value?i.value.getDateTimeFormat(e):{}}function J(e,t){i.value&&(i.value.setDateTimeFormat(e,t),h.value[e]=t)}function Y(e,t){i.value&&i.value.mergeDateTimeFormat(e,t)}function X(e){return i.value?i.value.getNumberFormat(e):{}}function Q(e,t){i.value&&(i.value.setNumberFormat(e,t),f.value[e]=t)}function Z(e,t){i.value&&i.value.mergeNumberFormat(e,t)}const ee={get id(){return i.value?i.value.id:-1},locale:A,fallbackLocale:R,messages:O,datetimeFormats:L,numberFormats:x,get inheritLocale(){return i.value?i.value.inheritLocale:o},set inheritLocale(e){i.value&&(i.value.inheritLocale=e)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(u.value)},get modifiers(){return i.value?i.value.modifiers:k},get pluralRules(){return i.value?i.value.pluralRules:C},get isGlobal(){return!!i.value&&i.value.isGlobal},get missingWarn(){return i.value?i.value.missingWarn:d},set missingWarn(e){i.value&&(i.value.missingWarn=e)},get fallbackWarn(){return i.value?i.value.fallbackWarn:p},set fallbackWarn(e){i.value&&(i.value.missingWarn=e)},get fallbackRoot(){return i.value?i.value.fallbackRoot:m},set fallbackRoot(e){i.value&&(i.value.fallbackRoot=e)},get fallbackFormat(){return i.value?i.value.fallbackFormat:g},set fallbackFormat(e){i.value&&(i.value.fallbackFormat=e)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:T},set warnHtmlMessage(e){i.value&&(i.value.warnHtmlMessage=e)},get escapeParameter(){return i.value?i.value.escapeParameter:I},set escapeParameter(e){i.value&&(i.value.escapeParameter=e)},t:V,getPostTranslationHandler:D,setPostTranslationHandler:P,getMissingHandler:M,setMissingHandler:F,rt:j,d:$,n:B,tm:H,te:q,getLocaleMessage:W,setLocaleMessage:G,mergeLocaleMessage:K,getDateTimeFormat:z,setDateTimeFormat:J,mergeDateTimeFormat:Y,getNumberFormat:X,setNumberFormat:Q,mergeNumberFormat:Z};function te(e){e.locale.value=a.value,e.fallbackLocale.value=c.value,Object.keys(u.value).forEach((t=>{e.mergeLocaleMessage(t,u.value[t])})),Object.keys(h.value).forEach((t=>{e.mergeDateTimeFormat(t,h.value[t])})),Object.keys(f.value).forEach((t=>{e.mergeNumberFormat(t,f.value[t])})),e.escapeParameter=I,e.fallbackFormat=g,e.fallbackRoot=m,e.fallbackWarn=p,e.missingWarn=d,e.warnHtmlMessage=T}return(0,Ot.wF)((()=>{if(null==e.proxy||null==e.proxy.$i18n)throw $t(jt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const n=i.value=e.proxy.$i18n.__composer;"global"===t?(a.value=n.locale.value,c.value=n.fallbackLocale.value,u.value=n.messages.value,h.value=n.datetimeFormats.value,f.value=n.numberFormats.value):s&&te(n)})),ee}const xn=["locale","fallbackLocale","availableLocales"],Dn=["t","rt","d","n","tm"];function Pn(e,t){const n=Object.create(null);xn.forEach((e=>{const r=Object.getOwnPropertyDescriptor(t,e);if(!r)throw $t(jt.UNEXPECTED_ERROR);const s=(0,Lt.dq)(r.value)?{get(){return r.value.value},set(e){r.value.value=e}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,e,s)})),e.config.globalProperties.$i18n=n,Dn.forEach((n=>{const r=Object.getOwnPropertyDescriptor(t,n);if(!r||!r.value)throw $t(jt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${n}`,r)}))}if(Ge(at),Ke(ge),ze(xe),Dt(),__INTLIFY_PROD_DEVTOOLS__){const e=m();e.__INTLIFY__=!0,Ce(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},525:function(e,t,n){"use strict";n.d(t,{ri:function(){return r.createApp}});var r=n(9242),s=n(3396),i=(n(7658),n(541),n(7139));function o(e){throw e}function a(e){}function c(e,t,n,r){const s=e,i=new SyntaxError(String(s));return i.code=e,i.loc=t,i}const u=Symbol(""),l=Symbol(""),h=Symbol(""),f=Symbol(""),d=Symbol(""),p=Symbol(""),m=Symbol(""),g=Symbol(""),y=Symbol(""),v=Symbol(""),_=Symbol(""),b=Symbol(""),w=Symbol(""),E=Symbol(""),T=Symbol(""),I=Symbol(""),k=Symbol(""),S=Symbol(""),C=Symbol(""),N=Symbol(""),A=Symbol(""),R=Symbol(""),O=Symbol(""),L=Symbol(""),x=Symbol(""),D=Symbol(""),P=Symbol(""),M=Symbol(""),F=Symbol(""),U=Symbol(""),V=Symbol(""),j=Symbol(""),$=Symbol(""),B=Symbol(""),H=Symbol(""),q=Symbol(""),W=Symbol(""),G=Symbol(""),K=Symbol(""),z={[u]:"Fragment",[l]:"Teleport",[h]:"Suspense",[f]:"KeepAlive",[d]:"BaseTransition",[p]:"openBlock",[m]:"createBlock",[g]:"createElementBlock",[y]:"createVNode",[v]:"createElementVNode",[_]:"createCommentVNode",[b]:"createTextVNode",[w]:"createStaticVNode",[E]:"resolveComponent",[T]:"resolveDynamicComponent",[I]:"resolveDirective",[k]:"resolveFilter",[S]:"withDirectives",[C]:"renderList",[N]:"renderSlot",[A]:"createSlots",[R]:"toDisplayString",[O]:"mergeProps",[L]:"normalizeClass",[x]:"normalizeStyle",[D]:"normalizeProps",[P]:"guardReactiveProps",[M]:"toHandlers",[F]:"camelize",[U]:"capitalize",[V]:"toHandlerKey",[j]:"setBlockTracking",[$]:"pushScopeId",[B]:"popScopeId",[H]:"withCtx",[q]:"unref",[W]:"isRef",[G]:"withMemo",[K]:"isMemoSame"};function J(e){Object.getOwnPropertySymbols(e).forEach((t=>{z[t]=e[t]}))}const Y={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function X(e,t=Y){return{type:0,children:e,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:t}}function Q(e,t,n,r,s,i,o,a=!1,c=!1,u=!1,l=Y){return e&&(a?(e.helper(p),e.helper(Oe(e.inSSR,u))):e.helper(Re(e.inSSR,u)),o&&e.helper(S)),{type:13,tag:t,props:n,children:r,patchFlag:s,dynamicProps:i,directives:o,isBlock:a,disableTracking:c,isComponent:u,loc:l}}function Z(e,t=Y){return{type:17,loc:t,elements:e}}function ee(e,t=Y){return{type:15,loc:t,properties:e}}function te(e,t){return{type:16,loc:Y,key:(0,i.HD)(e)?ne(e,!0):e,value:t}}function ne(e,t=!1,n=Y,r=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:r}}function re(e,t=Y){return{type:8,loc:t,children:e}}function se(e,t=[],n=Y){return{type:14,loc:n,callee:e,arguments:t}}function ie(e,t,n=!1,r=!1,s=Y){return{type:18,params:e,returns:t,newline:n,isSlot:r,loc:s}}function oe(e,t,n,r=!0){return{type:19,test:e,consequent:t,alternate:n,newline:r,loc:Y}}function ae(e,t,n=!1){return{type:20,index:e,value:t,isVNode:n,loc:Y}}function ce(e){return{type:21,body:e,loc:Y}}const ue=e=>4===e.type&&e.isStatic,le=(e,t)=>e===t||e===(0,i.rs)(t);function he(e){return le(e,"Teleport")?l:le(e,"Suspense")?h:le(e,"KeepAlive")?f:le(e,"BaseTransition")?d:void 0}const fe=/^\d|[^\$\w]/,de=e=>!fe.test(e),pe=/[A-Za-z_$\xA0-\uFFFF]/,me=/[\.\?\w$\xA0-\uFFFF]/,ge=/\s+[.[]\s*|\s*[.[]\s+/g,ye=e=>{e=e.trim().replace(ge,(e=>e.trim()));let t=0,n=[],r=0,s=0,i=null;for(let o=0;o<e.length;o++){const a=e.charAt(o);switch(t){case 0:if("["===a)n.push(t),t=1,r++;else if("("===a)n.push(t),t=2,s++;else if(!(0===o?pe:me).test(a))return!1;break;case 1:"'"===a||'"'===a||"`"===a?(n.push(t),t=3,i=a):"["===a?r++:"]"===a&&(--r||(t=n.pop()));break;case 2:if("'"===a||'"'===a||"`"===a)n.push(t),t=3,i=a;else if("("===a)s++;else if(")"===a){if(o===e.length-1)return!1;--s||(t=n.pop())}break;case 3:a===i&&(t=n.pop(),i=null);break}}return!r&&!s},ve=ye;function _e(e,t,n){const r=e.source.slice(t,t+n),s={source:r,start:be(e.start,e.source,t),end:e.end};return null!=n&&(s.end=be(e.start,e.source,t+n)),s}function be(e,t,n=t.length){return we((0,i.l7)({},e),t,n)}function we(e,t,n=t.length){let r=0,s=-1;for(let i=0;i<n;i++)10===t.charCodeAt(i)&&(r++,s=i);return e.offset+=n,e.line+=r,e.column=-1===s?e.column+n:n-s,e}function Ee(e,t,n=!1){for(let r=0;r<e.props.length;r++){const s=e.props[r];if(7===s.type&&(n||s.exp)&&((0,i.HD)(t)?s.name===t:t.test(s.name)))return s}}function Te(e,t,n=!1,r=!1){for(let s=0;s<e.props.length;s++){const i=e.props[s];if(6===i.type){if(n)continue;if(i.name===t&&(i.value||r))return i}else if("bind"===i.name&&(i.exp||r)&&Ie(i.arg,t))return i}}function Ie(e,t){return!(!e||!ue(e)||e.content!==t)}function ke(e){return e.props.some((e=>7===e.type&&"bind"===e.name&&(!e.arg||4!==e.arg.type||!e.arg.isStatic)))}function Se(e){return 5===e.type||2===e.type}function Ce(e){return 7===e.type&&"slot"===e.name}function Ne(e){return 1===e.type&&3===e.tagType}function Ae(e){return 1===e.type&&2===e.tagType}function Re(e,t){return e||t?y:v}function Oe(e,t){return e||t?m:g}const Le=new Set([D,P]);function xe(e,t=[]){if(e&&!(0,i.HD)(e)&&14===e.type){const n=e.callee;if(!(0,i.HD)(n)&&Le.has(n))return xe(e.arguments[0],t.concat(e))}return[e,t]}function De(e,t,n){let r,s,o=13===e.type?e.props:e.arguments[2],a=[];if(o&&!(0,i.HD)(o)&&14===o.type){const e=xe(o);o=e[0],a=e[1],s=a[a.length-1]}if(null==o||(0,i.HD)(o))r=ee([t]);else if(14===o.type){const e=o.arguments[0];(0,i.HD)(e)||15!==e.type?o.callee===M?r=se(n.helper(O),[ee([t]),o]):o.arguments.unshift(ee([t])):Pe(t,e)||e.properties.unshift(t),!r&&(r=o)}else 15===o.type?(Pe(t,o)||o.properties.unshift(t),r=o):(r=se(n.helper(O),[ee([t]),o]),s&&s.callee===P&&(s=a[a.length-2]));13===e.type?s?s.arguments[0]=r:e.props=r:s?s.arguments[0]=r:e.arguments[2]=r}function Pe(e,t){let n=!1;if(4===e.key.type){const r=e.key.content;n=t.properties.some((e=>4===e.key.type&&e.key.content===r))}return n}function Me(e,t){return`_${t}_${e.replace(/[^\w]/g,((t,n)=>"-"===t?"_":e.charCodeAt(n).toString()))}`}function Fe(e){return 14===e.type&&e.callee===G?e.arguments[1].returns:e}function Ue(e,{helper:t,removeHelper:n,inSSR:r}){e.isBlock||(e.isBlock=!0,n(Re(r,e.isComponent)),t(p),t(Oe(r,e.isComponent)))}function Ve(e,t){const n=t.options?t.options.compatConfig:t.compatConfig,r=n&&n[e];return"MODE"===e?r||3:r}function je(e,t){const n=Ve("MODE",t),r=Ve(e,t);return 3===n?!0===r:!1!==r}function $e(e,t,n,...r){const s=je(e,t);return s}const Be=/&(gt|lt|amp|apos|quot);/g,He={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},qe={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:i.NO,isPreTag:i.NO,isCustomElement:i.NO,decodeEntities:e=>e.replace(Be,((e,t)=>He[t])),onError:o,onWarn:a,comments:!1};function We(e,t={}){const n=Ge(e,t),r=ct(n);return X(Ke(n,0,[]),ut(n,r))}function Ge(e,t){const n=(0,i.l7)({},qe);let r;for(r in t)n[r]=void 0===t[r]?qe[r]:t[r];return{options:n,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1,onWarn:n.onWarn}}function Ke(e,t,n){const r=lt(n),s=r?r.ns:0,o=[];while(!gt(e,t,n)){const a=e.source;let c;if(0===t||1===t)if(!e.inVPre&&ht(a,e.options.delimiters[0]))c=it(e,t);else if(0===t&&"<"===a[0])if(1===a.length)mt(e,5,1);else if("!"===a[1])ht(a,"\x3c!--")?c=Ye(e):ht(a,"<!DOCTYPE")?c=Xe(e):ht(a,"<![CDATA[")?0!==s?c=Je(e,n):(mt(e,1),c=Xe(e)):(mt(e,11),c=Xe(e));else if("/"===a[1])if(2===a.length)mt(e,5,2);else{if(">"===a[2]){mt(e,14,2),ft(e,3);continue}if(/[a-z]/i.test(a[2])){mt(e,23),et(e,1,r);continue}mt(e,12,2),c=Xe(e)}else/[a-z]/i.test(a[1])?(c=Qe(e,n),je("COMPILER_NATIVE_TEMPLATE",e)&&c&&"template"===c.tag&&!c.props.some((e=>7===e.type&&Ze(e.name)))&&(c=c.children)):"?"===a[1]?(mt(e,21,1),c=Xe(e)):mt(e,12,1);if(c||(c=ot(e,t)),(0,i.kJ)(c))for(let e=0;e<c.length;e++)ze(o,c[e]);else ze(o,c)}let a=!1;if(2!==t&&1!==t){const t="preserve"!==e.options.whitespace;for(let n=0;n<o.length;n++){const r=o[n];if(2===r.type)if(e.inPre)r.content=r.content.replace(/\r\n/g,"\n");else if(/[^\t\r\n\f ]/.test(r.content))t&&(r.content=r.content.replace(/[\t\r\n\f ]+/g," "));else{const e=o[n-1],s=o[n+1];!e||!s||t&&(3===e.type&&3===s.type||3===e.type&&1===s.type||1===e.type&&3===s.type||1===e.type&&1===s.type&&/[\r\n]/.test(r.content))?(a=!0,o[n]=null):r.content=" "}else 3!==r.type||e.options.comments||(a=!0,o[n]=null)}if(e.inPre&&r&&e.options.isPreTag(r.tag)){const e=o[0];e&&2===e.type&&(e.content=e.content.replace(/^\r?\n/,""))}}return a?o.filter(Boolean):o}function ze(e,t){if(2===t.type){const n=lt(e);if(n&&2===n.type&&n.loc.end.offset===t.loc.start.offset)return n.content+=t.content,n.loc.end=t.loc.end,void(n.loc.source+=t.loc.source)}e.push(t)}function Je(e,t){ft(e,9);const n=Ke(e,3,t);return 0===e.source.length?mt(e,6):ft(e,3),n}function Ye(e){const t=ct(e);let n;const r=/--(\!)?>/.exec(e.source);if(r){r.index<=3&&mt(e,0),r[1]&&mt(e,10),n=e.source.slice(4,r.index);const t=e.source.slice(0,r.index);let s=1,i=0;while(-1!==(i=t.indexOf("\x3c!--",s)))ft(e,i-s+1),i+4<t.length&&mt(e,16),s=i+1;ft(e,r.index+r[0].length-s+1)}else n=e.source.slice(4),ft(e,e.source.length),mt(e,7);return{type:3,content:n,loc:ut(e,t)}}function Xe(e){const t=ct(e),n="?"===e.source[1]?1:2;let r;const s=e.source.indexOf(">");return-1===s?(r=e.source.slice(n),ft(e,e.source.length)):(r=e.source.slice(n,s),ft(e,s+1)),{type:3,content:r,loc:ut(e,t)}}function Qe(e,t){const n=e.inPre,r=e.inVPre,s=lt(t),i=et(e,0,s),o=e.inPre&&!n,a=e.inVPre&&!r;if(i.isSelfClosing||e.options.isVoidTag(i.tag))return o&&(e.inPre=!1),a&&(e.inVPre=!1),i;t.push(i);const c=e.options.getTextMode(i,s),u=Ke(e,c,t);t.pop();{const t=i.props.find((e=>6===e.type&&"inline-template"===e.name));if(t&&$e("COMPILER_INLINE_TEMPLATE",e,t.loc)){const n=ut(e,i.loc.end);t.value={type:2,content:n.source,loc:n}}}if(i.children=u,yt(e.source,i.tag))et(e,1,s);else if(mt(e,24,0,i.loc.start),0===e.source.length&&"script"===i.tag.toLowerCase()){const t=u[0];t&&ht(t.loc.source,"\x3c!--")&&mt(e,8)}return i.loc=ut(e,i.loc.start),o&&(e.inPre=!1),a&&(e.inVPre=!1),i}const Ze=(0,i.fY)("if,else,else-if,for,slot");function et(e,t,n){const r=ct(e),s=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),o=s[1],a=e.options.getNamespace(o,n);ft(e,s[0].length),dt(e);const c=ct(e),u=e.source;e.options.isPreTag(o)&&(e.inPre=!0);let l=nt(e,t);0===t&&!e.inVPre&&l.some((e=>7===e.type&&"pre"===e.name))&&(e.inVPre=!0,(0,i.l7)(e,c),e.source=u,l=nt(e,t).filter((e=>"v-pre"!==e.name)));let h=!1;if(0===e.source.length?mt(e,9):(h=ht(e.source,"/>"),1===t&&h&&mt(e,4),ft(e,h?2:1)),1===t)return;let f=0;return e.inVPre||("slot"===o?f=2:"template"===o?l.some((e=>7===e.type&&Ze(e.name)))&&(f=3):tt(o,l,e)&&(f=1)),{type:1,ns:a,tag:o,tagType:f,props:l,isSelfClosing:h,children:[],loc:ut(e,r),codegenNode:void 0}}function tt(e,t,n){const r=n.options;if(r.isCustomElement(e))return!1;if("component"===e||/^[A-Z]/.test(e)||he(e)||r.isBuiltInComponent&&r.isBuiltInComponent(e)||r.isNativeTag&&!r.isNativeTag(e))return!0;for(let s=0;s<t.length;s++){const e=t[s];if(6===e.type){if("is"===e.name&&e.value){if(e.value.content.startsWith("vue:"))return!0;if($e("COMPILER_IS_ON_ELEMENT",n,e.loc))return!0}}else{if("is"===e.name)return!0;if("bind"===e.name&&Ie(e.arg,"is")&&$e("COMPILER_IS_ON_ELEMENT",n,e.loc))return!0}}}function nt(e,t){const n=[],r=new Set;while(e.source.length>0&&!ht(e.source,">")&&!ht(e.source,"/>")){if(ht(e.source,"/")){mt(e,22),ft(e,1),dt(e);continue}1===t&&mt(e,3);const s=rt(e,r);6===s.type&&s.value&&"class"===s.name&&(s.value.content=s.value.content.replace(/\s+/g," ").trim()),0===t&&n.push(s),/^[^\t\r\n\f />]/.test(e.source)&&mt(e,15),dt(e)}return n}function rt(e,t){const n=ct(e),r=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source),s=r[0];t.has(s)&&mt(e,2),t.add(s),"="===s[0]&&mt(e,19);{const t=/["'<]/g;let n;while(n=t.exec(s))mt(e,17,n.index)}let i;ft(e,s.length),/^[\t\r\n\f ]*=/.test(e.source)&&(dt(e),ft(e,1),dt(e),i=st(e),i||mt(e,13));const o=ut(e,n);if(!e.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(s)){const t=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(s);let r,a=ht(s,"."),c=t[1]||(a||ht(s,":")?"bind":ht(s,"@")?"on":"slot");if(t[2]){const i="slot"===c,o=s.lastIndexOf(t[2]),a=ut(e,pt(e,n,o),pt(e,n,o+t[2].length+(i&&t[3]||"").length));let u=t[2],l=!0;u.startsWith("[")?(l=!1,u.endsWith("]")?u=u.slice(1,u.length-1):(mt(e,27),u=u.slice(1))):i&&(u+=t[3]||""),r={type:4,content:u,isStatic:l,constType:l?3:0,loc:a}}if(i&&i.isQuoted){const e=i.loc;e.start.offset++,e.start.column++,e.end=be(e.start,i.content),e.source=e.source.slice(1,-1)}const u=t[3]?t[3].slice(1).split("."):[];return a&&u.push("prop"),"bind"===c&&r&&u.includes("sync")&&$e("COMPILER_V_BIND_SYNC",e,o,r.loc.source)&&(c="model",u.splice(u.indexOf("sync"),1)),{type:7,name:c,exp:i&&{type:4,content:i.content,isStatic:!1,constType:0,loc:i.loc},arg:r,modifiers:u,loc:o}}return!e.inVPre&&ht(s,"v-")&&mt(e,26),{type:6,name:s,value:i&&{type:2,content:i.content,loc:i.loc},loc:o}}function st(e){const t=ct(e);let n;const r=e.source[0],s='"'===r||"'"===r;if(s){ft(e,1);const t=e.source.indexOf(r);-1===t?n=at(e,e.source.length,4):(n=at(e,t,4),ft(e,1))}else{const t=/^[^\t\r\n\f >]+/.exec(e.source);if(!t)return;const r=/["'<=`]/g;let s;while(s=r.exec(t[0]))mt(e,18,s.index);n=at(e,t[0].length,4)}return{content:n,isQuoted:s,loc:ut(e,t)}}function it(e,t){const[n,r]=e.options.delimiters,s=e.source.indexOf(r,n.length);if(-1===s)return void mt(e,25);const i=ct(e);ft(e,n.length);const o=ct(e),a=ct(e),c=s-n.length,u=e.source.slice(0,c),l=at(e,c,t),h=l.trim(),f=l.indexOf(h);f>0&&we(o,u,f);const d=c-(l.length-h.length-f);return we(a,u,d),ft(e,r.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:h,loc:ut(e,o,a)},loc:ut(e,i)}}function ot(e,t){const n=3===t?["]]>"]:["<",e.options.delimiters[0]];let r=e.source.length;for(let o=0;o<n.length;o++){const t=e.source.indexOf(n[o],1);-1!==t&&r>t&&(r=t)}const s=ct(e),i=at(e,r,t);return{type:2,content:i,loc:ut(e,s)}}function at(e,t,n){const r=e.source.slice(0,t);return ft(e,t),2!==n&&3!==n&&r.includes("&")?e.options.decodeEntities(r,4===n):r}function ct(e){const{column:t,line:n,offset:r}=e;return{column:t,line:n,offset:r}}function ut(e,t,n){return n=n||ct(e),{start:t,end:n,source:e.originalSource.slice(t.offset,n.offset)}}function lt(e){return e[e.length-1]}function ht(e,t){return e.startsWith(t)}function ft(e,t){const{source:n}=e;we(e,n,t),e.source=n.slice(t)}function dt(e){const t=/^[\t\r\n\f ]+/.exec(e.source);t&&ft(e,t[0].length)}function pt(e,t,n){return be(t,e.originalSource.slice(t.offset,n),n)}function mt(e,t,n,r=ct(e)){n&&(r.offset+=n,r.column+=n),e.options.onError(c(t,{start:r,end:r,source:""}))}function gt(e,t,n){const r=e.source;switch(t){case 0:if(ht(r,"</"))for(let e=n.length-1;e>=0;--e)if(yt(r,n[e].tag))return!0;break;case 1:case 2:{const e=lt(n);if(e&&yt(r,e.tag))return!0;break}case 3:if(ht(r,"]]>"))return!0;break}return!r}function yt(e,t){return ht(e,"</")&&e.slice(2,2+t.length).toLowerCase()===t.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+t.length]||">")}function vt(e,t){bt(e,t,_t(e,e.children[0]))}function _t(e,t){const{children:n}=e;return 1===n.length&&1===t.type&&!Ae(t)}function bt(e,t,n=!1){const{children:r}=e,s=r.length;let o=0;for(let i=0;i<r.length;i++){const e=r[i];if(1===e.type&&0===e.tagType){const r=n?0:wt(e,t);if(r>0){if(r>=2){e.codegenNode.patchFlag="-1",e.codegenNode=t.hoist(e.codegenNode),o++;continue}}else{const n=e.codegenNode;if(13===n.type){const r=St(n);if((!r||512===r||1===r)&&It(e,t)>=2){const r=kt(e);r&&(n.props=t.hoist(r))}n.dynamicProps&&(n.dynamicProps=t.hoist(n.dynamicProps))}}}if(1===e.type){const n=1===e.tagType;n&&t.scopes.vSlot++,bt(e,t),n&&t.scopes.vSlot--}else if(11===e.type)bt(e,t,1===e.children.length);else if(9===e.type)for(let n=0;n<e.branches.length;n++)bt(e.branches[n],t,1===e.branches[n].children.length)}o&&t.transformHoist&&t.transformHoist(r,t,e),o&&o===s&&1===e.type&&0===e.tagType&&e.codegenNode&&13===e.codegenNode.type&&(0,i.kJ)(e.codegenNode.children)&&(e.codegenNode.children=t.hoist(Z(e.codegenNode.children)))}function wt(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(0!==e.tagType)return 0;const r=n.get(e);if(void 0!==r)return r;const s=e.codegenNode;if(13!==s.type)return 0;if(s.isBlock&&"svg"!==e.tag&&"foreignObject"!==e.tag)return 0;const o=St(s);if(o)return n.set(e,0),0;{let r=3;const i=It(e,t);if(0===i)return n.set(e,0),0;i<r&&(r=i);for(let s=0;s<e.children.length;s++){const i=wt(e.children[s],t);if(0===i)return n.set(e,0),0;i<r&&(r=i)}if(r>1)for(let s=0;s<e.props.length;s++){const i=e.props[s];if(7===i.type&&"bind"===i.name&&i.exp){const s=wt(i.exp,t);if(0===s)return n.set(e,0),0;s<r&&(r=s)}}if(s.isBlock){for(let t=0;t<e.props.length;t++){const r=e.props[t];if(7===r.type)return n.set(e,0),0}t.removeHelper(p),t.removeHelper(Oe(t.inSSR,s.isComponent)),s.isBlock=!1,t.helper(Re(t.inSSR,s.isComponent))}return n.set(e,r),r}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return wt(e.content,t);case 4:return e.constType;case 8:let a=3;for(let n=0;n<e.children.length;n++){const r=e.children[n];if((0,i.HD)(r)||(0,i.yk)(r))continue;const s=wt(r,t);if(0===s)return 0;s<a&&(a=s)}return a;default:return 0}}const Et=new Set([L,x,D,P]);function Tt(e,t){if(14===e.type&&!(0,i.HD)(e.callee)&&Et.has(e.callee)){const n=e.arguments[0];if(4===n.type)return wt(n,t);if(14===n.type)return Tt(n,t)}return 0}function It(e,t){let n=3;const r=kt(e);if(r&&15===r.type){const{properties:e}=r;for(let r=0;r<e.length;r++){const{key:s,value:i}=e[r],o=wt(s,t);if(0===o)return o;let a;if(o<n&&(n=o),a=4===i.type?wt(i,t):14===i.type?Tt(i,t):0,0===a)return a;a<n&&(n=a)}}return n}function kt(e){const t=e.codegenNode;if(13===t.type)return t.props}function St(e){const t=e.patchFlag;return t?parseInt(t,10):void 0}function Ct(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:r=!1,cacheHandlers:s=!1,nodeTransforms:c=[],directiveTransforms:u={},transformHoist:l=null,isBuiltInComponent:h=i.dG,isCustomElement:f=i.dG,expressionPlugins:d=[],scopeId:p=null,slotted:m=!0,ssr:g=!1,inSSR:y=!1,ssrCssVars:v="",bindingMetadata:_=i.kT,inline:b=!1,isTS:w=!1,onError:E=o,onWarn:T=a,compatConfig:I}){const k=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),S={selfName:k&&(0,i.kC)((0,i._A)(k[1])),prefixIdentifiers:n,hoistStatic:r,cacheHandlers:s,nodeTransforms:c,directiveTransforms:u,transformHoist:l,isBuiltInComponent:h,isCustomElement:f,expressionPlugins:d,scopeId:p,slotted:m,ssr:g,inSSR:y,ssrCssVars:v,bindingMetadata:_,inline:b,isTS:w,onError:E,onWarn:T,compatConfig:I,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(e){const t=S.helpers.get(e)||0;return S.helpers.set(e,t+1),e},removeHelper(e){const t=S.helpers.get(e);if(t){const n=t-1;n?S.helpers.set(e,n):S.helpers.delete(e)}},helperString(e){return`_${z[S.helper(e)]}`},replaceNode(e){S.parent.children[S.childIndex]=S.currentNode=e},removeNode(e){const t=S.parent.children,n=e?t.indexOf(e):S.currentNode?S.childIndex:-1;e&&e!==S.currentNode?S.childIndex>n&&(S.childIndex--,S.onNodeRemoved()):(S.currentNode=null,S.onNodeRemoved()),S.parent.children.splice(n,1)},onNodeRemoved:()=>{},addIdentifiers(e){},removeIdentifiers(e){},hoist(e){(0,i.HD)(e)&&(e=ne(e)),S.hoists.push(e);const t=ne(`_hoisted_${S.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache(e,t=!1){return ae(S.cached++,e,t)}};return S.filters=new Set,S}function Nt(e,t){const n=Ct(e,t);Ot(e,n),t.hoistStatic&&vt(e,n),t.ssr||At(e,n),e.helpers=[...n.helpers.keys()],e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.filters=[...n.filters]}function At(e,t){const{helper:n}=t,{children:r}=e;if(1===r.length){const n=r[0];if(_t(e,n)&&n.codegenNode){const r=n.codegenNode;13===r.type&&Ue(r,t),e.codegenNode=r}else e.codegenNode=n}else if(r.length>1){let r=64;i.m[64];0,e.codegenNode=Q(t,n(u),void 0,e.children,r+"",void 0,void 0,!0,void 0,!1)}}function Rt(e,t){let n=0;const r=()=>{n--};for(;n<e.children.length;n++){const s=e.children[n];(0,i.HD)(s)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=r,Ot(s,t))}}function Ot(e,t){t.currentNode=e;const{nodeTransforms:n}=t,r=[];for(let o=0;o<n.length;o++){const s=n[o](e,t);if(s&&((0,i.kJ)(s)?r.push(...s):r.push(s)),!t.currentNode)return;e=t.currentNode}switch(e.type){case 3:t.ssr||t.helper(_);break;case 5:t.ssr||t.helper(R);break;case 9:for(let n=0;n<e.branches.length;n++)Ot(e.branches[n],t);break;case 10:case 11:case 1:case 0:Rt(e,t);break}t.currentNode=e;let s=r.length;while(s--)r[s]()}function Lt(e,t){const n=(0,i.HD)(e)?t=>t===e:t=>e.test(t);return(e,r)=>{if(1===e.type){const{props:s}=e;if(3===e.tagType&&s.some(Ce))return;const i=[];for(let o=0;o<s.length;o++){const a=s[o];if(7===a.type&&n(a.name)){s.splice(o,1),o--;const n=t(e,a,r);n&&i.push(n)}}return i}}}const xt="/*#__PURE__*/",Dt=e=>`${z[e]}: _${z[e]}`;function Pt(e,{mode:t="function",prefixIdentifiers:n="module"===t,sourceMap:r=!1,filename:s="template.vue.html",scopeId:i=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:c="vue",ssrRuntimeModuleName:u="vue/server-renderer",ssr:l=!1,isTS:h=!1,inSSR:f=!1}){const d={mode:t,prefixIdentifiers:n,sourceMap:r,filename:s,scopeId:i,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:c,ssrRuntimeModuleName:u,ssr:l,isTS:h,inSSR:f,source:e.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(e){return`_${z[e]}`},push(e,t){d.code+=e},indent(){p(++d.indentLevel)},deindent(e=!1){e?--d.indentLevel:p(--d.indentLevel)},newline(){p(d.indentLevel)}};function p(e){d.push("\n"+"  ".repeat(e))}return d}function Mt(e,t={}){const n=Pt(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:r,push:s,prefixIdentifiers:i,indent:o,deindent:a,newline:c,scopeId:u,ssr:l}=n,h=e.helpers.length>0,f=!i&&"module"!==r,d=n;Ft(e,d);const p=l?"ssrRender":"render",m=l?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"],g=m.join(", ");if(s(`function ${p}(${g}) {`),o(),f&&(s("with (_ctx) {"),o(),h&&(s(`const { ${e.helpers.map(Dt).join(", ")} } = _Vue`),s("\n"),c())),e.components.length&&(Ut(e.components,"component",n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(Ut(e.directives,"directive",n),e.temps>0&&c()),e.filters&&e.filters.length&&(c(),Ut(e.filters,"filter",n),c()),e.temps>0){s("let ");for(let t=0;t<e.temps;t++)s(`${t>0?", ":""}_temp${t}`)}return(e.components.length||e.directives.length||e.temps)&&(s("\n"),c()),l||s("return "),e.codegenNode?Bt(e.codegenNode,n):s("null"),f&&(a(),s("}")),a(),s("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function Ft(e,t){const{ssr:n,prefixIdentifiers:r,push:s,newline:i,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:c}=t,u=a;if(e.helpers.length>0&&(s(`const _Vue = ${u}\n`),e.hoists.length)){const t=[y,v,_,b,w].filter((t=>e.helpers.includes(t))).map(Dt).join(", ");s(`const { ${t} } = _Vue\n`)}Vt(e.hoists,t),i(),s("return ")}function Ut(e,t,{helper:n,push:r,newline:s,isTS:i}){const o=n("filter"===t?k:"component"===t?E:I);for(let a=0;a<e.length;a++){let n=e[a];const c=n.endsWith("__self");c&&(n=n.slice(0,-6)),r(`const ${Me(n,t)} = ${o}(${JSON.stringify(n)}${c?", true":""})${i?"!":""}`),a<e.length-1&&s()}}function Vt(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:r,helper:s,scopeId:i,mode:o}=t;r();for(let a=0;a<e.length;a++){const s=e[a];s&&(n(`const _hoisted_${a+1} = `),Bt(s,t),r())}t.pure=!1}function jt(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),$t(e,t,n),n&&t.deindent(),t.push("]")}function $t(e,t,n=!1,r=!0){const{push:s,newline:o}=t;for(let a=0;a<e.length;a++){const c=e[a];(0,i.HD)(c)?s(c):(0,i.kJ)(c)?jt(c,t):Bt(c,t),a<e.length-1&&(n?(r&&s(","),o()):r&&s(", "))}}function Bt(e,t){if((0,i.HD)(e))t.push(e);else if((0,i.yk)(e))t.push(t.helper(e));else switch(e.type){case 1:case 9:case 11:Bt(e.codegenNode,t);break;case 2:Ht(e,t);break;case 4:qt(e,t);break;case 5:Wt(e,t);break;case 12:Bt(e.codegenNode,t);break;case 8:Gt(e,t);break;case 3:zt(e,t);break;case 13:Jt(e,t);break;case 14:Xt(e,t);break;case 15:Qt(e,t);break;case 17:Zt(e,t);break;case 18:en(e,t);break;case 19:tn(e,t);break;case 20:nn(e,t);break;case 21:$t(e.body,t,!0,!1);break;case 22:break;case 23:break;case 24:break;case 25:break;case 26:break;case 10:break;default:0}}function Ht(e,t){t.push(JSON.stringify(e.content),e)}function qt(e,t){const{content:n,isStatic:r}=e;t.push(r?JSON.stringify(n):n,e)}function Wt(e,t){const{push:n,helper:r,pure:s}=t;s&&n(xt),n(`${r(R)}(`),Bt(e.content,t),n(")")}function Gt(e,t){for(let n=0;n<e.children.length;n++){const r=e.children[n];(0,i.HD)(r)?t.push(r):Bt(r,t)}}function Kt(e,t){const{push:n}=t;if(8===e.type)n("["),Gt(e,t),n("]");else if(e.isStatic){const t=de(e.content)?e.content:JSON.stringify(e.content);n(t,e)}else n(`[${e.content}]`,e)}function zt(e,t){const{push:n,helper:r,pure:s}=t;s&&n(xt),n(`${r(_)}(${JSON.stringify(e.content)})`,e)}function Jt(e,t){const{push:n,helper:r,pure:s}=t,{tag:i,props:o,children:a,patchFlag:c,dynamicProps:u,directives:l,isBlock:h,disableTracking:f,isComponent:d}=e;l&&n(r(S)+"("),h&&n(`(${r(p)}(${f?"true":""}), `),s&&n(xt);const m=h?Oe(t.inSSR,d):Re(t.inSSR,d);n(r(m)+"(",e),$t(Yt([i,o,a,c,u]),t),n(")"),h&&n(")"),l&&(n(", "),Bt(l,t),n(")"))}function Yt(e){let t=e.length;while(t--)if(null!=e[t])break;return e.slice(0,t+1).map((e=>e||"null"))}function Xt(e,t){const{push:n,helper:r,pure:s}=t,o=(0,i.HD)(e.callee)?e.callee:r(e.callee);s&&n(xt),n(o+"(",e),$t(e.arguments,t),n(")")}function Qt(e,t){const{push:n,indent:r,deindent:s,newline:i}=t,{properties:o}=e;if(!o.length)return void n("{}",e);const a=o.length>1||!1;n(a?"{":"{ "),a&&r();for(let c=0;c<o.length;c++){const{key:e,value:r}=o[c];Kt(e,t),n(": "),Bt(r,t),c<o.length-1&&(n(","),i())}a&&s(),n(a?"}":" }")}function Zt(e,t){jt(e.elements,t)}function en(e,t){const{push:n,indent:r,deindent:s}=t,{params:o,returns:a,body:c,newline:u,isSlot:l}=e;l&&n(`_${z[H]}(`),n("(",e),(0,i.kJ)(o)?$t(o,t):o&&Bt(o,t),n(") => "),(u||c)&&(n("{"),r()),a?(u&&n("return "),(0,i.kJ)(a)?jt(a,t):Bt(a,t)):c&&Bt(c,t),(u||c)&&(s(),n("}")),l&&(e.isNonScopedSlot&&n(", undefined, true"),n(")"))}function tn(e,t){const{test:n,consequent:r,alternate:s,newline:i}=e,{push:o,indent:a,deindent:c,newline:u}=t;if(4===n.type){const e=!de(n.content);e&&o("("),qt(n,t),e&&o(")")}else o("("),Bt(n,t),o(")");i&&a(),t.indentLevel++,i||o(" "),o("? "),Bt(r,t),t.indentLevel--,i&&u(),i||o(" "),o(": ");const l=19===s.type;l||t.indentLevel++,Bt(s,t),l||t.indentLevel--,i&&c(!0)}function nn(e,t){const{push:n,helper:r,indent:s,deindent:i,newline:o}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(s(),n(`${r(j)}(-1),`),o()),n(`_cache[${e.index}] = `),Bt(e.value,t),e.isVNode&&(n(","),o(),n(`${r(j)}(1),`),o(),n(`_cache[${e.index}]`),i()),n(")")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");const rn=Lt(/^(if|else|else-if)$/,((e,t,n)=>sn(e,t,n,((e,t,r)=>{const s=n.parent.children;let i=s.indexOf(e),o=0;while(i-- >=0){const e=s[i];e&&9===e.type&&(o+=e.branches.length)}return()=>{if(r)e.codegenNode=an(t,o,n);else{const r=un(e.codegenNode);r.alternate=an(t,o+e.branches.length-1,n)}}}))));function sn(e,t,n,r){if("else"!==t.name&&(!t.exp||!t.exp.content.trim())){const r=t.exp?t.exp.loc:e.loc;n.onError(c(28,t.loc)),t.exp=ne("true",!1,r)}if("if"===t.name){const s=on(e,t),i={type:9,loc:e.loc,branches:[s]};if(n.replaceNode(i),r)return r(i,s,!0)}else{const s=n.parent.children;let i=s.indexOf(e);while(i-- >=-1){const o=s[i];if(o&&3===o.type)n.removeNode(o);else{if(!o||2!==o.type||o.content.trim().length){if(o&&9===o.type){"else-if"===t.name&&void 0===o.branches[o.branches.length-1].condition&&n.onError(c(30,e.loc)),n.removeNode();const s=on(e,t);0,o.branches.push(s);const i=r&&r(o,s,!1);Ot(s,n),i&&i(),n.currentNode=null}else n.onError(c(30,e.loc));break}n.removeNode(o)}}}}function on(e,t){const n=3===e.tagType;return{type:10,loc:e.loc,condition:"else"===t.name?void 0:t.exp,children:n&&!Ee(e,"for")?e.children:[e],userKey:Te(e,"key"),isTemplateIf:n}}function an(e,t,n){return e.condition?oe(e.condition,cn(e,t,n),se(n.helper(_),['""',"true"])):cn(e,t,n)}function cn(e,t,n){const{helper:r}=n,s=te("key",ne(`${t}`,!1,Y,2)),{children:o}=e,a=o[0],c=1!==o.length||1!==a.type;if(c){if(1===o.length&&11===a.type){const e=a.codegenNode;return De(e,s,n),e}{let t=64;i.m[64];return Q(n,r(u),ee([s]),o,t+"",void 0,void 0,!0,!1,!1,e.loc)}}{const e=a.codegenNode,t=Fe(e);return 13===t.type&&Ue(t,n),De(t,s,n),e}}function un(e){while(1)if(19===e.type){if(19!==e.alternate.type)return e;e=e.alternate}else 20===e.type&&(e=e.value)}const ln=Lt("for",((e,t,n)=>{const{helper:r,removeHelper:s}=n;return hn(e,t,n,(t=>{const i=se(r(C),[t.source]),o=Ne(e),a=Ee(e,"memo"),c=Te(e,"key"),l=c&&(6===c.type?ne(c.value.content,!0):c.exp),h=c?te("key",l):null,f=4===t.source.type&&t.source.constType>0,d=f?64:c?128:256;return t.codegenNode=Q(n,r(u),void 0,i,d+"",void 0,void 0,!0,!f,!1,e.loc),()=>{let c;const{children:d}=t;const m=1!==d.length||1!==d[0].type,g=Ae(e)?e:o&&1===e.children.length&&Ae(e.children[0])?e.children[0]:null;if(g?(c=g.codegenNode,o&&h&&De(c,h,n)):m?c=Q(n,r(u),h?ee([h]):void 0,e.children,"64",void 0,void 0,!0,void 0,!1):(c=d[0].codegenNode,o&&h&&De(c,h,n),c.isBlock!==!f&&(c.isBlock?(s(p),s(Oe(n.inSSR,c.isComponent))):s(Re(n.inSSR,c.isComponent))),c.isBlock=!f,c.isBlock?(r(p),r(Oe(n.inSSR,c.isComponent))):r(Re(n.inSSR,c.isComponent))),a){const e=ie(yn(t.parseResult,[ne("_cached")]));e.body=ce([re(["const _memo = (",a.exp,")"]),re(["if (_cached",...l?[" && _cached.key === ",l]:[],` && ${n.helperString(K)}(_cached, _memo)) return _cached`]),re(["const _item = ",c]),ne("_item.memo = _memo"),ne("return _item")]),i.arguments.push(e,ne("_cache"),ne(String(n.cached++)))}else i.arguments.push(ie(yn(t.parseResult),c,!0))}}))}));function hn(e,t,n,r){if(!t.exp)return void n.onError(c(31,t.loc));const s=mn(t.exp,n);if(!s)return void n.onError(c(32,t.loc));const{addIdentifiers:i,removeIdentifiers:o,scopes:a}=n,{source:u,value:l,key:h,index:f}=s,d={type:11,loc:t.loc,source:u,valueAlias:l,keyAlias:h,objectIndexAlias:f,parseResult:s,children:Ne(e)?e.children:[e]};n.replaceNode(d),a.vFor++;const p=r&&r(d);return()=>{a.vFor--,p&&p()}}const fn=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,dn=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,pn=/^\(|\)$/g;function mn(e,t){const n=e.loc,r=e.content,s=r.match(fn);if(!s)return;const[,i,o]=s,a={source:gn(n,o.trim(),r.indexOf(o,i.length)),value:void 0,key:void 0,index:void 0};let c=i.trim().replace(pn,"").trim();const u=i.indexOf(c),l=c.match(dn);if(l){c=c.replace(dn,"").trim();const e=l[1].trim();let t;if(e&&(t=r.indexOf(e,u+c.length),a.key=gn(n,e,t)),l[2]){const s=l[2].trim();s&&(a.index=gn(n,s,r.indexOf(s,a.key?t+e.length:u+c.length)))}}return c&&(a.value=gn(n,c,u)),a}function gn(e,t,n){return ne(t,!1,_e(e,n,t.length))}function yn({value:e,key:t,index:n},r=[]){return vn([e,t,n,...r])}function vn(e){let t=e.length;while(t--)if(e[t])break;return e.slice(0,t+1).map(((e,t)=>e||ne("_".repeat(t+1),!1)))}const _n=ne("undefined",!1),bn=(e,t)=>{if(1===e.type&&(1===e.tagType||3===e.tagType)){const n=Ee(e,"slot");if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},wn=(e,t,n)=>ie(e,t,!1,!0,t.length?t[0].loc:n);function En(e,t,n=wn){t.helper(H);const{children:r,loc:s}=e,i=[],o=[];let a=t.scopes.vSlot>0||t.scopes.vFor>0;const u=Ee(e,"slot",!0);if(u){const{arg:e,exp:t}=u;e&&!ue(e)&&(a=!0),i.push(te(e||ne("default",!0),n(t,r,s)))}let l=!1,h=!1;const f=[],d=new Set;let p=0;for(let y=0;y<r.length;y++){const e=r[y];let s;if(!Ne(e)||!(s=Ee(e,"slot",!0))){3!==e.type&&f.push(e);continue}if(u){t.onError(c(37,s.loc));break}l=!0;const{children:m,loc:g}=e,{arg:v=ne("default",!0),exp:_,loc:b}=s;let w;ue(v)?w=v?v.content:"default":a=!0;const E=n(_,m,g);let T,I,k;if(T=Ee(e,"if"))a=!0,o.push(oe(T.exp,Tn(v,E,p++),_n));else if(I=Ee(e,/^else(-if)?$/,!0)){let e,n=y;while(n--)if(e=r[n],3!==e.type)break;if(e&&Ne(e)&&Ee(e,"if")){r.splice(y,1),y--;let e=o[o.length-1];while(19===e.alternate.type)e=e.alternate;e.alternate=I.exp?oe(I.exp,Tn(v,E,p++),_n):Tn(v,E,p++)}else t.onError(c(30,I.loc))}else if(k=Ee(e,"for")){a=!0;const e=k.parseResult||mn(k.exp,t);e?o.push(se(t.helper(C),[e.source,ie(yn(e),Tn(v,E),!0)])):t.onError(c(32,k.loc))}else{if(w){if(d.has(w)){t.onError(c(38,b));continue}d.add(w),"default"===w&&(h=!0)}i.push(te(v,E))}}if(!u){const e=(e,r)=>{const i=n(e,r,s);return t.compatConfig&&(i.isNonScopedSlot=!0),te("default",i)};l?f.length&&f.some((e=>kn(e)))&&(h?t.onError(c(39,f[0].loc)):i.push(e(void 0,f))):i.push(e(void 0,r))}const m=a?2:In(e.children)?3:1;let g=ee(i.concat(te("_",ne(m+"",!1))),s);return o.length&&(g=se(t.helper(A),[g,Z(o)])),{slots:g,hasDynamicSlots:a}}function Tn(e,t,n){const r=[te("name",e),te("fn",t)];return null!=n&&r.push(te("key",ne(String(n),!0))),ee(r)}function In(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(2===n.tagType||In(n.children))return!0;break;case 9:if(In(n.branches))return!0;break;case 10:case 11:if(In(n.children))return!0;break}}return!1}function kn(e){return 2!==e.type&&12!==e.type||(2===e.type?!!e.content.trim():kn(e.content))}const Sn=new WeakMap,Cn=(e,t)=>function(){if(e=t.currentNode,1!==e.type||0!==e.tagType&&1!==e.tagType)return;const{tag:n,props:r}=e,s=1===e.tagType;let o=s?Nn(e,t):`"${n}"`;const a=(0,i.Kn)(o)&&o.callee===T;let c,u,d,p,m,g,y=0,v=a||o===l||o===h||!s&&("svg"===n||"foreignObject"===n);if(r.length>0){const n=An(e,t,void 0,s,a);c=n.props,y=n.patchFlag,m=n.dynamicPropNames;const r=n.directives;g=r&&r.length?Z(r.map((e=>Ln(e,t)))):void 0,n.shouldUseBlock&&(v=!0)}if(e.children.length>0){o===f&&(v=!0,y|=1024);const n=s&&o!==l&&o!==f;if(n){const{slots:n,hasDynamicSlots:r}=En(e,t);u=n,r&&(y|=1024)}else if(1===e.children.length&&o!==l){const n=e.children[0],r=n.type,s=5===r||8===r;s&&0===wt(n,t)&&(y|=1),u=s||2===r?n:e.children}else u=e.children}0!==y&&(d=String(y),m&&m.length&&(p=xn(m))),e.codegenNode=Q(t,o,c,u,d,p,g,!!v,!1,s,e.loc)};function Nn(e,t,n=!1){let{tag:r}=e;const s=Dn(r),i=Te(e,"is");if(i)if(s||je("COMPILER_IS_ON_ELEMENT",t)){const e=6===i.type?i.value&&ne(i.value.content,!0):i.exp;if(e)return se(t.helper(T),[e])}else 6===i.type&&i.value.content.startsWith("vue:")&&(r=i.value.content.slice(4));const o=!s&&Ee(e,"is");if(o&&o.exp)return se(t.helper(T),[o.exp]);const a=he(r)||t.isBuiltInComponent(r);return a?(n||t.helper(a),a):(t.helper(E),t.components.add(r),Me(r,"component"))}function An(e,t,n=e.props,r,s,o=!1){const{tag:a,loc:u,children:l}=e;let h=[];const f=[],d=[],p=l.length>0;let m=!1,g=0,y=!1,v=!1,_=!1,b=!1,w=!1,E=!1;const T=[],I=e=>{h.length&&(f.push(ee(Rn(h),u)),h=[]),e&&f.push(e)},k=({key:e,value:n})=>{if(ue(e)){const o=e.content,a=(0,i.F7)(o);if(!a||r&&!s||"onclick"===o.toLowerCase()||"onUpdate:modelValue"===o||(0,i.Gg)(o)||(b=!0),a&&(0,i.Gg)(o)&&(E=!0),20===n.type||(4===n.type||8===n.type)&&wt(n,t)>0)return;"ref"===o?y=!0:"class"===o?v=!0:"style"===o?_=!0:"key"===o||T.includes(o)||T.push(o),!r||"class"!==o&&"style"!==o||T.includes(o)||T.push(o)}else w=!0};for(let C=0;C<n.length;C++){const s=n[C];if(6===s.type){const{loc:e,name:n,value:r}=s;let i=!0;if("ref"===n&&(y=!0,t.scopes.vFor>0&&h.push(te(ne("ref_for",!0),ne("true")))),"is"===n&&(Dn(a)||r&&r.content.startsWith("vue:")||je("COMPILER_IS_ON_ELEMENT",t)))continue;h.push(te(ne(n,!0,_e(e,0,n.length)),ne(r?r.content:"",i,r?r.loc:e)))}else{const{name:n,arg:l,exp:g,loc:y}=s,v="bind"===n,_="on"===n;if("slot"===n){r||t.onError(c(40,y));continue}if("once"===n||"memo"===n)continue;if("is"===n||v&&Ie(l,"is")&&(Dn(a)||je("COMPILER_IS_ON_ELEMENT",t)))continue;if(_&&o)continue;if((v&&Ie(l,"key")||_&&p&&Ie(l,"vue:before-update"))&&(m=!0),v&&Ie(l,"ref")&&t.scopes.vFor>0&&h.push(te(ne("ref_for",!0),ne("true"))),!l&&(v||_)){if(w=!0,g)if(v){if(I(),je("COMPILER_V_BIND_OBJECT_ORDER",t)){f.unshift(g);continue}f.push(g)}else I({type:14,loc:y,callee:t.helper(M),arguments:r?[g]:[g,"true"]});else t.onError(c(v?34:35,y));continue}const b=t.directiveTransforms[n];if(b){const{props:n,needRuntime:r}=b(s,e,t);!o&&n.forEach(k),_&&l&&!ue(l)?I(ee(n,u)):h.push(...n),r&&(d.push(s),(0,i.yk)(r)&&Sn.set(s,r))}else(0,i.wh)(n)||(d.push(s),p&&(m=!0))}}let S;if(f.length?(I(),S=f.length>1?se(t.helper(O),f,u):f[0]):h.length&&(S=ee(Rn(h),u)),w?g|=16:(v&&!r&&(g|=2),_&&!r&&(g|=4),T.length&&(g|=8),b&&(g|=32)),m||0!==g&&32!==g||!(y||E||d.length>0)||(g|=512),!t.inSSR&&S)switch(S.type){case 15:let e=-1,n=-1,r=!1;for(let t=0;t<S.properties.length;t++){const s=S.properties[t].key;ue(s)?"class"===s.content?e=t:"style"===s.content&&(n=t):s.isHandlerKey||(r=!0)}const s=S.properties[e],i=S.properties[n];r?S=se(t.helper(D),[S]):(s&&!ue(s.value)&&(s.value=se(t.helper(L),[s.value])),i&&(_||4===i.value.type&&"["===i.value.content.trim()[0]||17===i.value.type)&&(i.value=se(t.helper(x),[i.value])));break;case 14:break;default:S=se(t.helper(D),[se(t.helper(P),[S])]);break}return{props:S,directives:d,patchFlag:g,dynamicPropNames:T,shouldUseBlock:m}}function Rn(e){const t=new Map,n=[];for(let r=0;r<e.length;r++){const s=e[r];if(8===s.key.type||!s.key.isStatic){n.push(s);continue}const o=s.key.content,a=t.get(o);a?("style"===o||"class"===o||(0,i.F7)(o))&&On(a,s):(t.set(o,s),n.push(s))}return n}function On(e,t){17===e.value.type?e.value.elements.push(t.value):e.value=Z([e.value,t.value],e.loc)}function Ln(e,t){const n=[],r=Sn.get(e);r?n.push(t.helperString(r)):(t.helper(I),t.directives.add(e.name),n.push(Me(e.name,"directive")));const{loc:s}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push("void 0"),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const t=ne("true",!1,s);n.push(ee(e.modifiers.map((e=>te(e,t))),s))}return Z(n,e.loc)}function xn(e){let t="[";for(let n=0,r=e.length;n<r;n++)t+=JSON.stringify(e[n]),n<r-1&&(t+=", ");return t+"]"}function Dn(e){return"component"===e||"Component"===e}const Pn=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},Mn=/-(\w)/g,Fn=Pn((e=>e.replace(Mn,((e,t)=>t?t.toUpperCase():"")))),Un=(e,t)=>{if(Ae(e)){const{children:n,loc:r}=e,{slotName:s,slotProps:i}=Vn(e,t),o=[t.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;i&&(o[2]=i,a=3),n.length&&(o[3]=ie([],n,!1,!1,r),a=4),t.scopeId&&!t.slotted&&(a=5),o.splice(a),e.codegenNode=se(t.helper(N),o,r)}};function Vn(e,t){let n,r='"default"';const s=[];for(let i=0;i<e.props.length;i++){const t=e.props[i];6===t.type?t.value&&("name"===t.name?r=JSON.stringify(t.value.content):(t.name=Fn(t.name),s.push(t))):"bind"===t.name&&Ie(t.arg,"name")?t.exp&&(r=t.exp):("bind"===t.name&&t.arg&&ue(t.arg)&&(t.arg.content=Fn(t.arg.content)),s.push(t))}if(s.length>0){const{props:r,directives:i}=An(e,t,s,!1,!1);n=r,i.length&&t.onError(c(36,i[0].loc))}return{slotName:r,slotProps:n}}const jn=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,$n=(e,t,n,r)=>{const{loc:s,modifiers:o,arg:a}=e;let u;if(e.exp||o.length||n.onError(c(35,s)),4===a.type)if(a.isStatic){let e=a.content;e.startsWith("vue:")&&(e=`vnode-${e.slice(4)}`);const n=0!==t.tagType||e.startsWith("vnode")||!/[A-Z]/.test(e)?(0,i.hR)((0,i._A)(e)):`on:${e}`;u=ne(n,!0,a.loc)}else u=re([`${n.helperString(V)}(`,a,")"]);else u=a,u.children.unshift(`${n.helperString(V)}(`),u.children.push(")");let l=e.exp;l&&!l.content.trim()&&(l=void 0);let h=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const e=ve(l.content),t=!(e||jn.test(l.content)),n=l.content.includes(";");0,(t||h&&e)&&(l=re([`${t?"$event":"(...args)"} => ${n?"{":"("}`,l,n?"}":")"]))}let f={props:[te(u,l||ne("() => {}",!1,s))]};return r&&(f=r(f)),h&&(f.props[0].value=n.cache(f.props[0].value)),f.props.forEach((e=>e.key.isHandlerKey=!0)),f},Bn=(e,t,n)=>{const{exp:r,modifiers:s,loc:o}=e,a=e.arg;return 4!==a.type?(a.children.unshift("("),a.children.push(') || ""')):a.isStatic||(a.content=`${a.content} || ""`),s.includes("camel")&&(4===a.type?a.isStatic?a.content=(0,i._A)(a.content):a.content=`${n.helperString(F)}(${a.content})`:(a.children.unshift(`${n.helperString(F)}(`),a.children.push(")"))),n.inSSR||(s.includes("prop")&&Hn(a,"."),s.includes("attr")&&Hn(a,"^")),!r||4===r.type&&!r.content.trim()?(n.onError(c(34,o)),{props:[te(a,ne("",!0,o))]}):{props:[te(a,r)]}},Hn=(e,t)=>{4===e.type?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},qn=(e,t)=>{if(0===e.type||1===e.type||11===e.type||10===e.type)return()=>{const n=e.children;let r,s=!1;for(let e=0;e<n.length;e++){const t=n[e];if(Se(t)){s=!0;for(let s=e+1;s<n.length;s++){const i=n[s];if(!Se(i)){r=void 0;break}r||(r=n[e]=re([t],t.loc)),r.children.push(" + ",i),n.splice(s,1),s--}}}if(s&&(1!==n.length||0!==e.type&&(1!==e.type||0!==e.tagType||e.props.find((e=>7===e.type&&!t.directiveTransforms[e.name]))||"template"===e.tag)))for(let e=0;e<n.length;e++){const r=n[e];if(Se(r)||8===r.type){const s=[];2===r.type&&" "===r.content||s.push(r),t.ssr||0!==wt(r,t)||s.push("1"),n[e]={type:12,content:r,loc:r.loc,codegenNode:se(t.helper(b),s)}}}}},Wn=new WeakSet,Gn=(e,t)=>{if(1===e.type&&Ee(e,"once",!0)){if(Wn.has(e)||t.inVOnce)return;return Wn.add(e),t.inVOnce=!0,t.helper(j),()=>{t.inVOnce=!1;const e=t.currentNode;e.codegenNode&&(e.codegenNode=t.cache(e.codegenNode,!0))}}},Kn=(e,t,n)=>{const{exp:r,arg:s}=e;if(!r)return n.onError(c(41,e.loc)),zn();const i=r.loc.source,o=4===r.type?r.content:i,a=n.bindingMetadata[i];if("props"===a||"props-aliased"===a)return n.onError(c(44,r.loc)),zn();const u=!1;if(!o.trim()||!ve(o)&&!u)return n.onError(c(42,r.loc)),zn();const l=s||ne("modelValue",!0),h=s?ue(s)?`onUpdate:${s.content}`:re(['"onUpdate:" + ',s]):"onUpdate:modelValue";let f;const d=n.isTS?"($event: any)":"$event";f=re([`${d} => ((`,r,") = $event)"]);const p=[te(l,e.exp),te(h,f)];if(e.modifiers.length&&1===t.tagType){const t=e.modifiers.map((e=>(de(e)?e:JSON.stringify(e))+": true")).join(", "),n=s?ue(s)?`${s.content}Modifiers`:re([s,' + "Modifiers"']):"modelModifiers";p.push(te(n,ne(`{ ${t} }`,!1,e.loc,2)))}return zn(p)};function zn(e=[]){return{props:e}}const Jn=/[\w).+\-_$\]]/,Yn=(e,t)=>{je("COMPILER_FILTER",t)&&(5===e.type&&Xn(e.content,t),1===e.type&&e.props.forEach((e=>{7===e.type&&"for"!==e.name&&e.exp&&Xn(e.exp,t)})))};function Xn(e,t){if(4===e.type)Qn(e,t);else for(let n=0;n<e.children.length;n++){const r=e.children[n];"object"===typeof r&&(4===r.type?Qn(r,t):8===r.type?Xn(e,t):5===r.type&&Xn(r.content,t))}}function Qn(e,t){const n=e.content;let r,s,i,o,a=!1,c=!1,u=!1,l=!1,h=0,f=0,d=0,p=0,m=[];for(i=0;i<n.length;i++)if(s=r,r=n.charCodeAt(i),a)39===r&&92!==s&&(a=!1);else if(c)34===r&&92!==s&&(c=!1);else if(u)96===r&&92!==s&&(u=!1);else if(l)47===r&&92!==s&&(l=!1);else if(124!==r||124===n.charCodeAt(i+1)||124===n.charCodeAt(i-1)||h||f||d){switch(r){case 34:c=!0;break;case 39:a=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:f++;break;case 93:f--;break;case 123:h++;break;case 125:h--;break}if(47===r){let e,t=i-1;for(;t>=0;t--)if(e=n.charAt(t)," "!==e)break;e&&Jn.test(e)||(l=!0)}}else void 0===o?(p=i+1,o=n.slice(0,i).trim()):g();function g(){m.push(n.slice(p,i).trim()),p=i+1}if(void 0===o?o=n.slice(0,i).trim():0!==p&&g(),m.length){for(i=0;i<m.length;i++)o=Zn(o,m[i],t);e.content=o}}function Zn(e,t,n){n.helper(k);const r=t.indexOf("(");if(r<0)return n.filters.add(t),`${Me(t,"filter")}(${e})`;{const s=t.slice(0,r),i=t.slice(r+1);return n.filters.add(s),`${Me(s,"filter")}(${e}${")"!==i?","+i:i}`}}const er=new WeakSet,tr=(e,t)=>{if(1===e.type){const n=Ee(e,"memo");if(!n||er.has(e))return;return er.add(e),()=>{const r=e.codegenNode||t.currentNode.codegenNode;r&&13===r.type&&(1!==e.tagType&&Ue(r,t),e.codegenNode=se(t.helper(G),[n.exp,ie(void 0,r),"_cache",String(t.cached++)]))}}};function nr(e){return[[Gn,rn,tr,ln,Yn,Un,Cn,bn,qn],{on:$n,bind:Bn,model:Kn}]}function rr(e,t={}){const n=t.onError||o,r="module"===t.mode;!0===t.prefixIdentifiers?n(c(47)):r&&n(c(48));const s=!1;t.cacheHandlers&&n(c(49)),t.scopeId&&!r&&n(c(50));const a=(0,i.HD)(e)?We(e,t):e,[u,l]=nr();return Nt(a,(0,i.l7)({},t,{prefixIdentifiers:s,nodeTransforms:[...u,...t.nodeTransforms||[]],directiveTransforms:(0,i.l7)({},l,t.directiveTransforms||{})})),Mt(a,(0,i.l7)({},t,{prefixIdentifiers:s}))}const sr=()=>({props:[]}),ir=Symbol(""),or=Symbol(""),ar=Symbol(""),cr=Symbol(""),ur=Symbol(""),lr=Symbol(""),hr=Symbol(""),fr=Symbol(""),dr=Symbol(""),pr=Symbol("");let mr;function gr(e,t=!1){return mr||(mr=document.createElement("div")),t?(mr.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,mr.children[0].getAttribute("foo")):(mr.innerHTML=e,mr.textContent)}J({[ir]:"vModelRadio",[or]:"vModelCheckbox",[ar]:"vModelText",[cr]:"vModelSelect",[ur]:"vModelDynamic",[lr]:"withModifiers",[hr]:"withKeys",[fr]:"vShow",[dr]:"Transition",[pr]:"TransitionGroup"});const yr=(0,i.fY)("style,iframe,script,noscript",!0),vr={isVoidTag:i.WB,isNativeTag:e=>(0,i.eS)(e)||(0,i.aN)(e),isPreTag:e=>"pre"===e,decodeEntities:gr,isBuiltInComponent:e=>le(e,"Transition")?dr:le(e,"TransitionGroup")?pr:void 0,getNamespace(e,t){let n=t?t.ns:0;if(t&&2===n)if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some((e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content)))&&(n=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(n=0);else t&&1===n&&("foreignObject"!==t.tag&&"desc"!==t.tag&&"title"!==t.tag||(n=0));if(0===n){if("svg"===e)return 1;if("math"===e)return 2}return n},getTextMode({tag:e,ns:t}){if(0===t){if("textarea"===e||"title"===e)return 1;if(yr(e))return 2}return 0}},_r=e=>{1===e.type&&e.props.forEach(((t,n)=>{6===t.type&&"style"===t.name&&t.value&&(e.props[n]={type:7,name:"bind",arg:ne("style",!0,t.loc),exp:br(t.value.content,t.loc),modifiers:[],loc:t.loc})}))},br=(e,t)=>{const n=(0,i.yL)(e);return ne(JSON.stringify(n),!1,t,3)};function wr(e,t){return c(e,t,void 0)}const Er=(e,t,n)=>{const{exp:r,loc:s}=e;return r||n.onError(wr(51,s)),t.children.length&&(n.onError(wr(52,s)),t.children.length=0),{props:[te(ne("innerHTML",!0,s),r||ne("",!0))]}},Tr=(e,t,n)=>{const{exp:r,loc:s}=e;return r||n.onError(wr(53,s)),t.children.length&&(n.onError(wr(54,s)),t.children.length=0),{props:[te(ne("textContent",!0),r?wt(r,n)>0?r:se(n.helperString(R),[r],s):ne("",!0))]}},Ir=(e,t,n)=>{const r=Kn(e,t,n);if(!r.props.length||1===t.tagType)return r;e.arg&&n.onError(wr(56,e.arg.loc));const{tag:s}=t,i=n.isCustomElement(s);if("input"===s||"textarea"===s||"select"===s||i){let o=ar,a=!1;if("input"===s||i){const r=Te(t,"type");if(r){if(7===r.type)o=ur;else if(r.value)switch(r.value.content){case"radio":o=ir;break;case"checkbox":o=or;break;case"file":a=!0,n.onError(wr(57,e.loc));break;default:break}}else ke(t)&&(o=ur)}else"select"===s&&(o=cr);a||(r.needRuntime=n.helper(o))}else n.onError(wr(55,e.loc));return r.props=r.props.filter((e=>!(4===e.key.type&&"modelValue"===e.key.content))),r},kr=(0,i.fY)("passive,once,capture"),Sr=(0,i.fY)("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),Cr=(0,i.fY)("left,right"),Nr=(0,i.fY)("onkeyup,onkeydown,onkeypress",!0),Ar=(e,t,n,r)=>{const s=[],i=[],o=[];for(let a=0;a<t.length;a++){const c=t[a];"native"===c&&$e("COMPILER_V_ON_NATIVE",n,r)||kr(c)?o.push(c):Cr(c)?ue(e)?Nr(e.content)?s.push(c):i.push(c):(s.push(c),i.push(c)):Sr(c)?i.push(c):s.push(c)}return{keyModifiers:s,nonKeyModifiers:i,eventOptionModifiers:o}},Rr=(e,t)=>{const n=ue(e)&&"onclick"===e.content.toLowerCase();return n?ne(t,!0):4!==e.type?re(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e},Or=(e,t,n)=>$n(e,t,n,(t=>{const{modifiers:r}=e;if(!r.length)return t;let{key:s,value:o}=t.props[0];const{keyModifiers:a,nonKeyModifiers:c,eventOptionModifiers:u}=Ar(s,r,n,e.loc);if(c.includes("right")&&(s=Rr(s,"onContextmenu")),c.includes("middle")&&(s=Rr(s,"onMouseup")),c.length&&(o=se(n.helper(lr),[o,JSON.stringify(c)])),!a.length||ue(s)&&!Nr(s.content)||(o=se(n.helper(hr),[o,JSON.stringify(a)])),u.length){const e=u.map(i.kC).join("");s=ue(s)?ne(`${s.content}${e}`,!0):re(["(",s,`) + "${e}"`])}return{props:[te(s,o)]}})),Lr=(e,t,n)=>{const{exp:r,loc:s}=e;return r||n.onError(wr(59,s)),{props:[],needRuntime:n.helper(fr)}};const xr=(e,t)=>{1!==e.type||0!==e.tagType||"script"!==e.tag&&"style"!==e.tag||(t.onError(wr(61,e.loc)),t.removeNode())},Dr=[_r],Pr={cloak:sr,html:Er,text:Tr,model:Ir,on:Or,show:Lr};function Mr(e,t={}){return rr(e,(0,i.l7)({},vr,t,{nodeTransforms:[xr,...Dr,...t.nodeTransforms||[]],directiveTransforms:(0,i.l7)({},Pr,t.directiveTransforms||{}),transformHoist:null}))}const Fr=Object.create(null);function Ur(e,t){if(!(0,i.HD)(e)){if(!e.nodeType)return i.dG;e=e.innerHTML}const n=e,s=Fr[n];if(s)return s;if("#"===e[0]){const t=document.querySelector(e);0,e=t?t.innerHTML:""}const o=(0,i.l7)({hoistStatic:!0,onError:void 0,onWarn:i.dG},t);o.isCustomElement||"undefined"===typeof customElements||(o.isCustomElement=e=>!!customElements.get(e));const{code:a}=Mr(e,o);const c=new Function("Vue",a)(r);return c._rc=!0,Fr[n]=c}(0,s.Y1)(Ur)},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return le},Mq:function(){return ye},ZF:function(){return ge},KN:function(){return ve}});n(7658);var r=n(7142),s=n(5168),i=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(E(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));f.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return d.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const T=e=>m.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],C=new Map;function N(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!k.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return C.set(t,i),i}_((e=>({...e,get:(t,n,r)=>N(t,n)||e.get(t,n,r),has:(t,n)=>!!N(t,n)||e.has(t,n)})));
/**
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
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",L="0.9.0",x=new s.Yd("@firebase/app"),D="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",q="@firebase/functions-compat",W="@firebase/installations",G="@firebase/installations-compat",K="@firebase/messaging",z="@firebase/messaging-compat",J="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",se="9.15.0",ie="[DEFAULT]",oe={[O]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[q]:"fire-fn-compat",[W]:"fire-iid",[G]:"fire-iid-compat",[K]:"fire-fcm",[z]:"fire-fcm-compat",[J]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new i.LL("app","Firebase",fe);
/**
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
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}
/**
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
 */const me=se;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const s=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),o=s.name;if("string"!==typeof o||!o)throw de.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.aH)()),!n)throw de.create("no-options");const a=ae.get(o);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(s,a.config))return a;throw de.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new pe(n,s,c);return ae.set(o,u),u}function ye(e=ie){const t=ae.get(e);if(!t&&e===ie)return ge();if(!t)throw de.create("no-app",{appName:e});return t}function ve(e,t,n){var s;let i=null!==(s=oe[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}le(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */
const _e="firebase-heartbeat-database",be=1,we="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=I(_e,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw de.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Ie(e){try{const t=await Te();return t.transaction(we).objectStore(we).get(Se(e))}catch(t){if(t instanceof i.ZR)x.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});x.warn(e.message)}}}async function ke(e,t){try{const n=await Te(),r=n.transaction(we,"readwrite"),s=r.objectStore(we);return await s.put(t,Se(e)),r.done}catch(n){if(n instanceof i.ZR)x.warn(n.message);else{const e=de.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(e.message)}}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Ce=1024,Ne=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ne})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Oe(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=Ce){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),xe(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function xe(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function De(e){le(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ve(O,L,e),ve(O,L,"esm2017"),ve("fire-js","")}De("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return s}});var r=n(223);class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const i="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return s}});n(7658);
/**
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
 */const r=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),s="firebase",i="9.15.0";
/**
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
 */
(0,r.KN)(s,i,"app")},9125:function(e,t,n){"use strict";n.d(t,{Xb:function(){return dt},h8:function(){return Et},v0:function(){return kr},Aj:function(){return bt},e5:function(){return pt},w7:function(){return wt},s:function(){return mt},gQ:function(){return gt}});n(7658);var r=n(223),s=n(7077),i=n(5168);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new i.Yd("@firebase/auth");function f(e,...t){h.logLevel<=i["in"].ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}
/**
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
 */function d(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const s=Object.assign(Object.assign({},u()),{[t]:n}),i=new r.LL("auth","Firebase",s);return i.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function y(e,t,...n){if(!e)throw g(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function _(e,t){e||v(t)}
/**
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
 */const b=new Map;function w(e){_(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
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
 */function E(e,t){const n=(0,s.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if((0,r.vZ)(s,null!==t&&void 0!==t?t:{}))return e;d(e,"already-initialized")}const i=n.initialize({options:t});return i}function T(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function N(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function R(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},x=new A(3e4,6e4);
/**
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
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,s,i={}){return M(e,i,(async()=>{let i={},o={};s&&("GET"===t?o=s:i={body:JSON.stringify(s)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function M(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},L),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw j(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw j(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);d(e,a)}}catch(i){if(i instanceof r.ZR)throw i;d(e,"network-request-failed")}}async function F(e,t,n,r,s={}){const i=await P(e,t,n,r,s);return"mfaPendingCredential"in i&&d(e,"multi-factor-auth-required",{_serverResponse:i}),i}function U(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?R(e.config,s):`${e.config.apiScheme}://${s}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=p(e,t,r);return s.customData._tokenResponse=n,s}
/**
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
 */async function $(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function q(e,t=!1){const n=(0,r.m9)(e),s=await n.getIdToken(t),i=G(s);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:s,authTime:H(W(i.auth_time)),issuedAtTime:H(W(i.iat)),expirationTime:H(W(i.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function G(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function K(e){const t=G(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function z(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof r.ZR&&J(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),s=await z(e,B(n,{idToken:r}));y(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new X(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=(0,r.m9)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=U(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new re;return n&&(y("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(y("number"===typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
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
 */function se(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new X(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await z(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await z(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,d=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:T}=t;y(_&&T,e,"internal-error");const I=re.fromJSON(this.name,T);y("string"===typeof _,e,"internal-error"),se(l,e.name),se(h,e.name),y("boolean"===typeof b,e,"internal-error"),y("boolean"===typeof w,e,"internal-error"),se(f,e.name),se(d,e.name),se(p,e.name),se(m,e.name),se(g,e.name),se(v,e.name);const k=new ie({uid:_,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(k.providerData=E.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const s=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(s),s}}
/**
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
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
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
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,s),this.fullPersistenceKey=ce("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||w(ae);const i=ce(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ie._fromJSON(e,t);u!==s&&(o=n),s=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(c){}}))),new ue(s,e,n)):new ue(s,e,n)}}
/**
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
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ye(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function ye(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _e(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return ve(e)||me(e)||ye(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${i}`}
/**
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
 */class Ie{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(s){r(s)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
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
 */class ke{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ce(this),this.idTokenSubscription=new Ce(this),this.beforeStateQueue=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return y(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Se(e){return(0,r.m9)(e)}class Ce{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ne(e,t,n){const r=Se(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ae(t),{host:o,port:a}=Re(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Le()}function Ae(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Re(e){const t=Ae(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:Oe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Oe(t)}}}function Oe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Le(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
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
 */async function De(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function Pe(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}
/**
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
 */
async function Me(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function Fe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
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
 */class Ue extends xe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Pe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return De(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{idToken:t,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Ve(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
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
 */const je="http://localhost";class $e extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):d("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new $e(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return Ve(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ve(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ve(e,t)}buildRequest(){const e={requestUri:je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
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
 */async function Be(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function He(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function qe(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const We={["USER_NOT_FOUND"]:"user-not-found"};async function Ge(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),We)}
/**
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
 */class Ke extends xe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ke({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ke({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return He(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ge(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new Ke({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
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
 */function ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,s=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=s?(0,r.zd)((0,r.pd)(s))["link"]:null;return i||s||n||t||e}class Ye{constructor(e){var t,n,s,i,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ze(null!==(s=c["mode"])&&void 0!==s?s:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Je(e);try{return new Ye(t)}catch(n){return null}}}
/**
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
 */
class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ye.parseLink(t);return y(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Xe.PROVIDER_ID="password",Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Qe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Ze extends Qe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class et extends Ze{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
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
 */
class tt extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $e._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
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
 */
class nt extends Ze{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
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
 */
class rt extends Ze{constructor(){super("twitter.com")}static credential(e,t){return $e._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function st(e,t){return F(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
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
 */rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";class it{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await ie._fromIdTokenResponse(e,n,r),i=ot(n),o=new it({user:s,providerId:i,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ot(n);return new it({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class at extends r.ZR{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new at(e,t,n,r)}}function ct(e,t,n,r){const s="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw at._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function ut(e,t,n=!1){const r=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return it._forOperation(e,"link",r)}
/**
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
 */
async function lt(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await z(e,ct(r,s,t,e),n);y(i.idToken,r,"internal-error");const o=G(i.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(e.uid===a,r,"user-mismatch"),it._forOperation(e,s,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&d(r,"user-mismatch"),i}}
/**
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
 */async function ht(e,t,n=!1){const r="signIn",s=await ct(e,r,t),i=await it._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function ft(e,t){return ht(Se(e),t)}async function dt(e,t,n){const r=Se(e),s=await st(r,{returnSecureToken:!0,email:t,password:n}),i=await it._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function pt(e,t,n){return ft((0,r.m9)(e),Xe.credential(t,n))}
/**
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
 */function mt(e,t){return yt((0,r.m9)(e),t,null)}function gt(e,t){return yt((0,r.m9)(e),null,t)}async function yt(e,t,n){const{auth:r}=e,s=await e.getIdToken(),i={idToken:s,returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const o=await z(e,De(r,i));await e._updateTokensIfNecessary(o,!0)}
/**
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
 */function vt(e,t,n,s){return(0,r.m9)(e).onIdTokenChanged(t,n,s)}function _t(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function bt(e,t,n,s){return(0,r.m9)(e).onAuthStateChanged(t,n,s)}function wt(e){return(0,r.m9)(e).signOut()}async function Et(e){return(0,r.m9)(e).delete()}
/**
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
 */
function Tt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function It(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const kt="__sak";
/**
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
 */class St{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kt,"1"),this.storage.removeItem(kt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Ct(){const e=(0,r.z$)();return fe(e)||ve(e)}const Nt=1e3,At=10;class Rt extends St{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ct()&&Ee(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);be()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,At):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Nt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rt.type="LOCAL";const Ot=Rt;
/**
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
 */class Lt extends St{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lt.type="SESSION";const xt=Lt;
/**
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
 */function Dt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class Pt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Pt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await Dt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Mt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Pt.receivers=[];class Ft{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=Mt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
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
 */function Ut(){return window}function Vt(e){Ut().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function jt(){return"undefined"!==typeof Ut()["WorkerGlobalScope"]&&"function"===typeof Ut()["importScripts"]}async function $t(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Bt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ht(){return jt()?self:null}
/**
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
 */const qt="firebaseLocalStorageDb",Wt=1,Gt="firebaseLocalStorage",Kt="fbase_key";class zt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Jt(e,t){return e.transaction([Gt],t?"readwrite":"readonly").objectStore(Gt)}function Yt(){const e=indexedDB.deleteDatabase(qt);return new zt(e).toPromise()}function Xt(){const e=indexedDB.open(qt,Wt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Gt,{keyPath:Kt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Gt)?t(n):(n.close(),await Yt(),t(await Xt()))}))}))}async function Qt(e,t,n){const r=Jt(e,!0).put({[Kt]:t,value:n});return new zt(r).toPromise()}async function Zt(e,t){const n=Jt(e,!1).get(t),r=await new zt(n).toPromise();return void 0===r?null:r.value}function en(e,t){const n=Jt(e,!0).delete(t);return new zt(n).toPromise()}const tn=800,nn=3;class rn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>nn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pt._getInstance(Ht()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await $t(),!this.activeServiceWorker)return;this.sender=new Ft(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Bt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xt();return await Qt(e,kt,"1"),await en(e,kt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Qt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Zt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>en(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Jt(e,!1).getAll();return new zt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),tn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}rn.type="LOCAL";const sn=rn;
/**
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
 */function on(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function an(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
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
 */
/**
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
 */
function cn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function un(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",cn().appendChild(r)}))}function ln(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
ln("rcb"),new A(3e4,6e4);
/**
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
 */
const hn="recaptcha";async function fn(e,t,n){var r;const s=await n.verify();try{let i;if(y("string"===typeof s,e,"argument-error"),y(n.type===hn,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){y("enroll"===t.type,e,"internal-error");const n=await Tt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await on(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Be(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
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
 */
class dn{constructor(e){this.providerId=dn.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return fn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ke._fromVerification(e,t)}static credentialFromResult(e){const t=e;return dn.credentialFromTaggedObject(t)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ke._fromTokenResponse(t,n):null}}
/**
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
 */
function pn(e,t){return t?w(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */dn.PROVIDER_ID="phone",dn.PHONE_SIGN_IN_METHOD="phone";class mn extends xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ve(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gn(e){return ht(e.auth,new mn(e),e.bypassAuthState)}function yn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),lt(n,new mn(e),e.bypassAuthState)}async function vn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ut(n,new mn(e),e.bypassAuthState)}
/**
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
 */class _n{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gn;case"linkViaPopup":case"linkViaRedirect":return vn;case"reauthViaPopup":case"reauthViaRedirect":return yn;default:d(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const bn=new A(2e3,1e4);class wn extends _n{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=Mt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,bn.get())};e()}}wn.currentPopupAction=null;
/**
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
 */
const En="pendingRedirect",Tn=new Map;class In extends _n{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Tn.get(this.auth._key());if(!e){try{const t=await kn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Tn.set(this.auth._key(),e)}return this.bypassAuthState||Tn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function kn(e,t){const n=Nn(t),r=Cn(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function Sn(e,t){Tn.set(e._key(),t)}function Cn(e){return w(e._redirectPersistence)}function Nn(e){return ce(En,e.config.apiKey,e.name)}
/**
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
 */async function An(e,t,n=!1){const r=Se(e),s=pn(r,t),i=new In(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
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
 */
const Rn=6e5;class On{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Dn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!xn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ln(e))}saveEventToCache(e){this.cachedEventUids.add(Ln(e)),this.lastProcessedEventTime=Date.now()}}function Ln(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function xn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Dn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xn(e);default:return!1}}
/**
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
 */async function Pn(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
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
 */const Mn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fn=/^https?/;async function Un(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Pn(e);for(const r of t)try{if(Vn(r))return}catch(n){}d(e,"unauthorized-domain")}function Vn(e){const t=I(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Fn.test(n))return!1;if(Mn.test(e))return r===e;const s=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const jn=new A(3e4,6e4);function $n(){const e=Ut().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Bn(e){return new Promise(((t,n)=>{var r,s,i;function o(){$n(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$n(),n(p(e,"network-request-failed"))},timeout:jn.get()})}if(null===(s=null===(r=Ut().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Ut().gapi)||void 0===i?void 0:i.load)){const t=ln("iframefcb");return Ut()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},un(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Hn=null,e}))}let Hn=null;function qn(e){return Hn=Hn||Bn(e),Hn}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Wn=new A(5e3,15e3),Gn="__/auth/iframe",Kn="emulator/auth/iframe",zn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yn(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Kn):`https://${e.config.authDomain}/${Gn}`,i={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=Jn.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Xn(e){const t=await qn(e),n=Ut().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:Yn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=p(e,"network-request-failed"),i=Ut().setTimeout((()=>{r(s)}),Wn.get());function o(){Ut().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zn=500,er=600,tr="_blank",nr="http://localhost";class rr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function sr(e,t,n,s=Zn,i=er){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Qn),{width:s.toString(),height:i.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=de(l)?tr:n),he(l)&&(t=t||nr,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(_e(l)&&"_self"!==c)return ir(t||"",c),new rr(null);const f=window.open(t||"",c,h);y(f,e,"popup-blocked");try{f.focus()}catch(d){}return new rr(f)}function ir(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const or="__/auth/handler",ar="emulator/auth/handler";function cr(e,t,n,i,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.Jn,eventId:o};if(t instanceof Qe){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ze){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${ur(e)}?${(0,r.xO)(u).slice(1)}`}function ur({config:e}){return e.emulator?R(e,ar):`https://${e.authDomain}/${or}`}
/**
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
 */const lr="webStorageSupport";class hr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xt,this._completeRedirectFn=An,this._overrideRedirectResult=Sn}async _openPopup(e,t,n,r){var s;_(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=cr(e,t,n,I(),r);return sr(e,i,Mt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Vt(cr(e,t,n,I(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Xn(e),n=new On(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(lr,{type:lr},(n=>{var r;const s=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[lr];void 0!==s&&t(!!s),d(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Un(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||fe()||ve()}}const fr=hr;class dr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class pr extends dr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new pr(e)}_finalizeEnroll(e,t,n){return It(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return an(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class mr{constructor(){}static assertion(e){return pr._fromCredential(e)}}mr.FACTOR_ID="phone";var gr="@firebase/auth",yr="0.21.0";
/**
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
 */
class vr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function _r(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function br(e){(0,s.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((t,r)=>{y(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const s={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},a=new ke(t,r,s);return T(a,n),a})(r,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s.Xd)(new a.wA("auth-internal",(e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new vr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(gr,yr,_r(e)),(0,s.KN)(gr,yr,"esm2017")}
/**
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
 */const wr=300,Er=(0,r.Pz)("authIdTokenMaxAge")||wr;let Tr=null;const Ir=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Er)return;const s=null===n||void 0===n?void 0:n.token;Tr!==s&&(Tr=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kr(e=(0,s.Mq)()){const t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=E(e,{popupRedirectResolver:fr,persistence:[sn,Ot,xt]}),i=(0,r.Pz)("authTokenSyncURL");if(i){const e=Ir(i);_t(n,e,(()=>e(n.currentUser))),vt(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Ne(n,`http://${o}`),n}br("Browser")},36:function(e,t,n){"use strict";n.d(t,{vr:function(){return Eh},hJ:function(){return pl},oe:function(){return _h},JU:function(){return ml},QT:function(){return ph},PL:function(){return gh},ad:function(){return Nl},pl:function(){return yh},r7:function(){return vh}});n(7658),n(2801);var r,s=n(7077),i=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function f(){}function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:_,b.apply(null,arguments)}function w(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function T(){this.s=this.s,this.o=this.o}var I=0;T.prototype.s=!1,T.prototype.na=function(){this.s||(this.s=!0,this.M(),0==I)||m(this)},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function S(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(d(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}function N(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",f,t),h.removeEventListener("test",f,t)}catch(n){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}var O=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function L(e,t){return e<t?-1:e>t?1:0}function x(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return-1!=x().indexOf(e)}function P(e){return P[" "](e),e}function M(e){var t=J;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}P[" "]=f;var F,U=D("Opera"),V=D("Trident")||D("MSIE"),j=D("Edge"),$=j||V,B=D("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),H=-1!=x().toLowerCase().indexOf("webkit")&&!D("Edge");function q(){var e=h.document;return e?e.documentMode:void 0}e:{var W="",G=function(){var e=x();return B?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):H?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(G&&(W=G?G[1]:""),V){var K=q();if(null!=K&&K>parseFloat(W)){F=String(K);break e}}F=W}var z,J={};function Y(){return M((function(){let e=0;const t=O(String(F)).split("."),n=O("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=L(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||L(0==s[2].length,0==i[2].length)||L(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(h.document&&V){var X=q();z=X||(parseInt(F,10)||void 0)}else z=void 0;var Q=z;function Z(e,t){if(N.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{P(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}E(Z,N);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++ne,this.ba=this.ea=!1}function se(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ie(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=k(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(se(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}ue.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=he(e,t,r,s);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,i,!!r,s),t.ea=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),de={};function pe(e,t,n,r,s){if(r&&r.once)return ye(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)pe(e,t[i],n,r,s);return null}return n=Ie(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,s):me(e,t,n,!1,r,s)}function me(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=Ee(e);if(a||(e[fe]=a=new ue(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(be(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=we;return e}function ye(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ye(e,t[i],n,r,s);return null}return n=Ie(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,s):me(e,t,n,!0,r,s)}function ve(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ve(e,t[i],n,r,s);else r=p(r)?!!r.capture:!!r,n=Ie(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=he(i,n,r,s),-1<n&&(se(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,s)),(n=-1<e?t[e]:null)&&_e(n))}function _e(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(be(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(le(n,e),0==n.h&&(n.src=null,t[fe]=null)):se(e)}}}function be(e){return e in de?de[e]:de[e]="on"+e}function we(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&_e(e),e=n.call(r,t)}return e}function Ee(e){return e=e[fe],e instanceof ue?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ie(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function ke(){T.call(this),this.i=new ue(this),this.P=this,this.I=null}function Se(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new N(t,e);else if(t instanceof N)t.target=t.target||e;else{var s=t;t=new N(r,e),ce(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Ce(o,r,!0,t)&&s}if(o=t.g=e,s=Ce(o,r,!0,t)&&s,s=Ce(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Ce(o,r,!1,t)&&s}function Ce(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&le(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}E(ke,T),ke.prototype[te]=!0,ke.prototype.removeEventListener=function(e,t,n,r){ve(this,e,t,n,r)},ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)se(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ne=h.JSON.stringify;function Ae(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Re{constructor(){this.h=this.g=null}add(e,t){const n=Le.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Oe,Le=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new xe),(e=>e.reset()));class xe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function De(e){h.setTimeout((()=>{throw e}),0)}function Pe(e,t){Oe||Me(),Fe||(Oe(),Fe=!0),Ue.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);Oe=function(){e.then(Ve)}}var Fe=!1,Ue=new Re;function Ve(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){De(n)}var t=Le;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function je(e,t){ke.call(this),this.h=e||1,this.g=t||h,this.j=b(this.lb,this),this.l=Date.now()}function $e(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Be(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function He(e){e.g=Be((()=>{e.g=null,e.i&&(e.i=!1,He(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(je,ke),r=je.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&($e(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){je.X.M.call(this),$e(this),delete this.g};class qe extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:He(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(e){T.call(this),this.h=e,this.g={}}E(We,T);var Ge=[];function Ke(e,t,n,r){Array.isArray(n)||(n&&(Ge[0]=n.toString()),n=Ge);for(var s=0;s<n.length;s++){var i=pe(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ze(e){ie(e.g,(function(e,t){this.g.hasOwnProperty(t)&&_e(e)}),e),e.g={}}function Je(){this.g=!0}function Ye(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}function Qe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ne(n)}catch(a){return t}}We.prototype.M=function(){We.X.M.call(this),ze(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new ke}function st(e){N.call(this,tt.Pa,e)}function it(e){const t=rt();Se(t,new st(t))}function ot(e,t){N.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();Se(t,new ot(t,e))}function ct(e,t){N.call(this,tt.Qa,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",E(st,N),tt.STAT_EVENT="statevent",E(ot,N),tt.Qa="timingevent",E(ct,N);var lt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ft(){}function dt(e){return e.h||(e.h=e.i())}function pt(){}ft.prototype.h=null;var mt,gt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){N.call(this,"d")}function vt(){N.call(this,"c")}function _t(){}function bt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new We(this),this.O=Et,e=$?125:void 0,this.T=new je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}E(yt,N),E(vt,N),E(_t,ft),_t.prototype.g=function(){return new XMLHttpRequest},_t.prototype.i=function(){return{}},mt=new _t;var Et=45e3,Tt={},It={};function kt(e,t,n){e.K=1,e.v=Kt(Bt(t)),e.s=n,e.P=!0,St(e,null)}function St(e,t){e.F=Date.now(),Rt(e),e.A=Bt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new wt,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new qe(b(e.La,e,e.g),e.N)),Ke(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),it(),Ye(e.j,e.u,e.A,e.m,e.U,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Nt(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==It){4==t&&(e.o=4,at(14),s=!1),Qe(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,at(15),Qe(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Qe(e.j,e.m,r,null),Pt(e,r)}Ct(e)&&r!=It&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Qe(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),xt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?It:(t=t.substr(r,n),e.C=r+n,t)))}function Rt(e){e.V=Date.now()+e.O,Ot(e,e.O)}function Ot(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(b(e.gb,e),t)}function Lt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function xt(e){0==e.l.G||e.I||or(e.l,e)}function Dt(e){Lt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,$e(e.T),ze(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Pt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mn(n.h,e)))if(!e.J&&mn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ir(n),zn(n)}nr(n),at(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(b(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else cr(n,11)}else if((e.J||n.g==e)&&ir(n),!R(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const s=u[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(gn(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Gt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=lr(r,r.H?r.ka:null,r.V),o.J){yn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Lt(a),Rt(a)),r.g=o}else tr(r);0<n.i.length&&Yn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):Kn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}it(4)}catch(u){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ut(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ft(e),r=Mt(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}r=bt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==$n(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const l=$n(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>l)&&(3!=l||$||this.g&&(this.h.h||this.g.fa()||Bn(this.g)))){this.I||4!=l||7==t||it(8==t||0>=f?3:2),Lt(this);var n=this.g.aa();this.Y=n;t:if(Ct(this)){var r=Bn(this.g);e="";var s=r.length,i=4==$n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),xt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),Dt(this),xt(this);break e}Qe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pt(this,n)}this.P?(Nt(this,l,o),$&&this.i&&3==l&&(Ke(this.S,this.T,"tick",this.hb),this.T.start())):(Qe(this.j,this.m,o,null),Pt(this,o)),4==l&&Dt(this),this.i&&!this.I&&(4==l?or(this.l,this):(this.i=!1,Rt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Dt(this),xt(this)}}}catch(l){}},r.hb=function(){if(this.g){var e=$n(this.g),t=this.g.fa();this.C<t.length&&(Lt(this),Nt(this,e,t),this.i&&4!=e&&Rt(this))}},r.cancel=function(){this.I=!0,Dt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(it(),at(17)),Dt(this),this.o=2,xt(this)):Ot(this,this.V-e)};var Vt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function $t(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $t){this.h=void 0!==t?t:e.h,Ht(this,e.j),this.s=e.s,this.g=e.g,qt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Wt(this,n),this.o=e.o}else e&&(n=String(e).match(Vt))?(this.h=!!t,Ht(this,n[1]||"",!0),this.s=zt(n[2]||""),this.g=zt(n[3]||"",!0),qt(this,n[4]),this.l=zt(n[5]||"",!0),Wt(this,n[6]||"",!0),this.o=zt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function Bt(e){return new $t(e)}function Ht(e,t,n){e.j=n?zt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Wt(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Jt(t,en)),e.i=new nn(t,e.h))}function Gt(e,t,n){e.i.set(t,n)}function Kt(e){return Gt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function zt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Yt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Jt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Jt(n,"/"==n.charAt(0)?Zt:Qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,tn)),e.join("")};var Xt=/[#\/\?@]/g,Qt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=cn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=cn(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(cn(e,t),S(n)),e.h+=n.length)}function cn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=cn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let e=0;e<s.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(cn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=cn(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};var ln=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||fn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function dn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function yn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function vn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return S(e.i)}function _n(){}function bn(){this.g=new _n}function wn(e,t,n){const r=n||"";try{Ut(e,(function(e,n){let s=e;p(e)&&(s=Ne(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function En(e,t){const n=new Je;if(h.Image){const r=new Image;r.onload=w(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=w(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=w(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=w(Tn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function In(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},_n.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},_n.prototype.parse=function(e){return h.JSON.parse(e,void 0)},E(In,ft),In.prototype.g=function(){return new kn(this.l,this.j)},In.prototype.i=function(e){return function(){return e}}({}),E(kn,ke);var Sn=0;function Cn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Nn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=kn.prototype,r.open=function(e,t){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Nn(this)),this.readyState=Sn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Nn(this):An(this),3==this.readyState&&Cn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,Nn(this))},r.Ua=function(e){this.g&&(this.response=e,Nn(this))},r.ga=function(){this.g&&Nn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Rn=h.JSON.parse;function On(e){ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ln,this.K=this.L=!1}E(On,ke);var Ln="",xn=/^https?$/i,Dn=["POST","PUT"];function Pn(e){return V&&Y()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Fn(e),Vn(e)}function Fn(e){e.D||(e.D=!0,Se(e,"complete"),Se(e,"error"))}function Un(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=$n(e)||2!=e.aa()))if(e.v&&4==$n(e))Be(e.Ha,0,e);else if(Se(e,"readystatechange"),4==$n(e)){e.h=!1;try{const c=e.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(Vt)[1]||null;if(!s&&h.self&&h.self.location){var i=h.self.location.protocol;s=i.substr(0,i.length-1)}r=!xn.test(s?s.toLowerCase():"")}n=r}if(n)Se(e,"complete"),Se(e,"success");else{e.m=6;try{var o=2<$n(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Fn(e)}}finally{Vn(e)}}}function Vn(e,t){if(e.g){jn(e);const r=e.g,s=e.C[0]?f:null;e.g=null,e.C=null,t||Se(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function jn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function $n(e){return e.g?e.g.readyState:0}function Bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ln:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Cr){return null}}function Hn(e){let t="";return ie(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function qn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Hn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Gt(e,t,n))}function Wn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Gn(e){this.Ca=0,this.i=[],this.j=new Je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Wn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Wn("baseRetryDelayMs",5e3,e),this.bb=Wn("retryDelaySeedMs",1e4,e),this.$a=Wn("forwardChannelMaxRetries",2,e),this.ta=Wn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new bn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Kn(e){if(Jn(e),3==e.G){var t=e.U++,n=Bt(e.F);Gt(n,"SID",e.I),Gt(n,"RID",t),Gt(n,"TYPE","terminate"),Zn(e,n),t=new bt(e,e.j,t,void 0),t.K=2,t.v=Kt(Bt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Rt(t)}ur(e)}function zn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Jn(e){zn(e),e.u&&(h.clearTimeout(e.u),e.u=null),ir(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Yn(e){dn(e.h)||e.m||(e.m=!0,Pe(e.Ja,e),e.C=0)}function Xn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ut(b(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Qn(e,t){var n;n=t?t.m:e.U++;const r=Bt(e.F);Gt(r,"SID",e.I),Gt(r,"RID",n),Gt(r,"AID",e.T),Zn(e,r),e.o&&e.s&&qn(r,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),gn(e.h,n),kt(n,r,t)}function Zn(e,t){e.ia&&ie(e.ia,(function(e,n){Gt(t,n,e)})),e.l&&Ut({},(function(e,n){Gt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Ra,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=t,0>n)t=Math.max(0,s[a].h-100),o=!1;else try{wn(c,e,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,Pe(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(b(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function sr(e){e.g=new bt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Bt(e.sa);Gt(t,"RID","rpc"),Gt(t,"SID",e.I),Gt(t,"CI",e.L?"0":"1"),Gt(t,"AID",e.T),Gt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&qn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Kt(Bt(t)),n.s=null,n.P=!0,St(n,e)}function ir(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){ir(e),rr(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.D,yn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=rt(),Se(r,new ct(r,n)),Yn(e)}else tr(e);else if(s=t.o,3==s||0==s&&0<e.pa||!(1==r&&Xn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:cr(e,5);break;case 4:cr(e,10);break;case 3:cr(e,6);break;default:cr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function cr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.kb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ht(n,"https"),Kt(n)),En(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),ur(e),Jn(e)}function ur(e){if(e.G=0,e.la=[],e.l){const t=vn(e.h);0==t.length&&0==e.i.length||(C(e.la,t),C(e.la,e.i),e.h.i.length=0,S(e.i),e.i.length=0),e.l.ua()}}function lr(e,t,n){var r=n instanceof $t?Bt(n):new $t(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),qt(r,r.m);else{var s=h.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new $t(null,void 0);r&&Ht(i,r),t&&(i.g=t),s&&qt(i,s),n&&(i.l=n),r=i}return n=e.D,t=e.za,n&&t&&Gt(r,n,t),Gt(r,"VER",e.ma),Zn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new On(new In({jb:!0})):new On(e.ra),t.Ka(e.H),t}function fr(){}function dr(){if(V&&!(10<=Number(Q)))throw Error("Environmental error: no available transport.")}function pr(e,t){ke.call(this),this.g=new Gn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yr(this)}function mr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){vt.call(this),this.status=1}function yr(e){this.g=e}r=On.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?dt(this.u):dt(mt),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Mn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=h.FormData&&e instanceof h.FormData,!(0<=k(Dn,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=Be(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Mn(this,i)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Se(this,"complete"),Se(this,"abort"),Vn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),On.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.fb())},r.fb=function(){Un(this)},r.aa=function(){try{return 2<$n(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Rn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Gn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new bt(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=oe(i),ce(i,this.S)):i=this.S),null!==this.o||this.N||(s.H=i,i=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,s,t),n=Bt(this.F),Gt(n,"RID",e),Gt(n,"CVER",22),this.D&&Gt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Hn(i)))+"&"+t:this.o&&qn(n,this.o,i)),gn(this.h,s),this.Ya&&Gt(n,"TYPE","init"),this.O?(Gt(n,"$req",t),Gt(n,"SID","null"),s.Z=!0,kt(s,n,null)):kt(s,n,t),this.G=2}}else 3==this.G&&(e?Qn(this,e):0==this.i.length||dn(this.h)||Qn(this))},r.Ia=function(){if(this.u=null,sr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(b(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),zn(this),sr(this))},r.cb=function(){null!=this.v&&(this.v=null,zn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=fr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},dr.prototype.g=function(e,t){return new pr(e,t)},E(pr,ke),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=lr(e,null,e.V),Yn(e)},pr.prototype.close=function(){Kn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ne(e),e=n);t.i.push(new ln(t.ab++,e)),3==t.G&&Yn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Kn(this.g),delete this.g,pr.X.M.call(this)},E(mr,yt),E(gr,vt),E(yr,fr),yr.prototype.xa=function(){Se(this.g,"a")},yr.prototype.wa=function(e){Se(this.g,new mr(e))},yr.prototype.va=function(e){Se(this.g,new gr)},yr.prototype.ua=function(){Se(this.g,"b")},dr.prototype.createWebChannel=dr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,lt.NO_ERROR=0,lt.TIMEOUT=8,lt.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,On.prototype.listenOnce=On.prototype.O,On.prototype.getLastError=On.prototype.Oa,On.prototype.getLastErrorCode=On.prototype.Ea,On.prototype.getStatus=On.prototype.aa,On.prototype.getResponseJson=On.prototype.Sa,On.prototype.getResponseText=On.prototype.fa,On.prototype.send=On.prototype.da,On.prototype.setWithCredentials=On.prototype.Ka;var vr=u.createWebChannelTransport=function(){return new dr},_r=u.getStatEventTarget=function(){return rt()},br=u.ErrorCode=lt,wr=u.EventType=ht,Er=u.Event=tt,Tr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ir=u.FetchXmlHttpFactory=In,kr=u.WebChannel=pt,Sr=u.XhrIo=On;const Cr="@firebase/firestore";
/**
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
 */class Nr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nr.UNAUTHENTICATED=new Nr(null),Nr.GOOGLE_CREDENTIALS=new Nr("google-credentials-uid"),Nr.FIRST_PARTY=new Nr("first-party-uid"),Nr.MOCK_USER=new Nr("mock-user");
/**
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
 */
let Ar="9.15.0";
/**
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
 */const Rr=new o.Yd("@firebase/firestore");function Or(){return Rr.logLevel}function Lr(e,...t){if(Rr.logLevel<=o["in"].DEBUG){const n=t.map(Pr);Rr.debug(`Firestore (${Ar}): ${e}`,...n)}}function xr(e,...t){if(Rr.logLevel<=o["in"].ERROR){const n=t.map(Pr);Rr.error(`Firestore (${Ar}): ${e}`,...n)}}function Dr(e,...t){if(Rr.logLevel<=o["in"].WARN){const n=t.map(Pr);Rr.warn(`Firestore (${Ar}): ${e}`,...n)}}function Pr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function Mr(e="Unexpected state"){const t=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+e;throw xr(t),new Error(t)}function Fr(e,t){e||Mr()}function Ur(e,t){return e}
/**
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
 */const Vr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jr extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class $r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class Br{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Nr.UNAUTHENTICATED)))}shutdown(){}}class qr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Wr{constructor(e){this.t=e,this.currentUser=Nr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $r,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Lr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Lr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $r)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Lr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Fr("string"==typeof t.accessToken),new Br(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fr(null===e||"string"==typeof e),new Nr(e)}}class Gr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Nr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Kr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Gr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Nr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Lr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Lr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Lr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Lr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Fr("string"==typeof e.token),this.A=e.token,new zr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Yr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class Xr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Yr(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function Qr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
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
 */
class es{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new jr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return es.fromMillis(Date.now())}static fromDate(e){return es.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new es(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Qr(this.nanoseconds,e.nanoseconds):Qr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class ts{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ts(e)}static min(){return new ts(new es(0,0))}static max(){return new ts(new es(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class ns{constructor(e,t,n){void 0===t?t=0:t>e.length&&Mr(),void 0===n?n=e.length-t:n>e.length-t&&Mr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ns.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ns?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rs extends ns{construct(e,t,n){return new rs(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new jr(Vr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new rs(t)}static emptyPath(){return new rs([])}}const ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class is extends ns{construct(e,t,n){return new is(e,t,n)}static isValidIdentifier(e){return ss.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),is.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new is(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new jr(Vr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new jr(Vr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new jr(Vr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new jr(Vr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new is(t)}static emptyPath(){return new is([])}}
/**
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
 */class os{constructor(e){this.path=e}static fromPath(e){return new os(rs.fromString(e))}static fromName(e){return new os(rs.fromString(e).popFirst(5))}static empty(){return new os(rs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rs.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rs.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new os(new rs(e.slice()))}}
/**
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
 */class as{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}as.UNKNOWN_ID=-1;function cs(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ts.fromTimestamp(1e9===r?new es(n+1,0):new es(n,r));return new ls(s,os.empty(),t)}function us(e){return new ls(e.readTime,e.key,-1)}class ls{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ls(ts.min(),os.empty(),-1)}static max(){return new ls(ts.max(),os.empty(),-1)}}function hs(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=os.comparator(e.documentKey,t.documentKey),0!==n?n:Qr(e.largestBatchId,t.largestBatchId))}
/**
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
 */const fs="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ds{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function ps(e){if(e.code!==Vr.FAILED_PRECONDITION||e.message!==fs)throw e;Lr("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class ms{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ms(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ms?t:ms.resolve(t)}catch(e){return ms.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ms.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ms.reject(t)}static resolve(e){return new ms(((t,n)=>{t(e)}))}static reject(e){return new ms(((t,n)=>{n(e)}))}static waitFor(e){return new ms(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=ms.resolve(!1);for(const n of e)t=t.next((e=>e?ms.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new ms(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new ms(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}}
/**
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
 */function gs(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class ys{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ys.at=-1;
/**
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
 */
class vs{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class _s{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof _s&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */function bs(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ws(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Es(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */function Ts(e){return null==e}function Is(e){return 0===e&&1/e==-1/0}function ks(e){return"number"==typeof e&&Number.isInteger(e)&&!Is(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */
/**
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
 */
class Ss{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ss(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ss(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ss.EMPTY_BYTE_STRING=new Ss("");const Cs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ns(e){if(Fr(!!e),"string"==typeof e){let t=0;const n=Cs.exec(e);if(Fr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:As(e.seconds),nanos:As(e.nanos)}}function As(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Rs(e){return"string"==typeof e?Ss.fromBase64String(e):Ss.fromUint8Array(e)}
/**
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
 */function Os(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ls(e){const t=e.mapValue.fields.__previous_value__;return Os(t)?Ls(t):t}function xs(e){const t=Ns(e.mapValue.fields.__local_write_time__.timestampValue);return new es(t.seconds,t.nanos)}
/**
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
 */const Ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ps(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Os(e)?4:zs(e)?9007199254740991:10:Mr()}function Ms(e,t){if(e===t)return!0;const n=Ps(e);if(n!==Ps(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xs(e).isEqual(xs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ns(e.timestampValue),r=Ns(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Rs(e.bytesValue).isEqual(Rs(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return As(e.geoPointValue.latitude)===As(t.geoPointValue.latitude)&&As(e.geoPointValue.longitude)===As(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return As(e.integerValue)===As(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=As(e.doubleValue),r=As(t.doubleValue);return n===r?Is(n)===Is(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],Ms);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(bs(n)!==bs(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Ms(n[s],r[s])))return!1;return!0}(e,t);default:return Mr()}}function Fs(e,t){return void 0!==(e.values||[]).find((e=>Ms(e,t)))}function Us(e,t){if(e===t)return 0;const n=Ps(e),r=Ps(t);if(n!==r)return Qr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=As(e.integerValue||e.doubleValue),r=As(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Vs(e.timestampValue,t.timestampValue);case 4:return Vs(xs(e),xs(t));case 5:return Qr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Rs(e),r=Rs(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=Qr(n[s],r[s]);if(0!==e)return e}return Qr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Qr(As(e.latitude),As(t.latitude));return 0!==n?n:Qr(As(e.longitude),As(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Us(n[s],r[s]);if(e)return e}return Qr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ds.mapValue&&t===Ds.mapValue)return 0;if(e===Ds.mapValue)return 1;if(t===Ds.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=Qr(r[o],i[o]);if(0!==e)return e;const t=Us(n[r[o]],s[i[o]]);if(0!==t)return t}return Qr(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Mr()}}function Vs(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Qr(e,t);const n=Ns(e),r=Ns(t),s=Qr(n.seconds,r.seconds);return 0!==s?s:Qr(n.nanos,r.nanos)}function js(e){return $s(e)}function $s(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ns(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Rs(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,os.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=$s(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${$s(e.fields[s])}`;return n+"}"}(e.mapValue):Mr();var t,n}function Bs(e){return!!e&&"integerValue"in e}function Hs(e){return!!e&&"arrayValue"in e}function qs(e){return!!e&&"nullValue"in e}function Ws(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gs(e){return!!e&&"mapValue"in e}function Ks(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ws(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ks(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ks(e.arrayValue.values[n]);return t}return Object.assign({},e)}function zs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Js{constructor(e,t){this.position=e,this.inclusive=t}}function Ys(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?os.comparator(os.fromName(o.referenceValue),n.key):Us(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Xs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ms(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Qs{}class Zs extends Qs{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ai(e,t,n):"array-contains"===t?new hi(e,n):"in"===t?new fi(e,n):"not-in"===t?new di(e,n):"array-contains-any"===t?new pi(e,n):new Zs(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ci(e,n):new ui(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Us(t,this.value)):null!==t&&Ps(this.value)===Ps(t)&&this.matchesComparison(Us(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Mr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ei extends Qs{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new ei(e,t)}matches(e){return ti(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ti(e){return"and"===e.op}function ni(e){return ri(e)&&ti(e)}function ri(e){for(const t of e.filters)if(t instanceof ei)return!1;return!0}function si(e){if(e instanceof Zs)return e.field.canonicalString()+e.op.toString()+js(e.value);{const t=e.filters.map((e=>si(e))).join(",");return`${e.op}(${t})`}}function ii(e,t){return e instanceof Zs?function(e,t){return t instanceof Zs&&e.op===t.op&&e.field.isEqual(t.field)&&Ms(e.value,t.value)}(e,t):e instanceof ei?function(e,t){return t instanceof ei&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&ii(n,t.filters[r])),!0)}(e,t):void Mr()}function oi(e){return e instanceof Zs?function(e){return`${e.field.canonicalString()} ${e.op} ${js(e.value)}`}(e):e instanceof ei?function(e){return e.op.toString()+" {"+e.getFilters().map(oi).join(" ,")+"}"}(e):"Filter"}class ai extends Zs{constructor(e,t,n){super(e,t,n),this.key=os.fromName(n.referenceValue)}matches(e){const t=os.comparator(e.key,this.key);return this.matchesComparison(t)}}class ci extends Zs{constructor(e,t){super(e,"in",t),this.keys=li("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ui extends Zs{constructor(e,t){super(e,"not-in",t),this.keys=li("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function li(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>os.fromName(e.referenceValue)))}class hi extends Zs{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hs(t)&&Fs(t.arrayValue,this.value)}}class fi extends Zs{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Fs(this.value.arrayValue,t)}}class di extends Zs{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Fs(this.value.arrayValue,t)}}class pi extends Zs{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Fs(this.value.arrayValue,e)))}}
/**
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
 */class mi{constructor(e,t="asc"){this.field=e,this.dir=t}}function gi(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class yi{constructor(e,t){this.comparator=e,this.root=t||_i.EMPTY}insert(e,t){return new yi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_i.BLACK,null,null))}remove(e){return new yi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_i.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vi(this.root,e,this.comparator,!0)}}class vi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _i{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:_i.RED,this.left=null!=r?r:_i.EMPTY,this.right=null!=s?s:_i.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new _i(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return _i.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return _i.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_i.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_i.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mr();if(this.right.isRed())throw Mr();const e=this.left.check();if(e!==this.right.check())throw Mr();return e+(this.isRed()?0:1)}}_i.EMPTY=null,_i.RED=!0,_i.BLACK=!1,_i.EMPTY=new class{constructor(){this.size=0}get key(){throw Mr()}get value(){throw Mr()}get color(){throw Mr()}get left(){throw Mr()}get right(){throw Mr()}copy(e,t,n,r,s){return this}insert(e,t,n){return new _i(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class bi{constructor(e){this.comparator=e,this.data=new yi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wi(this.data.getIterator())}getIteratorFrom(e){return new wi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof bi))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new bi(this.comparator);return t.data=e,t}}class wi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class Ei{constructor(e){this.fields=e,e.sort(is.comparator)}static empty(){return new Ei([])}unionWith(e){let t=new bi(is.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ei(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */class Ti{constructor(e){this.value=e}static empty(){return new Ti({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Gs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(t)}setAll(e){let t=is.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=Ks(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());Gs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ms(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Gs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ws(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Ti(Ks(this.value))}}function Ii(e){const t=[];return ws(e.fields,((e,n)=>{const r=new is([e]);if(Gs(n)){const e=Ii(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ei(t)
/**
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
 */}class ki{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ki(e,0,ts.min(),ts.min(),ts.min(),Ti.empty(),0)}static newFoundDocument(e,t,n,r){return new ki(e,1,t,ts.min(),n,r,0)}static newNoDocument(e,t){return new ki(e,2,t,ts.min(),ts.min(),Ti.empty(),0)}static newUnknownDocument(e,t){return new ki(e,3,t,ts.min(),ts.min(),Ti.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ts.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ti.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ti.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ts.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ki&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ki(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Si{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ft=null}}function Ci(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Si(e,t,n,r,s,i,o)}function Ni(e){const t=Ur(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>si(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ts(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>js(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>js(e))).join(",")),t.ft=e}return t.ft}function Ai(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gi(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ii(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Xs(e.startAt,t.startAt)&&Xs(e.endAt,t.endAt)}function Ri(e){return os.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */
class Oi{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Li(e,t,n,r,s,i,o,a){return new Oi(e,t,n,r,s,i,o,a)}function xi(e){return new Oi(e)}function Di(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Pi(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Mi(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Fi(e){return null!==e.collectionGroup}function Ui(e){const t=Ur(e);if(null===t.dt){t.dt=[];const e=Mi(t),n=Pi(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new mi(e)),t.dt.push(new mi(is.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new mi(is.keyField(),e))}}}return t.dt}function Vi(e){const t=Ur(e);if(!t._t)if("F"===t.limitType)t._t=Ci(t.path,t.collectionGroup,Ui(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of Ui(t)){const t="desc"===s.dir?"asc":"desc";e.push(new mi(s.field,t))}const n=t.endAt?new Js(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Js(t.startAt.position,t.startAt.inclusive):null;t._t=Ci(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ji(e,t,n){return new Oi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $i(e,t){return Ai(Vi(e),Vi(t))&&e.limitType===t.limitType}function Bi(e){return`${Ni(Vi(e))}|lt:${e.limitType}`}function Hi(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>oi(e))).join(", ")}]`),Ts(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>js(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>js(e))).join(",")),`Target(${t})`}(Vi(e))}; limitType=${e.limitType})`}function qi(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):os.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ui(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ys(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ui(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ys(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ui(e),t))}(e,t)}function Wi(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Gi(e){return(t,n)=>{let r=!1;for(const s of Ui(e)){const e=Ki(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Ki(e,t,n){const r=e.field.isKeyField()?os.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Us(r,s):Mr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Mr()}}
/**
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
 */function zi(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Is(t)?"-0":t}}function Ji(e){return{integerValue:""+e}}function Yi(e,t){return ks(t)?Ji(t):zi(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Xi{constructor(){this._=void 0}}function Qi(e,t,n){return e instanceof to?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof no?ro(e,t):e instanceof so?io(e,t):function(e,t){const n=eo(e,t),r=ao(n)+ao(e.gt);return Bs(n)&&Bs(e.gt)?Ji(r):zi(e.yt,r)}(e,t)}function Zi(e,t,n){return e instanceof no?ro(e,t):e instanceof so?io(e,t):n}function eo(e,t){return e instanceof oo?Bs(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class to extends Xi{}class no extends Xi{constructor(e){super(),this.elements=e}}function ro(e,t){const n=co(t);for(const r of e.elements)n.some((e=>Ms(e,r)))||n.push(r);return{arrayValue:{values:n}}}class so extends Xi{constructor(e){super(),this.elements=e}}function io(e,t){let n=co(t);for(const r of e.elements)n=n.filter((e=>!Ms(e,r)));return{arrayValue:{values:n}}}class oo extends Xi{constructor(e,t){super(),this.yt=e,this.gt=t}}function ao(e){return As(e.integerValue||e.doubleValue)}function co(e){return Hs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class uo{constructor(e,t){this.field=e,this.transform=t}}function lo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof no&&t instanceof no||e instanceof so&&t instanceof so?Zr(e.elements,t.elements,Ms):e instanceof oo&&t instanceof oo?Ms(e.gt,t.gt):e instanceof to&&t instanceof to}(e.transform,t.transform)}class ho{constructor(e,t){this.version=e,this.transformResults=t}}class fo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fo}static exists(e){return new fo(void 0,e)}static updateTime(e){return new fo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class mo{}function go(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new So(e.key,fo.none()):new wo(e.key,e.data,fo.none());{const n=e.data,r=Ti.empty();let s=new bi(is.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Eo(e.key,r,new Ei(s.toArray()),fo.none())}}function yo(e,t,n){e instanceof wo?function(e,t,n){const r=e.value.clone(),s=Io(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Eo?function(e,t,n){if(!po(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Io(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(To(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function vo(e,t,n,r){return e instanceof wo?function(e,t,n,r){if(!po(e.precondition,t))return n;const s=e.value.clone(),i=ko(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Eo?function(e,t,n,r){if(!po(e.precondition,t))return n;const s=ko(e.fieldTransforms,r,t),i=t.data;return i.setAll(To(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return po(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function _o(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=eo(r.transform,e||null);null!=s&&(null===n&&(n=Ti.empty()),n.set(r.field,s))}return n||null}function bo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>lo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class wo extends mo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Eo extends mo{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function To(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Io(e,t,n){const r=new Map;Fr(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Zi(o,a,n[s]))}return r}function ko(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Qi(e,i,t))}return r}class So extends mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Co extends mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class No{constructor(e){this.count=e}}
/**
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
 */var Ao,Ro;function Oo(e){switch(e){default:return Mr();case Vr.CANCELLED:case Vr.UNKNOWN:case Vr.DEADLINE_EXCEEDED:case Vr.RESOURCE_EXHAUSTED:case Vr.INTERNAL:case Vr.UNAVAILABLE:case Vr.UNAUTHENTICATED:return!1;case Vr.INVALID_ARGUMENT:case Vr.NOT_FOUND:case Vr.ALREADY_EXISTS:case Vr.PERMISSION_DENIED:case Vr.FAILED_PRECONDITION:case Vr.ABORTED:case Vr.OUT_OF_RANGE:case Vr.UNIMPLEMENTED:case Vr.DATA_LOSS:return!0}}function Lo(e){if(void 0===e)return xr("GRPC error has no .code"),Vr.UNKNOWN;switch(e){case Ao.OK:return Vr.OK;case Ao.CANCELLED:return Vr.CANCELLED;case Ao.UNKNOWN:return Vr.UNKNOWN;case Ao.DEADLINE_EXCEEDED:return Vr.DEADLINE_EXCEEDED;case Ao.RESOURCE_EXHAUSTED:return Vr.RESOURCE_EXHAUSTED;case Ao.INTERNAL:return Vr.INTERNAL;case Ao.UNAVAILABLE:return Vr.UNAVAILABLE;case Ao.UNAUTHENTICATED:return Vr.UNAUTHENTICATED;case Ao.INVALID_ARGUMENT:return Vr.INVALID_ARGUMENT;case Ao.NOT_FOUND:return Vr.NOT_FOUND;case Ao.ALREADY_EXISTS:return Vr.ALREADY_EXISTS;case Ao.PERMISSION_DENIED:return Vr.PERMISSION_DENIED;case Ao.FAILED_PRECONDITION:return Vr.FAILED_PRECONDITION;case Ao.ABORTED:return Vr.ABORTED;case Ao.OUT_OF_RANGE:return Vr.OUT_OF_RANGE;case Ao.UNIMPLEMENTED:return Vr.UNIMPLEMENTED;case Ao.DATA_LOSS:return Vr.DATA_LOSS;default:return Mr()}}(Ro=Ao||(Ao={}))[Ro.OK=0]="OK",Ro[Ro.CANCELLED=1]="CANCELLED",Ro[Ro.UNKNOWN=2]="UNKNOWN",Ro[Ro.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ro[Ro.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ro[Ro.NOT_FOUND=5]="NOT_FOUND",Ro[Ro.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ro[Ro.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ro[Ro.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ro[Ro.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ro[Ro.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ro[Ro.ABORTED=10]="ABORTED",Ro[Ro.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ro[Ro.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ro[Ro.INTERNAL=13]="INTERNAL",Ro[Ro.UNAVAILABLE=14]="UNAVAILABLE",Ro[Ro.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class xo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return Es(this.inner)}size(){return this.innerSize}}
/**
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
 */const Do=new yi(os.comparator);function Po(){return Do}const Mo=new yi(os.comparator);function Fo(...e){let t=Mo;for(const n of e)t=t.insert(n.key,n);return t}function Uo(e){let t=Mo;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Vo(){return $o()}function jo(){return $o()}function $o(){return new xo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Bo=new yi(os.comparator),Ho=new bi(os.comparator);function qo(...e){let t=Ho;for(const n of e)t=t.add(n);return t}const Wo=new bi(Qr);function Go(){return Wo}
/**
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
 */class Ko{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,zo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ko(ts.min(),r,Go(),Po(),qo())}}class zo{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new zo(n,t,qo(),qo(),qo())}}
/**
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
 */class Jo{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Yo{constructor(e,t){this.targetId=e,this.Et=t}}class Xo{constructor(e,t,n=Ss.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Qo{constructor(){this.At=0,this.Rt=ta(),this.bt=Ss.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=qo(),t=qo(),n=qo();return this.Rt.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Mr()}})),new zo(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=ta()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Zo{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Po(),this.qt=ea(),this.Ut=new bi(Qr)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Mr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(Ri(e))if(0===n){const n=new os(e.path);this.Qt(t,n,ki.newNoDocument(n,ts.min()))}else Fr(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const s=this.Yt(r);if(s){if(n.current&&Ri(s.target)){const t=new os(s.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,ki.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=qo();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Ko(e,t,this.Ut,this.Lt,n);return this.Lt=Po(),this.qt=ea(),this.Ut=new bi(Qr),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Qo,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new bi(Qr),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||Lr("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Qo),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function ea(){return new yi(os.comparator)}function ta(){return new yi(os.comparator)}
/**
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
 */const na=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ra=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),sa=(()=>{const e={and:"AND",or:"OR"};return e})();class ia{constructor(e,t){this.databaseId=e,this.wt=t}}function oa(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function aa(e,t){return e.wt?t.toBase64():t.toUint8Array()}function ca(e,t){return oa(e,t.toTimestamp())}function ua(e){return Fr(!!e),ts.fromTimestamp(function(e){const t=Ns(e);return new es(t.seconds,t.nanos)}(e))}function la(e,t){return function(e){return new rs(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ha(e){const t=rs.fromString(e);return Fr(Da(t)),t}function fa(e,t){return la(e.databaseId,t.path)}function da(e,t){const n=ha(t);if(n.get(1)!==e.databaseId.projectId)throw new jr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new jr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new os(ya(n))}function pa(e,t){return la(e.databaseId,t)}function ma(e){const t=ha(e);return 4===t.length?rs.emptyPath():ya(t)}function ga(e){return new rs(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ya(e){return Fr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function va(e,t,n){return{name:fa(e,t),fields:n.value.mapValue.fields}}function _a(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Mr()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.wt?(Fr(void 0===t||"string"==typeof t),Ss.fromBase64String(t||"")):(Fr(void 0===t||t instanceof Uint8Array),Ss.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Vr.UNKNOWN:Lo(e.code);return new jr(t,e.message||"")}(o);n=new Xo(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=da(e,r.document.name),i=ua(r.document.updateTime),o=r.document.createTime?ua(r.document.createTime):ts.min(),a=new Ti({mapValue:{fields:r.document.fields}}),c=ki.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Jo(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=da(e,r.document),i=r.readTime?ua(r.readTime):ts.min(),o=ki.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Jo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=da(e,r.document),i=r.removedTargetIds||[];n=new Jo([],i,s,null)}else{if(!("filter"in t))return Mr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new No(r),i=e.targetId;n=new Yo(i,s)}}return n}function ba(e,t){let n;if(t instanceof wo)n={update:va(e,t.key,t.value)};else if(t instanceof So)n={delete:fa(e,t.key)};else if(t instanceof Eo)n={update:va(e,t.key,t.data),updateMask:xa(t.fieldMask)};else{if(!(t instanceof Co))return Mr();n={verify:fa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof to)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof no)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof so)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof oo)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Mr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ca(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Mr()}(e,t.precondition)),n}function wa(e,t){return e&&e.length>0?(Fr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ua(e.updateTime):ua(t);return n.isEqual(ts.min())&&(n=ua(t)),new ho(n,e.transformResults||[])}(e,t)))):[]}function Ea(e,t){return{documents:[pa(e,t.path)]}}function Ta(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=pa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=pa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0!==e.length)return La(ei.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ra(e.field),direction:Ca(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.wt||Ts(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ia(e){let t=ma(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fr(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Sa(e);return t instanceof ei&&ni(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new mi(Oa(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ts(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Js(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Js(n,t)}(n.endAt)),Li(t,s,o,i,a,"F",c,u)}function ka(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Sa(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Oa(e.unaryFilter.field);return Zs.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Oa(e.unaryFilter.field);return Zs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Oa(e.unaryFilter.field);return Zs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Oa(e.unaryFilter.field);return Zs.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Mr()}}(e):void 0!==e.fieldFilter?function(e){return Zs.create(Oa(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ei.create(e.compositeFilter.filters.map((e=>Sa(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Mr()}}(e.compositeFilter.op))}(e):Mr()}function Ca(e){return na[e]}function Na(e){return ra[e]}function Aa(e){return sa[e]}function Ra(e){return{fieldPath:e.canonicalString()}}function Oa(e){return is.fromServerFormat(e.fieldPath)}function La(e){return e instanceof Zs?function(e){if("=="===e.op){if(Ws(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NAN"}};if(qs(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ws(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NOT_NAN"}};if(qs(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ra(e.field),op:Na(e.op),value:e.value}}}(e):e instanceof ei?function(e){const t=e.getFilters().map((e=>La(e)));return 1===t.length?t[0]:{compositeFilter:{op:Aa(e.op),filters:t}}}(e):Mr()}function xa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Da(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */const Pa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ma=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Fa=Ma;
/**
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
 */
/**
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
 */
class Ua{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&yo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=vo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=vo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=jo();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=go(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(ts.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),qo())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>bo(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>bo(e,t)))}}class Va{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Fr(e.mutations.length===n.length);let r=Bo;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Va(e,t,n,r)}}
/**
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
 */class ja{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class $a{constructor(e,t,n,r,s=ts.min(),i=ts.min(),o=Ss.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new $a(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
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
 */class Ba{constructor(e){this.ie=e}}function Ha(e){const t=Ia({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ji(t,t.limit,"L"):t}
/**
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
 */class qa{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(As(e.integerValue));else if("doubleValue"in e){const n=As(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Is(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Rs(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?zs(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Mr()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const r of Object.keys(n))this.de(r,t),this.ce(n[r],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const r of n)this.ce(r,t)}me(e,t){this.he(t,37),os.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}qa.Ie=new qa;
/**
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
 */
class Wa{constructor(){this.Je=new Ga}addToCollectionParentIndex(e,t){return this.Je.add(t),ms.resolve()}getCollectionParents(e,t){return ms.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return ms.resolve()}deleteFieldIndex(e,t){return ms.resolve()}getDocumentsMatchingTarget(e,t){return ms.resolve(null)}getIndexType(e,t){return ms.resolve(0)}getFieldIndexes(e,t){return ms.resolve([])}getNextCollectionGroupToUpdate(e){return ms.resolve(null)}getMinOffset(e,t){return ms.resolve(ls.min())}getMinOffsetFromCollectionGroup(e,t){return ms.resolve(ls.min())}updateCollectionGroup(e,t,n){return ms.resolve()}updateIndexEntries(e,t){return ms.resolve()}}class Ga{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new bi(rs.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new bi(rs.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Ka{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ka(e,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Ka.DEFAULT_COLLECTION_PERCENTILE=10,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ka.DEFAULT=new Ka(41943040,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ka.DISABLED=new Ka(-1,0,0);
/**
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
 */
class za{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new za(0)}static vn(){return new za(-1)}}
/**
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
 */
/**
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
 */
class Ja{constructor(){this.changes=new xo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ki.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ms.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class Ya{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class Xa{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&vo(n.mutation,e,Ei.empty(),es.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,qo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=qo()){const r=Vo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Fo();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Vo();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,qo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=Po();const i=$o(),o=$o();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Eo)?s=s.insert(t.key,t):void 0!==o&&(i.set(t.key,o.mutation.getFieldMask()),vo(o.mutation,t,o.mutation.getFieldMask(),es.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ya(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=$o();let r=new yi(((e,t)=>e-t)),s=qo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Ei.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||qo()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=jo();c.forEach((e=>{if(!s.has(e)){const r=go(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return ms.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return os.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fi(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):ms.resolve(Vo());let o=-1,a=s;return i.next((t=>ms.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?ms.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,qo()))).next((e=>({batchId:o,changes:Uo(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new os(t)).next((e=>{let t=Fo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let s=Fo();return this.indexManager.getCollectionParents(e,r).next((i=>ms.forEach(i,(i=>{const o=function(e,t){return new Oi(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,ki.newInvalidDocument(n)))}));let n=Fo();return r.forEach(((r,s)=>{const i=e.get(r);void 0!==i&&vo(i.mutation,s,Ei.empty(),es.now()),qi(t,s)&&(n=n.insert(r,s))})),n}))}}
/**
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
 */class Qa{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return ms.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ua(n.createTime)}),ms.resolve()}getNamedQuery(e,t){return ms.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Ha(e.bundledQuery),readTime:ua(e.readTime)}}(t)),ms.resolve()}}
/**
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
 */class Za{constructor(){this.overlays=new yi(os.comparator),this.es=new Map}getOverlay(e,t){return ms.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Vo();return ms.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.oe(e,t,r)})),ms.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),ms.resolve()}getOverlaysForCollection(e,t,n){const r=Vo(),s=t.length+1,i=new os(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ms.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new yi(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Vo(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Vo(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return ms.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ja(t,n));let s=this.es.get(t);void 0===s&&(s=qo(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}}
/**
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
 */class ec{constructor(){this.ns=new bi(tc.ss),this.rs=new bi(tc.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new tc(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new tc(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new os(new rs([])),n=new tc(t,e),r=new tc(t,e+1),s=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),s.push(e.key)})),s}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new os(new rs([])),n=new tc(t,e),r=new tc(t,e+1);let s=qo();return this.rs.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new tc(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class tc{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return os.comparator(e.key,t.key)||Qr(e._s,t._s)}static os(e,t){return Qr(e._s,t._s)||os.comparator(e.key,t.key)}}
/**
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
 */class nc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new bi(tc.ss)}checkEmpty(e){return ms.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Ua(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.gs=this.gs.add(new tc(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return ms.resolve(i)}lookupMutationBatch(e,t){return ms.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),s=r<0?0:r;return ms.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ms.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return ms.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new tc(t,0),r=new tc(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);s.push(t)})),ms.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new bi(Qr);return t.forEach((e=>{const t=new tc(e,0),r=new tc(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),ms.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;os.isDocumentKey(s)||(s=s.child(""));const i=new tc(new os(s),0);let o=new bi(Qr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),i),ms.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Fr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return ms.forEach(t.mutations,(r=>{const s=new tc(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new tc(t,0),r=this.gs.firstAfterOrEqual(n);return ms.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ms.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class rc{constructor(e){this.Es=e,this.docs=new yi(os.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ms.resolve(n?n.document.mutableCopy():ki.newInvalidDocument(t))}getEntries(e,t){let n=Po();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ki.newInvalidDocument(e))})),ms.resolve(n)}getAllFromCollection(e,t,n){let r=Po();const s=new os(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||hs(us(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return ms.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Mr()}As(e,t){return ms.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new sc(this)}getSize(e){return ms.resolve(this.size)}}class sc extends Ja{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),ms.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
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
 */class ic{constructor(e){this.persistence=e,this.Rs=new xo((e=>Ni(e)),Ai),this.lastRemoteSnapshotVersion=ts.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ec,this.targetCount=0,this.vs=za.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),ms.resolve()}getLastRemoteSnapshotVersion(e){return ms.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ms.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),ms.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),ms.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new za(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,ms.resolve()}updateTargetData(e,t){return this.Dn(t),ms.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,ms.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),ms.waitFor(s).next((()=>r))}getTargetCount(e){return ms.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return ms.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),ms.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),ms.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),ms.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return ms.resolve(n)}containsKey(e,t){return ms.resolve(this.Ps.containsKey(t))}}
/**
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
 */class oc{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new ys(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ic(this),this.indexManager=new Wa,this.remoteDocumentCache=function(e){return new rc(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new Ba(t),this.Ns=new Qa(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Za,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new nc(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Lr("MemoryPersistence","Starting transaction:",e);const r=new ac(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return ms.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class ac extends ds{constructor(e){super(),this.currentSequenceNumber=e}}class cc{constructor(e){this.persistence=e,this.Fs=new ec,this.$s=null}static Bs(e){return new cc(e)}get Ls(){if(this.$s)return this.$s;throw Mr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),ms.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),ms.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),ms.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ms.forEach(this.Ls,(n=>{const r=os.fromPath(n);return this.qs(e,r).next((e=>{e||t.removeEntry(r,ts.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return ms.or([()=>ms.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
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
 */
/**
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
 */
class uc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=qo(),r=qo();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new uc(e,t.fromCache,n,r)}}
/**
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
 */class lc{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((s=>s||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Di(t))return ms.resolve(null);let n=Vi(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ji(t,null,"F"),n=Vi(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const s=qo(...r);return this.Ni.getDocuments(e,s).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.Fi(t,r);return this.$i(t,i,s,n.readTime)?this.ki(e,ji(t,null,"F")):this.Bi(e,i,t,n)}))))})))))}Oi(e,t,n,r){return Di(t)||r.isEqual(ts.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((s=>{const i=this.Fi(t,s);return this.$i(t,i,n,r)?this.Mi(e,t):(Or()<=o["in"].DEBUG&&Lr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hi(t)),this.Bi(e,i,t,cs(r,-1)))}))}Fi(e,t){let n=new bi(Gi(e));return t.forEach(((t,r)=>{qi(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Mi(e,t){return Or()<=o["in"].DEBUG&&Lr("QueryEngine","Using full collection scan to execute query:",Hi(t)),this.Ni.getDocumentsMatchingQuery(e,t,ls.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */class hc{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new yi(Qr),this.Ui=new xo((e=>Ni(e)),Ai),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xa(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function fc(e,t,n,r){return new hc(e,t,n,r)}async function dc(e,t){const n=Ur(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=qo();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function pc(e,t){const n=Ur(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=ms.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Fr(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=qo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function mc(e){const t=Ur(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function gc(e,t){const n=Ur(e),r=t.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ss.EMPTY_BYTE_STRING,ts.min()).withLastLimboFreeSnapshotVersion(ts.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Cs.updateTargetData(e,u))}));let a=Po(),c=qo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(yc(e,i,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!r.isEqual(ts.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return ms.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.qi=s,e)))}function yc(e,t,n){let r=qo(),s=qo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Po();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(ts.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Lr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:r,zi:s}}))}function vc(e,t){const n=Ur(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function _c(e,t){const n=Ur(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((s=>s?(r=s,ms.resolve(r)):n.Cs.allocateTargetId(e).next((s=>(r=new $a(t,s,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function bc(e,t,n){const r=Ur(e),s=r.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!gs(e))throw e;Lr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(s.target)}function wc(e,t,n){const r=Ur(e);let s=ts.min(),i=qo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Ur(e),s=r.Ui.get(n);return void 0!==s?ms.resolve(r.qi.get(s)):r.Cs.getTargetData(t,n)}(r,e,Vi(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?s:ts.min(),n?i:qo()))).next((e=>(Ec(r,Wi(t),e),{documents:e,Hi:i})))))}function Ec(e,t,n){let r=e.Ki.get(t)||ts.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class Tc{constructor(){this.activeTargetIds=Go()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ic{constructor(){this.Lr=new Tc,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Tc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class kc{Ur(e){}shutdown(){}}
/**
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
 */class Sc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Lr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Lr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Cc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Nc{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
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
 */class Ac extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,s){const i=this.ho(e,t);Lr("RestConnection","Sending: ",i,n);const o={};return this.lo(o,r,s),this.fo(e,i,o,n).then((e=>(Lr("RestConnection","Received: ",e),e)),(t=>{throw Dr("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}_o(e,t,n,r,s,i){return this.ao(e,t,n,r,s)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=Cc[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((s,i)=>{const o=new Sr;o.setWithCredentials(!0),o.listenOnce(wr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case br.NO_ERROR:const t=o.getResponseJson();Lr("Connection","XHR received:",JSON.stringify(t)),s(t);break;case br.TIMEOUT:Lr("Connection",'RPC "'+e+'" timed out'),i(new jr(Vr.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const n=o.getStatus();if(Lr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Vr).indexOf(t)>=0?t:Vr.UNKNOWN}(t.status);i(new jr(e,t.message))}else i(new jr(Vr.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new jr(Vr.UNAVAILABLE,"Connection failed."));break;default:Mr()}}finally{Lr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=vr(),i=_r(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ir({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Lr("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new Nc({Hr:e=>{l?Lr("Connection","Not sending because WebChannel is closed:",e):(u||(Lr("Connection","Opening WebChannel transport."),c.open(),u=!0),Lr("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(c,kr.EventType.OPEN,(()=>{l||Lr("Connection","WebChannel transport opened.")})),f(c,kr.EventType.CLOSE,(()=>{l||(l=!0,Lr("Connection","WebChannel transport closed"),h.io())})),f(c,kr.EventType.ERROR,(e=>{l||(l=!0,Dr("Connection","WebChannel transport errored:",e),h.io(new jr(Vr.UNAVAILABLE,"The operation could not be completed")))})),f(c,kr.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];Fr(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){Lr("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Ao[e];if(void 0!==t)return Lo(t)}(e),n=s.message;void 0===t&&(t=Vr.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),l=!0,h.io(new jr(t,n)),c.close()}else Lr("Connection","WebChannel received:",n),h.ro(n)}})),f(i,Er.STAT_EVENT,(e=>{e.stat===Tr.PROXY?Lr("Connection","Detected buffering proxy"):e.stat===Tr.NOPROXY&&Lr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
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
 */
/**
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
 */function Rc(){return"undefined"!=typeof document?document:null}
/**
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
 */function Oc(e){return new ia(e,!0)}class Lc{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Lr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
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
 */class xc{constructor(e,t,n,r,s,i,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Lc(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Vr.RESOURCE_EXHAUSTED?(xr(t.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Vr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new jr(Vr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Lr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Lr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dc extends xc{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.yt=s}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=_a(this.yt,e),n=function(e){if(!("targetChange"in e))return ts.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ts.min():t.readTime?ua(t.readTime):ts.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=ga(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=Ri(r)?{documents:Ea(e,r)}:{query:Ta(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=aa(e,t.resumeToken):t.snapshotVersion.compareTo(ts.min())>0&&(n.readTime=oa(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=ka(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=ga(this.yt),t.removeTarget=e,this.Bo(t)}}class Pc extends xc{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Fr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=wa(e.writeResults,e.commitTime),n=ua(e.commitTime);return this.listener.Zo(n,t)}return Fr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ga(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ba(this.yt,e)))};this.Bo(t)}}
/**
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
 */class Mc extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new jr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.ao(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jr(Vr.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection._o(e,t,n,s,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jr(Vr.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Fc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(xr(t),this.ou=!1):Lr("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
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
 */class Uc{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{Kc(this)&&(Lr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ur(e);t._u.add(4),await jc(t),t.gu.set("Unknown"),t._u.delete(4),await Vc(t)}(this))}))})),this.gu=new Fc(n,r)}}async function Vc(e){if(Kc(e))for(const t of e.wu)await t(!0)}async function jc(e){for(const t of e.wu)await t(!1)}function $c(e,t){const n=Ur(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Gc(n)?Wc(n):hu(n).ko()&&Hc(n,t))}function Bc(e,t){const n=Ur(e),r=hu(n);n.du.delete(t),r.ko()&&qc(n,t),0===n.du.size&&(r.ko()?r.Fo():Kc(n)&&n.gu.set("Unknown"))}function Hc(e,t){e.yu.Ot(t.targetId),hu(e).zo(t)}function qc(e,t){e.yu.Ot(t),hu(e).Ho(t)}function Wc(e){e.yu=new Zo({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),hu(e).start(),e.gu.uu()}function Gc(e){return Kc(e)&&!hu(e).No()&&e.du.size>0}function Kc(e){return 0===Ur(e)._u.size}function zc(e){e.yu=void 0}async function Jc(e){e.du.forEach(((t,n)=>{Hc(e,t)}))}async function Yc(e,t){zc(e),Gc(e)?(e.gu.hu(t),Wc(e)):e.gu.set("Unknown")}async function Xc(e,t,n){if(e.gu.set("Online"),t instanceof Xo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Lr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Qc(e,n)}else if(t instanceof Jo?e.yu.Kt(t):t instanceof Yo?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(ts.min()))try{const t=await mc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.du.get(r);s&&e.du.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Ss.EMPTY_BYTE_STRING,n.snapshotVersion)),qc(e,t);const r=new $a(n.target,t,1,n.sequenceNumber);Hc(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Lr("RemoteStore","Failed to raise snapshot:",t),await Qc(e,t)}}async function Qc(e,t,n){if(!gs(t))throw t;e._u.add(1),await jc(e),e.gu.set("Offline"),n||(n=()=>mc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Lr("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Vc(e)}))}function Zc(e,t){return t().catch((n=>Qc(e,n,t)))}async function eu(e){const t=Ur(e),n=fu(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;tu(t);)try{const e=await vc(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,nu(t,e)}catch(e){await Qc(t,e)}ru(t)&&su(t)}function tu(e){return Kc(e)&&e.fu.length<10}function nu(e,t){e.fu.push(t);const n=fu(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function ru(e){return Kc(e)&&!fu(e).No()&&e.fu.length>0}function su(e){fu(e).start()}async function iu(e){fu(e).eu()}async function ou(e){const t=fu(e);for(const n of e.fu)t.Xo(n.mutations)}async function au(e,t,n){const r=e.fu.shift(),s=Va.from(r,t,n);await Zc(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await eu(e)}async function cu(e,t){t&&fu(e).Yo&&await async function(e,t){if(n=t.code,Oo(n)&&n!==Vr.ABORTED){const n=e.fu.shift();fu(e).Mo(),await Zc(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await eu(e)}var n}(e,t),ru(e)&&su(e)}async function uu(e,t){const n=Ur(e);n.asyncQueue.verifyOperationInProgress(),Lr("RemoteStore","RemoteStore received new credentials");const r=Kc(n);n._u.add(3),await jc(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Vc(n)}async function lu(e,t){const n=Ur(e);t?(n._u.delete(2),await Vc(n)):t||(n._u.add(2),await jc(n),n.gu.set("Unknown"))}function hu(e){return e.pu||(e.pu=function(e,t,n){const r=Ur(e);return r.su(),new Dc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(e.datastore,e.asyncQueue,{Yr:Jc.bind(null,e),Zr:Yc.bind(null,e),Wo:Xc.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Gc(e)?Wc(e):e.gu.set("Unknown")):(await e.pu.stop(),zc(e))}))),e.pu}function fu(e){return e.Iu||(e.Iu=function(e,t,n){const r=Ur(e);return r.su(),new Pc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:iu.bind(null,e),Zr:cu.bind(null,e),tu:ou.bind(null,e),Zo:au.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await eu(e)):(await e.Iu.stop(),e.fu.length>0&&(Lr("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
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
 */}class du{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new du(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jr(Vr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pu(e,t){if(xr("AsyncQueue",`${t}: ${e}`),gs(e))return new jr(Vr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class mu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||os.comparator(t.key,n.key):(e,t)=>os.comparator(e.key,t.key),this.keyedMap=Fo(),this.sortedSet=new yi(this.comparator)}static emptySet(e){return new mu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new mu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class gu{constructor(){this.Tu=new yi(os.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Mr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class yu{constructor(e,t,n,r,s,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new yu(e,t,mu.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class vu{constructor(){this.Au=void 0,this.listeners=[]}}class _u{constructor(){this.queries=new xo((e=>Bi(e)),$i),this.onlineState="Unknown",this.Ru=new Set}}async function bu(e,t){const n=Ur(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new vu),s)try{i.Au=await n.onListen(r)}catch(e){const n=pu(e,`Initialization of query '${Hi(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&Iu(n)}async function wu(e,t){const n=Ur(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Eu(e,t){const n=Ur(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(s)&&(r=!0);t.Au=s}}r&&Iu(n)}function Tu(e,t,n){const r=Ur(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Iu(e){e.Ru.forEach((e=>{e.next()}))}class ku{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new yu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=yu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
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
 */
/**
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
 */
class Su{constructor(e){this.key=e}}class Cu{constructor(e){this.key=e}}class Nu{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=qo(),this.mutatedKeys=qo(),this.Gu=Gi(e),this.Qu=new mu(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new gu,r=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=qi(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(i=i.add(l),s=f?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Qu:i,zu:n,$i:o,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mr()}};return n(e)-n(t)}
/**
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
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const i=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new yu(this.query,e.Qu,r,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new gu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=qo(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new Cu(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Su(n))})),t}tc(e){this.qu=e.Hi,this.Ku=qo();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return yu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Au{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ru{constructor(e){this.key=e,this.nc=!1}}class Ou{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new xo((e=>Bi(e)),$i),this.rc=new Map,this.oc=new Set,this.uc=new yi(os.comparator),this.cc=new Map,this.ac=new ec,this.hc={},this.lc=new Map,this.fc=za.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Lu(e,t){const n=Xu(e);let r,s;const i=n.ic.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const e=await _c(n.localStore,Vi(t));n.isPrimaryClient&&$c(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await xu(n,t,r,"current"===i,e.resumeToken)}return s}async function xu(e,t,n,r,s){e._c=(t,n,r)=>async function(e,t,n,r){let s=t.view.Wu(n);s.$i&&(s=await wc(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return Wu(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const i=await wc(e.localStore,t,!0),o=new Nu(t,i.Hi),a=o.Wu(i.documents),c=zo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),u=o.applyChanges(a,e.isPrimaryClient,c);Wu(e,n,u.Xu);const l=new Au(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function Du(e,t){const n=Ur(e),r=n.ic.get(t),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter((e=>!$i(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Bc(n.remoteStore,r.targetId),Hu(n,r.targetId)})).catch(ps)):(Hu(n,r.targetId),await bc(n.localStore,r.targetId,!0))}async function Pu(e,t,n){const r=Qu(e);try{const e=await function(e,t){const n=Ur(e),r=es.now(),s=t.reduce(((e,t)=>e.add(t.key)),qo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Po(),c=qo();return n.Gi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=_o(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Eo(e.key,t,Ii(t.value.mapValue),fo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Uo(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new yi(Qr)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await zu(r,e.changes),await eu(r.remoteStore)}catch(e){const t=pu(e,"Failed to persist write");n.reject(t)}}async function Mu(e,t){const n=Ur(e);try{const e=await gc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Fr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Fr(r.nc):e.removedDocuments.size>0&&(Fr(r.nc),r.nc=!1))})),await zu(n,e,t)}catch(e){await ps(e)}}function Fu(e,t,n){const r=Ur(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const s=r.view.bu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Ur(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.bu(t)&&(r=!0)})),r&&Iu(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Uu(e,t,n){const r=Ur(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.cc.get(t),i=s&&s.key;if(i){let e=new yi(os.comparator);e=e.insert(i,ki.newNoDocument(i,ts.min()));const n=qo().add(i),s=new Ko(ts.min(),new Map,new bi(Qr),e,n);await Mu(r,s),r.uc=r.uc.remove(i),r.cc.delete(t),Ku(r)}else await bc(r.localStore,t,!1).then((()=>Hu(r,t,n))).catch(ps)}async function Vu(e,t){const n=Ur(e),r=t.batch.batchId;try{const e=await pc(n.localStore,t);Bu(n,r,null),$u(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zu(n,e)}catch(e){await ps(e)}}async function ju(e,t,n){const r=Ur(e);try{const e=await function(e,t){const n=Ur(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Fr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Bu(r,t,n),$u(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await zu(r,e)}catch(n){await ps(n)}}function $u(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Bu(e,t,n){const r=Ur(e);let s=r.hc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.hc[r.currentUser.toKey()]=s}}function Hu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||qu(e,t)}))}function qu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Bc(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Ku(e))}function Wu(e,t,n){for(const r of n)r instanceof Su?(e.ac.addReference(r.key,t),Gu(e,r)):r instanceof Cu?(Lr("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||qu(e,r.key)):Mr()}function Gu(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Lr("SyncEngine","New document in limbo: "+n),e.oc.add(r),Ku(e))}function Ku(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new os(rs.fromString(t)),r=e.fc.next();e.cc.set(r,new Ru(n)),e.uc=e.uc.insert(n,r),$c(e.remoteStore,new $a(Vi(xi(n.path)),r,2,ys.at))}}async function zu(e,t,n){const r=Ur(e),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=uc.Ci(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.sc.Wo(s),await async function(e,t){const n=Ur(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ms.forEach(t,(t=>ms.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ms.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!gs(e))throw e;Lr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,s)}}}(r.localStore,i))}async function Ju(e,t){const n=Ur(e);if(!n.currentUser.isEqual(t)){Lr("SyncEngine","User change. New user:",t.toKey());const e=await dc(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new jr(Vr.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await zu(n,e.ji)}}function Yu(e,t){const n=Ur(e),r=n.cc.get(t);if(r&&r.nc)return qo().add(r.key);{let e=qo();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function Xu(e){const t=Ur(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Uu.bind(null,t),t.sc.Wo=Eu.bind(null,t.eventManager),t.sc.wc=Tu.bind(null,t.eventManager),t}function Qu(e){const t=Ur(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ju.bind(null,t),t}class Zu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return fc(this.persistence,new lc,e.initialUser,this.yt)}yc(e){return new oc(cc.Bs,this.yt)}gc(e){return new Ic}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class el{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Fu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ju.bind(null,this.syncEngine),await lu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _u}createDatastore(e){const t=Oc(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ac(r));var r;return function(e,t,n,r){return new Mc(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Fu(this.syncEngine,e,0),i=Sc.C()?new Sc:new kc,new Uc(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Ou(e,t,n,r,s,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ur(e);Lr("RemoteStore","RemoteStore shutting down."),t._u.add(5),await jc(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
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
 */function tl(e,t,n){if(!n)throw new jr(Vr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nl(e,t,n,r){if(!0===t&&!0===r)throw new jr(Vr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function rl(e){if(!os.isDocumentKey(e))throw new jr(Vr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sl(e){if(os.isDocumentKey(e))throw new jr(Vr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function il(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Mr()}function ol(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new jr(Vr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=il(e);throw new jr(Vr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */
const al=new Map;class cl{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new jr(Vr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new jr(Vr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
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
 */class ul{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new jr(Vr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new jr(Vr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cl(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Hr;switch(e.type){case"gapi":const t=e.client;return new Kr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new jr(Vr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=al.get(e);t&&(Lr("ComponentProvider","Removing Datastore"),al.delete(e),t.terminate())}(this),Promise.resolve()}}function ll(e,t,n,r={}){var s;const i=(e=ol(e,ul))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&Dr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Nr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new jr(Vr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Nr(i)}e._authCredentials=new qr(new Br(t,n))}}
/**
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
 */class hl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hl(this.firestore,e,this._key)}}class fl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new fl(this.firestore,e,this._query)}}class dl extends fl{constructor(e,t,n){super(e,t,xi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hl(this.firestore,null,new os(e))}withConverter(e){return new dl(this.firestore,e,this._path)}}function pl(e,t,...n){if(e=(0,a.m9)(e),tl("collection","path",t),e instanceof ul){const r=rs.fromString(t,...n);return sl(r),new dl(e,null,r)}{if(!(e instanceof hl||e instanceof dl))throw new jr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(rs.fromString(t,...n));return sl(r),new dl(e.firestore,null,r)}}function ml(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Xr.R()),tl("doc","path",t),e instanceof ul){const r=rs.fromString(t,...n);return rl(r),new hl(e,null,new os(r))}{if(!(e instanceof hl||e instanceof dl))throw new jr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(rs.fromString(t,...n));return rl(r),new hl(e.firestore,e instanceof dl?e.converter:null,new os(r))}}
/**
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
 */
/**
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
 */
class gl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */
/**
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
 */
class yl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Nr.UNAUTHENTICATED,this.clientId=Xr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Lr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Lr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=pu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function vl(e,t){e.asyncQueue.verifyOperationInProgress(),Lr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await dc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function _l(e,t){e.asyncQueue.verifyOperationInProgress();const n=await bl(e);Lr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>uu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>uu(t.remoteStore,n))),e.onlineComponents=t}async function bl(e){return e.offlineComponents||(Lr("FirestoreClient","Using default OfflineComponentProvider"),await vl(e,new Zu)),e.offlineComponents}async function wl(e){return e.onlineComponents||(Lr("FirestoreClient","Using default OnlineComponentProvider"),await _l(e,new el)),e.onlineComponents}function El(e){return wl(e).then((e=>e.syncEngine))}async function Tl(e){const t=await wl(e),n=t.eventManager;return n.onListen=Lu.bind(null,t.syncEngine),n.onUnlisten=Du.bind(null,t.syncEngine),n}function Il(e,t,n={}){const r=new $r;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new gl({next:i=>{t.enqueueAndForget((()=>wu(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new jr(Vr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new jr(Vr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new ku(xi(n.path),i,{includeMetadataChanges:!0,Nu:!0});return bu(e,o)}(await Tl(e),e.asyncQueue,t,n,r))),r.promise}function kl(e,t,n={}){const r=new $r;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new gl({next:n=>{t.enqueueAndForget((()=>wu(e,o))),n.fromCache&&"server"===r.source?s.reject(new jr(Vr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new ku(n,i,{includeMetadataChanges:!0,Nu:!0});return bu(e,o)}(await Tl(e),e.asyncQueue,t,n,r))),r.promise}class Sl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Lc(this,"async_queue_retry"),this.Wc=()=>{const e=Rc();e&&Lr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Rc();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Rc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new $r;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(E){if(!gs(E))throw E;Lr("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw xr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=du.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(r),r}zc(){this.Kc&&Mr()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class Cl extends ul{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Sl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rl(this),this._firestoreClient.terminate()}}function Nl(e,t){const n="object"==typeof e?e:(0,s.Mq)(),r="string"==typeof e?e:t||"(default)",i=(0,s.qX)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(0,a.P0)("firestore");e&&ll(i,...e)}return i}function Al(e){return e._firestoreClient||Rl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Rl(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new vs(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
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
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new yl(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
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
 */
/**
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
 */
class Ol{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ol(Ss.fromBase64String(e))}catch(e){throw new jr(Vr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ol(Ss.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Ll{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new jr(Vr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new is(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class xl{constructor(e){this._methodName=e}}
/**
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
 */class Dl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new jr(Vr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new jr(Vr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Qr(this._lat,e._lat)||Qr(this._long,e._long)}}
/**
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
 */const Pl=/^__.*__$/;class Ml{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Eo(e,this.data,this.fieldMask,t,this.fieldTransforms):new wo(e,this.data,t,this.fieldTransforms)}}class Fl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Eo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ul(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mr()}}class Vl{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return th(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Ul(this.sa)&&Pl.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class jl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Oc(e)}da(e,t,n,r=!1){return new Vl({sa:e,methodName:t,fa:n,path:is.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function $l(e){const t=e._freezeSettings(),n=Oc(e._databaseId);return new jl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Bl(e,t,n,r,s,i={}){const o=e.da(i.merge||i.mergeFields?2:0,t,n,s);Xl("Data must be an object, but it was:",o,r);const a=Jl(r,o);let c,u;if(i.merge)c=new Ei(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Ql(t,r,n);if(!o.contains(s))throw new jr(Vr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);nh(e,s)||e.push(s)}c=new Ei(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Ml(new Ti(a),c,u)}class Hl extends xl{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hl}}function ql(e,t,n){return new Vl({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class Wl extends xl{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=ql(this,e,!0),n=this._a.map((e=>zl(e,t))),r=new no(n);return new uo(e.path,r)}isEqual(e){return this===e}}function Gl(e,t,n,r){const s=e.da(1,t,n);Xl("Data must be an object, but it was:",s,r);const i=[],o=Ti.empty();ws(r,((e,r)=>{const c=eh(t,e,n);r=(0,a.m9)(r);const u=s.ca(c);if(r instanceof Hl)i.push(c);else{const e=zl(r,u);null!=e&&(i.push(c),o.set(c,e))}}));const c=new Ei(i);return new Fl(o,c,s.fieldTransforms)}function Kl(e,t,n,r,s,i){const o=e.da(1,t,n),c=[Ql(t,r,n)],u=[s];if(i.length%2!=0)throw new jr(Vr.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<i.length;a+=2)c.push(Ql(t,i[a])),u.push(i[a+1]);const l=[],h=Ti.empty();for(let d=c.length-1;d>=0;--d)if(!nh(l,c[d])){const e=c[d];let t=u[d];t=(0,a.m9)(t);const n=o.ca(e);if(t instanceof Hl)l.push(e);else{const r=zl(t,n);null!=r&&(l.push(e),h.set(e,r))}}const f=new Ei(l);return new Fl(h,f,o.fieldTransforms)}function zl(e,t){if(Yl(e=(0,a.m9)(e)))return Xl("Unsupported field value:",t,e),Jl(e,t);if(e instanceof xl)return function(e,t){if(!Ul(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=zl(s,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Yi(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=es.fromDate(e);return{timestampValue:oa(t.yt,n)}}if(e instanceof es){const n=new es(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:oa(t.yt,n)}}if(e instanceof Dl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ol)return{bytesValue:aa(t.yt,e._byteString)};if(e instanceof hl){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:la(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${il(e)}`)}(e,t)}function Jl(e,t){const n={};return Es(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ws(e,((e,r)=>{const s=zl(r,t.ra(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Yl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof es||e instanceof Dl||e instanceof Ol||e instanceof hl||e instanceof xl)}function Xl(e,t,n){if(!Yl(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=il(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function Ql(e,t,n){if((t=(0,a.m9)(t))instanceof Ll)return t._internalPath;if("string"==typeof t)return eh(e,t);throw th("Field path arguments must be of type string or ",e,!1,void 0,n)}const Zl=new RegExp("[~\\*/\\[\\]]");function eh(e,t,n){if(t.search(Zl)>=0)throw th(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ll(...t.split("."))._internalPath}catch(r){throw th(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function th(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new jr(Vr.INVALID_ARGUMENT,a+e+c)}function nh(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class rh{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new sh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ih("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sh extends rh{data(){return super.data()}}function ih(e,t){return"string"==typeof t?eh(e,t):t instanceof Ll?t._internalPath:t._delegate._internalPath}
/**
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
 */function oh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new jr(Vr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ah{convertValue(e,t="none"){switch(Ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return As(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Mr()}}convertObject(e,t){const n={};return ws(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Dl(As(e.latitude),As(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ls(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(xs(e));default:return null}}convertTimestamp(e){const t=Ns(e);return new es(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=rs.fromString(e);Fr(Da(n));const r=new _s(n.get(1),n.get(3)),s=new os(n.popFirst(5));return r.isEqual(t)||xr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
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
 */function ch(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
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
 */
class uh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lh extends rh{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ih("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class hh extends lh{data(e={}){return super.data(e)}}class fh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new uh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new hh(this._firestore,this._userDataWriter,n.key,n,new uh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new jr(Vr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new hh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new uh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new hh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new uh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:dh(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function dh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mr()}}
/**
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
 */
function ph(e){e=ol(e,hl);const t=ol(e.firestore,Cl);return Il(Al(t),e._key).then((n=>wh(t,e,n)))}class mh extends ah{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ol(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hl(this.firestore,null,t)}}function gh(e){e=ol(e,fl);const t=ol(e.firestore,Cl),n=Al(t),r=new mh(t);return oh(e._query),kl(n,e._query).then((n=>new fh(t,r,e,n)))}function yh(e,t,n){e=ol(e,hl);const r=ol(e.firestore,Cl),s=ch(e.converter,t,n);return bh(r,[Bl($l(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,fo.none())])}function vh(e,t,n,...r){e=ol(e,hl);const s=ol(e.firestore,Cl),i=$l(s);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof Ll?Kl(i,"updateDoc",e._key,t,n,r):Gl(i,"updateDoc",e._key,t),bh(s,[o.toMutation(e._key,fo.exists(!0))])}function _h(e){return bh(ol(e.firestore,Cl),[new So(e._key,fo.none())])}function bh(e,t){return function(e,t){const n=new $r;return e.asyncQueue.enqueueAndForget((async()=>Pu(await El(e),t,n))),n.promise}(Al(e),t)}function wh(e,t,n){const r=n.docs.get(t._key),s=new mh(e);return new lh(e,s,t._key,r,new uh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
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
 */function Eh(...e){return new Wl("arrayUnion",e)}!function(e,t=!0){!function(e){Ar=e}(s.Jn),(0,s.Xd)(new i.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new Cl(new Wr(e.getProvider("auth-internal")),new Jr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new jr(Vr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(Cr,"3.8.0",e),(0,s.KN)(Cr,"3.8.0","esm2017")}()},1294:function(e,t,n){"use strict";n.d(t,{oq:function(){return mt},Jt:function(){return pt},cF:function(){return yt},aF:function(){return dt},iH:function(){return gt},KV:function(){return ft}});n(2801),n(7658);var r=n(7077),s=n(223),i=n(7142);
/**
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
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
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
 */
class l extends s.ZR{constructor(e,t,n=0){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function f(){const e="An unknown error occurred, please check the error payload for server response.";return new l("unknown",e)}function d(e){return new l("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new l("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",e)}function g(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y(e){return new l("unauthorized","User does not have permission to access '"+e+"'.")}function v(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _(){return new l("canceled","User canceled the upload/download.")}function b(e){return new l("invalid-url","Invalid URL '"+e+"'.")}function w(e){return new l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function E(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function I(){return new l("no-download-url","The given file does not have any download URLs.")}function k(e){return new l("unsupported-environment",`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function S(e){return new l("invalid-argument",e)}function C(){return new l("app-deleted","The Firebase app was deleted.")}function N(e){return new l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(e,t){return new l("invalid-format","String does not match format '"+e+"': "+t)}function R(e){throw new l("internal-error","Internal error: "+e)}
/**
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
 */class O{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=O.makeFromUrl(e,t)}catch(r){return new O(e,"")}if(""===n.path)return n;throw w(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function s(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},m=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",y=new RegExp(`^https?://${m}/${r}/${g}`,"i"),v={bucket:1,path:2},_=[{regex:a,indices:c,postModify:s},{regex:d,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let o=0;o<_.length;o++){const t=_[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let s=r[t.indices.path];s||(s=""),n=new O(e,s),t.postModify(n);break}}if(null==n)throw b(e);return n}}class L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
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
 */function x(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){s=setTimeout((()=>{s=null,e(d,c())}),t)}function f(){i&&clearTimeout(i)}function d(e,...t){if(u)return void f();if(e)return f(),void l.call(null,e,...t);const n=c()||o;if(n)return f(),void l.call(null,e,...t);let s;r<64&&(r*=2),1===a?(a=2,s=0):s=1e3*(r+Math.random()),h(s)}let p=!1;function m(e){p||(p=!0,f(),u||(null!==s?(e||(a=2),clearTimeout(s),h(0)):e||(a=1)))}return h(0),i=setTimeout((()=>{o=!0,m(!0)}),n),m}function D(e){e(!1)}
/**
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
 */function P(e){return void 0!==e}function M(e){return"object"===typeof e&&!Array.isArray(e)}function F(e){return"string"===typeof e||e instanceof String}function U(e){return V()&&e instanceof Blob}function V(){return"undefined"!==typeof Blob&&!(0,s.UG)()}function j(e,t,n,r){if(r<t)throw S(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw S(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
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
 */function $(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function B(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}
/**
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
 */var H;
/**
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
 */
function q(e,t){const n=e>=500&&e<600,r=[408,429],s=-1!==r.indexOf(e),i=-1!==t.indexOf(e);return n||s||i}
/**
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
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(H||(H={}));class W{constructor(e,t,n,r,s,i,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===H.NO_ERROR,s=n.getStatus();if((!t||q(s,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===H.ABORT;return void e(!1,new G(!1,null,t))}const i=-1!==this.successCodes_.indexOf(s);e(!0,new G(i,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());P(e)?n(e):n()}catch(i){r(i)}else if(null!==s){const e=f();e.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){const e=this.appDelete_?C():_();r(e)}else{const e=v();r(e)}};this.canceled_?t(!1,new G(!1,null,!0)):this.backoffId_=x(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class G{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function K(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function z(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function J(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Y(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function X(e,t,n,r,s,i,o=!0){const a=B(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return J(u,t),K(u,n),z(u,i),Y(u,r),new W(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}
/**
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
 */function Q(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Z(...e){const t=Q();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(V())return new Blob(e);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function ee(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
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
 */function te(e){if("undefined"===typeof atob)throw k("base-64");return atob(e)}
/**
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
 */const ne={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class re{constructor(e,t){this.data=e,this.contentType=t||null}}function se(e,t){switch(e){case ne.RAW:return new re(ie(t));case ne.BASE64:case ne.BASE64URL:return new re(ae(e,t));case ne.DATA_URL:return new re(ue(t),le(t))}throw f()}function ie(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const s=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(s){const s=r,i=e.charCodeAt(++n);r=65536|(1023&s)<<10|1023&i,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function oe(e){let t;try{t=decodeURIComponent(e)}catch(n){throw A(ne.DATA_URL,"Malformed data URL.")}return ie(t)}function ae(e,t){switch(e){case ne.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw A(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ne.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw A(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=te(t)}catch(s){if(s.message.includes("polyfill"))throw s;throw A(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ce{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw A(ne.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=he(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ue(e){const t=new ce(e);return t.base64?ae(ne.BASE64,t.rest):oe(t.rest)}function le(e){const t=new ce(e);return t.contentType}function he(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
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
 */class fe{constructor(e,t){let n=0,r="";U(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(U(this.data_)){const n=this.data_,r=ee(n,e,t);return null===r?null:new fe(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new fe(n,!0)}}static getBlob(...e){if(V()){const t=e.map((e=>e instanceof fe?e.data_:e));return new fe(Z.apply(null,t))}{const t=e.map((e=>F(e)?se(ne.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new fe(r,!0)}}uploadData(){return this.data_}}
/**
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
 */function de(e){let t;try{t=JSON.parse(e)}catch(n){return null}return M(t)?t:null}
/**
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
 */function pe(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function me(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function ge(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
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
 */function ye(e,t){return t}class ve{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ye}}let _e=null;function be(e){return!F(e)||e.length<2?e:ge(e)}function we(){if(_e)return _e;const e=[];function t(e,t){return be(t)}e.push(new ve("bucket")),e.push(new ve("generation")),e.push(new ve("metageneration")),e.push(new ve("name","fullPath",!0));const n=new ve("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const s=new ve("size");return s.xform=r,e.push(s),e.push(new ve("timeCreated")),e.push(new ve("updated")),e.push(new ve("md5Hash",null,!0)),e.push(new ve("cacheControl",null,!0)),e.push(new ve("contentDisposition",null,!0)),e.push(new ve("contentEncoding",null,!0)),e.push(new ve("contentLanguage",null,!0)),e.push(new ve("contentType",null,!0)),e.push(new ve("metadata","customMetadata",!0)),_e=e,_e}function Ee(e,t){function n(){const n=e["bucket"],r=e["fullPath"],s=new O(n,r);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function Te(e,t,n){const r={type:"file"},s=n.length;for(let i=0;i<s;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return Ee(r,e),r}function Ie(e,t,n){const r=de(t);if(null===r)return null;const s=r;return Te(e,s,n)}function ke(e,t,n,r){const s=de(t);if(null===s)return null;if(!F(s["downloadTokens"]))return null;const i=s["downloadTokens"];if(0===i.length)return null;const o=encodeURIComponent,a=i.split(","),c=a.map((t=>{const s=e["bucket"],i=e["fullPath"],a="/b/"+o(s)+"/o/"+o(i),c=$(a,n,r),u=B({alt:"media",token:t});return c+u}));return c[0]}function Se(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
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
 */const Ce="prefixes",Ne="items";function Ae(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Ce])for(const s of n[Ce]){const n=s.replace(/\/$/,""),i=e._makeStorageReference(new O(t,n));r.prefixes.push(i)}if(n[Ne])for(const s of n[Ne]){const n=e._makeStorageReference(new O(t,s["name"]));r.items.push(n)}return r}function Re(e,t,n){const r=de(n);if(null===r)return null;const s=r;return Ae(e,t,s)}class Oe{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
 */function Le(e){if(!e)throw f()}function xe(e,t){function n(n,r){const s=Ie(e,r,t);return Le(null!==s),s}return n}function De(e,t){function n(n,r){const s=Re(e,t,r);return Le(null!==s),s}return n}function Pe(e,t){function n(n,r){const s=Ie(e,r,t);return Le(null!==s),ke(s,r,e.host,e._protocol)}return n}function Me(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?g():m():402===t.getStatus()?p(e.bucket):403===t.getStatus()?y(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Fe(e){const t=Me(e);function n(n,r){let s=t(n,r);return 404===n.getStatus()&&(s=d(e.path)),s.serverResponse=r.serverResponse,s}return n}function Ue(e,t,n,r,s){const i={};t.isRoot?i["prefix"]="":i["prefix"]=t.path+"/",n&&n.length>0&&(i["delimiter"]=n),r&&(i["pageToken"]=r),s&&(i["maxResults"]=s);const o=t.bucketOnlyServerUrl(),a=$(o,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new Oe(a,c,De(e,t.bucket),u);return l.urlParams=i,l.errorHandler=Me(t),l}function Ve(e,t,n){const r=t.fullServerUrl(),s=$(r,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new Oe(s,i,Pe(e,n),o);return a.errorHandler=Fe(t),a}function je(e,t){const n=t.fullServerUrl(),r=$(n,e.host,e._protocol),s="DELETE",i=e.maxOperationRetryTime;function o(e,t){}const a=new Oe(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Fe(t),a}function $e(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Be(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=$e(null,t)),r}function He(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Be(t,r,s),l=Se(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=fe.getBlob(h,r,f);if(null===d)throw T();const p={name:u["fullPath"]},m=$(i,e.host,e._protocol),g="POST",y=e.maxUploadRetryTime,v=new Oe(m,g,xe(e,n),y);return v.urlParams=p,v.headers=o,v.body=d.uploadData(),v.errorHandler=Me(t),v}
/**
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
 */
let qe=null;class We{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=H.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=H.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Ge extends We{initXhr(){this.xhr_.responseType="text"}}function Ke(){return qe?qe():new Ge}
/**
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
 */
class ze{constructor(e,t){this._service=e,this._location=t instanceof O?t:O.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ze(e,t)}get root(){const e=new O(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ge(this._location.path)}get storage(){return this._service}get parent(){const e=pe(this._location.path);if(null===e)return null;const t=new O(this._location.bucket,e);return new ze(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw N(e)}}function Je(e,t,n){e._throwIfRoot("uploadBytes");const r=He(e.storage,e._location,we(),new fe(t,!0),n);return e.storage.makeRequestWithTokens(r,Ke).then((t=>({metadata:t,ref:e})))}function Ye(e){const t={prefixes:[],items:[]};return Xe(e,t).then((()=>t))}async function Xe(e,t,n){const r={pageToken:n},s=await Qe(e,r);t.prefixes.push(...s.prefixes),t.items.push(...s.items),null!=s.nextPageToken&&await Xe(e,t,s.nextPageToken)}function Qe(e,t){null!=t&&"number"===typeof t.maxResults&&j("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Ue(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,Ke)}function Ze(e){e._throwIfRoot("getDownloadURL");const t=Ve(e.storage,e._location,we());return e.storage.makeRequestWithTokens(t,Ke).then((e=>{if(null===e)throw I();return e}))}function et(e){e._throwIfRoot("deleteObject");const t=je(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Ke)}function tt(e,t){const n=me(e._location.path,t),r=new O(e._location.bucket,n);return new ze(e.storage,r)}
/**
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
 */function nt(e){return/^[A-Za-z]+:\/\//.test(e)}function rt(e,t){return new ze(e,t)}function st(e,t){if(e instanceof ct){const n=e;if(null==n._bucket)throw E();const r=new ze(n,n._bucket);return null!=t?st(r,t):r}return void 0!==t?tt(e,t):e}function it(e,t){if(t&&nt(t)){if(e instanceof ct)return rt(e,t);throw S("To use ref(service, url), the first argument must be a Storage instance.")}return st(e,t)}function ot(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:O.makeFromBucketSpec(n,e)}function at(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:(0,s.Sg)(i,e.app.options.projectId))}class ct{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?O.makeFromBucketSpec(r,this._host):ot(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=ot(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){j("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){j("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ze(this,e)}_makeRequest(e,t,n,r,s=!0){if(this._deleted)return new L(C());{const i=X(e,this._appId,n,r,t,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ut="@firebase/storage",lt="0.10.0",ht="storage";function ft(e,t,n){return e=(0,s.m9)(e),Je(e,t,n)}function dt(e){return e=(0,s.m9)(e),Ye(e)}function pt(e){return e=(0,s.m9)(e),Ze(e)}function mt(e){return e=(0,s.m9)(e),et(e)}function gt(e,t){return e=(0,s.m9)(e),it(e,t)}function yt(e=(0,r.Mq)(),t){e=(0,s.m9)(e);const n=(0,r.qX)(e,ht),i=n.getImmediate({identifier:t}),o=(0,s.P0)("storage");return o&&vt(i,...o),i}function vt(e,t,n,r={}){at(e,t,n,r)}
/**
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
 */function _t(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ct(n,s,i,t,r.Jn)}function bt(){(0,r.Xd)(new i.wA(ht,_t,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(ut,lt,""),(0,r.KN)(ut,lt,"esm2017")}bt()},5417:function(e,t,n){"use strict";function r(e){return"object"===typeof e&&null!==e}function s(e,t){return e=r(e)?e:Object.create(null),new Proxy(e,{get(e,n,r){return"key"===n?Reflect.get(e,n,r):Reflect.get(e,n,r)||Reflect.get(t,n,r)}})}function i(e,t){return t.reduce(((e,t)=>null==e?void 0:e[t]),e)}function o(e,t,n){return t.slice(0,-1).reduce(((e,t)=>/^(__proto__)$/.test(t)?{}:e[t]=e[t]||{}),e)[t[t.length-1]]=n,e}function a(e,t){return t.reduce(((t,n)=>{const r=n.split(".");return o(t,r,i(e,r))}),{})}function c(e,{storage:t,serializer:n,key:r,debug:s}){try{const s=null==t?void 0:t.getItem(r);s&&e.$patch(null==n?void 0:n.deserialize(s))}catch(i){s&&console.error(i)}}function u(e,{storage:t,serializer:n,key:r,paths:s,debug:i}){try{const i=Array.isArray(s)?a(e,s):e;t.setItem(r,n.serialize(i))}catch(o){i&&console.error(o)}}function l(e={}){return t=>{const{options:{persist:n},store:r}=t;if(!n)return;const i=(Array.isArray(n)?n.map((t=>s(t,e))):[s(n,e)]).map((({storage:t=localStorage,beforeRestore:n=null,afterRestore:s=null,serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},key:o=r.$id,paths:a=null,debug:c=!1})=>{var u;return{storage:t,beforeRestore:n,afterRestore:s,serializer:i,key:(null!=(u=e.key)?u:e=>e)(o),paths:a,debug:c}}));r.$persist=()=>{i.forEach((e=>{u(r.$state,e)}))},r.$hydrate=({runHooks:e=!0}={})=>{i.forEach((n=>{const{beforeRestore:s,afterRestore:i}=n;e&&(null==s||s(t)),c(r,n),e&&(null==i||i(t))}))},i.forEach((e=>{const{beforeRestore:n,afterRestore:s}=e;null==n||n(t),c(r,e),null==s||s(t),r.$subscribe(((t,n)=>{u(n,e)}),{detached:!0})}))}}n.d(t,{Z:function(){return h}});var h=l()},1020:function(e,t,n){"use strict";n.d(t,{WB:function(){return le},Q_:function(){return Ee}});n(7658),n(541);var r=n(4870),s=n(3396),i=!1;function o(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function a(){return c().__VUE_DEVTOOLS_GLOBAL_HOOK__}function c(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const u="function"===typeof Proxy,l="devtools-plugin:setup",h="plugin:settings:set";let f,d,p;function m(){var e;return void 0!==f||("undefined"!==typeof window&&window.performance?(f=!0,d=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(f=!0,d=n.g.perf_hooks.performance):f=!1),f}function g(){return m()?d.now():Date.now()}class y{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(s,t)}catch(i){}this.fallbacks={getSettings(){return s},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(i){}s=e},now(){return g()}},t&&t.on(h,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function v(e,t){const n=e,r=c(),s=a(),i=u&&n.enableEarlyProxy;if(!s||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const e=i?new y(n,s):null,o=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(l,e,t)}const _=e=>p=e,b=Symbol();function w(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var E;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(E||(E={}));const T="undefined"!==typeof window,I=!1,k=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function S(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function C(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){L(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function N(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function A(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const R="object"===typeof navigator?navigator:{userAgent:""},O=(()=>/Macintosh/.test(R.userAgent)&&/AppleWebKit/.test(R.userAgent)&&!/Safari/.test(R.userAgent))(),L=T?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!O?x:"msSaveOrOpenBlob"in R?D:P:()=>{};function x(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?N(r.href)?C(e,t,n):(r.target="_blank",A(r)):A(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){A(r)}),0))}function D(e,t="download",n){if("string"===typeof e)if(N(e))C(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){A(t)}))}else navigator.msSaveOrOpenBlob(S(e,n),t)}function P(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return C(e,t,n);const s="application/octet-stream"===e.type,i=/constructor/i.test(String(k.HTMLElement))||"safari"in k,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||s&&i||O)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=o?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}function M(e,t){const n="🍍 "+e;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,t):"error"===t?console.error(n):"warn"===t?console.warn(n):console.log(n)}function F(e){return"_a"in e&&"install"in e}function U(){if(!("clipboard"in navigator))return M("Your browser doesn't support the Clipboard API","error"),!0}function V(e){return!!(e instanceof Error&&e.message.toLowerCase().includes("document is not focused"))&&(M('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function j(e){if(!U())try{await navigator.clipboard.writeText(JSON.stringify(e.state.value)),M("Global state copied to clipboard.")}catch(t){if(V(t))return;M("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}async function $(e){if(!U())try{e.state.value=JSON.parse(await navigator.clipboard.readText()),M("Global state pasted from clipboard.")}catch(t){if(V(t))return;M("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}async function B(e){try{L(new Blob([JSON.stringify(e.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){M("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}let H;function q(){function e(){return new Promise(((e,t)=>{H.onchange=async()=>{const t=H.files;if(!t)return e(null);const n=t.item(0);return e(n?{text:await n.text(),file:n}:null)},H.oncancel=()=>e(null),H.onerror=t,H.click()}))}return H||(H=document.createElement("input"),H.type="file",H.accept=".json"),e}async function W(e){try{const t=await q(),n=await t();if(!n)return;const{text:r,file:s}=n;e.state.value=JSON.parse(r),M(`Global state imported from "${s.name}".`)}catch(t){M("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}function G(e){return{_custom:{display:e}}}const K="🍍 Pinia (root)",z="_root";function J(e){return F(e)?{id:z,label:K}:{id:e.$id,label:e.$id}}function Y(e){if(F(e)){const t=Array.from(e._s.keys()),n=e._s,r={state:t.map((t=>({editable:!0,key:t,value:e.state.value[t]}))),getters:t.filter((e=>n.get(e)._getters)).map((e=>{const t=n.get(e);return{editable:!1,key:e,value:t._getters.reduce(((e,n)=>(e[n]=t[n],e)),{})}}))};return r}const t={state:Object.keys(e.$state).map((t=>({editable:!0,key:t,value:e.$state[t]})))};return e._getters&&e._getters.length&&(t.getters=e._getters.map((t=>({editable:!1,key:t,value:e[t]})))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map((t=>({editable:!0,key:t,value:e[t]})))),t}function X(e){return e?Array.isArray(e)?e.reduce(((e,t)=>(e.keys.push(t.key),e.operations.push(t.type),e.oldValue[t.key]=t.oldValue,e.newValue[t.key]=t.newValue,e)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:G(e.type),key:G(e.key),oldValue:e.oldValue,newValue:e.newValue}:{}}function Q(e){switch(e){case E.direct:return"mutation";case E.patchFunction:return"$patch";case E.patchObject:return"$patch";default:return"unknown"}}let Z=!0;const ee=[],te="pinia:mutations",ne="pinia",re=e=>"🍍 "+e;function se(e,t){v({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:ee,app:e},(n=>{"function"!==typeof n.now&&M("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:te,label:"Pinia 🍍",color:15064968}),n.addInspector({id:ne,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{j(t)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await $(t),n.sendInspectorTree(ne),n.sendInspectorState(ne)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{B(t)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await W(t),n.sendInspectorTree(ne),n.sendInspectorState(ne)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:e=>{const n=t._s.get(e);n?n._isOptionsAPI?(n.$reset(),M(`Store "${e}" reset.`)):M(`Cannot reset "${e}" store because it's a setup store.`,"warn"):M(`Cannot reset "${e}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(((e,t)=>{const n=e.componentInstance&&e.componentInstance.proxy;if(n&&n._pStores){const t=e.componentInstance.proxy._pStores;Object.values(t).forEach((t=>{e.instanceData.state.push({type:re(t.$id),key:"state",editable:!0,value:t._isOptionsAPI?{_custom:{value:(0,r.IU)(t.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>t.$reset()}]}}:Object.keys(t.$state).reduce(((e,n)=>(e[n]=t.$state[n],e)),{})}),t._getters&&t._getters.length&&e.instanceData.state.push({type:re(t.$id),key:"getters",editable:!1,value:t._getters.reduce(((e,n)=>{try{e[n]=t[n]}catch(r){e[n]=r}return e}),{})})}))}})),n.on.getInspectorTree((n=>{if(n.app===e&&n.inspectorId===ne){let e=[t];e=e.concat(Array.from(t._s.values())),n.rootNodes=(n.filter?e.filter((e=>"$id"in e?e.$id.toLowerCase().includes(n.filter.toLowerCase()):K.toLowerCase().includes(n.filter.toLowerCase()))):e).map(J)}})),n.on.getInspectorState((n=>{if(n.app===e&&n.inspectorId===ne){const e=n.nodeId===z?t:t._s.get(n.nodeId);if(!e)return;e&&(n.state=Y(e))}})),n.on.editInspectorState(((n,r)=>{if(n.app===e&&n.inspectorId===ne){const e=n.nodeId===z?t:t._s.get(n.nodeId);if(!e)return M(`store "${n.nodeId}" not found`,"error");const{path:r}=n;F(e)?r.unshift("state"):1===r.length&&e._customProperties.has(r[0])&&!(r[0]in e.$state)||r.unshift("$state"),Z=!1,n.set(e,r,n.state.value),Z=!0}})),n.on.editComponentState((e=>{if(e.type.startsWith("🍍")){const n=e.type.replace(/^🍍\s*/,""),r=t._s.get(n);if(!r)return M(`store "${n}" not found`,"error");const{path:s}=e;if("state"!==s[0])return M(`Invalid path for store "${n}":\n${s}\nOnly state can be modified.`);s[0]="$state",Z=!1,e.set(r,s,e.state.value),Z=!0}}))}))}function ie(e,t){ee.includes(re(t.$id))||ee.push(re(t.$id)),v({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:ee,app:e,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(e=>{const n="function"===typeof e.now?e.now.bind(e):Date.now;t.$onAction((({after:r,onError:s,name:i,args:o})=>{const a=ae++;e.addTimelineEvent({layerId:te,event:{time:n(),title:"🛫 "+i,subtitle:"start",data:{store:G(t.$id),action:G(i),args:o},groupId:a}}),r((r=>{oe=void 0,e.addTimelineEvent({layerId:te,event:{time:n(),title:"🛬 "+i,subtitle:"end",data:{store:G(t.$id),action:G(i),args:o,result:r},groupId:a}})})),s((r=>{oe=void 0,e.addTimelineEvent({layerId:te,event:{time:n(),logType:"error",title:"💥 "+i,subtitle:"end",data:{store:G(t.$id),action:G(i),args:o,error:r},groupId:a}})}))}),!0),t._customProperties.forEach((i=>{(0,s.YP)((()=>(0,r.SU)(t[i])),((t,r)=>{e.notifyComponentUpdate(),e.sendInspectorState(ne),Z&&e.addTimelineEvent({layerId:te,event:{time:n(),title:"Change",subtitle:i,data:{newValue:t,oldValue:r},groupId:oe}})}),{deep:!0})})),t.$subscribe((({events:r,type:s},i)=>{if(e.notifyComponentUpdate(),e.sendInspectorState(ne),!Z)return;const o={time:n(),title:Q(s),data:{store:G(t.$id),...X(r)},groupId:oe};oe=void 0,s===E.patchFunction?o.subtitle="⤵️":s===E.patchObject?o.subtitle="🧩":r&&!Array.isArray(r)&&(o.subtitle=r.type),r&&(o.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),e.addTimelineEvent({layerId:te,event:o})}),{detached:!0,flush:"sync"});const i=t._hotUpdate;t._hotUpdate=(0,r.Xl)((r=>{i(r),e.addTimelineEvent({layerId:te,event:{time:n(),title:"🔥 "+t.$id,subtitle:"HMR update",data:{store:G(t.$id),info:G("HMR update")}}}),e.notifyComponentUpdate(),e.sendInspectorTree(ne),e.sendInspectorState(ne)}));const{$dispose:o}=t;t.$dispose=()=>{o(),e.notifyComponentUpdate(),e.sendInspectorTree(ne),e.sendInspectorState(ne),e.getSettings().logStoreChanges&&M(`Disposed "${t.$id}" store 🗑`)},e.notifyComponentUpdate(),e.sendInspectorTree(ne),e.sendInspectorState(ne),e.getSettings().logStoreChanges&&M(`"${t.$id}" store installed 🆕`)}))}let oe,ae=0;function ce(e,t){const n=t.reduce(((t,n)=>(t[n]=(0,r.IU)(e)[n],t)),{});for(const r in n)e[r]=function(){const t=ae,s=new Proxy(e,{get(...e){return oe=t,Reflect.get(...e)},set(...e){return oe=t,Reflect.set(...e)}});return n[r].apply(s,arguments)}}function ue({app:e,store:t,options:n}){if(!t.$id.startsWith("__hot:")){if(n.state&&(t._isOptionsAPI=!0),"function"===typeof n.state){ce(t,Object.keys(n.actions));const e=t._hotUpdate;(0,r.IU)(t)._hotUpdate=function(n){e.apply(this,arguments),ce(t,Object.keys(n._hmrPayload.actions))}}ie(e,t)}}function le(){const e=(0,r.B)(!0),t=e.run((()=>(0,r.iH)({})));let n=[],s=[];const o=(0,r.Xl)({install(e){_(o),i||(o._a=e,e.provide(b,o),e.config.globalProperties.$pinia=o,I&&se(e,o),s.forEach((e=>n.push(e))),s=[])},use(e){return this._a||i?n.push(e):s.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return I&&"undefined"!==typeof Proxy&&o.use(ue),o}const he=()=>{};function fe(e,t,n,s=he){e.push(t);const i=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),s())};return!n&&(0,r.nZ)()&&(0,r.EB)(i),i}function de(e,...t){e.slice().forEach((e=>{e(...t)}))}function pe(e,t){e instanceof Map&&t instanceof Map&&t.forEach(((t,n)=>e.set(n,t))),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],i=e[n];w(i)&&w(s)&&e.hasOwnProperty(n)&&!(0,r.dq)(s)&&!(0,r.PG)(s)?e[n]=pe(i,s):e[n]=s}return e}const me=Symbol(),ge=new WeakMap;function ye(e){return i?!ge.has(e):!w(e)||!e.hasOwnProperty(me)}const{assign:ve}=Object;function _e(e){return!(!(0,r.dq)(e)||!e.effect)}function be(e,t,n,a){const{state:c,actions:u,getters:l}=t,h=n.state.value[e];let f;function d(){h||(i?o(n.state.value,e,c?c():{}):n.state.value[e]=c?c():{});const t=(0,r.BK)(n.state.value[e]);return ve(t,u,Object.keys(l||{}).reduce(((t,o)=>(t[o]=(0,r.Xl)((0,s.Fl)((()=>{_(n);const t=n._s.get(e);if(!i||t._r)return l[o].call(t,t)}))),t)),{}))}return f=we(e,d,t,n,a,!0),f.$reset=function(){const e=c?c():{};this.$patch((t=>{ve(t,e)}))},f}function we(e,t,n={},a,c,u){let l;const h=ve({actions:{}},n);const f={deep:!0};let d,p;let m,g=(0,r.Xl)([]),y=(0,r.Xl)([]);const v=a.state.value[e];u||v||(i?o(a.state.value,e,{}):a.state.value[e]={});const b=(0,r.iH)({});let w;function T(t){let n;d=p=!1,"function"===typeof t?(t(a.state.value[e]),n={type:E.patchFunction,storeId:e,events:m}):(pe(a.state.value[e],t),n={type:E.patchObject,payload:t,storeId:e,events:m});const r=w=Symbol();(0,s.Y3)().then((()=>{w===r&&(d=!0)})),p=!0,de(g,n,a.state.value[e])}const k=he;function S(){l.stop(),g=[],y=[],a._s.delete(e)}function C(t,n){return function(){_(a);const r=Array.from(arguments),s=[],i=[];function o(e){s.push(e)}function c(e){i.push(e)}let u;de(y,{args:r,name:t,store:R,after:o,onError:c});try{u=n.apply(this&&this.$id===e?this:R,r)}catch(l){throw de(i,l),l}return u instanceof Promise?u.then((e=>(de(s,e),e))).catch((e=>(de(i,e),Promise.reject(e)))):(de(s,u),u)}}const N=(0,r.Xl)({actions:{},getters:{},state:[],hotState:b}),A={_p:a,$id:e,$onAction:fe.bind(null,y),$patch:T,$reset:k,$subscribe(t,n={}){const r=fe(g,t,n.detached,(()=>i())),i=l.run((()=>(0,s.YP)((()=>a.state.value[e]),(r=>{("sync"===n.flush?p:d)&&t({storeId:e,type:E.direct,events:m},r)}),ve({},f,n))));return r},$dispose:S};i&&(A._r=!1);const R=(0,r.qj)(I?ve({_hmrPayload:N,_customProperties:(0,r.Xl)(new Set)},A):A);a._s.set(e,R);const O=a._e.run((()=>(l=(0,r.B)(),l.run((()=>t())))));for(const s in O){const t=O[s];if((0,r.dq)(t)&&!_e(t)||(0,r.PG)(t))u||(v&&ye(t)&&((0,r.dq)(t)?t.value=v[s]:pe(t,v[s])),i?o(a.state.value[e],s,t):a.state.value[e][s]=t);else if("function"===typeof t){const e=C(s,t);i?o(O,s,e):O[s]=e,h.actions[s]=t}else 0}if(i?Object.keys(O).forEach((e=>{o(R,e,O[e])})):(ve(R,O),ve((0,r.IU)(R),O)),Object.defineProperty(R,"$state",{get:()=>a.state.value[e],set:e=>{T((t=>{ve(t,e)}))}}),I){const e={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((t=>{Object.defineProperty(R,t,{value:R[t],...e})}))}return i&&(R._r=!0),a._p.forEach((e=>{if(I){const t=l.run((()=>e({store:R,app:a._a,pinia:a,options:h})));Object.keys(t||{}).forEach((e=>R._customProperties.add(e))),ve(R,t)}else ve(R,l.run((()=>e({store:R,app:a._a,pinia:a,options:h}))))})),v&&u&&n.hydrate&&n.hydrate(R.$state,v),d=!0,p=!0,R}function Ee(e,t,n){let r,i;const o="function"===typeof t;function a(e,n){const a=(0,s.FN)();e=e||a&&(0,s.f3)(b,null),e&&_(e),e=p,e._s.has(r)||(o?we(r,t,i,e):be(r,i,e));const c=e._s.get(r);return c}return"string"===typeof e?(r=e,i=o?n:t):(i=e,r=e.id),a.$id=r,a}},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return V},p7:function(){return tt},tv:function(){return st},yj:function(){return it}});n(7658),n(541);var r=n(3396),s=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const s=t[r];n[r]=l(s)?s.map(e):e(s)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,f=e=>e.replace(h,"");function d(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=w(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&y(t.matched[r],n.matched[s])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_(e[n],t[n]))return!1;return!0}function _(e,t){return l(e)?b(e,t):l(t)?b(t,e):e===t}function b(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],"."!==i){if(".."!==i)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function I(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),f(e)}const k=/^[^#]+#/;function S(e,t){return e.replace(k,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const N=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=C(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const O=new Map;function L(e,t){O.set(e,t)}function x(e){const t=O.get(e);return O.delete(e),t}let D=()=>location.protocol+"//"+location.host;function P(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let t=s.includes(e.slice(i))?e.slice(i).length:1,n=s.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+s}function M(e,t,n,r){let s=[],i=[],o=null;const c=({state:i})=>{const a=P(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,o&&o===c)return void(o=null);l=u?i.position-u.position:0}else r(a);s.forEach((e=>{e(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return i.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:N()}),"")}function f(){for(const e of i)e();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:f}}function F(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?N():null}}function U(e){const{history:t,location:n}=window,r={value:P(e,n)},s={value:t.state};function i(r,i,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:D()+e+r;try{t[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(s.value.back,e,s.value.forward,!0),n,{position:s.value.position});i(e,o,!0),r.value=e}function c(e,n){const o=a({},s.value,t.state,{forward:e,scroll:N()});i(o.current,o,!0);const c=a({},F(r.value,e,null),{position:o.position+1},n);i(e,c,!1),r.value=e}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:c,replace:o}}function V(e){e=I(e);const t=U(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const s=a({location:"",base:e,go:r,createHref:S.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function j(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(q||(q={}));function W(e,t){return a(new Error,{type:e,[H]:!0},t)}function G(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const K="[^/]+?",z={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function Y(e,t){const n=a({},z,t),r=[];let s=n.start?"^":"";const i=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(s+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(s+="/"),s+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;i.push({name:e,repeatable:n,optional:c});const l=u||K;if(l!==K){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),s+=f,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",s=i[r-1];n[s.name]=e&&s.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of s)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:o,optional:a}=e,c=i in t?t[i]:"";if(l(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:i,parse:c,stringify:u}}function X(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Q(e,t){let n=0;const r=e.score,s=t.score;while(n<r.length&&n<s.length){const e=X(r[n],s[n]);if(e)return e;n++}if(1===Math.abs(s.length-r.length)){if(Z(r))return 1;if(Z(s))return-1}return s.length-r.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,u="",l="";function h(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:te.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function re(e,t,n){const r=Y(ne(e.path),n);const s=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf===!t.record.aliasOf&&t.children.push(s),s}function se(e,t){const n=[],r=new Map;function s(e){return r.get(e)}function i(e,n,r){const s=!r,c=oe(e);c.aliasOf=r&&r.record;const h=le(t,e),f=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let d,p;for(const t of f){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(d=re(t,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),s&&e.name&&!ce(d)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],d,r&&r.children[t])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{o(p)}:u}function o(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Q(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let s,i,o,c={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw W(1,{location:e});0,o=s.record.name,c=a(ie(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&ie(e.params,s.keys.map((e=>e.name)))),i=s.stringify(c)}else if("path"in e)i=e.path,s=n.find((e=>e.re.test(i))),s&&(c=s.parse(i),o=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw W(1,{location:e,currentLocation:t});o=s.record.name,c=a({},t.params,e.params),i=s.stringify(c)}const u=[];let l=s;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:i,params:c,matched:u,meta:ue(u)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function oe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const fe=/#/g,de=/&/g,pe=/\//g,me=/=/g,ge=/\?/g,ye=/\+/g,ve=/%5B/g,_e=/%5D/g,be=/%5E/g,we=/%60/g,Ee=/%7B/g,Te=/%7C/g,Ie=/%7D/g,ke=/%20/g;function Se(e){return encodeURI(""+e).replace(Te,"|").replace(ve,"[").replace(_e,"]")}function Ce(e){return Se(e).replace(Ee,"{").replace(Ie,"}").replace(be,"^")}function Ne(e){return Se(e).replace(ye,"%2B").replace(ke,"+").replace(fe,"%23").replace(de,"%26").replace(we,"`").replace(Ee,"{").replace(Ie,"}").replace(be,"^")}function Ae(e){return Ne(e).replace(me,"%3D")}function Re(e){return Se(e).replace(fe,"%23").replace(ge,"%3F")}function Oe(e){return null==e?"":Re(e).replace(pe,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function xe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const e=r[s].replace(ye," "),n=e.indexOf("="),i=Le(n<0?e:e.slice(0,n)),o=n<0?null:Le(e.slice(n+1));if(i in t){let e=t[i];l(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Ae(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const s=l(r)?r.map((e=>e&&Ne(e))):[r&&Ne(r)];s.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Pe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),Fe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(W(4,{from:n,to:t})):e instanceof Error?a(e):j(e)?a(W(2,{from:t,to:e})):(i&&r.enterCallbacks[s]===i&&"function"===typeof e&&i.push(e),o())},u=e.call(r&&r.instances[s],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function He(e,t,n,r){const s=[];for(const i of e){0;for(const e in i.components){let a=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(qe(a)){const o=a.__vccOpts||a,c=o[t];c&&s.push(Be(c,n,r,i,e))}else{let c=a();0,s.push((()=>c.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const a=o(s)?s.default:s;i.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&Be(u,n,r,i,e)()}))))}}}return s}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function We(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(Ve),i=(0,r.Fl)((()=>t.resolve((0,s.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(y.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&s[s.length-1].path!==a?s.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Je(n.params,i.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,i.value.params)));function l(n={}){return ze(n)?t[(0,s.SU)(e.replace)?"replace":"push"]((0,s.SU)(e.to)).catch(u):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:We,setup(e,{slots:t}){const n=(0,s.qj)(We(e)),{options:i}=(0,r.f3)(Ue),o=(0,r.Fl)((()=>({[Xe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=t.default&&t.default(n);return e.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Ke=Ge;function ze(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],s=e[n];if("string"===typeof r){if(r!==s)return!1}else if(!l(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(je),o=(0,r.Fl)((()=>e.route||i.value)),c=(0,r.f3)(Fe,0),u=(0,r.Fl)((()=>{let e=(0,s.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Fe,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Me,l),(0,r.JJ)(je,o);const h=(0,s.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,s,i])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&y(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const s=o.value,i=e.name,c=l.value,u=c&&c.components[i];if(!u)return Ze(n.default,{Component:u,route:s});const f=c.props[i],d=f?!0===f?s.params:"function"===typeof f?f(s):f:null,p=e=>{e.component.isUnmounted&&(c.instances[i]=null)},m=(0,r.h)(u,a({},d,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:m,route:s})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Qe;function tt(e){const t=se(e.routes,e),n=e.parseQuery||xe,o=e.stringifyQuery||De,h=e.history;const f=$e(),m=$e(),y=$e(),v=(0,s.XI)(B);let _=B;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),w=c.bind(null,Oe),T=c.bind(null,Le);function I(e,n){let r,s;return $(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function O(e,r){if(r=a({},r||v.value),"string"===typeof e){const s=d(n,e,r.path),i=t.resolve({path:s.path},r),o=h.createHref(s.fullPath);return a(s,i,{params:T(i.params),hash:Le(s.hash),redirectedFrom:void 0,href:o})}let s;if("path"in e)s=a({},e,{path:d(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];s=a({},e,{params:w(e.params)}),r.params=w(r.params)}const i=t.resolve(s,r),c=e.hash||"";i.params=b(T(i.params));const u=p(o,a({},e,{hash:Ce(c),path:i.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===De?Pe(e.query):e.query||{}},i,{redirectedFrom:void 0,href:l})}function D(e){return"string"===typeof e?d(n,e,v.value.path):a({},e)}function P(e,t){if(_!==e)return W(8,{from:t,to:e})}function M(e){return V(e)}function F(e){return M(a(D(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function V(e,t){const n=_=O(e),r=v.value,s=e.state,i=e.force,c=!0===e.replace,u=U(n);if(u)return V(a(D(u),{state:"object"===typeof u?a({},s,u.state):s,force:i,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!i&&g(o,r,n)&&(h=W(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):H(l,r)).catch((e=>G(e)?G(e,2)?e:te(e):Z(e,l,r))).then((e=>{if(e){if(G(e,2))return V(a({replace:c},D(e.to),{state:"object"===typeof e.to?a({},s,e.to.state):s,force:i}),t||l)}else e=K(l,r,!0,c,s);return q(l,r,e),e}))}function j(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function H(e,t){let n;const[r,s,i]=rt(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=j.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of f.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).then((()=>{n=He(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const s of r.beforeEnter)n.push(Be(s,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(i,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of m.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function q(e,t,n){for(const r of y.list())r(e,t,n)}function K(e,t,n,r,s){const o=P(e,t);if(o)return o;const c=t===B,u=i?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},s)):h.push(e.fullPath,s)),v.value=e,ne(e,t,n,c),te()}let z;function J(){z||(z=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=O(e),s=U(r);if(s)return void V(a(s,{replace:!0}),r).catch(u);_=r;const o=v.value;i&&L(R(o.fullPath,n.delta),N()),H(r,o).catch((e=>G(e,12)?e:G(e,2)?(V(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||K(r,o,!1),e&&(n.delta&&!G(e,8)?h.go(-n.delta,!1):n.type===E.pop&&G(e,20)&&h.go(-1,!1)),q(r,o,e)})).catch(u)})))}let Y,X=$e(),Q=$e();function Z(e,t,n){te(e);const r=Q.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Y&&v.value!==B?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function te(e){return Y||(Y=!e,J(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ne(t,n,s,o){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!s&&x(R(t.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&A(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,ae={currentRoute:v,listening:!0,addRoute:I,removeRoute:k,hasRoute:C,getRoutes:S,resolve:O,options:e,push:M,replace:F,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:f.add,beforeResolve:m.add,afterEach:y.add,onError:Q.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(v)}),i&&!ie&&v.value===B&&(ie=!0,M(h.location).catch((e=>{0})));const n={};for(const s in B)n[s]=(0,r.Fl)((()=>v.value[s]));e.provide(Ue,t),e.provide(Ve,(0,s.qj)(n)),e.provide(je,v);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(_=B,z&&z(),z=null,v.value=B,ie=!1,Y=!1),o()}}};return ae}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>y(e,i)))?r.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||s.push(a))}return[n,r,s]}function st(){return(0,r.f3)(Ue)}function it(){return(0,r.f3)(Ve)}}}]);
//# sourceMappingURL=chunk-vendors.d84716cb.js.map