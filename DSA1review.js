// // class Node{
// //     constructor(value){
// //         this.value = value
// //     this.next = null
// //     }
// // }
// // class LinkedList{
// //     constructor(){
// //         this.head = null
// //     }
// //     prepend(value){
// //         const node = new Node(value)
// //         node.next = this.head
// //     this.head = node
// //     }
   
// //   reverse(){
// //     if(!this.head){
// //         return 
// //     }
// //     let curr = this.head
// //     let prev = null
// //     while(curr){
// //         let nextnode = curr.next
// //         curr.next = prev 
// //         prev = curr
// //         curr = nextnode
// //     }
// //     this.head = prev
       
// //   }
   
// //   middle(){
// //       if(!this.head){
// //           return
// //       }
// //       let fast = this.head
// //       let slow = this.head
// //       while(fast && fast.next){
// //           fast = fast.next.next
// //           slow = slow.next
// //       }
// //       return slow
// //   }
   
// //     print(){
// //         let curr = this.head
// //         let listvalues = ""
// //         while(curr){
// //             listvalues += `${curr.value} `
// //             curr = curr.next
// //         }
// //         console.log(listvalues)
// //     }
// // }
// // const list = new LinkedList()
// // list.prepend(20)
// // list.prepend(30)
// // list.prepend(40)
// // list.prepend(50)
// // list.prepend(60)
// // list.print()
// // console.log("reversed list:")
// // list.reverse()
// // list.print()
// // console.log(list.middle())
















// // //arr = [5, 7, 7, 8, 8, 10], target = 8

// // function search(arr,target){
// //     let leftIndex = 0
// //     let rightIndex = arr.length-1
    
// //     while(leftIndex<rightIndex){
// //         let midIndex = Math.floor((leftIndex + rightIndex)/2)
        
// //         if(target === arr[midIndex]){
// //             return midIndex +1
// //         }
// //         if(target< arr[midIndex]){
// //             rightIndex = midIndex
// //         }
// //         else{
// //             leftIndex = midIndex+1
// //         }
// //     }
// // }
// // console.log(search([5, 7, 7, 8, 8, 10],8))




// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class doubleLinked{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }
//     prepend(value){
//         const node = new Node(value)
//         // if(!this.head){
//         //     this.head = this.tail = node
//         // }
//         node.next = this.head 
//         this.head = node
//          this.head.prev = node
        
//     }
    
//     removefirst(){
//         if(!this.head){
//             return 
//         }
//         this.head = this.head.next
//         this.head.prev = null
//     }
    
//     print(){
//         let curr = this.head
//         let listvalues = ""
//         while(curr){
//             listvalues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listvalues)
//     }
// }

// const list = new doubleLinked()
// list.prepend(12)
//  list.prepend(24)
//   list.prepend(30)
// list.print()

// list.removefirst()
// list.print()








// function reverse(str){
//     if(str.length === 0){
//         return " "
//     }
//     return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("hello"))







// arr = [1, 3, 5, 7, 9, 11];
// target = 7;


// function binarysearch(arr, target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex, rightIndex){
//     if(leftIndex >rightIndex){
//         return -1
//     }
//         let midIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(target === arr[midIndex]){
//             return midIndex
//         }
//         if(target < arr[midIndex]){
//             return search(arr,target,leftIndex, midIndex-1)
//         }
//         else{
//             return search(arr,target,midIndex+1,rightIndex)
//         }
    
 
// }


// console.log(binarysearch([1, 3, 5, 7, 9, 11],7))









