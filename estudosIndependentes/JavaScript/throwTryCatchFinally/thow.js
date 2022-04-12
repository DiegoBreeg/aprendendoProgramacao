let x = -2
function fatorial(x) {
    if(x < 0 ) throw new Error('x não pode ser número negativo'); //lança um objeto Error propositalmente
    for(var f = 1; x > 1; f *= x, x--);
    return f;
}
console.log(fatorial(x));