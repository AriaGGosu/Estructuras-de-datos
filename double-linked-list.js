class Node{
    constructor(data,next,prev){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class doubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addToHead(data){
        const newNode = new Node(data, this.head, null);
        if(this.head){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }else{
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    addToTail(data){
        const newNode = new Node(data, null, this.tail);
        if(this.tail){
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }else{
            this.tail = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    insertAt(data,index){
        if(index < 0 || index >= this.size){
            return null;
        }
        const newNode = new Node(data, null, null);
        let current = this.head;
        let previous = null;
        if(index === 0){
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        }else{
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            newNode.prev = previous;
            previous.next = newNode;
            current.prev = newNode;
        }
        this.size++;
    }
    removeFromHead(){
        if(!this.head){
            return null;
        }
        const dataToReturn = this.head.data;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return dataToReturn;
    }
    removeFromTail(){
        if(!this.tail){
            return null;
        }
        const dataToReturn = this.tail.data;
        if(this.tail === this.head){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return dataToReturn;
    }
    removeData(data){
        let current = this.head;
        let previous = null;

        while(current != null){
            if(current.data === data){
                if(!previous){
                    return this.removeFromHead();
                }else if(!current.next){
                    return this.removeFromTail();
                }else{
                    previous.next = current.next;
                    current.next.prev = previous;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }
    print(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.data + "<->";
            current = current.next;
        }
        return result += "x";
    }
    reversePrint(){
        let current = this.tail;
        let result = '';
        while(current){
            result += current.data + "<->";
            current = current.prev;
        }
        return result += "x";
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }

}


const newDoubleLinkedList = new doubleLinkedList();

newDoubleLinkedList.addToHead(12);
newDoubleLinkedList.addToHead(22);
newDoubleLinkedList.addToTail(33);
newDoubleLinkedList.addToTail(5);

newDoubleLinkedList.insertAt(20,1);
newDoubleLinkedList.insertAt(99,1);
newDoubleLinkedList.removeFromHead();
newDoubleLinkedList.removeFromTail();
newDoubleLinkedList.removeFromTail();
// newDoubleLinkedList.removeData(99);
newDoubleLinkedList.removeData(20);



console.log(newDoubleLinkedList.print());
console.log(newDoubleLinkedList.reversePrint());
console.log(newDoubleLinkedList);