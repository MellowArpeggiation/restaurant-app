/*jslint browser: true, devel: true*/

/*global $*/

/*global swapInit, swapElegant*/


function swapInit() {
	'use strict';
	
	$(".ele-swap").each(function () {
		setInterval(swapElegant, 50, this);
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

$(document).ready(function () {
	'use strict';
	swapInit();
});