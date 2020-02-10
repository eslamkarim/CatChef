var recipe = localStorage.getItem("recipes");
function SearchByRecipeName(recipeName){
    var RecipeData;
    JSON.parse(recipe).forEach(element => {
        if(element.name.match(recipeName)){
            RecipeData = element;
        }
    });
    return RecipeData;
}

function SearchAllRecipes(recipeName){
    var RecipesArray = new Array();
    JSON.parse(recipe).forEach(element => {
        if(element.name.includes(recipeName)){
            RecipesArray.push(element);
        }
    });
    return RecipesArray;
}
