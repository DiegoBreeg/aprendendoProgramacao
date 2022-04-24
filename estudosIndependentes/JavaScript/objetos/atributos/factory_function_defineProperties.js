function factory(name, age) {
    let obj = Object.defineProperties({}, {
        name: {value: name, enumerable: true},
        age: {value: age, enumerable:true}
    })

    return obj
}

const pessoa = factory('diego', 26)