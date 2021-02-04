/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let res = [];

    let i = 0;  //指针
    let l = nums.length;

    while (i < l) {
        let low = i;

        i++;
        //值递增的话，指针后移
        while (i<l && (nums[i-1]+1 === nums[i])) {  
            i++;
        }

        let high = i - 1;
        if (low < high) {
            res.push(`${nums[low]}->${nums[high]}`);
        } else {
            res.push(`${nums[low]}`);
        }
    }

    return res;
};
// @lc code=end

summaryRanges([0, 1, 2, 4, 5, 7]);

