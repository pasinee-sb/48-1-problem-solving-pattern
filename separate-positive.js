// add whatever parameters you deem necessary
function separatePositive(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] < 0 && nums[end] > 0) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      start += 1;
      end -= 1;
    } else {
      if (nums[start] > 0) start += 1;
      else end -= 1;
    }
  }
  return nums;
}
console.log(separatePositive([2, -1, -3, 6, -8, 10]));
console.log(separatePositive([5, 10, -15, 20, 25]));
console.log(separatePositive([-5, 5]));
console.log(separatePositive([1, 2, 3]));
