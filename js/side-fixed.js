$(function() {
	var nav = $('#side_menu_wrap');
	var navTop = nav.offset().top;
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		if (winTop >= navTop) {
			nav.addClass('fixed').css('top',10);
		} else if (winTop < navTop) {
			nav.removeClass('fixed').css('top',-navTop+'px');
		}
	});
});