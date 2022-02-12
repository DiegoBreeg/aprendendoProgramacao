var valorCompra=parseInt(prompt("Insira o valor da compra:"));
var valorVenda;

if(valorCompra<10){
    document.write("Lucro da venda é de 70%");    
} else
if((10<=valorCompra)&&(valorCompra<30)){
    document.write("Lucro da venda é de 50%");
}else
if((30<=valorCompra)&&(valorCompra<50)){
    document.write("Lucro da venda é de 40%");
}else
if(valorCompra>=50){
    document.write("Lucro da venda é de 30%");
}