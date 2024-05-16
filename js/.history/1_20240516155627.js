/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-16 15:54:30
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-16 15:56:25
 * @FilePath: \安全鹭笔试\1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 给定字符串 s，包含 `{} () []` ，如 `{[()]}`, 请实现一个函数，
 * 判断该字符串是否是正确完整嵌套闭合的。
 * 
 * 1. s 中只会包含上述八种字符；
 * 2. 完整闭合嵌套意思是，每个左括号要对应一个同等位置的右括号，
 *    括号间不考虑层级关系含义
 * 
 * 示例：
 * 有效的字符串：{(([]))}, {{}}
 * 无效的字符串：()(), ([)], (())}
 * 
 */

function isClosedString(s) {
    const s1 = [];
    const mp = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i of s) {
        if (i === '(' || i === '{' || i === '[') {
            s1.push(i);
        } else if (i === ')' || i === '}' || i === ']') {
            if (s1.length === 0) {
                return false;
            }
            const end = s1.pop();
            if (end !== mp[i]) {
                return false;
            }
        }
    }

    return s1.length === 0;
}

console.log(isClosedString("{[()]}")); 