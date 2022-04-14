function Sorvete(sabor, preco) {
    this.sabor = sabor;
    this.preco = preco;
    Sorvete.conta_sorvete++
}

Sorvete.conta_sorvete = 0;
Sorvete.prototype.falaSabor = function falaSabor() {
    return console.log(`O sabor do sorvete é : ${this.sabor}`);
}

let chocolate = new Sorvete('chocolate', 1.50);
let morango = new Sorvete('morango', 1.75);
let abacaxi = new Sorvete('abacaxi', 2.0);
let baunilha = new Sorvete('baunilha', 3.0);


chocolate.falaSabor();
morango.falaSabor();

console.log(Sorvete.conta_sorvete);