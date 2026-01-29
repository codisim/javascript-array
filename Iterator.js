const hmm = "stack";

const hmmIterator = hmm[Symbol.iterator]();


// console.log(hmmIterator.next());
// console.log(hmmIterator.next());
// console.log(hmmIterator.next());
// console.log(hmmIterator.next());
// console.log(hmmIterator.next());
// console.log(hmmIterator.next());

while (true) {
    const res = hmmIterator.next();
    if (res.done) {
        break;
    }
    console.log(res.value);
}

