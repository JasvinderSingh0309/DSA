// Binary search using recursion.
// 1.
let arr = [1,32,41,39,37,43,17];
arr.sort( (a,b) => a-b );
function binaryByRecuring(t,left,right) {
  if(left<=right) { 
    mid = Math.floor((left+right)/2); // no type given for mid, so its 'var' type.
    if(arr[mid] === t) {
      return mid;
    }
    if(arr[mid] < t){
      return binaryByRecuring(t,mid+1,right);
    }else{
      return binaryByRecuring(t,left,mid-1);
    }
  } else {
    return -1;
  }
}
console.log( binaryByRecuring(17,0,arr.length-1) );
// it also has complexity of O(logn).


// 2.
let arr1 = [3,16,21,13,43,37,7];
arr1.sort( (a,b) => a-b );
function binaryByRecuring1(arr1,t,left,right) {
  if(left<=right) { 
    mid = Math.floor((left+right)/2);
    if(arr1[mid] === t) {
      return mid;
    }
    if(arr1[mid] < t){
      return binaryByRecuring1(arr1,t,mid+1,right);
    }else{
      return binaryByRecuring1(arr1,t,left,mid-1);
    }
  } else {
    return -1;
  }
}
console.log( binaryByRecuring1(arr1,16,0,arr1.length-1) );
// O(logn).