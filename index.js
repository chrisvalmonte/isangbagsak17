$(document).ready(function() {

	var $body = $('body');
	$body.scrollspy({
		target: '#navbar',
		offset: 300,
	});


	var $navbar = $('#navbar');
	$navbar.affix();

	var $navLink = $navbar.find('.nav a');
	$navLink.on('click', function() {
		$('.navbar-collapse.in').collapse('hide');
	});


	var $workshops = $('main').find('.workshop');
	$workshops.on('click', workshopDetailsPrepare);

	var $workshopDetails = $('#workshop-details');
	$workshopDetails.on('hidden.bs.modal', workshopDetailsClear);
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
