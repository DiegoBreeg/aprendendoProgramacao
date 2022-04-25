let obj = Object.defineProperties({}, {
    name: {value: 'diego', writable: false, enumerable: true, configurable: true},
    greeting: {value: function() {return this.name}, enumerable: true},
    newName: {value: function(newName) {
        Object.defineProperty(this, 'name', {value:newName})
    }}
})

console.log(obj.greeting())
obj.newName('fulano')
console.log(obj.greeting())