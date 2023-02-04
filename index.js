function oddOne(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] === undefined) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]]++;
    }
  }
  for (let [k, v] of Object.entries(obj)) {
    if (v % 2 === 1) {
      console.log(k);
    }
  }
}
let array = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
oddOne(array);
