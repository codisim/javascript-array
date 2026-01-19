

function myForeach(arr, callBack){
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i], i, arr);
    }
}


const nums = [1, 2, 3, 4, 5];

let sum = 0;

// function sum(v){
//     sum += v;
// }   

myForeach(nums, function (v){
    sum += v;
});

console.log(sum)






const names = [
    "John",
    "Jane",
    "Jack",
    "Jill"
]

myForeach(names, function (v, i){
    console.log(`${i + 1} : ${v}`);
});


names.forEach(function (v, i){
    console.log(`${i + 1} : ${v}`);
});