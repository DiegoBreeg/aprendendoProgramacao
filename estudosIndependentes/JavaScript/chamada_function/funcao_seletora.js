function berra(x) {console.log(`Berrou: ${x}!!!`)};
function chama(x) {console.log(`chamou de forma discreta: ${x}`)};

function executa(f, x){f(x)};

executa(berra, 'Diego');
executa(chama, 'Castelo');