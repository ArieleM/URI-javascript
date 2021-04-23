var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var raio = parseInt(lines[0]);

const PI = 3.14159;

volume = (4/3) * PI * (raio * raio * raio)

console.log(`VOLUME = ${volume.toFixed(3)}`);