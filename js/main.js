$(function(){


	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout: 7000,
	    margin: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
    }

});

	$('.menu-button').click(function(){ 
		$('.menu-button, .menu-list').toggleClass('active') 
	});


	$('.menu-list-item').click(function(){ 
		$('.menu-button, .menu-list').removeClass('active') 
	});

});
