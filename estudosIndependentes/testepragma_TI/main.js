const fs = require('fs');
var txt = fs.readFileSync('./Quake.txt', 'utf8');

const linha = txt.split('\n');
const killer = [];

for(i = 0; i <= linha.length; i++) { 
    const regex = /\s\d+:\d+ kill: \d \d \d: /i    
    var corta = linha[i]
    var teste = corta.split(regex);
    console.log(teste);
} 

