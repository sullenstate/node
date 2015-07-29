var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/characters');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.post('/create-hero', indexController.createHero);

var server = app.listen(6603, function() {
	console.log('Express server listening on port ' + server.address().port);
});
