class Recipe {
    name;
    ingredients = new Array();
    image;
    description;
    instructions = new Array();
    rating;
    prep_time_minutes;
    cook_time_minutes;
    total_time_minutes;

    constructor(name, ingredients = null, instructions = null, description = null, image = null, rating = null,prep_time_minutes=null,cook_time_minutes=null,total_time_minutes=null) {
        if (arguments.length == 1) {
            this.name = name;
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
            this.prep_time_minutes=prep_time_minutes;
            this.cook_time_minutes=cook_time_minutes;
            this.total_time_minutes=total_time_minutes;
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