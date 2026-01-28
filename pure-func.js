function sum(a, b) {
    return a + b;
}

sum(2, 3); // returns 5 this is always return same value for same inputs. so called pure function
sum(2, 3); // returns 5



// side effect example
let counter = 0;

function incrementCounter() {
    counter += 1; // modifies external state
}

incrementCounter(); // counter is now 1
incrementCounter(); // counter is now 2


// withot side effect
function pureIncrementCounter(count) {
    return count + 1; // does not modify external state
}


const arr = [1, 2, 3, 4, 5];
const nums = [1, 2, 3, 4, 5];
function add(arr, data){ // this is impure function because it modifies original array
    arr.push(data);
}

const newArr = add(nums, 6); // modifies original array

console.log(newArr);
