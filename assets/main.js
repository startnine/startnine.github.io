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

function burgerButton(x) {
	x.classList.toggle("change");
    $(".menuFocus").toggleClass("active");
}

function menuFocus() {
	document.querySelector('.burgerButton').click();
}

// animationals WAIT FOR CNAME 
$("#gitbutton").click(function() {
  $('.github').toggleClass('github-active');
});

$("#discordbutton").click(function() {
  $('.discord').toggleClass('discord-active');
});

// delay links
function delay (URL) {
    setTimeout( function() { window.location = URL }, 300 );
}