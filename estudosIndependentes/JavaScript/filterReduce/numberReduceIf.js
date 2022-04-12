let arr = [1, 'a', 6, 'c', 4, 9, 'b'];

arr = arr.reduce((acc, ell) => typeof ell == 'number' ? acc + ell : acc + 0);
console.log(arr);