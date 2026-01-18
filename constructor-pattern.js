const names = new Array();

// console.log(names, names.length);

// factory
const numbers = Array();

// console.log(numbers, numbers.length);

// console.log(names.__proto__.constructor);
// console.log(numbers.__proto__.constructor);

const arr = [1, 2, 3, 4, 5];

const sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

// find large number
const largeNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largeNumber) {
    largeNumber = arr[i];
  }
}


/////////
const arr2 = Array(10);

for (let i = 1; i < arr2.length; i++) {
  arr2[i] = false;
}



// array fill
const arr3 = Array(10);

arr3.fill(0);

console.log(arr3);


// dynamicly fill
const arr4 = Array(9);
arr4.fill(false);

for (let i = 0; i < arr4.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);

  arr4[i] = rand > 5 ? "X " : "O ";
}

console.log(arr4);