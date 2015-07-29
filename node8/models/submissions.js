var mongoose = require('mongoose');

var submissionSchema = mongoose.Schema({
	name 			: {type : String},
	bio 			: {type : String},
	skills	 		: {type : Array, default : []},
	exper			: {type : Number},
	why			 	: {type : String} 
});

var Submission = mongoose.model('submission', submissionSchema);

module.exports = Submission;