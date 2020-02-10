var recipe = localStorage.getItem("recipes");
var recipeName = getParameterByName('name');
JSON.parse(recipe).forEach(element => {
    if(element.name.includes(recipeName))
        console.log(element);
});
