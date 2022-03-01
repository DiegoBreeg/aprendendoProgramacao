import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

//Aqui foi criado o Cliente Diego
const cliente01 = new Cliente("Diego", 12345678963);

const clienteTereza = new Cliente("Tereza", 45665445632);

console.log(clienteTereza);



/*
//Criado a conta do Diego
const contaCorrenteDiego = new ContaCorrente();
contaCorrenteDiego.agencia = 1001;

//Vinculo a conta corrente ao cadastro do Diego
contaCorrenteDiego.cliente = cliente01;

contaCorrenteDiego.depositar(500);

//Outra forma de criar classe com composição
const outraConta = new ContaCorrente();
outraConta.agencia = 1002;
outraConta.cliente = clienteTereza;


console.log(contaCorrenteDiego);
console.log(outraConta);

let valor = 200;

contaCorrenteDiego.transferir(valor,outraConta);

console.log(contaCorrenteDiego);
console.log(outraConta);

console.log(clienteTereza);

*/


