const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const regexNove = RegExp('9');
console.log('Métodos da RegExp...');
console.log(regexNove.test(texto));// testa regex e retorna true or false
console.log(regexNove.exec(texto));// retorna o correspondente ao regex e suas informações
//estes dois métodos acima se aplicam diretamente ao RegExp();

const regexLetras = /[a-f]/g; //pega todas as letras entre a e f
console.log('Métodos da string...');
console.log(texto.match(regexLetras));//retorna todos os elementos correspondentes ao regex
console.log(texto.search(regexLetras));//retorna indece correspondente ao primeiro elemento do regex passado
console.log(texto.replace(regexLetras, 'Achei'))//substitui o elemento correspondente à regex por outro texto
console.log(texto.split(regexLetras))//separa um texto dentro de um array a partir do primeiro regex encontrado
//a partir da string, estes métodos se plicam à ela.