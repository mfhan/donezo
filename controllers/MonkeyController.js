var Monkey = require('../models/Monkey');


module.exports = {

	get: function(params, isRaw, completion){
		Monkey.find(params, function(err, monkeys){
			if (err){
				completion(err, null);
			    return;
			}

			if (isRaw == true){
				completion(null, monkeys);
				return;
			}

			var list = [];
			for (var i=0; i<monkeys.length; i++){
				var monkey = monkeys[i];
				list.push(monkey.summary());
			}

			completion(null, list);
		    return;
		});
	},

	getById: function(id, completion){
		Monkey.findById(id, function(err, monkey){
			if (err){
				var error = {message:'Monkey Not Found'};
				completion(error, null);
			    return;
			}

			if (monkey == null){
				var error = {message:'Monkey Not Found'};
				completion(error, null);
			    return;
			}

			completion(null, monkey.summary());
		});
	},

	post: function(params, completion){

		Monkey.create(params, function(err, monkey){
			if (err){
				completion(err, null);
			    return;
			}

			completion(null, monkey.summary());
		});
	},

	put: function(id, params, completion){

		Monkey.findByIdAndUpdate(id, params, {new:true}, function(err, monkey){
			if (err){
				completion(err, null);
			    return;
			}

			completion(null, monkey.summary());
		});
	}

}