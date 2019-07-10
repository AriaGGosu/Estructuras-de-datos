// pila
// Lista ordenada o estructura de datos que permite 
// almacenar y recuperar datos, 
// el modo de acceso a sus elementos es de tipo 
// LIFO
// [  ]constructor
// [  ]push
// [  ]pop
// [  ]getSize
// [  ]isEmpty
// [  ]peek
// [  ]print

class stack {
    constructor(){
        this.item = {};
        this.top = 0 ;
    };
    push(data){
        this.top++;
        this.item[this.top] = data;
    };
    pop(){
        let deletedData;
        if(this.top){
            deletedData = this.item[this.top];
            delete this.item[this.top];
            this.top--;
            return deletedData;
        }
    }
    getSize(){
        return this.top;
    }
    isEmpty(){
        if(!this.getSize()){
            return true;
        }else{
            return false;
        }
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.item[this.top];
    }
    print(){
        let result ='';
        for(let i = this.top; i > 0; i--){
            result += this.item[i] + " ";
        }
        return result;
    }
};

// constructor
let stacks = new stack();
console.log(stacks);

// poner un objeto en la pila
stacks.push("plato numero 1");
stacks.push("plato numero 2");
stacks.push("plato numero 3");
stacks.push("plato numero 4");


// remover un objeto de la pila
console.log(stacks.pop());
console.log(stacks.pop());

// devolver el tamaño de la pila
console.log(stacks.getSize());

// ver si la pila esta vacia
console.log(stacks.isEmpty());

// devolver el objeto mas arriba de la pila
console.log(stacks.peek());

console.log(stacks.print());