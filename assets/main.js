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

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//W3S slideshow
var slideIndex = 1; showSlides(slideIndex);
function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

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