function Tree(name) {
    this.name = name;
}

Tree.prototype.talkName = function talkName() {
    return `my name is ${this.name}`
}

function ColoredTree(name, color){
    Tree.call(this, name);
    this.color = color;
}

ColoredTree.prototype.talkColor = function talkColor() {
    return `my color is ${this.color}`
}

Object.setPrototypeOf(ColoredTree.prototype, Tree.prototype) //linkando o objeto de prototype de colored ao de tree

let theTree = new ColoredTree('Red Tree', 'Red');
console.log(theTree.talkName())


let newObj = {}
newObj.name = 'New Literal Object'
newObj.color = null

Object.setPrototypeOf(newObj,ColoredTree.prototype)// linkando o objeto newOBJ ao objeto de protótipo de ColoredTree

console.log(newObj.talkName())
console.log(newObj.talkColor())
