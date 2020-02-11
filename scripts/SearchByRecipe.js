var recipe = localStorage.getItem("recipes");
function SearchByRecipeName(recipeName){
    var RecipeData=null;    
    if(!/^ *$/.test(recipeName) && typeof(recipeName) != "undefined"){
        var regex = new RegExp("^" + recipeName + "$");
        JSON.parse(recipe).forEach(element => {
            if(element.name.match(regex)){
                RecipeData = element;
            }
        });
    }
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
