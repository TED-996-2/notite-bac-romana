/// <reference path="../typings/jquery/jquery.d.ts"/>

var offset = 1;

function replaceHeaders(newId) {
	newId = Math.min(newId, 6);
	var header = "h" + newId;
	return function () {
		$(this).replaceWith("<" + header + ">" + $(this).html() + "</" + header + ">");
	};
}

$(function () {
	//h1 ... h6
	for (var index = 6; index >= 0; index--) {
		var header = "h" + index;
		$(".post-content " + header + ", .post-summary " + header).each(replaceHeaders(index + offset));
	}
});