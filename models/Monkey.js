var mongoose = require('mongoose');

var MonkeySchema = new mongoose.Schema({
	monkey: {type:String, trim:true, lowercase:true, default:''},
	venue: {type:String, trim:true, lowercase:true, default: 'public'},
	address: {type:String, trim:true, lowercase:true, default:''},
	status: {type:String, trim:true, lowercase:true, default:''},
	originator: {type:String, trim:true, lowercase:true, default:''},
	penalty: {type:Number, default:0},
	timeplaced: {type:Date, default: Date.now},
	deadline: {type:Date, default: null},
	note:  {type:String, trim:true, lowercase:true, default:''}
});


MonkeySchema.methods.summary = function() {
	var summary = {
		'monkey':this.monkey,
		'venue':this.venue,
		'address':this.address,
		'status':this.status,
		'originator':this.originator,
		'penalty':this.penalty,
		'timeplaced':this.timeplaced,
		'deadline':this.deadline,
		'note':this.note,
		'id':this._id
	};

	return summary;
};

module.exports = mongoose.model('MonkeySchema', MonkeySchema);