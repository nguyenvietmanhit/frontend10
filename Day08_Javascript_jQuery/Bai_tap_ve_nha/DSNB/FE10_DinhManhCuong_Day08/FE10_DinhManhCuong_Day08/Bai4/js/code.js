
$('#submit').click(function(){
    var a = $('#a').val();
    var error = "";
    var result = "";
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
            console.log(i)
            if(isPrime(i)){
                result = result + i + ", ";
            }
        }
        result = "Các số nguyên tố từ 1 - " + a + " là: " + result;
    }
    error_obj.html(error)
    result_obj.html(result)
    
    event.preventDefault();
});

function isPrime(n){
    if(n < 1){
        return false;
    }
    else if(n == 1){
        return true;
    }
    else{
        for(j = 2; j<= Math.sqrt(n); j++){
            if(n % j == 0){
                return false;
            }
        }
        return true;
    }
}
