$(document).ready(function(){

	$('body, html').on('click', '#done', function(){

		var w = $('#input-power').val();
		var h = $('#input-hour').val();
		var tmp = ( (w * h) / 1000 );

		var result = {
			ans_left_1 : 2.10,
			ans_right_1 : 2.10,
			ans_left_2 : 3.02,
			ans_right_2 : 2.68,
			ans_left_3 : 4.39,
			ans_right_3 : 3.61,
			ans_left_4 : 5.44,
			ans_right_4 : 4.48,
			ans_left_5 : 6.16,
			ans_right_5 : 5.03,
			ans_left_6 : 6.71,
			ans_right_6 : 5.28,
			ans_left_7 : 3.76,
			ans_right_7 : 3.02,
			ans_left_8 : 4.62,
			ans_right_8 : 3.68,
			ans_left_9 : 5.48,
			ans_right_9 : 4.31,
			ans_left_10 : 6.73,
			ans_right_10 : 5.31,
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