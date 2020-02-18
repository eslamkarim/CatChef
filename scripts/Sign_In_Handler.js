var email;
var password;
var signed_in_user = null;
var flag_signed_in = false;

document.getElementById("sign_in").addEventListener("click", function(event){
    event.preventDefault();
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    if (email == "" || password == ""){
        alert("Null required fields..");
    } else {
       sign_in_result = sign_in(email, password);
        if (sign_in_result){
            console.log("redirecting");
            window.location.href = "../index.html"
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

    for(i=0; i < local_storage_keys.length; i++){
        user_key = local_storage_keys[i];
        if(user_key.localeCompare("recipe_date")!=0){
            user_data = JSON.parse(window.localStorage.getItem(user_key));
        if (email == user_data.email && password == user_data.password){
            sessionStorage.setItem(user_key, JSON.stringify(user_data));
            signed_in_user = user_key;
            flag_signed_in = true;
            return true;
        }
        }else
            continue;
    }
    return false;
}

function clear_sign_in_feilds(){
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}