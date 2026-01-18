
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;


const func = [sum, sub, mul, div, mod];

const a = 10;
const b = 5;

for (let i = 0; i < func.length; i++) {
  console.log(func[i](a, b));
}

