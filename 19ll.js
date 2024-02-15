class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LL{
  constructor(){
    this.head = null;
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
    } else {
      let temp = this.head;
      while(temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
    ++this.size;
  }
  displayList() {
    if(this.isEmpty()) {
      return "List is Empty!!";
    }else{
      let temp = this.head;
      let str = "";
      while(temp) {
        str += `${temp.value} `;
        temp = temp.next;
      }
      return str;
    }
  }
  deleteFromEnd() {
    if(this.isEmpty()) {
      return "List is Empty!!";
    }else if(this.size === 1){
      this.head = null;
      --this.size;
    }else{
      let temp = this.head;
      for(let i=2;i<this.size;i++) {
        temp = temp.next;
      }
      temp.next = null;
      --this.size;
    }
  }
  deleteFromFront() {
    if(this.isEmpty()) {
      return "List is Empty!!";
    }else if(this.size === 1){
      this.head = null;
      --this.size;
    }else{
      this.head = this.head.next;
      --this.size;
    }
  }
  deleteFromIndex(index) {
    if(this.isEmpty() || index < 0 || index > this.size) {
      console.log("Index is out of bound!!");
    }else if(index === 1){
      this.deleteFromFront();
    }else if(index === this.size){
      this.deleteFromEnd();
    }else {
      let temp = this.head;
      for(let i=2;i<index;i++) {
        temp = temp.next;
      }
      temp.next = temp.next.next;
      --this.size;
    }
  }
  reverseList() {
    // let tempHead = this.head.next;
    // this.head.next = null;
    // while(tempHead) {
    //   let node = new Node(tempHead.value);
    //   node.next = this.head;
    //   this.head = node;
    //   tempHead = tempHead.next;
    // }

    let prev = null;
    let curr = this.head;
    while(this.head.next !== null) {
      this.head = curr.next;
      curr.next = prev;
      prev = curr;
      curr = this.head;
    }
    this.head.next = prev;
  } // First you should check whether the list is empty or not.
}

const list = new LL();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
console.log(list.displayList());
console.log(list.getSize());
list.reverseList();
console.log(list.displayList());
// list.append(60);
// list.reverseList();
// console.log(list.displayList());