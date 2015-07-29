var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Submission = require('./models/submissions');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// DB Connect
mongoose.connect('mongodb://localhost/omega3');

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	Submission.find({}, function(err, documents){
		res.render('applicants', {submissions : documents});
	});
});

app.get('/received', function(req, res){
	res.render('received')
});

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	console.log(req.body);
	// Get the form data
	var applicant = {
		name 	: req.body.name,
		bio		: req.body.bio,
		skills	: req.body.skills.split(', '),
		exper 	: req.body.exper,
		why		: req.body.why
	}
	// Create new applicant
	var newApplicant = new Submission(applicant);
	//Save the applicant data
	newApplicant.save(function(err, doc){
		res.redirect('received');
	});
});

app.delete('/applicants', function(req,res){
	console.log(req.body);
	Submission.remove(req.body, function(err){
		Submission.find({}, function(err, documents){
			res.render('applicants', {submissions : documents});
		})
	});
});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
