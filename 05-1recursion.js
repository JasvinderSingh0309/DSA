// Sum of natural numbers.
function sumNatural(n) {
  if( n === 1) {
    return 1;
  } 
  n = n + sumNatural(n-1);
  return n;
}
// console.log(sumNatural(2));
// O(n)


// Factorial.
function fact(n) {
  if(n === undefined || n<0) {
    return 'Invalid Input';
  }
  if(n === 0) {
    return 1;
  }
  n = n * fact(n-1);
  return n;
}
// console.log(fact(5));
// function is called n times ,therefore complexity is O(n).


// Fibonacci.
function fibo(n) {
  if(n<1 || n === undefined) {
    return 'Invalid input';
  }
  // if(n === 1) 
  //   return 0;
  // if(n === 2) 
  //   return 1;

  if(n <= 2) {
    return n-1;
  }
  n = fibo(n-2) + fibo(n-1);
  return n;
}
console.log(fibo(8));
// O(n), is not its complexity, as for n=4 it runs 4times, for n=5 its 8times.
// therefore its complexity is O(2^n), which is worst than iterative solution.