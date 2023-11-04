/*
Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:
input: [2,34,567,7890,0,19]
output: 3
Explanation:
2 contains only 1 digit (odd number of digits)
34 contains 2 digits (even number of digits)
567 contains 3 digits (odd number of digits)
7890 contains 4 digits (even number of digits)
0 contains only 1 digit (odd number of digits)
19 contains 2 digits (even number of digits)
*/

var findNumbers = function (nums) {
  let countEvenNumbers = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      countEvenNumbers++;
    }
  }
  return countEvenNumbers;
};

const case1 = [12, 345, 2, 6, 7896];
console.log(findNumbers(case1)); // => 2
