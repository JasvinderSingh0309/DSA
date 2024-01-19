// 1.
function isPrime(n) {
  if(n<2 || n === undefined) {
    return 'Invalid input';
  }
  for(let i=2;i<=Math.sqrt(n);i++) {
    if(n%i === 0) {
      return 'not Prime.';
    }
  }
  return 'is Prime.';
}
console.log(isPrime(8));
// O(√n) 