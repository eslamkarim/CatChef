$(function () {
    $("#nav-placeholder").load("../html/nav.html");
});

document.addEventListener("DOMContentLoaded", function(){
    console.log("SEARCH-NAV: ")
    console.log(document.querySelector('#search-input-nav'))
}, true);

// var container = document.getElementById("card-container");

$('#search-input-nav').ready(function(){
    console.log("SEARCH-NAV: ")
    console.log(document.querySelector('#search-input-nav'))
})

// searchInput.addEventListener('input', e => {
//     console.log(e.target.value);
//     // updateResult(e.target.value, container)
// })