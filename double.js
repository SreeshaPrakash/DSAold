



























// //DOUBLE LINKED LIST
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoubleLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     prepend(value) {
//         const node = new Node(value);
//         if (!this.head) {
//             this.head = this.tail = node;
//         } else {
//             node.next = this.head;
//             this.head.prev = node;
//             this.head = node;
//         }
//         this.size++;
//     }

//     append(value) {
//         const node = new Node(value);
//         if (!this.tail) {
//             this.head = this.tail = node;
//         } else {
//             this.tail.next = node;
//             node.prev = this.tail;
//             this.tail = node;
//         }
//         this.size++;
//     }

//     insertAt(value, index) {
//         const node = new Node(value);
//         if (!this.head || index === 0) {
//             this.prepend(value);
//             return;
//         }
//         let curr = this.head;
//         for (let i = 0; i < index - 1 && curr.next; i++) {
//             curr = curr.next;
//         }
//         node.next = curr.next;
//         node.prev = curr;
//         if (curr.next) {
//             curr.next.prev = node;
//         } else {
//             this.tail = node;
//         }
//         curr.next = node;
//         this.size++;
//     }

//     findMiddle() {
//         if (!this.head) return null;
//         let fast = this.head;
//         let slow = this.head;
//         while (fast && fast.next) {
//             fast = fast.next.next;
//             slow = slow.next;
//         }
//         return slow;
//     }

//     addAtMiddle(value) {
//         const node = new Node(value);
//         if (!this.head) {
//             this.head = this.tail = node;
//             this.size++;
//             return;
//         }
//         let fast = this.head;
//         let slow = this.head;
//         while (fast && fast.next) {
//             fast = fast.next.next;
//             slow = slow.next;
//         }
//         node.prev = slow.prev;
//         node.next = slow;
//         if (slow.prev) {
//             slow.prev.next = node;
//         } else {
//             this.head = node;
//         }
//         slow.prev = node;
//         this.size++;
//     }

//     removeFromMiddle() {
//         if (!this.head || !this.head.next) {
//             this.head = this.tail = null;
//             this.size = 0;
//             return;
//         }
//         let fast = this.head;
//         let slow = this.head;
//         while (fast && fast.next) {
//             fast = fast.next.next;
//             slow = slow.next;
//         }
//         if (slow.prev) {
//             slow.prev.next = slow.next;
//         } else {
//             this.head = slow.next;
//         }
//         if (slow.next) {
//             slow.next.prev = slow.prev;
//         } else {
//             this.tail = slow.prev;
//         }
//         this.size--;
//     }

//     search(value) {
//         let curr = this.head;
//         while (curr) {
//             if (curr.value === value) return true;
//             curr = curr.next;
//         }
//         return false;
//     }

//     duplicate() {
//         const copy = new DoubleLinkedList();
//         let curr = this.head;
//         while (curr) {
//             copy.append(curr.value);
//             curr = curr.next;
//         }
//         return copy;
//     }

//     reverse() {
//         let curr = this.head;
//         let temp = null;
//         while (curr) {
//             temp = curr.prev;
//             curr.prev = curr.next;
//             curr.next = temp;
//             curr = curr.prev;
//         }
//         if (temp) {
//             this.head = temp.prev;
//         }
//     }

//     removeFirst() {
//         if (!this.head) return;
//         this.head = this.head.next;
//         if (this.head) {
//             this.head.prev = null;
//         } else {
//             this.tail = null;
//         }
//         this.size--;
//     }

//     removeLast() {
//         if (!this.tail) return;
//         this.tail = this.tail.prev;
//         if (this.tail) {
//             this.tail.next = null;
//         } else {
//             this.head = null;
//         }
//         this.size--;
//     }

//     removeFrom(index) {
//         if (index === 0) return this.removeFirst();
//         let curr = this.head;
//         for (let i = 0; i < index && curr; i++) {
//             curr = curr.next;
//         }
//         if (!curr) return;
//         if (curr.prev) curr.prev.next = curr.next;
//         if (curr.next) curr.next.prev = curr.prev;
//         if (curr === this.tail) this.tail = curr.prev;
//         this.size--;
//     }

//     print() {
//         let curr = this.head;
//         let values = '';
//         while (curr) {
//             values += `${curr.value} `;
//             curr = curr.next;
//         }
//         console.log(values.trim());
//     }
// }
