

const arr = ['a', 'd', 'b'];

const iArr= arr[Symbol.iterator]();

console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
