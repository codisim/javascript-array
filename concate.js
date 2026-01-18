const arr = [1,2,3];
const arr2 = [4,5,6];

const arr3 = arr.concat(arr2);


const arr4 = [...arr, ...arr2];

const arr5 = [].concat(arr, arr2);


console.log(arr5);