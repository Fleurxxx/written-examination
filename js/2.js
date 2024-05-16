/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-16 15:54:35
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-16 15:54:58
 * @FilePath: \安全鹭笔试\2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 给定字符串 **s**，请翻转字符串中 **单词** 的顺序，
 * 然后依次拼接序号前缀后输出，且只输出字符串长度 ≤ 8 
 * 并且是纯小写字母的单词；
 * 
 * 其中对**单词**的定义是，由连续的纯英文字母组成的字符串；
 *
 * 说明：
 *   1. 字符串 s 中可能包含大小写字母、数字、空格、换行符、特殊符号；
 *   2. 要求实现代码尽可能简洁；
 */

function reverseWords(s) {
    const words = s.match(/\b[a-zA-Z]+\b/g) || [];
    // console.log(words)
    const filter = words.filter(word => word.length <= 8 && /^[a-z]+$/.test(word));
    const reword = filter.reverse();
    return reword.join(' ');
}

console.log(reverseWords("hello world")); 