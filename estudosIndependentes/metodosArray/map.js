const numbers = [1, 2, 3];

const squareNumbers = numbers.map( (item)  => item ** 2);
console.log(squareNumbers);

//map() é usado quando queremos obter um novo array com a mesma quantidade
// de itens do array original, porém com cada item transformado
// ele recebe 3 parâmetros
//item, index e o própria array
// ele aplica a função para cada item e retorna um novo item que é
//produto da transformação


const tvShows = [
    {name: 'Breaking Bad', releaseYear: 2008},
    {name: 'Mr. Robot', releaseYear: 2015},
    {name: 'True Detective', releaseYear: 2014},
    {name: 'Hannibal', releaseYear: 2013},
    {name: 'The Hanmaid Tale', releaseYear: 2017},
    {name: 'House M.D.', releaseYear: 2004},
    {name: 'Watchmen', releaseYear: 2019},
];
const showNames = tvShows.map(({ name }) => name);
console.log(showNames)
