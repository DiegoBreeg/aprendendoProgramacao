let altura = 3, largura = 10;

for( let i = 0; i <= altura; i++)
    i == 0 || i == altura ? console.log(`${'#'.repeat(largura)}`) :  console.log(`#${' '.repeat(largura - 2)}#`);