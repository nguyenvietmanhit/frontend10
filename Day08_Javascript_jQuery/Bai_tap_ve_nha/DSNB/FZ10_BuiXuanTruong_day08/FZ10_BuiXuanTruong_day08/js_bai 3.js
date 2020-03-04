$(document).ready(function(){
	$(".btn").click(function(event){
		event.preventDefault();
		var Radius=$("#exampleInputRadius").val();
		if(Radius==""){
			$("#warning").html("Không được để trống dữ liệu");
			$("#display").hmtl("");
		}
		else if(isNaN(Radius)==true){
			$("#warning").html("Cần nhập dữ liệu là số");
			$("#display").hmtl("");
		}
		else{
			$("#warning").html("");
			$("#display").html("Chu vi = "+((parseFloat(Radius))*2*Math.PI).toFixed(1)+" m"+"<br/>"+"Diện tích = "+(Math.PI*Math.pow(parseFloat(Radius),2)).toFixed(1)+" m<sup>2</sup>");
		}
	})
})