import {Pessoa} from "./pessoa.js";
import {Super_poder} from "./super_poder.js";


const diego = new Super_poder();
diego.nome = 'Diego';
diego.idade = 26;
diego.muda_poder = 'desenvolver';

console.log(diego.echo());
