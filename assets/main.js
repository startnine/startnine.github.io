// burger button
function menuBarNav() {
	var x = document.getElementById("menuBar");
	if (x.className === "menuBar") {
		x.className += " responsive";
	} else {
		x.className = "menuBar";
	}
}

function burgerButton(x) {
	x.classList.toggle("change");
}

// error box
$(function() {
	$("#draggable").draggable();
});

if (window.self !== window.top) {
	document.getElementById('window').style.display = "none";
}

// w3s Taberino
function openTab(evt, tabName) {
	var i;
	var x = document.getElementsByClassName("tabContent");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none"; 
	}
	document.getElementById(tabName).style.display = "block";
	document.querySelector('.burgerButton').click();
	evt.currentTarget.className += " active";
	x=document.getElementsByClassName("title");	// Find the elements
	for(var i = 0; i < x.length; i++){
	x[i].innerText=tabName;	// Change the content
	}
}

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-borderimage-cssgrid_cssgridlegacy-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?_.className.baseVal=n:_.className=n)}function i(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?i(o,t||n):o);return!1}function a(e,n){return!!~(""+e).indexOf(n)}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=u(b?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,i,l,a,f="modernizr",d=u("div"),c=p();if(parseInt(r,10))for(;r--;)l=u("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return s=u("style"),s.type="text/css",s.id="s"+f,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",a=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=a,_.offsetHeight):d.parentNode.removeChild(d),!!i}function g(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,o,s){function i(){d&&(delete T.style,delete T.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=g(e,o);if(!r(l,"undefined"))return l}for(var d,c,p,m,y,v=["modernizr","tspan","samp"];!T.style&&v.length;)d=!0,T.modElem=u(v.shift()),T.style=T.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],y=T.style[m],a(m,"-")&&(m=f(m)),T.style[m]!==t){if(s||r(o,"undefined"))return i(),"pfx"==n?m:!0;try{T.style[m]=o}catch(h){}if(T.style[m]!=y)return i(),"pfx"==n?m:!0}return i(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?y(a,n,o,s):(a=(e+" "+P.join(i+" ")+i).split(" "),l(a,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,b="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",P=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=P;var z=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=z;var E={elem:u("modernizr")};Modernizr._q.push(function(){delete E.elem});var T={style:E.elem.style};Modernizr._q.unshift(function(){delete T.style}),S.testAllProps=v,S.testAllProps=h,Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),Modernizr.addTest("borderimage",h("borderImage","url() 1",!0)),o(),s(C),delete S.addTest,delete S.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);