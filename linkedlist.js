class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
   }

    prepend(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
    }


    insert(value, index){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            return 
        }
        if(index === 0){
            node.next = this.head
            this.head = node
        }else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }


    removeFrom(index){
        if(index<0 || index>this.size){
            this.head = null
            return
        }
let removenode
        if(index === 0){
            removenode = this.head
            this.head.prev = null
            return
        }
        else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            removenode = curr.next
            curr.next = removenode.next
        }
        return removenode
    }

   print(){
    let curr = this.head
    while(curr){
        console.log(curr.value)
        curr= curr.next
    }
   }
}
const list = new LinkedList()
list.prepend(100)
list.insert(20,0)
list.insert(30,1)
//list.removefrom(2)
list.print()
console.log(list.removeFrom(1))
console.log("list after removing:")
list.print()

































// //LINKEDLIST PREPEND APPEND PRINT
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }

// }
// class LinkedList{
//     constructor(){
//         this.head = null  
//     }

//     prepend(value){
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//     }

//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }
//         let prev = this.head
//         while(prev.next){
//             prev = prev.next
//         }
//         prev.next = node
//     }

//     insert(value,index){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }
//         if(index === 0){
//             node.next = this.head
//             this.head = node
//         }
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
            
//         }
//         node.next = prev.next
//         prev.next = node
//     }


//     search(value){
//         if(!this.head) return null
//         let curr = this.head    
//         if(curr.value === value){
//             return true
//         }
//       curr= curr.next
//     }

//     remove(index){
//         if(!this.head){
//             this.head = null
//             return 
//         }
//         let removenode
//         if(index === 0){
//            removenode = this.head
//            this.head = this.head.next 
//         }
//         else{
//             let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
//         }
//         removenode = prev.next
//         prev.next = removenode.next
//         }
//         return removenode
//     }

//     reverse(){
//         let curr = this.head
//         let prev = null
//         while(curr){
//             let nextnode = curr.next
//             curr.next = prev
//             prev = curr
//             curr = nextnode
//         }
//         this.head = prev
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
// list.prepend(30)
// list.append(40)
// list.append(50)
// list.print()
// console.log(list.search(30))
// console.log(list.remove(3));
// console.log(list.remove(0));
// list.insert(60,2)
// list.print()
// console.log("reversed list:")
// list.reverse()
// list.print()






