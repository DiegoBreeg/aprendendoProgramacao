const arr = [9, 7 ,3 ,5, 2, 8, 6, 0]

for(let i in arr) {
    if(arr[i] == 5) {
        console.log('alvo encontrado, finalizando laço...')
        break;
    }
}