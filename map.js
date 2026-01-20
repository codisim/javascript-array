const names =[
    "Stack learner",
    "Stack school",
    "Stack consulty",
    "Stacl tech"
]

function reuse(arr, callBack){
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i], i, arr);
    }
}


const result = [];
reuse(names, value => {
    result.push(value.toUpperCase());
})


const result2 = [];
reuse(names, value => {
    result2.push(value.length);
})

// console.log(result2);



function reuseAndMap(arr, logic){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(logic(arr[i], i, arr));
    }
    return result;
}



const lengths = reuseAndMap(names, value => value.length);
const uppers = reuseAndMap(names, value => value.toUpperCase());
const removesNames = reuseAndMap(names, value => value.substring(6));

console.log({lengths, uppers, removesNames});
