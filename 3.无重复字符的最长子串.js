/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 无重复字符的最长子串
 * 双指针
 * 
 * 整个集合：记录每个字符是否出现过
 * 
 * 左指针i, 无重复字符的右指针rk
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = s.length;
    let occ = new Set();

    let ans = 0;

    //右指针初始值为-1，相当于我们在字符串左侧，还未开始移动
    let rk = -1; 
    for (let i = 0; i < l; i++){
        // 左指针向右移动一个，就删除一个
        if (i !== 0) {
            occ.delete(s[i - 1]);
        }

        // 无重复字符 && 右指针没到结束为止，就存字符; 更新最长无重复子串位置
        // 否则本次循环结束
        while (rk + 1 < l && !occ.has(s[rk+1])) {
            occ.add(s[rk + 1]);
            rk++;
        }

        // 每轮结束，从i到rk是最长的
        ans = Math.max(ans, rk - i + 1);
    }

    return ans;
};
// @lc code=end

lengthOfLongestSubstring("pwwkew");

