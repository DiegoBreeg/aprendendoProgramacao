/*
function func1(valor1, valor2){
    return valor1 + valor2;
}
console.log(func1(1,2));
*/

function func2(valor1){
    return function(valor2){
        return valor1 + valor2;
    }
}
const func2Valor1 = func2(10)
console.log(func2Valor1(20));