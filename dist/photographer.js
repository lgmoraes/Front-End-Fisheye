(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}e.d({},{LZ:()=>de,Ar:()=>fe,vL:()=>ue});const r={getMedias:(i=n(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/photographers.json").then((function(e){return e.json()})).then((function(e){return{photographer:e.photographers.find((function(e){return e.id===t})),medias:e.media.filter((function(e){return e.photographerId===t}))}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}),getPhotographers:(o=n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/photographers.json").then((function(e){return e.json()})).then((function(e){return e.photographers}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})};var o,i;function a(e){return e.split(" ")[0]}function c(e){return Array.from(e.parentElement.children).indexOf(e)}function u(e,t){return Array.from(t).indexOf(e)}function s(e,t,n){return Math.min(Math.max(e,t),n)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=t.id,this._photographerId=t.photographerId,this._title=t.title,this._likes=t.likes,this._date=t.date,this._price=t.price,this._folder=a(fe(this._photographerId).name)}var t,n;return t=e,(n=[{key:"id",get:function(){return this._id}},{key:"photographerId",get:function(){return this._photographerId}},{key:"title",get:function(){return this._title}},{key:"likes",get:function(){return this._likes}},{key:"date",get:function(){return this._date}},{key:"price",get:function(){return this._price}},{key:"folder",get:function(){return this._folder}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function y(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}const v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=e.image,t}return t=a,(n=[{key:"image",get:function(){return this._image}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}const S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._video=e.video,t}return t=a,(n=[{key:"video",get:function(){return this._video}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return t&&E(e.prototype,t),n&&E(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var q=L((function e(t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"image"===n?new v(t):"video"===n?new S(t):void console.error("Unknown type format")}));function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=t.id,this._name=t.name,this._city=t.city,this._country=t.country,this._tagline=t.tagline,this._price=t.price,this._portrait=t.portrait,this._folder=a(this._name)}var t,n;return t=e,(n=[{key:"id",get:function(){return this._id}},{key:"name",get:function(){return this._name}},{key:"city",get:function(){return this._city}},{key:"tagline",get:function(){return this._tagline}},{key:"country",get:function(){return this._country}},{key:"price",get:function(){return this._price}},{key:"portrait",get:function(){return this._portrait}},{key:"folder",get:function(){return this._folder}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var A,T=P((function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),new O(t)})),R=0;function C(){var e=document.querySelector("body"),t=document.querySelector("main"),n=document.querySelector(".lightbox"),r=document.querySelector(".lightbox__img"),o=document.querySelector(".lightbox__thumbnail"),i=document.querySelector(".overlay");n.setAttribute("aria-hidden","true"),i.setAttribute("aria-hidden","true"),t.setAttribute("aria-hidden","false"),e.classList.remove("no-scroll"),o.removeAttribute("src"),r.removeAttribute("src")}function M(e){var t=document.querySelector(".lightbox__img"),n=document.querySelector(".lightbox__thumbnail"),r=document.querySelector(".lightbox__video"),o=document.querySelector(".lightbox__title"),i=de();R=e,o.innerHTML=i[e].title,i[e].image?(r.setAttribute("aria-hidden","true"),n.setAttribute("aria-hidden","false"),t.setAttribute("aria-hidden","true"),n.setAttribute("alt",i[e].title),t.setAttribute("alt",i[e].title),n.src="assets/thumbnails/".concat(A,"/").concat(i[e].image),t.src="assets/medias/".concat(A,"/").concat(i[e].image)):(n.removeAttribute("src"),t.removeAttribute("src"),n.setAttribute("aria-hidden","true"),t.setAttribute("aria-hidden","true"),r.setAttribute("aria-hidden","false"),r.src="assets/medias/".concat(A,"/").concat(i[e].video))}function D(){var e=de();++R>e.length-1&&(R=0),M(R)}function H(){var e=de();--R<0&&(R=e.length-1),M(R)}const I=function(){var e=document.querySelector(".lightbox"),t=document.querySelector(".lightbox__img"),n=document.querySelector(".lightbox__arrowLeft"),r=document.querySelector(".lightbox__arrowRight"),o=document.querySelector(".lightbox__close");A=a(fe().name),n.addEventListener("click",H),r.addEventListener("click",D),o.addEventListener("click",C),t.addEventListener("load",(function(){return t.setAttribute("aria-hidden","false")})),e.addEventListener("keydown",(function(t){if("Tab"!==t.key)return!1;t.target===e&&t.shiftKey?(o.focus(),t.preventDefault()):t.target!==o||t.shiftKey||(e.focus(),t.preventDefault())})),e.addEventListener("keydown",(function(e){"ArrowLeft"===e.key?H():"ArrowRight"===e.key&&D()})),e.addEventListener("keydown",(function(e){if(" "!==e.key&&"Enter"!==e.key)return!1;e.target===o?C():e.target===n?H():e.target===r&&D()})),e.addEventListener("keydown",(function(e){"Escape"===e.key&&C()}))},K=function(e){var t=document.querySelector("body"),n=document.querySelector("main"),r=document.querySelector(".overlay"),o=document.querySelector(".lightbox");o.setAttribute("aria-hidden","false"),r.setAttribute("aria-hidden","false"),n.setAttribute("aria-hidden","true"),t.classList.add("no-scroll"),M(e),o.focus()};function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._media=t}var t,n;return t=e,(n=[{key:"create",value:function(){var e=document.createElement("article");e.className="media",e.innerHTML='\n      <img class="media__thumbnail"\n        src="assets/thumbnails/'.concat(this._media.folder,"/").concat(this._media.image,'"\n        alt="').concat(this._media.title,'"\n        tabindex="0"\n      />\n      <div class="media__desc">\n        <h2 class="media__name" tabindex="0">').concat(this._media.title,'</h2>\n\n        <div class="media__likes">\n          <span class="media__counter">').concat(this._media.likes,'</span>\n          <div\n            class="media__heart media__heart--empty"\n            role="button"\n            aria-label="likes"\n            tabindex="0"\n          ></div>\n        </div>\n      </div>\n\t\t');var t=e.querySelector(".media__thumbnail"),n=e.querySelector(".media__heart");return e.addEventListener("click",(function(){var e=c(this);K(e)})),n.addEventListener("click",(function(t){ue(e),t.stopPropagation()})),e.addEventListener("keydown",(function(e){if(" "!==e.key&&"Enter"!==e.key)return!1;var r=c(this);e.target===n?ue(this):e.target===t&&K(r),e.preventDefault()})),e}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._media=t}var t,n;return t=e,(n=[{key:"create",value:function(){var e=document.createElement("article");e.className="media",e.innerHTML='\n      <video\n        class="media__thumbnail"\n        src="assets/thumbnails/'.concat(this._media.folder,"/").concat(this._media.video,'"\n        muted="true"\n      ></video>\n\t\t\t<div class="media__desc">\n\t\t\t\t<h2 class="media__name" tabindex="0">').concat(this._media.title,'</h2>\n\n\t\t\t\t<div class="media__likes">\n          <span class="media__counter">').concat(this._media.likes,'</span>\n          <div\n            class="media__heart media__heart--empty"\n            role="button"\n            aria-label="likes"\n            tabindex="0"\n          ></div>\n        </div>\n\t\t\t</div>\n\t\t');var t=e.querySelector(".media__thumbnail"),n=e.querySelector(".media__heart"),r=e.querySelector("video");return e.addEventListener("click",(function(){var e=c(this);K(e)})),n.addEventListener("click",(function(t){ue(e),t.stopPropagation()})),e.addEventListener("keydown",(function(e){if(" "!==e.key&&"Enter"!==e.key)return!1;var r=c(this);e.target===n?ue(this):e.target===t&&K(r),e.preventDefault()})),r.addEventListener("mouseenter",(function(){r.play()})),r.addEventListener("mouseleave",(function(){r.pause()})),r.addEventListener("focus",(function(){r.play()})),r.addEventListener("blur",(function(){r.pause()})),e}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return t&&Z(e.prototype,t),n&&Z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var G=F((function e(t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"image"===n?new U(t):"video"===n?new z(t):void console.error("Unknown type format")}));function J(){var e=document.querySelector("body"),t=document.querySelector("main"),n=document.querySelector(".modal"),r=document.querySelector(".overlay");n.setAttribute("aria-hidden","true"),r.setAttribute("aria-hidden","true"),t.setAttribute("aria-hidden","false"),e.classList.remove("no-scroll")}function Q(e){var t={first:document.querySelector("input[name=first]"),last:document.querySelector("input[name=last]"),email:document.querySelector("input[name=email]"),message:document.querySelector("textarea[name=message]")};console.log("Prénom : ".concat(t.first.value),"\nNom : ".concat(t.last.value),"\nEmail : ".concat(t.email.value),"\nMessage : ".concat(t.message.value)),e.preventDefault(),J()}const V=function(e){var t=document.querySelector(".modal"),n=document.querySelector(".modal__button"),r=document.querySelector(".modal__close");document.querySelector("#modal__header-name").innerHTML=e,document.querySelector("#modal__title").setAttribute("aria-label","Contact me ".concat(e)),n.addEventListener("click",(function(e){return Q(e)})),r.addEventListener("click",J),r.addEventListener("keydown",(function(e){if(" "!==e.key&&"Enter"!==e.key)return!1;J()})),t.addEventListener("keydown",(function(e){if("Tab"!==e.key)return!1;e.target===t&&e.shiftKey?(r.focus(),e.preventDefault()):e.target!==r||e.shiftKey||(t.focus(),e.preventDefault())})),t.addEventListener("keydown",(function(e){"Escape"===e.key&&J()}))},W=function(){var e=document.querySelector("body"),t=document.querySelector("main"),n=document.querySelector(".modal"),r=document.querySelector(".overlay");n.setAttribute("aria-hidden","false"),r.setAttribute("aria-hidden","false"),t.setAttribute("aria-hidden","true"),e.classList.add("no-scroll"),n.focus()};function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Y,$,ee=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._photographer=t}var t,n;return t=e,(n=[{key:"create",value:function(){var e=document.createElement("section");return e.className="photograph-banner",e.innerHTML='\n\t\t\t<div class="photograph-banner__section photograph-banner__info">\n\t\t\t\t<h1 class="photograph-banner__name" tabindex="0">'.concat(this._photographer.name,'</h1>\n        <div tabindex="0">\n          <p class="photograph-banner__location">\n            ').concat(this._photographer.city,", ").concat(this._photographer.country,'\n          </p>\n          <p class="photograph-banner__tagline">').concat(this._photographer.tagline,'</p>\n        </div>\n\t\t\t</div>\n\t\t\t<div class="photograph-banner__section">\n\t\t\t\t<button class="contact_button btn-primary" tabindex="0">Contactez-moi</button>\n\t\t\t</div>\n\t\t\t<div class="photograph-banner__section photograph-banner__photo">\n\t\t\t\t<img\n          src="assets/photographers/').concat(this._photographer.portrait,'"\n          alt="photographer"\n          height="400"\n          tabindex="0"\n        />\n\t\t\t</div>\n\t\t'),e.querySelector(".contact_button").addEventListener("click",W),e}}])&&X(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function te(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function ne(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){te(i,r,o,a,c,"next",e)}function c(e){te(i,r,o,a,c,"throw",e)}a(void 0)}))}}var re=[],oe={};function ie(e){return ae.apply(this,arguments)}function ae(){return ae=ne(regeneratorRuntime.mark((function e(t){var n,r,o,i,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.querySelector(".photograph-banner"),r=document.querySelector(".medias"),o=new T(t.photographer),i=new ee(o).create(),n.parentElement.replaceChild(i,n),t.medias.forEach((function(e){var t=e.image?"image":"video",n=new q(e,t),o=new G(n,t).create();oe[n.id]=o,r.appendChild(o)})),a=t.medias.reduce((function(e,t){return e+t.likes}),0),(c=document.querySelector(".insert")).className="insert",c.setAttribute("tabindex","0"),c.innerHTML='\n\t\t<p class="insert__likes">'.concat(a,'</p>\n\t\t<p class="insert__price">').concat(t.photographer.price,"€ / jour</p>\n\t");case 11:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function ce(){return(ce=ne(regeneratorRuntime.mark((function e(){var t,n,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=parseInt(new URL(document.location).searchParams.get("id")),e.next=3,r.getMedias(t);case 3:ie(Y=e.sent),V(Y.photographer.name),I(Y.medias,Y.photographer.name),n=document.querySelector(".dropdown__toggle"),o=document.querySelector(".dropdown__menu"),i=document.querySelectorAll(".dropdown__item"),n.addEventListener("click",se),n.addEventListener("keydown",(function(e){if(" "!==e.key&&"Enter"!==e.key)return!1;se(),document.querySelector(".dropdown__item").focus(),e.preventDefault()})),i.forEach((function(e){return e.addEventListener("click",(function(){le(e.getAttribute("data-sort")),se(),document.querySelector(".dropdown__toggle").innerHTML=e.innerHTML,n.focus()}))})),document.querySelector(".dropdown__item:last-child").addEventListener("keydown",(function(e){"Tab"!==e.key||e.shiftKey||se()})),o.addEventListener("keydown",(function(e){if("ArrowUp"!==e.key&&"ArrowDown"!==e.key)return!1;var t=u(e.target,i);"ArrowUp"===e.key?t--:"ArrowDown"===e.key&&t++,t=s(t,0,i.length-1),i[t].focus(),e.preventDefault()})),o.addEventListener("keydown",(function(e){"Escape"===e.key&&se()}));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){var t=e.querySelector(".media__heart"),n=e.querySelector(".media__counter"),r=document.querySelector(".insert p"),o=parseInt(n.innerHTML),i=parseInt(r.innerHTML);t.classList.contains("media__heart--empty")?(t.classList.remove("media__heart--empty"),n.textContent=o+1,r.textContent=i+1):(t.classList.add("media__heart--empty"),n.textContent=o-1,r.textContent=i-1)}function se(){var e=document.querySelector(".dropdown"),t=document.querySelector(".dropdown__toggle"),n=document.querySelector(".dropdown__menu");t.classList.contains("hidden")?(t.classList.remove("hidden"),n.classList.add("hidden"),t.setAttribute("aria-expended","false"),e.classList.remove("expanded")):(t.classList.add("hidden"),n.classList.remove("hidden"),t.setAttribute("aria-expended","true"),e.classList.add("expanded"))}function le(e){var t=document.querySelector(".medias"),n=de();n.sort((function(t,n){return t[e]<n[e]?-1:t[e]>n[e]?1:0})),"title"!==e&&n.reverse(),n.forEach((function(e){return t.appendChild(oe[e.id])}))}function de(){return 0===re.length&&Y.medias.forEach((function(e){var t=e.image?"image":"video";re.push(new q(e,t))})),re}function fe(){return void 0===$&&($=new T(Y.photographer)),$}!function(){ce.apply(this,arguments)}()})();