
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
        this.length = 0
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
     // Get the size of the list
    size() {
        let sum = 0
        let curr = this.head
        if (this.head === null){
                return 0;
        }
        while (curr !== null){
            sum++
            curr = curr.nextNode
        }
        return sum
    }

    // Print the list
    print(){
        let str = '';
        let curr = this.head;
        while (curr !== null) {
            str += curr.value + ' ->';
            curr = curr.nextNode;
        }
        console.log(str)
    }

    // Get the head of the list
    printHead() {
        if (this.head === null){
            return;
       }return this.head
    }
    // Get the tail of the list
    tail() {
        if (this.head === null){
            return;
       }
       let curr = this.head
       while (curr.nextNode !== null){
           curr = curr.nextNode
       }
       return curr.value
    }
    // Get the value of a given index
    at(index) {
       let counter = 0;
       let curr = this.head;
       while (counter !== index) {
        if (curr.nextNode === null) return null
        curr = curr.nextNode
        counter++
           
       }
       return curr
    }
    // Remove the last element of the list
    pop() {
        let curr = this.head
        let prev = null
        while (curr.nextNode !== null){
            prev = curr
            curr = curr.nextNode
        }
        return prev.nextNode = null
    }

    // Return true if the list contains a given value, else return false
    contains(value) {
        let curr = this.head
        while (curr !== null) {
            if (curr.value === value) {
                return true
            }
            curr = curr.nextNode
        }return false
    }
    // Find the index of a given value
    find(value) {
        let curr = this.head
        let index = 0
        while (curr.value !== value){
        if (curr.nextNode === null) return null
         index ++
         curr = curr.nextNode
            
        } return index
    }
    // Represent the linkedlist object as strings
    toString(){
        let curr = this.head
        let str = ''
        while (curr !== null){
            str += '(' + curr.value  + ') ' + ' -> '
            curr = curr.nextNode

        }
        console.log(str)
    }

    // Insert a new node with the provided value and given index.
    insertAt(value, index) {
        if (index > this.length) {
            return this.append(value)
        }
        let count = 0
        let curr = this.head
        while (curr !== null) {
            count ++
            let prev = curr
            if (count === index){
                const newNode = new Node(value)
              let pointer = prev.nextNode
              prev.nextNode = newNode
              newNode.nextNode = pointer
                return
            }
            this.length++
            curr = curr.nextNode 
        }
    }

    // Remove node at the given index
    removeAt(index) {
        let curr = this.head
        let prev = curr
        let count = 0
        if (index === 0) this.head = curr.nextNode
        while(curr !== null) {

            if (index === count){
                prev.nextNode = curr.nextNode 
                return
            }
            prev = curr
            curr = curr.nextNode 
            count ++
            }
         }
     }





// Test cases

// const list = new LinkedList()
// list.append('a')
// list.append('b')
// list.append('c')
// // console.log(list.head)
// list.prepend('d');
// list.prepend('f');
// list.prepend('g');
// console.log(list.head)

// console.log(list.size())
// console.log(list.printHead())
// console.log(list.tail())
// console.log(list.at(2))
// list.print()
// list.pop() 
// list.print()
// console.log(list.contains('c'))
// console.log(list.at('z'))
// list.print()
// console.log(list.find('z'))
// list.toString()
// // list.insertAt('y', 7)
// // list.insertAt('z', 20)

// list.removeAt(0)
// list.removeAt(0)
// list.removeAt(0)
// list.removeAt(0)
// list.toString()

