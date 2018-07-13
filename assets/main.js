/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-borderimage-cssgrid_cssgridlegacy-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return!!~(""+e).indexOf(n)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?u(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,l,a,u,f="modernizr",d=i("div"),c=p();if(parseInt(r,10))for(;r--;)a=i("div"),a.id=o?o[r]:f+(r+1),d.appendChild(a);return s=i("style"),s.type="text/css",s.id="s"+f,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),l=t(d,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=u,_.offsetHeight):d.parentNode.removeChild(d),!!l}function g(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,o,s){function u(){d&&(delete T.style,delete T.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=g(e,o);if(!r(f,"undefined"))return f}for(var d,c,p,m,y,v=["modernizr","tspan","samp"];!T.style&&v.length;)d=!0,T.modElem=i(v.shift()),T.style=T.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],y=T.style[m],l(m,"-")&&(m=a(m)),T.style[m]!==t){if(s||r(o,"undefined"))return u(),"pfx"==n?m:!0;try{T.style[m]=o}catch(h){}if(T.style[m]!=y)return u(),"pfx"==n?m:!0}return u(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?y(l,n,o,s):(l=(e+" "+z.join(i+" ")+i).split(" "),f(l,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,b="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",P=S._config.usePrefixes?x.split(" "):[];S._cssomPrefixes=P;var z=S._config.usePrefixes?x.toLowerCase().split(" "):[];S._domPrefixes=z;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var T={style:E.elem.style};Modernizr._q.unshift(function(){delete T.style}),S.testAllProps=v,S.testAllProps=h,Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),Modernizr.addTest("borderimage",h("borderImage","url() 1",!0)),o(),s(C),delete S.addTest,delete S.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);

// Variables
var hostname = window.location.origin;

// Common Functions (well not really common but)
function burgerButton(x) { x.classList.toggle('change'); };
function menuFocus() { document.querySelector('.burgerButton').click(); };
function fadeoutright() { $('main').removeClass('fadeinleft fadeinright').addClass('fadeoutright'); };
function fadeoutleft() { $('main').removeClass('fadeinleft fadeinright').addClass('fadeoutleft'); };
function fadeOut() { $('main').removeClass('fadeinleft fadeinright').addClass('fadeOut'); };
function scrollup() { $('html, body').animate({scrollTop: 0}, 150); return false; };
function someone() { $('body').addClass('someone'); }; // help i've fallen and i cant get up
function textNormal() { 
	$('html').css("font-size", "1em"); 
	document.cookie = "text=normal; path=/; expires=0;";
};
function textLarge() { 
	$('html').css("font-size", "2em"); 
	document.cookie = "text=large; path=/; expires=0;";
};

function darkSideOfTheMoon() { 
	$('head').append('<link rel="stylesheet" id="dark" href="' + hostname + '/assets/dark.css" type="text/css"/>'); 
	document.cookie = "dark=best; path=/; expires=0;";
}

// Most of the important stuff
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

	Waves.attach('.button');    // init waves.js
	Waves.init();               // init waves.js

	// keyboard shortcuts
	Mousetrap.bind('m y s t e r i o u s space a s space t h e space d a r k space s i d e space o f space t h e space m o o n', function() { darkSideOfTheMoon(); });
	Mousetrap.bind('up up down down left right left right b a', function() { darkSideOfTheMoon(); });
	Mousetrap.bind('@ s o m e o n e', function() { someone(); });
	Mousetrap.bind('n o space u', function() { $('#buttonlist-buttonhtml, #404-buttonhtml').toggle(); });

	// detect microsoft edge and apply a hotfix CSS file (edgey mode)
	var userAgent = navigator.userAgent;
	if( userAgent.indexOf('Edge') >= 0 ) {
		console.log('Microsoft, please fix border-image'); // no hard feelings
		console.log('enabling edgey mode...'); 
		$('head').append('<link rel="stylesheet" href="' + hostname + '/assets/edgey.css" type="text/css"/>');
	};

	// Modernizr
	if (Modernizr.cssgrid) { console.log('s u c c e s s: your browser can do CSS grids'); } 
	else { console.log('f a i l: your browser sucks and cannot CSS grids correctly.. like is it that hard to install Chrome or something'); };

	if (Modernizr.borderimage) { console.log('s u c c e s s: your browser can do border-image'); } 
	else {
		console.log('f a i l: your browser sucks and cannot border-image correctly'); // no hard feelings
		console.log('enabling edgey mode...'); 
		$('head').append('<link rel="stylesheet" href="' + hostname + '/assets/edgey.css" type="text/css"/>');
	};

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

	// contrast toggle
	var clickedContrast = false;
	$('.contrast').click(function() {
		if(clickedContrast) {
			clickedContrast = false;
			$('#contrast').remove(); 
			document.cookie = "contrast=false; path=/; expires=0;";
		}
		else {
			clickedContrast = true;
			$('head').append('<link rel="stylesheet" id="contrast" href="' + hostname + '/assets/contrast.css" type="text/css"/>');
			document.cookie = "contrast=true; path=/; expires=0;";
		}
	});

	// apply existing appearance settings if they exist	
	if (document.cookie.includes('text=large')) { textLarge(); };
	if (document.cookie.includes('text=normal')) { textNormal(); };

	if (document.cookie.includes('contrast=true')) { 
		var clickedContrast = true;
		$('head').append('<link rel="stylesheet" id="contrast" href="' + hostname + '/assets/contrast.css" type="text/css"/>');
	};

	if (document.cookie.includes('contrast=false')) { $('#contrast').remove(); };

	if (document.cookie.includes('dark=best')) { darkSideOfTheMoon(); };

	// delay links - https://stackoverflow.com/questions/8775541/delay-a-link-click (MIT)
	$('a.delayLink[href]').click(function(){
		var self = $(this);
		setTimeout(function() {
			window.location.href = self.attr('href'); // go to href after the slide animation completes
		}, 400);
		return false; // And also make sure you return false from your click handler.
	});

	// scroll speeds - https://codepen.io/JTParrett/pen/BkDie
	$.fn.moveIt = function(){
		var $window = $(window);
		var instances = [];
		
		$(this).each(function(){ instances.push(new moveItItem($(this))); });
		
		window.addEventListener('scroll', function(){
			var scrollTop = $window.scrollTop();
			instances.forEach(function(inst){
				inst.update(scrollTop);
			});
		}, {passive: true});
	}
	
	var moveItItem = function(el){
		this.el = $(el);
		this.speed = parseInt(this.el.attr('data-scroll-speed'));
	};
	
	moveItItem.prototype.update = function(scrollTop){ this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)'); };
	
	$(function(){ $('[data-scroll-speed]').moveIt(); });

	// smooth scroll - https://css-tricks.com/smooth-scrolling-accessibility/
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 500);
					target.focus(); // Setting focus
					if (target.is(":focus")){ // Checking if the target was focused
						return false;
					} else {
						target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						target.focus(); // Setting focus
					};
					return false;
				}
			}
		});
	});
});

/*
// animationals WAIT FOR CNAME 
$('#gitbutton').click(function() { $('.github').toggleClass('active'); });
$('#discordbutton').click(function() { $('.discord').toggleClass('active'); });
*/