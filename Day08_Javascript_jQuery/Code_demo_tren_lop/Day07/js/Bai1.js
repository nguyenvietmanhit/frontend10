document.addEventListener("DOMContentLoaded", function () {
    var buttonObject = document.getElementsByClassName('button');
    for (let i = 0; i < buttonObject.length; i++) {
        buttonObject[i].onclick = function () {
            event.preventDefault();
            var calculator = {
                number1: document.getElementById('number1').value,
                number2: document.getElementById('number2').value,
                result: document.getElementById('result'),
                Sum: function () {
                    this.number1 = parseInt(this.number1);
                    this.number2 = parseInt(this.number2);
                    return this.number1 + this.number2;
                },
                Hieu: function () {
                    this.number1 = parseInt(this.number1);
                    this.number2 = parseInt(this.number2);
                    return this.number1 - this.number2;
                }
            }
            if (buttonObject[i].innerHTML == "a + b") {
                //alert(calculator.Sum());
                calculator.result.innerHTML = calculator.number1 + "+" + calculator.number2 + "=" + calculator.Sum();
            }
            else if (buttonObject[i].innerHTML == "a - b") {
                calculator.result.innerHTML = calculator.number1 + "+" + calculator.number2 + "=" + calculator.Sum();
            }

        }
    }

}, false)






