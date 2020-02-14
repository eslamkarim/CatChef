var recipe = localStorage.getItem("recipes");

//function to seaarch for an array of words from user in the ingredients array in our dataset and return its count (counting dublicates too ex: if there are 2 sugar words in the array it will print 2)
function SearchByIngredient(ingredintsArray) {
    var RecipesArray=[];
    JSON.parse(recipe).forEach(element => { 
        var count = 0;
        var resultObj = new result(element.name,count);
        ingredintsArray.forEach(ingredient=>{       
            var re = new RegExp(ingredient,"i");        
            element.ingredients.forEach(line => {            
                if(re.test(line)) count++;
            });
        });
        resultObj.matched=count;
        RecipesArray.push(resultObj);
    });
    var sortedArray = RecipesArray.sort(compare);
    //return the first 20 recipes that match
    var finalResultArray = [];
    for (let i = 0; i < 20; i++) {
        finalResultArray.push(SearchByRecipeName(sortedArray[i].title));   
    }
    return finalResultArray;
}

//constructor for the recipe object
function result(title, matched) {
    this.title = title;
    this.matched = matched;
}

//compare function to sort an array of objects based on the matched ingredients
function compare(a, b) {
    const recipeA = a.matched;
    const recipeB = b.matched;
  
    let comparison = 0;
    if (recipeA > recipeB) {
      comparison = 1;
    } else if (recipeA < recipeB) {
      comparison = -1;
    }
    return comparison * -1; //to flip ordering of the array
  }
