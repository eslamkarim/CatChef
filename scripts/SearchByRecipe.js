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

console.log(SearchByRecipeName("Cinnamon Cranraisin Bread"));
function updateResult(query) {
    let resultList = document.getElementById("card-container");
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