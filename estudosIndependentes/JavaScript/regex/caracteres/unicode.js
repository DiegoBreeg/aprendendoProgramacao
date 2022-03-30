// no início...
// um byte (8 bits) - caracteres
//símbolos, pontuações, A-Z, a-z, 0-9

//dois bytes (16 bits) - 65500+ caracteres
//+ símbolos, +pontuação, A-Z, a-z, 0-9

//unicode
//quantidade de bytes variável - expansível
//suporta mais de 1 milhão de caracteres
//atualmente tem mais de 100.000 caracteres atribuídos

const texto = 'a₳b฿';
console.log(texto.match(/\u20b3|\u0e3f/g));