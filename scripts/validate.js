
function registerValidate()
{   
    const fullname = document.getElementById('fullname').value;
    const phno = document.getElementById('phno').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const password2=document.querySelector('password-confirm').value;
    alert(fullname,phno,email,password);

    let emailerr=document.getElementById("email-error");
    let passerr=document.getElementById("password-error");
    let passerr2=document.getElementById("Cpassword-error");
    let nameerr=document.getElementById("name-error");
    let phnoerr=document.getElementById("phno-error");

    let emailCheck= /^([a-zA-Z0-9\._]{1,30})@([a-zA-Z0-9\-]{1,20}).([A-Za-z]{2,6})?.([a-zA-Z]{2,5})/;
    let phnoCheck= /^([0-9]{3,10})?([\s.-])?([0-9]{3})?([\s.-])?([0-9]{4})$/;
    let passwordCheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    //let nameCheck= /^([a-zA-Z\.]{2,30})\s([a-zA-Z\.]{2,30}+)$/;
    var flag;
    //FULL NAME
    if(fullname.trim() =="" || fullname.trim()== 'null')
    {
        nameerr.innerHTML = "**Field cannot be empty!"
        flag=1;
    }
    else flag=0;
     //EMAIL
    if(email.trim() =="" || email.trim()== 'null')
    {
        emailerr.innerHTML = "**Field cannot be empty!"
        flag=1;
    }
    if(emailCheck.test(email)){
         flag=0;
    }
    else{
        emailerr.innerHTML = "**Invalid Format";
        flag=1;
    }
    //PH NO
    if(phno.trim() =="" || phno.trim()== 'null')
    {
        phnoerr.innerHTML = "**Field cannot be empty!"
        flag=1;
    }
    if(phnoCheck.test(phno)){
         flag=0;
    }
    else{
        phnoerr.innerHTML = "**Invalid Format.Hover over for information";
        flag=1;
    }
    //PASSWORD -1
    if(password.trim() =="" || password.trim()== 'null')
    {
        passerr.innerHTML = "**Field cannot be empty!"
        flag=1;
    }
    if(passwordCheck.test(password)){
         flag=0;
    }
    else{
        passerr.innerHTML = "**Password should meet criteria. Hover over for information";
        flag=1;
    }
    //PASSWORD-2
    if(password2.trim() =="" || password2.trim()== 'null')
    {
        passerr2.innerHTML = "**Field cannot be empty!"
        flag=1;
    }

    if(password2.matches(password))
        {
            flag=0;
        }
    else{
        passerr2.innerHTML = "**Passwords not matching!"
        flag=1;
    }

    if(flag==0){
        return true;
    }
    else {
        return false;
    }
}




// Password Meter

// function showPasswordMeter()
// {
//     strengthMeter.style.display='block';
//     passStrengthTab.style.display='block';

// }

// function hidePasswordMeter(){
//     strengthMeter.style.display='none';
//     passStrengthTab.style.display='none';
// }