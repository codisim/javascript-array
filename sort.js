const numbers = [
  10, 45, 2, 54, 4, 987, 85, 23, 65, 87, 90, 78, 23, 33, 1, 34, 54, 65, 76, 87, 98,
  100,
];

numbers.sort((a, b) => {
    // console.log(a, b);
    return a - b;
});


// console.log(numbers);



let strings = ['big', 'banana', 'cat', 'apple', 'cow', 'Apple', 'big']
strings.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) return 1;
    if( b > a) return -1;
    return 0;
})

console.log(strings);
