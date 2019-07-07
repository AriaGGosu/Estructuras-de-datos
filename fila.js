// fila Queue 

class Queue{
    constructor(){
        this.item = {};
        this.front = 0;
        this.end = 0;
    };
    // ingresar valores
    enqueue(data){
        this.item[this.end] = data;
        this.end++ ;
    };
    // obtener el primer valor de la fila , sacandolo de la fila 
    dequeue(){
        if (this.front === this.end){
            return null;
        }
        const data = this.item[this.front];
        delete this.item[this.front];
        this.front++;
        return data;
    }
    // tamaño total de la fila 
    getSize(){
        return this.end - this.front;
    }
    // ver si la fila esta vacia
    isEmpty(){
        if (this.getSize() === 0){
            return true;
        }else{
            return false;
        }
    }
    // obtener el primer valor de la fila , sin sacarlo de la fila
    peek(){
        if (this.getSize() === 0){
            return null;
        }
        return this.item[this.front];
    }
    // Imprimir todos los valores de la fila 
    print(){
        if(this.getSize() === 0){
            return null;
        }
        let result = '';
        for(let i = this.front;i < this.end ; i++){
            result += this.item[i] + " ";
        }
        return result;
    }
    
};



// ingresar valores a la fila 
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue("hola mundo");

console.log(queue);

// obtener el primer valor de la fila , sacandolo de la fila 
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

// mostrar el tamaño de la fila 
console.log(queue.getSize());

// ver si la fila esta vacia 
console.log(queue.isEmpty());

// mostrar el primer valor sin sacarlo de la fila 
console.log(queue.peek());

// imprimir todos los valores de la fila
console.log(queue.print());