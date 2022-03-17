const objs = [
    {
        nome: "Diego",
        idade: 26,
        esta_trabalhando: null,
        detalhes_profissao: {
            profissao: "desempregado",
            pretencao: "tecnologia, programação"
        },
        hobbies: ["programar", "jogar valorant", "assistir série"]
    },
    {
        nome: "Thiago",
        idade: 26,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: "desempregado",
            pretencao: "tecnologia, programação"
        },
        hobbies: ["programar", "jogar valorant", "assistir série"]
    }
]


console.log(objs);
//converter  o array para objeto json
const jsonData = JSON.stringify(objs);

console.log(jsonData);


//converter json para objetoJS
const objData = JSON.parse(jsonData);
console.log(objData);

console.log(objData[0].nome);