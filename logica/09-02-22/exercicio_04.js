//02. Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. 
//A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 
//e a nota C tem peso 5. O resultado também tem que sairo nome do aluno.

    // função com parametro
    //37
    // a =2
    // b= 3
    // c = 4
    function calculaR(a, b) {
       var r = (a + b) ** 2;
        return r //25 + 49
    }

    function calculaS(b, c) {
        var s = (b + c) ** 2;
        return s
    }

    function calculaD(r, s) {
        var d = (r + s) / 2;
        return d
    }
    
    
    // programa principal => o programa começa aqui
    var num_a = parseInt(prompt("Digite o primeiro número "));
    var num_b = parseInt(prompt("Digite o segundo número ")); 
    var num_c = parseInt(prompt("Digite o terceiro número "));

    var num_r = calculaR(num_a, num_b); // (2,3)
      //num_r = 25
    var num_s = calculaS(num_b, num_c);

    var num_d = calculaD(num_r, num_s);

    document.write("o valor de d é " + num_d);
    



