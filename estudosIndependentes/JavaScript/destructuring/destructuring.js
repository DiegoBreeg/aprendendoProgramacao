let arr = ['a', 'b', 1, 2, 3];
let [a, b, ...rest] = [...arr]

console.log(a)
console.log(b)
console.log(rest)