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
}

const linked = new linkedList;
linked.add(12);
linked.add(14);

console.log(linked);