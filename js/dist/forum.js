module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,r){t.exports=r(9)},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/Select"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=w(i,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function d(){}function f(){}function p(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(L([])));y&&y!==e&&r.call(y,o)&&(h=y);var v=p.prototype=d.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,u){var c=l(t[o],t,a);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,u)}))}u(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=v.constructor=p,p.constructor=f,f.displayName=u(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new g(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(v),u(v,i,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}}r.r(e);var a=r(2),i=r.n(a),u=r(0),c=r.n(u),l=r(3),s=r(1),d=r.n(s),f=r(4),p=r.n(f),h=r(5),y=r.n(h),v={url:"https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.26.0/DPlayer.min.js",integrity:"sha512-1t2U1/0xGhBZAriD+/9llOhjPs5nFBDZ7KbnHB4SGwAUPrzyS+02Kus1cz0exk5eMyXxwfHxj/1JLuie/p6xXA==",loaded:!1},b=[{attributeName:"Dash",url:"https://cdnjs.cloudflare.com/ajax/libs/dashjs/3.2.1/dash.all.min.js",integrity:"sha512-K8ychE2luu1+zrt4MiDhr8L8B6zPB+x/EofroMF6LygAn+Oh/EadU18WgChXuOeCAan0y5/IQGS06izToR8xnQ==",loaded:!1,window:window.dashjs},{attributeName:"Flv",url:"https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.5.0/flv.min.js",integrity:"sha512-YY0CZ0d6Wavco6rNJERWAoUJX9jCnRlcwK1MtKon8IzhT189p6rgX7f6ikViiSsv3PLYozgsVJDzdxiVz3IXjw==",loaded:!1,window:window.FlvJs},{attributeName:"Hls",url:"https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.14.17/hls.min.js",integrity:"sha512-t0GMHzxvVdMw1p8oSntdvFKikEx9Pwus6G2PP3U7/GQ3+Id+D9sYgnck0etYk0CBK5gdk8BJBnQYx7PIT1PJ0Q==",loaded:!1,window:window.Hls},{attributeName:"Shaka",url:"https://cdn.jsdelivr.net/npm/mux.js@5.10.0/dist/mux.min.js",integrity:"sha384-kjFPBZPljNAGT06KwyFzCr2uA43QbzuBDFGGrAPWZZd/UmeTEdhTtlXCR4htNQ+t",loaded:!1,window:window.muxjs},{attributeName:"Shaka",url:"https://cdnjs.cloudflare.com/ajax/libs/shaka-player/2.5.20/shaka-player.compiled.js",integrity:"sha512-00YS/8eMlr1+sVSq4nobuTGCetIvhqsi3m6UoRwPnasLapOOIAcyP+nxPdhrois6CywC9tcPkNCCICM6MPh/1Q==",loaded:!1,window:window.shaka},{attributeName:"WebTorrent",url:"https://cdnjs.cloudflare.com/ajax/libs/webtorrent/0.115.3/webtorrent.min.js",integrity:"sha512-1ReZ6tk2ccA3Zrj0KfTF0isjlah4G3M7rBZlXzHxPgtEMx+x1UOd5DvcPypXbk48FbFFXYmfrUdPsYXHy9oG+A==",loaded:!1,window:window.WebTorrent}];function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=r(6),x=r.n(w),j=r(7),P=r.n(j),L=r(8),_=r.n(L),E=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,g(e,r);var o=n.prototype;return o.oninit=function(e){var r=this;t.prototype.oninit.call(this,e),this.videoUrl="",this.videoType="normal",this.isLive=!1,this.videoOptions={normal:app.translator.trans("nearata-embed-video.forum.modal.video_types.normal")},b.forEach((function(t){if(app.forum.attribute("embedVideo"+t.attributeName)){var e=t.attributeName.toLowerCase();r.videoOptions[e]=app.translator.trans("nearata-embed-video.forum.modal.video_types."+e)}}))},o.className=function(){return"EmbedVideoModal Modal--small"},o.title=function(){return app.translator.trans("nearata-embed-video.forum.modal.title")},o.content=function(){var t=this;return[m(".Modal-body",[m(".Form",[m(".Form-group",[m("label",app.translator.trans("nearata-embed-video.forum.modal.video_url_label")),m("input",{type:"name",name:"url",class:"FormControl",disabled:this.disabled,oninput:function(e){return t.videoUrl=e.target.value},autocomplete:"off",placeholder:app.translator.trans("nearata-embed-video.forum.modal.video_url_placeholder")})]),m(".Form-group",[m("label",app.translator.trans("nearata-embed-video.forum.modal.video_type_label")),m(P.a,{options:this.videoOptions,value:this.videoType,onchange:function(e){return t.videoType=e}})]),m(".Form-group",[m(_.a,{onchange:function(e){return t.isLive=e},state:this.isLive},app.translator.trans("nearata-embed-video.forum.modal.live_mode"))]),m(".Form-group",[m(d.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("nearata-embed-video.forum.modal.submit_button"))])])]),m(".Modal-footer",[m("span",["Powered by ",m("a",{href:"https://github.com/DIYgod/DPlayer",target:"_blank"},"DPlayer")])])]},o.onsubmit=function(t){t.preventDefault();var e=window.crypto.getRandomValues(new Uint16Array(1))[0];this.attrs.editor.insertAtCursor('[embed-video id="'+e+'" url="'+this.videoUrl+'" type="'+this.videoType+'" live="'+this.isLive+'"]'),this.hide()},n}(x.a);function O(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}c.a.initializers.add("nearata-embed-video",(function(){Object(l.extend)(y.a.prototype,"controlItems",(function(t){if(c.a.forum.attribute("embedVideoCreate")){var e=this.attrs.composer.editor;t.add("nearataEmbedVideo",m(d.a,{icon:"fas fa-cat",class:"Button Button--icon",onclick:function(){return c.a.modal.show(E,{editor:e})},oncreate:function(t){return $(t.dom).tooltip()}},c.a.translator.trans("nearata-embed-video.forum.button_tooltip_title")))}}));var t=function(t){return new Promise((function(e){var r=document.createElement("script");r.src=t.url,t.integrity&&(r.integrity=t.integrity,r.crossOrigin="anonymous"),r.async=!0,r.onload=e,document.body.appendChild(r)}))};Object(l.extend)(p.a.prototype,"oncreate",(function(){var e=this.element.querySelectorAll(".dplayer-container");e.length&&new Promise((function(e){if(v.loaded)var r=setInterval(o(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.DPlayer&&(clearInterval(r),e());case 1:case"end":return t.stop()}}),t)}))),1e3);else v.loaded=!0,t(v).then((function(){return e()}))})).then((function(){return new Promise((function(e){new Promise((function(e){b.forEach((function(e){if(e.loaded)var r=setInterval((function(){e.window&&clearInterval(r)}),1e3);c.a.forum.attribute("embedVideo"+e.attributeName)&&!e.loaded&&(e.loaded=!0,t(e))})),e()})).then((function(){return e()}))}))})).then((function(){return function(t){for(var e,r=O(t);!(e=r()).done;){var n=e.value,o=n.dataset.url,a=n.dataset.type,i=n.dataset.live;new DPlayer({container:n,live:"true"===i,theme:c.a.forum.attribute("embedVideoTheme")||"#b7daff",logo:c.a.forum.attribute("embedVideoLogo")||"",lang:c.a.forum.attribute("embedVideoLang")||"",airplay:c.a.forum.attribute("embedVideoAirplay")||!1,hotkey:c.a.forum.attribute("embedVideoHotkey")||!1,video:{url:o,type:a,customType:{dash:function(t,e){window.dashjs.MediaPlayer().create().initialize(t,t.src,!1)},shaka:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){shaka.Player.isBrowserSupported()?new shaka.Player(t).load(t.src).then((function(){})).catch((function(t){return console.error(t)})):console.error("Error: Shaka is not supported.")}))}}})}}(e)}))}))}))}]);
//# sourceMappingURL=forum.js.map