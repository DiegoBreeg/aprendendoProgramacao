var contagem=30;
var numero=30;

document.write("O Programa conta de 30 a 40, porém suprime os números 33 e 37"); //programa conta de 30 a 40 mas suprime 33 e 37
document.write("<br>");

while(numero<=40){
    if((numero==33)||(numero==37)){
        numero++;
    }
    document.write("Número: "+numero);
    document.write("<br>");
    numero++;
}

document.write("<br>");
document.write("<br>");

document.write("O Programa decresce de 20 a 0"); //programa decresce de 20 a 0
document.write("<br>");
numero=20;
while(numero>0){    
    document.write(numero);
    document.write("<br>");
    numero--;
}