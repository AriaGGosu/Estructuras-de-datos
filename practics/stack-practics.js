// LIFO
// [x]constructor
// [x]push
// [x]pop
// [x]getSize
// [x]isEmpty
// [x]peek
// [x]print

class stack{
    constructor(){
        this.item ={};
        this.top = 0;
    }
    push(data){
        this.top++
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
        let result = ''
        for(let i = 0; i<= this.top; i++){
            result += this.item[i] + " ";
        }
        return result;
    }
}


const pila = new stack();
pila.push(12);
pila.push(38);
pila.push(23);
pila.push(42);

console.log(pila.isEmpty());
console.log(pila);
console.log(pila.getSize());
console.log(pila.peek());
console.log(pila.print());