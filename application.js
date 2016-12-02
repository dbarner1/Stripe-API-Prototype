//Problem: Checkout button inactive even when value input
//Solution: When user inputs value, make the button active

//1. When li has a value, make button active
	//Add eventListener on li button
	//On focus, and a value, removeAttr

var $input = $("#inputTotal");
var $button = $("#customButton")

$(document).ready (function () {

	if($input.val()>0) {
		$button.removeAttr("disabled"); 
		console.log("enabled!");
	}
}
);

$input.on("keyup", function () {

	if($input.val()>0) {
		$button.removeAttr("disabled"); 
		console.log("enabled!");
	}

	if($input.val()<=0) {
		$button.attr("disabled", true); 
		console.log("disabled!");
	}
});
