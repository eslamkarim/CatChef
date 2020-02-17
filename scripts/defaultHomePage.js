
var recipe = localStorage.getItem("recipes");
var recipesArray = JSON.parse(recipe);


var recipeDay = document.getElementById('recipeDay');
var recipeImg1 = document.getElementById('recipeImg1');
var slideShow = document.getElementsByClassName('card-img-top');
var recipeTitle = document.getElementsByClassName('card-title');
var recipeText = document.getElementsByClassName('card-text');
var detailsButtons = document.getElementsByClassName('btn btn-warning');
var cardimages = document.getElementsByClassName("card-img-top");
var cardTitles =  document.getElementsByClassName("card-title");
var cardText =  document.getElementsByClassName("card-text");
var stars = document.getElementsByClassName('stars-active');
var i = 1, x;
var slide = 1;
//initial slider random recipes
for (let i = 0; i < 6; i++) {                
        drawCard(Object.keys(sessionStorage).length,i);
        //detailsButtons[i].setAttribute("href","../html/specific_recipe.html?name="+recipesArray[rand].name);
}

function displaySlideShow() {
        if (slide == 1) {
                for (var i = 0; i < 3; i++) {
                        drawCard(Object.keys(sessionStorage).length,i);                        
                }
                slide = 2;
        }else{
                for (var i = 3; i < 6; i++) {
                        drawCard(Object.keys(sessionStorage).length,i);
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

function drawCard(signed_in,index){
        if(signed_in==2){
                var rand = Math.round(Math.random() * recipesArray.length);
                cardimages[index].setAttribute("src", recipesArray[rand].image);
                cardTitles[index].textContent = recipesArray[rand].name;
                cardText[index].textContent= recipesArray[rand].description;
                detailsButtons[index].setAttribute("name",recipesArray[rand].name);
                detailsButtons[index].onclick= function () {
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
                stars[index].setAttribute("style","width:"+recipesArray[rand].rating * 20+"%");                
        }
        else{
                var rand = Math.round(Math.random() * recipesArray.length);
                cardimages[index].setAttribute("src", recipesArray[rand].image);
                cardTitles[index].textContent = recipesArray[rand].name;
                cardText[index].textContent= recipesArray[rand].description;
                detailsButtons[index].setAttribute("name",recipesArray[rand].name);
                detailsButtons[index].onclick= function () {
                        alert("You are not logged in");
                }
                stars[index].setAttribute("style","width:"+recipesArray[rand].rating * 20+"%");                
        }
}