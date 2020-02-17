
var recipe = localStorage.getItem("recipes");
var recipesArray = JSON.parse(recipe);


var recipeDay = document.getElementById('recipeDay');
var recipeImg1 = document.getElementById('recipeImg1');
var slideShow = document.getElementsByClassName('card-img-top');
var recipeTitle = document.getElementsByClassName('card-title');
var recipeText = document.getElementsByClassName('card-text');
var detailsButtons = document.getElementsByClassName('btn btn-warning');
var cardimages = document.getElementsByClassName("card-img-top");
var cardTitles = document.getElementsByClassName("card-title");
var cardText = document.getElementsByClassName("card-text");
var i = 1, x;
var slide = 1;
//initial slider random recipes
for (let i = 1; i < 7; i++) {
        drawCard(Object.keys(sessionStorage).length, i);
        //detailsButtons[i].setAttribute("href","../html/specific_recipe.html?name="+recipesArray[rand].name);
}
// function displayRecipe() {

//         var randomRecipes = Math.round(Math.random() * recipesArray.length);

//         recipeImg1.setAttribute("src", recipesArray[randomRecipes].image);
//         recipeTitle[0].textContent = recipesArray[randomRecipes].name;
//         recipeText[0].textContent = recipesArray[randomRecipes].description;
// }
// setInterval(displayRecipe, 3000);

function displaySlideShow() {
        if (slide == 1) {
                for (var i = 1; i < 4; i++) {
                        drawCard(Object.keys(sessionStorage).length, i);
                }
                slide = 2;
        } else {
                for (var i = 4; i < 7; i++) {
                        drawCard(Object.keys(sessionStorage).length, i);
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

function drawCard(signed_in, index) {
        if (signed_in == 2) {
                var rand = Math.round(Math.random() * recipesArray.length);
                cardimages[index].setAttribute("src", recipesArray[rand].image);
                cardTitles[index].innerHTML = `<a href="../html/specific_recipe.html?name=${recipesArray[rand].name}">${recipesArray[rand].name}</a>`;
                cardText[index].textContent = recipesArray[rand].description;
                detailsButtons[index].setAttribute("name", recipesArray[rand].name);
                detailsButtons[index].onclick = function () {
                        var user_favs = new Array();
                        user_id = Object.keys(sessionStorage);
                        user_id = user_id[1];
                        user = JSON.parse(sessionStorage.getItem(user_id));
                        user_favs = user.favourits;
                        user_favs.push(this.name);
                        user.favourits = user_favs;
                        sessionStorage.setItem(user_id, JSON.stringify(user))
                        localStorage.setItem(user_id, JSON.stringify(user)
                        )

                }
        }
        else {
                var rand = Math.round(Math.random() * recipesArray.length);
                cardimages[index].setAttribute("src", recipesArray[rand].image);
                cardTitles[index].textContent = recipesArray[rand].name;
                cardText[index].textContent = recipesArray[rand].description;
                detailsButtons[index].setAttribute("name", recipesArray[rand].name);
                detailsButtons[index].onclick = function () {
                        alert("You are not logged in");
                }
        }
}

// checks if one day has passed. 
function hasOneDayPassed() {
        // get today's date. eg: "7/37/2007"
        var date = new Date().toLocaleDateString();

        // if there's a date in localstorage and it's equal to the above: 
        // inferring a day has yet to pass since both dates are equal.
        if (localStorage.recipe_date == date)
                return false;

        // this portion of logic occurs when a day has passed
        localStorage.recipe_date = date;
        return true;
}


// function which should run once a day
function runOncePerDay() {
        if (!hasOneDayPassed()) return false;

        // your code below
        let ROTD = document.querySelector('#ROTD');
        let rand = Math.round(Math.random() * recipesArray.length);
        let recipe = recipesArray[rand];
        localStorage.ROTD = JSON.stringify(recipe);
        injectROTD(recipe.name, ROTD)
}
if (!runOncePerDay()) {
        loadROTD();
}

function loadROTD() {
        let ROTD = document.querySelector('#ROTD');
        let recipe = JSON.parse(localStorage.ROTD);
        injectROTD(recipe.name, ROTD)
}

runOncePerDay(); // run the code
runOncePerDay(); // does not run the code

function injectROTD(query, container) {
        let resultList = container;
        resultList.innerHTML = "";
        resultList.innerHTML += `<div class="row">`
        let recipe = SearchByRecipeName(query);
        console.log("recipe:");
        console.log(recipe);


        resultList.innerHTML += `<div class="col-sm-8 col-md-8 col-lg-8 col-xl-8 list-item h-25 my-3 mx-auto">
                <div class="card mb-2 h-100 shadow">
                    <img class="card-img-top" src=${recipe.image} alt="Card image cap">
                    <div class="card-body">
                        <span class="score">
                            <div class="score-wrap">
                                <span class="stars-active" style="width:${recipe.rating * 20}%">
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
                        <h5 class="card-title text-center"><a href="../html/specific_recipe.html?name=${recipe.name}">${recipe.name}</a></h5>
                        <p class="card-text overflow-hidden text-center"></p>
                        <a class="btn btn-warning" name="${recipe.name} onclick=""><i class="fas fa-heart" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>`
        count = 0

}