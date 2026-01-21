const myArr = [
  45, 2, 54, 4, 987, 85, 23, 65, 87, 90, 78, 23, 33, 1, 34, 54, 65, 76, 87, 98,
  100,
];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
  }
};


bubbleSort(myArr);

console.log(myArr);
