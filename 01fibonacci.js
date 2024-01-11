// 1.
function fibo(n) {
  if(n === 0){
    console.log('No number is possible!!');
  }
  else {
      if(n >= 1) {
      console.log(0);
    }
    if(n >= 2) {
      console.log(1);
    }
    if(n > 2) {
      let c;
      let a=0;
      let b=1;
      for(let i=3;i<=n;i++) {
        c = a+b;
        console.log(c);
        a=b;
        b=c;
      }
    }
  }
}
// fibo(11);

// 2.
function fibo1(n) {
  let arr = [];
  if(n === 0 || n === undefined){
    console.log('No number is possible!!');
  }
  else {
    if(n >= 1) {
      arr.push(0);
    }
    if(n >= 2) {
      arr.push(1);
    }
    if(n > 2) {
      for(let i=2;i<n;i++) {
        // arr.push( (arr[i-2]+arr[i-1]) );
        arr[i] = arr[i-2] + arr[i-1]; // same as above.
      }
    }
    console.log(arr);
  }
}
fibo1(5);
// Both 1. and 2. has O(n) complexity, as they have one loop.