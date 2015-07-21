var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

var siteCounter = 1
var foods = [
	{name: 'pineapple'},
	{name: 'menudo'},
	{name: 'pie'}
]

app.get('/', function(req, res) {
	res.render('index', {
		counter : siteCounter,
		foods : foods
	});

	siteCounter++

});

app.post('/submit', function(req, res){
	console.log('Body - ', req.body)

	foods.push({ name : req.body.name })

	res.redirect('/')
});

var server = app.listen(5096, function() {
	console.log('Express server listening on port ' + server.address().port);
});
