// // lista enlazada (linked List) // //
// una lista enlazada es una coleccion "linear" construida por una secuencia 
// de "nodos" en donde se guardan campos de datos arbitrarios y una 
// referencia al siguiente nodo  
// [  ]Node constructor
// [  ]linked List constructor
// [  ]add
// [  ]inserAt
// [  ]removeFrom
// [  ]removeElement
// [  ]isEmpty
// [  ]peek
// [  ]print

class node {
    constructor(data , next){
        this.data = data;
        this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // funcion agregar nodo recibe la data del nuevo nodo
    add(data){
        // se crea el elemento desde la clase node
        const newNode = new node(data,null);
        // si la cabeza tiene un valor de nulo esta toma el valor del nuevo nodo
        if(!this.head){
            this.head = newNode;
        // si ya tiene datos comenzamos a recorrer la lista desde head
        }else{
            // guardamos el valor actual de head en current
            let current = this.head;
            // mientras exista un valor dentro del nuevo nodo.next este ciclo se repetira
            while(current.next){
                current = current.next;
            };
            // al salir del ciclo le asignamos el valor del nuevo nodo al ultimo nodo.next
            current.next = newNode;
        }
        // incrementamos el tamaño de la lista
        this.size++;
    }
    // funcion agregar donde recibe la data y el indice donde lo queremos agregar
    insertAt(data,index){
        // primero validamos que el indice sea un numero valido dentro de la lista
        if(index < 0 || index > this.size){
            return null;
        }
        // creamos el nuevo nodo llamando a la clase node
        const newNode = new node(data);
        // guardamos los datos de la cabeza en current y inicializamos previous
        let current = this.head;
        let previous;
        // si el indice es igual a 0 significa que el nuevo nodo debe estar al principio de todo
        if(index === 0){
            newNode.next = current;
            this.head = newNode;
        }else{
            // el siguiente siclo hace avanzar al nodo indicado dependiendo el indice escrito
            for(let i = 0;i < index; i++){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }
    // remover un nodo por su valor
    removeData(data){
        // guardamos los datos actuales en variables
        let current = this.head;
        let previous;
        // mientras el valor del nodo actual sea distinto a nulo
        while(current != null){
            // si el nodo.data es igual a la data ingresada
            if(current.data === data){
                // si el valor de previous es nulo la cabeza pasa a ser el valor del valor actual.next
                if(!previous){
                    this.head = current.next;
                }else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data;
            }
            return null;
        }
    }
    // remover un nodo de un indice especifico
    removeFrom(index){
        // si el indice es menor a 0 y mayor que el tamño , dara null
        if(index < 0 || index > this.size){
            return null;
        }
        // guardamos los datos en variables
        let current = this.head;
        let previous = null;
        // si el indice es igual a 0 esto borrara la cabeza de la lista y el siguiente
        // valor sera la nueva cabeza
        if(index === 0){
            this.head = current.next;
            // si no haremos un ciclo hasta llegar al indice correcto
        }else{
            for(let i = 0; i < index; i++){
                // la variable actual sera asignada a la anterior
                previous = current;
                // y la siguiente asignada a la actual
                current = current.next;
            }
            // ahora asignamos el valor de anterior.next al siguiente valor del actual(actual.next) 
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    isEmpty(){

        // forma actual 
        // if(this.size === 0){
        //     return true;
        // }else{
        //     return false;
        // }

        // shortcut 
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    // funcion auxiliar imprimir datos
    print(){
        // si la lista no tiene un tamaño, devuelve nulo
        if(!this.size){
            return null;
        }
        // guardamos los datos 
        let current = this.head;
        let result = '';
        // mientras current exista o tenga un valor
        while(current){
            // result tomara el valor de current y current tomara el siguiente valor
            result += current.data + "->";
            current = current.next;
        }
        // asignamos como ultimo valor una x para indicar que es el ultimo nodo
        result += "x"; 
        return result;
    }
}

const linkedlist = new linkedList();
// agregar nuevo nodo al final de la lista
linkedlist.add(12);
linkedlist.add(40);

// agregar nuevo nodo en indice especifico
linkedlist.insertAt(19,1);

// imprimir datos en pantalla
console.log(linkedlist.print());

// remover un nodo de un indice especifico
console.log(linkedlist.removeFrom(1));

// mostrar lista por consola
console.log(linkedlist);

// mostras si la lista esta vacia true/false
console.log(linkedlist.isEmpty());

// mostrar el tamaño de la lista
console.log(linkedlist.getSize());