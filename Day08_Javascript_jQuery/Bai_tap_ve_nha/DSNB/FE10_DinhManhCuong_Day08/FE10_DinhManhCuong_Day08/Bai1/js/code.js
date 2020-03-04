
$('#submit').click(function(){
    var a = $('#a').val();
    var b = $('#b').val();
    var error = "";
    var result;
    error_obj = $('#error');
    result_obj = $('#result')
    if(a == "" || b == ""){
        error = "Dữ liệu không được để trống!";
        error_obj.html(error)
        result_obj.html(result)
        event.preventDefault();
        return;
    }
    //ép kiểu
    a = parseFloat(a);
    b = parseFloat(b);
    //ktra số
    if(isNaN(a) || isNaN(b)){
        error = "Phải nhập là số!";
    }
    else{
        var p = (a+b)*2;
        var s = a*b;
        var result = "Chu vi = " + p + "m<br/>" + "Diện tích = " + s +"m<sup>2</sup>";  
        
    }
    error_obj.html(error)
    result_obj.html(result)
    
    event.preventDefault();
});


