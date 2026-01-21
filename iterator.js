

const arr = ['a', 'd', 'b'];

const iArr= arr[Symbol.iterator]();

console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());


const keys = arr.keys();
const values = arr.values();
const entries = arr.entries();


const loop = (it, name) => {
    for(let v of it){
        console.log(`${name} - ${v}`);
    }
}


loop(keys, 'keys');
loop(values, 'values');
loop(entries, 'entries');


// for-of loop kaj kore only for iterator.
// Arrar te kaj kore karon Arrar ak prokar iterator