var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var [X,Y] = lines

let consumo = X / Y;

console.log(`${consumo.toFixed(3)} km/l`);