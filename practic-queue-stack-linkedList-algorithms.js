// Queue
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
        let data;
        data = this.item[this.front];
        delete this.item[this.front];
        this.front++;
        return data ;
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

const Queue = new queue();

Queue.enQueue(12);
Queue.enQueue(25);
Queue.enQueue(34);
Queue.deQueue();

// console.log(Queue.getSize());
// console.log(Queue);
// console.log(Queue.isEmpty());
// console.log(Queue.peek());
// console.log(Queue.print());

//---------------------------------------//
//---------------------------------------//


// Stack 
// LIFO
// [x]constructor
// [x]push
// [x]pop
// [x]getSize
// [x]isEmpty
// [x]peek
// [x]print

class stack {
    constructor(){
        this.item = {};
        this.top = 0;
    }
    push(data){
        this.top++;
        this.item[this.top] = data;
    }
    pop(){
        if(this.top === 0){
            return null;
        }
        let data = this.item[this.top];
        delete this.item[this.top];
        this.top--;
        return data;
    }
    getSize(){
        return this.top;
    }
    isEmpty(){
        return this.getSize() === 0;
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.item[this.top];
    }
    print(){
        if (this.isEmpty()){
            return null;
        }
        let result = '';
        for(let i = 1; i <= this.top; i++){
            result += this.item[i] + " ";
        }
        return result;

    }
}

const Stack = new stack();
Stack.push(12);
Stack.push(32);
Stack.push(45);

// console.log(Stack);
// console.log(Stack.pop());
// console.log(Stack);
// console.log(Stack.isEmpty());
// console.log(Stack.peek());
// console.log(Stack.print());

//---------------------------------------//
//---------------------------------------//

// linked List
// [x]Node constructor
// [x]linked List constructor
// [x]add
// [x]inserAt
// [x]removeFrom
// [x]removeElement
// [x]isEmpty
// [x]getSize
// [x]print


class Node{
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}


class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(data){
        const newNode = new Node(data,null);
        if(this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    insertAt(data,index){
        
        if(index < 0 || index >= this.size){
            return null;
        }
        const newNode = new Node(data,null);
        let current = this.head;
        let previous;
        
        if(index === 0){
            this.head = newNode;
            newNode.next = current;
        }else{
            for(let i = 0; i < index; i++){
                previous = current ;
                current = current.next;
            }
            previous.next = newNode;
            newNode.next = current;
        }
        this.size++;
    }
    removeFrom(index){
        if(index < 0 ||index >= this.size){
            return null;
        }
        let current = this.head;
        let previous;
        if(index === 0){
            this.head = current.next;
        }else{
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    removeElement(data){
        let current = this.head;
        let previous;
        while(current != null){
            if(current.data === data){
                if(!previous){
                    this.head = current.next;
                }else{
                    previous.next = current.next;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        if(current === null){
            return null;
        }
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    print(){
        if(isEmpty){
            return;
        }else{
            let current = this.head;
            let result = '';

            for(let i = 0; i < this.size; i++){
                result = current.data + "->";
                current = current.next;
            }
        }
    }
}


const newLinkedList = new linkedList();
newLinkedList.add(12);
newLinkedList.add(32);
newLinkedList.insertAt(23,1);
newLinkedList.insertAt(24,0);
// newLinkedList.removeFrom(1);
console.log(newLinkedList.removeElement(23));
// console.log(newLinkedList.removeFrom(3));
console.log(newLinkedList);
console.log(newLinkedList.isEmpty());
console.log(newLinkedList.getSize());

