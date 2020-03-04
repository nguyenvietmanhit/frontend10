$(document).ready(function(){
	$(".btn").click(function(event){
		event.preventDefault();
		var leng=$("#exampleInputDai").val();
		if(leng==""){
			$("#warning").html("Không được để trống dữ liệu");
			$("#display").hmtl("");
		}
		else if(isNaN(leng)==true){
			$("#warning").html("Cần nhập dữ liệu là số");
			$("#display").hmtl("");
		}
		else{
			$("#warning").html("");
			$("#display").html("Chu vi = "+(parseFloat(leng))*4+" m"+"<br/>"+"Diện tích = "+(Math.pow(parseFloat(leng),2))+" m<sup>2</sup>");
		}
	})
})