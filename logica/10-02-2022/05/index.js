var precoDuzia;
var precoResto;
var duzia;
var resto;

var ovosVendidos=parseInt(prompt("Insira a quantidade de ovos vendidos!"));     //captura do a quantidade de ovos vendidos

if(ovosVendidos%12==0){     //permine a ativação do código apenas quando não sobram ovos
    precoDuzia=ovosVendidos/12*3.25;     //encontra a quatidade de duzias e multiplica pelo preço
    document.write("O cliente comprou "+ovosVendidos+" ovos, o que equivale a "+ovosVendidos/12+" duzia/s!"+"<br>");     //escreve na tela os resultados
    document.write("O cliente deve pagar "+precoDuzia+" reais pela/s duzia/s!");     //escreve na tela os resultados
} else
if(ovosVendidos%12!==0){     //permite ativação apenas quando ouverem ovos sobrando ou insuficientes para formaem dúzias
    resto=ovosVendidos%12;     //separa a quantidade de ovos sobrando da quantidade de dúzias
    duzia=(ovosVendidos-resto)/12;     //separa a quantidade de dúzias da quantidade de ovos sobrando
    precoDuzia=duzia*3.25;     //determina o preço da dúzia multiplicando ela pelo preço
    document.write("O cliente comprou "+ovosVendidos+" ovos, o que equivale a "+Math.round(ovosVendidos/12)+" duzia/s e "+resto+" ovos!"+"<br>");     //escreve na tela os resultados
    document.write("O cliente deve pagar "+precoDuzia+" reais pela/s "+duzia+" duzia/s, e "+resto*0.45+" pelo/s "+resto+" ovos!");     //escreve na tela os resultados
}