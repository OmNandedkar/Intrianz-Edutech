document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
 
    checkData();
 });
 
 var username = document.getElementById("username");
 var address = document.getElementById("address");
 var email = document.getElementById("email");
 var phoneno = document.getElementById("phoneno");
 var pass1 = document.getElementById("pass1");
 var pass2 = document.getElementById("pass2");
 
 function checkData() {
    var usernameValue = username.value.trim();
    var addressValue = address.value.trim();
    var emailValue = email.value.trim();
    var phonenoValue = phoneno.value.trim();
    var pass1Value = pass1.value.trim();
    var pass2Value = pass2.value.trim();
 
    if (usernameValue == "") {
       setError(username, "Name can not be Empty");
    } else {
       setSuccess(username);
    }

    if (addressValue == "") {
      setError(address,"Address can not be Empty");
    } else {
      setSuccess(address);
    }
 
    if (emailValue == "") {
       setError(email, "Email can not be Empty");
    } else if (!isEmail(emailValue)) {
       setError(email, "Email is not Valid");
    } else {
       setSuccess(email);
    }

    if(phonenoValue == ""){
      setError(phoneno,"Phone NO. can not be Empty");
    }else if (!isPhoneNo(phonenoValue)){
      setError(phoneno,"Phone No is not valid");
    }else{
      setSuccess(phoneno);
    }
 
 
    if (pass1Value == "") {
       setError(pass1, "Password can not be Empty");
    } else {
       setSuccess(pass1);
    }
 
 
    if (pass2Value == "") {
       setError(pass2, "Password can not be Empty");
    } else if (pass1Value !== pass2Value) {
       setError(pass2, "Password does not match");
    } else {
       setSuccess(pass2);
    }
 
 }
 
 
 function setError(u, msg) {
    var parentBox = u.parentElement;
    parentBox.className = "input-field error";
    var span = parentBox.querySelector("span");
    var fa = parentBox.querySelector(".fa");
    span.innerText = msg;
    fa.className = "fa fa-exclamation-circle";
 }
 
 function setSuccess(u) {
    var parentBox = u.parentElement;
    parentBox.className = "input-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className = "fa fa-check-circle";
 }
 
 function isEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
 }


 function isPhoneNo(e) {
   var num=/^\d{10}$/;
   return num.test(e);
 }