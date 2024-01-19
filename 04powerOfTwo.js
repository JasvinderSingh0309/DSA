// 1.
function isPowerOfTwo(n) {
  if(n<1 || n===undefined) {
    return 'Invalid input!';
  }
  while(n>1) {
    if(n%2 === 1) {
      return false;
    }
    n=n/2;
  }
  return true;
}
// console.log(isPowerOfTwo(12));
// O(log n) , as input size is reducing by half in each loop.


// 2.
function isPowerOfTwoBitwise(n) {
  if(n<1 || n===undefined) {
    return 'Invalid input!';
  }
  return (n & (n-1)) === 0; // perform bitwise operation on nos., convert result to decimal and check.
}
console.log(isPowerOfTwoBitwise(12));
// O(1), irrespective of the input.