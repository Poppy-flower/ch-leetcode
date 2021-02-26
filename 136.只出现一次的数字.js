/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let single = 0;
    nums.map(item => {
        single = single ^ item;
    })
    return single;
};
// @lc code=end

