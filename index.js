$(document).ready(function() {

	$nav = $('nav');
	$nav.affix({
		offset: { top: $('nav').height() }
	});

	$menuBtn = $nav.find('.menu-btn');
	$menuBtn.on ('click', function() {
		$menu = $('#menu');
		$menu.fadeIn();
	});
});
