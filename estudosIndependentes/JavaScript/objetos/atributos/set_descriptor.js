const literal = {}

Object.defineProperty(literal, 'name', {
    value: 'diego',
    writable: false,
    enumerable: true,
    configurable: true
})
Object.defineProperty(literal, 'changeName', {
    set: function(newName){Object.defineProperty(this, 'name', {value: newName})}
})