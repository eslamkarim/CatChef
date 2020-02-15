// var recipeName = sessionStorage.getItem('recipe-name');
var recipeName = getParameterByName('name');
var recipeData = SearchByRecipeName(recipeName);
console.log(recipeName)
if (recipeData == undefined || recipeData == ""){
    window.location.href = "../html/not_found_page.html"
} else {
    document.getElementById("recipeName").textContent = recipeData.name;

    document.getElementById("recipeImage").src = recipeData.image;

    document.getElementById("recipeDesc").innerHTML =`<span class="recipe-directions__list--item">${recipeData.description}
    </span>`;

    recipeData.ingredients.forEach(ingredient => {
        document.getElementById("ingredients").innerHTML +=`<li class="step">
        <span class="recipe-directions__list--item">${ingredient}
        </span>
        </li>`
    });

    recipeData.instructions.forEach(instruction => {
        document.getElementById("insructions").innerHTML += `<li class="step">
        <span class="recipe-directions__list--item">${instruction}
        </span>
        </li>`
    });
    document.getElementById("prep").innerHTML=`<li class="prepTime__item"><i class="fal fa-stopwatch"></i></li>
    <li class="prepTime__item">
        <p class="prepTime__item--type" aria-hidden="true">Prep</p><span aria-hidden="true"><span class="prepTime__item--time">${recipeData.prep_time_minutes}</span> m</span></time>
    </li>
                <li class="prepTime__item">
            <p class="prepTime__item--type" aria-hidden="true">Cook</p><span aria-hidden="true"><span class="prepTime__item--time">${recipeData.cook_time_minutes}</span> m</span></time>
        </li>
                <li class="prepTime__item">
            <p class="prepTime__item--type" aria-hidden="true">Ready In</p><span aria-hidden="true"><span class="prepTime__item--time">${recipeData.total_time_minutes}</span> m</span></time>
        </li>`
}