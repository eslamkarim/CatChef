var recipe = localStorage.getItem("recipes");
var recipesArray = JSON.parse(recipe);

var recipeDay = document.getElementById('recipeDay');
var recipeImg1 = document.getElementById('recipeImg1');
var slideShow = document.getElementsByClassName('card-img-top');
var recipeTitle = document.getElementsByClassName('card-title');
var recipeText = document.getElementsByClassName('card-text');
var detailsButtons = document.getElementsByClassName('btn btn-primary')
var i = 1, x;
var slide = 1;
// function displayRecipe() {

//         var randomRecipes = Math.round(Math.random() * recipesArray.length);

//         recipeImg1.setAttribute("src", recipesArray[randomRecipes].image);
//         recipeTitle[0].textContent = recipesArray[randomRecipes].name;
//         recipeText[0].textContent = recipesArray[randomRecipes].description;
// }
// setInterval(displayRecipe, 3000);

function displaySlideShow() {
        if (slide == 1) {
                for (var i = 0; i < 3; i++) {
                        var randomRecipes = Math.round(Math.random() * recipesArray.length);
                        slideShow[i].setAttribute("src", recipesArray[randomRecipes].image);
                        recipeTitle[i].textContent = recipesArray[randomRecipes].name;
                        recipeText[i].textContent = recipesArray[randomRecipes].description;
                        detailsButtons[i].setAttribute("href","../html/specific_recipe.html?name="+recipesArray[randomRecipes].name);
                }
                slide = 2;
        }else{
                for (var i = 3; i < 6; i++) {
                        var randomRecipes = Math.round(Math.random() * recipesArray.length);
                        slideShow[i].setAttribute("src", recipesArray[randomRecipes].image);
                        recipeTitle[i].textContent = recipesArray[randomRecipes].name;
                        recipeText[i].textContent = recipesArray[randomRecipes].description;
                        detailsButtons[i].setAttribute("href","../html/specific_recipe.html?name="+recipesArray[randomRecipes].name);
                }
                slide = 1;
        }
}

$('#multi-item-example').on('slide.bs.carousel', function () {
        displaySlideShow();
})

$('#multi-item-example').carousel({
        interval: 4000
})