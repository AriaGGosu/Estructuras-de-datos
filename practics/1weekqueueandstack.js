// Queue
// FIFO
// [x]constructor
// [x]enqueue
// [x]dequeue
// [x]getSize
// [x]isEmpty
// [x]peek
// [ ]print

class queue {
    constructor(){
        this.item = {};
        this.front = 0;
        this.end = 0
    }
    enqueue(data){
        this.item[this.end] = data;
        this.end++;
    }
    dequeue(){
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
        if(this.isEmpty()){
            return null;
        }
        return this.item[this.front];
    }
    print(){
        if(this.isEmpty()){
            return null;
        }
        let result = '';
        for(let i = this.front; i < this.end; i++){
            result += this.item[i] + " ";
        }
        return result;
    }
}

const newQueue = new queue();

newQueue.enqueue(12);
newQueue.enqueue(23);
newQueue.enqueue(36);
newQueue.dequeue();


console.log(newQueue);
console.log(newQueue.getSize());
console.log(newQueue.isEmpty());
console.log(newQueue.peek());

console.log(newQueue.print());