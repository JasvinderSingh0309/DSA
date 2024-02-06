function climbStair(n) {
  let noOfWays = [1,2];
  for(let i=2;i<n;i++) {
    noOfWays[i] = noOfWays[i-2] + noOfWays[i-1];
  }
  return noOfWays[n-1];
}
console.log(climbStair(5));
// O(n), which is good.