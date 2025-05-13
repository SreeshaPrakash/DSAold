
//  function fibonacci(n){
  
//   let fib =[0,1]  
  
//   for(let i=2; i<n; i++){
    
//     fib[i] = fib[i-1] + fib[i-2]
    
//   }
//   return fib
// }
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(7))

// //Big-O = O(n)




// function factorial(n){
// let result = 1
// for(let i=2; i<n; i++){
//   result = result+i
// }
// return result;
// }
// console.log(factorial(3))
// console.log(factorial(5))
// console.log(factorial(10))

// //Big-O = O(n)



// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
// }
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(8))

// //Big-O = O( log n )
// //because n=n/2 , the value of n is reduced by half in each loop




// //same power of two question using bitwise method with Big-O = O(1)   as constant time complexity
// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     return (n & (n-1)) === 0
// }

// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(8))

//Big-O =  O(1)



// function recursiveFibonacci(n){
//     if(n<2){
//         return n
//     }
//     return recursiveFibonacci(n-1) +  recursiveFibonacci(n-2)
// }
// console.log(recursiveFibonacci(3))
// console.log(recursiveFibonacci(5))
// console.log(recursiveFibonacci(6))
//Big-O = O(n) linear search complexity





// //SEARCH ALGORITMs

// function linearSearch(arr, target){
//     for(i=0;i<arr.length; i++){
//         if(arr[i] == target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([2,4,3,5],5))
// console.log(linearSearch([2,4,3,5],10))
// console.log(linearSearch([2,4,3,5],2))

//Big-O = O(n) linear time complexity







//binary search

// function binarySearch(arr, target){
    
//     let leftindex = 0
//     let rightindex = arr.length-1

//     while(leftindex <= rightindex){
//         middleindex = Math.floor((leftindex + rightindex)/2)

//         if(  target === arr[middleindex] ){
//             return middleindex
//         }
    
//         if(target < arr[middleindex]){
//             rightindex = middleindex-1
//         }
//         else{
//             leftindex =middleindex+1
//         }

//     }
//     return -1
     
   
// }
// console.log(binarySearch([2,4,6,8,9],9))
// console.log(binarySearch([2,4,6,8,9],10))
// console.log(binarySearch([2,4,6,8,9],4))

//Big-O = O( logn )




// //recursive binary search

// function recursiveBinary(arr,target){
//     return search(arr,target,0,arr.length-1 )
// }

// function search(arr,target, leftindex, rightindex){
//     if(leftindex > rightindex){
//         return -1
//     }

//     let middleindex = Math.floor((leftindex + rightindex) /2)

//     if(target === arr[middleindex]){
//         return middleindex
//     }
//     if(target < arr[middleindex]){
//         return search(arr,target, leftindex, middleindex-1)
//     }
//     else{
//         return search(arr, target, middleindex+1 , rightindex)
//     }
// }
// console.log(recursiveBinary([-5,2,4,6,10],10))
// console.log(recursiveBinary([-5,2,4,6,10],6))
// console.log(recursiveBinary([-5,2,4,6,10],20))



//linked list

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size==0
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.size++
//         }
//     }
// }

// const list = new LinkedList()
// list.append(10)







//linked list

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isempty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }
// }

// const list = new linkedList()
// console.log("is linked list empty? :", list.isempty())
// console.log("size: " , list.getSize())



// class Node{
//     constructor(value) {
//         this.value = value
//         this.next= null
        
//     }
// }


// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isempty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }


//     //prepend linked list



//    prepend(value){
//     const node = new Node(value)
//     if(this.isempty()){
//         this.head = node
//     }
//     else{

//         node.next = this.head 
//         this.head = node
//     }
//     this.size++
//    }


//    print(){
//     if(this.isempty()){
//         console.log(`list is empty`)
//     }
//     else{
//         let curr = this.head
//         let listvalues = ""
//         while(curr){
//             listvalues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listvalues)
//     }
//    }



// }
// let list = new linkedList()
// console.log("linked list is empty? : ", list.isempty())
// console.log("size:", list.getSize())


// list.print()
// list.prepend(20)
// list.print()

// list.prepend(40)
// list.prepend(50)
// list.print()
// console.log("size:", list.getSize())




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


//     isempty(){
//         return this.size == 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }

//         this.size++
//     }


//     print(){
//         if(this.isempty()){
//             console.log("list is empty")
//         }
//         else{
//             let curr = this.head
//             let listvalues = ""
//             while(curr){
//                 listvalues += `${curr.value } `
//                 curr = curr.next
//             }
//             console.log(listvalues)
//         }
        
//     }
    
// }

// const list = new linkedList()
// console.log("size:",list.getSize())
// list.print()
// list.prepend(20)
// list .prepend(30)
// list.print()
// list.prepend(40)
// list.prepend(50)
// list.print()


// function reverse(str){
//     if(str.length == 0){
//         return ""
//     }
//     return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("hello"))



// function sum(str){
//     if(str.length == 0){
//         return 0
//     }
//     return str[0]+ sum(str.slice(1))
// }
// console.log(sum([5,6,7]))





//function reverse(str){
    //     if(str.length==0){
    //         return ""
    //     }
    //     return reverse(str.slice(1)) + str[0]
    // }
    // console.log(reverse("hello"))
    
    

























    

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

// // insert(value, index){
// //      if(index <0 || index > this.size){
// //         return 
// //      }
// //      if(index === 0){
// //         this.prepend(value)
// //      }
// //      else{
// //        const node = new Node(value)
// //        let prev = this.head
// //        for(let i=0; i<index-1; i++){
// //         prev = prev.next
// //        }
// //        node.next = prev.next
// //        prev.next = node
// //        this.size++
// //      }
// // }

// insert(value, index){

//     if(index<0 || index > this.size){
//         return
//     }
//     if(index === 0){
//         this.prepend(value)
//     }
//     else{
//         const node = new Node(value)
//         let prev = this.head
//         for(let i=0; i<index-1; i++){
//                 prev = prev.next
//         }

//         node.next = prev.next
//         prev.next = node
//         this.size++
//     }

// }

// remove(index){
//     if(index<0 || index>=this.size){
//         return null
//     }
//     let removeNode
//     if(index === 0){
//         removeNode = this.head
//         this.head = this.head.next
//     }
//     else{
//      let prev = this.head
//      for(let i=0; i<index-1; i++){
//         prev = prev.next
//     }
//    removeNode = prev.next
//    prev.next = removeNode.next
        
//     }
//     this.size--
//     return removeNode.next
// }

   
//     print(){
//         let curr = this.head
//         let listValues = ""
//         while(curr){
//             listValues +=`${curr.value} `
//             //console.log(curr.value)
//             curr = curr.next
//         }
//         console.log(listValues)
//     }
// }
// const list = new linkedList()
// // list.print()
// // list.prepend(10)
// // list.prepend(20)
// // //list.append(30)
// // list.prepend(40)
// // //list.append(50)
// // //list.print()
// // //list.getSize()
// // list.insert(100,2)
// // list.print()

// list.prepend(50)
// list.prepend(100)
// list.insert(10,0)
// list.print()
// list.insert(20,0)
// list.print()
// // list.insert(30,1)
// // remove(11,0)
// // list.print()
// // console.log(list.getSize())
// // console.log(list.remove(11))
// // console.log(list.remove(4))
// // list.print()

// list.insert(10,0)
// // list.print()
// console.log(list.remove())
// list.print()



console.log("super sreesha")