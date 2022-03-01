import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

//Aqui foi criado o Cliente Diego
const cliente01 = new Cliente();
cliente01.nome = "Diego";
cliente01.cpf = 12345678963;

//Criado a conta do Diego
const contaCorrenteDiego = new ContaCorrente();
contaCorrenteDiego.agencia = 1001;

//Vinculo a conta corrente ao cadastro do Diego
contaCorrenteDiego.cliente = cliente01;

//Aqui foi criado o Cliente Adelia
const cliente02 = new Cliente();
cliente02.nome = "Adélia";
cliente02.cpf = 98745632112;

//Criado a conta da Adelia
const contaCorrenteAdelia = new ContaCorrente();
contaCorrenteAdelia.agencia = 1010;

//Vinculo a conta corrente ao cadastro da Adelia
contaCorrenteAdelia.cliente = cliente02;

console.log(contaCorrenteDiego);
console.log(contaCorrenteAdelia);

contaCorrenteDiego.depositar(100);
contaCorrenteDiego.transferir(50,contaCorrenteAdelia);

//contaCorrenteDiego(50, nome:"Adélia",cpf: 98745632112,agencia: 1010, saldo: 0)

console.log(contaCorrenteDiego);
console.log(contaCorrenteAdelia);