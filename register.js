function validateForm()
var Name = document.myForm.name.value
var phone = document.myForm.phone.value
var email = document.myForm.email.value
var pass = document.myForm.password.value


if (Name == "") {
    alert("Name must be filled.");
    document.myForm.Name.focus();
    return false;
} else if (phone == "") {
    alert("Phone Number must be filled.");
    document.myForm.phone.focus();
    return false;
} else if (email == "") {
    alert("Email must be filled.");
    document.myForm.email.focus();
    return false;
} else if (pass == "") {
    alert("Password must be filled.");
    document.myForm.psw.focus();
    return false;
}

return true;