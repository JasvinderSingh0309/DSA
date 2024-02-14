class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL{
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) { /* add in start of LL */
    let node = new Node(value);
    if(this.size === 0){
      this.head = node;
    }
    ++this.size;

    if(this.size > 1) {
      node.next = this.head;
      this.head = node;
    }
  } // has complexity of O(1).

  append(value) { /* add at end of LL */
    let node = new Node(value);
    if(this.size === 0){
      this.head = node;
    }
    ++this.size;

    if(this.size > 1) {
      let temp = this.head;
      while(temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  } // has complexity of O(n), we can take another property that always points to the end of the list so that appending can have a constant time complexity.

  insert(value,placeToInsert) {
    if(placeToInsert<0 || placeToInsert>this.size){
      return "Invalid Insert Value!!";
    }
    if(placeToInsert === 0){
      this.prepend(value);
    }else{
      let node = new Node(value);
      let temp = this.head;
      for(let i=0;i<placeToInsert-1;i++) {
        temp = temp.next;
      }
      node.next = temp.next;
      temp.next = node;
      ++this.size;
    }
  } // O(n), when inserting at the end.

  displayList(){
    if(this.size === 0) {
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

const list = new LL();
console.log(list.displayList());
list.append(11);
list.append(13);
list.append(21);
console.log(list.displayList());
list.prepend(100);
list.prepend(111);
console.log(list.displayList());
list.append(19);
console.log(list.getSize());
console.log(list.displayList());
list.insert(43,4);
console.log(list.displayList());
console.log(list.getSize());