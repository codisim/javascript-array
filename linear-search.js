const numbers = [
  10, 45, 2, 54, 4, 987, 85, 23, 65, 87, 90, 78, 23, 33, 1, 34, 54, 65, 76, 87, 98,
  100,
];


const LinearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return - 1;
}

const s1 = LinearSearch(numbers, 90);
// console.log(s1);


const LinearSearchCB = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i;
        }
    }
    return - 1;
}
