$(document).ready(function(){
			$('input').click(function(){
				var n_obj=$('#number1').val();
				var n=parseInt(n_obj);
				var zoro='';
				var luffy='';
				for (var i=1;i<=n;i++){
					if(i%2==0){
						 zoro+=i+',';
					}
					else
						 luffy+=i+',';
				}
				 $('#result').html("Các số chẵn từ 1 - "+n+" là: "+zoro+" <br/> Các số lẻ từ 1- "+n+" là: "+luffy);
				event.preventDefault();
			});
		});