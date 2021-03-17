function validateForm() {
    var name = document.forms["myForm"]["customer_name"];
    var phone = document.forms["myForm"]["phone_no"];
    var email = document.forms["myForm"]["email"];
    var password = document.forms["myForm"]["Password"];


    if (customer_name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    if (phone_no.value == "") {
        window.alert(
            "Please enter your telephone number.");
        phone.focus();
        return false;
    }


    if (email.value == "") {
        window.alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }


    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }

    return true;
}