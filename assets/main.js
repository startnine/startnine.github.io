/* mousetrap v1.6.2 craig.is/killing/mice */
(function(p,t,h){function u(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function y(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return m[a.which]?m[a.which]:q[a.which]?q[a.which]:String.fromCharCode(a.which).toLowerCase()}function E(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function v(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function z(a,b){var d,e=[];var c=a;"+"===c?c=["+"]:(c=c.replace(/\+{2}/g,"+plus"),c=c.split("+"));for(d=0;d<c.length;++d){var k=c[d];A[k]&&(k=A[k]);b&&"keypress"!=b&&B[k]&&(k=B[k],e.push("shift"));v(k)&&e.push(k)}c=k;d=b;if(!d){if(!n){n={};for(var h in m)95<h&&112>h||m.hasOwnProperty(h)&&(n[m[h]]=h)}d=n[c]?"keydown":"keypress"}"keypress"==d&&e.length&&(d="keydown");return{key:k,modifiers:e,action:d}}function C(a,b){return null===a||a===t?!1:a===b?!0:C(a.parentNode,b)}function e(a){function b(a){a=a||{};var b=!1,l;for(l in n)a[l]?b=!0:n[l]=0;b||(w=!1)}function d(a,b,r,g,F,e){var l,D=[],h=r.type;if(!f._callbacks[a])return[];"keyup"==h&&v(a)&&(b=[a]);for(l=0;l<f._callbacks[a].length;++l){var d=f._callbacks[a][l];if((g||!d.seq||n[d.seq]==d.level)&&h==d.action){var c;(c="keypress"==h&&!r.metaKey&&!r.ctrlKey)||(c=d.modifiers,c=b.sort().join(",")===c.sort().join(","));c&&(c=g&&d.seq==g&&d.level==e,(!g&&d.combo==F||c)&&f._callbacks[a].splice(l,1),D.push(d))}}return D}function h(a,b,d,g){f.stopCallback(b,b.target||b.srcElement,d,g)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function c(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=y(a);b&&("keyup"==a.type&&x===b?x=!1:f.handleKey(b,E(a),a))}function k(a,d,r,g){function l(d){return function(){w=d;++n[a];clearTimeout(p);p=setTimeout(b,1E3)}}function e(d){h(r,d,a);"keyup"!==g&&(x=y(d));setTimeout(b,10)}for(var c=n[a]=0;c<d.length;++c){var f=c+1===d.length?e:l(g||z(d[c+1]).action);m(d[c],f,g,a,c)}}function m(a,b,c,g,e){f._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var h=a.split(" ");1<h.length?k(a,h,b,c):(c=z(a,c),f._callbacks[c.key]=f._callbacks[c.key]||[],d(c.key,c.modifiers,{type:c.action},g,a,e),f._callbacks[c.key][g?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:g,level:e,combo:a}))}var f=this;a=a||t;if(!(f instanceof e))return new e(a);f.target=a;f._callbacks={};f._directMap={};var n={},p,x=!1,q=!1,w=!1;f._handleKey=function(a,c,e){var g=d(a,c,e),f;c={};var l=0,k=!1;for(f=0;f<g.length;++f)g[f].seq&&(l=Math.max(l,g[f].level));for(f=0;f<g.length;++f)g[f].seq?g[f].level==l&&(k=!0,c[g[f].seq]=1,h(g[f].callback,e,g[f].combo,g[f].seq)):k||h(g[f].callback,e,g[f].combo);g="keypress"==e.type&&q;e.type!=w||v(a)||g||b(c);q=k&&"keydown"==e.type};f._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)m(a[d],b,c)};u(a,"keypress",c);u(a,"keydown",c);u(a,"keyup",c)}if(p){var m={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},q={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},B={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},A={option:"alt",command:"meta","return":"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},n;for(h=1;20>h;++h)m[111+h]="f"+h;for(h=0;9>=h;++h)m[h+96]=h.toString();e.prototype.bind=function(a,b,d){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,d);return this};e.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};e.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};e.prototype.reset=function(){this._callbacks={};this._directMap={};return this};e.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||C(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};e.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};e.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(m[b]=a[b]);n=null};e.init=function(){var a=e(t),b;for(b in a)"_"!==b.charAt(0)&&(e[b]=function(b){return function(){return a[b].apply(a,arguments)}}(b))};e.init();p.Mousetrap=e;"undefined"!==typeof module&&module.exports&&(module.exports=e);"function"===typeof define&&define.amd&&define(function(){return e})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-borderimage-cssgrid_cssgridlegacy-setclasses !*/
// !function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return!!~(""+e).indexOf(n)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?u(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,l,a,u,f="modernizr",d=i("div"),c=p();if(parseInt(r,10))for(;r--;)a=i("div"),a.id=o?o[r]:f+(r+1),d.appendChild(a);return s=i("style"),s.type="text/css",s.id="s"+f,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),l=t(d,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=u,_.offsetHeight):d.parentNode.removeChild(d),!!l}function g(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,o,s){function u(){d&&(delete T.style,delete T.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=g(e,o);if(!r(f,"undefined"))return f}for(var d,c,p,m,y,v=["modernizr","tspan","samp"];!T.style&&v.length;)d=!0,T.modElem=i(v.shift()),T.style=T.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],y=T.style[m],l(m,"-")&&(m=a(m)),T.style[m]!==t){if(s||r(o,"undefined"))return u(),"pfx"==n?m:!0;try{T.style[m]=o}catch(h){}if(T.style[m]!=y)return u(),"pfx"==n?m:!0}return u(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?y(l,n,o,s):(l=(e+" "+z.join(i+" ")+i).split(" "),f(l,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,b="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",P=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=P;var z=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=z;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var T={style:E.elem.style};Modernizr._q.unshift(function(){delete T.style}),S.testAllProps=v,S.testAllProps=h,Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),Modernizr.addTest("borderimage",h("borderImage","url() 1",!0)),o(),s(C),delete S.addTest,delete S.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);

/* jquery toggle from v@1.8.0 | jquery.org/licence */
// renamed to toggleFunction to prevent possible conflict with other jQuery.toggle
// replace this if there is any other solution to toggle functions
jQuery.fn.extend({
	toggleFunction: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments,
			guid = fn.guid || jQuery.guid++,
			i = 0,
			toggler = function( event ) {
				// Figure out which function to execute
				var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
				jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

				// Make sure that clicks stop
				event.preventDefault();

				// and execute the function
				return args[ lastToggle ].apply( this, arguments ) || false;
			};

		// link all the functions, so any of them can unbind this click handler
		toggler.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}

		return this.click( toggler );
	}
});

/*
** Define variables
*/
var hostname = window.location.origin;

/*
** Functions called by site
** (remove these when possible)
*/
function burgerButton(x) { x.classList.toggle("change"); }

function menuFocus() { $(".burger-button").click(); }

function fadeOutRight() {
	$("main").removeClass("fade-in-left").addClass("fade-out-right");
}

function fadeOutLeft() {
	$("main").removeClass("fade-in-left").addClass("fade-out-left");
}

function fadeOut() { $("main").removeClass("fade-in").addClass("fade-out"); }

function scrollUp() {
	$("html, body").animate({scrollTop: 0}, 150);
	return false;
}

function darkSideOfTheMoon() {
	$("html").addClass("dark");
	document.cookie = "dark=best; path=/;";
}

/*
** stuff that should be done load when page loads
*/
$(document).ready(function() {

/* Make accessbility controls exist */
if (navigator.cookieEnabled) {
	$(".caption-menu").css("display", "block");
	$(".title-text").css("left", "1.4rem");
	console.log("s u c c e s s: your browser can cookies");
}
else { console.log("f a i l: your browser cannot cookies"); }

/* Init JS libs */
//  Barba.Pjax.start();    // init barbra
Barba.Prefetch.init(); // init barbra

/* Keyboard shortcuts */
Mousetrap.bind("up up down down left right left right b a", function() {
	darkSideOfTheMoon();
});

Mousetrap.bind("@ s o m e o n e", function() {
	$("body").addClass("someone");
});

Mousetrap.bind("n o space u", function() {
	$("#buttone-main, #buttone-404").toggle();
});

/* Contrast toggle */
$(".js-contrast").toggleFunction(
	// on
	function() { contrastOn(); },
	// off
	function() { contrastOff(); }
);

function contrastOn() {
	$("html").addClass("contrast");
	document.cookie = "contrast=true; path=/; expires=0;";
}

function contrastOff() {
	$("html").removeClass("contrast");
	document.cookie = "contrast=false; path=/; expires=0;";
}

/* Text Size button toggle */
$(".js-text-adjust").toggleFunction(
	function() { defaultFont(); },

	function() { largeFont(); }

);

function defaultFont() {
	$("html").css("font-size", "1em");
	document.cookie = "text=normal; path=/;";
	$(".caption-button.js-text-adjust").html("A");
}

function largeFont() {
	$("html").css("font-size", "2em");
	document.cookie = "text=large; path=/;";
	$(".caption-button.js-text-adjust").html("a");
}

/* Hamburger button toggle */
$(".burger-button").toggleFunction(
	// down
	function() {
		$("html, body").css("cssText", "overflow-y: hidden !important;");
		$("nav, .header").removeClass("slide-up").addClass("slide-down").addClass("responsive");
		$(".menu-focus").removeClass("menu-focus-out").addClass("menu-focus-in").toggleClass("active");
	},

	// up
	function() {
		$("html, body").css("cssText", "overflow-y: inital;");
		$("nav, .header").removeClass("slide-down").addClass("slide-up");
		$(".menu-focus").removeClass("menu-focus-in").addClass("menu-focus-out");

		setTimeout( function() {
			$(".menu-focus").toggleClass("active menu-focus-out");
			$("nav, .header").removeClass("responsive slide-up");
		}, 300);
	}
);

/* Marketplace */
// Search modules - https://www.w3schools.com/jquery/jquery_filters.asp
$("#module-search").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$(".modules div").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	});
});

/* Apply styles from cookies */
if (document.cookie.includes("text=large")) { largeFont(); }

if (document.cookie.includes("text=normal")) { defaultFont(); }

if (document.cookie.includes("contrast=true")) { contrastOn(); }

if (document.cookie.includes("contrast=false")) { contrastOff(); }

if (document.cookie.includes("dark=best")) { darkSideOfTheMoon(); }

/* delay links - https://stackoverflow.com/questions/8775541/delay-a-link-click (MIT) */
$("a.delaylink[href]").click(function(){
	var self = $(this);
	setTimeout(function() {
		window.location.href = self.attr("href"); // go to href after the slide animation completes
	}, 400);
	return false; // And also make sure you return false from your click handler.
});

/* Downloads Page */
// start ajax request
$.getJSON("https://api.github.com/repos/startnine/release-testing/releases").done(function(data) {
	$(".js-latest-ver").text(data[0].name);

});

/* Cross site transitions */
$("#gitbutton").click(function() { $(".github").toggleClass("active"); });
$("#discordbutton").click(function() { $(".discord").toggleClass("active"); });

/* When the user scrolls down, hide the navbar
** When the user scrolls up, show the navbar - taken from W3Schools
*/
var prevScrollpos = window.pageYOffset;
var navbar = $(".header");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
	navbar.removeClass("scroll-up");
} else {
	navbar.addClass("scroll-up");
}

// if scrolled to zero, show menu bar
	prevScrollpos = currentScrollPos;
	if(currentScrollPos==0){ navbar.removeClass("scroll-up"); }
};

/*
** Let the document know when the mouse is being used,
** so accessibility styling can be removed.
** https://codepen.io/anon/pen/XYoJQv
*/

document.body.addEventListener("mousedown", function() {
	document.body.classList.add("jerry-mouse");
});

document.body.addEventListener("keydown", function() {
	document.body.classList.remove("jerry-mouse");
});

});
