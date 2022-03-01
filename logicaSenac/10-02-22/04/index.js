var n=parseInt(prompt("digite um número inteiro para saber se é par ou ímpar, negativo ou positivo"));

if((n>0)&&(n%2==0)){
    document.write("O número digitado é positivo e par!"+"<br>");
} else
if((n>0)&&(n%2!==0)){
    document.write("O número digitado é positivo e ímpar!"+"<br>");
} else
if((n<0)&&(n%2==0)){
    document.write("O número digitado é negativo e par!"+"<br>");
} else
if((n<0)&&(n%2!==0)){
    document.write("O número digitado é negativo e ímpar!"+"<br>");
}