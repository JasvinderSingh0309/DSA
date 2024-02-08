// Linear Search.
function linearSearch(a,t) {
  if(a.length === 0){
    return -1;
  }
  for(let i=0;i<a.length;i++) {
    if(a[i] === t)
      return i;
  }
  return -1;
}
// console.log( linearSearch([-5,2,10,4,6],4));
// O(n).


// Binary Search.
function binarySearch(a,t) {
  if(a.length === 0){
    return -1;
  }
  a.sort( (x,y) => x-y );
  let left = 0;
  let right = a.length-1;
  let mid;
  while(left <= right) {
    mid = Math.floor((left+right)/2);
    if(a[mid] === t)
      return mid;
    if(a[mid]<t){
      left = mid + 1;
    }else{
      right = mid - 1;
    }  
  }
  return -1;
}
console.log( binarySearch([-5,2,10,4,6],4) );
// O(logn) , as size gets half every loop, but its incorrect as sort built in function(line 21) is of O(nlogn) complexity 
// therefore the binarySearch() has O(nlogn) time complexity.
