$(document).ready(function(){
	$(".btn").click(function(event){
		event.preventDefault();
		var leng=$("#exampleInputDai").val();
		var wid=$("#exampleInputRong").val();
		if(leng==""||wid==""){
			$("#warning").html("Không được để trống dữ liệu");
			$("#display").hmtl("");
		}
		else if(isNaN(leng)==true||isNaN(wid)==true){
			$("#warning").html("Cần nhập dữ liệu là số");
			$("#display").hmtl("");
		}
		else{
			$("#warning").html("");
			$("#display").html("Chu vi = "+(parseFloat(leng)+parseFloat(wid))*2+" m"+"<br/>"+"Diện tích = "+(parseFloat(leng)*parseFloat(wid))+" m<sup>2</sup>");
		}
	})
})