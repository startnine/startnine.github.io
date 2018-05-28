/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
!function(t,e){"use strict";"function"==typeof define&&define.amd?define([],function(){return t.Waves=e.call(t),t.Waves}):"object"==typeof exports?module.exports=e.call(t):t.Waves=e.call(t)}("object"==typeof global?global:this,function(){"use strict";function t(t){return null!==t&&t===t.window}function e(e){return t(e)?e:9===e.nodeType&&e.defaultView}function n(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function o(t){return n(t)&&t.nodeType>0}function a(t){var e=f.call(t);return"[object String]"===e?d(t):n(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e)&&t.hasOwnProperty("length")?t:o(t)?[t]:[]}function i(t){var n,o,a={top:0,left:0},i=t&&t.ownerDocument;return n=i.documentElement,void 0!==t.getBoundingClientRect&&(a=t.getBoundingClientRect()),o=e(i),{top:a.top+o.pageYOffset-n.clientTop,left:a.left+o.pageXOffset-n.clientLeft}}function r(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function s(t,e,n){if(n){n.classList.remove("waves-rippling");var o=n.getAttribute("data-x"),a=n.getAttribute("data-y"),i=n.getAttribute("data-scale"),s=n.getAttribute("data-translate"),u=350-(Date.now()-Number(n.getAttribute("data-hold")));u<0&&(u=0),"mousemove"===t.type&&(u=150);var c="mousemove"===t.type?2500:v.duration;setTimeout(function(){var t={top:a+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c+"ms","-moz-transition-duration":c+"ms","-o-transition-duration":c+"ms","transition-duration":c+"ms","-webkit-transform":i+" "+s,"-moz-transform":i+" "+s,"-ms-transform":i+" "+s,"-o-transform":i+" "+s,transform:i+" "+s};n.setAttribute("style",r(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c)},u)}}function u(t){if(!1===h.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;n.parentElement;){if(!(n instanceof SVGElement)&&n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function c(t){var e=u(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(h.registerEvent(t),"touchstart"===t.type&&v.delay){var n=!1,o=setTimeout(function(){o=null,v.show(t,e)},v.delay),a=function(a){o&&(clearTimeout(o),o=null,v.show(t,e)),n||(n=!0,v.hide(a,e)),r()},i=function(t){o&&(clearTimeout(o),o=null),a(t),r()};e.addEventListener("touchmove",i,!1),e.addEventListener("touchend",a,!1),e.addEventListener("touchcancel",a,!1);var r=function(){e.removeEventListener("touchmove",i),e.removeEventListener("touchend",a),e.removeEventListener("touchcancel",a)}}else v.show(t,e),m&&(e.addEventListener("touchend",v.hide,!1),e.addEventListener("touchcancel",v.hide,!1)),e.addEventListener("mouseup",v.hide,!1),e.addEventListener("mouseleave",v.hide,!1)}}var l=l||{},d=document.querySelectorAll.bind(document),f=Object.prototype.toString,m="ontouchstart"in window,v={duration:750,delay:200,show:function(t,e,n){if(2===t.button)return!1;e=e||this;var o=document.createElement("div");o.className="waves-ripple waves-rippling",e.appendChild(o);var a=i(e),s=0,u=0;"touches"in t&&t.touches.length?(s=t.touches[0].pageY-a.top,u=t.touches[0].pageX-a.left):(s=t.pageY-a.top,u=t.pageX-a.left),u=u>=0?u:0,s=s>=0?s:0;var c="scale("+e.clientWidth/100*3+")",l="translate(0,0)";n&&(l="translate("+n.x+"px, "+n.y+"px)"),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-x",u),o.setAttribute("data-y",s),o.setAttribute("data-scale",c),o.setAttribute("data-translate",l);var d={top:s+"px",left:u+"px"};o.classList.add("waves-notransition"),o.setAttribute("style",r(d)),o.classList.remove("waves-notransition"),d["-webkit-transform"]=c+" "+l,d["-moz-transform"]=c+" "+l,d["-ms-transform"]=c+" "+l,d["-o-transform"]=c+" "+l,d.transform=c+" "+l,d.opacity="1";var f="mousemove"===t.type?2500:v.duration;d["-webkit-transition-duration"]=f+"ms",d["-moz-transition-duration"]=f+"ms",d["-o-transition-duration"]=f+"ms",d["transition-duration"]=f+"ms",o.setAttribute("style",r(d))},hide:function(t,e){for(var n=(e=e||this).getElementsByClassName("waves-rippling"),o=0,a=n.length;o<a;o++)s(t,e,n[o]);m&&(e.removeEventListener("touchend",v.hide),e.removeEventListener("touchcancel",v.hide)),e.removeEventListener("mouseup",v.hide),e.removeEventListener("mouseleave",v.hide)}},p={input:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("i");n.className=t.className+" waves-input-wrapper",t.className="waves-button-input",e.replaceChild(n,t),n.appendChild(t);var o=window.getComputedStyle(t,null),a=o.color,i=o.backgroundColor;n.setAttribute("style","color:"+a+";background:"+i),t.setAttribute("style","background-color:rgba(0,0,0,0);")}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("i");e.replaceChild(n,t),n.appendChild(t)}}},h={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&h.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?h.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout(function(){h.touches&&(h.touches-=1)},500)}};return l.init=function(t){var e=document.body;"duration"in(t=t||{})&&(v.duration=t.duration),"delay"in t&&(v.delay=t.delay),m&&(e.addEventListener("touchstart",c,!1),e.addEventListener("touchcancel",h.registerEvent,!1),e.addEventListener("touchend",h.registerEvent,!1)),e.addEventListener("mousedown",c,!1)},l.attach=function(t,e){t=a(t),"[object Array]"===f.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var n,o,i=0,r=t.length;i<r;i++)o=(n=t[i]).tagName.toLowerCase(),-1!==["input","img"].indexOf(o)&&(p[o](n),n=n.parentElement),-1===n.className.indexOf("waves-effect")&&(n.className+=" waves-effect"+e)},l.ripple=function(t,e){var n=(t=a(t)).length;if(e=e||{},e.wait=e.wait||0,e.position=e.position||null,n)for(var o,r,s,u={},c=0,l={type:"mousedown",button:1};c<n;c++)if(o=t[c],r=e.position||{x:o.clientWidth/2,y:o.clientHeight/2},s=i(o),u.x=s.left+r.x,u.y=s.top+r.y,l.pageX=u.x,l.pageY=u.y,v.show(l,o),e.wait>=0&&null!==e.wait){var d={type:"mouseup",button:1};setTimeout(function(t,e){return function(){v.hide(t,e)}}(d,o),e.wait)}},l.calm=function(t){for(var e={type:"mouseup",button:1},n=0,o=(t=a(t)).length;n<o;n++)v.hide(e,t[n])},l.displayEffect=function(t){l.init(t)},l});

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-borderimage-cssgrid_cssgridlegacy-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?_.className.baseVal=n:_.className=n)}function i(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?i(o,t||n):o);return!1}function a(e,n){return!!~(""+e).indexOf(n)}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=u(b?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,i,l,a,f="modernizr",d=u("div"),c=p();if(parseInt(r,10))for(;r--;)l=u("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return s=u("style"),s.type="text/css",s.id="s"+f,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",a=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=a,_.offsetHeight):d.parentNode.removeChild(d),!!i}function g(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") {#modernizr {position: absolute;}}",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,o,s){function i(){d&&(delete T.style,delete T.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=g(e,o);if(!r(l,"undefined"))return l}for(var d,c,p,m,y,v=["modernizr","tspan","samp"];!T.style&&v.length;)d=!0,T.modElem=u(v.shift()),T.style=T.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],y=T.style[m],a(m,"-")&&(m=f(m)),T.style[m]!==t){if(s||r(o,"undefined"))return i(),"pfx"==n?m:!0;try{T.style[m]=o}catch(h){}if(T.style[m]!=y)return i(),"pfx"==n?m:!0}return i(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?y(a,n,o,s):(a=(e+" "+P.join(i+" ")+i).split(" "),l(a,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,b="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",P=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=P;var z=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=z;var E={elem:u("modernizr")};Modernizr._q.push(function(){delete E.elem});var T={style:E.elem.style};Modernizr._q.unshift(function(){delete T.style}),S.testAllProps=v,S.testAllProps=h,Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),Modernizr.addTest("borderimage",h("borderImage","url() 1",!0)),o(),s(C),delete S.addTest,delete S.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);

/*!
 * Tilt.js 1.1.19
 * https://github.com/gijsroge/tilt.js
 *
 * Copyright 2017 Gijs Rogé
 * Released under the MIT license
 * https://github.com/gijsroge/tilt.js/blob/master/LICENSE
 */
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=function(i,s){return void 0===s&&(s="undefined"!=typeof window?require("jquery"):require("jquery")(i)),t(s),s}:t(jQuery)}(function(t){return t.fn.tilt=function(i){var s=function(){this.ticking||(requestAnimationFrame(g.bind(this)),this.ticking=!0)},e=function(){var i=this;t(this).on("mousemove",o),t(this).on("mouseenter",a),this.settings.reset&&t(this).on("mouseleave",l),this.settings.glare&&t(window).on("resize",d.bind(i))},n=function(){var i=this;void 0!==this.timeout&&clearTimeout(this.timeout),t(this).css({transition:this.settings.speed+"ms "+this.settings.easing}),this.settings.glare&&this.glareElement.css({transition:"opacity "+this.settings.speed+"ms "+this.settings.easing}),this.timeout=setTimeout(function(){t(i).css({transition:""}),i.settings.glare&&i.glareElement.css({transition:""})},this.settings.speed)},a=function(i){this.ticking=!1,t(this).css({"will-change":"transform"}),n.call(this),t(this).trigger("tilt.mouseEnter")},r=function(i){return"undefined"==typeof i&&(i={pageX:t(this).offset().left+t(this).outerWidth()/2,pageY:t(this).offset().top+t(this).outerHeight()/2}),{x:i.pageX,y:i.pageY}},o=function(t){this.mousePositions=r(t),s.call(this)},l=function(){n.call(this),this.reset=!0,s.call(this),t(this).trigger("tilt.mouseLeave")},h=function(){var i=t(this).outerWidth(),s=t(this).outerHeight(),e=t(this).offset().left,n=t(this).offset().top,a=(this.mousePositions.x-e)/i,r=(this.mousePositions.y-n)/s,o=(this.settings.maxTilt/2-a*this.settings.maxTilt).toFixed(2),l=(r*this.settings.maxTilt-this.settings.maxTilt/2).toFixed(2),h=Math.atan2(this.mousePositions.x-(e+i/2),-(this.mousePositions.y-(n+s/2)))*(180/Math.PI);return{tiltX:o,tiltY:l,percentageX:100*a,percentageY:100*r,angle:h}},g=function(){return this.transforms=h.call(this),this.reset?(this.reset=!1,t(this).css("transform","perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg)"),void(this.settings.glare&&(this.glareElement.css("transform","rotate(180deg) translate(-50%, -50%)"),this.glareElement.css("opacity","0")))):(t(this).css("transform","perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.disableAxis?0:this.transforms.tiltY)+"deg) rotateY("+("y"===this.settings.disableAxis?0:this.transforms.tiltX)+"deg) scale3d("+this.settings.scale+","+this.settings.scale+","+this.settings.scale+")"),this.settings.glare&&(this.glareElement.css("transform","rotate("+this.transforms.angle+"deg) translate(-50%, -50%)"),this.glareElement.css("opacity",""+this.transforms.percentageY*this.settings.maxGlare/100)),t(this).trigger("change",[this.transforms]),void(this.ticking=!1))},c=function(){var i=this.settings.glarePrerender;if(i||t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),this.glareElementWrapper=t(this).find(".js-tilt-glare"),this.glareElement=t(this).find(".js-tilt-glare-inner"),!i){var s={position:"absolute",top:"0",left:"0",width:"100%",height:"100%"};this.glareElementWrapper.css(s).css({overflow:"hidden","pointer-events":"none"}),this.glareElement.css({position:"absolute",top:"50%",left:"50%","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:""+2*t(this).outerWidth(),height:""+2*t(this).outerWidth(),transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"})}},d=function(){this.glareElement.css({width:""+2*t(this).outerWidth(),height:""+2*t(this).outerWidth()})};return t.fn.tilt.destroy=function(){t(this).each(function(){t(this).find(".js-tilt-glare").remove(),t(this).css({"will-change":"",transform:""}),t(this).off("mousemove mouseenter mouseleave")})},t.fn.tilt.getValues=function(){var i=[];return t(this).each(function(){this.mousePositions=r.call(this),i.push(h.call(this))}),i},t.fn.tilt.reset=function(){t(this).each(function(){var i=this;this.mousePositions=r.call(this),this.settings=t(this).data("settings"),l.call(this),setTimeout(function(){i.reset=!1},this.settings.transition)})},this.each(function(){var s=this;this.settings=t.extend({maxTilt:t(this).is("[data-tilt-max]")?t(this).data("tilt-max"):20,perspective:t(this).is("[data-tilt-perspective]")?t(this).data("tilt-perspective"):300,easing:t(this).is("[data-tilt-easing]")?t(this).data("tilt-easing"):"cubic-bezier(.03,.98,.52,.99)",scale:t(this).is("[data-tilt-scale]")?t(this).data("tilt-scale"):"1",speed:t(this).is("[data-tilt-speed]")?t(this).data("tilt-speed"):"400",transition:!t(this).is("[data-tilt-transition]")||t(this).data("tilt-transition"),disableAxis:t(this).is("[data-tilt-disable-axis]")?t(this).data("tilt-disable-axis"):null,axis:t(this).is("[data-tilt-axis]")?t(this).data("tilt-axis"):null,reset:!t(this).is("[data-tilt-reset]")||t(this).data("tilt-reset"),glare:!!t(this).is("[data-tilt-glare]")&&t(this).data("tilt-glare"),maxGlare:t(this).is("[data-tilt-maxglare]")?t(this).data("tilt-maxglare"):1},i),null!==this.settings.axis&&(console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),this.settings.disableAxis=this.settings.axis),this.init=function(){t(s).data("settings",s.settings),s.settings.glare&&c.call(s),e.call(s)},this.init()})},t("[data-tilt]").tilt(),!0});

/* mousetrap v1.6.1 craig.is/killing/mice */
!function(e,t,n){function r(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function i(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return l[e.which]?l[e.which]:u[e.which]?u[e.which]:String.fromCharCode(e.which).toLowerCase()}function o(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function a(e,t){var n,r,i,a=[];for("+"===(n=e)?n=["+"]:n=(n=n.replace(/\+{2}/g,"+plus")).split("+"),i=0;i<n.length;++i)r=n[i],f[r]&&(r=f[r]),t&&"keypress"!=t&&p[r]&&(r=p[r],a.push("shift")),o(r)&&a.push(r);if(n=r,!(i=t)){if(!s)for(var c in s={},l)95<c&&112>c||l.hasOwnProperty(c)&&(s[l[c]]=c);i=s[n]?"keydown":"keypress"}return"keypress"==i&&a.length&&(i="keydown"),{key:r,modifiers:a,action:i}}function c(e){function n(e){e=e||{};var t,n=!1;for(t in d)e[t]?n=!0:d[t]=0;n||(k=!1)}function s(e,t,n,r,i,a){var c,s,l=[],u=n.type;if(!f._callbacks[e])return[];for("keyup"==u&&o(e)&&(t=[e]),c=0;c<f._callbacks[e].length;++c)if(s=f._callbacks[e][c],(r||!s.seq||d[s.seq]==s.level)&&u==s.action){var p;(p="keypress"==u&&!n.metaKey&&!n.ctrlKey)||(p=s.modifiers,p=t.sort().join(",")===p.sort().join(",")),p&&(p=r&&s.seq==r&&s.level==a,(!r&&s.combo==i||p)&&f._callbacks[e].splice(c,1),l.push(s))}return l}function l(e,t,n,r){f.stopCallback(t,t.target||t.srcElement,n,r)||!1!==e(t,n)||(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation?t.stopPropagation():t.cancelBubble=!0)}function u(e){"number"!=typeof e.which&&(e.which=e.keyCode);var t,n,r=i(e);r&&("keyup"==e.type&&y===r?y=!1:f.handleKey(r,(n=[],(t=e).shiftKey&&n.push("shift"),t.altKey&&n.push("alt"),t.ctrlKey&&n.push("ctrl"),t.metaKey&&n.push("meta"),n),e))}function p(e,t,r,o,c){f._directMap[e+":"+r]=t;var u=(e=e.replace(/\s+/g," ")).split(" ");1<u.length?function(e,t,r,o){function c(t){return function(){k=t,++d[e],clearTimeout(h),h=setTimeout(n,1e3)}}function s(t){l(r,t,e),"keyup"!==o&&(y=i(t)),setTimeout(n,10)}for(var u=d[e]=0;u<t.length;++u){var f=u+1===t.length?s:c(o||a(t[u+1]).action);p(t[u],f,o,e,u)}}(e,u,t,r):(r=a(e,r),f._callbacks[r.key]=f._callbacks[r.key]||[],s(r.key,r.modifiers,{type:r.action},o,e,c),f._callbacks[r.key][o?"unshift":"push"]({callback:t,modifiers:r.modifiers,action:r.action,seq:o,level:c,combo:e}))}var f=this;if(e=e||t,!(f instanceof c))return new c(e);f.target=e,f._callbacks={},f._directMap={};var h,d={},y=!1,m=!1,k=!1;f._handleKey=function(e,t,r){var i,a=s(e,t,r);t={};var c=0,u=!1;for(i=0;i<a.length;++i)a[i].seq&&(c=Math.max(c,a[i].level));for(i=0;i<a.length;++i)a[i].seq?a[i].level==c&&(u=!0,t[a[i].seq]=1,l(a[i].callback,r,a[i].combo,a[i].seq)):u||l(a[i].callback,r,a[i].combo);a="keypress"==r.type&&m,r.type!=k||o(e)||a||n(t),m=u&&"keydown"==r.type},f._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)p(e[r],t,n)},r(e,"keypress",u),r(e,"keydown",u),r(e,"keyup",u)}if(e){var s,l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},u={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},p={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},f={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"};for(n=1;20>n;++n)l[111+n]="f"+n;for(n=0;9>=n;++n)l[n+96]=n.toString();c.prototype.bind=function(e,t,n){return e=e instanceof Array?e:[e],this._bindMultiple.call(this,e,t,n),this},c.prototype.unbind=function(e,t){return this.bind.call(this,e,function(){},t)},c.prototype.trigger=function(e,t){return this._directMap[e+":"+t]&&this._directMap[e+":"+t]({},e),this},c.prototype.reset=function(){return this._callbacks={},this._directMap={},this},c.prototype.stopCallback=function(e,n){return!(-1<(" "+n.className+" ").indexOf(" mousetrap ")||function e(n,r){return null!==n&&n!==t&&(n===r||e(n.parentNode,r))}(n,this.target))&&("INPUT"==n.tagName||"SELECT"==n.tagName||"TEXTAREA"==n.tagName||n.isContentEditable)},c.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},c.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(l[t]=e[t]);s=null},c.init=function(){var e,n=c(t);for(e in n)"_"!==e.charAt(0)&&(c[e]=function(e){return function(){return n[e].apply(n,arguments)}}(e))},c.init(),e.Mousetrap=c,"undefined"!=typeof module&&module.exports&&(module.exports=c),"function"==typeof define&&define.amd&&define(function(){return c})}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null);

function burgerButton(x) { x.classList.toggle('change'); }
function menuFocus() { document.querySelector('.burgerButton').click(); }
function fadeoutright() { $('main').removeClass('fadeinleft fadeinright').addClass('fadeoutright'); }
function fadeoutleft() { $('main').removeClass('fadeinleft fadeinright').addClass('fadeoutleft'); }
function fadeOut() { $('main').removeClass('fadeinleft fadeinright').addClass('fadeOut'); }
function scrollup() { $('html, body').animate({scrollTop: 0}, 150); return false; }
function someone() { $('body').addClass('someone'); } // help i've fallen and i cant get up
function textNormal() { 
	$('html').css("font-size", "1em"); 
	document.cookie = "text=normal; path=/; expires=0;";
}
function textLarge() { 
	$('html').css("font-size", "2em"); 
	document.cookie = "text=large; path=/; expires=0;";
}

function darkSideOfTheMoon() { $('head').append('<link rel="stylesheet" id="dark" href="assets/dark.css" type="text/css"/>'); }

$(document).ready(function() {
	// add accessbility
	if (navigator.cookieEnabled) {
		$('.titleText').css('left', '2.8rem');
		$('.title').append('<span class=\"accessibilityMenu\"><a class=\"captionButton textAdjust\" onclick=\"textNormal\(\)\" title=\"Disable Larger Text\">a</a> <a class=\"captionButton textAdjust\" onclick=\"textLarge\(\)\" title=\"Enable Larger Text\">A</a> <a class=\"captionButton contrast\" title=\"Toggle High Contrast Mode\"><i class=\"fas fa-adjust\"></i></a></span>');
		console.log('s u c c e s s: your browser can eat cookies');
	}
	else { console.log('f a i l: your browser cannot eat cookies'); };

//  Barba.Pjax.start();    // init barbra
	Barba.Prefetch.init(); // init barbra

	$('.tilts').tilt({ maxTilt: 20, }); // init tilt.js 

	Waves.attach('.button'); 	// init waves.js
	Waves.init();				// init waves.js

	// keyboard shortcuts
	Mousetrap.bind('m y s t e r i o u s space a s space t h e space d a r k space s i d e space o f space t h e space m o o n', function() { darkSideOfTheMoon(); });
	Mousetrap.bind('up up down down left right left right b a', function() { darkSideOfTheMoon(); });
	Mousetrap.bind('@ s o m e o n e', function() { someone(); });
	Mousetrap.bind('n o space u', function() { $('#buttonlist-buttonhtml, #404-buttonhtml').toggle(); });

	// detect microsoft edge and apply a hotfix CSS file (edgey mode)
	var userAgent = navigator.userAgent;
	if( userAgent.indexOf('Edge') >= 0 ) {
		console.log('Microsoft, please fix border-image'); // no hard feelings
		$('head').append('<link rel=\"stylesheet\" href=\"assets/edgey.css\" type=\"text/css\"/>');
	}

	// Modernizr
	if (Modernizr.cssgrid) { console.log('s u c c e s s: your browser can do CSS grids'); } 
	else { console.log('f a i l: your browser sucks and cannot CSS grids correctly.. like is it that hard to install Chrome or something'); }

	if (Modernizr.borderimage) { console.log('s u c c e s s: your browser can do border-image'); } 
	else {
		console.log('f a i l: your browser sucks and cannot border-image correctly'); // no hard feelings
		$('head').append('<link rel=\"stylesheet\" href=\"assets/edgey.css\" type=\"text/css\"/>');
	}

	// burger button class toggle
	var clickedBurger = false;
	$('.burgerButton').click(function() {
		if(clickedBurger) {
			clickedBurger = false;
			$('.menuBar').removeClass('slideDown').addClass('slideUp');
			$('.menuFocus').removeClass('menuFocusIn').addClass('menuFocusOut');
			setTimeout( function() {
				$('.menuFocus').toggleClass('active menuFocusOut');
				$('.menuBar').removeClass('responsive slideUp');
			}, 300); 
		}
		else {
			clickedBurger = true;
			$('.menuBar').removeClass('slideUp').addClass('slideDown').addClass('responsive');
			$('.menuFocus').removeClass('menuFocusOut').addClass('menuFocusIn').toggleClass("active");
		}
	});

	// contrast toggle - because Start9 uses plex for some reason..
	var clickedContrast = false;
	$('.contrast').click(function() {
		if(clickedContrast) {
			clickedContrast = false;
			$('#contrast').remove(); 
			document.cookie = "contrast=false; path=/; expires=0;";
		}
		else {
			clickedContrast = true;
			$('head').append('<link rel="stylesheet" id="contrast" href="assets/contrast.css" type="text/css"/>');
			document.cookie = "contrast=true; path=/; expires=0;";
		}
	});

	// apply existing settings if they exist	
	if (document.cookie.includes('text=large')) { textLarge(); }
	if (document.cookie.includes('contrast=true')) { $('.contrast').click(); }

	// delay links - https://stackoverflow.com/questions/8775541/delay-a-link-click (MIT)
	$('a.delayLink[href]').click(function(){
		var self = $(this);
		setTimeout(function() {
			window.location.href = self.attr('href'); // go to href after the slide animation completes
		}, 400);
		return false; // And also make sure you return false from your click handler.
	});
});

// animationals WAIT FOR CNAME 
$('#gitbutton').click(function() { $('.github').toggleClass('active'); });
$('#discordbutton').click(function() { $('.discord').toggleClass('active'); });