class Livro{
    nome;
    isbn;
    numero_paginas;
    preco;

    desconto_promocao_anual(valor){
        valor = 1 - (valor / 100);
        this.preco = this.preco * valor;
    }
    desconto_a_vista(valor){
        valor = this.preco * (valor/100);
        return valor;
    }
}

const livro01 = new Livro();
livro01.nome = "O senhor dos Aneis";
livro01.isbn = 123456;
livro01.numero_paginas = 356;
livro01.preco = 56;

const livro02 = new Livro();
livro02.nome = "Harry Potter";
livro02.isbn = 654321;
livro02.numero_paginas = 500;
livro02.preco = 75;

precoDesconto = livro02.desconto_a_vista(10);

console.log(livro02);

console.log(precoDesconto);
console.log(livro02.preco);