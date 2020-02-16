function user_show_favs() {
    var user_favs = new Array();
    var user_ida = Object.keys(sessionStorage);
    if (user_ida.length > 1) {
        var user_id = user_ida[1];
        var user = JSON.parse(sessionStorage.getItem(user_id));
        var user_favs = user.favourits;
    
        let resultList = document.getElementById('favourtis');
        resultList.innerHTML = "";
        for (let i = 0; i < user_favs.length; i++) {
            var user_recipe=SearchByRecipeName(user_favs[i]);
            resultList.innerHTML +=
            `<div class="col col-sm-6 col-md-4 col-lg-3 list-item h-25 my-3 mx-auto">
                <div class="card w-30 h-30 shadow">
                    <img class="card-img-top" src=${user_recipe.image} alt="Card image cap">
                    <div class="card-body">
                        <span class="score">
                            <div class="score-wrap">
                                <span class="stars-active" style="width:${user_recipe.rating * 20}%">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </span>
                                <span class="stars-inactive">
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </span>
                            </div>
                        </span>
                        <h5 class="card-title"><a
                                href="../html/specific_recipe.html?name=${user_recipe.name}">${user_recipe.name}</a></h6>
                            <p class="card-text overflow-hidden">${user_recipe.description}</p>
                    </div>
                </div>
            </div>`
        }
    }else{
        alert("Not logged in");
    
    }
}

user_show_favs()

