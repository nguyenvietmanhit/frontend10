$(document).ready(function(){
	function check_odd_even(a){
				if(a%2==0) return false;
		return true;
	}
	$(".btn").click(function(event){
		event.preventDefault();
		var number=$("#exampleInputNumber").val();
		number=parseInt(number);
		var result_odd=1;
		var result_even=2;
		for(var i=3;i<=number;i++)
			if(check_odd_even(i)==true){
				result_odd+=","+i;
			}
			else{
				result_even+=","+i;
			}
			$("#display").html("Các số chẵn 1 - "+number+" là: "+result_even+"<br/>"+"Các số lẻ 1 - "+number+" là: "+result_odd);
	})
})