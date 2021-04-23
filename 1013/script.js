var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

console.log(lines);
var [A,B,C] = lines[0].split(" ").map(item => parseFloat(item));

var maiorAB = (A + B + Math.abs(A - B))/2;
if(C> maiorAB){
    maiorAB = C
}

console.log(`${maiorAB} eh o maior`);