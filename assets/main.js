function burgerButton(x) { x.classList.toggle("change");}
function menuFocus() { document.querySelector('.burgerButton').click(); }
function fadeoutright() { $( "#main" ).addClass( "fadeoutright" ); scrollup(); }
function fadeoutleft() { $( "#main" ).addClass( "fadeoutleft" ); scrollup(); }
function scrollup() { $("html, body").animate({ scrollTop: 0 }, 150); return false; }
function textNormal() { $('html').css("font-size", "1em"); }
function textLarge() { $('html').css("font-size", "2em"); }

//edgey
var userAgent = navigator.userAgent;
if( userAgent.indexOf('Edge') >= 0){
  console.log("dammit edge lol");
  $('head').append('<link rel="stylesheet" href="assets/edgey.css" type="text/css"/>');
} 


$(document).ready(function() {
    // burger button toggle
    var clickedBurger = false;
    $('.burgerButton').click(function() {
        if(clickedBurger) {
            clickedBurger = false;
            $('.menuBar').removeClass('slideDown').addClass('slideUp');
            $('.menuFocus').removeClass('menuFocusIn').addClass('menuFocusOut');
            setTimeout( function() { $('.menuFocus').toggleClass("active") }, 300); 
            setTimeout( function() { $('.menuBar').removeClass('responsive') }, 300); 
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
        }
        else {
            clickedContrast = true;
            $('head').append('<link rel="stylesheet" id="contrast" href="assets/contrast.css" type="text/css"/>');
        }
     });
});

/* W3S slideshow (i know, very insecure probally)
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
*/

// animationals WAIT FOR CNAME 
$("#gitbutton").click(function() { $('.github').toggleClass('github-active'); });
$("#discordbutton").click(function() { $('.discord').toggleClass('discord-active'); });

// delay links
function delay (URL) { setTimeout( function() { window.location = URL }, 50) ; }
