// All operations i.e append(), prepend(), deleteFromFront() and deleteFromEnd() are of constant time complexity.
class Node{
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}
class DLL{
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
  append(v) {
    let node = new Node(v);
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    ++this.size;
  }
  prepend(v) {
    let node = new Node(v);
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    ++this.size;
  }
  deleteFromFront() {
    if(this.isEmpty()) {
      console.log("List is Empty!!");
    }else if(this.size === 1) {
      this.head = null;
      this.tail = null;
      --this.size;
    }else{
      this.head = this.head.next;
      this.head.prev = null;
      --this.size;
    }
  }
  deleteFromEnd() {
    if(this.isEmpty()) {
      console.log("List is Empty!!");
    }else if(this.size === 1) {
      this.deleteFromFront;
    }else{
      this.tail = this.tail.prev;
      this.tail.next = null;
      --this.size;
    }
  }
  display(){
    if(this.isEmpty()) {
      return "List is Empty!!";
    }
    let temp = this.head;
    let str = "";
    while(temp) {
      str += `${temp.value} `;
      temp = temp.next;
    }
    return str;
  }
}
let dll = new DLL();
dll.append(10);
dll.append(20);
dll.append(30);
dll.prepend(50);
dll.prepend(60);
console.log(dll.getSize());
console.log(dll.display());
dll.deleteFromEnd();
dll.deleteFromFront();
dll.deleteFromFront();
dll.deleteFromFront();
dll.deleteFromFront();
console.log(dll.getSize());
console.log(dll.display());