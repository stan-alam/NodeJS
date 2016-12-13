app.use( function(req, res, next) {
	console.log('processing request for "' + req.url + '"....');
});

app.use( function( req, res, next) {
	console.log('terminating request');
	res.send('thanks for playing!');
	// note we do not call next() here... this function terminates the request
});

app.use( function( req, res, next){
	console.log('whoops, i\'ll never called!');
});

