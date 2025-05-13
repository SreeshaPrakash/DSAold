// //FACTORIAL RECURSIVE BINARY FUNCTION
// function factorial(n){
//     if(n===0 || n===1)return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(3))


// //FIBONNACI RECURSIVE BINARY FUNCTION 
// function fibonacci(n){
//     if(n===0) return 0
//     if(n===1) return 1
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))


// //BINARY RECURSIVE FUNCTION 
// function binaryRecursion(arr,target){
//     return search(arr,target,0, arr.length-1)
// }

// function search(arr,target,leftIndex, rightIndex){
//     if(leftIndex >rightIndex) return -1

//     let midIndex = Math.floor((leftIndex + rightIndex)/2)

//     if (target === arr[midIndex]){
//         return midIndex
//     }
//     else if (target <= arr[midIndex]){
//         return search(arr,target,leftIndex,midIndex-1)
//     }
//     else{
//         return search(arr,target,midIndex+1,rightIndex)
//     }
// }

// console.log(binaryRecursion([2,3,7,8,9],9))


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


//REVERSE EACH WORD IN A STRING 
// function reverse(str){
//     let term = str.split(" ")
//     let res = []
//     for(let i of term){
//         for(let j=i.length-1; j>=0;j--){
//              res += i[j]
//         }
//         res += " "
//     }
//     return res
// }
// console.log(reverse("hello world"));


// //DOUBLE LINKED LIST
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }
// class DoubleLinked{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
    
//     // isEmpty(){
//     //     return this.size === 0
//     // }

//     getsize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.size === 0){
//            this.head = this.tail = node
//         }
//         else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.size === 0){
//             this.head = this.tail = node
//             // return 
//         }
//         let curr = this.head
//         while(curr.next){
//             curr = curr.next
//         }    
//         node.prev = curr
//         curr.next = node
//         this.size++
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             return 
//         }
//         const node = new Node(value)
//         if(index === 0){
//             node.next = this.head
//             if(this.head){
//                 this.head.prev = node
//                }
//             this.head = node
//             return
//         }
//         let curr = this.head
//         for(let i=0;i<index-1;i++){
//             curr = curr.next
//         }
//         node.prev = curr
//         node.next = curr.next
//         if(curr.next){
//             curr.next.prev = node
//         }
//         curr.next = node
//     }

//     //remove from staring
//     removeFirst(){
//         if(!this.head){
//             return
//         }
//         this.head = this.head.next
//         if(this.head){
//             this.head.prev = null
//         }
//     }

//     removeLast(){
//         if(!this.head){
//             return
//         }
//         if(!this.head.next){
//             this.head = null
//             return 
//         }
//         let curr = this.head
//         while(curr.next.next){
//             curr = curr.next
//         }
//         curr.next = null;
//     }

//     // removeFrom(index){
//     //     if(index<0 || index>this.size-1){
//     //         return
//     //     }
//     //     if(index === 0){
//     //         this.head = this.head.next
//     //         if(this.head){
//     //             this.head.prev = null
//     //         }
//     //     }
        
//     //         let curr = this.head
//     //         for(let i=0; i<index-1; i++){
//     //             curr = curr.next
//     //         }
//     //         if(curr.next){
//     //             curr.next = curr.next.next
//     //         }
//     //        if(curr.next){
//     //         curr.next.prev = curr
//     //        }
        
//     // }

//     // removeFrom(index){
//     //     if(index<0 || index>this.size-1){
//     //         return
//     //     }
//     //     if(index === 0){
//     //         // this.head = this.head.next
//     //         // if(this.head){
//     //         //     this.head.prev = null
//     //         // }
//     //         this.removeFirst()
//     //     }
//     //     else{
//     //         let curr = this.head
//     //         for(let i=0; i<index; i++){
//     //             curr = curr.next
//     //         }
//     //         curr.next = curr.next.next 
//     //         curr.next.prev = curr
//     //     }    
//     //     this.size--;
//     // }

//     reverse(){
//         let curr = this.head
//         let temp = null
//         while(curr){
//             temp = curr.prev
//             curr.prev = curr.next 
//             curr.next = temp

//             curr = curr.prev
//         }
//         if(temp){
//             this.tail = this.head
//             this.head = temp.prev
//         }
//     }

//     // reverse(){
//     //             let curr = this.head
//     //             let temp = null
//     //             while(curr){
//     //                 temp = curr.prev
//     //                 curr.prev = curr.next
//     //                 curr.next = temp
        
//     //                 curr = curr.prev

//     //             }
//     //             if(temp){
//     //                 this.tail = this.head
//     //                 this.head = temp.prev
//     //             }
//     //         }

//     getsize(){
//         return this.size
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr  = curr.next
//         }
//     }
// }
// const list = new DoubleLinked()
// list.prepend(10)
// list.prepend(20)
// list.append(40)
// list.print()
// console.log(list.getsize())
// list.insert(30,0)
// list.print()
// console.log("list after removing first:")
// list.removeFirst()
// list.removeLast()
// //list.removeFrom()
// list.print()
// console.log("list after reversing:")
// list.reverse()
// list.print()