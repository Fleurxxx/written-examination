/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-15 22:48:18
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-15 22:48:35
 * @FilePath: \vite-project\src\store\home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'

export const useMain = defineStore('main', {
    state: () => {
        return {
          counter: 0,
          name: 'Eduardo',
        }
    },
    getters: {
        doubleCount: (state) => {
            return state.counter * 2
        },
    },
    actions: {
        increment() {
          this.counter++
        },
        randomizeCounter() {
            setTimeout(() => {
                this.counter = Math.round(100 * Math.random())
            }, 0);
        },
    },
})