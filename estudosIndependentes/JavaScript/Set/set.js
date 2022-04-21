let arr = ['pedra', 'papel', 'pedra', 'tesoura', 'pedra', 'papel', 'tesoura']
let myset = new Set(arr) //ao converter o array para Set os valores repetidos são removidos

console.log(Array(...myset))

