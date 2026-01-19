

const max_size = 20;

class Stack {
    constructor() {
        this.list = new Array(max_size);
        this.top = -1;
    }


    push(item){
        if (this.top > max_size) {
            console.log("Stack overflow");
            return false;
        }
        this.list[++this.top] = item;
        return true;
    }


    pop(){
        if (this.isEmpty()) {
            console.log("Stack underflow");
            return false;
        }
        let item = this.item[this.top];
        delete this.list[this.top];
        this.top--;
        return item;
    }


    peek(){
        if (this.isEmpty()) {
            console.log("Stack underflow");
            return false;
        }
        this.list[this.top];
    }


    isEmpty(){
        return this.top < 0;
    }

}