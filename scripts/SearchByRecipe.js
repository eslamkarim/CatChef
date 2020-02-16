var recipe = localStorage.getItem("recipes");
function SearchByRecipeName(recipeName) {
    var RecipeData = null;
    if (!/^ *$/.test(recipeName) && typeof (recipeName) != "undefined") {
        var regex = new RegExp("^" + recipeName + "$");
        JSON.parse(recipe).forEach(element => {
            if (element.name.match(regex)) {
                RecipeData = element;
            }
        });
    }
    return RecipeData;
}

function SearchAllRecipes(recipeName) {
    var RecipesArray = new Array();
    var regex = new RegExp("^" + recipeName + "$", "i");
    JSON.parse(recipe).forEach(element => {
        if (element.name.toLowerCase().includes(recipeName.toLowerCase())) {
            RecipesArray.push(element);
        }
    });
    return RecipesArray;
}

function navSearch(target, recipeName) {

    let resultList = target;
    resultList.innerHTML = "";
    var count = 0;
    resultList.innerHTML += `<div class="row">`
    SearchAllRecipes(recipeName).forEach(element => {
        count++;
        if (count < 20) {
            resultList.innerHTML += `
            <option value="${element.name}">${element.name}</option>`;
        }
    },
        count = 0
    );
}
function addSlashes(str){
    str = str.replace(/'/g, "\\'");
    console.log(str)
}

function updateResult(query, container) {
    let resultList = container;
    if (Object.keys(sessionStorage).length > 1) {
        resultList.innerHTML = "";
        var count = 0;
        resultList.innerHTML += `<div class="row">`
        SearchAllRecipes(query).forEach(element => {
            count++;
            if (count < 20) {
                resultList.innerHTML += `
                        <div class="col-md-3">
                            <div class="card mb-2 h-30 w-30">
                                <img class="card-img-top" src="${element.image}" alt="Card image cap">
                                <div class="card-body">
                                <h4 class="card-title">${element.name}</h4>
                                <p class="card-text">${element.description}</p>
                                <a class="btn btn-primary" href="../html/specific_recipe.html?name=${element.name}">Details</a>
                                <button class="btn btn-primary" id="favourite" name="${element.name}" onclick="favs(this)" >Add to favourits</button>
                                </div>
                            </div>
                        </div>`;
            }
        },
            resultList.innerHTML += `</div>`,
            count = 0
        );
    } else {
        resultList.innerHTML = "";
        var count = 0;
        resultList.innerHTML += `<div class="row">`
        SearchAllRecipes(query).forEach(element => {
            count++;
            if (count < 20) {
                resultList.innerHTML += `
                        <div class="col-md-3">
                            <div class="card mb-2 h-30 w-30">
                                <img class="card-img-top" src="${element.image}" alt="Card image cap">
                                <div class="card-body">
                                <h4 class="card-title">${element.name}</h4>
                                <p class="card-text">${element.description}</p>
                                <a class="btn btn-primary" href="../html/specific_recipe.html?name=${element.name}">Details</a>
                                </div>
                            </div>
                        </div>`;
            }
        },
            resultList.innerHTML += `</div>`,
            count = 0
        );
    }
}

function favs(element){
    var user_favs = new Array();
    user_id = Object.keys(sessionStorage);
    user_id = user_id[1];
    user = JSON.parse(sessionStorage.getItem(user_id));
    user_favs = user.favourits;
    user_favs.push(element.name);
    user.favourits = user_favs;
    sessionStorage.setItem(user_id, JSON.stringify(user))
    localStorage.setItem(user_id, JSON.stringify(user))
}