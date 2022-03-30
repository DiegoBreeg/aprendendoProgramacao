const texto = 'Bom\ndia';
console.log(texto.match(/./gi));
console.log(texto.match(/.../gi)); //o ponto não engloba o \n

//dotall = algumas lingugagens tem um flag /exp\n