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
        if (sign_in_result){
            alert("signed in")
        }   
        else{
            clear_sign_in_feilds();
            alert("Wrong username or password.");
        }
    }
})

function sign_in(email, password){
    storage_legnth = window.localStorage.length;
    local_storage_keys = Object.keys(localStorage);
    user_data = [];

    for(i=0; i < local_storage_keys.length; i++){
        user_key = local_storage_keys[i];
        user_data[i] = JSON.parse(window.localStorage.getItem(user_key));
        if (email == user_data[i].email && password == user_data[i].password){
            sessionStorage.setItem(user_key, JSON.stringify(user_data));
            return true;
        }
    }
    return false;
}

function clear_sign_in_feilds(){
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}