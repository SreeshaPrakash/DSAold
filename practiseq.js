// //1.third largest in an array
// function thirdlarge(arr){
//     let lg= -Infinity
//     let lg2 = -Infinity
//     let lg3 = -Infinity

//     for(let i=0; i<arr.length; i++){
//         let val = arr[i]
//         if(val > lg){
//             lg3= lg2
//             lg2 = lg
//             lg = val
//         }
//         else if(val >lg2 && val !==lg){
//             lg3 = lg2
//             lg2 = val
//         }
//         else if(val> lg3  && val!==lg && val!==lg2){

//             lg3 = val

//         }
//     }
//     return lg3
// }
// console.log(thirdlarge([3,7,9,2,6]))

// //3. binaryserach
// function binarySearch(arr, target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1

//     while(leftIndex < rightIndex){
//         let midIndex = Math.floor((leftIndex + rightIndex)/2)

//         if(target == arr[midIndex]){
//             return midIndex
//         }

//         if(target < arr[midIndex]){
//             rightIndex = midIndex -1
//         }
//         else{
//             leftIndex = midIndex+1
//         }

//     }
//     return -1
// }
// console.log(binarySearch([3,5,7,4],7))

// //binary recursive search
// function binaryRecursive(arr,target){
//     return search(arr, target,0,arr.length-1 )
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex> rightIndex){
//         return -1
//     }
//     let midIndex = Math.floor((leftIndex +rightIndex)/2)

//     if(target == arr[midIndex]){
//         return midIndex
//     }
//     if(target < arr[midIndex]){
//         return (search(arr,target,leftIndex, midIndex-1))
//     }
//     else{
//         return(search(arr,target,midIndex+1, rightIndex))
//     }

// }
// console.log(binaryRecursive([2,34,45,64,78,89,90],64))

//4.number of Zeros in an arrAY

// function countZero(arr){
//     let target = 0
//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === target){
//             count++
//         }
//     }
//     return count
// }
// console.log(countZero([2,0,8,0,3,0,9]))

// //5.reverse an array and the elements of the array
// function revarray(arr){
//     console.log(arr)
//     let start = 0
//     let end = arr.length-1
//     while(start< end){
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp
//         start++
//         end--
//     }
//     return arr
// }

// console.log(revarray([2,6,9,4,7]))


// //reverse string using recursion
// function revstring(str){
//     if (str.length === 0){
//         return ""
//     }
//    return revstring(str.slice(1)) +str[0]
// }
// console.log(revstring("hello"))


// //6.delete a node from a  linked list
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

//     getSize(){
//         return this.size
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             return null
//         }

//         if(index === 0){
//             const node = new Node(value)
//             node.next = this.head
//             this.head = node

//         }
//         else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0; i<index-1; i++){
//                 prev = prev.next
//             }
//             prev.next = node

//         }
//         this.size++
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }

//     removeNode(index){
// if(index<0 || index>this.size){
//     return null
// }
// let removeNode
// if(index === 0){
//    removeNode = this.head
//    this.head = this.head.next
// }
// else{
//     let prev = this.head
//     for(let i=0; i<index-1;i++){
//         prev = prev.next
//     }
//     removeNode = prev.next
//     prev.next = removeNode.next

//     }

//     this.size --
//     return removeNode.value
// }

// remove(index) {
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

// }
// const list = new LinkedList()
// list.insert(10,0)
// list.insert(23,1)
// list.insert(30,2)
// list.print()
// //list.reverse()
// //list.print()



// //insert in double linked list
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class DoubleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null
//   }
// insert(value) {
//         const node = new Node(value)

//         if(!this.head){
//             this.head = node
//             this.tail = node
//         } else {
          
//           this.tail.next = node
//           node.prev = this.tail
//           this.tail = node
//         }
        
//       }

//   print() {
//     let curr = this.head;
//     while (curr) {
//       console.log(curr.value);
//       curr = curr.next;
//     }
//   }
// }
// const list = new DoubleLinkedList();
// list.insert(20);
// list.insert(30);
// list.insert(40)
// list.insert(90)
// list.print();


// //convert array to linkedlist

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

   
//     fromarray(arr){
//         if(arr.length === 0){
//             return
//         }
//         this.head = new Node(arr[0])
//         let curr =  this.head
//         for(let i=1; i<arr.length; i++){
//             curr.next = new Node(arr[i])
//             curr = curr.next
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
// const list  = new LinkedList()
// list.fromarray([2,40,6,8])
// list.print()



class Node{
   constructor(value){
    this.value = value
    this.next = null
   }
}
class LinkedList{
    constructor(){
        this.head = null
    }

    // fromarray(arr){
    //     if(arr.length === 0){
    //         return
    //     }
    //     this.head = new Node(arr[0])
    //     let  curr = this.head

    //     for(let i=1; i<arr.length; i++){
    //         curr.next = new Node(arr[i])
    //         curr = curr.next
    //     }

    // }



    fromarray(arr){
        if(arr.length === 0){
            return 
        }

        this.head = new Node(arr[0])
        let curr = this.head

        for(let i=1; i<arr.length; i++){
            curr.next = new Node(arr[i])
            curr = curr.next
        }
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr =curr.next
        }
    }
    
}
const list = new LinkedList()
list.fromarray([3,5,7,9,5,20])
list.print()