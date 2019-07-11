// [x]Node constructor
// [x]linked List constructor
// [x]add
// [x]inserAt
// [x]removeFrom
// [ ]removeElement
// [ ]isEmpty
// [ ]peek
// [ ]print

class node{
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
        const newNode = new node(data,null);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    insertAt(data,index){
        if(index < 0 || index > this.size){
            return null;
        }
        const newNode = new node(data,null);
        let current = this.head;
        let previous;

        if(index === 0){
            newNode.next = current;
            this.head = newNode;
        }else{
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }
    removeFrom(index){
        if(index < 0 || index > this.size){
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
        return current.data;
    }
    // removeElement(data){
    //     let current = this.head;
    //     let previous;
    //     while(current != null){
    //         if(current.data === data){
    //             if(!previous){
    //                 this.head = current.next;
    //             }else{
    //                 previous.next = current.next;
    //             }
    //             this.size--;
    //             return current.data;
    //         }
    //         previous = current;
    //         current = current.next;
    //     }
    // }


}

const nuevaLista = new linkedList();
nuevaLista.add(12);
nuevaLista.add(23);
nuevaLista.insertAt(19,1);
nuevaLista.removeFrom(0);
nuevaLista.removeElement(19);
console.log(nuevaLista);




