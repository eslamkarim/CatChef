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

function updateResult(query, container) {
    let resultList = container;
    resultList.innerHTML = "";
    var count = 0;
    resultList.innerHTML += `<div class="row">`
    SearchAllRecipes(query).forEach(element => {
        count++;
        if (count < 19) {
            resultList.innerHTML += `<div class=" col-sm-6 col-md-4 col-lg-3 col-xl-2 list-item h-25 my-3 mx-auto">
            <div class="card w-30 h-30 shadow">
                <img class="card-img-top" src=${element.image} alt="Card image cap">
                <div class="card-body">
                    <span class="score">
                        <div class="score-wrap">
                            <span class="stars-active" style="width:${element.rating * 20}%">
                                <i class="fas fa-star" aria-hidden="true"></i>
                                <i class="fas fa-star" aria-hidden="true"></i>
                                <i class="fas fa-star" aria-hidden="true"></i>
                                <i class="fas fa-star" aria-hidden="true"></i>
                                <i class="fas fa-star" aria-hidden="true"></i>
                            </span>
                            <span class="stars-inactive">
                                <i class="far fa-star" aria-hidden="true"></i>
                                <i class="far fa-star" aria-hidden="true"></i>
                                <i class="far fa-star" aria-hidden="true"></i>
                                <i class="far fa-star" aria-hidden="true"></i>
                                <i class="far fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                    </span>
                    <h5 class="card-title"><a
                            href="../html/specific_recipe.html?name=${element.name}">${element.name}</a></h6>
                        <p class="card-text overflow-hidden">${element.description}</p>
                </div>
            </div>
        </div>`
        }
    },
        resultList.innerHTML += `</div>`,
        count = 0
    );
}