test('buy should add a BUY market order', function(done) {
	exchangeData = exchange.buy(40, 100, exchangeData); //1
	exchangeData.buys.volumes[40].should.eql(100); //2
	done(); //3
});

// 1 submit an order to the exchange using buy function

//2 check to see that, on the buy side, at price of $40 there are exactly 100 units
//should.eql(100) is using the should.js assertion library

//3 done is a callback function indicating to Mocha that we're ready for the next text. 
// Mocha runs serially, meaning that each unit test is fully completed before moving 
// onto the next test. One of the benefits of test driven development it forces
// the software architect to writes the test, you imagine the API that clients 
// might need to use and then plan accordingly.