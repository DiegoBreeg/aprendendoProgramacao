Object.defineProperty(Object.prototype, 'copy',
    {
    value:function copy(object) {
        const names = Object.getOwnPropertyNames(object)
        names.map( ell => {
            if(ell in this) return;
            let descriptor = Object.getOwnPropertyDescriptor(object, ell)
            Object.defineProperty(this, ell, descriptor)
            })    
        }
    })

const obj = Object.defineProperties({}, {
    name: {value: 'diego', writable: true, enumerable: true, configurable: true},
    greeting: {value: function() {return this.name}, enumerable: true}
})

let obj2 = {}
obj2.copy(obj)
