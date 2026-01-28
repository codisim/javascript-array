function randomSum(max) {
  const rand1 = Math.floor(Math.random() * max);
  const rand2 = Math.floor(Math.random() * max);
  return rand1 + rand2;
}

function randomSub(max) {
  const rand1 = Math.floor(Math.random() * max);
  const rand2 = Math.floor(Math.random() * max);
  return rand1 - rand2;
}

function randomReduce(max) {
  const rand1 = Math.floor(Math.random() * max);
  const rand2 = Math.floor(Math.random() * max);
  return rand1 * rand2;
}

const generateRandomTwoNumber = (max, cb) => {
  const rand1 = Math.floor(Math.random() * max);
  const rand2 = Math.floor(Math.random() * max);
  return cb(rand1, rand2);
};

console.log(generateRandomTwoNumber(10, (a, b) => a + b));
console.log(generateRandomTwoNumber(10, (a, b) => a - b));
console.log(generateRandomTwoNumber(10, (a, b) => a * b));

const power = (p) => {
  return (n) => {
    let res = 1;
    for (let i = 0; i <= p; i++) {
      res *= n;
    }
    return n;
  };
};
