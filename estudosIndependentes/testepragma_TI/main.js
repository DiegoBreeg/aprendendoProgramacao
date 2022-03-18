const fs = require('fs');
var txt = fs.readFileSync('./Quake.txt', 'utf8');
//console.log(txt)

var linhas = txt.split('\n');
console.log('[Quake] possui' + linhas.length + 'linhas');

const reg1 = /Kill:/;
const reg2 = /world/;
const string = linhas;
buscaNaLinha(reg1, reg2, string);
function buscaNaLinha(reg1, reg2, string) {
    var score = 0
    for(var i = 0; i <= string.length; i++) {    
        if(reg1.test(string[i]) && reg2.test(string[i])) {        
            score++;
            console.log(score);
        }
    }
    console.log('Kill feitas pelo mundo : ' + score);
}






