var recipe = localStorage.getItem("recipes");
var recipesArray = JSON.parse(recipe);

var recipeDay = document.getElementById('recipeDay');
var recipeImg1 = document.getElementById('recipeImg1');
var slideShow = document.getElementsByClassName('card-img-top');
var recipeTitle = document.getElementsByClassName('card-title');
var recipeText = document.getElementsByClassName('card-text');

var i=1 , x;

function displayRecipe() {

        var randomRecipes = Math.round(Math.random() * recipesArray.length);

        recipeImg1.setAttribute("src", recipesArray[randomRecipes].image);
        recipeTitle[0].textContent = recipesArray[randomRecipes].name;
        recipeText[0].textContent = recipesArray[randomRecipes].description;
        console.log(recipesArray[randomRecipes].image);

}
setInterval(displayRecipe, 3000);

function displaySlideShow(){

        while(true){
                

                // for (i = 1; i <= 3; i++) {
                        var randomRecipes = Math.round(Math.random() * recipesArray.length);
                        slideShow[i-1].setAttribute("src", recipesArray[randomRecipes].image);
                        recipeTitle[i].textContent = recipesArray[randomRecipes].name;
                        recipeText[i].textContent = recipesArray[randomRecipes].description; 
                
                // }
                i++;

        }
}

$('#multi-item-example').on('slide.bs.carousel', function () {
        setInterval(displaySlideShow, 200);
        })

// $('#multi-item-example').carousel({
//         interval: 20
// })