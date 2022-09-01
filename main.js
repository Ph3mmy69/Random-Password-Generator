var password = document.getElementById("password");
function genPassword() {

    var char = "0123456789abcdefghijklmnopqrstuvwxyz!@/?#$%&()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    var passwordLength = 12;

    var password = "";

    for (var i = 0; i < passwordLength; i++) {

        var randomNumber = Math.floor(Math.random() * char.length);

        password += char.substring(randomNumber, randomNumber +1)
    }
    document.getElementById("password").value = password;
}