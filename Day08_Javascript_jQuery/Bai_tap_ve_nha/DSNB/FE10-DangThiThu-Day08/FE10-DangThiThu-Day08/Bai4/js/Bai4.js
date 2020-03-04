$(document).ready(function(){
	function kiemtra(num){
		var boolean = true;
		if(num <2)
		{
			boolean= false;
		}
		else
		{
			for(var i=2; i <= num/2; i++)
			{
				if(num % i == 0){
					boolean = false;
					break;
				}
			}
		}
		return boolean;
	}
	$('input').click(function(){
				var num_obj=$('#number1').val();
				var onep='';
				var num=parseInt(num_obj);
				for (var i=1;i<=num;i++){
					if(kiemtra(i)==true){
						onep+=i+',';
					}
				}
				$('#result').html("Các số nguyên tố từ 1 - "+num+" là: "+onep);
				event.preventDefault();

		});



