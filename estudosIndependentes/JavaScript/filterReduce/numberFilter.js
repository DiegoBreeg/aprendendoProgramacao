let arr = [1, 'a', 6, 'c', 4, 9, 'b'];

arr = arr.filter((ell) => typeof ell == 'number').reduce((acc, ell) => acc + ell);
console.log(arr);