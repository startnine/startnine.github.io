function openNewTab(n){var o=window.open(n,"_blank");o.focus()}
function openNewLink(n){var o=window.open(n,"_self");o.focus()}

window.onload = function() {document.getElementById("defaultTab").click()};
// w3 Taberino
/*function openTab(evt, tabName) {
	var i;
	var x = document.getElementsByClassName("tabContent");
	for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none"; 
	}
	document.getElementById(tabName).style.display = "block"; 3
	evt.currentTarget.className += " active";
}*/

/* W3 implmentation of repsonsive navbar */
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