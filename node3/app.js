var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
	res.render('index');
});

app.post('/formsubmit', function (req, res) {
	console.log(req.body)
    res.redirect('/success')
});

app.get('/formsubmit', function (req, res) {
	res.render('index');
});

app.get('/success', function (req, res) {
	res.send('Success!')
});

var server = app.listen(5698, function() {
	console.log('Express server listening on port ' + server.address().port);
});
