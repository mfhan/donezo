var FetchDispatcher = require('../dispatcher/FetchDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var FetchConstants = require('../constants/FetchConstants');


var currentMonkey = {
	id: null,
	monkey: '',
	address: '',
	customer: ''
}

var monkeys = null;

var MonkeyStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
	    this.emit(FetchConstants.CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
	    this.on(FetchConstants.CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
	    this.removeListener(FetchConstants.CHANGE_EVENT, callback);
	},

	getCurrentMonkey: function(){
		return currentMonkey;
	},

	getMonkeys: function(format){
		if (monkeys == null)
			return monkeys;

		if (format == null)
			return monkeys;

		if (format == 'array'){
			var array = [];
			var keys = Object.keys(monkeys);
			for (var i=0; i<keys.length; i++){
				var key = keys[i];
				array.push(monkeys[key]);
			}

			return array;
		}

	}

});

MonkeyStore.dispatchToken = FetchDispatcher.register(function(action) {

	if (action.type == FetchConstants.CURRENT_ORDER_UPDATED){
		currentMonkey = action.currentMonkey;
      	MonkeyStore.emitChange();
	}

	if (action.type == FetchConstants.ORDERS_RECEIVED){
		console.log('FetchDispatcher - ORDERS_RECEIVED');
		var list = action.monkeys;

		if (monkeys == null)
			monkeys = {}

		for (var i=0; i<list.length; i++){
			var monkey = list[i];
			monkeys[monkey.id] = monkey;
		}

     	MonkeyStore.emitChange();
	}

	if (action.type == FetchConstants.ORDER_CREATED){

		currentMonkey = {
			id: null,
			monkey: '',
			address: '',
			customer: ''
		}

		if (monkeys == null)
			monkeys = {}

		monkeys[action.monkey.id] = action.monkey;
		console.log('ORDER_CREATED Notification Received: '+JSON.stringify(monkeys));

     	MonkeyStore.emitChange();
	}
});

module.exports = MonkeyStore;