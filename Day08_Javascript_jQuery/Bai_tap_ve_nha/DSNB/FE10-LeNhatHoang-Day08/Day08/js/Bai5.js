$(document).ready(function () {    
    $('.btn-success').click(function (e) {  
        var chieuRong = $('#chieu-rong').val();        
        var arraySoChan = [];
        var arraySoLe = [];
        if ((isNaN(chieuRong) == true)) {
            $('#warning').html('Cần nhập số')
        }else if ((chieuRong == "")) {
            $('#warning').html('Không để trống');
        }else{
            for (let i = 1; i <= chieuRong; i++) {                
                if (i % 2 == 0) {
                    arraySoChan.push(" " + i);
                }else{
                    arraySoLe.push(" " + i)
                }
            }
            $('#warning').html("");
            $('#sochan').html("Các số chẵn từ 1 đến " + chieuRong + " là: " + arraySoChan);
            $('#sole').html("Các số lẻ từ 1 đến " + chieuRong + " là: " + arraySoLe);
        }


        event.preventDefault();
    });
});