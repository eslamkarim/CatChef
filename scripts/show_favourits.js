function user_show_favs() {
    var user_favs = new Array();
    var user_ida = Object.keys(sessionStorage);
    var user_id = user_ida[1];
    var user = JSON.parse(sessionStorage.getItem(user_id));
    var user_favs = user.favourits;

    let resultList = document.getElementById('favourtis');
    resultList.innerHTML = "";
    resultList.innerHTML += `<div class="row">`    
    user_favs.forEach(element => {
        console.log(element);
        recipe = SearchByRecipeName(element)
        
        resultList.innerHTML += `
                    <div class="col-md-3">
                        <div class="card mb-2 h-30 w-30">
                            <img class="card-img-top" src="${recipe.image}" alt="Card image cap">
                            <div class="card-body">
                            <h4 class="card-title">${recipe.name}</h4>
                            <p class="card-text">${recipe.description}</p>
                            <a class="btn btn-primary" href="../html/specific_recipe.html?name=${recipe.name}">Details</a>
                            </div>
                        </div>
                    </div>`;
    },
        resultList.innerHTML += `</div>`,
    );
}

user_show_favs()

