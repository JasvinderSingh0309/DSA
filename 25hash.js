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
    this.table[index] = value;
  }
  get(value) {
    return this.table[this.hash(value)] === value? this.table[this.hash(value)] : "Not Present!!";
  }
  search(value) {
    let index = this.hash(value);
    if(this.table[index] === value && value !== undefined) {
      return "Value is Present!!";
    }
    return "Value is not Present!!";
  }
}
let hash = new Hash(10);
hash.set(12);
hash.set(33);
hash.set(68);
hash.set(1);
hash.set(105);
hash.set(99);
console.log(hash.table);
console.log(hash.search(18));