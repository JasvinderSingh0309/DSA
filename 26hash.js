// resolve collision in 25hash, using LL
class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LL{
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    let node = new Node(value);
    if(this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    ++this.size;
  }
}
class Hash{
  constructor(size) {
    this.table = new Array(size).fill(null);
  }
  hash(key) {
    let hashKey = key % 10;
    return hashKey;
  }
  set(value) {
    let index = this.hash(value);

    if(!this.table[index]) {
      let indexList = new LL();
      indexList.append(value);
      this.table[index] = indexList; 
    } else {
      // console.log(this.table[index]);
      this.table[index].append(value);
    }
  }
  search(value) {
    let index = this.hash(value);
    if(!this.table[index]) {
      return "Value is not Present!!";
    }
    let temp = this.table[index].head;
    while(temp) {
      if(temp.value === value) {
        return "Value is Present!!";
      }
      temp = temp.next;
    }
    return "Value is not Present!!";
  }
}
const hash = new Hash(10);
hash.set(5);
hash.set(11);
hash.set(44);
hash.set(59);
hash.set(107);
hash.set(56);
hash.set(40);
hash.set(12);
hash.set(61);
console.log(hash.search(107));