const arr = [1,2,3,6,7];
arr.splice(3,0,4,5);

// console.log(arr);


const toDeleted = 3;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === toDeleted) {
        arr.splice(toDeleted, 1);
    }
}

// console.log(arr);