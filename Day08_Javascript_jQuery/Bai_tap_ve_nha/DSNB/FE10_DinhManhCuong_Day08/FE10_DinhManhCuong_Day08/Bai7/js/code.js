$(document).ready(function(){
    $('#chat').click(function(){
        var message = $('#message').val();
        if(message == ""){
            event.preventDefault();
            return;
        }
        // Tạo div
        var chatbox = $('#chatbox');
        $('#message').val("");
        time = getCurrentDateTime()
        chatbox.append('<div class="row content"><div class="img"><img src="images/user.png"/></div><div class="message-content"><p class="name">php39</p><p class="say">' + message + '</p></div><div class="p-content"><p><i class="fas fa-sun"></i> '+ time + '</p></div></div>')
        chatbox.appendChild(div_mess);
        event.preventDefault();
    });
})


function getCurrentDateTime() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes();
    // + currentdate.getSeconds();

    return datetime;
}
