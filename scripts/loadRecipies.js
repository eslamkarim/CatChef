var recipes=[];
var recipeJSON;
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("recipes.json", function(text){
    recipeJSON = JSON.parse(text);
    recipeJSON.recipes.forEach(element => {
        var recipeObj = new Recipe(element.title,element.ingredients,element.photo_url,element.rating_stars);
        recipes.push(recipeObj);
    });;
    localStorage.setItem('recipes', JSON.stringify(recipes));
});
