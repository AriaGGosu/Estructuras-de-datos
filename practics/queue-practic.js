// FIFO
// [x]constructor
// [x]enqueue
// [x]dequeue
// [x]getSize
// [x]isEmpty
// [x]peek
// [x]print

class queue{
    constructor(){
        this.item = {};
        this.front = 0;
        this.end = 0;
    }
    enQueue(data){
        this.item[this.end] = data;
        this.end++;
    }
    deQueue(){
        if(this.front === this.end){
            return null;
        }
        const data = this.item[this.front];
        delete this.item[this.front];
        this.front++;
        return data;
    }
    getSize(){
        return this.end - this.front;
    }
    isEmpty(){
        return this.getSize() === 0;
    }
    peek(){
        if(this.getSize() === 0){
            return null;
        }
        return this.item[this.front];
    }
    print(){
        let data = ''
        for(let i =this.front; i< this.end; i++){
            data += this.item[i] + " ";
        }
        return data;
    }

}


const Queue = new queue;

Queue.enQueue(12);
Queue.enQueue(50);
Queue.enQueue(30);
Queue.enQueue(20);

console.log(Queue.isEmpty());
console.log(Queue);

console.log(Queue.print());