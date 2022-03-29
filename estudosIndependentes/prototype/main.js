function SalaAula(alunos) {
    this.alunos = alunos
}
SalaAula.prototype = {
    adicionarAluno: function(aluno) {
        this.alunos.push(aluno)
    }
}
const minhaSala = new SalaAula(['João', 'Maria'])
minhaSala.adicionarAluno('Pedro');
console.log(minhaSala.alunos);





var factory = (prop) => {        
   function metod() {console.log('isto é um método do objeto')}
    return {metod, prop}
}



