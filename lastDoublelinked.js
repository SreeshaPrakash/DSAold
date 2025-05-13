
class Node{
    constructor(value){
        this.value= value
        this.next = null
        this.prev = null
    }
}
class DoubleLinked{
    constructor(){
        this.head = null
        this.tail = null
    }
    
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = this.tail = node
            return
        }
        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    append(value){
        const node = new Node(value)
        if(!this.tail){
            this.head =  this.tail = node
        }
        else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }

    insertAt(value,index){
        const node = new Node(value)

        // if(!this.head){
        //     this.head = this.tail = node
        //     return
        // }
        if(!this.head || index ===0){
            node.next = this.head
            this.head.prev = node
            this.head = node
            return
        }
        let curr = this.head
        for(let i=0;i<index-1;i++){
            curr = curr.next
        }
        node.next = curr.next
        node.prev = curr
        if(curr.next){
            curr.next.prev = node
        }
        else{
            this.tail = node
        }
        curr.next = node
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
    
    addMiddle(value){
        const node = new Node(value)
        if(!this.head){
            this.head = this.tail = node
            return
        }
        let fast = this.head
        let slow = this.head
        let prev = null
        while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }
        node.next = slow
        node.prev = prev
        prev.next = node
        slow.prev = node
        

    }

    search(value){
        if(!this.head){
            return null
        }
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return true
            }
            curr = curr.next
        }
        return false
    }

    duplicate(){
        const duplicate = new DoubleLinked()
        let curr = this.head
        while(curr){
            duplicate.append(curr.value)
            curr = curr.next
        }
        return duplicate
    }

    reverse(){
        if(!this.head){
            return 
        }
        let curr = this.head
        let temp = null
        while(curr){
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp

            curr = curr.prev
        }
        if(temp){
            this.head = temp.prev
        }
    }

    removefirst(){
        if(!this.head){
            return
        }
        if(this.head === this.tail){
            this.head = this.tail = null
            return
        }
        this.head = this.head.next
        this.head.prev = null
    }

    removeLast(){
        if(!this.tail){
            return
        }
        if(this.head === this.tail){
            this.head = this.tail = null
            return
        }
        else{
            this.tail= this.tail.prev
            this.tail.next = null
        }
    }

    removefrom(index){
        let removenode
        if(!this.head){
            this.head = this.tail = null
        }
        let curr = this.head
        let count =0
        // for(let i=0;i<index-1;i++){
        //     curr = curr.next
        // }
        // removenode = curr.next
        // curr.next = removenode.next
        // removenode.prev = curr
        while(curr && count<index )
        curr = curr.next
    }


    print(){
        let curr = this.head
        let doublelist = ""
        while(curr){
            doublelist += `${curr.value} `
            curr = curr.next
        }
        console.log(doublelist)
    }
    
}
const list = new DoubleLinked()
list.prepend(20)
list.append(30)
list.insertAt(40,1)
list.insertAt(40,0)
list.print()
// console.log(list.findMiddle())
list.addMiddle(50)
list.print()
console.log(list.search(30))



const duplicateList = list.duplicate()
console.log("duplicated list:")
duplicateList.print()

list.reverse()
console.log("reversed list:")
list.print()

// list.removefirst()
// console.log("removed first:")
// list.print()


// list.removeLast()
// console.log("removed last:")
// list.print()

list.removeFrom(1)
list.print()