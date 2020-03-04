
$('#submit').click(function(){
    var a = $('#a').val();
    var error = "";
    var result = "";
    var result1 = "";
    var result2 = "";
    error_obj = $('#error');
    result_obj = $('#result')
    if(a == ""){
        error = "Dữ liệu không được để trống!";
        error_obj.html(error)
        result_obj.html(result)
        event.preventDefault();
        return;
    }
    //ép kiểu
    a = parseInt(a);
    //ktra số
    if(isNaN(a)){
        error = "Phải nhập là số!";
    }
    else{
        for(i = 1; i<= a; i++){
            if(i % 2 == 0){
                result1 += i + ", "
            }
            else{
                result2 += i + ", "
            }
        }
        result = "Các số chẵn từ 1 - " + a + " là: " + result1 + "<br/>" + "Các số lẻ từ 1 - " + a + " là: " + result2;
    }
    error_obj.html(error)
    result_obj.html(result)
    
    event.preventDefault();
});
