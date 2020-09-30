var error;

function validate(){
    error = false;
    validateUsername();
    if(error){
        return;
    }
    validatePassword();
    if(error){
        return;
    }
    validateEmail();
    if(error){
        return;
    }
    validateaddress();
    if(error){
        return;
    }
    validatenumberofcopies();
    if(error){
        return;
    }
    valdiatetypeofgame();
    if(error){
        return;
    }
    validateterms();
    if(error){
        return;
    }
    window.alert("Preorder Success");
}

function validateUsername(){
    var text = document.getElementById("username").value;

    var flag = true;
    for(let i = 0; i < text.length; i++){
        var char = text.charCodeAt(i);
        if(!(char > 47 && char < 58) && !(char > 64 && char < 91) && !(char > 96 && char < 123)){
            flag = false;
            break;
        }
    }
    if(text.length < 5 || !flag){
        window.alert("Username must be alphanumeric and 5 characters minimal!");
        error = true;
    }
}

function validatePassword(){
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("rpassword").value;
    if(password1 != password2){
        window.alert("Password must be the same!");
        error = true;
    }
}

function showPasswordText(){
    if(document.getElementById("showPassword").checked){
        document.getElementById("password").type = "text";
        document.getElementById("rpassword").type = "text";
    }
    else{
        document.getElementById("password").type = "password";
        document.getElementById("rpassword").type = "password";
    }
}

function validateaddress(){
    var text = document.getElementById("address").value;
    if(text.length < 12){
        window.alert("Addresse must contain more than 12 characters");
        error = true;
     }
}

function validatenumberofcopies(){

}

function valdiatetypeofgame(){
    var radio1 = document.getElementById("typeofgame1");
    var radio2 = document.getElementById("typeofgame2");
    var radio3 = document.getElementById("typeofgame3");
    if(!radio1.checked && !radio2.checked && !radio3.checked){
        window.alert("Please choose type of game");
        error = true;
    }
}

function validateterms(){
    var servterm = document.getElementById("terms");
    if(!servterm.checked){
        window.alert("Please click agree on terms and services")
        error = true;
    }
}

function validateEmail(){
    var flag = false;
    var text = document.getElementById("email").value;
    if((text.indexOf("@") == -1 || text.indexOf(".") == -1) || text.indexOf("@") == 1 || text.indexOf(".") == text.length-1){
        flag = true;
    }
    if(text.charAt(text.indexOf("@")+1) == "."){
        flag = true;
    }
    if(flag){
        window.alert("Email is invalid!");
        error = true;
    }
}

function resetForm(){
    if(window.confirm("Are you sure you want to reset?")){
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("rpassword").value = "";
        document.getElementById("email").value = "";
        document.getElementById("address").value = "";
        document.getElementById("typeofgame1").checked = false;
        document.getElementById("typeofgame2").checked = false;
        document.getElementById("typeofgame3").checked = false;
        document.getElementById("terms").checked = false;
    }
    else{
        return;
    }
}