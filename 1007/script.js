var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C, D] = lines

var nota1 = parseFloat(A)
var nota2 = parseFloat(B)
var nota3 = parseFloat(C)
var nota4 = parseFloat(D)

var produto = nota1 * nota2 - nota3 * nota4

console.log(`DIFERENCA = ${produto}`);