var recipeName = sessionStorage.getItem('recipe-name');
var recipeData = SearchByRecipeName(recipeName);
console.log("TESTTTTTTT")
if (recipeData == undefined || recipeData == ""){
    window.location.href = "../NotFound.html"
} else {
    document.getElementById("recipeName").textContent = recipeData.name;

    document.getElementById("recipeImage").src = recipeData.image;

    document.getElementById("recipeDesc").textContent = "- " + recipeData.description;

    recipeData.ingredients.forEach(ingredient => {
        document.getElementById("ingredients").innerHTML += `<h4>- ${ingredient}<h4>`
    });

    recipeData.instructions.forEach(instruction => {
        document.getElementById("insructions").innerHTML += `<h4>- ${instruction}<h4>`
    });
}