var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var countries = require('./models/countries.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/countries', function(req, res){
	res.send(countries);
});

app.post('/search', function(req, res){
	var result = [];
	var reg = new RegExp(req.body.str.toLowerCase());

	countries.forEach(function(country){
		if (country.name.toLowerCase().match(reg)) {
			result.push(country);
		};
	});
	res.send(result);
});

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
