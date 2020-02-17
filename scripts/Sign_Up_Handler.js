var first_name;
var last_name;
var email;
var password;
var confirm_password;
var gender;

document.getElementById("sign_up_btn").addEventListener("click", function(event){
    event.preventDefault();
    first_name = document.getElementById("first_name").value;
    last_name = document.getElementById("last_name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    confirm_password = document.getElementById("confirm_password").value;
    gender = document.getElementById("gender").value

    if (can_sumbit()) { 
        const user_object = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            confirm_password: confirm_password,
            gender: gender,
            favourits: []
        }
        var key = Math.floor((1 + Math.random()) * 0x10000).toString(16);
        store_in_memory(key, user_object);
        window.location.href = "../html/sign_in.html"
    } if (password != confirm_password) {
        clear_confirmation_password_feild()
        alert("The confirmation password is not matching, please check it back");
    }
});

function can_sumbit(){
    if(password == confirm_password && first_name != "" && last_name != "" && email != "" && password != ""){
        if (email_exists(email))
            return true;
    } else {
        alert("Missing data for sign up..")
        return false;
    }
}

function store_in_memory(key, user_object){
    window.localStorage.setItem(key, JSON.stringify(user_object));
}

function clear_confirmation_password_feild(){
    document.getElementById("confirm_password").value = "";
}

function clear_email_feild(){
    document.getElementById("email").value = "";
}

function clear_feilds_after_sign_up(){
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm_password").value = "";
    document.getElementById("gender").value = "";
}

function email_exists(email){
    storage_legnth = window.localStorage.length;
    local_storage_keys = Object.keys(localStorage);
    users = [];

    for(i=0; i < local_storage_keys.length; i++){
        users[i] = JSON.parse(window.localStorage.getItem(local_storage_keys[i]));
        if (email == users[i].email){
            alert("The email you entered exists.");
            clear_email_feild();
            return false;
        }
    }
    return true;
}