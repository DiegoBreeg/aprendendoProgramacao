import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

const cliente01 = new Cliente();

cliente01.cpf = 12345678912;
cliente01.nome = "Joaquim";
//cliente01.saldo = 0;

const contaCorrenteJoaquim = new ContaCorrente();
contaCorrenteJoaquim.saldo = 1000;
contaCorrenteJoaquim.agencia = 123;
contaCorrenteJoaquim.sacar(500);
console.log(contaCorrenteJoaquim.saldo);