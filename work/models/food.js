var allFoods = [];

// Build a class constructor
var FoodItem = function(name, flavor, image){
	this.name = name;
	this.slug = name.trim().toLowerCase().replace(/ /g, '-');
	this.flavor = flavor;
	this.image = image;
};

var addFood = function(name, flavor, image){
	var newFood = new FoodItem(name, flavor, image);
	allFoods.push(newFood);
};

addFood('Pizza', 'Good', 'http://static4.businessinsider.com/image/53908351ecad04ca746ba577-1000-667/shutterstock_84904912.jpg');
addFood('Lasagna', 'Good too', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Lasagna_(1).jpg');
addFood('Bananas Foster', 'Sweet', 'http://rk.wsimgs.com/wsimgs/rk/images/dp/recipe/201470/0025/img80l.jpg');
addFood('Escargot', 'uhhhh...', 'http://www.lechefsblog.com/wp-content/uploads/2011/02/IMG_1067.jpg');

var foodFind = function(slug){
	return allFoods.filter(function(element){
		return element.slug === slug;
	})[0]
}

var foodDelete = function (slug) {
	for (var i = 0; i < allFoods.length; i++) {
		if(allFoods[i].slug === slug){
			allFoods.splice(i, 1);
			return
		}
	};
};

module.exports = {
	allFoods	: allFoods,
	addFood		: addFood,
	FoodItem 	: FoodItem,
	foodFind 	: foodFind,
	foodDelete 	: foodDelete
}