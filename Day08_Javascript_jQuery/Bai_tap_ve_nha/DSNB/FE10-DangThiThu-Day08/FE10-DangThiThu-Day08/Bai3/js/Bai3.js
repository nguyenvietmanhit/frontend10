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
			var result =3.14*number1*number1;

		var result1 =2*3.14*number1;
		var num1 = result1.toFixed(1);
		$('#result').html("Diện tích = " + result +"m"  + '<br>'+  " Chu vi = " + num1 + "m" +'<sup>2</sup>' );
		}
		event.preventDefault();
	});


});



