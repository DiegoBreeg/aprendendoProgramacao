console.log("Trabalhando com listas ");
const salvador = "salvador";
const sao_paulo = "São Paulo";
const rio_janeiro = "Rio de Janeiro";

console.log("Destinos possíveis");
console.log(salvador, sao_paulo, rio_janeiro);

const lista_de_destinos = new Array("salvador", "São Paulo", "Rio de Janeiro");

console.log("Destinos possíveis");
console.log(lista_de_destinos);

lista_de_destinos.push("Curitiba");
console.log(lista_de_destinos);

lista_de_destinos[3] = "Belo Horizonte";
console.log(lista_de_destinos);

//lista_de_destinos = "Manaus";
//console.log(lista_de_destinos);

var cidades = lista_de_destinos.splice(0,2,);
console.log(cidades);
console.log(lista_de_destinos);



//console.log(lista_de_destinos[0]);

//const lista_de_destinos = new Array("São Paulo", "Caratinga", "Ipatinga", "Governador Valadares");

