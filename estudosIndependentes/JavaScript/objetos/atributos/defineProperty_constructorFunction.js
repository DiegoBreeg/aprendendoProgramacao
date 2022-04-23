
function Constructor(name, age) {
    Object.defineProperty(this, 'name', {
        value: name,
        writable: false,
        enumerable: true,
        configurable: true})

    Object.defineProperty(this, 'age', {
        value: age,
        enumerable: true,
        writable: false,
        configurable: true})

    Object.defineProperty(Constructor.prototype, 'changeName', {
        value: function(newName) {Object.defineProperty(this, 'name', {value: newName})}
        })
}

let literal = new Constructor('diego', 26)