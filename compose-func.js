
// example 
const add10 = (a) => a + 10;
const times3 = (a) => a * 3;
const div2 = (a) => a / 2;

const n = 5;
const x = div2(times3(add10(n)));
console.log(x);


// pipe func - short way
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), n);
const r1 = pipe(add10, times3, div2)(n);

console.log(r1);


// compose func - long way
const compose = (...fns) => {
    return (x) => {
        return fns.reduce((v, f) => f(v), x);
    }
}

const r2 = compose(add10, times3, div2)(n);

console.log(r2);