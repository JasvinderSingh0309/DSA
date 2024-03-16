class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  display() {
    if(this.size === 0) {
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
  push(v) {
    let node = new Node(v);
    if(this.size === 0) {
      this.head = node;
      this.tail = node;
      ++this.size;
    }else{
      this.tail.next = node;
      this.tail = node;
      ++this.size; 
    }
  } // O(1).
  pop() {
    var value = this.tail.value;
    if(this.size === 0) {
      return "list is Empty!!";
    } else if(this.size === 1) {
      this.head = this.tail = null;
    } else {
      let temp = this.head;
      for(let i=2;i<this.size;i++) {
        temp = temp.next;
      }
      temp.next = null;
      this.tail = temp;
    }
    --this.size;
    return value;
  } // O(n).
}
const stack = new Stack();
stack.push(3);
stack.push(11);
stack.push(6);
stack.push(0);
console.log(stack.display());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.display());

// to make both push() and pop() of O(1) time complexity, we can make push() as prepend() , and pop() as deleteFromFront().