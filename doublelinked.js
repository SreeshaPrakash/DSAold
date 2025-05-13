class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoubleLinked{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = this.tail = node
        }
        else{   
        node.next = this.head
        this.head = node
         }
        
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(!this.tail){
            this.head = this.tail = node
            
        }
        else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }

    addmiddle(value){
        const node = new Node(value)
        if(!this.head){
            this.head = this.tail = node
        }
        let fast = this.head
        let slow = this.head
        let prev= null
        while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }
        node.next = slow
        slow.prev = node
        prev.next = node
    }
    

//     remove(index){
//         if(!this.head){
//             this.head = this.tail = null
//         }
// let removenode
//         let curr = this.head
//        for(let i=0;i,index-1; i++){
//          curr = curr.next
//        }
//        removenode = this.tail
       

//     }


removelast(){
    if(!this.tail){
        this.head = this.tail= null 
    }

    this.tail = this.tail.prev
    this.tail.next = null

}
removefirst(){
    this.head = this.head.next
    this.head.prev = null
}

removemiddle(){
    if(!this.head){
        this.head = this.tail = null
    }
    else{
         let fast = this.head
         let slow = this.head
         let prev = null

         while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next
         }
         prev.next = slow.next
    }
}

findMiddle(){
    if(!this.head){
        return 
    }
    let fast = this.head
    let slow = this.head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}


    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }

   
}
const list = new DoubleLinked()
list.prepend(120)
list.append(40)
list.prepend(100)
// list.prepend(30)
list.append(90)
list.print()
// console.log("removed:")
// list.removelast()
// list.print()
// console.log("removed:")
// list.removefirst()
// list.print()
// console.log("removed middle:")
// list.removemiddle()
// list.print()
console.log("after middle adding:")
list.addmiddle(300)
list.print()

console.log(list.findMiddle())
