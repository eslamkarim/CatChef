var recipe = localStorage.getItem("recipes");
var recipesArray = JSON.parse(recipe);

var recipeDay = document.getElementById('recipeDay');
var recipeImg1 = document.getElementById('recipeImg1');
 var recipeTitle1 = document.getElementById('recipeTitle1');
var recipeText1 = document.getElementById('recipeText1');



function displayRecipe(){ 
        
        var randomRecipes =Math.round( Math.random() * recipesArray.length);

        recipeImg1.setAttribute("src", recipesArray[randomRecipes].image);
        recipeTitle1.textContent= recipesArray[randomRecipes].name;
        recipeText1.textContent= recipesArray[randomRecipes].description;
        console.log(recipesArray[randomRecipes].image);

}
setInterval(displayRecipe, 3000);

// console.log(recipesArray[5]);