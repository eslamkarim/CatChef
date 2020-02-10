var recipe = localStorage.getItem("recipes");
var recipeName = getParameterByName('name');
var recipeData;
JSON.parse(recipe).forEach(element => {
    if(element.name.includes(recipeName)){
        recipeData = element;
        console.log(recipeData);
    }
});

document.getElementById("recipeName").textContent = recipeData.name;

document.getElementById("recipeImage").src = recipeData.image;

document.getElementById("recipeDesc").textContent = "- " + recipeData.description;

recipeData.ingredients.forEach(ingredient => {
    document.getElementById("ingredients").innerHTML += `<h4>- ${ingredient}<h4>`
});

recipeData.instructions.forEach(instruction => {
    document.getElementById("insructions").innerHTML += `<h4>- ${instruction}<h4>`
});