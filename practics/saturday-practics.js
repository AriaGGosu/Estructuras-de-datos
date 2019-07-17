// fibonacci
let a = 0;
let b = 1;
let total = 0;

for(i = 0; i < 10; i++){
    // console.log(total);
    total = a + b;
    a = b;
    b = total;
}

// fizzbuzz
for(let i = 1; i < 100; i++){
    let result = "";
    if(i % 3 === 0){result += "fizz";}
    if(i % 5 === 0){result += "buzz";}
    if(result === ""){result = i;}
    // console.log(result);
}

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
    enqueue(data){
        this.item[this.end] = data;
        this.end++;
    }
    dequeue(){
        const data = this.item[this.front];
        delete this.item[this.front];
        this.front++;
        return data;
    }
}
const lista = new queue();
lista.enqueue(12);
lista.enqueue(22);
lista.enqueue(35);
lista.dequeue();

// console.log(lista);

