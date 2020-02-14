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
            console.log("Signed in");
        else{
            console.log("Wrong username or password.");
        }
    }
})

function sign_in(email, password){
    storage_legnth = window.localStorage.length;
    local_storage_keys = Object.keys(localStorage);
    users = [];

    for(i=0; i < local_storage_keys.length; i++){
        users[i] = JSON.parse(window.localStorage.getItem(local_storage_keys[i]));
        if (email == users[i].email && password == users[i].password){
            // add the object to the web session.
            console.log(users[i]);
            return true;
        }
    }
    return false;
}

function clear_sign_in_feilds(){
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}