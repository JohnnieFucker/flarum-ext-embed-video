module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}({11:function(e,t,n){"use strict";n.r(t);var i=n(2);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o)},2:function(e,t){app.initializers.add("johnniefucker-embed-video",(function(e){e.extensionData.for("johnniefucker-embed-video").registerSetting({setting:"johnniefucker-embed-video.admin.settings.video_type.flv",label:e.translator.trans("johnniefucker-embed-video.admin.settings.video_types.flv"),type:"boolean"}).registerSetting({setting:"johnniefucker-embed-video.admin.settings.video_type.hls",label:e.translator.trans("johnniefucker-embed-video.admin.settings.video_types.hls"),type:"boolean"}).registerSetting((function(){return[m(".Form-group",[m("label",e.translator.trans("johnniefucker-embed-video.admin.settings.options.theme")),m("input",{type:"text",class:"FormControl",bidi:this.setting("johnniefucker-embed-video.admin.settings.options.theme"),placeholder:"#b7daff"})])]})).registerSetting({setting:"johnniefucker-embed-video.admin.settings.options.logo",label:e.translator.trans("johnniefucker-embed-video.admin.settings.options.logo"),type:"text"}).registerSetting({setting:"johnniefucker-embed-video.admin.settings.options.lang",label:e.translator.trans("johnniefucker-embed-video.admin.settings.options.lang"),type:"select",options:{en:"English","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional"},default:"en"}).registerSetting({setting:"johnniefucker-embed-video.admin.settings.options.airplay",label:e.translator.trans("johnniefucker-embed-video.admin.settings.options.airplay"),type:"boolean"}).registerSetting({setting:"johnniefucker-embed-video.admin.settings.options.hotkey",label:e.translator.trans("johnniefucker-embed-video.admin.settings.options.hotkey"),type:"boolean"}).registerSetting({setting:"johnniefucker-embed-video.admin.settings.options.quality_switching",label:e.translator.trans("johnniefucker-embed-video.admin.settings.options.quality_switching"),type:"boolean"}).registerPermission({icon:"fas fa-tag",label:e.translator.trans("johnniefucker-embed-video.admin.settings.permissions.can_create_video_player"),permission:"johnniefucker.embedvideo.create"},"start",95)}))}});
//# sourceMappingURL=admin.js.map