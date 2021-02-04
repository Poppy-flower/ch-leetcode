/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let res = 0;
    let allNums = [];
    let m = nums1.length;
    let n = nums2.length;

    let i = 0, j = 0;

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            allNums.push(nums1[i]);
            i++;
        } else {
            allNums.push(nums2[j]);
            j++;
        }
    }

    if (i < m) {
        allNums.push(...nums1.slice(i));
    }

    if (j < n) {
        allNums.push(...nums2.slice(j));
    }

    let isOdd = (m + n) % 2 === 1;

    if (isOdd) {
        res = allNums[Math.floor((m + n) / 2)]
    } else {
        res = (allNums[(m + n) / 2 - 1] + allNums[(m + n) / 2]) / 2
    }

    return res;
};
// @lc code=end

findMedianSortedArrays([1, 3], [2]);


