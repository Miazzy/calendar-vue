!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e){function r(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=u[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(i(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(i(r.parts[o]));u[r.id]={id:r.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,r,n=document.querySelector("style["+y+'~="'+t.id+'"]');if(n){if(h)return v;n.parentNode.removeChild(n)}if(b){var i=p++;n=f||(f=o()),e=a.bind(null,n,i,!1),r=a.bind(null,n,i,!0)}else n=o(),e=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function a(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var r=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),g.ssrId&&t.setAttribute(y,e.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(10),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},g=null,y="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r,o){h=r,g=o||{};var i=l(t,e);return n(i),function(e){for(var r=[],o=0;o<i.length;o++){var a=i[o],s=u[a.id];s.refs--,r.push(s)}e?(i=l(t,e),n(i)):i=[];for(var o=0;o<r.length;o++){var s=r[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,r,n,o,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId=o);var u;if(i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):n&&(u=n),u){var d=l.functional,f=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(t,e){return u.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:a,exports:s,options:l}}},function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var o=r(11),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.a={name:"vue-calendar-ui",props:{sundayStart:{type:Boolean,default:!1},titleColor:{type:String,default:"#333333"},weeklabelColor:{type:String,default:"#9da5b1"},arrowColor:{type:String,default:"#4b7df6"},itembgColor:{type:String,default:"#fff"},itemlabelColor:{type:String,default:"#333333"},crrentdaybgColor:{type:String,default:"#4b7df6"},crrentdaylabelColor:{type:String,default:"#fff"},clickdaybgColor:{type:String,default:"rgba(51, 51, 51,0.8)"},clickdaylabelColor:{type:String,default:"#fff"},hoverbgColor:{type:String,default:"#4b7df6"},hoverlabelColor:{type:String,default:"#fff"},prevColor:{type:String,default:"#cccccc"},nextColor:{type:String,default:"#cccccc"},markArr:{type:Array,default:function(){return[]}}},data:function(){return{title:"",today:new Date,clickDay:null,labelArrBackup:["一","二","三","四","五","六"],labelArr:["一","二","三","四","五","六"],arrList:[],mouseIndex:null}},watch:{markArr:function(){this.initMarkContent()}},created:function(){var t=this.sundayStart;o.a.sundayStart=t,this.labelArr=t?["日"].concat(n(this.labelArrBackup)):[].concat(n(this.labelArrBackup),["日"]),this.today=o.a.strToDateObj(this.today),this.getList()},filters:{formatDate:function(t){return t.getFullYear()+"年-"+(t.getMonth()+1)+"月"}},methods:{getList:function(){this.arrList=o.a.getMonthList(this.today),this.initMarkContent()},initMarkContent:function(){var t=this;this.markArr.forEach(function(e){var r=t.arrList.find(function(t){return t.date===e.date});r&&Object.assign(r,e,{mark:!0})})},handlePrevAndNexMonth:function(t){var e=this.today;this.today=o.a.resetprevOrNextDateObj(e,t),this.$emit("onchangemonth",this.today),this.getList()},jumpToMonth:function(t){this.today=o.a.strToDateObj(t),this.getList()},showPopover:function(t){this.$SHOW_CV_POPOVER(t)},handleClickDate:function(t){var e=(i({},t),t.date);this.clickDay=e,"current"!=t.whitchMonth&&this.jumpToMonth(e),this.$emit("onclickdate",t)}}}},function(t,e,r){"use strict";e.a={name:"popover",data:function(){return{visible:!1,obj:{}}},methods:{close:function(){var t=this;this.visible=!1,document.removeEventListener("keyup",this.keyClose),"function"==typeof this.onClose&&this.$nextTick(function(){t.onClose()})},keyClose:function(t){27==t.keyCode&&this.close()}},mounted:function(){document.addEventListener("keyup",this.keyClose)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),o=r(13),i=function(t){t.use(o.a),t.component(n.a.name,n.a)};e.default=i},function(t,e,r){"use strict";function n(t){r(7)}var o=r(3),i=r(12),a=r(2),s=n,c=a(o.a,i.a,!1,s,null,null);e.a=c.exports},function(t,e,r){var n=r(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1)("90725bd6",n,!0,{})},function(t,e,r){e=t.exports=r(0)(!1),e.i(r(9),""),e.push([t.i,"",""])},function(t,e,r){e=t.exports=r(0)(!1),e.push([t.i,".vue-calendar-ui,.vue-calendar-ui *,body,html{margin:0;padding:0;list-style:none}.vue-calendar-ui{width:100%;height:100%;min-width:460px;min-height:394px}.cv-controlBox{width:100%;height:56px;line-height:56px;padding:0 20px;box-sizing:border-box;background-color:#f5f7fa;position:relative;text-align:center}.cv-arrowLeft{width:12px;height:12px;position:absolute;left:20px;top:21px;border-top:2px solid #4b7df6;border-left:2px solid #4b7df6;transform:rotate(-45deg);cursor:pointer}.cv-title{font-size:18px;color:#333}.cv-arrowRight{width:12px;height:12px;position:absolute;right:20px;top:21px;border-top:2px solid #4b7df6;border-right:2px solid #4b7df6;transform:rotate(45deg);cursor:pointer}.cv-contentBox{padding-bottom:30px;border:1px solid #f5f7fa}.cv-contentBox,.cv-top{float:left;width:100%;box-sizing:border-box}.cv-top{margin-top:30px;font-size:16px;color:#9da5b1;padding:0 2%}.cv-top .cv-label{float:left;width:14.28571428%;text-align:center;line-height:1}.cv-main{float:left;width:100%;padding:0 2%;box-sizing:border-box}.cv-item{float:left;width:14.28571428%;text-align:center;line-height:1;margin-top:22px;position:relative}.cv-date{display:inline-block;width:30px;height:30px;line-height:30px;border-radius:50%;font-size:14px;color:#333;cursor:pointer;position:relative}.cv-next .cv-date,.cv-prev .cv-date{color:#ccc}.cv-click-Box{position:absolute;width:100%;height:100%;left:0;top:0}.cv-date:hover,.cv-today{background-color:#4b7df6;color:#fff}.cv-circle{position:absolute;width:6px;height:6px;left:50%;bottom:-8px;margin-left:-3px;background-color:#4b7df6;border-radius:50%}.cv-circle-label{background-color:transparent!important;font-size:12px;width:100%;height:auto;line-height:normal;white-space:nowrap;text-overflow:ellipsis;text-align:center;overflow:hidden;left:0;margin-left:0;bottom:-15px}",""])},function(t,e){t.exports=function(t,e){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],c=i[2],l=i[3],u={id:t+":"+o,css:s,media:c,sourceMap:l};n[a]?n[a].parts.push(u):r.push(n[a]={id:a,parts:[u]})}return r}},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var i;e.a=(i={sundayStart:!1,MonthDays:0,startDay:!1,endDay:!1},n(i,"sundayStart",!1),n(i,"arrayPreNum",0),n(i,"getMonthDays",function(t){var e=t.getFullYear(),r=t.getMonth()+1;return new Date(e,r,0).getDate()}),n(i,"init",function(t){var e=t.getFullYear(),r=t.getMonth();this.startDay=new Date(e,r,1).getDay();var n=new Date(e,r+1,0);return this.MonthDays=n.getDate(),this.endDay=n.getDay(),this.setArrayPreNum(),t}),n(i,"strToDateObj",function(t){if("string"==typeof t){t=t.replace(/-/g,"/"),t=new Date(t);if(!(t instanceof Date&&!isNaN(t.getTime())))throw"日期格式错误，格式为:YYYY-MM-DD"}return t}),n(i,"setArrayPreNum",function(){var t=this.startDay;this.arrayPreNum=this.sundayStart?0===t?7:t:0===t?6:t-1}),n(i,"resetprevOrNextDateObj",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"next",r=this.dateFormatStr(t).split("/"),n=parseInt(r[0]),o=parseInt(r[1]),i=n,a=void 0;"next"===e?13==(a=o+1)&&(i+=1,a=1):0==(a=o-1)&&(i-=1,a=12);var s=i+"/"+a+"/01";return new Date(s)}),n(i,"getPrevMonthList",function(t){for(var e=[],r=this.arrayPreNum,n=this.resetprevOrNextDateObj(t,"prev"),o=this.getMonthDays(n)-r+1,i=0;i<r;i++){var a=o+i,s=n.getFullYear()+"/"+(n.getMonth()+1)+"/"+a;e.push({id:a,date:s,isToday:!1,whitchMonth:"prev"})}return e}),n(i,"getRightArr",function(t){for(var e=[],r=this.resetprevOrNextDateObj(t,"next"),n=this.MonthDays+this.arrayPreNum,o=7-n%7,i=0;i<o;i++){var a=i+1,s=r.getFullYear()+"/"+(r.getMonth()+1)+"/"+a;e.push({id:a,date:s,isToday:!1,whitchMonth:"next"})}return e}),n(i,"dateFormatStr",function(t){return t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()}),n(i,"getThisMonthList",function(t){for(var e=[],r=this.MonthDays,n=t.getFullYear(),o=t.getMonth()+1,i=this.dateFormatStr(new Date),a=1;a<=r;a++){var s=n+"/"+o+"/"+a;e.push({id:a,date:s,isToday:i===s,whitchMonth:"current"})}return e}),n(i,"getMonthList",function(t){return t=this.init(t),[].concat(o(this.getPrevMonthList(t)),o(this.getThisMonthList(t)),o(this.getRightArr(t)))}),i)},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-calendar-ui"},[r("div",{staticClass:"cv-controlBox"},[r("div",{staticClass:"cv-arrowLeft",style:{"border-color":t.arrowColor},on:{click:function(e){return t.handlePrevAndNexMonth("prev")}}}),t._v(" "),r("h3",{staticClass:"cv-title",style:{color:t.titleColor}},[t._v("\n      "+t._s(t._f("formatDate")(t.today))+"\n    ")]),t._v(" "),r("div",{staticClass:"cv-arrowRight",style:{"border-color":t.arrowColor},on:{click:function(e){return t.handlePrevAndNexMonth("next")}}})]),t._v(" "),r("div",{staticClass:"cv-contentBox"},[r("ul",{staticClass:"cv-top",style:{color:t.weeklabelColor}},t._l(t.labelArr,function(e,n){return r("li",{key:n,staticClass:"cv-label"},[t._v("\n        "+t._s(e)+"\n      ")])}),0),t._v(" "),r("ul",{staticClass:"cv-main"},t._l(t.arrList,function(e,n){return r("li",{key:n,staticClass:"cv-item",class:{"cv-prev":"prev"===e.whitchMonth,"cv-next":"next"===e.whitchMonth}},[r("div",{staticClass:"cv-date",class:{"cv-today":e.isToday},style:{"background-color":e.isToday?t.crrentdaybgColor:e.date===t.clickDay?t.clickdaybgColor:n===t.mouseIndex?t.hoverbgColor:t.itembgColor,color:e.isToday?t.crrentdaylabelColor:e.date===t.clickDay?t.clickdaylabelColor:n===t.mouseIndex?t.hoverlabelColor:"prev"===e.whitchMonth?t.prevColor:"next"===e.whitchMonth?t.nextColor:t.itemlabelColor},on:{mouseenter:function(e){t.mouseIndex=n},mouseleave:function(e){t.mouseIndex=null},click:function(r){return t.handleClickDate(e)}}},[t._v("\n          "+t._s(e.id)+"\n          "),e.mark&&e.userPopover?r("span",{staticClass:"cv-click-Box",on:{click:function(r){return t.showPopover(e)}}}):t._e()]),t._v(" "),e.mark?r("span",{staticClass:"cv-circle",class:{"cv-circle-label":e.isLabel},style:{"background-color":e.color,color:e.color}},[t._v("\n          "+t._s(e.isLabel?e.label:null)+"\n        ")]):t._e()])}),0)])])},o=[],i={render:n,staticRenderFns:o};e.a=i},function(t,e,r){"use strict";var n=r(14),o=void 0,i=function t(e){e.prototype.$SHOW_CV_POPOVER=function(r){var i=e.extend(n.a),a={onClose:function(){t.close()}},s=new i({data:a});o=s.$mount(document.createElement("div")),document.body.appendChild(o.$el),o.obj=r,o.visible=!0}};i.close=function(){o&&o.$el&&document.body.removeChild(o.$el)},e.a=i},function(t,e,r){"use strict";function n(t){r(15)}var o=r(4),i=r(17),a=r(2),s=n,c=a(o.a,i.a,!1,s,null,null);e.a=c.exports},function(t,e,r){var n=r(16);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1)("ee52abd6",n,!0,{})},function(t,e,r){e=t.exports=r(0)(!1),e.push([t.i,'body,html{width:100%;height:100%;padding:0;margin:0}.cv-popover-ivContainer{position:fixed;left:0;top:0;bottom:0;right:0;background:rgba(0,0,0,.7);transition:opacity .35s;text-align:center;z-index:19950111}.cv-popover-ivContainer:before{content:"";display:inline-block;height:100%;vertical-align:middle}.cv-popover-contentBox{padding:20px;border-radius:5px;display:inline-block;vertical-align:middle;background-color:#fff}.cv-popover-ivCloseBtn{position:absolute;right:0;top:0;opacity:.8;font-size:3em;padding:0 .3em;color:#fff;background:transparent;border:0;text-shadow:0 0 2px #000;cursor:pointer;outline:none}.cv-popover-ivCloseBtn:hover{opacity:1}.fade-enter-active,.fade-leave-active{transition:all .3s}.fade-enter,.fade-leave-to{opacity:0}',""])},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[t.visible?r("div",{staticClass:"cv-popover-ivContainer",on:{keyup:t.close}},[r("button",{staticClass:"cv-popover-ivCloseBtn",on:{click:t.close}},[t._v("×")]),t._v(" "),r("div",{staticClass:"cv-popover-contentBox"},[t.obj.renderHtml?r("div",{domProps:{innerHTML:t._s(t.obj.markContent)}}):r("p",[t._v(t._s(t.obj.markContent))])])]):t._e()])},o=[],i={render:n,staticRenderFns:o};e.a=i}])});
//# sourceMappingURL=vue-calendar-ui.js.map