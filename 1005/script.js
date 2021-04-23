var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var [A, B] = lines

var nota1 = 3.5 * parseFloat(A)
var nota2 = 7.5 * parseFloat(B)
var media = (nota1 + nota2)/11;

console.log(`MEDIA = ${media.toFixed(5)}`);