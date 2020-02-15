

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
            `<div class="col-md-2 list-item">
        <div class="card mb-2 h-30 w-30">
            <img class="card-img-top" src=${recipeData[i].image} alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${recipeData[i].name}</h4>
                <p class="card-text">${recipeData[i].description}</p>
                <a class="btn btn-primary">Button</a>
            </div>
        </div>
    </div>`


    }

}
load_recipes();

var items = $(".list-wrapper .list-item");
var numItems = items.length;
var perPage = 18;
var currPage = 1
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




