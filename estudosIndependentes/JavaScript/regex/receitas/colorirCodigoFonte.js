const aplicarCor = (txt, reg, cor) => txt.relace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files  = require('/.files');
const texto = files.read('condigoFonte.html')


