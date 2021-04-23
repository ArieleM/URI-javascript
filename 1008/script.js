var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

console.log(lines);
var [numFunc, horasTrab, valorHora] = lines.map(item => parseFloat(item))

var salario = horasTrab * valorHora

console.log(`NUMBER = ${numFunc}\nSALARY = U$ ${salario.toFixed(2)}`);