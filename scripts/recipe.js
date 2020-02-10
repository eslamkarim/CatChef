class Recipe{
    name;
    ingredients= new Array();
    image;
    rating;

    constructor(name,ingredients,image,rating){
        this.name=name;
        ingredients.forEach(element => {
            this.ingredients.push(element);            
        });
        this.image=image;
        this.rating=rating;
    }
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setIngredients(ingredients){
        ingredients.forEach(element => {
            this.ingredients.push(element);            
        });
    }
    getIngredients(){
        return this.ingredients;
    }
    setImage(img){
        this.image=img;
    }
    getImage(){
        return this.image;
    }
    setRating(rate){
        this.rating=rate;
    }
    getRating(){
        return this.rating;
    }
}