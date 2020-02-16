
var recipe = localStorage.getItem("recipes");
var recipesArray = JSON.parse(recipe);


var recipeDay = document.getElementById('recipeDay');
var recipeImg1 = document.getElementById('recipeImg1');
var slideShow = document.getElementsByClassName('card-img-top');
var recipeTitle = document.getElementsByClassName('card-title');
var recipeText = document.getElementsByClassName('card-text');
var recipe_links = document.getElementsByName('recipe_link');
var cardimages = document.getElementsByClassName("card-img-top");
var cardTitles =  document.getElementsByClassName("card-title");
var cardText =  document.getElementsByClassName("card-text");
var stars = document.getElementsByClassName('stars-active');
var i = 1, x;
var slide = 1;
//initial slider random recipes
for (let i = 0; i < 6; i++) {
        var rand = Math.round(Math.random() * recipesArray.length);
        cardimages[i].setAttribute("src", recipesArray[rand].image);
        cardTitles[i].textContent = recipesArray[rand].name;
        recipe_links[i].setAttribute("href","../html/specific_recipe.html?name="+recipesArray[rand].name);
        cardText[i].textContent= recipesArray[rand].description;
        stars[i].setAttribute("style","width:"+recipesArray[rand].rating*20+"%");
}

function displaySlideShow() {
        if (slide == 1) {
                for (var i = 0; i < 3; i++) {
                        var randomRecipes = Math.round(Math.random() * recipesArray.length);
                        slideShow[i].setAttribute("src", recipesArray[randomRecipes].image);
                        cardTitles[i].textContent = recipesArray[randomRecipes].name;
                        recipe_links[i].href="../html/specific_recipe.html?name="+recipesArray[randomRecipes].name;
                        cardText[i].textContent= recipesArray[randomRecipes].description;
                        stars[i].setAttribute("style","width:"+recipesArray[randomRecipes].rating*20+"%");
                }
                slide = 2;
        }else{
                for (var i = 3; i < 6; i++) {
                        var randomRecipes = Math.round(Math.random() * recipesArray.length);
                        slideShow[i].setAttribute("src", recipesArray[randomRecipes].image);
                        cardTitles[i].textContent = recipesArray[randomRecipes].name;
                        recipe_links[i].href="../html/specific_recipe.html?name="+recipesArray[randomRecipes].name;
                        cardText[i].textContent= recipesArray[randomRecipes].description;
                        stars[i].setAttribute("style","width:"+recipesArray[randomRecipes].rating*20+"%");
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