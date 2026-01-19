
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


    dequeue(){
        if (this.rear === MAX_SIZE) {
            console.log("Queue is empty");
            return false;
        }

        const item = this.queue[this.front];
        for (let i = this.front; i < this.rear - 1; i++) {
            this.queue[i] = this.queue[i + 1];
        }
        delete this.queue[--this.rear]
        return;   
    }


    showqueue(){
        if (this.front === this.rear) {
            console.log("Queue is empty");
            return false;
        }
        for (let i = this.front; i < this.rear; i++) {
            console.log(this.queue[i]);
        }
    }

}


module.exports = Queue;