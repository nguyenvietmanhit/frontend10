$(document).ready(function(){
	function check_SNT(a){
		for(var i=2;i<a;i++)
			{
				if(a%i==0) return false;
			}
		return true;
	}
	$(".btn").click(function(event){
		event.preventDefault();
		var number=$("#exampleInputNumber").val();
		number=parseInt(number);
		var result="1";
		for(var i=2;i<=number;i++)
			if(check_SNT(i)==true){
				result+=","+i;
			}
			$("#display").html("Số nguyên tố từ 1 - "+number+" là : "+result);
	})
})