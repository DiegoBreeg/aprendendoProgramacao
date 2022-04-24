const proto = Object.defineProperties({}, {
    greeting: {value: function greeting() {return this.name}},
    myAge: {value: function myAge() {return this.age}}
})

function factory(name, age) {
    let objeto = Object.create(proto, {
        name: {value: name, enumerable: true},
        age: {value: age, enumerable: true}
    })
    return objeto
}

const pessoa = factory('fulano', 30)