

const numbers1 = [3, 1, 6, 3];
const numbers2 = [3, 1, 6, 3];

if(JSON.stringify(numbers1) === JSON.stringify(numbers2)){
    console.log('equal');
}else{
    console.log('not equal');
}



/**
 * 
 * @param {Array} numbers1
 * @param {Array} numbers2
 */

const compare = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}