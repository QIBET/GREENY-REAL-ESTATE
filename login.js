validateLogin()
var email = document.myForm.email.value
var pass = document.myForm.password.value


if (email == "") {
    alert("Email must be filled.");
    document.myForm.email.focus();
    return false;
} else if (pass == "") {
    alert("Password must be filled.");
    document.myForm.psw.focus();
    return false;
}
return true;