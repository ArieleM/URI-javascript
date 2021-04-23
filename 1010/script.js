var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var [primPeca, segPeca] = lines.map(peca => peca.split(" "))

totalPrimPeca = parseInt(primPeca[1]) * parseFloat(primPeca[2]);
totalSegPeca = parseInt(segPeca[1]) * parseFloat(segPeca[2]);
totalPagar = totalPrimPeca + totalSegPeca;
console.log(`VALOR A PAGAR: R$ ${totalPagar.toFixed(2)}`);