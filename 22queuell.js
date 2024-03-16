// enqueue() as append() and dequeue() as deleteFromFront().
// Both are of O(1) time complexity.

let List = require('./20ll.js');

class Queue{
  constructor() {
    this.list = new List();
  }
  enqueue(v) {
    this.list.append(v);
  }
  dequeue() {
    this.list.deleteFromFront();
  }
  peek() {
    if(this.list.size === 0) {
      return "Queue is Empty!!";
    }
    return this.list.head.value;
  }
  display() {
    return this.list.display();
  }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(11);
console.log(queue.display());
queue.dequeue();
queue.dequeue();
console.log(queue.display());
console.log(queue.peek());