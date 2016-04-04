$(document).ready(function(){

	$('body, html').on('click', '#done', function(){

		var w = $('#input-power').val();
		var h = $('#input-hour').val();
		var tmp = ( (w * h) / 1000 );

		var result = {
			ans_left_1 : 1.63,
			ans_right_1 : 1.63,
			ans_left_2 : 2.38,
			ans_right_2 : 2.10,
			ans_left_3 : 3.52,
			ans_right_3 : 2.89,
			ans_left_4 : 4.61,
			ans_right_4 : 3.79,
			ans_left_5 : 5.42,
			ans_right_5 : 4.42,
			ans_left_6 : 6.13,
			ans_right_6 : 4.83,

			ans_left_7 : 2.53,
			ans_right_7 : 2.12,
			ans_left_8 : 3.55,
			ans_right_8 : 2.91,
			ans_left_9 : 4.25,
			ans_right_9 : 3.44,
			ans_left_10 : 6.15,
			ans_right_10 : 4.85,
		};

		for(var key in result){
			console.log('#' + key);
			$('#' + key).val(
				parseFloat( Math.round( ( ( w * h ) / 1000 ) * result[key] * 30 * 100 ) ) / 100
				);
		}
		return false;
	}); // onclick end
}); //doc ready end
