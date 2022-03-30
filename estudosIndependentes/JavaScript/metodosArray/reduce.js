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






const items = [
    {nome: 'pizza', valor: 2.50},
    {nome: 'lanche', valor: 3.50},
    {nome: 'salgadinho', valor: 1.50}
];

const total = items.reduce((accumulator, {valor}) => accumulator + valor, 0)
console.log(total);



