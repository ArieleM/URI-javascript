var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var [nomeVend, salario, totalVendas] = lines
var comissao = 0.15;

var bonus = parseFloat(totalVendas) * comissao;

var salarioBonus = bonus + parseFloat(salario);

console.log(`TOTAL = ${salarioBonus.toFixed(2)}`);