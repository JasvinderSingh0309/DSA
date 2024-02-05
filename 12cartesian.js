function cartesianPro(set1 , set2) {
  let cartProduct = [];
  for(let i=0;i<set1.length;i++) {
    for(let j=0;j<set2.length;j++) {
      cartProduct.push([set1[i],set2[j]]);
    }
  }
  return cartProduct;
}
console.log(cartesianPro( [1,2] , [3,4,5] ));
// O(n^2) , which is not the case, because the arrays can be of different lengths, therefore
// O(n*m), this is the correct complexity of the solution.
// cannot optimize further.