
function ObjectConstructorReturn(name) {
    this.name = name;

    return {name}
}

function ObjectConstructor(name) {
    this.name = name;

    // return {name};
}
const obj1 = new ObjectConstructorReturn('canivete1');
const obj2 = new ObjectConstructor('canivete2');

console.log(obj1 instanceof Object);
console.log(obj2 instanceof ObjectConstructor);

console.log(obj1.constructor.name)
console.log(obj2.constructor.name)