/*jslint browser: true, devel: true*/

/*global $*/

/*global swapInit, swapElegant, clearIntervals*/

var intervals = [];

function swapInit() {
	'use strict';
	
	clearIntervals();
	
	$(".glitch").each(function () {
		intervals.push(setInterval(swapElegant, 50, this));
	});
}

function swapElegant(element) {
	'use strict';
	
	var createdString = "";
	
	if (Math.random() > 0.08) {
		return;
	}
	
	createdString += (Math.random() > 0.5 ? "E" : "3");
	createdString += (Math.random() > 0.5 ? "l" : "1");
	createdString += (Math.random() > 0.5 ? "e" : "3");
	createdString += "gant";
	
	$(element).html(createdString);
	$(element).attr("data-text", createdString);
}

function clearIntervals() {
	'use strict';
	
	var i;
	for (i = 0; i < intervals.length; i += 1) {
		window.clearInterval(intervals[i]);
	}
	
	intervals = [];
}

$(document).ready(function () {
	'use strict';
	
	swapInit();
	$("body").on("pagecontainerchange", swapInit);
});


