var numeroPensado=Math.round(Math.random()*10);
console.log(numeroPensado);
var chute=Number(prompt("Pense e digite um numero de 1 a 10"));

if(chute==numeroPensado){
    document.write("Parabéns! você acertou")
}
else{
    document.write("Pena, você errou, o número pensado é "+numeroPensado);
}
