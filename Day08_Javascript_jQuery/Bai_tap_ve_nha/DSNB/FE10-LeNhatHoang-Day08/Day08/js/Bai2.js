$(document).ready(function () {    
    $('.btn-success').click(function (e) {  
        var chieuRong = $('#chieu-rong').val();
        if ((isNaN(chieuRong) == true)) {
            $('#warning').html('Cần nhập số')
            $('#chuvi').html("");
            $('#dientich').html("");
        }else if ((chieuRong == "")) {
            $('#warning').html('Không để trống');
            $('#chuvi').html("");
            $('#dientich').html("");
        }else{
            chieuRong = parseInt(chieuRong);
            var chuvi =    chieuRong * 4;
            var dientich = chieuRong * chieuRong;
            $('#warning').html("");
            $('#chuvi').html("Chu vi = " + chuvi + "m");
            $('#dientich').html("Dien tich = " + dientich + "m" + "<sup>2</sup>");
        }


        event.preventDefault();
    });
});