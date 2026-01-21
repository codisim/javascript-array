const numbers = [3, 1, 6, 3];

console.log(numbers.constructor.prototype);
console.log(Array.prototype);


console.log(Object.getOwnPropertyNames(Array.prototype));


// prototype is parent obj

Array.prototype.log = function() {
    console.log(this.join(' | '));
}

numbers.log();


const strings = ['a', 'b', 'c', 'd', 'e'];

strings.log();


Array.prototype.loop = function(cb){
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

numbers.loop(v => console.log(`The number is ${v}`))

strings.loop(v => console.log(`The string is ${v}`))