
const range = {
    start: 0,
    stop: 100,
    step: 5
};

range[Symbol.iterator] = function(){
    let current = this.start;
    const stop = this.stop;
    const step = this.step;

    return {
        next(){

            const obj = {
                value: current,
                done: current >= stop
            }
            current += step;
            return obj;
        }
    }
}