/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-05-15 22:28:01
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-05-15 22:35:09
 * @FilePath: \vite-project\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
 
 //routes
 import router from "./routes/index"; 
 
const app= createApp(App)
 
 //routes 
 app.use(router)  
app.mount('#app')