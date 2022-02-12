const botao = document.getElementById("clique");
botao.addEventListener("click", pagamento);

function pagamento(){
    var valorTotal=parseInt(prompt("Insira o valor total da compra:"));
    var opcaoPagamento=parseInt(prompt("Insira o código da condição de pagamento"));
    var valorAPagar=calcularPagamento(valorTotal,opcaoPagamento);
    document.write("<h1> O valor a ser pago é : "+valorAPagar+"</h1>");

    function calcularPagamento(valor,opcao){
        if (opcao==1) {
            aPagar=valor*0.9;
        } else
        if (opcao==2) {
            aPagar=valor*0.85;
        } else
        if (opcao==3) {
            aPagar=valor*1;
        } else {
            aPagar=valor*1.1;
        }
    return aPagar
    }
    return
}