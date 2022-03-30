var book = {
    topic: "JavaScript",
    fat: true
}
//as propriedades de um objeto podem ser acessadas com . ou []
book.topic;
book['fat'];





let killerScore = ['diego', 'diego', 'thiago', 'rodrigo']
let killer = killerScore.filter((ell, index) => killerScore.indexOf(ell) == index);
let resultado = killer.map( ell => {
     //let data = killerScore.reduce((acc, ell2) => acc = ell2 == ell? acc + 1: acc + 0 ,0);
     let data = killerScore.reduce((acc, ell2) => ell2 == ell? acc + 1: acc + 0 ,0);
     return [ell, data];
})
console.log(resultado)