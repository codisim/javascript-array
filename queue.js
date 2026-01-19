
const MAX_SIZE = 30;
class Queue {
    constructor(){
        this.front = 0;
        this.rear = 0;
        this.queue = new Array(MAX_SIZE);
    }


    enqueue(item){
        if (this.rear === MAX_SIZE) {
            console.log("Queue is full");
            return false;
        }
        this.queue[this.rear] = item;
        this.rear++;
        return true;
    }

}