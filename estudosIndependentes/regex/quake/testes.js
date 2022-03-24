const fs = require('fs');
var txt = fs.readFileSync('./Quake.txt', 'utf8');

const linha = txt.split('\n');
const killer = [];

for(i = 0; i <= linha.length; i++) {
    
    if(/kill:/gi.test(linha[i])){
        let getData = linha[i].split(/\s+\d+:\d+\skill:\s\d+\s\d+\s\d+:\s/i);
        getData = getData[1].split(/\skilled/i);
        killer.push(getData[0]);        
    }
}

//let arr = [ 'a', 'b', 'c', 'c', 'b', 'd' ]

let acumuladoContado = killer.reduce((contando, el) => {
  if (contando.has(el)) {
    contando.set(el, contando.get(el) + 1)
  } else {
    contando.set(el, 1)
  }
  return contando
}, new Map())
console.log(typeof acumuladoContado)


//let arr = [ 'a', 'b', 'c', 'c', 'b', 'd' ]

//let acumuladoContado = arr.reduce((contando, el) =>
  //({...contando, [el]: (contando[el] || 0) + 1})
//, {})
//console.log(acumuladoContado)





//39 45 184