const hostname = window.location.origin;

/*
** Functions called by site
** (put them in its place where possible)
*/
// Marketplace gets a search bar
if ($("main").is(".marketplace")) {
	$(".header").append(
		"<div class='command-bar'>" +
			"<input id='search' type='text' placeholder='Search&hellip;' data-filter='.modules div'>" +
		"</div>"
	);
	$(".command-bar input").css("margin-left", "calc(100% - 15em)") //! very hacky
}
function fadeOutRight() {
	$("main").removeClass("fade-in-left").addClass("fade-out-right");
}

function fadeOutLeft() {
	$("main").removeClass("fade-in-left").addClass("fade-out-left");
}

function fadeOut() { $("main").removeClass("fade-in").addClass("fade-out"); }

function scrollUp() { $("html, body").animate({scrollTop: 0}, 150); }

function darkSideOfTheMoon(enable) {
	if (enable == true) {
		if ($("html").hasClass("contrast")) {
			// throw "error: Dark theme not enabled, turn off contrast";
		} else {
			$("html").addClass("dark");
			document.cookie = "dark=best; path=/;";
			$(".js-darkmode svg").remove(); // !: Find a better way to do this
			$(".js-darkmode").prepend("<svg class='icon' aria-hidden='true' width='1em' height='1em'> <use href='" + hostname + "/assets/symbol-defs.svg#icon-moon-fill'></use></svg>");
		}
	} else {
		$("html").removeClass("dark");
		document.cookie = "dark=no; path=/;";
		$(".js-darkmode svg").remove(); // !: Find a better way to do this
		$(".js-darkmode").prepend("<svg class='icon' aria-hidden='true' width='1em' height='1em'> <use href='" + hostname + "/assets/symbol-defs.svg#icon-moon-stroke'></use></svg>");
	}
}

function fontSize(size) {
	if (size == "large") {
		$(":root").css("--font-0", "1.2rem");
		document.cookie = "text=large; path=/;";
		$(".js-text-adjust svg").remove(); // !: Find a better way to do this
		$(".js-text-adjust ").prepend("<svg class='icon' aria-hidden='true' width='1em' height='1em'> <use href='" + hostname + "/assets/symbol-defs.svg#icon-lowercase-a'></use></svg>");
	} else {
		$(":root").css("--font-0", "");
		document.cookie = "text=normal; path=/;";
		$(".js-text-adjust svg").remove(); // !: Find a better way to do this
		$(".js-text-adjust").prepend("<svg class='icon' aria-hidden='true' width='1em' height='1em'> <use href='" + hostname + "/assets/symbol-defs.svg#icon-uppercase-a'></use></svg>");
	}
}

// @someone easter egg
// https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html
function onKonamiCode(cb) {
	var input = '';
	var key = '38384040373937396665';
	document.addEventListener('keydown', function (e) {
		 input += ("" + e.keyCode);
		if (input === key) {
			return cb();
		}
		if (!key.indexOf(input)) return;
		input = ("" + e.keyCode);
	});
}

/* Make accessbility controls exist */
if (navigator.cookieEnabled) {
	$(".caption-menu").css("display", "block");
	// console.log("s u c c e s s: your browser can cookies");
} else {
	// console.log("f a i l: your browser cannot cookies");
}

/* Init JS libs */
// Barba.Pjax.start(); // init barbra
Barba.Prefetch.init(); // init barbra

// kounami code rainbowz
onKonamiCode(function() {
	$("body").addClass("someone");
	$("html").addClass("rainbow");
});

var largeFontSize = false;
$(".js-text-adjust").click(function() {
	if(largeFontSize) {
		// off
		fontSize("normal");
		largeFontSize = false;
	} else {
		// on
		fontSize("large");
		largeFontSize = true;
	}
});

/* Hamburger toggle */
var clickedBurger = false;
$(".burger-button").click(function() {
	if(clickedBurger) {
		// closed
		clickedBurger = false;
		$("html").removeClass("no-scroll-mobile-only");
		$(".header").removeClass("slide-down").delay(300).addClass("slide-up");
	} else {
		// open
		clickedBurger = true;
		$("html").addClass("no-scroll-mobile-only");
		$(".header").removeClass("slide-up").addClass("slide-down");
	}
});

/* Contrast toggle */
var clickedContrast = false;
$(".js-contrast").click(function() {
	if(clickedContrast) {
		// off
		clickedContrast = false;
		$("html").removeClass("contrast no-custom-scrollbar");
		document.cookie = "contrast=false; path=/; expires=0;";
	} else if ($("html").hasClass("dark")) {
		// throw "error: Contrast theme not enabled, turn off dark";
	} else {
		// on
		clickedContrast = true;
		$("html").addClass("contrast no-custom-scrollbar");
		document.cookie = "contrast=true; path=/; expires=0;";
	}
});

/* Dark toggle */
/* Contrast toggle */
var clickedDark = false;
$(".js-darkmode").click(function() {
	if(clickedDark) {
		// off
		clickedDark = false;
		darkSideOfTheMoon(false);
	} else if ($("html").hasClass("contrast")) {
		// throw "error: Dark theme not enabled, turn off contrast";
	} else {
		// on
		clickedDark = true;
		darkSideOfTheMoon(true);
	}
});
/* Marketplace */
// Search modules - https://www.w3schools.com/jquery/jquery_filters.asp
$("#search").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$($(this).data("filter")).filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	});
});

/* Apply styles from cookies */
// text size
if (document.cookie.includes("text=large")) {
	fontSize("large");
	largeFontSize = true;
} else {
	fontSize("normal");
	largeFontSize = false;
}

// contrast
if (document.cookie.includes("contrast=true")) {
	$("html").addClass("contrast no-custom-scrollbar");
	clickedContrast = true;
} else {
	$("html").removeClass("contrast no-custom-scrollbar");
	clickedContrast = false;
}

// dark theme
if (document.cookie.includes("dark=best")) {
	darkSideOfTheMoon(true);
	clickedDark = true;
} else {
	darkSideOfTheMoon(false);
	clickedDark = false;
}

// apply dark theme if user has elected to use it system-wide
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	darkSideOfTheMoon(true);
	clickedDark = true;
}

// apply dark theme if user has Dark Reader or Night Eye, but don't add the cookie
if ($("style").is(".darkreader") || $("style").is("#nighteyedefaultcss") || $("style").is("#darkmode")) {
	if ($("html").hasClass("contrast")) {
		// throw "error: Dark theme not enabled, turn off contrast";
	} else {
		$("html").addClass("dark");
	}
	// console.log("dark theme extention detected!");
}

/* delay links - this is probably a bad idea */
// https://stackoverflow.com/questions/8775541/delay-a-link-click (MIT)
$("a.delaylink[href]").click(function(){
	var self = $(this);
	setTimeout(function() {
		window.location.href = self.attr("href"); // go to href after the slide animation completes
	}, 400);
	return false; // And also make sure you return false from your click handler.
});

/*
** Add a self link for headers in docs pages
** Enabled in the child of elements with .js-self-link
** adapted from thelounge - https://github.com/thelounge/thelounge.github.io/commit/e5774dec659e589331111e8ef27afe3a81de9c2d (MIT)
*/
$(".js-self-link h2, .js-self-link h3").each(function() {
	$(this).append($(
		"<a class='self-link instapaper_hide' href=#" + $(this).attr("id") + " aria-hidden='true' tabindex='-1' title='Permalink to this section'> #</a>"
	));
});

/*
** Hide the top part of the navbar when scrolled down
** adapted from W3Schools - https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
*/
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (48 > currentScrollPos) {
		$(".header").removeClass("scroll-up");
	} else {
		$(".header").addClass("scroll-up");
	}
	if (currentScrollPos == 0) { $(".header").removeClass("scroll-up"); } // if scrolled to zero, show menu bar
};

/*
** Let the document know when the mouse is being used
** https://codepen.io/anon/pen/XYoJQv
*/

document.body.addEventListener("mousedown", function() {
	$("body").addClass("jerry-mouse");
});

document.body.addEventListener("keydown", function() {
	$("body").removeClass("jerry-mouse");
});
