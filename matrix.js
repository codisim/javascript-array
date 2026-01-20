
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]



// horizontal sum
const resultH = matrix.map(row => {
    return row.reduce((acc, curr) => acc + curr);
})

console.log(resultH);


// vertiaclly sum
const resultV = matrix.reduce((acc, curr) => {
    return acc.map((val, i) => val + curr[i]);
})

console.log(resultV);



// flat sum
const resultF = matrix.reduce((acc, curr) => {
    return acc + curr.reduce((a, b) => a + b);
}, 0)

console.log(resultF);

