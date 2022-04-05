console.log(1 == 1 && 9);
console.log(9 && 1 == 1);
console.log(0 == 1 && 9);
console.log(9 && 0);
console.log(0 && 9);
console.log (0 && '');
console.log ('' && 0);
console.log(9 && []);
console.log([] && 9);

let func1 = () => 'sou uma funcao';
let func2 = () => 2 + 2;

console.log(1 && func1());
console.log(1 && func2());