import {Cliente} from "./Cliente.js";

export class ContaCorrente {
    //atributos publicos    
    agencia;
    _cliente;

    //atributos privados
    _saldo = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente)
        this._cliente = novoValor;
    }

    get cliente() {
       return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
//100 - 50 = 50

            return valor;
        }
    }

    depositar(valor) { //depositar(50)
        if (valor <= 0) {
            return null; 
        }
        this._saldo += valor;
        //contaCorrenteDiego.0 = 100
    }

    transferir(valor, conta) {
        //contaCorrenteDiego(50, nome:"Adélia",cpf: 98745632112,agencia: 1010, saldo: 0)
        const valorSacado = this.sacar(valor);

        //conta(nome:"Adélia",cpf: 98745632112,agencia: 1010, saldo: 0)
        conta.depositar(valorSacado);

        //conta.depositar(50)

    }


}

