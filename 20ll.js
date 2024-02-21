// Linked list with a tail pointer, always pointing at the last node.
// This makes appending, of O(1) time complexity.
class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LL{
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  display() {
    if(this.isEmpty()) {
      return "List is Empty!!";
    }
    let temp = this.head;
    let str = ""
    while(temp) {
      str += `${temp.value} `;
      temp = temp.next;
    }
    return str;
  }
  append(v) {
    let node = new Node(v);
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    ++this.size;
  } // O(1) time complexity.
  prepend(v) {
    let node = new Node(v);
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    ++this.size;
  }
  deleteFromEnd() {
    if(this.size === 1) {
      this.deleteFromFront();
    } else {
      let temp = this.head;
      for(let i=2;i<this.size;i++) {
        temp = temp.next;
      }
      temp.next = null;
      this.tail = temp;
      --this.size;
    }
  }
  deleteFromFront() {
    if(this.size === 1) {
      this.head = null;
      this.tail = null;
      --this.size;
    } else {
      this.head = this.head.next;
      --this.size;
    }
  }
}
module.exports = LL;

// const list = new LL();
// list.prepend(10);
// list.prepend(30);
// list.append(40);
// list.append(70);
// console.log(list.display());
// list.deleteFromFront();
// list.deleteFromFront();
// list.deleteFromFront();
// list.deleteFromFront();
// list.append(11);
// list.append(22);
// list.append(33);
// console.log(list.display());
// list.deleteFromEnd();
// list.deleteFromFront();
// console.log(list.display());