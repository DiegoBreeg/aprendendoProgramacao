function Tree(name) {
    this.name = name;
}

Tree.prototype.greeting = function greeting() { return `my name is ${this.name}`}

function ColoredTree(name, color){
    Tree.call(this, name);
    this.color = color;
}

ColoredTree.prototype = Object.create(Tree.prototype);
ColoredTree.prototype.constructor = ColoredTree;
ColoredTree.prototype.talkColor = function talkColor() {return `my color is ${this.color}`}

let oldTree = new ColoredTree('oldTree', 'Red');
let normalTree = new Tree('Normal Tree');

console.log(oldTree.greeting())