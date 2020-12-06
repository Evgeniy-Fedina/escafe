
(function($){

 function collapse(){
	$('.toggle').click(function(){ 
		$('.toggle').toggleClass('active')

  	});
 }
 function modalOpen(){
	$('.modal-btn').on('click', function(){
		$('.modal-window').toggleClass('open');
	});
}
function formDirty(){
	$('input, textarea').on('click keyup', function(){
		if($(this).val().length > 0) {
			$(this).addClass('dirty');
		} else {
			$(this).removeClass('dirty');
		}
	})
}
function modalClose(){
	$('.modal-close').on('click', function(){
		$('.modal-window').toggleClass('open');
	});
	$(document).mouseup(function(e){
		var container = $(".modal-content");
		if (!container.is(e.target) && container.has(e.target).length === 0){
			$('.modal-window').removeClass('open');
		}
	});
}

function scroll(){
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
} 

function scrollToItem() {
	var surrScroll,
		needElem;
	$('.menu ul li a').on('click', function(e){
		e.preventDefault();
		needElem = $(this).attr('href');
		surrScroll = document.querySelector(needElem).offsetTop;
		$('html, body').animate({ scrollTop: (surrScroll - 100) }, 600);
	});
}

function validForm(){
	$('#zakaz').on('submit',function(e){
		var response = grecaptcha.getResponse();
		if(response.length == 0) {
			e.preventDefault();
			alert('Error in captcha !');
			return false;
		} else {
			return true;
		}
		grecaptcha.reset();
	});
}


 $(document).ready(function(){
	modalOpen();
	formDirty();
	modalClose();
	scroll();
	 scrollToItem();
	  validForm();
 });

 $(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn(500);
	} else {
		$('.scrollup').fadeOut(500);
	}
});


})(jQuery);