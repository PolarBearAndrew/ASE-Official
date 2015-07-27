$(document).ready(function(){

	$('html, body').on('mouseover', 'img', function(){

		var index = $(this).attr('data-index'); //id

		$('#service' + index).animate({
		    'zIndex': 3
		}, 0);

		$( "#tab" + index ).animate({
		    'zIndex': 2
		}, 0).animate({
		    opacity: 1,
		}, 300);
	});

	$('html, body').on('mouseleave', '.tab', function(){

		var index = $(this).attr('data-index'); //id

		$( "#tab" + index ).animate({
			opacity: 0
		}, 100, function(){
			$(this).animate({ 'zIndex': 0 }, 0)
			$('#service' + index).animate({
			    'zIndex': 1
			}, 0);
		});
	});
});