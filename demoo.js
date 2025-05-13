// //Third largest in an array
// function thirdlarge(arr){
//     let lg = -Infinity
//     let lg2 = -Infinity
//     let lg3 = -Infinity

//     for(let i=0; i<arr.length; i++){
//         let val = arr[i]


//         if(val > lg){
//             lg3 = lg2
//             lg2 = lg
//             lg = val
//         }
//         else if(val >lg2 && val !==lg){
//             lg3 = lg2
//             lg2 = val
//         }
//         else if(val >  lg3 && val!==lg && val!==lg2){
//             lg3 = val
//         }

//     }
//     return lg3
// }
// console.log(thirdlarge([3,8,90,4,6]))


//remove middle element of linkedlist

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



    append(value){
const node = new Node(value)
        if(!this.head){
            this.head = node
        }
        else{

        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
    }
    this.size++
     }


    insert(value, index){
      const node = new Node(value)

      if(index === 0){
        node.next = this.head 
        this.head = node
        return
      }
 
        let prev = this.head
        for(let i=0; i<index-1; i++){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++

   }

//remove middle node 
// removeMiddle(){
//     if(!this.head && !this.head.next){
//         this.head = null
//         return
//     }

//     let fast = this.head
//     let slow = this.head
//     let prev = null

//     while(fast && fast.next){
//         fast = fast.next.next
//         prev = slow
//         slow = slow.next
//     }

//     prev.next = slow.next
// }


removefrom(index){
    if(!this.head){
        this.head = null
        return
    }

    let removeNode
    if(index === 0){
       removeNode = this.head
       this.head = this.head.next
    }
else{
    
    let prev = this.head
    for(let i=0; i<index-1; i++){
        prev = prev.next
        
    }
    removeNode = prev.next
    prev.next = removeNode.next

}
return removeNode
}




// search(value){
//     if(!this.head){
//         return null
//     }
//     let curr = this.head
//     let i=0
//     while(curr){
//         if(curr.value === value){
//             return `index of ${value} is ${i}`
//         }
//         curr= curr.next
//         i++

//     }
//     return false

// }


//   search(value) {
//     if (this.size === 0) {
//       return -1;
//     }
//     let i = 0;
//     let curr = this.head;
//     while (curr) {
//       if (curr.value === value) {
//         return `the index of ${value} is ${i}`;
//       }
//       curr = curr.next;
//       i++;
//     }
//     return -1;
//   }



// removemiddle(){
//     if(!this.head){
//         return null
//     }else{

//         let fast = this.head
//         let slow = this.head
//         let prev = null
//         while(fast && fast.next){
//             fast = fast.next.next
//             prev= slow
//             slow = slow.next
//         }
//         prev.next  = slow.next
//     }
// }




// reverse(){
//     let curr = this.head
//     let prev = null
//     while(curr){
//         let nextNode = curr.next
//         curr.next = prev
//         prev = curr
//         curr = nextNode
        
//     }
//     this.head = prev
// }





    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next

        }
    }
}
 const list = new LinkedList()
 list.prepend(20)
 list.prepend(90)
 list.prepend(100)
// list. print()
 //list.removemiddle()

 list.print()
console.log( list.search(20))
 
//  list.reverse()
//  list.print()
// list.removefrom(1)
// list.print()
// // list.insert(60,1)
// // list.print()
// // // list.append(100)
// // //list.print()
// // list.removeMiddle()
// // list.print()





//binary recursive search
// function binaryRecursive(arr,target){
//     return search(arr,target, 0, arr.length-1)
// }


// function search(arr,target,leftIndex,rightIndex){
    
//     if(leftIndex > rightIndex){
//         return -1
//     }

//       let  midIndex = Math.floor((leftIndex + rightIndex)/2)
    

//     if(target === arr[midIndex]){
//         return midIndex
//     }

//     else if(target < arr[midIndex]){
//         return search(arr,target, leftIndex, midIndex-1)
//     }
//     else{
//         return search(arr,target, midIndex+1,rightIndex)
//     }

// }

// console.log(binaryRecursive([2,6,7,89,90],90))




//double linked list

// class Node{
//  constructor(value){
//     this.value = value
//     this.next = null
//     this.prev = null
//  }
// }

// class doubleLinked{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }

//     insert(value){

//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         }
//         else{

//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }
// }

// const list = new doubleLinked()
// list.insert(20)
// list.insert(30)
// list.insert(40)

// list.print()



