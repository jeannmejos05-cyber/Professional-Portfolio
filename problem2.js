const assert = require('node:assert'); 

function findTwoSum(nums, target) {
    let result = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        const complement = target - nums[i];
        for (let j = 0; j < i; j++) {
            if (nums[j] === complement) {
                result = [j, i]; 
                return result;  
            }
        }
    }
    return result;
}


function runTest(id, nums, target, expected) {
  try {
    const result = findTwoSum(nums, target);
    assert.deepStrictEqual(result, expected);
    console.log(Test ${id} Passed: [${nums}], target ${target} => [${result}]);
  } catch (err) {
    console.error(Test ${id} Failed: [${nums}], target ${target} | Expected [${expected}] but got [${findTwoSum(nums, target)}]);
  }
}

console.log("Starting Two Sum Validation Tests...\n");

runTest(1, [2, 7, 11, 15], 9, [0, 1]);
runTest(2, [3, 2, 4], 6, [1, 2]);
runTest(3, [3, 3], 6, [0, 1]);

runTest(4, [1, 5, 7, 11], 12, [0, 3]);
runTest(5, [10, 20, 30, 40, 50], 90, [3, 4]);

console.log("\nTests Completed.");
