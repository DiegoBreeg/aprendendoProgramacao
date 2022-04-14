function Sorvete(sabor, preco) {
    this.sabor = sabor;
    this.preco = preco;   
}
Sorvete.prototype.falaSabor = function() {
    return console.log(`sabor: ${this.sabor}`);
}


let chocolate = new Sorvete('chocolate', 1.50);
let morango = new Sorvete('morango', 1.75);

console.log(morango.falaSabor === chocolate.falaSabor)
