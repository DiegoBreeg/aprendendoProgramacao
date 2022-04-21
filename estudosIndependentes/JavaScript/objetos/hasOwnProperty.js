const obj = {a:1, b:2, c:3}// criando um objeto literal

'a' in obj //verifica se a é uma propriedade própria ou herdada de obj
obj.hasOwnProperty('b') // verifica se 'a' é uma propriedade própria de obj (não herdada)
obj.propertyIsEnumerable('c') //verifica se 'c' é uma propriedade própria de obj e enumerável