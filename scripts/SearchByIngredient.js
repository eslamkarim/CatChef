var recipe = localStorage.getItem("recipes");
var AddButton = document.getElementById("addButton");
var SearchInput = document.getElementById("searchInput");
var IngredintsHtml = document.getElementById("ingredintsAdded");
var searchButton = document.getElementById("searchButton");
var recipesPlaceholder = document.getElementById("recipes-placeholder");
var UserIngredientArray=[];
var babyArray=[];
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
    for (let i = 0; i < 18; i++) {
        if(sortedArray[i].matched != 0)
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
//event listener for ingredient add button
AddButton.addEventListener('click',function () {
    if(/^[a-zA-Z]+$/.test(SearchInput.value)){
        UserIngredientArray.push(SearchInput.value);
        IngredintsHtml.innerHTML+=SearchInput.value;
        IngredintsHtml.innerHTML+=" ";
        SearchInput.value="";
    }else{
        SearchInput.value="";
    }
  })
//event listener for search button
searchButton.addEventListener('click',function () {
    if(SearchInput.value != "" && /^[a-zA-Z]+$/.test(SearchInput.value)){
        UserIngredientArray.push(SearchInput.value);
        IngredintsHtml.innerHTML+=SearchInput.value;
        IngredintsHtml.innerHTML+=" ";
        SearchInput.value="";
    }
    else{
        SearchInput.value="";
    }
    babyArray=SearchByIngredient(UserIngredientArray);
    console.log(result);
    UserIngredientArray=[];
    IngredintsHtml.innerHTML=" ";
    load_recipes();
});

function load_recipes() {
    recipesPlaceholder.innerHTML =""
    for (let i = 0; i < babyArray.length; i++) {
        recipesPlaceholder.innerHTML +=
        `<div class=" col-sm-6 col-md-4 col-lg-3 col-xl-2 list-item h-25 my-3 mx-auto">
            <div class="card w-30 h-30 shadow">
                <img class="card-img-top" src=${babyArray[i].image} alt="Card image cap">
                <div class="card-body">
                    <span class="score">
                        <div class="score-wrap">
                            <span class="stars-active" style="width:${babyArray[i].rating * 20}%">
                                <i class="fas fa-star" aria-hidden="true"></i>
                                <i class="fas fa-star" aria-hidden="true"></i>
                                <i class="fas fa-star" aria-hidden="true"></i>
                                <i class="fas fa-star" aria-hidden="true"></i>
                                <i class="fas fa-star" aria-hidden="true"></i>
                            </span>
                            <span class="stars-inactive">
                                <i class="far fa-star" aria-hidden="true"></i>
                                <i class="far fa-star" aria-hidden="true"></i>
                                <i class="far fa-star" aria-hidden="true"></i>
                                <i class="far fa-star" aria-hidden="true"></i>
                                <i class="far fa-star" aria-hidden="true"></i>
                            </span>
                        </div>
                    </span>
                    <h5 class="card-title"><a
                            href="../html/specific_recipe.html?name=${babyArray[i].name}">${babyArray[i].name}</a></h6>
                        <p class="card-text overflow-hidden">${babyArray[i].description}</p>
                </div>
            </div>
        </div>`
    }
}