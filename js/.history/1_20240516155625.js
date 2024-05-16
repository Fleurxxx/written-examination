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