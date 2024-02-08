class CircularQ{
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  enqueue(e) {
    if(!this.isFull()) {
      this.rear = ++this.rear%this.capacity;
      this.items[this.rear] = e;
      ++this.currentLength;
      if(this.front === -1) {
        ++this.front;
      }
    }else{
      return "Queue is Full!!";
    }
  }
  dequeue() {
    if(!this.isEmpty()) {
      let value = this.items[this.front];
      this.items[this.front] = null;
      this.front = ++this.front%this.capacity;
      --this.currentLength;
      if(this.isEmpty()) {
        this.rear = this.front = -1;
      }
      return value;
    }
    return "Queue is Empty!!";
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  peek() {
    if(!this.isEmpty()) {
      return this.items[this.front];
    }
    return "Queue is Empty!!";
  }
  display() {
    if(!this.isEmpty()) {
      let str = "";
      for(let i=this.front; i !== this.rear ;i = ++i%this.capacity) {
        str += `${this.items[i]} `;
      }
      return str + this.items[this.rear];
    }
    return "Queue is Empty!!";
  }
}
let cq = new CircularQ(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.dequeue();
cq.dequeue();
cq.enqueue(11);
cq.enqueue(43);
console.log(cq.display());