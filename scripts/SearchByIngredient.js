var recipe = localStorage.getItem("recipes");
console.log(SearchByRecipeName("Cinnamon Cranraisin Bread"));
function updateResult(query) {
    let resultList = document.getElementById("card-container");
    resultList.innerHTML = "";
    var count = 0, row = 0;
    SearchAllRecipes(query).forEach(element => {
        count++;
        row=0;
        if (count < 20) {
            if(row < 3){
                resultList.innerHTML += `<div class="row">
                    <div class="card mb-2 col-4">
                    <img class="card-img-top" src="${element.image}" alt="Card image cap">
                    <div class="card-body">
                      <h4 class="card-title">${element.name}</h4>
                      <p class="card-text">${element.description}</p>
                      <a class="btn btn-primary">Button</a>
                    </div>
                </div>`;
            }
            row++;
        }
    },
    count=0
    );
}