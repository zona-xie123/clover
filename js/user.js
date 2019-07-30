$(document).ready(function () {
	//top
	var gotop = $('.top-btn');
	gotop.click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			gotop.fadeIn();
		} else {
			gotop.stop().fadeOut();
		}
	});
	if ($(window).width() > 800) {
		// 選單置頂
		$(window).scroll(function () {
			if ($(this).scrollTop() > 480) {
		
				$('header').addClass('headFixed').addClass('animated slideInDown');
			} else {
				
				$('header').removeClass('headFixed animated slideInDown');
			}
			
		});
}
		//scroll-down
		$('.scroll-down a').bind('click', function(event) {
			// alert("hi");
			 var $anchor = $(this);
			 $('html, body').stop().animate({
			   scrollTop: $($anchor.attr('href')).offset().top
			 }, 1500);
			 event.preventDefault();
		   });
	$(document).ready(function() {
		setupFade();
    //  enableScrollAbortion();

		// Trigger window.scroll, this will initiate some of the scripts
		$(window).scroll();
  });
	function setupFade() {

		
		var posts = $('.txt').reverse(),
			// stemWrapper = $('.stem-wrapper'),
			halfScreen = $(window).height() / 2 + 250;

		$(window).on('scroll resize', function() {

			delay(function() {

				var currScroll = $(window).scrollTop() > $(document).scrollTop() ? $(window).scrollTop() : $(document).scrollTop(),
					scrollSplit = currScroll + halfScreen;

				posts.removeClass('active').each(function() {

					var post = $(this),
						postOffset = post.offset().top;

					if(scrollSplit > postOffset) {

						// Add active class to fade in
						post.addClass('active')


						return false;
					}

				});
			}, 20);

		});

	}
	//tips
	$('.mission .tips h3').click(function(){
		$('.mission .tips .con').slideToggle();
	})
		//tips
		$('.precation  h3').click(function(){
			$('.precation  .con').slideToggle();
		})

	$('a.target-burger').click(function (e) {
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		e.preventDefault();
	});
	AOS.init();
	//faq_down
	$('.faq .qa-section').each(function (i) {

		var _number = i;
		$(this).click(function () {
			$(this).toggleClass('active-qa')
			$('.answer').eq(_number).slideToggle(200);
		});
	});




})
/*==========  Helpers  ==========*/


// Timeout function
var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

$.fn.reverse = function() {
    return this.pushStack(this.get().reverse(), arguments);
}; 