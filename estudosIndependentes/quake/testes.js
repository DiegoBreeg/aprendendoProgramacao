const fs = require('fs');
const { format } = require('path');
const { arrayBuffer } = require('stream/consumers');
const { isNumber } = require('util');
var txt = fs.readFileSync('./Quake.txt', 'utf8');

const linha = txt.split('\n');

var killsLines = linha.filter((ell) => /kill:/gi.test(ell))
killsLines = killsLines.map((ell, index) => ell.split(/\s+\d+:\d+\skill:\s\d+\s\d+\s\d+:\s/i)[1]);
killsLines = killsLines.map((ell, index) => ell.split(/\skilled/i)[0]);

let killer2 = killsLines.filter((ell, index) => killsLines.indexOf(ell) == index);
let resultado = killer2.map(ell => {
     let data = killsLines.reduce((acc, ell2) => acc = ell2 == ell? acc + 1: acc + 0 ,0);
     return [ell, data];
})
console.log(resultado)




//let arr = [ 'a', 'b', 'c', 'c', 'b', 'd' ]

//let acumuladoContado = killer.reduce((contando, el) => {
  //if (contando.has(el)) {
    //contando.set(el, contando.get(el) + 1)
  //} else {
    //contando.set(el, 1)
  //}
  //return contando
//}, new Map())
//console.log(typeof acumuladoContado)


//let arr = [ 'a', 'b', 'c', 'c', 'b', 'd' ]

//let acumuladoContado = arr.reduce((contando, el) =>
  //({...contando, [el]: (contando[el] || 0) + 1})
//, {})
//console.log(acumuladoContado)





//39 45 184