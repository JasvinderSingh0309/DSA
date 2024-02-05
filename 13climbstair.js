// 1. to climb to step n, we can go from either (n-1)th step or (n-2)nd step, there is no other way!!
function climbStairs(n) {
  if(n < 3) {
    return n;
  }
  return climbStairs(n-2) + climbStairs(n-1);
}
console.log(climbStairs(7));
// O(2^n), which is very inefficient.


// 2. optimized one, just storing the calculated value in an object, to avoid recalculation for the same value of n.
function ClimbStair(n, remember = {}) {
  if(n < 3) {
    return n;
  }

  if( !(n in remember) ) {
    remember[n] = ClimbStair(n-2,remember) + ClimbStair(n-1,remember);
  }

  return remember[n];
}
console.log(ClimbStair(7));
// O(n), which is great.


//-------------------------------------------------------------------
let obj = {
  a:'nasa',
  1:'isro'
}
// console.log(a in obj); // ND
console.log('a' in obj);
console.log(1 in obj);
console.log('1' in obj); // but here both are true for number.