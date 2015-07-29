var Person = require('../models/person.js');

var indexController = {
	index: function(req, res) {
	
		Person.find({}, function(err, documents){
			res.render('index', {characters : documents});
		});

	},

	createHero: function(req, res){
		//Access form data
		var hero = {
			name : req.body.name,
			costume : req.body.costume,
			catchPhrase : req.body.catchPhrase,
			powers : req.body.powers.split(', ')
		}

		//Create new person
		var newHero = new Person(hero);

		//Save person
		newHero.save(function(err, doc){
			res.redirect('/');
		});
	}
};

module.exports = indexController;