

var recipeData = new Array();
var recipesPlaceholder = document.getElementById("recipes-placeholder");
recipeData = JSON.parse(localStorage.recipes);
var babyArray=[] //small array to hold 18 elements only with no correlation to pagination


// var paginationContainer = document.querySelector('#pagination-container');
// var ul = paginationContainer.getElementsByTagName('ul')[0];
// var li = ul.getElementsByTagName('li');


// for (let i = 0; i < numOfPages; i++) {
//     li[i].addEventListener('click', e => {
//         console.log(e)

//     });

// }
//slice the big array and put it into the baby array of reipes then draw the new array into the page, then scroll to the top
function paginate(pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    babyArray=items.slice(showFrom, showTo);
    load_recipes();
    $(window).scrollTop(0);
}
//Draw the html elements of the recipes
function load_recipes() {
    recipesPlaceholder.innerHTML =""
    for (let i = 0; i < babyArray.length; i++) {
        recipesPlaceholder.innerHTML +=
        `<div class="col col-sm-6 col-md-4 col-lg-3 list-item h-25 my-3 mx-auto">
            <div class="card w-30 h-30 shadow">
                <img class="card-img-top" src=${babyArray[i].image} alt="Card image cap">
                <div class="card-body">
                    <span class="score">
                        <div class="score-wrap">
                            <span class="stars-active" style="width:${babyArray[i].rating * 20}%">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </span>
                            <span class="stars-inactive">
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </span>
                        </div>
                    </span>
                    <h5 class="card-title"><a
                            href="../html/specific_recipe.html?name=${babyArray[i].name}">${babyArray[i].name}</a></h6>
                        <p class="card-text overflow-hidden">${babyArray[i].description}</p>
                </div>
            </div>
        </div>`
    }

}

var items = recipeData;
var numItems = recipeData.length;
var perPage = 18;
paginate(1);
//pagination part
$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function(p){
        paginate(p);
    }
});




