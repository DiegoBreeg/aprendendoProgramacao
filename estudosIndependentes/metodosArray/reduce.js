const numbers = [1, 2, 3];

const sum = numbers.reduce((accumulator, item) => accumulator + item, 0)
console.log(sum);

const cart = [
    {name: 'Dark Souls III', price: 95.03},
    {name: 'Shadow of the Tomb Raider', price: 101.19},
    {name: 'Sekiro Shadows Die Twice', price: 179.99},
    {name: 'Resident Evil 2', price: 119.90},
    {name: 'Death Stranding', price: 149.99},
]

const productList = cart.reduce((accumulator, { name }) =>  `${accumulator} - ${name}\n`, '')

console.log(productList);



const customer = [
    {name: 'Diego'},
    {name: 'Thiago'},
    {name: 'Rodrigo'}
]

const pessoas = customer.reduce( (accumulator, {name}) => accumulator + name.length,0);
console.log(pessoas);