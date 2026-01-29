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

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());





function * range (start = 0, stop = 100, step = 5) {
    for (let i = start; i < stop; i += step) {
        yield i;
    }
}

const it2 = range(0, 20, 3);


// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());

for (const num of it2) {
    console.log(num);
}
