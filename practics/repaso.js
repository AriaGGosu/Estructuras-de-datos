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
        let current = this.head;
        if(current === null){
            this.head = newNode;
        }else{
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    insertAt(data,index){
        if(index < 0 || index >= this.size){
            return;
        }
        const newNode = new Node(data,null);
        let current = this.head;
        let previous = null;
        if(index === 0){
            this.head = newNode;
            newNode.next = current;
        }else{
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.next = current;
        }
        this.size++;
    }
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return;
        }
        let current = this.head;
        let previous = null;

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
            return;
        }
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    print(){
        let result = '';
        let current = this.head;
        while(current != null){
            result += current.data + "->";
            current = current.next
        }
        result += "x";
        return result;
    }
}


