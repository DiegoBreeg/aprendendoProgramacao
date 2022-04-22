function greeting(){return this.name}

const proto = Object.create( Object.prototype, {
    greeting: {
        value: greeting,
        writable: false,
        enumerable: false,
        configurable: false
    }
})

const pessoa = Object.create(proto, {
    name: {
        value: 'diego',
        writable: false,
        enumerable: false,
        configurable: false
    },
    age: {
        value: 26,
        writable: false,
        enumerable: false,
        configurable: false
    }
})

console.log(pessoa.greeting())
