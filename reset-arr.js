let x = [1, 2, 34, 5, 6, 7];
let y = x;
x = [];

// console.log(x, y);

let xx = [1, 2, 34, 5, 6, 7];
let yy = xx;
xx.length = 0;

// console.log(xx, yy);

let z = [1, 2, 34, 5, 6, 7];
while (z.length) z.pop();

console.log(z);

