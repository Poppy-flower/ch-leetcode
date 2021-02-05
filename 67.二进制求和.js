/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let res = '';

    let aArr = a.split('').reverse().map(item => item - 0);
    let bArr = b.split('').reverse().map(item => item - 0);

    let i = 0, al = a.length;
    let j = 0, bl = b.length;

    let carry = 0;
    while (i < al || j < bl) {

        let m = i < al ? aArr[i] : 0;
        let n = j < bl ? bArr[j] : 0;
        let sum = m + n + carry;
        str = sum % 2;
        res = str + res;
        carry = sum >= 2 ? 1 : 0;
        i++;
        j++;
    }

    if (carry > 0) {
        res = carry + res;
    }

    return res;
};
// @lc code=end
let a = "1111",
    b = "1111";
addBinary(a, b);

