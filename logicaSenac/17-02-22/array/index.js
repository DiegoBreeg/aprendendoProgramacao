/*Veja a seguinte série: 1, 4, 4, 2, 5, 5, 3, 6, 6, 4, 7, 7, ... Escreva um programa que seja capaz de gerar os N termos dessa série. Esse número N deve ser lido do teclado.*/
var N;
var primeira_sequencia = 1;
var segunda_sequencia = 4;
var terceira_sequencia = 4 ; 
var controle1 = 2;
var controle2 = 0;


var sequencia = [];

N = parseInt(prompt("Digite o termo N que deve ser encontrado")); //2 4 4 3 5 5 4 6 6 

for (i = 0; i < N; i++) {
    if (controle1 == 2){ //1 4 7 10 13
        sequencia.push(primeira_sequencia);
        primeira_sequencia++;
        controle1 = controle1 - 2;
    } else
        if ((controle1 != 2) && (controle2 == 0)){
            sequencia.push(segunda_sequencia);
            segunda_sequencia++;
            controle2=1;
            controle1++;
        } else
            if ((controle1 != 2) && (controle2 == 1)){
                sequencia.push(terceira_sequencia);
                terceira_sequencia++;
                controle2=0;
                controle1++;
            }
}
var ultimo=sequencia[sequencia.length-1];
document.write("O " + N + " termo da progrssão corresponde a: " + ultimo);
