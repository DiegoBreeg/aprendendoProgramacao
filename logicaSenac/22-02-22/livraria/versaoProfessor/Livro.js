class Livro {
    //atributos
    nome = "";
    isbn = 0; 
    numero_paginas = 0;
    preco = 0; 
  
    //comportamento da classe
    //preco = 90 valor = 10
    desconto_promocao_anual(valor) {    
        valor = 1 - valor / 100;
        this.preco = this.preco * valor; //100 * 0.9 // 90 
    }
  //preco = 100 valor = 10
    desconto_a_vista(valor) {
      valor = this.preco * (valor/100);//10
      return valor;//10
    }
    
  }
  
  //Criando uma classe livro e instanciando suas variavéis.
  const livro01 = new Livro();
  livro01.nome = "O Senhor dos Anéis";
  livro01.isbn = 123456;
  livro01.numero_paginas = 356;
  livro01.preco = 56;
  
  console.log(livro01);
  
  livro01.desconto_promocao_anual(10);

  console.log("Preco do livro 01 " + livro01.preco);

  const livro02 = new Livro();
  livro02.nome = "Harry Potter";
  livro02.isbn = 654123;
  livro02.numero_paginas = 500;
  livro02.preco = 75;
  
  var precoDesconto = livro02.desconto_a_vista(10);
  
  console.log(livro02);

  console.log("Desconto do livro 02 " + precoDesconto);

  console.log("Preco do livro 02 " + livro02.preco);


  //console.log("Valor do desconto " + descontoLivro01;
  //console.log("Preço do Livro com desconto " + precoDesconto.toFixed(2));