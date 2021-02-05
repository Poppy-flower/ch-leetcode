/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * 三数之和：
 *  数组排序
 *  遍历一遍数组 i下标
 *  left左指针 = i+1; right右指针=数组结尾；
 * 
 * 
 *  nums[i] + nums[left] + nums[right] >0 right左移；
 *  小于0，left指针后移；
 *  找到了 双指针同时收缩
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => { return a - b; });
    console.log(nums);
    let res = [];

    //如果数组小于3项，直接返回
    if (!nums || nums.length < 3) {
        return res;
    }
    
    for (let i = 0, l = nums.length; i < l; i++){
        //排序之后，如果第一个都是大于0的，则无法找到合适的结果，直接返回
        if (nums[0] >0) {
            break;
        }

        //去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1,
            right = l - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum<0) {
                left++;
            } else if(sum>0){
                right--;
            } else {
                res.push([nums[i], nums[left], nums[right]]);

                //这个地方对right和left也进行一次去重
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                //两侧指针同时收缩
                right--;
                left++;
            }
        }
    }

    return res;
};
// @lc code=end

threeSum([-1, 0, 1, 2, -1, -4]);

