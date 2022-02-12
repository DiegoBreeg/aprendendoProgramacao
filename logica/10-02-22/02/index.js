alert("Bem-Vindo ao Portal do aluno");

var identificacao=parseInt(prompt("Insira sua IDENTIFICAÇÃO"))
var nota1=parseInt(prompt("Insira sua PRIMEIRA nota"));
var nota2=parseInt(prompt("Insira sua SEGUNDA nota"));
var nota3=parseInt(prompt("Insira sua TERCEIRA nota"));

var exibeInfo=dados(nota1,nota2,nota3,identificacao);

function dados(a,b,c,d){
    var m=(a+b+c)/3;
    var ma=(a+(b*2)+(c*3)+m)/7;
    var conceito=ma;

    document.write("sua identificação é: "+ d+"<br>");
    document.write("suas notas são: "+"<br>"+"nota 1: "+a+"<br>"+"nota 2: "+b+"<br>"+"nota 3: "+c+"<br>");
    document.write("A média das suas notas é: "+ m+"<br>");
    document.write("Sua média de aproveitamento é: "+ma+"<br>");

    if(conceito>=90){
        document.write("Seu conceito é A"+"<br>");
        document.write("Parabéns você foi aprovado!");
    } else if((conceito>=75)&&(conceito<90)){
        document.write("Seu conceito é B"+"<br>");
        document.write("você foi aprovado! mas esforce-se um pouquinho mais");
    } else if((conceito>=60)&&(conceito<75)){
        document.write("Seu conceito é C"+"<br>");
        document.write("Voê foi aprovado! mas pode fazer muito mais");
    }else if((conceito>=40)&&(conceito<60)){
        document.write("Seu conceito é D"+"<br>");
        document.write("que pena, você foi reprovado!"+"<br>");
    }else{
        document.write("Seu conceito é D, voçê precisa de aulas de reforço"+"<br>");
        document.write("voçê foi reprovado!");
    }
    return
}
