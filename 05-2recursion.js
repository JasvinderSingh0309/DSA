// return array of n fibonacci numbers using recursion.
function fibo(n) {
  if(n <= 1) {
    return n;
  }else{
    return fibo(n-2) + fibo(n-1);
  }
}
function getFibo(n) {
  let arr = [];
  for(let i=0;i<n;i++) {
    arr.push(fibo(i));
  }
  return arr;
}
console.log(getFibo(8));
