function formValidate(){
    let email=document.getElementById("email");
    let emailerr=document.getElementById("email-error");
    let password=document.getElementById("password").value;
    let passerr=document.getElementById("password-error");
    let emailCheck= /^([a-zA-Z0-9\._]{1,30})@([a-zA-Z0-9\-]{1,20}).([A-Za-z]{2,6})?.([a-zA-Z]{2,5})/;

    if(emailCheck.test(email.value))
    {
        flag=0;
    }
    else{
        emailerr.innerHTML= "**Invalid Email ID";
        flag=1;
    }

    if(password.trim() =="" || password.trim()== 'null')
    {
        passerr.innerHTML = "**Field cannot be empty!"
        flag=1;
    }

    if(flag==0){
        return true;
    }
    else {
        return false;
    } 

}