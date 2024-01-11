// 1.
function fact(n) {
  if(n<0 || n === undefined) {
    console.log('No factorial is possible!!');
  }
  else {
    let ft=1;
    for(let i=2;i<=n;i++) {
      ft *= i;
    }
    console.log(ft);
  } 
}
fact(5);
// O(n)