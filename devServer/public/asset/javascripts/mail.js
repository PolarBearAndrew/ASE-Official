$(document).ready(function(){
	$('.send').click(function(){

		var href = 'mailto:chenpoanandrew@gmail.com?subject=ASE TESTe&body=';
		var body = '';
		var inputs = $('input');

		for (var i = 0; i < inputs.length; i++) {
			var input = inputs[i];
			var name = $(input).attr('name');
			var value = $(input).val();
			body += name + ':' + value + '\n';
		}

		$(this).attr('href', href + encodeURIComponent(body));
	});  // click end
}); // doc ready end
