function greeting(){return this.name}
function myAge(){return this.age}

const proto = Object.create( Object.prototype, {
    greeting: {
        value: greeting,
        writable: false,
        enumerable: false,
        configurable: false
    },
    myAge: {
        value: myAge,
        writable: false,
        enumerable: false,
        configurable: false
    }
})

const pessoa = Object.create(proto, {
    name: {
        value: 'diego',
        writable: false,
        enumerable: true,
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
