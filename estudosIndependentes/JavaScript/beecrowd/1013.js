var data = '7 14 106';

data = data.split(/\s/).map(ell => +ell);

var [a, b, c] = [...data];
var abs = a-b;

if(abs < 0) {
    abs * (-1)
};

var MaiorAB = (a + b + abs)/ 2;
var oMaior = Math.max(MaiorAB, c);

console.log(`${oMaior} eh o maior`);