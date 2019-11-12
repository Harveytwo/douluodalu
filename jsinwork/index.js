// JavaScript 浮点数陷阱及解法：https://github.com/camsong/blog/issues/9
/**
 * 用于转化需要展示结果的
 */
function strip (num, precision = 12) {
    return +parseFloat(num.toPrecision(precision));
}
/**
 * 精确加法，先把小数转为整数再运算
 */
function add (num1, num2) {
    const num1Digits = (num1.toString().split('.')[1] || '').length;
    const num2Digits = (num2.toString().split('.')[1] || '').length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}
