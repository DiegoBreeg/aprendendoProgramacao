import {Item} from "./item.js";
import {Lanches} from "./lanches.js";
import {Pedido} from "./pedido.js";
import {Pizza} from "./pizza.js";
import {Salgadinhos} from "./salgadinhos.js";


const pizza = new Pizza(1, '01-12-22', 110);
const lanches = new Lanches(2, '02-12-22', 120);
const salgadinhos = new Salgadinhos(3, '03-12-22', 130);
const pedido = new Pedido();

var i = 0;

while(i == 0) {

    console.log("Por favor, insira seu nome para começar o pedido");
    pedido.nome = 'Diego';
    console.log("1 para Pizza, 2 para Lanches ou 3 para Salgadinhos");
    var item = 2;
    
    if(item == 1){
        console.log("Você escolheu Pizza!");
        pizza.escolha('calabresa', 'não', 'tomate');
        console.log(pizza.echo);
        pedido.pizza();
        console.log("deseja fazer mais algum pedido?")
        i = 1;
    } else if (item == 2){
        console.log("Você escolheu Lanches!");
        lanches.escolha('pão integral', 'catupiry', 'tomate');
        console.log(lanches.echo);
        pedido.lanches();
        console.log("deseja fazer mais algum pedido?")
        i = 1;
    } else if (item == 3){
        console.log("Você escolheu salgadinhos!");
        salgadinhos.escolha('frito', 'comum', 'presunto e queijo');
        console.log(salgadinhos.echo);
        pedido.salgadinhos();
        console.log("deseja fazer mais algum pedido?")
        i = 1;
    }    
}

function nota_fiscal(){
    var pago = 10;
    console.log('Confira sua Nota Fiscal:');        
    console.log(pedido.nome);
    console.log(pedido.echo);
    console.log(pizza);
    console.log(lanches);
    console.log(salgadinhos);
    console.log('Valor pago: ' + pago)
    console.log('Troco: ' + pedido.troco(pago));
}

nota_fiscal();
