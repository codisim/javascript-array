

function wait(ms){ // vorbose code
    const promise = new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
    return promise;
}

const waitt = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // concise code


wait(10).then(() => {
    console.log('Done in 10ms');
})

wait(100).then(() => {
    console.log('Done in 100ms');
})

wait(1000).then(() => {
    console.log('Done in 1000ms');
})

