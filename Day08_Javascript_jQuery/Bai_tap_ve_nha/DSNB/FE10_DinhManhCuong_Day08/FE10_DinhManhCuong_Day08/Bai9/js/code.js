$(document).ready(function(){
    $('#submit').click(function(){

        error_obj = $('#error');
        result_obj = $('#result');
        error = "";
        result = "";

        firstname = $('#firstname').val();
        lastname = $('#lastname').val();
        username = $('#username').val();
        address = $('#address').val();
        address2 = $('#address2').val();
        email = $('#email').val();
        country = $('#country').val();
        state = $('#state').val();
        zip = $('#zip').val();

        if(firstname == "" || lastname == "" || username == "" || address == ""){
            error_obj.html("Không được để trống.")
            alert("Không được để trống.");
            event.preventDefault();
            return;
        }
        result += "Fullname: " + firstname + " " + lastname + "<br/>";
        result += "Username: " + username + "<br/>";
        ((email == "") ? (result = result) : (result += "Email: " + email + "<br/>"));
        result += "Address: " + address + "<br/>";
        result += "Country: " + country + "<br/>";
        result += "State: " + state + "<br/>";
        result += "Zip: " + zip;

        error_obj.html(error);
        result_obj.html(result);

        event.preventDefault();
    })
})


