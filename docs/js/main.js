$(document).ready(function(){
	//$(".toggle-link").click(function(){
		//$(".login-page").toggleClass("login-page--block"); return false;
	//});

	// Вызов слайдера owl-carousel
	$("#owl-carousel").owlCarousel({
		singleItem: true,
		navigation: true,
		//theme: "reviews-slider-theme",
		navigationText : ["",""],
		slideSpeed: 600
	});
});