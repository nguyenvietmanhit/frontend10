
$('#submit').click(function(){
    var a = $('#a').val();
    var error = "";
    var result;
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
    a = parseFloat(a);
    //ktra số
    if(isNaN(a)){
        error = "Phải nhập là số!";
    }
    else{
        var p = 2*a*Math.PI;
        var s = a*a*Math.PI;
        var result = "Chu vi = " + p + "m<br/>" + "Diện tích = " + s +"m<sup>2</sup>";  
        
    }
    error_obj.html(error)
    result_obj.html(result)
    
    event.preventDefault();
});


