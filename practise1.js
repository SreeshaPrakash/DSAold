// function factorial(n){
//     if(n===0 \n===1){
//         return 1;
//     } 

//     return n * (factorial(n-1))
// }
// console.log(factorial(3))

// function fibonacci(n){
//     if(n===0 || n===1){
//         return n
//     }

//     return fibonacci(n-1)+ fibonacci(n-2)
// }
// console.log(fibonacci(6))

// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
  
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
  
//   console.log(fibonacci(6)); // Output: 8
  



// class Node{
//     constructor(value){
//         this.value = value
//     this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             return
//         }
       
//         node.next = this.head
//         this.head = node
//     }

//     reverse(){
//         let prev = null
//         let curr = this.head
//         while(curr){
//             let nextnode = curr.next
//             curr.next = prev
//             prev = curr
//             curr = nextnode
//             // prev.next = nextnode
//         }
//          this.head = prev
        
        
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }   

// }
// const list = new LinkedList()
// list.prepend(10)
// list.prepend(20)
// console.log("original list")
// list.print()
// list.reverse()
// console.log("reversed list")
// list.print()



// //double reverse
class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null

    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }


    append(value) {
        const node = new Node(value);
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = this.tail =  node
            
        }
        else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }

    }

    reverse(){
    
        let curr = this.head
        let temp = null
        while(curr){
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp

            curr = curr.prev

        }
        if(temp){
            this.tail = this.head
            this.head = temp.prev
        }
    }


    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next

        }
    }
}
const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(40)
console.log("original list :")
list.print()
console.log("list after reversal:")
list.reverse()
list.print()




// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null 
//         this.prev = null
//     }
// }
// class DoubleLinked{
//     constructor() {
//         this.head = null
//         this.tail = null
        
//     }

//     prepend(){
//         const node = new Node()
//         if(!this.head){
//             this.head = this.tail = node
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node

//         }
//     }
//     append(){
//         const node = new Node()
//         if(!this.head){
//             this.head = this.tail = node
//         }


//     }
// }



