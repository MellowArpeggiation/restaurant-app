/*jslint browser: true, devel: true*/

/*global $*/


function swapInit() {
	'use strict';
	
	$(".ele-swap").each(function () {
		console.log(this);
	});
}

$(document).ready(function () {
	'use strict';
	swapInit();
});