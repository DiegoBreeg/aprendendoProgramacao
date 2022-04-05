function binaryToText(binary) {    
     binary = binary.split(' ');     
    return binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
    }
let txt = binaryToText("01000100 01101001 01100101 01100111 01101111 00100000 01101100 01101111 01110110 01100101 00100000 01001010 01100001 01110110 01100001 01010011 01100011 01110010 01101001 01110000 01110100");
console.log(txt)