export class ContaCorrente {
    agencia;
    saldo = 0;
    
    sacar(valor){ 
        if (this.saldo >= valor){
        this.saldo -= valor;
        }
        else{
            console.log("saldo insuficiente");
        }
        }
}