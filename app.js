var math = require('./math');

var parameter = 0;

var args = process.argv.splice(2);
//console.log(args);

if (typeof args[0] !== 'undefined' && args[0] !== null) {
	parameter = args[0];
}
	
var returnValue = math.fib( parameter );
console.log(returnValue);
//debug('fib result:'+returnValue);

return returnValue;
