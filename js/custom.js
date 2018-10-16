
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

	//畫面下拉時跳出go to page
	var showFlag = false;
	$(window).scroll(function () {        
        if ($(this).scrollTop() > 400) {
            if (showFlag === false) {
                showFlag = true;
                $('#js-pageTop').stop().animate({'bottom' : '80px'}, 100);
                // $('#myBtn').css('display','block');
            }
        } else {
            if (showFlag) {
                showFlag = false;
                $('#js-pageTop').stop().animate({'bottom' : '-80px'}, 100); 
                // $('#myBtn').css('display','none');
            }
        }
    });
    // 按下PAGE TOP的動作
    $('#js-pageTop').on('click', function(){
    	$('body,html').animate({scrollTop: 0 }, 500);
    	return false;
    });
});
