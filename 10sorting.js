// Quick sort.
function quickSort(arr) {
  if(arr.length < 2){
    return arr;
  }
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for(let i=1;i<arr.length;i++) {
    if(arr[i]<pivot){
      leftArr.push(arr[i]);
    }else{
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr),pivot,...quickSort(rightArr)];
}
let array = [41,31,23,34,0,-3];
console.log(quickSort(array));
// Worst case complexity = O(n^2).


// Do by Kunal Approach from YT,