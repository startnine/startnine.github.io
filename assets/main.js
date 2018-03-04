function burgerButton(x) { x.classList.toggle("change");}
function menuFocus() { document.querySelector('.burgerButton').click(); }
function fadeoutright() { $( "#main" ).addClass( "fadeoutright" ); scrollup(); }
function fadeoutleft() { $( "#main" ).addClass( "fadeoutleft" ); scrollup(); }
function scrollup() { $("html, body").animate({ scrollTop: 0 }, 150); return false; }

$(document).ready(function() {
    var clicked = false;
    $('.burgerButton').click(function() {
        if(clicked) {
            clicked = false;
            $('.menuBar').removeClass('slideDown').addClass('slideUp').removeClass('responsive');
            $('.menuFocus').removeClass('menuFocusIn').addClass('menuFocusOut');
            setTimeout( function() { $('.menuFocus').toggleClass("active") }, 300); 
        }
        else {
            clicked = true;
            $('.menuBar').removeClass('slideUp').addClass('slideDown').addClass('responsive');
            $('.menuFocus').removeClass('menuFocusOut').addClass('menuFocusIn').toggleClass("active");
        }
     });
});

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
function delay (URL) { setTimeout( function() { window.location = URL }, 50) ; }