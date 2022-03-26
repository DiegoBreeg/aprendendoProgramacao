// Trabalhando com map()

const numbers = [1, 2, 3, 4, 5,];
const doubledNumbers = numbers.map(elem => elem * 2);
console.log(doubledNumbers);

const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celsius = fahrenheit.map(elem => Math.round((elem - 32) * 5/9));

console.log(celsius);

// Trabalhando com filter()

const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];

const uniqueArray = yetAnotherArray.filter( (elem, index, arr) => arr.indexOf(elem) === index)
console.log(uniqueArray)