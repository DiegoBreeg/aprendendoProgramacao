var data = '7 14 106';

data = data.split(/\s/).map(ell => +ell);

var [a, b, c] = [...data];
var abs = a-b;


var MaiorAB = (a + b + abs)/ 2;
var oMaior = Math.max(MaiorAB, c);

console.log(`${oMaior} eh o maior`);