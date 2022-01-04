function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

function validateLogin(){
    
    let result = true;

    let username = document.getElementById('Loginusername').value
    let password = document.getElementById('Loginpassword').value

    let erruser = document.getElementById('errusername')
    let errpass = document.getElementById('errpassword')
    
    if(username.length == 0){
        erruser.innerHTML = "Username must be filled!";
        result = false;
    }else{
        erruser.innerHTML = "";
    }

    if(password.length == 0){
        errpass.innerHTML = "Password must be filled!";
        result = false;
    }else{
        errpass.innerHTML = "";
    }

    if(result){
        alert("Login success!");
    }
    return result;
}

function validateRegister(){

    let result = true;

    let fullname = document.getElementById('Regisfullname').value
    let RadioM = document.getElementById('RegisRadioM')
    let RadioF = document.getElementById('RegisRadioF')
    let username = document.getElementById('Regisusername').value
    let email = document.getElementById('Regisemail').value
    let telp = document.getElementById('Registelephone').value
    let password = document.getElementById('Regispassword').value
    let confpassword = document.getElementById('Regisconfirm').value
    let Condition = document.getElementById('RegisCondition')

    let errname = document.getElementById('errfullname')
    let erruser = document.getElementById('errusername')
    let errGender = document.getElementById('errGender')
    let erremail = document.getElementById('erremail')
    let errtelp = document.getElementById('errtelp')
    let errpass = document.getElementById('errpassword')
    let errconfirm = document.getElementById('errconfpass')
    let errCondiiton = document.getElementById('errCondition')

    if(fullname == 0){
        errname.innerHTML = "Name must be filled!";
        result = false;
    }
    else{
        errname.innerHTML = "";
    }

    if(!RadioM.checked && !RadioF.checked)
    {
        errGender.innerHTML ="Must Choose Gender";
        result = false;
    }
    else
    {
        errGender.innerHTML = "";
    }

    if(username == 0)
    {
        erruser.innerHTML = "Username must be filled!";
        result = false;
    }
    else
    {
        erruser.innerHTML = "";
    }

    if(email == 0)
    {
        erremail.innerHTML = "Email must be filled!";
        result = false;
    }
    else if(!validateEmail(email))
    {
        erremail.innerHTML = "Wrong email format!";
        result = false;
    }
    else
    {
        erremail.innerHTML = "";
    }

    if(telp == 0)
    {
        errtelp.innerHTML = "Telephone must be filled!";
        result = false;
    }
    else if(telp.length < 12)
    {
        errtelp.innerHTML = "Telephone must contain 12 digit number"
        result = false;
    }
    else
    {
        errtelp.innerHTML = "";
    }

    if(password == 0)
    {
        errpass.innerHTML = "Password must be filled!";
        result = false;
    }
    else
    {
        errpass.innerHTML = "";
    }

    if(confpassword == 0)
    {
        errconfirm.innerHTML = "Please confirm your password!";
        result = false;
    }
    else if(!(password === confpassword))
    {
        errconfirm.innerHTML = "Password doesn't match!";
        result = false;
    }
    else
    {
        errconfirm.innerHTML = "";
    }

    if(!Condition.checked)
    {
        errCondiiton.innerHTML = "Please Checklist the term and condition";
        result = false;
    }
    else
    {
        errCondiiton.innerHTML = "";
    }

    if(result){
    alert("Register success!");
    }
    return result;  
}