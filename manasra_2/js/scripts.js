$(document).ready(function() {
	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: true,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
	$('.bxslider1').bxSlider({
		mode: 'fade',
		adaptiveHeight: true,
		speed:6500,
		minSlides: 1,
  		maxSlides: 1,
  		auto: true,
  		autoControls: false,
  		autoHover:true,
  		pause:2000,
  		slideMargin:0,
  		pager:false	
});
	$('.bxslider2').bxSlider({
		mode:'horizontal',
		auto: true,
		useCSS:false,
		speed:3500,
		easing:'easeOutElastic',
		autoHover:true,
  		autoControls: false,
  		pause: 2000,
  		minSlides: 2,
  		maxSlides: 2,
  		pager:false,
  		slideMargin:10,
  		slideWidth:280
	});
	$('.bxslider3').bxSlider({
		mode:'horizontal',
		auto: true,
		speed:3000,
		autoHover:true,
  		autoControls: false,
  		pause: 2500,
  		minSlides: 2,
  		maxSlides: 2,
  		pager:false,
  		slideMargin:10,
  		slideWidth:280
	});
	// MOBILE MENU
	
		$('#menu').slicknav({
			duration:1500,
			closeOnClick:true,
			label:'MENU'
	});
});