$(document).ready(function () {    
    $('.btn-success').click(function (e) {  
        var chieuRong = $('#chieu-rong').val();        
        var array = [];
        if ((isNaN(chieuRong) == true)) {
            $('#warning').html('Cần nhập số')
        }else if ((chieuRong == "")) {
            $('#warning').html('Không để trống');
        }else{
            for (let i = 1; i <= chieuRong; i++) {                
                var count = 0;
                for (let j = 1; j <= i; j++) {
                    if (i%j == 0) {
                        count++;
                    }                    
                }
                if (count <= 2) {
                    array.push(" " + i);
                }
            }
            $('#warning').html("");
            $('#chuvi').html("Các số nguyên tố từ 1 đến " + chieuRong + " là: " + array);
        }


        event.preventDefault();
    });
});