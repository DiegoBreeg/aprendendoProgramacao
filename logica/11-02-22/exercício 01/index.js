var r1=Math.round(Math.random()*100);
var r2=Math.round(Math.random()*100);
var r3=Math.round(Math.random()*100);
var auxiliar;
var opcao=parseInt(prompt("Aperte 1 para ordenar em crescente 2 para ordem decrescente e 3 para colocar o maior no meio!"));
document.write("<h2>"+"Os números sorteados são:  "+r1+" / "+r2+" / "+r3+" / "+"</h2>"+"<br>");



function imparPar(a,b,c){
    var par=0, impar=0;
    if(a%2==0){
        par=par+1;
    } else{
        impar++;
    }
    if(b%2==0){
        par++;
    } else{
        impar++;
    }
    if(c%2==0){
        par++;
    } else{
        impar++;
    }
    document.write("<h3> Quantidade de par(es): " + par + "</h3>");
    document.write("<h3> Quantidade de ímpar(es): " + impar + "</h3>");
}
function crescente(a,b,c){
    if(a>b){
        auxiliar=b;
        b=a;
        a=auxiliar 
       }
       if(a>c){
           auxiliar=c;
           c=a;
           a=auxiliar;
       }
       if(b>c){
           auxiliar=c;
           c=b;
           b=auxiliar;
       }
        document.write("<h3> A ordem CRESCENTE é: "+a+" / "+b+" / "+c+"</h3>");
        document.write("<h3> O maior número é: " + a + "</h3>");
        document.write("<h3> O menor número é: " + c + "</h3>");
}
function decrescente(a,b,c){
    if(a<b){
        auxiliar=b;
        b=a;        
        a=auxiliar; 
       }

    if(a<c){
        auxiliar=c;
        c=a;
        a=auxiliar;
       }

    if(b<c){
        auxiliar=c;
        c=b;
        b=auxiliar;
       }

        document.write("<h3> A ordem DECRESCENTE é: "+a+" / "+b+" / "+c+"</h3>");
        document.write("<h3> O maior número é: " + a + "</h3>");
        document.write("<h3> O menor número é: " + c + "</h3>");
}
function maiorNoMeio(a,b,c){
    if(b<a){
        auxiliar=b;
        b=a;
        a=auxiliar 
       }
       if(b<c){
        auxiliar=b;
        b=c;        
        b=auxiliar 
       }
       if(c<a){
        var menor=c;
    } else{
     var menor=a;
    }
    document.write("<h3>O MAIOR está no MEIO: "+a+" / "+b+" / "+c+"</h3>");
    document.write("<h3> O maior número é: " + b + "</h3>");
    document.write("<h3> O menor número é: " + menor + "</h3>");
}





if(opcao==1){ //crescente
    crescente(r1,r2,r3);
    imparPar(r1,r2,r3);
} else
if(opcao==2){ //decrescente
    decrescente(r1,r2,r3);
    imparPar(r1,r2,r3);
} else
if(opcao==3){  //maior no meio
    maiorNoMeio(r1,r2,r3);    
    imparPar(r1,r2,r3);
}