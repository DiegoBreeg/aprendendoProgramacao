const obj = Object.create( Object.prototype, {
    name: {value: 'diego', writable: false, enumerable: true, configurable: false},
    greeting: {value: function greeting(){ return this.name}, enumerable: true}
})
const obj2 = {...obj}
console.log(delete obj.name)
console.log(obj.name)
console.log(delete obj2.name)
console.log(obj2.name)