import SearchObject from "../scripts/SearchObject.js";

//test if localStorage is null
if (localStorage.getItem('recipes') === null) {

    var recipes = [];
    var searchArr = [];
    var recipeJSON;
    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    //usage:
    var searchObj = new SearchObject("", "element.title");    //empty entry for placeholder in div search
    searchArr.push(searchObj);

    readTextFile("../recipes.json", function (text) {
        recipeJSON = JSON.parse(text);
        var id = 1;
        recipeJSON.recipes.forEach(element => {
            var recipeObj = new Recipe(element.title, element.ingredients, element.instructions,
                element.description, element.photo_url, element.rating_stars);
            recipes.push(recipeObj);
            /********/
            var searchObj = new SearchObject(id, element.title);
            // console.log(searchObj);

            searchArr.push(searchObj);
            // console.log(searchArr);

            id++;
        });;

        localStorage.setItem('recipes', JSON.stringify(recipes));
        localStorage.setItem('searchArr', JSON.stringify(searchArr));
        setTimeout(function () { location.reload(); }, 2000)
    });
    // location.reload();
    // response.setIntHeader("Refresh", 1);
    // location.reload(false);


}

else {
    console.log('recipes already is loaded');

    //get array of recipes from localStorage

    var recipes = JSON.parse(localStorage.getItem('recipes'));

}
