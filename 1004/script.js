var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var [num1, num2] = lines

var prod = parseInt(num1) * parseInt(num2);

console.log(`PROD = ${prod}`);