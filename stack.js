

// const max_size = 20;

// class Stack {
//     constructor() {
//         this.list = new Array(max_size);
//         this.top = -1;
//     }


//     push(item){
//         if (this.top > max_size) {
//             console.log("Stack overflow");
//             return false;
//         }
//         this.list[++this.top] = item;
//         return true;
//     }


//     pop(){
//         if (this.isEmpty()) {
//             console.log("Stack underflow");
//             return false;
//         }
//         let item = this.item[this.top];
//         delete this.list[this.top];
//         this.top--;
//         return item;
//     }


//     peek(){
//         if (this.isEmpty()) {
//             console.log("Stack underflow");
//             return false;
//         }
//         this.list[this.top];
//     }


//     isEmpty(){
//         return this.top < 0;
//     }

// }


// module.exports = Stack;








const max_size = 20;

class Stack {
    constructor() {
        this.list = new Array(max_size);
        this.top = -1;
    }

    push(item) {
        // Check if stack is full (index 19 is the limit for size 20)
        if (this.top >= max_size - 1) {
            console.log("Stack overflow");
            return false;
        }
        this.list[++this.top] = item;
        return true;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack underflow");
            return false;
        }
        let item = this.list[this.top]; // Fixed variable name
        delete this.list[this.top];     // Optional in JS, but keeps it clean
        this.top--;
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return false;
        }
        return this.list[this.top]; // Added return statement
    }

    isEmpty() {
        return this.top < 0;
    }
}

module.exports = Stack;