

const numbers = [1, 2, 3, 4, 5];

const squeres = numbers.reduce((acc, curr) => {
    acc.push(curr * curr);
    return acc;
}, [])

console.log(squeres);



const odds = numbers.reduce((acc, cur) => {
    if (cur % 2 === 1) {
        acc.push(cur);
    }
    return acc;
}, []);

console.log(odds);


// big arr
const birArr = [];
for (let i = 0; i < 50000000; i++) {
    birArr.push(i);
}



// filter & map --> time effeciency
console.time('Both');
birArr.filter(v => v % 2 === 0).map(v => v * 2);
console.timeEnd('Both');


// reduce --> time effeciency
console.time('With Reduce');
birArr.reduce((acc, cur) => {
    if (cur % 2 == 0) {
        acc.push(cur * 2);
    }
    return acc;
},[]);
console.timeEnd('With Reduce');










