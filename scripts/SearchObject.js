export default class SearchObject {
    name;
    ingredients = new Array();
    image;
    description;
    instructions = new Array();
    rating;

    constructor(id, name, ingredients = null, instructions = null, description = null, image = null, rating = null) {
        if (arguments.length == 2) {
            this.id = id;
            this.text = name;
        }
        else {
            this.name = name;
            ingredients.forEach(element => {
                this.ingredients.push(element);
            });
            this.image = image;
            this.rating = rating;
            instructions.forEach(element => {
                this.instructions.push(element);
            });
            this.description = description;
        }
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setIngredients(ingredients) {
        ingredients.forEach(element => {
            this.ingredients.push(element);
        });
    }
    getIngredients() {
        return this.ingredients;
    }
    setInstructions(instructions) {
        instructions.forEach(element => {
            this.instructions.push(element);
        });
    }
    getInstructions() {
        return this.instructions;
    }
    setDescription(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
    setImage(img) {
        this.image = img;
    }
    getImage() {
        return this.image;
    }
    setRating(rate) {
        this.rating = rate;
    }
    getRating() {
        return this.rating;
    }
}