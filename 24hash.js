let arr = [];
arr[5] = 100;
console.log(arr.length);
console.log(arr);
console.log(arr[3]);

//---------------------------------------------------------------

let hashArr = [];
function hashSearch(array, v) {
  array.forEach( e => {
    hashArr[e] = e;
  });
  return hashArr[v]? "Is Present!!" : "Not Present!!";
}
console.log(hashSearch( [5,10,11,3,54,21] , 13 ));
console.log(hashArr.length);
// it is searching at O(1) time, but very bad space complexity.