$(document).ready(function() {

	var $body = $('body');
	$body.scrollspy({
		target: '#site-nav',
		offset: 300,
	});


	var $navbar = $('#site-nav');
	$navbar.affix({ offset: { top: $navbar.height() } });

	var $navLink = $navbar.find('.nav a');
	$navLink.on('click', function() {
		$('.navbar-collapse.in').collapse('hide');
	});


	var $workshops = $('main').find('.workshop');
	$workshops.on('click', workshopDetailsPrepare);

	var $workshopDetails = $('#workshop-details');
	$workshopDetails.on('hidden.bs.modal', workshopDetailsClear);

	var $root = $('html, body');
	$('a').on('click',function() {
		var href = $.attr(this, 'href');
		$root.animate({ scrollTop: $(href).offset().top }, 500);
		return false;
	});
});



function workshopDetailsClear()
{
	var $workshopDetails = $(this);
	$workshopDetails.find('.description').text('');
	$workshopDetails.find('.location').text('');
	$workshopDetails.find('.name').text('');
	$workshopDetails.find('.pillar').text('');
	$workshopDetails.find('.presenters').text('');
}



function workshopDetailsPrepare()
{
	var $workshopClone = $(this).clone(true, true);
	var description 	= $workshopClone.find('.description').text();
	var location 			= $workshopClone.find('.location').text();
	var name 					= $workshopClone.find('.name').text();
	var pillar 				= $workshopClone.find('.pillar').text();
	var presenters	 	= $workshopClone.find('.presenters').text();


	var $workshopDetails = $('#workshop-details');
	var $wdDescription 	= $workshopDetails.find('.description');
	var $wdLocation 		= $workshopDetails.find('.location');
	var $wdName 				= $workshopDetails.find('.name');
	var $wdPillar 			= $workshopDetails.find('.pillar');
	var $wdPresenters 	= $workshopDetails.find('.presenters');


	$wdDescription.append(description);
	$wdLocation.append(location);
	$wdName.append(name);
	$wdPillar.append(pillar);
	$wdPresenters.append(presenters);
}
