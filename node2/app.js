var fs = require('fs');
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


app.get('/', function (req, res) {
	var fileContents = fs.readFileSync('./public/data.txt', 'utf-8');
	
	res.header('Content-Type', 'text/html');
	res.send(fileContents);
});

app.get('/', function (req, res) {
	fs.readFile('./public/data.txt', 'utf-8', function (err, data){
		res.header('Content-Type', 'text/html');
		res.send(data);
	});
});

var server = app.listen(5246, function() {
	console.log('Express server listening on port ' + server.address().port);
});
