// key-value pair hashing.
class Hash{
  constructor(size) {
    this.table = new Array(size).fill(null);
  }
  hash(key) {
    let index = 0;
    for(let i=0;i<key.length;i++) {
      index += key.charCodeAt(i);
    }
    return index % this.table.length;
  }
  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    return this.table[this.hash(key)];
  }
  delete(key) {
    let index = this.hash(key);
    this.table[index] = null;
  }
}

let hash = new Hash(5);
hash.set("Jas",23);
hash.set("Har",34);
hash.set("Wal",26);
console.log(hash.table);
console.log(hash.get('Jas'));
hash.delete("Wal");
console.log(hash.table);
console.log(hash.get('Wal'));

// console.log(hash.get('Hal'));
// first problem in it is collision, 2nd is the "Hal" is not present still gets the value.