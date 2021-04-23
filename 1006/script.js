var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines

var nota1 = 2.0 * parseFloat(A)
var nota2 = 3.0 * parseFloat(B)
var nota3 = 5.0 * parseFloat(C)
var media = (nota1 + nota2 + nota3)/10;

console.log(`MEDIA = ${media.toFixed(1)}`);