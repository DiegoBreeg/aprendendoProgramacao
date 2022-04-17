function Tree(name) {
    this.name = name;
    Tree.count++;
}

Tree.count = 0;

Tree.prototype.talk = function talk() {return `meu nome é ${this.name}`}

let theTree = new Tree('Redtree');
let anotherTree = new Tree('blueTree');

let lastTree = {}

lastTree.name = 'lastTree'

lastTree.__proto__ = Tree.prototype
lastTree instanceof Tree

