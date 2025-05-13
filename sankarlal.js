// //sum of array values using recursion
// // function recursiveSum(arr,index = arr.length-1){
// //     if(index<0){
// //         return 0
// //     }
// //     return arr[index] + recursiveSum(arr,index-1)
// // }
// // const num = [1,2,3]
// // console.log(recursiveSum(num))


// //reverse each word
// function reverse(str){
//     let res = []
//      let term = str.split(" ")
//      console.log(term)
//      for(let val of term){
//          for(let i=val.length-1; i>=0;i--){
//              res +=val[i] 
//          }
//          res +=" "
//      }
//      return res 
// }
// console.log(reverse("HELLO WORLD"))


// //count of vowels in string
// function vowelCount(str){
//     let count = 0
//     let vowels = "aeiouAEIOU"
    
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++
//         }
//     }
//     return count 
// }
// console.log(vowelCount("HellO"))


//  //frequency of occurence of each element in an Array
// function frequency(arr){
//     let count = {}
//     for(let i=0;i<arr.length; i++){
//         if(count[arr[i]]){
//             count[arr[i]]++
//         }
//         else{
//             count[arr[i]] = 1
//         }
//     }
//     return count
// }
// let arr = [3,45,6,43,5,6,4,3,2]
// console.log(frequency(arr))


// //function to remove not from SPECIFIC index
// function removeNode(index){
//     if(index<0 || index>this.size){
//         return
//     }
//     if(index === 0){
//         this.head = this.head.next
//         this.head.prev = null
//     }
// }




//delete from index in linked list
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size =0
    }
    prepend(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            return
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
        this.size++

    }

    insert(value,index){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            return
        }
        if(index === 0){
            node.next = this.head
            this.head = node

        }
        else{
            let curr = this.head
            for(let i=0; i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node

        }
    }



    removelast(){
        if(!this.head){
            this.head = null
        }
    }

     
//     search(value){
//         let curr = this.head
//         while(curr){
//             if(curr.value === value){
//             return true
//         }
//         curr = curr.next
//         }
//         return false
//     }
    
//     duplicate(){
//         const newList = new LinkedList()
//         let curr= this.head
//         while(curr){
//             newList.append(curr.value)
//             curr = curr.next
//         }
//         return newList
//     }
    

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



//     remove(index){
//         if(!this.head){
//             this.head = null
//             return
//         }
//         let removeNode
//         if(index === 0){
//             removeNode = this.head
//             this.head =  this.head.next 
//         }
//         else{
//             let prev = this.head
    //         for(let i=0;i<index-1; i++){
    //             prev= prev.next
    //         }
    //         removeNode = prev.next
    //         prev.next = removeNode.next
    //     }

    // }

    // removeMiddle(){
    //     if(!this.head){
    //         this.head = null
    //         return
    //     }
    //     else{
    //         let fast = this.head
    //         let slow = this.head
    //         let prev = null

    //         while(fast && fast.next){
    //             fast = fast.next.next
    //             prev = slow
    //             slow = slow.next
    //         }
    //         prev.next = slow.next
    //     }

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
list.prepend(30)
list.prepend(60)
list.prepend(90)
list.append(120)
list.insert(100,2)
list.print()

// console.log(list.search(90))

// const duplicateList = list.duplicate()
// console.log("duplicate list: ")
// duplicateList.print()

// console.log("reversed list:")
// list.reverse()
// list.print()


// list.removeMiddle()
// list.remove(2)
// list.print()


