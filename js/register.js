var registerForm;

//The event handler for the click event of the Register Button
var registerClick = function(){
    $("register").blur();
    if (registerForm.validateForm()){
        alert("Please correct the errors on the page!");
    }else{
        $("registration_form").submit();
    }
}

//The event handler for the click event of the Reset button

var resetClick = function(){
    $("reset_form").blur();
    $("registration_form").reset();
    registerForm.resetErrors();
}

//The event handler for the onload event

window.onload = function(){
    registerForm = new RegisterForm();
    $("register").onclick = registerClick;
    $("reset_form").onclick = resetClick;
}