var food = require('../models/food.js');

var apiController = {

	deleteFood : function (req, res) {
		var foodSlug = req.params.slug;
		food.foodDelete(foodSlug);

		res.redirect('/');
	}
};

module.exports = apiController