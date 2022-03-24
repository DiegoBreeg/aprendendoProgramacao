const texto = `
Os e-mails dos convidados são:
  - fulano@cod3r.com.br
  - xico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
`

console.log(texto.match(/[\w.]+@\w+\.(\w+)?(\.+)?(\w+)?/g));

const texto2 = 'fui na feira catar coquinho e achei notas espalhadas no chão.'
console.log(texto2.match(/.+/g));