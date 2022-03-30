const texto = '.$+*?-';

console.log(texto.match(/[+.?*$]./g)) //dentro do conjunto os metacaracteres se comportam como literais
console.log(texto.match(/[$-?]/g)) //o hífen dentro do conjunto é lido como intervalo

//não é um intervalo
console.log(texto.match(/[$\-?]/g)) //aqui são o conjunto lê cada um dos 3 elementos como literais
console.log(texto.match(/[-?]/g));

//pode precisar de escape dentro do conjunto: - [] ^
