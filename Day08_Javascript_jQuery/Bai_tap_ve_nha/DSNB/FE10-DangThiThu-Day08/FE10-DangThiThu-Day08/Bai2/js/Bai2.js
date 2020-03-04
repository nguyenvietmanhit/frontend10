$(document).ready(function(){
	$("#form").submit(function(){
		var number1 =$.trim($('#number1').val()) ;


		
		if(number1=='')
		{
			$('#error').text("không được để trống dữ liệu ");
			return false;

		}

		else if(isNaN(number1))
		{
			$('#error').text("Cần nhập dữ liệu là số");
			return false;
		}
		else{
			var result = number1 * number1;
		var result1 =number1*4;
		$('#result').html("Diện tích = " + result +"m"  + '<br>'+  " Chu vi = " + result1 + "m" +'<sup>2</sup>' );
		}

		event.preventDefault();
	});


});



