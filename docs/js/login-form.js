$(document).ready(function(){
 	$('.toggle-link').click(function() {
 		//console.log("kek");
		$("#authorization").fadeIn(1000);
		//console.log("kek2");
	$('.message a').click(function(){
	   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
	});
	});
	//console.log("kek3");
})