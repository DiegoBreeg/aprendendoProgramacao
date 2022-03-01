//  R$100,00 por hora
//  +R$50,00 bonus
//  -R$50,00 por falta

// Desafio: tente trabalhar com a Classe Funcionário tendo somente esses atributos:
/*
primeiro_nome;
ultimo_nome;
matricula;
hora_trabalhada;
*/

class Funcionario{
    primeiro_nome;
    ultimo_nome;
    matricula;
    hora_trabalhada;


    nome_completo(nomeCompleto){
        nomeCompleto = [this.primeiro_nome, this.ultimo_nome]; // Que tal criar um comportamento que mostra o nome completo???
        return nomeCompleto;
    }
    
    salario_normal( hora_extra, faltas){
        var salario = (this.hora_trabalhada * 100) + (50 * hora_extra);
        salario = salario - (50 * faltas);
        salario = salario - salario * 0.15;
        return salario;
    }    
}
    
const diego = new Funcionario();
diego.primeiro_nome = "Diego";
diego.ultimo_nome = "Lucas";
diego.matricula = 001;
diego.hora_trabalhada = 30;
    
    
const thiago = new Funcionario();
thiago.primeiro_nome = "Thiago";
thiago.ultimo_nome = "Lucas";
thiago.matricula = 002;
thiago.hora_trabalhada = 20;    
    
const rodrigo = new Funcionario();
rodrigo.primeiro_nome = "Rodrigo";
rodrigo.ultimo_nome = "Lucas";
rodrigo.matricula = 003;
rodrigo.hora_trabalhada = 30;

var salarioDiego = diego.salario_normal(0, 0);  //hora extra, falta       bonus = salarioDiego + (salarioDiego * 0.05)
var salarioThiago = thiago.salario_normal(0, 2);
var salarioRodrigo = rodrigo.salario_normal(5, 0);

console.log(diego.nome_completo() + " " + salarioDiego);
console.log(thiago.nome_completo() + " " + salarioThiago);
console.log(rodrigo.nome_completo() + " " + salarioRodrigo);

var gastos = salarioDiego + salarioThiago + salarioRodrigo;
console.log("A empresa deve gastar "+gastos+" com pagamentos.");
    
/*
Para amanhã a meta é:
    Resolver o exercício;
    revisar composição de classes e json;
    Null e undefined;
    getters e setters;
    Encapsulamento;
    construtores e atributos estáticos;
 */
    