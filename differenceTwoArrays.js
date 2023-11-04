/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
=> answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
=> answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
*/

// My way
var findDifference = function (nums1, nums2) {
  const answer = [[], []];
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      if (answer[0].includes(nums1[i])) {
        continue;
      }
      answer[0].push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) {
      if (answer[1].includes(nums2[i])) {
        continue;
      }
      answer[1].push(nums2[i]);
    }
  }
  return answer;
};

// Another way
/*
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const answer1 = [];
  const answer2 = [];

  for (let n of set1) {
    if (!set2.has(n)) {
      answer1.push(n);
    }
  }

  for (let n of set2) {
    if (!set1.has(n)) {
      answer2.push(n);
    }
  }
  return [answer1, answer2];
};
*/

// const nums1 = [1, 2, 3];
// const nums2 = [2, 4, 6];
const nums1 = [1, 2, 3, 3];
const nums2 = [1, 1, 2, 2];
console.log(findDifference(nums1, nums2));
