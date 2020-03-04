$(document).ready(function () {    
    $('.btn-success').click(function (e) {         
        var chieuDai = $('#chieu-dai').val();
        var chieuRong = $('#chieu-rong').val();
        if ((isNaN(chieuDai) == true) || (isNaN(chieuRong) == true)) {
            $('#warning').html('Cần nhập số')
            $('#chuvi').html("");
            $('#dientich').html("");
        }else if ((chieuDai == "") || (chieuRong == "")) {
            $('#warning').html('Không để trống');
            $('#chuvi').html("");
            $('#dientich').html("");
        }else{
            chieuDai = parseInt(chieuDai);
            chieuRong = parseInt(chieuRong);
            var chuvi =  (chieuDai + chieuRong) * 2;
            var dientich = chieuDai * chieuRong;
            $('#warning').html("");
            $('#chuvi').html("Chu vi = " + chuvi + "m");
            $('#dientich').html("Dien tich = " + dientich + "m" + "<sup>2</sup>");
        }


        event.preventDefault();
    });
});