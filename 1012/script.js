var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

console.log(lines);
var [A,B,C] = lines[0].split(" ").map(item => parseFloat(item));
const PI = 3.14159;

var triangulo = A * C /2;
var circulo = PI * (C * C);
var trapezio = (A + B) * C /2 ;
var quadrado = B * B;
var retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);