function SearchByRecipeName(recipeName){
    var recipe = localStorage.getItem("recipes");
    var RecipeData;
    JSON.parse(recipe).forEach(element => {
        if(element.name.match(recipeName)){
            RecipeData = element;
        }
    });
    return RecipeData;
}
