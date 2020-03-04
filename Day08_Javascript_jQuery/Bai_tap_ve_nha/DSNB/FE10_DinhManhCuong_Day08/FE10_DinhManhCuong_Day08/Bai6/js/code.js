var regex = new RegExp("[^@]+@[^\.]+\..+")



$('#button-submit').click(function(event){
    var email = $('#email').val();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var note = $('#note').val();
    var guest = $('#guest').val();

    var error = $('#error');
    var result = $('#result');

    if(email == "" || name == "" || phone == "" || note == "" || guest == ""){
        error.html("Cần nhập đủ các trường!");
        event.preventDefault();
        return;
    }
    else if(!regex.test(email)){
        error.html("Cần nhập format email cho trường này!");
        event.preventDefault();
        return;
    }
    else{
        var kq = "";
        kq += "Your email address: " + email + "</br>";
        kq += "Name: " + name + "</br>";
        kq += "Notes: " + note + "</br>";
        kq += "Telephone number: " + phone + "</br>";
        kq += "No. of guests: " + guest;
        result.html(kq)
    }
    event.preventDefault();
});
