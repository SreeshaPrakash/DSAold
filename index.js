//  //  reverse string using recursion
// function reverse(str){
//     if(str.length === 0){
//         return ""
//     }

//     return reverse(str.slice(1))+ str[0]
// }
// console.log(reverse("hello"))

// function binarySearch(arr, target){

//     let leftIndex = 0
//     let rightIndex = arr.length-1
//     while(leftIndex <= rightIndex){
//         let midIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(target === arr[midIndex]){
//             return midIndex
//         }
//         if(target < arr[midIndex]){
//             rightIndex = midIndex - 1
//         }
//         else{
//             leftIndex = midIndex + 1
//         }
//     }
//     return -1
// }
// console.log(binarySearch([2,4,5,6,8,9],9))
// console.log(binarySearch([2,4,5,6,8,9],10))
// console.log(binarySearch([2,4,5,6,8,9],5))

// //jagged array
//  const jaggedArray = [  [2,3,4],[4,5],[9,3,2,7]]
//  console.log(jaggedArray[1][1])

// //recusrion in factorial function
// function recursiveFactorial(n){
//     if(n === 0){
//         return 1
//     }
//     return n*(recursiveFactorial(n-1))

// }
// console.log(recursiveFactorial(2))
// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(3))

// //recursion in fibonacci
// function recursiveFibonacci(n){
//     if(n<=1){
//         return n
//     }
//     return recursiveFibonacci(n-1)+ recursiveFibonacci(n-2)

// }
// console.log(recursiveFibonacci(2))
// console.log(recursiveFibonacci(3))
// console.log(recursiveFibonacci(6))
// console.log(recursiveFibonacci(1))

//HEAD RECURSION
// function headRecursion(n){
//     if(n === 0) return;
//     headRecursion(n-1)
//     console.log(n);

// }
// headRecursion(3)
// headRecursion(5)

// //TAIL RECURSION
// function tailRecursion(n){
//     if( n === 0) return
//     console.log(n)
//     tailRecursion(n-1)
// }
// tailRecursion(3)

// //DIRECT RECURSION
// function print(n){
//     if(n<=0) return
//     console.log("value:",n)
//     print(n-1)
// }
// print(5)

// // INDIRECT RECURSION
// function firstFunc(n){
//     if(n<=0) return
//     console.log("A:",n)
//     secondFunc(n-1)
// }
// function secondFunc(n){
//     if(n<=0) return
//     console.log("b:",n)
//     thirdFunc(n-1)
// }
// function thirdFunc(n){
//     if(n<=0) return
//     console.log("c:",n)
//     firstFunc(n-1)
// }

// firstFunc(4)

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//             this.size = 0
//     }

//     isEmpty(){
//         return (this.size === 0)
//     }

//     getSize(){
//         return (this.size)
//     }

//     addNode(value){
//        const node = new Node(value)
//        node.next = this.head
//        this.head = node

//        this.size++
// }

// printNode(){
//    if(this.isEmpty()){
//     console.log("the list is empty")
//    }
//    else{
//     let curr = this.head
//     let listValues = ""
//     while(curr){
//         listValues += `${curr.value} `
//         curr  = curr.next
//    }
//    console.log(listValues)
//  }
// }
// }

// const list = new LinkedList()
// console.log(list.isEmpty())
// console.log(list.getSize())
// list.printNode()
// list.addNode(30)
// list.printNode()
// list.addNode(10)
// list.printNode()

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     getSize(){
//         return (this.size)
//     }

//     prepend(value){
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++
//     }

// append(value){
//     const node = new Node(value)
//     if(!this.head){
//         this.head = node
//     }
//    else{
//     let prev = this.head
//     while(prev.next){
//         prev = prev.next
//     }
//     prev.next = node
//    }
//     this.size++
// }

//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }
//        else{
//         let curr = this.head
//         while(curr.next){
//             curr = curr.next
//         }
//         curr.next = node
//        }
//         this.size++
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }
// }
// const list = new linkedList()
// list.print()
// list.prepend(10)
// list.prepend(20)
// list.append(30)
// list.prepend(40)
// list.append(50)
// list.print()
// list.getSize()

// //binary search check if a target numeber exist in it or not

// function binarySearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1

//     while(leftIndex<=rightIndex){
//         let midIndex = Math.floor((leftIndex + rightIndex)/2)

//     if(arr[midIndex] === target){
//         return true
//     }

//     else if(target < arr[midIndex]){
//         rightIndex = midIndex-1
//     }
//     // else if(target >= arr[midIndex]){
//     //     return true
//     // }
//     else{
//         leftIndex = midIndex + 1
//     }
//     }
//     return false
// }
// console.log(binarySearch([2,5,6,7,8],5))
// console.log(binarySearch([2,5,6,7,8],52))

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     getsize(){
//         return this.size
//     }

//     prepend(value){
//        const node = new Node(value)
//        node.next = this.head
//        this.head = node
//        this.size++
//     }

//     append(value){
//     const node = new Node(value)
//     if(!this.head) {
//         this.head = node
//     }
//     else{
//         let curr = this.head
//         while(curr.next){
//             curr = curr.next
//         }
//         curr.next = node
//     }
//     this.size++
//     }

//     insert(value, index){
//         if(index<0 || index>this.size){
//             return
//         }
//         if(index === 0){
//             this.prepend(value)
//         }
//         else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0; i<index-1; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }

//     }

//     remove(index){
//         if(index<0 || index> this.size){
//             return null
//         }
//         let removeNode
//         if( index === 0){
//             removeNode = this.head
//             this.head = this.head.next
//         }
//         else{
//             let prev = this.head
//             for(let i=0; i<index-1; i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next
//             prev.next = removeNode.next
//         }
//         this.size--
//         return removeNode.value
//     }

//     print(){
//         let curr = this.head
//         let listValues = ""
//         while(curr){
//             //console.log(curr.value)
//             listValues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listValues)
//     }

// }
// const list = new LinkedList()
// list.prepend(50)
// list.prepend(10)
// list.append(30)
// list.insert(40,1)
// list.print()
// console.log(list.remove(30))
// list.print()
// console.log(list.remove(3))
// list.print()
// console.log(list.remove(1))
// list.print()
// console.log(list.getsize())

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return (this.size === 0)
//     }

//     getsize(){
//         return this.size
//     }

//     prepend(value){
//        const node = new Node(value)
//        node.next = this.head
//        this.head = node
//        this.size++
//     }

//     append(value){
//     const node = new Node(value)
//     if(!this.head) {
//         this.head = node
//     }
//     else{
//         let curr = this.head
//         while(curr.next){
//             curr = curr. next
//         }
//         curr.next = node
//     }
//     this.size++
//     }

//     insert(value, index){
//         if(index<0 || index>this.size){
//             return
//         }
//         if(index === 0){
//             this.prepend(value)
//         }
//         else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0; i<index-1; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }

//     }

//     removeFrom(index){
//         if(index<0 || index> this.size){
//             return null
//         }
//         let removeNode
//         if( index === 0){
//             removeNode = this.head
//             this.head = this.head.next
//         }
//         else{
//             let prev = this.head
//             for(let i=0; i<index-1; i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next
//             prev.next = removeNode.next
//         }
//         this.size--
//         return removeNode.value
//     }

//     removeValue(value){

//         if(this.size === 0){
//             return null
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             while(prev.next && prev.next.value !==value){
//              prev = prev.next
//             }
//             if(prev.next){
//                 let removeNode = prev.next
//                  prev.next = removeNode.next
//                  this.size--
//                  return value
//             }

//          return null
//         }
//     }

//     print(){
//         let curr = this.head
//         let listValues = ""
//         while(curr){
//             //console.log(curr.value)
//             listValues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listValues)
//     }

// }
// const list = new LinkedList()
// list.prepend(50)
// list.prepend(10)
// list.append(30)
// list.insert(40,1)
// list.print()
// console.log(list.removeFrom(2))
// list.print()
// // console.log(list.removeFrom(3))
// // list.print()
// // console.log(list.removeFrom(1))
// // list.print()
// console.log(list.removeValue(40))
// list.print()
// console.log(list.getsize())




















// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   getSize() {
//     return this.size;
//   }
//   //add node at the end
//   append(value) {
//     const node = new Node(value);
//     if (!this.head) {
//       this.head = node;
//     } else {
//       let curr = this.head;
//       while (curr.next) {
//         curr = curr.next;
//       }
//       curr.next = node;
//     }
//     this.size++;
//   }
//   //insert in specific index
//   insert(value, index) {
//     if (index < 0 || index > this.size) {
//       return;
//     }

//     if (index === 0) {
//       const node = new Node(value);
//       node.next = this.head;
//       this.head = node;
//       this.size++;
//     } else {
//       const node = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }

//   //remove from specific index
//   remove(index) {
//     if (index < 0 || index > this.size) {
//       return null;
//     }
//     let removeNode;
//     if (index === 0) {
//       removeNode = this.head;
//       this.head = this.head.next;
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       removeNode = prev.next;
//       prev.next = removeNode.next;
//     }
//     this.size--;
//     return `removed ${removeNode.value}`;
//   }

//   //remove specific value
//   removeValue(value) {
//     if (this.size === 0) {
//       return null;
//     }
//     if (this.head.value === value) {
//       this.head = this.head.next;
//       this.size--;
//       return value;
//     } else {
//       let prev = this.head;
//       while (prev.next && prev.next.value !== value) {
//         prev = prev.next;
//       }
//       if (prev.next) {
//         let removeNode = prev.next;
//         prev.next = removeNode.next;
//         this.size--;
//         return value;
//       }
//       return null;
//     }
//   }

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

//   // reverse() {
//   //   let current = this.head;
//   //   let prev = null;
//   //   while (current) {
//   //     const nextNode = current.next;
//   //     current.next = prev;
//   //     prev = current;
//   //     current = nextNode;
//   //   }
//   //   this.print(prev);
//   // }



//  reverse(){
//   let prev = null
//   let curr = this.head
//   while(curr){
//     let next = curr.next
//     curr.next = prev
//     prev = curr
//     curr = next
//   }
//   this.print(prev);
//   //this.head = prev
//  }



 
//   deleteEvenValues() {
//     let current = this.head;
//     let prev = null;
  
//     while (current && current.value % 2 === 0) {
//       this.head = current.next;
//       current = this.head;
//     }
  
//     while (current) {
//       if (current.value % 2 === 0) {
//         prev.next = current.next;
//       } else {
//         prev = current;
//       }
//       current = current.next;
//     }
//   }

//   //remove middlevalue of list
// removeMiddle(){
//  if(this.size === 0 || this.size === 1){
//   this.head = null
//   this.size = 0 
//   return 
//  }
//  let fast = this.head
//  let slow = this.head
//  let prev = null

//  while(fast && fast.next){
//   fast = fast.next.next
//   prev = slow
//   slow = slow.next
 
//  }

//    prev.next = slow.next
//    this.size--
// }
  




//   //print list
//   print(head = this.head) {
//     let curr = head;
//     let listValues = "";
//     while (curr) {
//       listValues += `${curr.value} `;
//       //console.log(curr.value)
//       curr = curr.next;
//     }
//     console.log(listValues);
//   }
// }

// const list = new LinkedList();
// list.append(101);
// list.append(400);
// list.insert(30, 2);
// // list.insert(83, 1);
// list.insert(90, 3);
// list.insert(10, 0);
// list.print();

// // list.removeMiddle()
// // list.print();

// list.reverse()
// list.print()
// // list.reverse()

// //list.deleteEvenValues();
// //list.print();

// //list.remove(0)
// // console.log(list.remove(0))
// // list.print()
// // console.log(list.remove(2))
// // console.log(list.remove(2))
// // list.print()
// // console.log(list.removeValue(30))
// // list.print()
// // console.log(list.search(90))

// //insert(value, index){
// //         if(index<0 || index>this.size){
// //             return
// //         }
// //         if(index === 0){
// //             this.prepend(value)
// //         }
// //         else{
// //             const node = new Node(value)
// //             let prev = this.head
// //             for(let i=0; i<index-1; i++){
// //                 prev = prev.next
// //             }
// //             node.next = prev.next
// //             prev.next = node
// //             this.size++
// //         }

// //     }





// let arr=[10,20,"hello","7",8,"kk"]
// // for(let i=0; i<arr.length; i++){
// //  for(let j=i+1; j<arr.length ;j++){
// //   let temp  = arr[i]
// //   arr[i] = arr[j]
// //   arr[j] = temp
// //  }

// // }
// for(let i=0;i<Math.floor(arr.length/2);i++){
//   [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]]
// }
// console.log(arr)






// function seclargest(arr){
//   let sm = Infinity 
//   let sm2 = Infinity
//   let sm3 = Infinity
//   for(let i=0; i<arr.length; i++){
//    let val = arr[i]
  
//    if(val <sm){
//     sm3= sm2
//     sm2 = sm
//     sm = val
//    }
//    else if ( val<sm2 && val!==sm){
//     sm3 =sm2
//     sm2 = val
//    }
//    else if(val<sm3 && val!==sm && val!==sm2){
//     sm3 = val
//    }
  
//   }
  
  // return sm3
  // }
  // console.log(seclargest([3,6,8,4,2]))



  // function arrayReverse(arr){
  //   console.log(arr)
  //   let start = 0
  //   let end = arr.length - 1

  //   while(start < end){

  //     let temp = arr[start]
  //     arr[start] = arr[end]
  //     arr[end] = temp

  //     start++
  //     end--

  //   }
  //   return arr
    
  // }
  // console.log(arrayReverse([2,7,9,5,3]))


// function unique(arr){

//   for(let i=0; i<arr.length;i++){
//     let isunique = true
//     for(let j=0; j<arr.length; j++){
//       if(i!==j && arr[i] ===arr[j]){
//         isunique = false
//         break
//       }
//     }
//     if(isunique){
//       console.log(arr[i])
//     }
//   }

// }

// unique([2,3,4,6,3,4,5])
