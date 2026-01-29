// async func return a promiss 
// generator return a iterator


function * myGenerator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const it = myGenerator();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());