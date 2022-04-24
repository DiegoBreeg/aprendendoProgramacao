function copy(object, copy) {
    const names = Object.getOwnPropertyNames(object)
    names.map( ell => {
        if(ell in copy) return;
        let descriptor = Object.getOwnPropertyDescriptor(object, ell)
        Object.defineProperty(copy, ell, descriptor)
        })    
    }

    const obj = Object.defineProperties({}, {
        name: {value: 'diego', writable: true, enumerable: true, configurable: true},
        greeting: {value: function() {return this.name}, enumerable: true}
    })

    let obj2 = {}
copy(obj,obj2)