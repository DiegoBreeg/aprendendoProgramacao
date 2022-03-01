var a=0;var b=0;var c=0;var d=0;var nulo=0;var branco=0; var disparador; var candidato;

function leDisparo(){
    alert("A eleição está aberta?");
    var eleicaoAberta=parseInt(prompt("Digite 1 para CONTINUAR ou 2 para ENCERRAR a eleição e mostrar o resultado"));    
    return eleicaoAberta;    
}
function sucesso(){
    alert("Voto computado com sucesso!");
}
disparador=leDisparo();
while(disparador==1){
    candidato=parseInt(prompt("Digite o código de seu candidato, ou 5 para NULO ou 6 para BRANCO"));
    if(candidato==1){
        a++;
        sucesso();
        disparador=leDisparo();
    }else
    if(candidato==2){
        b++;
        sucesso();
        disparador=leDisparo();
    }else
    if(candidato==3){
        c++;
        sucesso();
        disparador=leDisparo();
    }else
    if(candidato==4){
        d++;
        sucesso();
        disparador=leDisparo();
    }else
    if(candidato==5){
        nulo++;
        sucesso();
        disparador=leDisparo();
    }else
    if(candidato==6){
        branco++;
        sucesso();
        disparador=leDisparo();
    }else{
        alert("Número não previsto no sistema, tente novamente");        
    }
    
}
while(disparador==2){
    document.write("O candidato a recebeu:"+a+" voto(s)."+"<br>");
    document.write("O candidato b recebeu:"+b+" voto(s)."+"<br>");
    document.write("O candidato c recebeu:"+c+" voto(s)."+"<br>");
    document.write("O candidato d recebeu:"+d+" voto(s)."+"<br>");
    document.write("Houveram:"+nulo+" voto(s) nulo(s)."+"<br>");
    document.write("Houveram:"+branco+" voto(s) branco(s)."+"<br>");
    disparador=0;
}