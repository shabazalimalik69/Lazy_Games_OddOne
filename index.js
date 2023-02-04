function findOdd(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    if (obj[A[i]] === undefined) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]]++;
    }
  }
  for (let [k, v] of Object.entries(obj)) {
    if (v % 2 === 1) {
      return k;
    }
  }
}
let A = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
console.log(findOdd(A))
