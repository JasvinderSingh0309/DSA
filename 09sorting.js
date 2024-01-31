// Insertion sort.
function insertionSort(n) {
  let currentEle;
  for(let i=1;i<n.length;i++) {
    currentEle = n[i];
    let j = i-1;
    while( j>=0 ) {
      if(n[j]>currentEle) {
        n[j+1] = n[j];
        --j;
      }else{
        break;
      }
    }
    n[j+1] = currentEle;
  }
  // no need to return, as array are PbR.
}
let arr = [81,20,-2,24,-6];
insertionSort(arr);
console.log(arr);
// O(n^2).