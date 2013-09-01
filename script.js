$(document).ready(function(){
	$("#submissionLink").click(function(){
		$(".halfCol .hide").show("fast");
		$(".halfCol .hide").attr("color", "#000000 !important");
		$("#submissionLink").parent().animate({
			height: "+=100"
		},500, function() {
		});
	});
});
