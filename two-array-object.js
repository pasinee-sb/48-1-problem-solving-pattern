// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  const myObj = {};
  for (let i = 0; i < arr1.length; i++) {
    myObj[arr1[i]] = arr2[i] || null;
  }
  return myObj;
}
console.log(twoArrayObject(["a", "b", "c", "d"], [1, 2, 3]));
console.log(twoArrayObject(["a", "b", "c"], [1, 2, 3, 4]));
console.log(twoArrayObject(["x", "y", "z"], [1, 2]));
