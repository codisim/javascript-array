

const arr = [];

//  Array.from()
const s = Array.from("Stack Learner");


const set = new Set(['foo', 'bar', 'baz', 'foo']);
const s2 = Array.from(set);


const mapper = new Map([
    ['foo', 123],
    ['bar', 456],
    ['baz', 789]
])

console.log(Array.from(mapper.values()));
console.log(Array.from(mapper.keys()));




//  Array.isArray()
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array('a', 'b', 'c'));
Array.isArray(Array.prototype) // Array.prototype itself is an arr
