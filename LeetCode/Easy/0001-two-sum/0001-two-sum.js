/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let firstIndex = 0;
  let lastIndex = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    for (let j = i + 1; j < nums.length + 1; j++) {
      if (nums[i] + nums[j] == target) {
        firstIndex = i;
        lastIndex = j;
        break;
      }
    }
  }
  return [firstIndex, lastIndex];
};