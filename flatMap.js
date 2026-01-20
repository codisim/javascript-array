const arr = [1,2,3,4,5];

const fltMap = arr.flatMap(x => [x*2]);

const reduceFltMap = arr.reduce((acc, curr) => {
    return acc.concat(curr * 2);
}, [])





console.log(reduceFltMap);
