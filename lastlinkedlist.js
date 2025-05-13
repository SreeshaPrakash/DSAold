class Node{
    constructor(value){
        this.value =value
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

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    insertAt(value, index){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }
        if(index === 0){
            node.next = this.head
            this.head = node
        }
        else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next 
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    findMiddle(){
        if(!this.head ){
            return 
        }
        let fast  = this.head
        let slow = this.head
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }

    addatMiddle(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
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
       prev.next = node
       this.size++
    }

    search(value){
        // if(!this.head){
        //     return 
        // }
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
        const duplicate = new LinkedList()
        let curr = this.head
        while(curr){
            duplicate.append(curr.value)
            curr = curr.next
        }
        return duplicate
    }

    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let nextnode = curr.next
            curr.next = prev
            prev = curr
            curr = nextnode
        }
        this.head = prev
    }

    removefromMiddle(){
        if(!this.head || !this.head.next){
            this.head = null
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
        if(prev){
            prev.next = slow.next
        }
    }

    removeFirst(){
        
        if(!this.head){
            return this.head = null
        }
        this.head = this.head.next
    }

    removeLast(){
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head = null
            return
        }
        let curr = this.head
        while(curr.next.next){
            curr = curr.next
        }
        curr.next = null
    }

    removeFrom(index){
        if(!this.head){
            return
        }
        if(index === 0){
             this.head = this.head.next
             return
        }
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        prev.next = prev.next.next

    }


     
    print(){
        let curr = this.head
        let listValues = ""
        while(curr){
             listValues += `${curr.value} `
             curr = curr.next
        }
        console.log(listValues)
    }
}

const list = new LinkedList()
list.prepend(20)
list.append(30)
list.insertAt(40,1)
list.print()
console.log(list.findMiddle())
list.addatMiddle(50)
list.print()
list.removefromMiddle()
list.print()
list.search(30)
console.log(list.search(40))
console.log(list.search(40))

const duplicateList  = list.duplicate()
console.log("duplicated list:")
duplicateList.print()

console.log("reversed array:")
list.reverse()
list.print()
// console.log("after removing first node:")
// list.removeFirst()
// list.print()
// console.log("after removing last node:")
// list.removeLast()
// list.print()
list.removeFrom(0)
list.print()
