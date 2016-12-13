var app = require('express')();

app.use(function(req, res, next) {
	console.log('\n\nALLWAYS');
	next();
});

app.get('/a', function(req, res){
	console.log('/a: route terminated');
	res.send('a');
});

app.get('/a', function(req, res) {
	console.log('/a: never called');
});
app.get('/b', function(req, res, next){
	console.log('b: route not terminated');
	next();
});
app.use(function(req, res, next){
	console.log('SOMETIMES');
	next();
});
app.get('/b', function(req, res, next) {
	console.log('/b (part 2): error thrown');
	throw new Error('b failed');
});

app.use('/b', function(err, req, res, next) {
	console.log('/b error detected and passed on');
	next(err);
});