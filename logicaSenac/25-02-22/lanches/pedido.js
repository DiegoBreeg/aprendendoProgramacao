export class Pedido {
    #nome;
    #valor = 0;
    #pizza = 0;
    #lanches = 0;
    #salgadinhos = 0;

    set nome(nome){
        this.#nome = nome;
    }

    pizza() {
        this.#pizza++;
        console.log('A Pizza foi adicionada ao seu carrinho')
    }

    lanches() {
        this.#lanches++;
        console.log('O lanche foi adicionado ao seu carrinho')
    }

    salgadinhos() {
        this.#salgadinhos++;
        console.log('Os salgadinhos foram adicionados ao seu carrinho')
    }

    get echo() {
        return ` Carrinho / Pizza: ${this.#pizza} / Lanches: ${this.#lanches} / Salgadinhos: ${this.#salgadinhos}`
    }

    get nome(){
        return this.#nome;
    }

    troco(pago){
        this.#valor = (this.#pizza * 1) + (this.#lanches * 2) + (this.#salgadinhos * 3);
        return pago - this.#valor;
    }
}
