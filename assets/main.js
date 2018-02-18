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

// windows
if (window.self !== window.top) {
	document.getElementById('window').style.display = "none";
}

/* w3s Taberino
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
*/


