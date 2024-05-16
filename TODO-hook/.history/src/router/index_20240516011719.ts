/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-15 22:31:40
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-16 01:16:57
 * @FilePath: \vite-project\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
 
const routes: Array<RouteRecordRaw> = [
let routes= [
    {
        path: '/',
        name: 'home',
        component: () => import('../view/Home.vue'),
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router 