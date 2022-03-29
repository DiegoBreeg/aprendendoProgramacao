var book = {
    topic: "JavaScript",
    fat: true
}
//as propriedades de um objeto podem ser acessadas com . ou []
book.topic;
book['fat'];





const client = {
    nome: 'Diego',
    sacola: [],
    calculaValorTotal() {
        return client.sacola.reduce((accumulator, {valor}) => accumulator + valor, 0)
    }
}

const pizza = {produto: 'pizza', valor: 2.50, ingredientes: []};
const lanche = {produto: 'lanche', valor: 3.50, ingredientes: []};
const salgadinho = {produto: 'salgadinho', valor: 3, ingredientes: []};

client.sacola.push(pizza);
client.sacola.push(lanche);
client.sacola.push(salgadinho);

console.log(client);
console.log(client.calculaValorTotal());


const teste = {sacola:[{ingredientes: []}]}


teste.sacola.push()
