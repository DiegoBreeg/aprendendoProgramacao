//PROBLEMA 01.Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
//exemplo: 576  5 nota(s) de R$ 100,00 | 1 nota(s) de R$ 50,00 | 1 nota(s) de R$ 20,00 | 0 nota(s) de R$ 10,00 | 1 nota(s) de R$ 5,00   | 0 nota(s) de R$ 2,00 | 1 nota(s) de R$ 1,00
var valor = parseInt(prompt("Digite um valor inteiro"));
var resto=0; var notaDe100=0;var notaDe50=0;var notaDe20=0;var notaDe10=0;var notaDe5=0;var notaDe2=0;var notaDe1=0;
document.write(valor+"<br>");
while(valor>0){
    if(valor >=100){
        resto=valor%100;
        notaDe100=valor-resto;
        notaDe100/=100;
        valor=resto;
    }else
        if(valor>=50){
        resto=valor%50;
        notaDe50=valor-resto;
        notaDe50/=50;
        valor=resto;
    }else
        if(valor>=20){
        resto=valor%20;
        notaDe20=valor-resto;
        notaDe20/=20;
        valor=resto;
    }else
        if(valor>=10){
        resto=valor%10;
        notaDe10=valor-resto;
        notaDe10/=10;
        valor=resto;
    }else
        if(valor>=5){
        resto=valor%5;
        notaDe5=valor-resto;
        notaDe5/=5;
        valor=resto;
    }else
        if(valor>=2){
        resto=valor%2;
        notaDe2=valor-resto;
        notaDe2/=2;
        valor=resto;
        }
    else
        if(valor>=1){
        resto=valor%1;
        notaDe1=valor-resto;
        notaDe1/=1;
        valor=resto;
        }
}
escreveNumeroDeNota();
function escreveNumeroDeNota(){
    document.write(notaDe100+" nota(s) de R$ 100,00"+"<br>");
    document.write(notaDe50+" nota(s) de R$ 50,00"+"<br>");
    document.write(notaDe20+" nota(s) de R$ 20,00"+"<br>");
    document.write(notaDe10+" nota(s) de R$ 10,00"+"<br>");
    document.write(notaDe5+" nota(s) de R$ 5,00"+"<br>");
    document.write(notaDe2+" nota(s) de R$ 2,00"+"<br>");
    document.write(notaDe1+" nota(s) de R$ 1,00"+"<br>");
}