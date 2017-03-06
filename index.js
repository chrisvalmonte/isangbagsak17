$(document).ready(function() {

	$navbar = $('#navbar');
	$navbar.affix({
		offset: { top: $navbar.height() }
	});

});

function openNav() {
	$menu = $('#menu');
	$menu.attr('style', 'height: 100%;')
}

function closeNav() {
	$menu = $('#menu');
	$menu.attr('style', 'height: 0;')
}
