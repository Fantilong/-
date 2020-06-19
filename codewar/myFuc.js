/*
 * @Author: your name
 * @Date: 2020-06-19 19:19:38
 * @LastEditTime: 2020-06-19 19:42:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /coding_practice/codewar/myFuc.js
 */
(function(w) {
    /**
     * @description: 求数字的位数和，指导位数为1 ex: 1234 --> 10 --> 1
     * @param {Number} 
     * @return: {Number}
     */
    function digital_root(n) {
        // 参数判定
        if (!Number.isInteger(n)) {
            return '参数错误';
        }

        n += ''; // 变成字符串
        // 遍历字符串
        for (var i = 0, len = n.length; i < len; i++) {
            console.log(n[i]);
        }
    }

}(window));