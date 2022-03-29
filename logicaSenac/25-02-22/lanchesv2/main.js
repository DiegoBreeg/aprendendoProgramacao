alert('Seja Bem vindo ao Quase Três lanches!');
var cliente = prompt('Por favor digite seu nome');
var controle = 1;


const client = {
    nome: 'Diego',
    sacola: [],
    calculaValorTotal() {
        return client.sacola.reduce((accumulator, {valor}) => accumulator + valor, 0)
    }
}

start();
     

function anotaPedido(){
    
    alert('Por favor escolha um produto');
    var compra = parseInt(prompt('1 para Pizza, 2 para Lanche, 3 para salgadinho'));

    if(compra ==1){
        alert('Oferecemos várias opções de Pizza, por favor escolha sua preferência');
        var recheio = prompt('Recheio');
        var bordaRecheada = prompt('Deseja borda Recheada? sim/não');
        var molho = prompt('molho');
        client.sacola.push({produto: 'pizza', valor: 2.50, peso: '200g', validade: '10/12/22', ingredientes: [recheio, bordaRecheada, molho]})        
        
    } else if(compra ==2){
        alert('Oferecemos várias opções de Lanche, por favor escolha sua preferência');
        var pao = prompt('Tipo de Pão');
        var recheio = prompt('Recheio');
        var molho = prompt('molho');        
        client.sacola.push({produto: 'lanche', valor: 3.50, peso: '200g', validade: '10/12/22', ingredientes: [pao, recheio, molho]})
    } else if(compra ==3){
        alert('Oferecemos várias opções de Salgadinho, por favor escolha sua preferência');
        var tipo = prompt('Assado ou Frito?');
        var massa = prompt('Massa');
        var recheio = prompt('Recheio');
        client.sacola.push({produto: 'salgadinho', valor: 3, peso: '200g', validade: '10/12/22', ingredientes: [tipo,massa,recheio]})
    }
}
function start(){
    while(controle == 1 ){
        controle = parseInt(prompt('Deseja anotar o seu Pedido? 1 para sim, 2 para Não'));
        if(controle == 1){anotaPedido();}
    }
}