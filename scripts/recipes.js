

var recipeData = new Array();
var recipesPlaceholder = document.getElementById("recipes-placeholder");
recipeData = JSON.parse(localStorage.recipes);



// var paginationContainer = document.querySelector('#pagination-container');
// var ul = paginationContainer.getElementsByTagName('ul')[0];
// var li = ul.getElementsByTagName('li');


// for (let i = 0; i < numOfPages; i++) {
//     li[i].addEventListener('click', e => {
//         console.log(e)

//     });

// }


function load_recipes() {
    for (let i = 0; i < 200; i++) {
        recipesPlaceholder.innerHTML +=
            `<div class="col-3 list-item h-25">
        <div class="card m-4 w-30 h-30">
            <img class="card-img-top" src=${recipeData[i].image} alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title"><a href="../html/specific_recipe.html?name=${recipeData[i].name}">${recipeData[i].name}</a></h4>
                <p class="card-text overflow-hidden">${recipeData[i].description}</p>
            </div>
        </div>
    </div>`
    }

}
load_recipes();

var items = $(".list-wrapper .list-item");
var numItems = items.length;
var perPage = 18;

items.slice(perPage).hide();

$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
    }
});




