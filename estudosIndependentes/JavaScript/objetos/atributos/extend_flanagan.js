Object.defineProperty(Object.prototype, "extend", // Define Object.prototype.extend
    {
    writable: true,
    enumerable: false, // Torna-o não enumerável
    configurable: true,
    value: function(o) { // Seu valor é esta função
    // Obtém todas as props próprias, até as não enumeráveis
    var names = Object.getOwnPropertyNames(o);
    // Itera por elas
    for(var i = 0; i < names.length; i++) {
    // Pula as props que já estão nesse objeto
    if (names[i] in this) continue;
    // Obtém a descrição da propriedade de o
    var desc = Object.getOwnPropertyDescriptor(o,names[i]);
    // A utiliza para criar propriedade em this
    Object.defineProperty(this, names[i], desc);
    }
    }
    });