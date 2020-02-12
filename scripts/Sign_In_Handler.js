var email;
var password;

document.getElementById("sign_in").addEventListener("click", function(event){
    event.preventDefault();
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    if (email == "" || password == ""){
        alert("Null required fields..");
    } else {
       sign_in_result = sign_in(email, password);
        if (sign_in_result)
            alert("signed in");
        else
            alert("Wrong username or password.") 
    }
    
})

function sign_in(email, password){
    storage_legnth = window.localStorage.length;
    local_storage_keys = Object.keys(localStorage);
    users = [];

    for(i=0; i < local_storage_keys.length; i++){
        users[i] = JSON.parse(window.localStorage.getItem(local_storage_keys[i]));
        if (email == users[i].email && password == users[i].password){
            return true;
        }
    }
    return false;
}