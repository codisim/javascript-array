const numbers = [
  10, 45, 2, 54, 4, 987, 85, 23, 65, 87, 90, 78, 23, 33, 1, 34, 54, 65, 76, 87, 98,
  100,
];


const binarySearch = (arr, key) => {
    let lowest = 0;
    let height = arr.length - 1;

    while(lowest <= height){
        let mid = Math.floor((lowest + height) / 2);
        if(arr[mid] === key) return mid;
        if(arr[mid] < key) lowest = mid + 1;
        if(arr[mid] > key) height = mid  - 1;
    }

    return -1;
}

numbers.sort((a, b) => a - b);

console.log(numbers);

const s1 = binarySearch(numbers, 109);
console.log(s1);