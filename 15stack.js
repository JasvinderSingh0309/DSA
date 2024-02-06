// let set = new Set( [1,2,3,4,5] ); &
// let map = new Map([ [key1,value1],[key2,value2] ]); 

// 1.
class Stack{
  constructor() {
    this.arr = [];
  }
  push(e) {
    this.arr.push(e);
  }
  pop(){
    if(this.arr.length === 0) {
      return 'underflow';
    }
    return this.arr.pop();
  }
  size(){
    return this.arr.length;
  }
  display(){
    return this.arr.join(' ');
  }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.pop();
console.log(stack.display());
// every operation is of O(1) complexity.


// 2.
class Stack2{
  constructor(){
    this.ele = {};
    this.count = -1;
  }
  push(e){
    this.ele[++(this.count)] = e;
  }
  pop(){
    if(this.count === -1) {
      return 'Empty stack!!';
    }
    let popValue = this.ele[this.count];
    delete this.ele[this.count--]; // this is vital (*)
    return popValue;
  }
  size(){
    if(this.count === -1) {
      return "Stack is empty!!";
    }
    // return this.count + 1;
    return Object.keys(this.ele).length;
  }
  display(){
    let str="";
    for(let key in this.ele) {
      str += `${this.ele[key]} `;
    }
    return str;
  }
}
let sta = new Stack2();
sta.push(12);
sta.push(7);
sta.push(43);
sta.push(33);
console.log(sta.size());
console.log(sta.ele);
console.log(sta.pop());
console.log(sta.size());
sta.pop();
sta.pop();
// every operation is of O(1) complexity.

// issues using objects for stack:-  array is more natural to be used , for-in in display will not guarantee the correct sequence of elements(can use for-of)