/*
You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|

Example 1:
Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.
*/

// My way
var differenceOfSum = function (nums) {
  let sum = 0;
  let digitSum = 0;
  for (let num of nums) {
    sum += num;
    if (num.toString().length < 1) {
      digitSum += num;
    } else {
      let numStr = num.toString();
      for (let digit of numStr) {
        digitSum += parseInt(digit);
      }
    }
  }
  return Math.abs(sum - digitSum);
};

const arr = [1, 15, 6, 3];
console.log(differenceOfSum(arr)); // => 9

// Another way
// var differenceOfSum = function (nums) {
//   let sumPos = 0;
//   let sumNeg = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sumPos += nums[i];
//     let stringNum = nums[i].toString();
//     for (let j = 0; j < stringNum.length; j++) {
//       sumNeg += parseInt(stringNum[j]);
//     }
//   }

//   return sumPos - sumNeg;
// };
