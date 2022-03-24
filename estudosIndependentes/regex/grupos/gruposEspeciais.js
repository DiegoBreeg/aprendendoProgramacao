const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(/[\wÀ-ú]+/gi));

//positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)); //procure por uma palavra que tenha uma vírgula na frente
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));

//Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi));
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));
