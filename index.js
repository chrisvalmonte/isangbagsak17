$(document).ready(function(){
	$('nav').affix({
		offset: { top: $('header').outerHeight(true) + $('nav').innerHeight() - 20 }
	});

	$('nav').on('affix.bs.affix', function(){
		$('main').attr('style', 'margin-top: 152px');
	});

	$('nav').on('affix-top.bs.affix', function(){
		$('main').attr('style', 'margin-top: 0');
	});
});
