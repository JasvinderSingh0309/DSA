// Bubble sort.
// 1.
function bubbleSort(n) {
  let count=false;
  while(!count) {
    for(let i=1;i<n.length;i++) {
      if(n[i-1] > n[i]){
        [n[i-1],n[i]] = [n[i],n[i-1]];
        count = true;
      }
    }
    if(!count){
      return n;
    }
    count=false;
  }
}
let arr = [43,18,73,4,21,17];
bubbleSort(arr);
console.log(arr); // sorted array because "array are passed by reference" to the function.
// O(n^2).

// 2.
function bubSort(n) {
  let swap;
  do {
    swap = false;
    for(let i=1;i<n.length;i++) {
      if(n[i-1]>n[i]) { // ' < ' for descending order.
        [n[i-1],n[i]] = [n[i],n[i-1]];
        swap=true;
      }
    }
  }while(swap);
  // no need to return, as arrays are passed by reference.
}
let arr1 = [113,23,49,53,12,6];
bubSort(arr1);
console.log(arr1);
// O(n^2).