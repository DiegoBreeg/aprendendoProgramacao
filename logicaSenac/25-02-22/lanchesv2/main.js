alert('Seja Bem vindo ao Quase Três lanches!');
var cliente = prompt('Por favor digite seu nome');
var lista = [`Nome do Cliente: ${cliente}`];
var controle = 1;


start();
troco();






//functions--------------------------
function criaPedido (nome, valor, validade, peso, preparo){    
    return {           
        nome: nome,
        valor: valor,
        validade: validade,
        peso: peso,
        preparo: preparo
    }
}
function verificaProduto(){
    var i = 1;
    var l = lista.length - 1;

    while(i<=l){
        if(lista[i].nome == 'pizza'){
            console.log('isso é uma pizza!');            
        } else if(lista[i].nome == 'lanche'){
            console.log('isso é um lanche!');
        } else if(lista[i].nome == 'salgadinho'){
            console.log('isso é um salgadinho!');
        }
        i++;
    }    
}
function calculaValor(){
    var i = 1;
    var l = lista.length - 1;
    var valor = 0;

    while(i<=l){
         valor = lista[i].valor + valor;
        i++;
    }
    return valor;
}
function anotaPedido(){
    
    alert('Por favor escolha um produto');
    var compra = parseInt(prompt('1 para Pizza, 2 para Lanche, 3 para salgadinho'));

    if(compra ==1){
        alert('Oferecemos várias opções de Pizza, por favor escolha sua preferência');
        var recheio = prompt('Recheio');
        var bordaRecheada = prompt('Deseja borda Recheada? sim/não');
        var molho = prompt('molho');
        var preparo = {recheio: recheio, bordaRecheada: bordaRecheada, molho: molho}
        lista.push(criaPedido('pizza', 5, '12-22', '100g', preparo));
    } else if(compra ==2){
        alert('Oferecemos várias opções de Lanche, por favor escolha sua preferência');
        var pao = prompt('Tipo de Pão');
        var recheio = prompt('Recheio');
        var molho = prompt('molho');
        var preparo = {pao: pao, recheio: recheio, molho: molho}
        lista.push(criaPedido('lanche', 10, '12-22', '500g', preparo));
    } else if(compra ==3){
        alert('Oferecemos várias opções de Salgadinho, por favor escolha sua preferência');
        var tipo = prompt('Assado ou Frito?');
        var massa = prompt('Massa');
        var recheio = prompt('Recheio');
        var preparo = {tipo: tipo, massa: massa, recheio: recheio}
        lista.push(criaPedido('lanche', 2, '12-22', '75g', preparo));
    }
}
function start(){
    while(controle == 1 ){
        controle = parseInt(prompt('Deseja anotar o seu Pedido? 1 para sim, 2 para Não'));
        if(controle == 1){anotaPedido();}
    }
}
function troco(){
    alert('o total a pagar: ' + calculaValor());
    var pago = parseInt(prompt('Insira o valor Pago'));
    var troco = pago - calculaValor();
    alert('Troco: '+ troco)
    return troco;
}