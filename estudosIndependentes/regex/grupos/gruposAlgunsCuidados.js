const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!';

console.log(texto.match(/[(abc)]/gi)); // dentro de um conjunto o grupo não exite
console.log(texto.match(/([abc])/gi));
console.log(texto.match(/(abc)/gi));





