/*jslint browser: true, devel: true*/

/*global $*/

/*global init, swapElegant, clearIntervals*/

var intervals = [];

function init() {
	'use strict';
	// Called on initial page load and after every page transition
	
	clearIntervals();
	
	// Find all objects of class "glitch" and start the letter swapping
	$(".glitch").each(function () {
		intervals.push(setInterval(swapElegant, 50, this));
	});
	
	$(".ui-star-rating .fa-star-o").on("click", function () {
		
		$(this).parent().children().each(function () {
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});
}

function swapElegant(element) {
	'use strict';
	// This function changes the letters in "Elegant"
	
	var createdString = "";
	
	// Easier to end the function than to vary interval length
	if (Math.random() > 0.08) {
		return;
	}
	
	// Short form conditionals used for readability
	// Adds a random combination of 313 and Ele to the string
	createdString += (Math.random() > 0.5 ? "E" : "3");
	createdString += (Math.random() > 0.5 ? "l" : "1");
	createdString += (Math.random() > 0.5 ? "e" : "3");
	createdString += "gant";
	
	// Set html and data-text, so CSS based glitching works too
	$(element).html(createdString);
	$(element).attr("data-text", createdString);
}

function clearIntervals() {
	'use strict';
	// Remove all intervals on page change, prevent buildup of empty fired functions
	
	var i;
	for (i = 0; i < intervals.length; i += 1) {
		window.clearInterval(intervals[i]);
	}
	
	intervals = [];
}

function thankUser() {
	'use strict';
	//TODO: Include actual database submission ;)
	
	$("#feedback .ui-content").html("<h1>Thank you for your comments</h1>");
}

$(document).ready(function () {
	'use strict';
	
	init();
	$("body").on("pagecontainerchange", init);
});


