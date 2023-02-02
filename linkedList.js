
// Intialising a List Node 
class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
};


class LinkedList {
    constructor() {
        this.head = null;
    }
    // Append a new node containing value to the end of the list
    append(value) {
        if (this.head === null){
         this.head = new Node(value)
         return;
        }
        let curr = this.head;
        
        while (curr.nextNode !== null) {// if the node is not the tail
            curr = curr.nextNode
        }
        curr.nextNode = new Node(value)
    }

    // Add a new node to the start of the list
    prepend(value) {
        if (this.head === null){
            this.head = new Node(value)
                 return;
        }
        const curr = new Node(value)
        curr.nextNode = this.head
        this.head = curr
 
     }

    print(){
        let str = '';
        let curr = this.head;
        while (curr !== null) {
            str += curr.value + ' ->';
            curr = curr.nextNode;
        }
        console.log(str)
    }
}

const list = new LinkedList()
list.append('a')
list.append('b')
list.append('c')
// console.log(list.head)
list.prepend('d');
list.prepend('f');
list.prepend('g');
console.log(list.head)
list.print()

