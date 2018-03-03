// burger button
function menuBarNav() {
	var x = document.getElementById("menuBar");
	if (x.className === "menuBar") {
		x.className += " responsive";
	} else {
		x.className = "menuBar";
	}
	
	var element = document.getElementsByClassName("mobileSpace");
    element.classList.toggle("invisble");
}

function burgerButton(x) { $(".menuFocus").toggleClass("active"); }
function menuFocus() { document.querySelector('.burgerButton').click(); }
function fadeoutright() { $( "#main" ).addClass( "fadeoutright" ); scrollup()}
function fadeoutleft() { $( "#main" ).addClass( "fadeoutleft" ); scrollup()}

function scrollup() { $("html, body").animate({ scrollTop: 0 }, 150); return false;}

//edgey
var userAgent = navigator.userAgent;
if( userAgent.indexOf('Edge') >= 0){
	console.log("dammit edge lol");
	$('#main').append('<link rel="stylesheet" href="assets/edgey.css" type="text/css"/>');
} 

// animationals WAIT FOR CNAME 
$("#gitbutton").click(function() { $('.github').toggleClass('github-active'); });
$("#discordbutton").click(function() { $('.discord').toggleClass('discord-active'); });

// delay links
function delay (URL) {
    setTimeout( function() { window.location = URL }, 100) ;
}