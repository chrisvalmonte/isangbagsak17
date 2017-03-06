$(document).ready(function() {

	$navbar = $('#navbar');
	$navbar
		.affix({
			offset: {
				top: $navbar.height() + $('header').height(),
				bottom: function(){
					return (this.bottom = $('footer').outerHeight(true))
				}
			}
		})
		.on('', function() {

		})
		.on('', function() {

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
