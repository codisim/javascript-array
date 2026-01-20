const votes = [
    'java',
    'python',
    'java',
    'python',
    'python',
    'ruby',
    'ruby',
    'ruby',
    'ruby',
    'rust',
    'rust',
    'golang',
    'golang',
    'c',
    'c'
]



function myReduce(arr, cb, init){
    let acc = init, start = 0;
    if (!init) {
     acc = arr[0];
     start = 1;   
    }
    for (let i = start; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}


const result = myReduce(votes,(acc, curr) => {
    if (acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }

    return acc;
}, {})

console.log(result);

