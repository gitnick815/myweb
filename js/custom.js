$(document).ready(function(){

	// header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			// $(".js-header").addClass("header--colored");
			$header.addClass("header--colored");
		}
		else{
			// $(".js-header").removeClass("header--colored");
			$header.removeClass("header--colored");
		}
	});

	//wow.js
	new WOW().init();

	//fancybox plugin options
	$('[data-fancybox]').fancybox({
  		loop : true
	});
    

});