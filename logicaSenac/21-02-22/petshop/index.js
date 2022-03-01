class Cliente {
    nome;
    cpf;
}
class Consulta {
    nomedopet;
    idadeEmMeses;
    descricaoDaConsulta;
}

const cliente01 = new Cliente();
const consulta = new Consulta();

consulta.nomedopet = "Thor";
consulta.idadeEmMeses = 24;
consulta.descricaoDaConsulta = "totalmente saudável";
cliente01.nome = "Diego";
cliente01.cpf = 12345678912;
console.log(consulta,cliente01);