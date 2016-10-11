'use strict';
let x = function() {

	console.log("I'm being called from inside the function")

};

let y = function(callback) {
	console.log("I'm doing something");
	callback();

}

y(x);