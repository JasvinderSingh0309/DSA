// Merge Sort.
function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let leftArr = arr.slice(0,mid);
  let rightArr = arr.slice(mid);
  let result = merge(mergeSort(leftArr),mergeSort(rightArr));
  return result;
}
function merge(arr1,arr2) {
  let temp = [];
  while(arr1.length && arr2.length) {
    if(arr1[0] < arr2[0]) {
      temp.push(arr1.shift());
    }
    else{
      temp.push(arr2.shift());
    }
  }
  return [...temp, ...arr2 , ...arr1];
}

let arr = [];
console.log(mergeSort(arr));
// O(nlogn), as while loop therefore n and length of array is halfed in recursion so logn ,therefore nlogn