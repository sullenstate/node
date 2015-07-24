var submissions = require('../models/submissions.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	submit: function(req, res){
		submissions.push(req.body);
		if (submissions.length >= 4) {
			res.redirect('/submissions');
		}
		else {
			res.redirect('/');
		}
	},

	submissions: function(req, res){
		// console.log(submissions);
		res.render('subm', {submissions: submissions});
	},

	voting: function(req, res){
		var battle = [];
		var randInt1 = Math.floor(Math.random()*submissions.length);
		var randInt2 = Math.floor(Math.random()*submissions.length);
		battle.push(submissions[randInt1]);
		if (randInt2 === randInt1) { 
			while (randInt2 === randInt1) {
				var randInt2 = Math.floor(Math.random()*submissions.length);
			}
		}
		battle.push(submissions[randInt2]);
		console.log(battle);
		res.render('battle', {battle: battle});
	}
};

module.exports = indexController;