// add whatever parameters you deem necessary
function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let ave = (arr[start] + arr[end]) / 2;
    if (ave === target) {
      return true;
    } else if (ave < target) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
