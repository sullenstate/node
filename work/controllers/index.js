var food = require('../models/food.js');

var indexController = {
	index: function(req, res) {
		res.render('index', {foodieFoods : food.allFoods});
	},

	foodPage : function(req, res){
		var foodSlug = req.params.slug;
		var foundFood = food.foodFind(foodSlug);

		res.render('food', {food : foundFood});
	}
};

module.exports = indexController;