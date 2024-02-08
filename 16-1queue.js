// 1.
class Queue{
  constructor(){
    this.arr = [];
  }
  enqueue(e){
    this.arr.push(e);
  }
  dequeue() {
    if(this.arr.length === 0){
      return 'underflow';
    }
    return this.arr.shift();
  }
  size(){
    return this.arr.length;
  }
  display(){
    return this.arr.join(' ');
  }
}
let queue = new Queue();
queue.enqueue(43);
queue.enqueue(13);
queue.enqueue(24);
queue.enqueue(8);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.size());
// console.log(queue.display());
// every operation is of O(1) complexity, except dequeue as it uses shift().


// 2.
class Queue2{
  constructor(){
    this.item = {};
    this.front = -1;
    this.rear = -1;
  }
  enqueue(e){
    if(this.front === -1){
      this.item[++this.rear] = e;
      ++this.front;
    } else {
      this.item[++this.rear] = e;
    }
  }
  dequeue(){
    if(this.front === -1) {
      return "Queue is Empty!!";
    }
    else if(this.front === this.rear) {
      let value = this.item[this.front];
      delete this.item[this.front];
      this.front = this.rear = -1;
      return value;
    }
    else {
      let value = this.item[this.front];
      delete this.item[this.front++];
      return value;
    }
  }
  peek(){
    if(this.front === -1){
      return "Queue is Empty!!";
    }
    return this.item[this.front];
  }
  size(){
    if(this.front === -1){
      return "Queue is Empty!!";
    }
    return this.rear - this.front + 1;
  }
  display(){
    let str = "";
    for(let value of Object.values(this.item)) {
      str += `${value} `;
    }
    return (str !== "")? str : "Empty Queue!!";
  }
}
let q = new Queue2();
q.enqueue(17);
q.enqueue(43);
console.log(q.dequeue());
console.log(q.display());
console.log(q.size());
console.log(q.peek());
// but here every operation has O(1) complexity which is better.